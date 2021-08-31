(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),o=a(12),n=a.n(o),l=(a(19),a(5)),i=(a(20),a(0));function r(){var e=Object(c.useState)({color:"black",backgroundColor:"white"}),t=Object(l.a)(e,2),a=t[0],s=t[1],o=Object(c.useState)("Enable dark mode"),n=Object(l.a)(o,2),r=n[0],d=n[1];return Object(i.jsxs)("div",{className:"container my-3",style:a,children:[Object(i.jsx)("h2",{className:"my-3",children:"About Us"}),Object(i.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(i.jsx)("button",{className:"accordion-button",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Accordion Item #1"})}),Object(i.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",style:a,children:[Object(i.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(i.jsx)("button",{className:"accordion-button collapsed",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Accordion Item #2"})}),Object(i.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",style:a,children:[Object(i.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(i.jsx)("button",{className:"accordion-button collapsed",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Accordion Item #3"})}),Object(i.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",style:a,children:[Object(i.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]}),Object(i.jsx)("div",{className:"container my-3",children:Object(i.jsx)("button",{onClick:function(e){"white"===a.color?(s({color:"black",backgroundColor:"white"}),d("Enable dark mode")):(s({color:"white",backgroundColor:"black",border:"1px solid black"}),d("Enable light mode"))},className:"btn btn-primary",children:r})})]})}var d=a(6),h=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)(d.b,{className:"navbar-brand",to:"/textutils",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(d.b,{className:"nav-link active","aria-current":"page",to:"/textutils",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(d.b,{className:"nav-link",to:"/about",children:e.aboutText})})]}),Object(i.jsx)("form",{className:"d-flex",children:Object(i.jsxs)("div",{className:"form-check form-switch",children:[Object(i.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(i.jsx)("label",{className:"form-check-label  text-".concat("light"===e.mode?"dark":"light"),htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})})]})]})})})};h.defaultProps={title:"Set title here",aboutText:"About"};var b=h;function j(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),s=a[0],o=a[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"container my-3",children:[Object(i.jsx)("h2",{style:{color:"light"===e.mode?"black":"white"},children:e.heading}),Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)("textarea",{className:"form-control",style:{backgroundColor:"light"===e.mode?"white":"grey",color:"light"===e.mode?"black":"white"},id:"exampleFormControlTextarea1",value:s,placeholder:"Enter Your text here",onChange:function(e){o(e.target.value)},rows:"8"})}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){o(s.toUpperCase()),e.showAlert("Converted to Upper case!","success")},children:"Convert to UpperCase"}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){o(s.toLowerCase()),e.showAlert("Converted to Lower case!","success")},children:"Convert to LowerCase"}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(t){var a=document.getElementById("exampleFormControlTextarea1");a.select(),navigator.clipboard.writeText(a.value),t.target.innerHTML="Copied",e.showAlert("Copied to clipboard!","success"),setTimeout((function(){t.target.innerHTML="Copy text"}),2e3)},children:"Copy Text"}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=s.split(/[ ]+/);o(t.join(" ")),e.showAlert("Removed all extra spaces!","success")},children:"Remove extra spaces"}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){o(""),e.showAlert("Cleared the text!","success")},children:"Clear Text"})]}),Object(i.jsxs)("div",{className:"container my-3",style:{color:"light"===e.mode?"black":"white"},children:[Object(i.jsx)("h2",{children:"Your Text summary"}),Object(i.jsxs)("p",{children:[s.split(" ").length," Words and ",s.length," characters "]}),Object(i.jsxs)("p",{children:[.08*s.split(" ").length," Minutes to read"]}),Object(i.jsx)("h2",{children:"Preview"}),Object(i.jsx)("p",{children:s.length>0?s:"Enter text to preview"})]})]})}j.defaultProps={heading:"Heading"};var u=function(e){return e.alert&&Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(i.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})})},m=a(2);var x=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],s=t[1],o=Object(c.useState)(null),n=Object(l.a)(o,2),h=n[0],x=n[1],p=function(e,t){x({msg:e,type:t}),setTimeout((function(){x(null)}),1500)};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(d.a,{children:[Object(i.jsx)(b,{title:"TextUtils",mode:a,toggleMode:function(){"light"===a?(s("dark"),document.body.style.backgroundColor="#042743",p("Dark mode has been enabled","success"),document.title="Text Utils - Dark"):(s("light"),document.body.style.backgroundColor="white",p("Light mode has been enabled","success"),document.title="Text Utils - Light")}}),Object(i.jsx)(u,{alert:h}),Object(i.jsxs)(m.c,{children:[Object(i.jsx)(m.a,{exact:!0,path:"/about",children:Object(i.jsx)(r,{})}),Object(i.jsx)(m.a,{exact:!0,path:"/textutils",children:Object(i.jsx)(j,{heading:"Enter the text to analyse",mode:a,showAlert:p})})]})]})})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),o(e),n(e)}))};n.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root")),p()}},[[30,1,2]]]);
//# sourceMappingURL=main.2e9c0336.chunk.js.map