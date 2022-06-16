(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{546:function(t,a,s){"use strict";s.r(a);var e=s(22),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("Java中 **"),s("code",[t._v("volatile")]),s("strong",[t._v("关键字用于将Java变量标记为“"),s("strong",[t._v("将存储在主存储器中")]),t._v("”。更准确地说，这意味着将对")]),s("code",[t._v("volatile")]),s("strong",[t._v("变量的每次读取都将从计算机的主内存中读取，而不是从CPU缓存中读取，并且对")]),s("code",[t._v("volatile")]),t._v("**变量的每次写入都将写入主存储器中，而不仅是CPU高速缓存中。")]),t._v(" "),s("p",[t._v("实际上，从Java 5开始，**"),s("code",[t._v("volatile")]),s("strong",[t._v("关键字不仅仅保证将")]),s("code",[t._v("volatile")]),t._v("**变量写入主存储器或从主存储器读取。我将在以下各节中进行解释。")]),t._v(" "),s("h1",{attrs:{id:"变量的可见性问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量的可见性问题"}},[t._v("#")]),t._v(" 变量的可见性问题")]),t._v(" "),s("p",[s("code",[t._v("volatile")]),t._v("关键字可确保跨线程更改变量的可见性。这听起来有点抽象，所以让我详细说明。")]),t._v(" "),s("p",[t._v("在多线程应用程序中，线程对"),s("code",[t._v("non-volatile")]),t._v("变量进行操作，出于性能方面的考虑，每个线程在对其进行操作时都可以将变量从主内存复制到CPU缓存中。如果您的计算机包含多个CPU，则每个线程可能在不同的CPU上运行。这意味着，每个线程可以将变量复制到不同CPU的CPU缓存中。这在这里说明：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.zhoubg.cn/static/20200530153630.png",alt:"Threads may hold copies of variables from main memory in CPU caches."}})]),t._v(" "),s("p",[t._v("对于"),s("code",[t._v("non-volatile")]),t._v("变量，无法保证Java虚拟机何时将数据从主存储器读取到CPU缓存中，或何时将数据从CPU缓存写入到主存储器中。 这可能会导致一些问题，我将在以下各节中进行解释。")]),t._v(" "),s("p",[t._v("设想一种情况，两个或多个线程可以访问一个共享对象，该共享对象中声明了一个计数器变量"),s("code",[t._v("counter")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SharedObject")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" counter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("想象一下，只有线程1会递增"),s("code",[t._v("counter")]),t._v("变量，但是线程1和线程2都可能会不时的读取"),s("code",[t._v("counter")]),t._v("变量。")]),t._v(" "),s("p",[t._v("如果"),s("code",[t._v("counter")]),t._v("变量未声明为volatile，则无法保证何时将"),s("code",[t._v("counter")]),t._v("变量的值从CPU高速缓存写回主存储器。 这意味着，CPU缓存中的"),s("code",[t._v("counter")]),t._v("变量值可能与主存储器中的不同。 此处说明了这种情况：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.zhoubg.cn/static/java-volatile-2.png",alt:""}})]),t._v(" "),s("p",[t._v("由于该变量尚未被另一个线程写回到主内存中而导致线程看不到到变量最新值的问题，被称为**“可见性”**问题。 一个线程的更新对其他线程不可见。")]),t._v(" "),s("h1",{attrs:{id:"volatile的可见性保证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#volatile的可见性保证"}},[t._v("#")]),t._v(" "),s("code",[t._v("volatile")]),t._v("的可见性保证")]),t._v(" "),s("p",[t._v("Java中 "),s("code",[t._v("volatile")]),t._v("关键字旨在解决变量可见性问题。 通过声明"),s("code",[t._v("counter")]),t._v("变量为"),s("code",[t._v("volatile")]),t._v("，所有对"),s("code",[t._v("counter")]),t._v("变量的写操作将立即写回到主存储器； 同样，对"),s("code",[t._v("counter")]),t._v("变量的所有读取将直接从主存储器读取。")]),t._v(" "),s("p",[t._v("变量的声明只需要在前面加上"),s("code",[t._v("volatile")]),t._v("关键字：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SharedObject")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("volatile")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" counter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这样将变量声明为"),s("code",[t._v("volatile")]),t._v("就可以保证一个线程对变量写入时对其他线程可见。")]),t._v(" "),s("p",[t._v("在上面给出的方案中，一个线程（T1）修改了"),s("code",[t._v("counter")]),t._v("，而另一个线程（T2）读取了"),s("code",[t._v("counter")]),t._v("（但从未修改过），只要将"),s("code",[t._v("counter")]),t._v("变量声明为"),s("code",[t._v("volatile")]),t._v("就足以保证T2对写入"),s("code",[t._v("counter")]),t._v("变量的可见性。")]),t._v(" "),s("p",[t._v("但是，如果T1和T2都在增加"),s("code",[t._v("counter")]),t._v("变量，那么仅声明计数器变量为"),s("code",[t._v("volatil")]),t._v("e是不够的，这后面再说。")]),t._v(" "),s("h1",{attrs:{id:"完整的volatile可见性保证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#完整的volatile可见性保证"}},[t._v("#")]),t._v(" 完整的"),s("code",[t._v("volatile")]),t._v("可见性保证")]),t._v(" "),s("p",[t._v("实际上，Java "),s("code",[t._v("volatile")]),t._v("的可见性保证超出了"),s("code",[t._v("volatile")]),t._v("变量本身。其他可见性保证如下：")]),t._v(" "),s("ul",[s("li",[t._v("如果线程A写入"),s("code",[t._v("volatile")]),t._v("变量，并且线程B随后读取相同的"),s("code",[t._v("volatile")]),t._v("变量，则在写入"),s("code",[t._v("volatile")]),t._v("变量之前线程A可见的所有变量在读取"),s("code",[t._v("volatile")]),t._v("变量后也将对线程B可见。")]),t._v(" "),s("li",[t._v("如果线程A读取了"),s("code",[t._v("volatile")]),t._v("变量，则在读取"),s("code",[t._v("volatile")]),t._v("变量时线程A可见的所有所有变量也将从主内存中重新读取。")])]),t._v(" "),s("p",[t._v("让我用一个代码示例来说明这一点：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyClass")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" years"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" months\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("volatile")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" days"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" years"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" months"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" days"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("years  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" years"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("months "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" months"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("days   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" days"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v("udpate（）")]),t._v("方法写入了三个变量，其中只有"),s("code",[t._v("days")]),t._v("是声明了"),s("code",[t._v("volatile")]),t._v("的。")]),t._v(" "),s("p",[t._v("完整的"),s("code",[t._v("volatile")]),t._v("的可见性保证意味着，当将一个值写入"),s("code",[t._v("days")]),t._v("时，线程可见的所有变量也将写入主内存， 这意味着，当将值写入"),s("code",[t._v("days")]),t._v("时，"),s("code",[t._v("years")]),t._v("和"),s("code",[t._v("months")]),t._v("的值也将写入主存储器。")]),t._v(" "),s("p",[t._v("在读取"),s("code",[t._v("years")]),t._v("，"),s("code",[t._v("months")]),t._v("和"),s("code",[t._v("days")]),t._v("的值时，您可以这样：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyClass")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" years"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" months\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("volatile")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" days"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("totalDays")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" total "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("days"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        total "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" months "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        total "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" years "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("365")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" total"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" years"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" months"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" days"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("years  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" years"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("months "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" months"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("days   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" days"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("请注意，"),s("code",[t._v("totalDays（）")]),t._v("方法将首先把"),s("code",[t._v("days")]),t._v("的值读入"),s("code",[t._v("total")]),t._v("变量， 当读取"),s("code",[t._v("days")]),t._v("的值时，"),s("code",[t._v("months")]),t._v("和"),s("code",[t._v("years")]),t._v("的值也被读入主存储器。 因此，可以保证按照上述读取顺序查看"),s("code",[t._v("days")]),t._v("，"),s("code",[t._v("months")]),t._v("和"),s("code",[t._v("years")]),t._v("的最新值。")]),t._v(" "),s("h1",{attrs:{id:"指令重排的难题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指令重排的难题"}},[t._v("#")]),t._v(" 指令重排的难题")]),t._v(" "),s("p",[t._v("出于性能原因，允许Java 虚拟机和CPU对程序中的指令进行重新排序，只要指令的语义含义保持不变即可。 例如以下代码：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\na"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nb"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("这些指令可以重新排序为以下顺序，而不会丢失程序的语义：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\na"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nb"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("然而，当变量之一是"),s("code",[t._v("volatile")]),t._v("变量时，指令重排就会产生些问题了。 让我们看一下前面的示例中的"),s("code",[t._v("MyClass")]),t._v("类：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyClass")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" years"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" months\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("volatile")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" days"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" years"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" months"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" days"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("years  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" years"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("months "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" months"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("days   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" days"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("一旦"),s("code",[t._v("update（）")]),t._v("方法将值写入"),s("code",[t._v("days")]),t._v("，则对"),s("code",[t._v("years")]),t._v("和"),s("code",[t._v("months")]),t._v("新写入的值也写入主内存。 但是，如果Java虚拟机对指令进行重排，例如：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" years"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" months"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" days"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("days   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" days"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("months "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" months"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("years  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" years"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("当修改"),s("code",[t._v("days")]),t._v("变量时，"),s("code",[t._v("months")]),t._v("和"),s("code",[t._v("years")]),t._v("的值仍会写入主存储器，但是这一次写入主存储器的值是在将新值写入"),s("code",[t._v("months")]),t._v("和"),s("code",[t._v("years")]),t._v("之前的那个值， 因此，新值无法被其他线程看到（不可见）。这种情况重新排序的指令的语义已经发生更改了。")]),t._v(" "),s("p",[t._v("当然Java有解决此问题的方法，我们将在下一节中看到。")]),t._v(" "),s("h1",{attrs:{id:"happen-before原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#happen-before原则"}},[t._v("#")]),t._v(" "),s("code",[t._v("Happen-Before")]),t._v("原则")]),t._v(" "),s("p",[t._v("为了解决指令重新排序的难题，除了可见性保证之外，"),s("code",[t._v("volatile")]),t._v("关键字还提供了“"),s("code",[t._v("Happen-Before")]),t._v("”保证：")]),t._v(" "),s("ul",[s("li",[t._v("如果对易变变量的写操作最初发生在对"),s("code",[t._v("volatile")]),t._v("变量的写操作之前，则对其他变量的读和写操作不能在写"),s("code",[t._v("volatile")]),t._v("变量后重新排序。\n确保在对"),s("code",[t._v("volatile")]),t._v("变量进行写之前进行的读/写操作在“对"),s("code",[t._v("volatile")]),t._v("变量进行写之前”发生。请注意，例如读/写位于对volatile的写入之后的其他变量，以重新排序发生在对该"),s("code",[t._v("volatile")]),t._v("的写入之前。并非相反。从后到前是允许的，但从前到后是不允许的。")]),t._v(" "),s("li",[t._v("如果读取/写入最初发生在读取"),s("code",[t._v("volatile")]),t._v("变量之后，则对其他变量的读取和写入不能重新排列为在读取"),s("code",[t._v("volatile")]),t._v("变量之前发生。请注意，可能会在读取"),s("code",[t._v("volatile")]),t._v("变量之后重新排列读取"),s("code",[t._v("volatile")]),t._v("变量之前发生的其他变量。并非相反。允许从之前到之后，但不允许从之后到之前。\n上述“先发生后保证”确保强制执行"),s("code",[t._v("volatile")]),t._v("关键字的可见性保证。")])]),t._v(" "),s("h1",{attrs:{id:"挥发性并不总是足够的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#挥发性并不总是足够的"}},[t._v("#")]),t._v(" 挥发性并不总是足够的")]),t._v(" "),s("p",[t._v("即使volatile关键字保证直接从主存储器读取所有volatile变量的读操作，并且将对volatile变量的所有写操作直接写到主存储器，在某些情况下，仍不足以声明volatile变量。")]),t._v(" "),s("p",[t._v("在前面说明的情况下，只有线程1写入共享计数器变量，声明计数器变量volatile足以确保线程2始终看到最新的写入值。")]),t._v(" "),s("p",[t._v("实际上，如果写入变量的新值不依赖于先前的值，则多个线程甚至可能正在写入一个共享的volatile变量，并且仍将正确的值存储在主存储器中。换句话说，如果线程首先将值写入共享的volatile变量，则不需要先读取其值即可找出下一个值。")]),t._v(" "),s("p",[t._v("一旦线程需要首先读取volatile变量的值，并基于该值为共享的volatile变量生成新值，则volatile变量将不再足以保证正确的可见性。读取volatile变量与写入新值之间的时间间隔很短，这造成了竞争状态，其中多个线程可能会读取volatile变量的相同值，为该变量生成一个新值，以及在写入值时返回主内存-覆盖彼此的值。")]),t._v(" "),s("p",[t._v("多个线程递增同一计数器的情况恰好是volatile变量不足的情况。以下各节将更详细地说明这种情况。")]),t._v(" "),s("p",[t._v("想象一下，如果线程1将一个值为0的共享计数器变量读入其CPU高速缓存中，将其递增为1，而不将更改后的值写回到主存储器中。然后，线程2可以从主存储器（该变量的值仍为0）读取相同的计数器变量到其自己的CPU高速缓存中。然后线程2还可将计数器增加到1，也不会将其写回到主存储器。下图说明了这种情况：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://tutorials.jenkov.com/images/java-concurrency/java-volatile-3.png",alt:"Two threads have read a shared counter variable into their local CPU caches and incremented it."}})]),t._v(" "),s("p",[t._v("现在，线程1和线程2实际上不同步。 共享计数器变量的实际值应该为2，但是每个线程在其CPU高速缓存中的变量值均为1，而在主内存中该值仍为0。真是一团糟！ 即使线程最终将共享计数器变量的值写回到主内存，该值也将是错误的。")]),t._v(" "),s("h1",{attrs:{id:"什么时候挥发足够"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么时候挥发足够"}},[t._v("#")]),t._v(" 什么时候挥发足够？")]),t._v(" "),s("p",[t._v("如前所述，如果两个线程都在读取和写入共享变量，那么仅使用volatile关键字是不够的。在这种情况下，您需要使用同步来保证变量的读写是原子的。读取或写入volatile变量不会阻止线程读取或写入。为此，您必须在关键部分周围使用synced关键字。")]),t._v(" "),s("p",[t._v("作为同步块的替代方法，您还可以使用java.util.concurrent包中提供的许多原子数据类型之一。例如，AtomicLong或AtomicReference或其他之一。")]),t._v(" "),s("p",[t._v("如果只有一个线程读取和写入易失变量的值，而其他线程仅读取该变量，则保证读取线程可以看到写入易失变量的最新值。如果不使变量可变，则将无法保证。")]),t._v(" "),s("p",[t._v("volatile关键字保证可以在32位和64个变量上使用。")]),t._v(" "),s("h1",{attrs:{id:"volatile的性能考虑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#volatile的性能考虑"}},[t._v("#")]),t._v(" "),s("code",[t._v("volatile")]),t._v("的性能考虑")]),t._v(" "),s("p",[t._v("读取和写入"),s("code",[t._v("volatile")]),t._v("变量会使该变量被读取或写入主存储器。与访问CPU高速缓存相比，读写主存储器的开销更大。访问"),s("code",[t._v("volatile")]),t._v("变量还可以防止指令重新排序，这是正常的性能增强技术。因此，仅在确实需要增强变量的可见性时才应使用"),s("code",[t._v("volatile")]),t._v("变量。")])])}),[],!1,null,null,null);a.default=n.exports}}]);