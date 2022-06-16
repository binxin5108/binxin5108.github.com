(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{554:function(v,_,t){"use strict";t.r(_);var s=t(22),a=Object(s.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("iframe",{attrs:{src:v.$withBase("/markmap/mysql-basic-arch.html"),width:"100%",height:"400",frameborder:"0",scrolling:"No",leftmargin:"0",topmargin:"0"}}),v._v(" "),t("p",[v._v("假如有个最简单的表，表里只有一个ID字段，那么如下语句是怎么执行的？")]),v._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("select")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("*")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("from")]),v._v(" T "),t("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("where")]),v._v(" ID"),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[v._v("10")]),v._v("；\n")])])]),t("p",[v._v('这里不讨论语句具体执行的细节，而是从高维度理解语句的执行步骤是怎样的，进而了解 MySQL 的 "零件"。')]),v._v(" "),t("p",[v._v("下面给出 MySQL 的基本架构图：")]),v._v(" "),t("img",{staticStyle:{zoom:"60%"},attrs:{src:"http://img.zhoubg.cn/static/image-20220106111519471.png",alt:"image-20220106111519471"}}),v._v(" "),t("p",[v._v("可以看出 MySQL 分为 "),t("strong",[v._v("Server 层")]),v._v("和 "),t("strong",[v._v("存储引擎层")]),v._v("。")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("Server 层")]),v._v(" "),t("ul",[t("li",[v._v("包括连接器、查询缓存、分析器、优化器、执行器，涵盖大多数核心功能")]),v._v(" "),t("li",[v._v("所有内置函数（如日期、时间、数字和加密函数等）")]),v._v(" "),t("li",[v._v("所有跨存储引擎功能")])])]),v._v(" "),t("li",[t("p",[v._v("存储引擎层")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("负责数据存储和提取")])]),v._v(" "),t("li",[t("p",[v._v("插件式：支持 "),t("code",[v._v("InnoDB")]),v._v("、"),t("code",[v._v("MyISAM")]),v._v("、"),t("code",[v._v("Memory")]),v._v("等多个存储引擎，5.5.5 版本开始默认"),t("code",[v._v("InnoDB")])]),v._v(" "),t("p",[t("code",[v._v("create table")]),v._v(" 语句中使用 "),t("code",[v._v("engine=memory")]),v._v(" 指定，不指定默认"),t("code",[v._v("InnoDB")])])]),v._v(" "),t("li",[t("p",[v._v("不同存储引擎共用一个Server层")])])])])]),v._v(" "),t("p",[v._v("接下来回到开头的 Sql 语句，通过语句依次走过的过程分析上述每个组件的作用。")]),v._v(" "),t("h2",{attrs:{id:"连接器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#连接器"}},[v._v("#")]),v._v(" 连接器")]),v._v(" "),t("p",[v._v("要执行语句，首先要连上数据库，这时接待的就是连机器。")]),v._v(" "),t("p",[v._v("连接器负责跟客户端"),t("strong",[v._v("建立连接、获取权限、维持和管理连接")]),v._v("。")]),v._v(" "),t("p",[v._v("客户端和服务端建立连接的命令：")]),v._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[v._v("mysql "),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("-")]),v._v("h$ip "),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("-")]),v._v("P$port "),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("-")]),v._v("u$"),t("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("user")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("-")]),v._v("p$password\n")])])]),t("p",[v._v("经过TCP三次握手后，连接器开始认证你的身份：用户名和密码")]),v._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[v._v("注意")]),v._v(" "),t("p",[v._v("如果用户名和密码不对，会返回"),t("code",[v._v("Access denied for user")]),v._v("的错误，客户端结束执行")])]),v._v(" "),t("p",[v._v("身份认证通过，连机器从权限表查出用户用户的权限，后续该连接上的权限判断都依赖此时读到的权限")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("提示")]),v._v(" "),t("p",[v._v("一个用户成功建立连接后，即使你用管理员账号对这个用户的权限做了修改，也不会影响已经存在连接的权限。修改完成后，只有再新建的连接才会使用新的权限设置。")])]),v._v(" "),t("p",[v._v("连接完成，如果没有后续动作，连接就处于空闲状态，可以通过\t"),t("code",[v._v("show processlist")]),v._v(" 命令查看：")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://img.zhoubg.cn/static/image-20220106142404395.png",alt:"image-20220106142404395"}})]),v._v(" "),t("p",[v._v("其中 Command 列中的 "),t("code",[v._v("sleep")]),v._v(" 表示该连接是空闲的。")]),v._v(" "),t("p",[v._v("连接客户端如果太长时间没动作，连接器会自动将他断开。这个时间有参数 "),t("code",[v._v("wait_timeout")]),v._v(" 控制，默认8小时。")]),v._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[v._v("注意")]),v._v(" "),t("p",[v._v("如果连接断开了，客户端在发送请求，会受到错误提醒："),t("code",[v._v("Lost connection to MySQL server during query。")])])]),v._v(" "),t("h3",{attrs:{id:"长连接和短连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#长连接和短连接"}},[v._v("#")]),v._v(" 长连接和短连接")]),v._v(" "),t("ul",[t("li",[v._v("长连接：指连接成功后，如果客户端持续有请求，则一直使用同一个连接")]),v._v(" "),t("li",[v._v("短连接：指每次执行完很少的几次查询就断开连接，下次查询再重新建立一个")])]),v._v(" "),t("p",[v._v("建立连接过程复杂耗费资源，所以要尽量使用长连接。")]),v._v(" "),t("p",[v._v("但长连接会有占用内存涨得快的问题。")]),v._v(" "),t("blockquote",[t("p",[v._v("原因：MySQL 在执行过程中临时使用的内存是管理在连接对象中，这些资源只有在连接断开时候才释放。")])]),v._v(" "),t("p",[v._v("如何解决？两种方案：")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("定期断开长连接")]),v._v(" "),t("p",[v._v("使用一段时间，或者程序判断执行一个占用内存的大查询后，断开连接，之后要查询重连。")])]),v._v(" "),t("li",[t("p",[v._v("使用 "),t("code",[v._v("mysql_reset_connection")]),v._v(" 来重新初始化连接资源")]),v._v(" "),t("p",[v._v("要求是MySQL 5.7 或更新版本，可以在每次执行一个比较大的操作后，通过执行"),t("code",[v._v("mysql_reset_connection")]),v._v(" 来重新初始化连接资源，此过程不需要重连和重做权限验证，但会将连接恢复到刚刚创建完的状态。")])])]),v._v(" "),t("h2",{attrs:{id:"查询缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询缓存"}},[v._v("#")]),v._v(" 查询缓存")]),v._v(" "),t("p",[v._v("建立好连接之后，就可以执行 select 语句了。执行逻辑来到第二步：查询缓存")]),v._v(" "),t("p",[v._v("MySQL 拿到一个查询请求后，先到缓存中查找：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("缓存命中")]),v._v(" "),t("p",[v._v("说明之前执行过这条语句，并以key-value的形式缓存在内存中，key 为查询的语句，value 为查询的结果。如果能从缓存中找到 key ，那么这个 value 就会被直接返回客户端")])]),v._v(" "),t("li",[t("p",[v._v("缓存不命中")]),v._v(" "),t("p",[v._v("缓存中不存在，继续执行后面的阶段。执行完后，将结果存入查询缓存中")])])]),v._v(" "),t("p",[v._v("如果命中缓存，MySQL 就不需要执行后面的复杂查找了，效率会很高。")]),v._v(" "),t("p",[t("strong",[v._v("但是大部分情况下不建议使用查询缓存。因为查询缓存往往弊大于利。")])]),v._v(" "),t("p",[v._v("原因：")]),v._v(" "),t("ul",[t("li",[v._v("失效非常频繁：对一个表更新，表上所有查询缓存都会被清空")]),v._v(" "),t("li",[v._v("命中率低：对于更新压力大的库来说，命中率非常低")])]),v._v(" "),t("p",[v._v("按需使用：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("将参数 "),t("code",[v._v("query_cache_type")]),v._v(" 设置成 "),t("code",[v._v("DEMAND")]),v._v(", SQL 语句默认不使用查询缓存")])]),v._v(" "),t("li",[t("p",[v._v("用 "),t("code",[v._v("SQL_CACHE")]),v._v("显式指定显示指定要使用查询缓存的语句：")]),v._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("select")]),v._v(" SQL_CACHE "),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("*")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("from")]),v._v(" T "),t("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("where")]),v._v(" ID"),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[v._v("10")]),v._v("；\n")])])])])]),v._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[v._v("注意")]),v._v(" "),t("p",[v._v("MySQL 8.0 版本直接将查询缓存的整块功能删掉了，也就是说 8.0 开始彻底没有这个功能了。")])]),v._v(" "),t("h2",{attrs:{id:"分析器-做什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分析器-做什么"}},[v._v("#")]),v._v(" 分析器-做什么")]),v._v(" "),t("p",[v._v("如果上一步没有命中缓存，就要开始真正执行语句了")]),v._v(" "),t("p",[v._v("执行前，先要解析你的 SQL 语句，先知道你要做什么")]),v._v(" "),t("p",[v._v("分析器依次进行"),t("strong",[v._v("词法分析、语法分析")])]),v._v(" "),t("ul",[t("li",[t("p",[v._v("词法分析：分析器解析输入的 SQL 里每个字符串分别是什么，代表什么")]),v._v(" "),t("blockquote",[t("p",[v._v('例如："select" 关键字识别出是查询语句、字符串"T"识别成"表名T"、字符串"ID" 识别成成"列ID"')])])]),v._v(" "),t("li",[t("p",[v._v("语法分析：分析器根据语法规则，判断输入的 SQL 是否满足 MYSQL 语法")]),v._v(" "),t("blockquote",[t("p",[v._v("语句不对的话一般会收到“you have a error in your SQL syntax” 错误提示")])])])]),v._v(" "),t("h2",{attrs:{id:"优化器-怎么做"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优化器-怎么做"}},[v._v("#")]),v._v(" 优化器-怎么做")]),v._v(" "),t("p",[v._v("经过分析器，知道到了你要做什么，在开始执行前还要经过优化器处理，决定怎么做：")]),v._v(" "),t("ul",[t("li",[v._v("决定使用哪个索引：表里存在多个索引，优化器决定使用哪个")]),v._v(" "),t("li",[v._v("决定表的连接顺序：一个语句有多个表关联（join）时，决定各个表的关联顺序")])]),v._v(" "),t("h2",{attrs:{id:"执行器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行器"}},[v._v("#")]),v._v(" 执行器")]),v._v(" "),t("p",[v._v("MYSQL 通过分析器知道了做什么，然后通过优化器知道了怎么做，接下来就是进入执行器阶段，开始执行语句了。")]),v._v(" "),t("p",[v._v("执行前，先判断用户对表T有没查询权限，如果没权限，则返回没权限的错误")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("提示")]),v._v(" "),t("p",[v._v("命中缓存的时候，查询缓存返回结果时，会做权限判断")]),v._v(" "),t("p",[v._v("查询也会在优化器之前调用 precheck 验证权限")])]),v._v(" "),t("p",[v._v("如果有权限，打开表 T 继续执行。打开表时，执行器根据表的引擎定义，去使用这个引擎提供的接口")]),v._v(" "),t("p",[v._v("假设表 T 引擎是 InnoDB：")]),v._v(" "),t("ol",[t("li",[v._v("调用引擎接口取表的第一行，判断 ID 是否等于 10，不是则跳过，是则将这行存在结果集中")]),v._v(" "),t("li",[v._v("调用引擎接口取下一行，重复相同判断逻辑，知道取到表的最后一行")]),v._v(" "),t("li",[v._v("执行器将上述遍历中满足条件的行组成的记录集作为结果集返回给客户端")])])])}),[],!1,null,null,null);_.default=a.exports}}]);