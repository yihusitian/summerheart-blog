# Java发展大事件

- 1991年4月，Java语言的前身Oak诞生

- 1995年5月23日，Oak语言更名为Java，Java1.0发布

- 1996年1月23日，Java语言的第一个正式版本JDK1.0发布

  > JDK1.0使用Sun Classic VM，是一个纯解释执行的Java虚拟机，JDK1.0主要包括Java虚拟机、Applet、AWT

- 1996年5月底，首届JavaOne技术大会，JavaOne技术大会自此开始每年一度召开

- 1997年2月19日，JDK1.1发布。同年，Sun公司收购Longview Techno-logies 公司，获得Hotspot虚拟机

  > JDK1.1版本引入了JAR文件格式、JavaBeans、内部类、反射、JDBC、RMI

- 1998年12月4日，JDK1.2发布，Java技术体系划分为J2SE、J2ME、J2EE三个方向

  > JDK1.2中首次引入了JIT即时编译器，并在这个版本中并存了三款虚拟机Classic VM、Hotspot VM、Exact VM(只在Solaris平台出现过) 。Hotspot VM 和 Exact VM是内置了即时编译器的，Classic VM只能以外挂形式使用JIT即时编译器。 
  >
  > JDK1.2版本中引入了EJB、JavaPlugin-in、Java IDL、Swing、集合类

- 1999年4月27日，Hotspot虚拟机正式诞生，之前只作为附属程序存在

- 2000年5月8日，JDK1.3发布，Hotspot虚拟机称为此版本及其以后版本的默认虚拟机

  > JDK1.3 JNDI成为平台级服务；改进数学运算和Timer API、Java 2D API增强

- 2002年2月13日，JDK1.4发布, Java逐渐走向成熟

  > JDK1.4引入了表达式、异常链、NIO、XML解析器、XSLT转换器、日志类

- 2004年9月30日，JDK5发布，自此Sun公司改用大版本

  > JDK1.5引入了 泛型、foreach、自动装箱拆箱、动态注解、枚举、可变长参数。改进JMM内存模型，引入了JUC并发包

- 2006年11月13日，Sun公司宣布计划Java开源，OpenJDK和SunJDK本质上不无二致

- 2006年12月6日，JDK6发布，JAVAME、JAVASE、JAVAEE的新命名替换了原有三个产品线的命名方式

  > JDK6对虚拟机内部大量改进，同步、锁、垃圾收集、类加载各个方面均有涉及

- 2009年2月19日，JDK7第一个里程碑版本完成，Sun公司在这一年内忧外患，股价大跌，JDK7开发计划一拖再拖

- 2009年4月20日，Oracle花费74亿美元收购市值曾超2000亿美金的Sun公司

  > Oracle此前已经收购了BEA公司，收购完Sun公司以后，便拥有了世界上三大商用虚拟机中的两个JRockit和Hotspot VM

- ​	2014年3月18日，JDK8发布

  > JDK8引入了Lambda表达式，支持函数式编程，新的日期、时间API、彻底移除了Hotspot虚拟机的永久代等等

- 2017年9月21日，JDK9发布，Oracle的版本发布维护策略也做了修改

  > Oracle为了解决一个版本中绑定过多功能特性而引发交付风险的问题，在每年3月和9月各发布一个版本，但是只会针对LTS（Long Term Support）版本提供三年的更新和支持，其他版本只有6个月的生命周期，JDK8、JDK11、JDK17都是LTS版本 JDK9引入了Jigsaw、增强了若干工具(JS Shell、JLink、JHSDB等)，整顿了 HotSpot各个模块各自为战的日志系统，支持HTTP 2客户端API

- 2018年3月20日，JDK10发布

  > JDK10主要研发目标是内部重构，诸如统一源仓库、统一垃圾收集器接口、统一即时编译器接口 引入新的Graal即时编译 器

- 2018年3月27日，Android的Java侵权案，Oracle胜诉，获赔Google的88亿美金赔偿，Oracle白嫖一个Sun公司

- 2018年3月，JavaEE被Oracle扫地出门，捐给了Eclipse基金会，JavaEE自此改名Jakarta EE

- 2018年9月25日，JDK11发布，Oracle宣布自此以后会发布OpenJDK和OracleJDK两个版本

  > OpenJDK可以免费在开发、测试或生产环境中使用，但是只有半年时间的更新支持; OracleJDK个人依然可以免费使用，但若在生产环境中商用就必须付费，可以有三年时间的更新支持 这两个JDK在源码和功能上几乎是一样的
  >
  > JDK引入革命性的垃圾收集器ZGC

- 2018年10月JavaOne最后一届大会在旧金山举行，Oracle将此大会裁撤
- 2019年2月，RedHat从Oracle手中接管了OpenJDK8和OpendJDK11的管理和维护职责
- 2019年3月20日，JDK12发布