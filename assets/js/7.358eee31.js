(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{274:function(t,a,s){"use strict";s.r(a);var e=s(32),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("h2",{attrs:{id:"registermicroapps-apps-lifecycles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#registermicroapps-apps-lifecycles"}},[t._v("#")]),t._v(" "),s("code",[t._v("registerMicroApps(apps, lifeCycles?)")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Parameters")]),t._v(" "),s("ul",[s("li",[t._v("apps - "),s("code",[t._v("Array<RegistrableApp<T>>")]),t._v(" - required, registration information for the child application")]),t._v(" "),s("li",[t._v("lifeCycles - "),s("code",[t._v("LifeCycles<T>")]),t._v(" - optional, global sub app lifecycle hooks")])])]),t._v(" "),s("li",[s("p",[t._v("Type")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("RegistrableApp<T>")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("name - "),s("code",[t._v("string")]),t._v(" - required, the name of the child application and must be unique between the child applications.")])]),t._v(" "),s("li",[s("p",[t._v("entry - "),s("code",[t._v("string | { scripts?: string[]; styles?: string[]; html?: string }")]),t._v(" - required, The entry url of the child application.")])]),t._v(" "),s("li",[s("p",[t._v("render - "),s("code",[t._v("(props?: { appContent: string; loading: boolean }) => any")]),t._v(" - required, the child application triggers the render method when it needs to be activated.")])]),t._v(" "),s("li",[s("p",[t._v("activeRule - "),s("code",[t._v("(location: Location) => boolean")]),t._v(" - optional, activation rules for subapplications.")]),t._v(" "),s("p",[t._v("This function is called when the browser url changes, and "),s("code",[t._v("activeRule")]),t._v(" returns "),s("code",[t._v("true")]),t._v(" to indicate that the subapplication needs to be activated.")])]),t._v(" "),s("li",[s("p",[t._v("props - "),s("code",[t._v("object")]),t._v(" - optional, data that the primary application needs to pass to the child application.")])])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("LifeCycles<T>")])]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Lifecycle"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("object")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" RegistrableApp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("beforeLoad - "),s("code",[t._v("Lifecycle<T> | Array<Lifecycle<T>>")]),t._v(" - optional")]),t._v(" "),s("li",[t._v("beforeMount - "),s("code",[t._v("Lifecycle<T> | Array<Lifecycle<T>>")]),t._v(" - optional")]),t._v(" "),s("li",[t._v("afterMount - "),s("code",[t._v("Lifecycle<T> | Array<Lifecycle<T>>")]),t._v(" - optional")]),t._v(" "),s("li",[t._v("beforeUnmount - "),s("code",[t._v("Lifecycle<T> | Array<Lifecycle<T>>")]),t._v(" - optional")]),t._v(" "),s("li",[t._v("afterUnmount - "),s("code",[t._v("Lifecycle<T> | Array<Lifecycle<T>>")]),t._v(" - optional")])])])])]),t._v(" "),s("li",[s("p",[t._v("Usage")]),t._v(" "),s("p",[t._v("Configuration information for registered subapplications in the main application.")])]),t._v(" "),s("li",[s("p",[t._v("Sample")]),t._v(" "),s("div",{staticClass:"language-tsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-tsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" registerMicroApps "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'qiankun'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerMicroApps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    entry"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//localhost:8080'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" appContent "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" ReactDOM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("App")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("appContent")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("appContent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v(", document.getElementById('container')),\n    activeRule: location => location.pathname.startsWith('/react'),\n    props: ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kuitos'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n  }],\n  ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("beforeLoad")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("app")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'before load'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    beforeMount"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("app")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'before mount'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v(",\n);\n")])])])])])]),t._v(" "),s("h2",{attrs:{id:"start-opts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-opts"}},[t._v("#")]),t._v(" "),s("code",[t._v("start(opts?)")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Parameters")]),t._v(" "),s("ul",[s("li",[t._v("opts - "),s("code",[t._v("Options")]),t._v(" optional")])])]),t._v(" "),s("li",[s("p",[t._v("Type")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("Options")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("prefetch - "),s("code",[t._v("boolean | 'all' | string[] | (( apps: RegistrableApp[] ) => { mainAppStartingAppsName: string[]; firstMountedAppsName: string[] })")]),t._v(" - optional, whether to enable prefetch, default is "),s("code",[t._v("true")]),t._v(".")]),t._v(" "),s("p",[t._v("A configuration of "),s("code",[t._v("true")]),t._v(" starts prefetching static resources for other subapplications after the first subapplication mount completes.")]),t._v(" "),s("p",[t._v("If configured as "),s("code",[t._v("'all'")]),t._v(", the main application "),s("code",[t._v("start")]),t._v(" will begin to preload all subapplication static resources.")]),t._v(" "),s("p",[t._v("If configured as "),s("code",[t._v("string[]")]),t._v(", starts prefetching static resources for subapplications after the first subapplication mount completes which be declared in this list.")]),t._v(" "),s("p",[t._v("If configured as "),s("code",[t._v("function")]),t._v(", the timing of all subapplication static resources will be controlled by yourself.")])]),t._v(" "),s("li",[s("p",[t._v("jsSandbox - "),s("code",[t._v("boolean")]),t._v(" - optional, whether to open the js sandbox, default is "),s("code",[t._v("true")]),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("singular - "),s("code",[t._v("boolean | ((app: RegistrableApp<any>) => Promise<boolean>);")]),t._v(" - optional，whether is a singular mode，default is "),s("code",[t._v("true")]),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("fetch - "),s("code",[t._v("Function")]),t._v(" - optional")])]),t._v(" "),s("li",[s("p",[t._v("getPublicPath - "),s("code",[t._v("(url: string) => string")]),t._v(" - optional")])]),t._v(" "),s("li",[s("p",[t._v("getTemplate - "),s("code",[t._v("(tpl: string) => string")]),t._v(" - optional")])])])])])]),t._v(" "),s("li",[s("p",[t._v("Usage")]),t._v(" "),s("p",[t._v("Start qiankun.")])]),t._v(" "),s("li",[s("p",[t._v("Sample")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" start "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'qiankun'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"setdefaultmountapp-applink"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setdefaultmountapp-applink"}},[t._v("#")]),t._v(" "),s("code",[t._v("setDefaultMountApp(appLink)")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Parameters")]),t._v(" "),s("ul",[s("li",[t._v("appLink - "),s("code",[t._v("string")]),t._v(" - required")])])]),t._v(" "),s("li",[s("p",[t._v("Usage")]),t._v(" "),s("p",[t._v("Sets the child application that enters by default after the main application starts.")])]),t._v(" "),s("li",[s("p",[t._v("Sample")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" setDefaultMountApp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'qiankun'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDefaultMountApp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/homeApp'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"runafterfirstmounted-effect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#runafterfirstmounted-effect"}},[t._v("#")]),t._v(" "),s("code",[t._v("runAfterFirstMounted(effect)")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Parameters")]),t._v(" "),s("ul",[s("li",[t._v("effect - "),s("code",[t._v("() => void")]),t._v(" - required")])])]),t._v(" "),s("li",[s("p",[t._v("Usage")]),t._v(" "),s("p",[t._v("Methods that need to be called after the first subapplication mount, such as turning on some monitoring or buried scripts.")])]),t._v(" "),s("li",[s("p",[t._v("Sample")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" runAfterFirstMounted "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'qiankun'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("runAfterFirstMounted")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startMonitor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"adderrorhandler-removeerrorhandler"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adderrorhandler-removeerrorhandler"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://single-spa.js.org/docs/api#adderrorhandler",target:"_blank",rel:"noopener noreferrer"}},[t._v("addErrorHandler/removeErrorHandler"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"addglobaluncaughterrorhandler-handler"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#addglobaluncaughterrorhandler-handler"}},[t._v("#")]),t._v(" "),s("code",[t._v("addGlobalUncaughtErrorHandler(handler)")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Parameters")]),t._v(" "),s("ul",[s("li",[t._v("handler - "),s("code",[t._v("(...args: any[]) => void")]),t._v(" - 必选")])])]),t._v(" "),s("li",[s("p",[t._v("Usage")]),t._v(" "),s("p",[t._v("Add the global uncaught error hander.")])]),t._v(" "),s("li",[s("p",[t._v("Sample")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" addGlobalUncaughtErrorHandler "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'qiankun'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addGlobalUncaughtErrorHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"removeglobaluncaughterrorhandler-handler"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#removeglobaluncaughterrorhandler-handler"}},[t._v("#")]),t._v(" "),s("code",[t._v("removeGlobalUncaughtErrorHandler(handler)")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Parameters")]),t._v(" "),s("ul",[s("li",[t._v("handler - "),s("code",[t._v("(...args: any[]) => void")]),t._v(" - 必选")])])]),t._v(" "),s("li",[s("p",[t._v("Usage")]),t._v(" "),s("p",[t._v("Remove the global uncaught error hander.")])]),t._v(" "),s("li",[s("p",[t._v("Sample")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" removeGlobalUncaughtErrorHandler "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'qiankun'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeGlobalUncaughtErrorHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("handler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);