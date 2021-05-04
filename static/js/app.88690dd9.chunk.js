(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{371:function(e,t,n){"use strict";n.d(t,"a",(function(){return N}));var a=n(0),r=n.n(a),s=n(1),o=n(310),l=n(474),i=n(15),c=n.n(i),m=n(3),u=n(16),d=n(63),j=n(37),g=n(370);s.a.create({buttonStyle:{flex:1,padding:5},repText:{fontSize:20}});function f(){var e=Object(a.useState)(!1),t=c()(e,2),n=t[0],r=t[1],s=Object(a.useState)(!1),o=c()(s,2),l=o[0],i=o[1],f=Object(a.useState)(""),p=c()(f,2),b=p[0],y=p[1],h=Object(a.useState)(""),E=c()(h,2),k=E[0],v=E[1],x=Object(a.useState)(!1),S=c()(x,2);S[0],S[1];return a.createElement(a.Fragment,null,a.createElement(d.a,{style:{flex:1,alignItems:"center",justifyContent:"space-evenly",margin:10,padding:5,backgroundColor:"#afabeb"}},a.createElement(m.a,null,l?a.createElement(a.Fragment,null,a.createElement(m.a,{style:{alignItems:"center",justifyContent:"space-between"}},a.createElement(u.a,{style:{fontSize:25,fontWeight:"bold",padding:10}},"Welcome back, ",b,"!"),a.createElement(j.a,{onPress:function(){return i(!1)},title:"Logout",style:{padding:5}}))):a.createElement(a.Fragment,null,a.createElement(u.a,{style:{fontSize:25,fontWeight:"bold",textAlign:"center"}},"Welcome to your 30 Day Challenge! "),a.createElement(m.a,{style:{alignItems:"center",justifyContent:"space-evenly"},onPress:function(){return close}},a.createElement(u.a,{style:{padding:10}},"Please log in below!"),a.createElement(j.a,{onPress:function(){return r(!0)},title:"Login",style:{padding:5}}))),a.createElement(j.e,{isVisible:n,ModalComponent:g.a},a.createElement(m.a,{style:{padding:5,margin:5,width:200}},a.createElement(u.a,null,"Please login below"),a.createElement(j.d,{placeholder:"Username",value:b,onChangeText:function(e){return y(e)}}),a.createElement(j.d,{placeholder:"Password",value:k,secureTextEntry:!0,onChangeText:function(e){return v(e)}}),a.createElement(j.a,{title:"Login",onPress:function(){i(!0),r(!1)},style:{padding:5}}))))))}var p=n(22),b=n.n(p),y=n(57),h=n(60);function E(e){e.navigation;var t=r.a.useState(""),n=c()(t,2),a=n[0],s=n[1],o=r.a.useState([]),l=c()(o,2),i=l[0],g=l[1];var f=function(){var e={key:(i.length+1).toString(),description:a,completed:!1},t=i.concat(e);g(t),console.log(i.key)};return r.a.createElement(d.a,{style:k.container},r.a.createElement(j.b,null,r.a.createElement(j.b.Title,{style:k.header},"Make a Grocery List for the Week!"),r.a.createElement(u.a,{style:{textAlign:"center"}},"Keep track of what you need to eat healthy all week long."),r.a.createElement(y.a,{data:i,renderItem:function(e){var t=e.item;return r.a.createElement(m.a,{style:k.body},r.a.createElement(j.c,{checked:t.completed,onPress:function(){var e=b()(i),n=e.find((function(e){return t.key==e.key}));n.completed=!n.completed,g(e)}}),r.a.createElement(u.a,{style:t.completed?{textDecorationLine:"line-through",textDecorationStyle:"solid"}:void 0},t.description),r.a.createElement(j.a,{onPress:function(){var e=b()(i).filter((function(e){return t.key!=e.key}));g(e)},title:"Delete"}))}}),r.a.createElement(j.b,null,r.a.createElement(h.a,{style:k.input,value:a,onChangeText:function(e){s(e)},onKeyPress:function(e){"Enter"==e.key&&f()}}),r.a.createElement(j.a,{title:"Add new item",onPress:f,style:k.button}))))}var k=s.a.create({container:{flex:1,margin:5,marginTop:40,backgroundColor:"#afabeb"},body:{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderColor:"black",borderWidth:1,margin:10,padding:20},input:{borderRadius:5,borderColor:"black",borderWidth:1,padding:10,height:40,marginBottom:12,marginLeft:12,marginRight:12},button:{padding:10},header:{fontSize:20}}),v=n(369),x=function(e){return new Date(e).toISOString().split("T")[0]};function S(e){var t=e.navigation,n=Object(a.useState)({}),s=c()(n,2),o=s[0],l=s[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{style:{flex:1,padding:10,margin:10}},r.a.createElement(u.a,{style:{fontSize:30,fontWeight:"bold",textAlign:"center",padding:5}},"Calendar"),r.a.createElement(v.a,{items:o,loadItemsForMonth:function(e){setTimeout((function(){for(var t=-15;t<85;t++){var n=e.timestamp+24*t*60*60*1e3,a=x(n);o[a]||(o[a]=[],o[a].push({name:"Workout for Today",height:Math.max(50,Math.floor(150*Math.random()))}))}var r={};Object.keys(o).forEach((function(e){r[e]=o[e]})),l(r)}),1e3)},renderItem:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(j.a,{style:z.item,title:e.name,onPress:function(){return t.navigate("Workouts")}})))}})))}var z=s.a.create({item:{flex:1,flexDirection:"row",alignContent:"space-between",backgroundColor:"white",borderRadius:5,padding:10,marginRight:10,marginTop:17}}),w=n(473),C=[{name:"Sit ups",details:"Do 2 reps of 10",image:n(439),key:"1"},{name:"Push ups",details:"Do 3 reps of 20",image:n(440),key:"2"},{name:"Jumping Jacks",details:"Do 5 reps of 25",image:n(441),key:"3"}];function D(e){var t=e.navigation,n=Object(a.useState)(C),r=c()(n,2),s=r[0];r[1];return a.createElement(a.Fragment,null,a.createElement(d.a,{style:P.body},a.createElement(m.a,{style:{padding:10}},a.createElement(u.a,{style:{fontSize:30,padding:5,textAlign:"center",fontWeight:"bold"}},"Your Daily Workout!"),a.createElement(y.a,{data:s,renderItem:function(e){var n=e.item;return a.createElement(m.a,{style:{justifyContent:"center",padding:10}},a.createElement(j.a,{onPress:function(){return t.push("Details",{item:n,items:s})},style:{fontSize:20,fontFamily:"Courier-new",color:"#615bbd",padding:5},title:n.name}))}}))))}var P=s.a.create({body:{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"center",borderColor:"black",borderWidth:1,margin:5,padding:10,backgroundColor:"#afabeb"},buttonStyle:{flex:1,padding:5}}),O=n(31);s.a.create({buttonStyle:{flex:1,padding:5},repText:{fontSize:20}});function I(e){var t=e.navigation,n=e.route.params,r=n.item,s=n.items,o=s.findIndex((function(e){return e==r}));return o+=1,a.createElement(a.Fragment,null,a.createElement(d.a,null,a.createElement(m.a,{style:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#afabeb",padding:15}},a.createElement(O.a,{style:{height:250,width:350},source:r.image}),a.createElement(u.a,{style:{padding:10}},"Description : ",r.details),o<s.length?a.createElement(j.a,{title:"Next Exercise: "+s[o].name,style:{padding:10},onPress:function(){return t.push("Details",{item:s[o],items:s})}}):void 0,a.createElement(j.a,{title:"Go Home",style:{padding:10},onPress:function(){return t.navigate("Exercises")}}))))}var T=Object(w.a)();function W(){return a.createElement(o.a,{independent:!0},a.createElement(T.Navigator,{initialRouteName:"Exercises"},a.createElement(T.Screen,{name:"Exercises",component:D}),a.createElement(T.Screen,{name:"Details",component:I})))}var F=n(368);function L(){var e=Object(a.useState)(!1),t=c()(e,2),n=t[0],s=t[1],o=Object(a.useState)(!1),l=c()(o,2),i=l[0],u=l[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{style:R.body},r.a.createElement(m.a,{style:R.container},r.a.createElement(F.Stopwatch,{laps:!0,msecs:!0,start:n,reset:i,getTime:function(e){}}),r.a.createElement(j.a,{onPress:function(){s(!n),u(!1)},title:n?"Stop":"Start",style:R.buttonStyle}),r.a.createElement(j.a,{onPress:function(){s(!1),u(!0)},style:R.buttonStyle,title:"Reset"}))))}var R=s.a.create({body:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#afabeb"},buttonStyle:{padding:5},container:{backgroundColor:"#000",padding:5,borderRadius:5,width:360,margin:10,padding:5}}),M=Object(l.a)();function N(){return a.createElement(o.a,null,a.createElement(M.Navigator,{initialRouteName:"Home"},a.createElement(M.Screen,{name:"Home",component:f}),a.createElement(M.Screen,{name:"Grocery",component:E,options:{title:"Grocery List"}}),a.createElement(M.Screen,{name:"Date",component:S,options:{title:"Calendar"}}),a.createElement(M.Screen,{name:"Workouts",component:W}),a.createElement(M.Screen,{name:"Stopwatch",component:L,options:{title:"Stopwatch"}})))}s.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}})},378:function(e,t,n){e.exports=n(453)},436:function(e,t,n){var a={"./af":157,"./af.js":157,"./ar":158,"./ar-dz":159,"./ar-dz.js":159,"./ar-kw":160,"./ar-kw.js":160,"./ar-ly":161,"./ar-ly.js":161,"./ar-ma":162,"./ar-ma.js":162,"./ar-sa":163,"./ar-sa.js":163,"./ar-tn":164,"./ar-tn.js":164,"./ar.js":158,"./az":165,"./az.js":165,"./be":166,"./be.js":166,"./bg":167,"./bg.js":167,"./bm":168,"./bm.js":168,"./bn":169,"./bn-bd":170,"./bn-bd.js":170,"./bn.js":169,"./bo":171,"./bo.js":171,"./br":172,"./br.js":172,"./bs":173,"./bs.js":173,"./ca":174,"./ca.js":174,"./cs":175,"./cs.js":175,"./cv":176,"./cv.js":176,"./cy":177,"./cy.js":177,"./da":178,"./da.js":178,"./de":179,"./de-at":180,"./de-at.js":180,"./de-ch":181,"./de-ch.js":181,"./de.js":179,"./dv":182,"./dv.js":182,"./el":183,"./el.js":183,"./en-au":184,"./en-au.js":184,"./en-ca":185,"./en-ca.js":185,"./en-gb":186,"./en-gb.js":186,"./en-ie":187,"./en-ie.js":187,"./en-il":188,"./en-il.js":188,"./en-in":189,"./en-in.js":189,"./en-nz":190,"./en-nz.js":190,"./en-sg":191,"./en-sg.js":191,"./eo":192,"./eo.js":192,"./es":193,"./es-do":194,"./es-do.js":194,"./es-mx":195,"./es-mx.js":195,"./es-us":196,"./es-us.js":196,"./es.js":193,"./et":197,"./et.js":197,"./eu":198,"./eu.js":198,"./fa":199,"./fa.js":199,"./fi":200,"./fi.js":200,"./fil":201,"./fil.js":201,"./fo":202,"./fo.js":202,"./fr":203,"./fr-ca":204,"./fr-ca.js":204,"./fr-ch":205,"./fr-ch.js":205,"./fr.js":203,"./fy":206,"./fy.js":206,"./ga":207,"./ga.js":207,"./gd":208,"./gd.js":208,"./gl":209,"./gl.js":209,"./gom-deva":210,"./gom-deva.js":210,"./gom-latn":211,"./gom-latn.js":211,"./gu":212,"./gu.js":212,"./he":213,"./he.js":213,"./hi":214,"./hi.js":214,"./hr":215,"./hr.js":215,"./hu":216,"./hu.js":216,"./hy-am":217,"./hy-am.js":217,"./id":218,"./id.js":218,"./is":219,"./is.js":219,"./it":220,"./it-ch":221,"./it-ch.js":221,"./it.js":220,"./ja":222,"./ja.js":222,"./jv":223,"./jv.js":223,"./ka":224,"./ka.js":224,"./kk":225,"./kk.js":225,"./km":226,"./km.js":226,"./kn":227,"./kn.js":227,"./ko":228,"./ko.js":228,"./ku":229,"./ku.js":229,"./ky":230,"./ky.js":230,"./lb":231,"./lb.js":231,"./lo":232,"./lo.js":232,"./lt":233,"./lt.js":233,"./lv":234,"./lv.js":234,"./me":235,"./me.js":235,"./mi":236,"./mi.js":236,"./mk":237,"./mk.js":237,"./ml":238,"./ml.js":238,"./mn":239,"./mn.js":239,"./mr":240,"./mr.js":240,"./ms":241,"./ms-my":242,"./ms-my.js":242,"./ms.js":241,"./mt":243,"./mt.js":243,"./my":244,"./my.js":244,"./nb":245,"./nb.js":245,"./ne":246,"./ne.js":246,"./nl":247,"./nl-be":248,"./nl-be.js":248,"./nl.js":247,"./nn":249,"./nn.js":249,"./oc-lnc":250,"./oc-lnc.js":250,"./pa-in":251,"./pa-in.js":251,"./pl":252,"./pl.js":252,"./pt":253,"./pt-br":254,"./pt-br.js":254,"./pt.js":253,"./ro":255,"./ro.js":255,"./ru":256,"./ru.js":256,"./sd":257,"./sd.js":257,"./se":258,"./se.js":258,"./si":259,"./si.js":259,"./sk":260,"./sk.js":260,"./sl":261,"./sl.js":261,"./sq":262,"./sq.js":262,"./sr":263,"./sr-cyrl":264,"./sr-cyrl.js":264,"./sr.js":263,"./ss":265,"./ss.js":265,"./sv":266,"./sv.js":266,"./sw":267,"./sw.js":267,"./ta":268,"./ta.js":268,"./te":269,"./te.js":269,"./tet":270,"./tet.js":270,"./tg":271,"./tg.js":271,"./th":272,"./th.js":272,"./tk":273,"./tk.js":273,"./tl-ph":274,"./tl-ph.js":274,"./tlh":275,"./tlh.js":275,"./tr":276,"./tr.js":276,"./tzl":277,"./tzl.js":277,"./tzm":278,"./tzm-latn":279,"./tzm-latn.js":279,"./tzm.js":278,"./ug-cn":280,"./ug-cn.js":280,"./uk":281,"./uk.js":281,"./ur":282,"./ur.js":282,"./uz":283,"./uz-latn":284,"./uz-latn.js":284,"./uz.js":283,"./vi":285,"./vi.js":285,"./x-pseudo":286,"./x-pseudo.js":286,"./yo":287,"./yo.js":287,"./zh-cn":288,"./zh-cn.js":288,"./zh-hk":289,"./zh-hk.js":289,"./zh-mo":290,"./zh-mo.js":290,"./zh-tw":291,"./zh-tw.js":291};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id=436},439:function(e,t,n){e.exports=n.p+"static/media/sit-ups.9798498f.gif"},440:function(e,t,n){e.exports=n.p+"static/media/push-ups.28ff80f4.gif"},441:function(e,t,n){e.exports=n.p+"static/media/jumping-jacks.4c038987.gif"}},[[378,1,2]]]);
//# sourceMappingURL=app.88690dd9.chunk.js.map