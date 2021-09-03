(this["webpackJsonpreaction-time"]=this["webpackJsonpreaction-time"]||[]).push([[0],{140:function(e,t,n){},252:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(12),r=n.n(c),o=(n(140),n(30)),l=(n(51),n(10)),d=n(121),s=n.n(d),m=n(281),j=n(254),u=n(285),h=n(24),b=n(3);function g(e){var t=e.title;return Object(b.jsxs)(j.a,{variant:"h3",gutterBottom:!0,style:{margin:"15px"},children:[t,Object(b.jsx)(h.b,{to:"/gameMenu",style:{textDecoration:"none",float:"right",marginRight:"10px"},children:Object(b.jsx)(u.a,{style:{color:"#8C8185"},children:Object(b.jsx)("span",{id:"menuButton",children:"Switch games"})})})]})}var p=Object(m.a)({scoreCard:{backgroundColor:"white",padding:"10px",position:"absolute",bottom:"50%",marginLeft:"15px",borderRadius:"15px"},bottom:{marginBottom:"5px"},victory:{display:"none",fontSize:24,color:"white",backgroundColor:"#31BFF3",width:"80px",margin:"auto",padding:"5px",borderRadius:"15px"},menu:{backgroundColor:"#F6E683",padding:"5px",borderRadius:"10px"}});function x(){var e,t=Object(l.f)(),n=p(),a=t.state,c=a.goal,r=Object(i.useState)(0),d=Object(o.a)(r,2),m=d[0],j=d[1],u=Object(i.useState)(0),h=Object(o.a)(u,2),x=h[0],v=h[1],y=100,O=function(e,t){e.style.display="none","clicked"===t?j((function(e){return e+1})):v((function(e){return e+1}))},f=function(e){return Math.floor(Math.random()*(e-y)+y)},k=function(){var t,n=document.createElement("div");n.classList.add("circle"),n.style.width=a.size+"px",n.style.height=a.size+"px",n.style.animation="circleShrink ".concat(a.rate,"s ease-in"),t="\n        @keyframes circleShrink { \n          from {\n            width: ".concat(a.size,"px;\n            height: ").concat(a.size,"px;\n          }\n          to {\n            width: 0px;\n            height: 0px;\n          }\n        }"),e||(e=document.createElement("style"),document.head.appendChild(e)),e.sheet.insertRule(t,e.children.length),n.id="id"+m,n.style.backgroundColor=a.colour,n.style.left=f(window.innerWidth-y)+"px",n.style.top=f(window.innerHeight-y)+"px",n.addEventListener("animationend",(function(){O(n,"timeout")}),!1),n.addEventListener("click",(function(){O(n,"clicked")}),!1),document.getElementById("gameScreen").appendChild(n)};return Object(i.useEffect)((function(){var e=window.setInterval((function(){if(!(m<c)){var t=document.getElementById("gameScreen");return null!==t&&(t.style.display="none"),clearInterval(e),document.getElementById("menuButton").className=n.menu,void(document.getElementById("victory").style.display="block")}k()}),500);return function(){return clearInterval(e)}})),Object(b.jsxs)("div",{children:[Object(b.jsx)(g,{title:"Reaction Game"}),Object(b.jsxs)("div",{className:n.scoreCard,children:[Object(b.jsxs)("div",{children:["Score: ",m]}),Object(b.jsxs)("div",{className:n.bottom,children:["Missed: ",x]}),Object(b.jsx)(s.a,{animate:!0,animationDuration:"1s",responsive:!1,size:"100",lineWidth:"25",progress:Math.floor(m*(100/c)),progressColor:"rgb(76, 154, 255)",bgColor:"#ecedf0",textColor:"#6b778c",textStyle:{font:"bold 4rem Helvetica, Arial, sans-serif"},percentSpacing:10,roundedStroke:!1,showPercentage:!0,showPercentageSymbol:!0})]}),Object(b.jsx)("div",{id:"gameScreen"}),Object(b.jsx)("div",{id:"victory",className:n.victory,children:"Victory!"})]})}var v=n(64),y=n(8),O=n(131),f=n(288),k=n(284),C=n(289),w=n(287),B=n(286),E=n(282),S=n(132),I=n(130),N=n.n(I),R=n.p+"static/media/ReactionDemo.220a6501.mp4",z=Object(m.a)({title:{textAlign:"center",marginTop:"20px"},video:{padding:"20px",backgroundColor:"#A484E9",borderRadius:"20px",width:"38%",display:"block",margin:"auto",marginBottom:"10px"}});function F(){var e=z();return Object(b.jsxs)("div",{children:[Object(b.jsx)(j.a,{variant:"h5",gutterBottom:!0,className:e.title,children:"How to play"}),Object(b.jsx)("video",{className:e.video,controls:!0,children:Object(b.jsx)("source",{src:R,type:"video/mp4"})})]})}var G=Object(m.a)((function(e){return Object(f.a)({title:{textAlign:"center"},margin:{margin:e.spacing(1)},typography:{padding:e.spacing(2),width:"200px"},beginGame:{position:"absolute",margin:"24px",top:40,right:0},setting:{display:"flex",justifyContent:"center",alignItems:"flex-start"},modes:{display:"flex",flexDirection:"column",flexWrap:"wrap",alignContent:"center",marginTop:"auto",marginBottom:"auto"},inputs:{width:"200px",backgroundColor:"white",padding:"10px",borderRadius:"15px",marginRight:"20px",marginLeft:"20px"}})}));function M(){var e=G(),t=Object(i.useState)("#ff0000"),n=Object(o.a)(t,2),a=n[0],c=n[1],r=Object(i.useState)("Normal"),l=Object(o.a)(r,2),d=l[0],s=l[1],m=Object(i.useState)({circleSize:"30",shrinkRate:"2",goal:15}),p=Object(o.a)(m,2),x=p[0],f=p[1],I=function(e){return function(t){f(Object(y.a)(Object(y.a)({},x),{},Object(v.a)({},e,t.target.value)))}},R=function(e){void 0!==document.getElementById(d)&&null!==document.getElementById(d)&&(document.getElementById(d).style.opacity="1"),void 0!==document.getElementById(e)&&(document.getElementById(e).style.opacity="0.4"),s(e),f("Easy"===e?{circleSize:"40",shrinkRate:"2",goal:10}:"Hard"===e?{circleSize:"25",shrinkRate:"1",goal:20}:{circleSize:"30",shrinkRate:"1.5",goal:15})},z=Object(i.useState)(null),M=Object(o.a)(z,2),L=M[0],A=M[1],T=Boolean(L),H=T?"simple-popover":void 0;return Object(b.jsxs)("div",{children:[Object(b.jsx)(g,{title:"Reaction Game"}),Object(b.jsxs)("div",{children:[Object(b.jsx)(j.a,{variant:"h4",gutterBottom:!0,className:e.title,children:"Setting"}),Object(b.jsx)(k.a,{id:H,open:T,anchorEl:L,onClose:function(){A(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:Object(b.jsx)(j.a,{className:e.typography,children:"3 pre-set modes available. Feel free to alter to your preference."})})]}),Object(b.jsxs)("div",{className:e.setting,children:[Object(b.jsxs)("div",{className:e.modes,children:[Object(b.jsx)(u.a,{id:"Easy",onClick:function(){R("Easy")},children:"Easy"}),Object(b.jsx)(u.a,{id:"Normal",onClick:function(){R("Normal")},children:"Normal"}),Object(b.jsx)(u.a,{id:"Hard",onClick:function(){R("Hard")},children:"Hard"}),Object(b.jsx)(u.a,{onClick:function(e){console.log(e.currentTarget),A(e.currentTarget)},children:Object(b.jsx)(S.a,{icon:N.a,width:"23",height:"23"})})]}),Object(b.jsxs)("div",{className:e.inputs,children:[Object(b.jsxs)(C.a,{className:e.margin,variant:"outlined",children:[Object(b.jsx)(w.a,{htmlFor:"circleSize",children:"Circle Size"}),Object(b.jsx)(B.a,{id:"circleSize",onChange:I("circleSize"),value:x.circleSize,endAdornment:Object(b.jsx)(E.a,{position:"end",children:"px"}),labelWidth:80})]}),Object(b.jsxs)(C.a,{className:e.margin,variant:"outlined",children:[Object(b.jsx)(w.a,{htmlFor:"shrinkRate",children:"Shrink Rate"}),Object(b.jsx)(B.a,{id:"shrinkRate",onChange:I("shrinkRate"),value:x.shrinkRate,endAdornment:Object(b.jsx)(E.a,{position:"end",children:"sec"}),labelWidth:90})]}),Object(b.jsxs)(C.a,{className:e.margin,variant:"outlined",children:[Object(b.jsx)(w.a,{htmlFor:"goal",children:"Target Goal"}),Object(b.jsx)(B.a,{id:"goal",onChange:I("goal"),value:x.goal,endAdornment:Object(b.jsx)(E.a,{position:"end",children:"circles"}),labelWidth:90})]})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)(O.a,{triangle:"hide",color:a,onChangeComplete:function(e){c(e.hex)}}),Object(b.jsx)("div",{id:"settingsCircle",style:{backgroundColor:a,width:x.circleSize+"px",height:x.circleSize+"px"}})]})]}),Object(b.jsx)(h.b,{to:{pathname:"/reactionGame",state:{colour:a,size:x.circleSize,rate:x.shrinkRate,goal:x.goal}},children:Object(b.jsx)(u.a,{className:e.beginGame,children:Object(b.jsx)(j.a,{style:{color:"#8C8185"},children:" Begin Game"})})}),Object(b.jsx)(F,{})]})}var L=n.p+"static/media/MemoryDemo.30bd2b4c.mp4",A=Object(m.a)({title:{textAlign:"center"},video:{padding:"20px",backgroundColor:"#A484E9",borderRadius:"20px",width:"60%",display:"block",margin:"auto",marginBottom:"10px"}});function T(){var e=A();return Object(b.jsxs)("div",{children:[Object(b.jsx)(j.a,{variant:"h4",gutterBottom:!0,className:e.title,children:"How to play"}),Object(b.jsx)("video",{className:e.video,controls:!0,children:Object(b.jsx)("source",{src:L,type:"video/mp4"})})]})}var H=Object(m.a)({controlPanel:{position:"absolute",width:120,backgroundColor:"white",padding:10,bottom:"50%",marginLeft:"15px",borderRadius:"15px"},beginGame:{position:"absolute",margin:"24px",top:40,right:0},defeat:{display:"none",fontSize:24,color:"white",backgroundColor:"#FFAF68",width:"120px",margin:"auto",padding:"5px",borderRadius:"15px"},menu:{backgroundColor:"#F6E683",padding:"5px",borderRadius:"10px"}});function D(){var e=H(),t=new Array,n=10,a=1,c=1,r=!1,o=function(t){if(r)if(t.innerHTML=t.id,t.style.color="white",t.id!==a.toString()){t.style.backgroundColor="#F4889A";for(var i=0;i<n;i++){var o=document.getElementById("col ".concat(i));if(null!==o){var l=o.cloneNode(!0);document.getElementById("memoryBoard").appendChild(l),o.style.display="none"}}document.getElementById("defeat").style.display="block",document.getElementById("menuButton").className=e.menu}else t.style.backgroundColor="#79D45E",a++,t.id===c.toString()&&(document.getElementById("nextRound").style.display="block")},l=function(e){return Math.floor(Math.random()*e)+1},d=function(e,t){for(var n=0;n<e.length;n++)if(t===e[n])return!0;return!1},s=function(e){document.getElementById("nextRound").style.display="none";for(var i=0;i<n;i++){var a,c=document.createElement("div");c.id="col ".concat(i);for(var r=function(e){var n=document.createElement("div");n.classList.add("boardCell"),n.id="(".concat(i,",").concat(e,")"),t.push(n.id),n.innerHTML="",n.addEventListener("click",(function(){o(n)})),c.appendChild(n)},s=0;s<n;s++)r(s);null!==document.getElementById("memoryBoard")&&(null===(a=document.getElementById("memoryBoard"))||void 0===a||a.appendChild(c))}for(var m=new Array;m.length<e;)for(var j=0;j<Math.pow(n,2);j++)if(1===l(2)){var u=l(e);if(null!==document.getElementById(t[j])){var h=document.getElementById(t[j]);d(m,u)||(h.innerHTML=h.id=u.toString(),m.push(u))}}for(var b=0;b<Math.pow(n,2);b++){var g=document.getElementById(t[b]);null!==g&&"("===g.id.charAt(0)&&(document.getElementById(t[b]).style.display="none")}};Object(i.useEffect)((function(){s(c)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)(g,{title:"Memory Game"}),Object(b.jsxs)("div",{id:"memoryExplanation",children:[Object(b.jsx)(T,{}),Object(b.jsx)(u.a,{onClick:function(){document.getElementById("memoryExplanation").style.display="none",document.getElementById("memoryGame").style.display="block"},className:e.beginGame,children:Object(b.jsx)(j.a,{style:{color:"#8C8185"},children:" Begin Game"})})]}),Object(b.jsxs)("div",{id:"memoryGame",children:[Object(b.jsx)("div",{id:"defeat",className:e.defeat,children:"Game Over"}),Object(b.jsxs)("div",{className:e.controlPanel,children:[Object(b.jsxs)("div",{children:["Current Level: ",Object(b.jsx)("span",{id:"levelTracker",children:"1"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)(u.a,{onClick:function(){if(!r){var e=document.getElementById("memoryBoard");if(r=!0,null!==e)for(var t=e.children,n=0;n<t.length;n++)for(var i=t[n].children,a=0;a<i.length;a++){i[a].innerHTML=" "}}},children:"Start game"}),Object(b.jsx)(u.a,{id:"nextRound",onClick:function(){!function(){c++,a=1,t.length=0,r=!1;for(var e=0;e<n;e++){var i=document.getElementById("col ".concat(e));null!==i&&i.remove()}}(),s(c),document.getElementById("levelTracker").innerHTML=" ".concat(c)},children:"Next round"})]})]}),Object(b.jsx)("div",{id:"memoryBoard"})]})]})}var P=n.p+"static/media/reaction-colour.e4ae3958.png",W=n.p+"static/media/memory-colour.a8f728ae.png",J=n(283);function V(){var e={hidden:{x:-10,opacity:0},visible:{x:0,opacity:1}};return Object(b.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(b.jsxs)(J.a.div,{id:"icons",variants:{hidden:{x:"-200vw"},visible:{x:"1vw",transition:{delay:.5,when:"beforeChildren",stiffness:45,type:"spring",staggerChildren:.3}}},animate:"visible",initial:"hidden",children:[Object(b.jsx)("div",{className:"games",children:Object(b.jsx)(h.b,{to:"/reactionSetting",children:Object(b.jsx)(J.a.img,{src:P,alt:"reaction game",width:"150px",variants:e})})}),Object(b.jsx)("div",{className:"games",children:Object(b.jsx)(h.b,{to:"/memoryGame",children:Object(b.jsx)(J.a.img,{src:W,alt:"memory game",width:"150px",variants:e})})})]}),Object(b.jsxs)("div",{id:"imgReference",children:["Icons made by ",Object(b.jsx)("a",{href:"https://www.freepik.com",title:"Freepik",children:"[Freepik]"}),"from ",Object(b.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"[www.flaticon.com]"})]})]})}function q(){return Object(b.jsx)(h.a,{basename:"/Brain-Games",children:Object(b.jsx)("div",{children:Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"/reactionGame",children:Object(b.jsx)(x,{})}),Object(b.jsx)(l.a,{path:"/reactionSetting",children:Object(b.jsx)(M,{})}),Object(b.jsx)(l.a,{path:"/memoryGame",children:Object(b.jsx)(D,{})}),Object(b.jsx)(l.a,{path:"/",children:Object(b.jsx)(V,{})})]})})})}var K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,290)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),c(e),r(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(q,{})}),document.getElementById("root")),K()},51:function(e,t,n){}},[[252,1,2]]]);
//# sourceMappingURL=main.b956572b.chunk.js.map