(function(e){function t(t){for(var n,r,o=t[0],l=t[1],c=t[2],u=0,m=[];u<o.length;u++)r=o[u],i[r]&&m.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(m.length)m.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(n=!1)}n&&(s.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},i={app:0},s=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"130e":function(e,t,a){},"16a3":function(e,t,a){"use strict";var n=a("130e"),i=a.n(n);i.a},"1f94":function(e,t,a){},"37d6":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"customecontainer"}},[a("b-row",[a("b-col",{staticClass:"hidesmaller",attrs:{id:"left",col:"",cols:"0",sm:"0",md:"0",lg:"3",xl:"2"}},[a("Navbar")],1),a("b-col",{attrs:{id:"center",cols:"12",sm:"8",md:"9",lg:"7",xl:"7","offset-lg":"3","offset-xl":"2"}},[a("AboutMe",{attrs:{id:"about"}}),a("WhatIHaveDone",{attrs:{id:"resume"}})],1),a("b-col",{attrs:{id:"right",col:"",cols:"0",sm:"4",md:"3",lg:"2",xl:"3"}},[a("Link")],1)],1)],1)])},s=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"nav is-fixed"},[a("scrollactive",{ref:"scrollactive",attrs:{offset:e.offset,"always-track":e.alwaysTrack,duration:e.duration,"click-to-scroll":e.clickToScroll,"bezier-easing-value":e.easing}},[a("b-nav",{attrs:{vertical:""}},[a("b-nav-item",[a("h1",{attrs:{id:"logo",href:"#"}},[a("a",{staticClass:"scrollactive-item nav-item logolink",staticStyle:{color:"#f05e25 !important"},attrs:{href:"#about"}},[e._v("dian")]),a("span",{staticClass:"disableLink"},[e._v(" >")]),a("span",{staticClass:"blinking"},[e._v("_")])])]),a("b-nav-item",{staticStyle:{"text-align":"right"},attrs:{href:"#about"}},[a("a",{staticClass:"scrollactive-item nav-item sectionlink",attrs:{href:"#about"}},[e._v("About Me")])]),a("b-nav-item",{staticStyle:{"text-align":"right"},attrs:{href:"#work"}},[a("a",{staticClass:"scrollactive-item nav-item sectionlink",attrs:{href:"#work"}},[e._v("Work Experience")])]),a("b-nav-item",{staticStyle:{"text-align":"right"},attrs:{href:"#projects"}},[a("a",{staticClass:"scrollactive-item nav-item sectionlink",attrs:{href:"#projects"}},[e._v("Projects")])])],1)],1)],1)},o=[],l={name:"Navbar",data:function(){return{alwaysTrack:!1,duration:600,clickToScroll:!0,offset:0,easing:".5,0,.35,1"}}},c=l,d=(a("16a3"),a("2877")),u=Object(d["a"])(c,r,o,!1,null,null,null),m=u.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v(e._s(e.title))]),e._m(0),a("div",{attrs:{id:"future"}}),e._m(1),e._m(2)])},f=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",[e._v("\n      I am currently a Software Engineer at\n      "),a("a",{attrs:{href:"https://www.google.com/",target:"_blank"}},[e._v("Google")]),e._v(".\n    ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"previous"}},[a("p",[e._v("\n      Previously I have worked at\n      "),a("a",{attrs:{href:"https://www.flexport.com/",target:"_blank"}},[e._v("Flexport")]),e._v(",\n      "),a("a",{attrs:{href:"https://www.opendoor.com/",target:"_blank"}},[e._v("Opendoor")]),e._v(",\n      "),a("a",{attrs:{href:"https://www.google.com/",target:"_blank"}},[e._v("Google")]),e._v(",\n      "),a("a",{attrs:{href:"https://www.datadoghq.com/",target:"_blank"}},[e._v("Datadog")]),e._v(", and\n      "),a("a",{attrs:{href:"https://www.sculptor.com/",target:"_blank"}},[e._v("Sculptor Capital Management")]),e._v(" as a Software Engineer Intern.\n    ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"goal"}},[a("p",[e._v("My goals are to learn as much as possible from my experiences and interactions with others, and leave a positive impact on the company through my work.")])])}],h={name:"About",data:function(){return{title:"Hello! I am Dian."}}},v=h,b=(a("8810"),Object(d["a"])(v,p,f,!1,null,"b46ef62a",null)),g=b.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{attrs:{id:"experience"}},[a("h2",[e._v(e._s(e.Experience))]),e._l(e.companies,function(e,t){return a("Work",{key:"company - "+t,attrs:{id:"work",companyInfo:e}})})],2),a("div",{attrs:{id:"project"}},[a("h2",[e._v(e._s(e.Project))]),e._l(e.projects,function(e,t){return a("Project",{key:"project - "+t,attrs:{id:"projects",projectInfo:e}})})],2)])},_=[],w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"card border-0"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[a("div",{staticClass:"company"},[e._v(e._s(e.companyName))]),a("div",{staticClass:"time"},[e._v(e._s(e.timeFrame))])]),a("br"),a("h6",{staticClass:"card-subtitle mb-2 text-muted"},[a("div",{staticClass:"position"},[e._v(e._s(e.position))]),a("div",{staticClass:"location"},[e._v(e._s(e.location))])]),a("br"),a("ul",e._l(e.descriptions,function(t,n){return a("li",{key:n},[e._v(e._s(t))])}),0),a("br"),a("div",{staticClass:"skill"},e._l(e.skills,function(t,n){return a("b-badge",{key:n,attrs:{pill:"",variant:"secondary"}},[e._v(e._s(t))])}),1)])])])},k=[],j={name:"Work",props:["companyInfo"],data:function(){return{companyName:this.companyInfo.companyName,position:this.companyInfo.position,timeFrame:this.companyInfo.timeFrame,descriptions:this.companyInfo.dutiesAndResponsibilities,skills:this.companyInfo.skills,location:this.companyInfo.location}}},A=j,S=(a("b37b"),Object(d["a"])(A,w,k,!1,null,"12b6f0fe",null)),C=S.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"card border-0"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[a("div",{staticClass:"project"},[e._v(e._s(e.projectName))]),a("div",{staticClass:"time"},[e._v(e._s(e.timeFrame))])]),a("br"),a("ul",e._l(e.features,function(t,n){return a("li",{key:n},[e._v(e._s(t))])}),0),a("br"),a("div",{staticClass:"skill"},e._l(e.skills,function(t,n){return a("b-badge",{key:n,attrs:{pill:"",variant:"secondary"}},[e._v(e._s(t))])}),1)])])])},I=[],P={name:"Project",props:["projectInfo"],data:function(){return{projectName:this.projectInfo.projectName,timeFrame:this.projectInfo.timeFrame,features:this.projectInfo.features,skills:this.projectInfo.skills}}},N=P,D=(a("e9d6"),Object(d["a"])(N,x,I,!1,null,"09075258",null)),F=D.exports,O={name:"WhatIHaveDone",data:function(){return{Experience:"Experience",Project:"Projects",companies:this.companies,projects:this.projects}},components:{Work:C,Project:F},mounted:function(){this.setup()},methods:{setup:function(){this.companies=[{companyName:"Google",position:"Software Engineer",timeFrame:"Aug 2020 - Present",dutiesAndResponsibilities:["Advertiser Platform Team"],skills:[],location:"Mountain View, CA"},{companyName:"Flexport",position:"Software Engineer Intern",timeFrame:"Jan 2020 - Apr 2020",dutiesAndResponsibilities:["Added metadata attribute to both API v2 and Purchase Order CSV schema which allow end users to store information on a resource that is not captured in a Flexport-defined field","Incorporated row type property into Purchase Order CSV schema to help customers and operators better differentiate information, such as headers and line items, they wish to store","Initiated an automatic pipeline for transferring purchase order information to booking"],skills:["Ruby on Rails","React","GraphQL"],location:"San Francisco, CA"},{companyName:"Opendoor",position:"Software Engineer Intern",timeFrame:"Sep 2019 - Dec 2019",dutiesAndResponsibilities:["Improved the delivery performance of landing page (eg. reduced load time by 60%) by employing client-side optimization","Created a Slack integration that facilitated communication between customer experience officers and mortgage consultants","Implemented Iterable work flows that deliver personalized and targeted email and SMS to end users"],skills:["Go","React","Ruby on Rails","SQL"],location:"San Francisco, CA"},{companyName:"Google",position:"Software Engineering Intern",timeFrame:"Jun 2019 - Present",dutiesAndResponsibilities:["Implemented a quota management system which allocates available API calls to each operation that pushes, pulls, and authenticates information from external engines such as Bing, Yahoo Japan and Baidu","Created real-time interactive dashboards that display quota usages and alerts the team when there is an unexpected high quota exceeded rate","Developed OAuth token and username/password  authenticator that enabled account migration and local/QA environment testing"],skills:["Java","Python"],location:"Kirkland, WA"},{companyName:"Datadog",position:"Software Engineer Intern",timeFrame:"Apr 2019 - Jun 2019",dutiesAndResponsibilities:["Implemented HTTP retry strategies that resolve  429 Too Many Requests errors in different web-based crawlers","Developed an integration for Dingtalk Chatbot to subscribe to real-time alert messages from Datadog using a Redis worker and RESTful API","Architected a web crawler to concurrently collect and parse timer, engagement, and dimension metrics from Akamai mPulse"],skills:["Python","React"],location:"New York City, NY"},{companyName:"Oz Management",position:"Front Office Application Development Intern",timeFrame:"Jun 2018 – Sep 2018",dutiesAndResponsibilities:["Built a global IPO/Follow-on/Acquisitions monitoring tool that displays performance history/forecast, profit & loss, and compliance status","Automated categorization process for Reports Portal which automatically routes email to its designated department or team","Implemented SuperCache, which reduced Bloomberg requests made by 15% and projected to save $25000 annually"],skills:["JavaScript","Python","C#","Angular.js",".Net framework","Microsoft SQL Server"],location:"New York City, NY"},{companyName:"Webroot",position:"Software Developer Intern",timeFrame:"Nov 2017 – Jun 2018",dutiesAndResponsibilities:["Implemented and deployed the server status dashboard for the Support team to streamline status modifications","Improved the delivery performance of multiple sites (eg. reduced load time by 20%) by employing client-side optimization","Developed the automatic bug reporting tool for Webroot SecureAnywhere - DNS Protection application, which reduced ticket resolution time by over 30%","Created a C# API that analyzes and classifies the security level of local input directories, files, and/or URLs"],skills:["JavaScript","Node.js","Python","C#","Vue.js","MySQL"],location:"San Diego, CA"}],this.projects=[{projectName:"AI Related Games",timeFrame:"Jan 2019 - Present",features:["Trying to learn some AI related topics and do some projects in the process","Some of the games include 2048, Gomoku, Blackjack, and Sudoku"],skills:["Python","React"]},{projectName:"MemeMaster",timeFrame:"Dec 2018",features:["A meme creator web application built with vanilla javascript (No framework and no Boostrap)","Used tools such Google Chrome Aduits and WebPageTest to compare the performance of vanilla JS with framework such as Angular, React, and Vuejs "],skills:["JavaScript","HTML","CSS"]},{projectName:"WaitNoMore",timeFrame:"Apr 2018",features:["Developed a web application that allows users to explore restaurants, know the waiting time of restaurants, join the current waitlist of the restaurant and make orders and payments ahead of time ","Displayed crowdedness of the restaurants on Google Map and restaurants menu","Provided users with real-time updates about their orders and integrated online payments "],skills:["React","Node.js","Express.js","Firebase","JavaScript"]},{projectName:"CamerRoll",timeFrame:"Jan 2018",features:["Developed an Android app that allows instructors to take attendance by taking a picture of the class ","Automatically inform parent about students tardiness and absences through text and voice mail ","Implemented features allowing users to easily organize multiple sections, identify each student, and record the information into an attendance system "],skills:["Java","Android Studio","Microsoft Cognitive Service"]}]}}},R=O,J=(a("7642"),Object(d["a"])(R,y,_,!1,null,"0fe52bd0",null)),E=J.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.8.2/css/all.css",integrity:"sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay",crossorigin:"anonymous"}}),a("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.8.2/css/all.css",integrity:"sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay",crossorigin:"anonymous"}}),a("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.8.2/css/all.css",integrity:"sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay",crossorigin:"anonymous"}}),a("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.8.2/css/all.css",integrity:"sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay",crossorigin:"anonymous"}}),a("h2",[e._v("Links")]),a("b-list-group",{staticStyle:{"margin-bottom":"40px"}},[a("b-list-group-item",{staticClass:"d-flex align-items-left",attrs:{href:"Lin_Dian_Resume.pdf",target:"_blank"}},[a("div",[a("i",{staticClass:"fas fa-print fa-1x"}),a("span",[e._v("print me")])])]),a("b-list-group-item",{staticClass:"d-flex align-items-left",attrs:{href:"mailto:dianlin0708@gmail.com",target:"_blank"}},[a("div",[a("i",{staticClass:"far fa-envelope"}),a("span",[e._v("dianlin0708@gmail.com")])])]),a("b-list-group-item",{staticClass:"d-flex align-items-left",attrs:{href:"https://github.com/dil048",target:"_blank"}},[a("div",[a("i",{staticClass:"fab fa-github"}),a("span",[e._v("dil048")])])]),a("b-list-group-item",{staticClass:"d-flex align-items-left",attrs:{href:"https://www.linkedin.com/in/dianlin1/",target:"_blank"}},[a("div",[a("i",{staticClass:"fab fa-linkedin"}),a("span",[e._v("dianlin1")])])])],1)],1)},Y=[],W={data:function(){return{}}},q=W,T=(a("91fd"),Object(d["a"])(q,M,Y,!1,null,"62f0d868",null)),Q=T.exports,z={name:"app",components:{Navbar:m,AboutMe:g,WhatIHaveDone:E,Link:Q}},L=z,$=(a("e661"),Object(d["a"])(L,i,s,!1,null,"54e264bb",null)),B=$.exports,G=a("9f7b"),U=a.n(G),H=(a("f9e3"),a("2dd8"),a("92c6"),a("e057")),K=a.n(H);n["default"].use(K.a),n["default"].config.productionTip=!1,n["default"].use(U.a),new n["default"]({render:function(e){return e(B)}}).$mount("#app")},7642:function(e,t,a){"use strict";var n=a("1f94"),i=a.n(n);i.a},"83b2":function(e,t,a){},8810:function(e,t,a){"use strict";var n=a("8814"),i=a.n(n);i.a},8814:function(e,t,a){},"91fd":function(e,t,a){"use strict";var n=a("37d6"),i=a.n(n);i.a},b37b:function(e,t,a){"use strict";var n=a("83b2"),i=a.n(n);i.a},d82a:function(e,t,a){},e661:function(e,t,a){"use strict";var n=a("f94c"),i=a.n(n);i.a},e9d6:function(e,t,a){"use strict";var n=a("d82a"),i=a.n(n);i.a},f94c:function(e,t,a){}});
//# sourceMappingURL=app.8631fc00.js.map