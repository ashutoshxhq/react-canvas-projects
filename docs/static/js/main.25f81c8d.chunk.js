(this["webpackJsonpworkduck-project"]=this["webpackJsonpworkduck-project"]||[]).push([[0],{101:function(e,a,l){"use strict";l.r(a);var s=l(0),c=l.n(s),t=l(62),d=l.n(t),n=(l(69),l(17)),i=l(2),o=l(24),r=l(10),u=l(63),f=l(1),b=function(e){var a=Object(s.useState)([]),l=Object(r.a)(a,2),c=l[0],t=l[1],d=Object(s.useRef)(null);return Object(s.useEffect)((function(){var e=[],a=function a(l){for(var s in l)"bounds"===s&&(console.log(l.class),e.push({element:l.class,bound:(c=l[s],c.split("][").map((function(e){return e.replaceAll("[","").replaceAll("]","")})).map((function(e){return e.split(",")})))})),"object"===typeof l[s]&&a(l[s]);var c};Object(u.parseString)('<hierarchy index="0" class="hierarchy" rotation="0" width="1440" height="2392">\n        <android.widget.FrameLayout index="0" package="com.classengage.android" class="android.widget.FrameLayout" text="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" long-clickable="false" password="false" scrollable="false" selected="false" bounds="[0,0][1440,2392]" displayed="true">\n        <android.widget.ScrollView index="0" package="com.classengage.android" class="android.widget.ScrollView" text="" checkable="false" checked="false" clickable="false" enabled="true" focusable="true" focused="false" long-clickable="false" password="false" scrollable="false" selected="false" bounds="[0,84][1440,2322]" displayed="true">\n        <android.widget.TextView index="0" package="com.classengage.android" class="android.widget.TextView" text="Welcome to" resource-id="com.classengage.android:id/welcome_text" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" long-clickable="false" password="false" scrollable="false" selected="false" bounds="[536,858][905,951]" displayed="true"/>\n        <android.widget.TextView index="1" package="com.classengage.android" class="android.widget.TextView" text="ClassEngage" resource-id="com.classengage.android:id/app_name_text" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" long-clickable="false" password="false" scrollable="false" selected="false" bounds="[516,951][925,1044]" displayed="true"/>\n        <android.widget.TextView index="2" package="com.classengage.android" class="android.widget.TextView" text="Login via OTP" resource-id="com.classengage.android:id/login_via_otp_text" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" long-clickable="false" password="false" scrollable="false" selected="false" bounds="[549,1104][892,1180]" displayed="true"/>\n        <android.widget.RelativeLayout index="3" package="com.classengage.android" class="android.widget.RelativeLayout" text="" resource-id="com.classengage.android:id/rlClickConsumer" checkable="false" checked="false" clickable="true" enabled="true" focusable="true" focused="false" long-clickable="false" password="false" scrollable="false" selected="false" bounds="[144,1272][481,1413]" displayed="true">\n        <android.widget.TextView index="0" package="com.classengage.android" class="android.widget.TextView" text=" US +1" resource-id="com.classengage.android:id/textView_selectedCountry" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" long-clickable="false" password="false" scrollable="false" selected="false" bounds="[172,1300][369,1385]" displayed="true"/>\n        </android.widget.RelativeLayout>\n        <android.widget.EditText index="4" package="com.classengage.android" class="android.widget.EditText" text="Phone Number" resource-id="com.classengage.android:id/email_input" checkable="false" checked="false" clickable="true" enabled="true" focusable="true" focused="true" long-clickable="true" password="false" scrollable="false" selected="false" bounds="[499,1264][1345,1422]" displayed="true"/>\n        <android.widget.TextView index="5" package="com.classengage.android" class="android.widget.TextView" text="Continue" resource-id="com.classengage.android:id/login_button" checkable="false" checked="false" clickable="true" enabled="true" focusable="true" focused="false" long-clickable="false" password="false" scrollable="false" selected="false" bounds="[95,1468][1345,1636]" displayed="true"/>\n        <android.widget.TextView index="6" package="com.classengage.android" class="android.widget.TextView" text="Signin via email" resource-id="com.classengage.android:id/signin_via_email" checkable="false" checked="false" clickable="true" enabled="true" focusable="true" focused="false" long-clickable="false" password="false" scrollable="false" selected="false" bounds="[549,1685][891,1751]" displayed="true"/>\n        <android.widget.TextView index="7" package="com.classengage.android" class="android.widget.TextView" text="I\'m a Faculty" resource-id="com.classengage.android:id/faculty_button" checkable="false" checked="false" clickable="true" enabled="true" focusable="true" focused="false" long-clickable="false" password="false" scrollable="false" selected="false" bounds="[468,1948][972,2099]" displayed="true"/>\n        <android.widget.TextView index="8" package="com.classengage.android" class="android.widget.TextView" text="By joining our app, you agree to our" resource-id="com.classengage.android:id/joining_app_text" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" long-clickable="false" password="false" scrollable="false" selected="false" bounds="[298,2190][1142,2256]" displayed="true"/>\n        <android.widget.TextView index="9" package="com.classengage.android" class="android.widget.TextView" text="Terms of Service" resource-id="com.classengage.android:id/terms_of_service_text" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" long-clickable="false" password="false" scrollable="false" selected="false" bounds="[537,2256][904,2322]" displayed="true"/>\n        </android.widget.ScrollView>\n        </android.widget.FrameLayout>\n        </hierarchy>',(function(e,l){a(l)})),t(e),console.log("test")}),[]),Object(f.jsx)("div",{className:"wrapper",children:Object(f.jsx)("canvas",Object(o.a)({onClick:function(e){var a=c.filter((function(a){return a.bound[0][0]<=e.nativeEvent.offsetX&&a.bound[1][0]>=e.nativeEvent.offsetX&&a.bound[0][1]<=e.nativeEvent.offsetY&&a.bound[1][1]>=e.nativeEvent.offsetY&&"android.widget.FrameLayout"!==a.element&&"android.widget.ScrollView"!==a.element})),l=d.current,s=null===l||void 0===l?void 0:l.getContext("2d");s.clearRect(0,0,l.width,l.height),a.map((function(e){return e&&(s.font="60px Arial",s.fillText(e.element,e.bound[0][0],parseInt(e.bound[0][1])-10),s.beginPath(),s.lineWidth="10",s.strokeStyle="blue",s.rect(e.bound[0][0],e.bound[0][1],e.bound[1][0]-e.bound[0][0],e.bound[1][1]-e.bound[0][1]),s.stroke()),e}))},className:"bg-ss",width:1440,height:2392,ref:d},e))})},g=function(e){var a=Object(s.useState)(0),l=Object(r.a)(a,2),c=l[0],t=l[1],d=Object(s.useState)(0),n=Object(r.a)(d,2),i=n[0],u=n[1],b=Object(s.useState)(0),g=Object(r.a)(b,2),x=g[0],p=g[1],w=Object(s.useState)(-30),h=Object(r.a)(w,2),k=h[0],j=h[1],m=Object(s.useState)(null),y=Object(r.a)(m,2),v=y[0],O=y[1],T=Object(s.useState)([{x:100,y:10},{x:100,y:120},{x:100,y:230},{x:200,y:10},{x:200,y:120},{x:200,y:230},{x:300,y:10},{x:300,y:120},{x:300,y:230},{x:400,y:10},{x:400,y:120},{x:400,y:230},{x:500,y:10},{x:500,y:120},{x:500,y:230},{x:600,y:10},{x:600,y:120},{x:600,y:230},{x:700,y:10},{x:700,y:120},{x:700,y:230},{x:800,y:10},{x:800,y:120},{x:800,y:230},{x:900,y:10},{x:900,y:120},{x:900,y:230}]),V=Object(r.a)(T,2),S=V[0],_=V[1],E=Object(s.useRef)(null),C=Object(s.useRef)(null),N=Object(s.useRef)(null);Object(s.useEffect)((function(){var e,a=E.current,l=null===a||void 0===a?void 0:a.getContext("2d");(e=l).clearRect(0,0,1080,720),e.drawImage(C.current,c-30,670,60,60),e.beginPath(),e.arc(x,700-k,10,0,2*Math.PI),e.fillStyle="black",e.fill(),console.log("Test1"),S.map((function(a){return e.drawImage(N.current,a.x,a.y,80,80),a}))}),[k,x,c,i,S]),Object(s.useEffect)((function(){var e;k>720&&(clearInterval(v),j(-30),O(null));for(var a=0;a<S.length;a++){var l=S[a];if(x>=(null===l||void 0===l?void 0:l.x)&&x<=(null===l||void 0===l?void 0:l.x)+80&&700-k>=(null===l||void 0===l?void 0:l.y)&&700-k<=(null===l||void 0===l?void 0:l.y)+80){clearInterval(v),j(-30),O(null),e=a;break}}_((function(a){return a.filter((function(a,l){return l!==e}))}))}),[k,v,x,O]);return Object(f.jsxs)("div",{className:"game-scene",children:[Object(f.jsx)("img",{className:"hidden",ref:C,src:"/spaceship.png",style:{width:"60px"},alt:"spacehip"}),Object(f.jsx)("img",{className:"hidden",ref:N,src:"/bubble.svg",style:{width:"60px"},alt:"bubble"}),Object(f.jsxs)("div",{children:["Mouse: ",c+","+i,"  Bullet: ",x+","+k,"  Score: ",27-S.length]}),Object(f.jsx)("canvas",Object(o.a)({onClick:function(){if(null==v){p(c),j(40);var e=setInterval((function(){j((function(e){return e+10}))}),10);O(e)}},onMouseMove:function(e){t(e.nativeEvent.offsetX),u(e.nativeEvent.offsetY)},width:1080,height:720,style:{border:"4px dashed #0000001f"},ref:E},e))]})},x=function(){return Object(f.jsxs)("div",{className:"main",children:[Object(f.jsx)("h1",{children:"Please select the project you want to see:"}),Object(f.jsxs)("div",{className:"menu",children:[Object(f.jsx)(n.b,{className:"button",to:"/bubble-burst",children:"Bubble Burst"}),Object(f.jsx)(n.b,{className:"button",to:"/bounding-box",children:"Bounding Box"})]})]})};var p=function(){return Object(f.jsx)(n.a,{children:Object(f.jsx)(i.c,{children:Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(i.a,{path:"/",exact:!0,component:x}),Object(f.jsx)(i.a,{path:"/bounding-box",exact:!0,component:b}),Object(f.jsx)(i.a,{path:"/bubble-burst",exact:!0,component:g})]})})})},w=function(e){e&&e instanceof Function&&l.e(3).then(l.bind(null,102)).then((function(a){var l=a.getCLS,s=a.getFID,c=a.getFCP,t=a.getLCP,d=a.getTTFB;l(e),s(e),c(e),t(e),d(e)}))};d.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(p,{})}),document.getElementById("root")),w()},69:function(e,a,l){},84:function(e,a){},86:function(e,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.25f81c8d.chunk.js.map