(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{52:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n.n(r),c=n(30),i=n.n(c),s=n(10),u=n(21),o=n(8),j=n(11),b=n.n(j),l=n(16),d=n(19);n(41),n(42),n(43);d.a.initializeApp({apiKey:"AIzaSyAOBRNB2YzYpQ6T1N4Ih-0_EFB4sGmxwXg",authDomain:"nwitter-75b7e.firebaseapp.com",projectId:"nwitter-75b7e",storageBucket:"nwitter-75b7e.appspot.com",messagingSenderId:"173198276901",appId:"1:173198276901:web:394b5696935d8430d9c2cc"});var p=d.a,O=d.a.auth(),h=d.a.firestore(),f=d.a.storage(),x=n(2),m=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),i=Object(s.a)(c,2),u=i[0],o=i[1],j=Object(r.useState)(!0),d=Object(s.a)(j,2),p=d[0],h=d[1],f=Object(r.useState)(""),m=Object(s.a)(f,2),v=m[0],g=m[1],w=function(e){var t=e.target,n=t.name,r=t.value;"email"===n?a(r):"password"===n&&o(r)},y=function(){var e=Object(l.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=7;break}return e.next=5,O.createUserWithEmailAndPassword(n,u);case 5:e.next=9;break;case 7:return e.next=9,O.signInWithEmailAndPassword(n,u);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),g(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("form",{onSubmit:y,children:[Object(x.jsx)("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:n,onChange:w}),Object(x.jsx)("input",{name:"password",value:u,onChange:w,type:"password",placeholder:"Password",required:!0}),Object(x.jsx)("input",{type:"submit",value:p?"create account":"Log in"}),v]}),Object(x.jsx)("span",{onClick:function(){return h((function(e){return!e}))},children:p?Object(x.jsx)("button",{children:"Sign in"}):Object(x.jsx)("button",{children:"Create account"})})]})},v=function(){var e=function(){var e=Object(l.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?r=new p.auth.GoogleAuthProvider:"github"===n&&(r=new p.auth.GithubAuthProvider),e.next=4,O.signInWithPopup(r);case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{children:[Object(x.jsx)(m,{}),Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{onClick:e,name:"google",children:"Login with Google"}),Object(x.jsx)("button",{onClick:e,name:"github",children:"Login with Github"})]})]})},g=n(33),w=function(e){var t=e.nweetObj,n=e.isOwner,a=Object(r.useState)(!1),c=Object(s.a)(a,2),i=c[0],u=c[1],o=Object(r.useState)(t.text),j=Object(s.a)(o,2),d=j[0],p=j[1],O=function(){var e=Object(l.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure to delete?")){e.next=7;break}return e.next=4,h.doc("nweets/".concat(t.id)).delete();case 4:if(""===t.attachmentUrl){e.next=7;break}return e.next=7,f.refFromURL(t.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){return u((function(e){return!e}))},v=function(){var e=Object(l.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,h.doc("nweets/".concat(t.id)).update({text:d});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{children:i?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("form",{onSubmit:v,children:[Object(x.jsx)("input",{onChange:function(e){var t=e.target.value;p(t)},value:d,required:!0}),Object(x.jsx)("input",{type:"submit",value:"Update Nweet"})]}),Object(x.jsx)("button",{onClick:m,children:"Cancel"})]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(x.jsx)("img",{src:t.attachmentUrl,alt:"attachment",width:"80px",height:"80px"}),n&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("button",{onClick:O,children:"Delete Nweet"}),Object(x.jsx)("button",{onClick:m,children:"Edit Nweet"})]})]})})},y=n(54),k=function(e){var t=e.userObj,n=Object(r.useState)(""),a=Object(s.a)(n,2),c=a[0],i=a[1],u=Object(r.useState)(""),o=Object(s.a)(u,2),j=o[0],d=o[1],p=function(){var e=Object(l.a)(b.a.mark((function e(n){var r,a,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r="",""===j){e.next=10;break}return a=f.ref().child("".concat(t.uid,"/").concat(Object(y.a)())),e.next=6,a.putString(j,"data_url");case 6:return s=e.sent,e.next=9,s.ref.getDownloadURL();case 9:r=e.sent;case 10:return e.next=13,h.collection("nweets").add({text:c,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:r});case 13:i("");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("form",{onSubmit:p,children:[Object(x.jsx)("input",{value:c,onChange:function(e){e.preventDefault();var t=e.target.value;i(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(x.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;d(t)},n.readAsDataURL(t)}}),Object(x.jsx)("input",{type:"submit",value:"Nweet"}),j&&Object(x.jsxs)("div",{children:[Object(x.jsx)("img",{src:j,alt:"show",width:"50px",height:"50px"}),Object(x.jsx)("button",{onClick:function(){return d("")},children:"Clear"})]})]})},S=function(e){var t=e.userObj,n=Object(r.useState)([]),a=Object(s.a)(n,2),c=a[0],i=a[1];return Object(r.useEffect)((function(){h.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(g.a)({id:e.id},e.data())}));i(t)}))}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(k,{userObj:t}),c.map((function(e){return Object(x.jsx)(w,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))]})},C=function(e){var t=e.userObj,n=e.refreshUser,a=Object(o.g)(),c=Object(r.useState)(t.displayName),i=Object(s.a)(c,2),u=i[0],j=i[1],d=function(){var e=Object(l.a)(b.a.mark((function e(r){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),t.displayName===u){e.next=5;break}return e.next=4,t.updateProfile({displayName:u});case 4:n();case 5:j("");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("form",{onSubmit:d,children:[Object(x.jsx)("input",{onChange:function(e){var t=e.target.value;j(t)},type:"text",placeholder:"Display name",value:u}),Object(x.jsx)("input",{type:"submit",value:"Update profile"})]}),Object(x.jsx)("button",{onClick:function(){O.signOut(),a.push("/")},children:"Log out"})]})},U=function(e){var t=e.userObj;return Object(x.jsx)("nav",{children:Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)(u.b,{to:"/",children:"Home"})}),Object(x.jsx)("li",{children:Object(x.jsxs)(u.b,{to:"/profile",children:[t.displayName,"'s Profile"]})})]})})},N=function(e){var t=e.isLoggedIn,n=e.userObj,r=e.refreshUser;return Object(x.jsxs)(u.a,{children:[t&&Object(x.jsx)(U,{userObj:n}),Object(x.jsxs)(o.d,{children:[t?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(o.b,{exact:!0,path:"/",children:Object(x.jsx)(S,{userObj:n})}),Object(x.jsx)(o.b,{exact:!0,path:"/profile",children:Object(x.jsx)(C,{refreshUser:r,userObj:n})})]}):Object(x.jsx)(o.b,{exact:!0,path:"/",children:Object(x.jsx)(v,{})}),Object(x.jsx)(o.a,{from:"*",to:"/"})]})]})};var I=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(null),i=Object(s.a)(c,2),u=i[0],o=i[1];return Object(r.useEffect)((function(){O.onAuthStateChanged((function(e){o(!!e&&{uid:e.uid,displayName:e.displayName,updateProfile:function(t){return e.updateProfile(t)}}),a(!0)}))}),[]),Object(x.jsx)(x.Fragment,{children:n?Object(x.jsx)(N,{refreshUser:function(){var e=O.currentUser;o({uid:e.uid,displayName:e.displayName,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(u),userObj:u}):"initializing..."})};i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(I,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.6fa9c6a1.chunk.js.map