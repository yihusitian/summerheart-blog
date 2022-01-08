# Thread之join方法详解  

### 简介
join()方法是Thread类中的一个方法，该方法的定义是等待该线程终止。调用join()方法会把调用线程挂起，直到被调用的对象完成它的执行。

### 使用场景
当需要指定的几个线程串行执行任务时，可以使用join方法来实现。

### 代码实例
```
    /**
     * 实现：使用join让三个线程顺序执行
     */
    @Test
    public void testJoin() {
        final Thread thread1 = new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println("thread1 is running!");
            }
        });
        final Thread thread2 = new Thread(new Runnable() {
            @Override
            public void run() {
                try {
                    //当前线程thread2会被挂起，直到thread1执行完成
                    thread1.join();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                } finally {
                    System.out.println("thread2 is running!");
                }
            }
        });
        Thread thread3 = new Thread(new Runnable() {
            @Override
            public void run() {
                try {
                    //当前线程thread3会被挂起，直到threa2执行完成
                    thread2.join();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                } finally {
                    System.out.println("thread3 is running!");
                }
            }
        });
        thread1.start();
        thread2.start();
        thread3.start();
    }
```
### 实例运行结果
```
thread1 is running!
thread2 is running!
thread3 is running!
```
可以看到，在thread2和thread3的run方法中分别去调用thread1和thread2的join方法，最终的运行结果是我们期待的。

### 源码角度分析join的实现原理

#### 1.Thread.join()方法源码

```
    //Thread的join方法中调用了另外一个有参数的重载方法
    public final void join() throws InterruptedException {
        //调用同名方法，入参为整数0
        join(0);
    }
```

```    
    //该方法被synchronized关键字修饰，标识为一个同步方法
    public final synchronized void join(long millis) throws InterruptedException {
        long base = System.currentTimeMillis();
        long now = 0;

        if (millis < 0) {
            throw new IllegalArgumentException("timeout value is negative");
        }

        if (millis == 0) {
            //这里while循环判断当前thread对象是否处于存活状态，满足条件则进入while代码块
            while (isAlive()) {
                //这里调用了Object的wait方法，此方法会挂起当前的调用者线程，并让出锁对象
                wait(0);
            }
        } else {
            while (isAlive()) {
                long delay = millis - now;
                if (delay <= 0) {
                    break;
                }
                //这里为有时间限制的线程挂起
                wait(delay);
                now = System.currentTimeMillis() - base;
            }
        }
    }
```
```
    //重载方法，同样synchronized关键字修饰
    public final synchronized void join(long millis, int nanos) throws InterruptedException {

        if (millis < 0) {
            throw new IllegalArgumentException("timeout value is negative");
        }

        if (nanos < 0 || nanos > 999999) {
            throw new IllegalArgumentException(
                                "nanosecond timeout value out of range");
        }

        if (nanos >= 500000 || (nanos != 0 && millis == 0)) {
            millis++;
        }

        //最终调用的也是有一个参数的重载方法
        join(millis);
    }
```

```
    //isAlive方法为一个本地方法，调用此方法判断当前thread对象是否存活
    public final native boolean isAlive();
```
---
#### 2.JVM中线程退出时的Cpp源码
```
void JavaThread::exit(bool destroy_vm, ExitType exit_type) {
    assert(this == JavaThread::current(), "thread consistency check");
    ...
    // Notify waiters on thread object. This has to be done after exit() is called
    // on the thread (if the thread is the last thread in a daemon ThreadGroup the
    // group should have the destroyed bit set before waiters are notified).
    ensure_join(this);
    assert(!this->has_pending_exception(), "ensure_join should have cleared");
...
```
```
static void ensure_join(JavaThread* thread) {
  // We do not need to grap the Threads_lock, since we are operating on ourself.
  Handle threadObj(thread, thread->threadObj());
  assert(threadObj.not_null(), "java thread object must exist");
  ObjectLocker lock(threadObj, thread);
  // Ignore pending exception (ThreadDeath), since we are exiting anyway
  thread->clear_pending_exception();
  // Thread is exiting. So set thread_status field in  java.lang.Thread class to TERMINATED.
  java_lang_Thread::set_thread_status(threadObj(), java_lang_Thread::TERMINATED);
  // Clear the native thread instance - this makes isAlive return false and allows the join()
  // to complete once we've done the notify_all below
  //这里是清除native线程，这个操作会导致isAlive()方法返回false
  java_lang_Thread::set_thread(threadObj(), NULL);
  lock.notify_all(thread);//注意这里
  // Ignore pending exception (ThreadDeath), since we are exiting anyway
  thread->clear_pending_exception();
}
```

#### 3.源码说明
- 通过如上1中的Java源码中，我们可以看到，join方法最终被调用到的是一个有参数的同步方法，调用者线程需要首先获取同步锁（this对象）。
- while循环的判断条件，isAlive 是一个本地方法，用于判断当前thread对象的对应子线程是否处于存活状态，如果存活，就挂起当前主线程。这个判断条件也间接说明了thread的start方法，需要在join之前被调用。
- join()和join(0)是等价的，表示一直等下去；join(非0)表示等待一段时间。 join(0) 调用了Object.wait(0)，其中Object.wait(0) 会一直等待，直到被notify/中断才返回。
- 三个join重载方法，都被final修饰，表示无法被子类覆写。
- 如上2的JVM源码中描述了线程退出时的执行逻辑，我们会在ensure_join方法中，看到 lock.notify_all(thread); 这行代码，这里会通过notify_all方法，唤醒thread对象锁上所有wait的线程。那么之前调用wait的父线程就会被唤醒。从而返回继续执行，而此时while循环的判断条件将会不满足而跳出。