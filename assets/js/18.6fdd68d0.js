(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{510:function(t,v,_){"use strict";_.r(v);var s=_(22),a=Object(s.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[t._v("Redis很快：能以"),_("strong",[t._v("微秒级别")]),t._v("的速度找到数据，并快速完成操作。")]),t._v(" "),_("p",[t._v("快的原因很多，一方面是全部操作在内存完成，另一方面得益于"),_("strong",[t._v("高效的数据结构")]),t._v("。")]),t._v(" "),_("p",[t._v("String、List、Hash、Set、Sorted Set 是值的数据类型，这里说的数据结构是这些数据类型的底层实现。")]),t._v(" "),_("p",[t._v("Redis 有 6 种底层数据结构："),_("strong",[t._v("简单动态字符串、双向列表、压缩列表、哈希表、调表和整数数组")]),t._v("。")]),t._v(" "),_("img",{staticStyle:{zoom:"67%"},attrs:{src:"http://img.zhoubg.cn/static/image-20220608163708481.png",alt:"image-20220608163708481"}}),t._v(" "),_("ul",[_("li",[t._v("String 底层实现只有一种，简单动态字符串")]),t._v(" "),_("li",[t._v("List、Hash、Sorted Set、Set：集合类型，两种底层实现")])]),t._v(" "),_("h2",{attrs:{id:"键值对的底层数据结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#键值对的底层数据结构"}},[t._v("#")]),t._v(" 键值对的底层数据结构？")]),t._v(" "),_("p",[t._v("键的都是String，所以键的底层结构都是简单动态字符串。值的底层数据结构上面也指出了。")]),t._v(" "),_("p",[t._v("那键和值之间用什么结构组织？")]),t._v(" "),_("p",[_("strong",[t._v("Redis 使用了一个哈希表来保存所有键值对")]),t._v("，因为保存了所有的键值对，也称"),_("strong",[t._v("全局哈希表")])]),t._v(" "),_("img",{staticStyle:{zoom:"67%"},attrs:{src:"http://img.zhoubg.cn/static/image-20220608165324437.png",alt:"image-20220608165324437"}}),t._v(" "),_("p",[t._v("每一个哈希桶存储一个键值对 entry")]),t._v(" "),_("p",[t._v("entry 元素保存两个指针：*key、*value，分别指向实际的键值")]),t._v(" "),_("p",[t._v("只需计算key 的哈希值，就能通过O(1) 复杂度快速找到键值对")]),t._v(" "),_("h3",{attrs:{id:"哈希表变慢了-哈希冲突"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#哈希表变慢了-哈希冲突"}},[t._v("#")]),t._v(" 哈希表变慢了--哈希冲突")]),t._v(" "),_("p",[t._v("哈希表中写入数据越来越多时，哈希冲突的问题就不可避免。")]),t._v(" "),_("p",[t._v("Redis 的解决方式：")]),t._v(" "),_("p",[_("strong",[t._v("链式哈希")]),t._v("，同一个哈希桶中的多个元素用一个链表来保存，它们之间依次用指针连接")]),t._v(" "),_("img",{staticStyle:{zoom:"67%"},attrs:{src:"http://img.zhoubg.cn/static/image-20220608173022510.png",alt:"image-20220608173022510"}}),t._v(" "),_("p",[t._v("链式哈希存在的问题：哈希冲突链上的元素只能通过指针逐一查找再操作，链变长时效率变降低。")]),t._v(" "),_("p",[t._v("解决方式：")]),t._v(" "),_("p",[_("strong",[t._v("rehash操作")]),t._v("，增加哈希桶数量，让增多的元素在更多的桶中分散保存，减少单个桶的元素数量，从而减少哈希冲突")]),t._v(" "),_("p",[t._v("Redis 默认使用了两个全局哈希表：哈希表1 和 哈希表2，一开始只是用哈希表1，随着数据不断增多，Redis开始rehash，三步骤：")]),t._v(" "),_("ol",[_("li",[t._v("给哈希表2 分配更大的空间，比如哈希表1的两倍")]),t._v(" "),_("li",[t._v("把哈希表1 中的数据拷贝到哈希表2中")]),t._v(" "),_("li",[t._v("释放哈希表1的空间，留做下一次rehash用")])]),t._v(" "),_("p",[t._v("rehash中存在的问题：第2不涉及大量数据拷贝，一次性迁移会造成线程阻塞，此时Redis无法快速访问数据")]),t._v(" "),_("p",[t._v("为了避免上述问题，Redis采用"),_("strong",[t._v("渐进式rehash")]),t._v("：")]),t._v(" "),_("p",[t._v("第2步时，正常处理请求，从哈希表1的第一个索引位置开始，每处理一个请求，就把索引位置的数据拷贝到哈希表2中，下次处理请求时在拷贝下一个索引位置的数据，如图所示：")]),t._v(" "),_("img",{staticStyle:{zoom:"67%"},attrs:{src:"http://img.zhoubg.cn/static/image-20220608203205161.png",alt:"image-20220608203205161"}}),t._v(" "),_("h2",{attrs:{id:"集合类型底层数据结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#集合类型底层数据结构"}},[t._v("#")]),t._v(" 集合类型底层数据结构")]),t._v(" "),_("p",[t._v("String类型：从全局哈希表找到了哈希桶就可以直接增删查改了，复杂度就是哈希表的复杂度O(1)")]),t._v(" "),_("p",[t._v("集合类型：第一步从全局哈希表找到哈希桶位置，第二部是在集合中在增删改查，复杂度取决于集合的底层数据结构")]),t._v(" "),_("p",[t._v("下面聊聊集合类型的底层数据结构和操作复杂度。")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("哈希表")]),t._v("：上文已经讲过了")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("整数数组")]),t._v("和"),_("strong",[t._v("双向列表")]),t._v("：比较常见，顺序读写，逐个元素访问，复杂度 O(N)")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("压缩列表")]),t._v("：类似数组，只是表头有三个字段 zlbytes、zltail 和 zllen，分别表示列表长度、列表尾的偏移量、列表中entry个数；表尾有一个字段 zlend，表示列表结束")]),t._v(" "),_("img",{staticStyle:{zoom:"67%"},attrs:{src:"http://img.zhoubg.cn/static/image-20220608204832412.png",alt:"image-20220608204832412"}}),t._v(" "),_("p",[t._v("找第一或最后一个元素，通过表头三字段至直接定位，复杂度O(1)，其他位置逐个查找，复杂度O(N)")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("跳表")]),t._v("：链表的基础上，"),_("strong",[t._v("增加多级索引，通过索引位置的几个跳转，实现数据的快速定位")])]),t._v(" "),_("img",{staticStyle:{zoom:"67%"},attrs:{src:"http://img.zhoubg.cn/static/image-20220608205853625.png",alt:"image-20220608205853625"}}),t._v(" "),_("p",[t._v("数据量很大时，跳表的复杂度是 O(logN)")])])]),t._v(" "),_("p",[t._v("不同数据结构的时间复杂度：")]),t._v(" "),_("img",{staticStyle:{zoom:"67%"},attrs:{src:"http://img.zhoubg.cn/static/image-20220608211751890.png",alt:"image-20220608211751890"}}),t._v(" "),_("h3",{attrs:{id:"不同操作的时间复杂度"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#不同操作的时间复杂度"}},[t._v("#")]),t._v(" 不同操作的时间复杂度")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("单元素操作")]),t._v("，集合类型中对单个元素增删改查：由集合采用的数据结构决定")]),t._v(" "),_("p",[t._v("Hash类型的HGET、HSET、HDEL，对哈希表操作，复杂度O(1)")]),t._v(" "),_("p",[t._v("Set类型底层结构为哈希表时，SADD、SREM、SRANDMEMBER操作复杂度为O(1)")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("多元素操作")]),t._v("，集合类型支持同时对多个元素进行增删改查：由单元素操作复杂度和元素个数决定")]),t._v(" "),_("p",[t._v("例如Hash的HMGET、HMSET，Set类型的SADD添加多元素，此时操作M个元素的复杂度有O(1)变为O(M)")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("范围操作")]),t._v("，指集合类型中的遍历操作，可以返回集合中的所有或部分数据")]),t._v(" "),_("p",[t._v("Hash：HGETALL")]),t._v(" "),_("p",[t._v("Set: \tSMEMBERS")]),t._v(" "),_("p",[t._v("List: LRANGE")]),t._v(" "),_("p",[t._v("Zset:ZRANGE")]),t._v(" "),_("p",[t._v("操作复杂度一般为O(N)，比较耗时，尽量避免")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("统计操作")]),t._v("，集合类型对集合中所有元素个数的记录")]),t._v(" "),_("p",[t._v("LLEN、SCARD，这类操作复杂度只有O(1)，当集合类型采用压缩列表、双向链表、整数数组这些数\n据结构时，这些结构中专门记录了元素的个数")])]),t._v(" "),_("li",[_("p",[t._v("例外情况，某些数据结构的特殊记录，压缩列表和双向链表都会记录表头和表尾的偏移量，对于 List 类型的 LPOP、RPOP、LPUSH、RPUSH 这四个操作来说，它们是在列表的头尾增删元素，复杂度O(1)")])])]),t._v(" "),_("h2",{attrs:{id:"问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),_("p",[t._v("整数数组和压缩列表在查找时间复杂度方面并没有很大的优势，那为什么 Redis 还会把它们作为底层数据结构呢？")]),t._v(" "),_("p",[t._v("答：")]),t._v(" "),_("p",[t._v("体现了Redis“又快又省”特点中的“省”，也就是节省内存空间。")]),t._v(" "),_("p",[t._v("整数数组和压缩列表在内存中都是连续的内存空间，非常紧凑，没有额外的指针带来的开销")])])}),[],!1,null,null,null);v.default=a.exports}}]);