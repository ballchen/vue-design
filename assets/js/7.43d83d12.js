(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{175:function(t,s,n){t.exports=n.p+"assets/img/template.d03fa4be.png"},176:function(t,s,n){t.exports=n.p+"assets/img/virtual-dom.6b695177.png"},258:function(t,s,n){"use strict";n.r(s);var a=[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"组件的本质"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件的本质"}},[this._v("#")]),this._v(" 组件的本质")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当我们使用 "),s("code",[this._v("Vue")]),this._v(" 或 "),s("code",[this._v("React")]),this._v(" 时，往往会将页面拆分为各种组件，通过拼装组件来形成页面和应用，就像搭积木一样。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("那么，大家有没有思考过："),s("strong",[this._v('"组件的产出是什么？"')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"组件的产出是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件的产出是什么"}},[this._v("#")]),this._v(" 组件的产出是什么")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在 "),s("code",[this._v("JQuery")]),this._v(" 盛行的年代，比起组件，“模板引擎”的概念要更加流行。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们可以使用 "),s("code",[this._v("lodash.template")]),this._v(" 函数来回忆一下当年是如何用模板开发一个页面的：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" template "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lodash'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" compiler "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<h1><%= title %></h1>'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" html "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("compiler")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("title")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'My Component'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ndocument"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" html\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("模板引擎的概念是："),s("code",[this._v("字符串 + 数据 => html")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("lodash.template")]),this._v(" 函数虽然称不上是“引擎”，但足以说明问题。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们将模板字符串传递给 "),s("code",[this._v("template")]),this._v(" 函数，该函数返回一个编译器 "),s("code",[this._v("compiler")]),this._v("，只要把数据传入 "),s("code",[this._v("compiler")]),this._v(" 函数，便能得到最终想要渲染的内容。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" newHtml "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("compiler")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("title")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'New Component'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("MyComponent")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" compiler "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MyComponent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cache "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyComponent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cache "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<h1><%= title %></h1>'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("compiler")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nMyComponent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cache "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("MyComponent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("title")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MyComponent'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("MyComponent")]),this._v(" 组件也许会带给你这样的感觉："),s("strong",[this._v("一个组件就是一个函数，给我什么样的数据，我就渲染对应的 html 内容")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这个概念，与我们如今谈论的 "),s("code",[this._v("Vue")]),this._v(" 或 "),s("code",[this._v("React")]),this._v(" 并没有什么不同。所以，这 就是 "),s("strong",[this._v("组件的本质")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("组件的本质虽然没变，但组件的产出却改变了。在模板引擎的年代，组件的产出是 "),s("code",[this._v("html")]),this._v(" 字符串：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:n(175),alt:"template"}})])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("而如今的 "),n("code",[t._v("Vue")]),t._v(" 或 "),n("code",[t._v("React")]),t._v("，它们的组件所产出的内容并不是 "),n("code",[t._v("html")]),t._v(" 字符串，而是大家所熟知的 "),n("code",[t._v("Virtual DOM")]),t._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:n(176),alt:"virtual-dom"}})])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("拿 "),n("code",[t._v("Vue")]),t._v(" 来说，一个组件最核心的东西是 "),n("code",[t._v("render")]),t._v(" 函数，剩余的其他内容，如 "),n("code",[t._v("data")]),t._v("、"),n("code",[t._v("compouted")]),t._v("、"),n("code",[t._v("props")]),t._v(" 等都是为 "),n("code",[t._v("render")]),t._v(" 函数提供数据来源服务的。"),n("code",[t._v("render")]),t._v(" 函数本可以直接产出 "),n("code",[t._v("html")]),t._v(" 字符串，但却产出了 "),n("code",[t._v("Virtual DOM")]),t._v("，借助 "),n("code",[t._v("snabbdom")]),t._v(" 的 API 我们可以很容易地用代码描述这个公式：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" h "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'snabbdom'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// h 函数用来创建 VNode，组件的产出是 VNode")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("MyComponent")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'h1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" props"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[n("code",[t._v("Virtual DOM")]),t._v(" 终究要渲染真实 DOM，这个过程就可以理解为模板引擎年代的完全替换 "),n("code",[t._v("html")]),t._v("，只不过它采用的不是完全替换，我们通常把这个过程叫做 "),n("code",[t._v("patch")]),t._v("，同样可以借助 "),n("code",[t._v("snabbdom")]),t._v(" 的 API 轻松地实现：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" h"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" init "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'snabbdom'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// init 方法用来创建 patch 函数")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" patch "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("MyComponent")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'h1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" props"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 组件的产出是 VNode")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" prevVnode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("MyComponent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("title")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prev'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将 VNode 渲染成真实 DOM")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("patch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prevVnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当数据变更时，组件会产出新的 "),s("code",[this._v("VNode")]),this._v("，我们只需再次调用 "),s("code",[this._v("patch")]),this._v(" 函数即可：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数据变更，产出新的 VNode")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" nextVnode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("MyComponent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("title")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'next'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过对比新旧 VNode，高效地渲染真实 DOM")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("patch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prevVnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nextVnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("以上就是我们要达成的共识："),s("strong",[this._v("组件的产出就是 Virtual DOM")]),this._v("。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("为何组件要从直接产出 "),n("code",[t._v("html")]),t._v(" 变成产出 "),n("code",[t._v("Virtual DOM")]),t._v(" 呢？其原因是 "),n("code",[t._v("Virtual DOM")]),t._v(" 带来了 "),n("strong",[t._v("分层设计")]),t._v("，它对渲染过程的抽象，使得框架可以渲染到 "),n("code",[t._v("web")]),t._v("(浏览器) 以外的平台，以及能够实现 "),n("code",[t._v("SSR")]),t._v(" 等。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("至于 "),s("code",[this._v("Virtual DOM")]),this._v(" 相比原生 DOM 操作的性能，这并非 "),s("code",[this._v("Virtual DOM")]),this._v(" 的目标，确切地说，如果要比较二者的性能是要“控制变量”的，例如：页面的大小、数据变化量等。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"组件的-vnode-如何表示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件的-vnode-如何表示"}},[this._v("#")]),this._v(" 组件的 VNode 如何表示")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("在后续行文时，将统一使用 "),s("code",[this._v("VNode")]),this._v(" 来简称 "),s("code",[this._v("Virtual DOM")]),this._v(" 。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("VNode")]),this._v(" 是真实 DOM 的描述，比如我们可以用如下对象描述一个 "),s("code",[this._v("div")]),this._v(" 标签：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" elementVnode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tag")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("想要把 "),s("code",[this._v("elementVnode")]),this._v(" 渲染成真实 DOM，我们还需要一个渲染器("),s("code",[this._v("Renderer")]),this._v(")：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("vnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" container")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("渲染器接收两个参数，分别是将要渲染的 "),s("code",[this._v("vnode")]),this._v(" 和 元素挂载点(真实 DOM 被渲染的位置)。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("为了渲染如上的 "),s("code",[this._v("div")]),this._v(" 标签，我们可以这样调用 "),s("code",[this._v("render")]),this._v(" 函数：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把 elementVnode 渲染到 id 为 app 的元素下")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elementVnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("render")]),this._v(" 函数的实现也很简单：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("vnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" container")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mountElement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" container"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mountElement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("vnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" container")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建元素")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" el "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将元素添加到容器")]),t._v("\n  container"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如上，在 "),s("code",[this._v("render")]),this._v(" 函数内调用了 "),s("code",[this._v("mountElement")]),this._v("，它的作用是根据 "),s("code",[this._v("VNode")]),this._v(" 创建真实 DOM 并将其添加到容器中。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这段代码对于标准 "),s("code",[this._v("html")]),this._v(" 标签是可以正常工作的(不考虑 SVG)，但并不适用于组件。为了能够渲染组件，我们需要思考："),s("strong",[this._v("组件的 "),s("code",[this._v("VNode")]),this._v(" 应该如何表示？")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("对于 "),n("code",[t._v("html")]),t._v(" 标签的 "),n("code",[t._v("VNode")]),t._v(" 来说，其 "),n("code",[t._v("tag")]),t._v(" 属性的值就是标签的名字，但如果是组件的话，其 "),n("code",[t._v("VNode")]),t._v(" 中 "),n("code",[t._v("tag")]),t._v(" 属性的值应该是什么呢？")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyComponent")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// render 函数产出 VNode")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tag")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如上，我们使用 "),s("code",[this._v("class")]),this._v(" 定义了一个类，它是一个组件(有状态组件)，我们可以使用如下 "),s("code",[this._v("VNode")]),this._v(" 来描述它：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" componentVnode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tag")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MyComponent\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如上，直接将 "),s("code",[this._v("tag")]),this._v(" 属性的值指向组件自身。但想要正确地渲染该组件，我们还需要修改 "),s("code",[this._v("render")]),this._v("：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("vnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" container")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" vnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tag "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// html 标签")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mountElement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" container"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 组件")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mountComponent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" container"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("如上，通过 "),n("strong",[t._v("判断 "),n("code",[t._v("vnode.tag")]),t._v(" 是否是字符串")]),t._v(" 来区分：一个 "),n("code",[t._v("VNode")]),t._v(" 到底是 "),n("code",[t._v("html")]),t._v(" 标签还是组件。如果是组件的话，调用 "),n("code",[t._v("mountComponent")]),t._v(" 函数挂载组件，而非 "),n("code",[t._v("mountElement")]),t._v("，如下是 "),n("code",[t._v("mountComponent")]),t._v(" 函数的实现：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mountComponent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("vnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" container")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建组件实例")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" instance "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("vnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tag")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 渲染")]),t._v("\n  instance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$vnode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" instance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 挂载")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mountElement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$vnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" container"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("道理很简单，由于 "),n("code",[t._v("vnode.tag")]),t._v(" 指向组件类，所以我们创建一个组件实例，接着调用其 "),n("code",[t._v("render")]),t._v(" 函数产出 "),n("code",[t._v("VNode")]),t._v(" 并将其添加到实例属性 "),n("code",[t._v("instance.$vnode")]),t._v("，最后借用 "),n("code",[t._v("mountElement")]),t._v(" 函数完成标签的挂载即可。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("实际上为了便于理解，本节代码的简化程度很大，更加详细严谨的代码会在后续的具体章节中体现。不过这足以说明问题："),n("strong",[t._v("可以让 "),n("code",[t._v("VNode")]),t._v(" 的 "),n("code",[t._v("tag")]),t._v(" 属性指向组件本身，从而使用 "),n("code",[t._v("VNode")]),t._v(" 来描述组件")]),t._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"组件的种类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件的种类"}},[this._v("#")]),this._v(" 组件的种类")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("MyComponent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("class")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[this._v("MyComponent")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("}")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("实际上它们分别代表两类组件："),s("strong",[this._v("函数式组件(Functional component)")]),this._v(" 和 "),s("strong",[this._v("有状态组件(Stateful component)")]),this._v("。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[n("p",[t._v("函数式组件：")]),t._v(" "),n("ul",[n("li",[t._v("是一个纯函数")]),t._v(" "),n("li",[t._v("没有自身状态，只接收外部数据")]),t._v(" "),n("li",[t._v("产出 "),n("code",[t._v("VNode")]),t._v(" 的方式：单纯的函数调用")])])]),t._v(" "),n("li",[n("p",[t._v("有状态组件：")]),t._v(" "),n("ul",[n("li",[t._v("是一个类，可实例化")]),t._v(" "),n("li",[t._v("可以有自身状态")]),t._v(" "),n("li",[t._v("产出 "),n("code",[t._v("VNode")]),t._v(" 的方式：需要实例化，然后调用其 "),n("code",[t._v("render")]),t._v(" 函数")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在后续渲染器的相关章节中，会再次讲述 "),s("strong",[this._v("有状态组件")]),this._v(" 与 "),s("strong",[this._v("函数式组件")]),this._v(" 的原理和异同，那时你的理解会更加深刻。")])}],e=n(0),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),n("p",[t._v("当数据发生变化时，我们需要使用新的数据重新编译模板：")]),t._v(" "),t._m(10),n("p",[t._v("如果把上面的逻辑封装成一个函数，那么一个组件就诞生了：")]),t._v(" "),t._m(11),n("p",[t._v("我们可以这样使用它：")]),t._v(" "),t._m(12),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("完整代码&在线体验地址："),n("a",{attrs:{href:"https://codesandbox.io/s/m7nqlj8m9j",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://codesandbox.io/s/m7nqlj8m9j"),n("OutboundLink")],1)])]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._m(23),t._v(" "),t._m(24),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("完整代码&在线体验地址："),n("a",{attrs:{href:"https://codesandbox.io/s/mq0q8r50w8",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://codesandbox.io/s/mq0q8r50w8"),n("OutboundLink")],1)])]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._m(32),t._v(" "),t._m(33),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._m(37),t._v(" "),t._m(38),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),n("p",[t._v("很简单，我们可以将其指向组件自身。假设我们有如下组件：")]),t._v(" "),t._m(42),t._m(43),t._v(" "),t._m(44),t._m(45),t._v(" "),t._m(46),t._m(47),t._v(" "),t._m(48),t._m(49),t._v(" "),t._m(50),t._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("完整代码&在线体验地址："),n("a",{attrs:{href:"https://codesandbox.io/s/8817m3zz5j",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://codesandbox.io/s/8817m3zz5j"),n("OutboundLink")],1)])]),t._v(" "),t._m(51),t._v(" "),n("p",[t._v("大家可能会注意到，在上文中，采用了两种不同的方式来描述组件。")]),t._v(" "),n("p",[t._v("第一种方式是使用一个普通的函数：")]),t._v(" "),t._m(52),n("p",[t._v("第二种方式是使用一个类：")]),t._v(" "),t._m(53),t._m(54),t._v(" "),n("p",[t._v("它们的区别如下：")]),t._v(" "),t._m(55),t._v(" "),t._m(56)])}),a,!1,null,null,null);s.default=r.exports}}]);