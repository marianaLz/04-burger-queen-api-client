"use strict";(self.webpackChunk_04_burger_queen_api_client=self.webpackChunk_04_burger_queen_api_client||[]).push([[301],{4301:function(e,n,t){t.r(n);var r=t(7762),c=t(3433),i=t(9439),o=t(2791),u=t(4799),l=t(5297),a=t(3580),s=t(7342),f=t(9137),d=t(7718),p=t(6589),h=t(176),g=t(9229),x=t(2435),m=t(2899),b=t(1882),j=t(3303),v=t(6069),y=t(8594),w=t(7885),S=t(7281),Z=t(8613),k=t(5698),_=t(4457),T=t(3419),z=t(184);n.default=function(){var e=(0,o.useState)([]),n=(0,i.Z)(e,2),t=n[0],C=n[1],I=(0,o.useState)([]),O=(0,i.Z)(I,2),W=O[0],q=O[1],A=(0,o.useState)(0),D=(0,i.Z)(A,2),E=D[0],L=D[1];return(0,o.useEffect)((function(){L(null===W||void 0===W?void 0:W.reduce((function(e,n){return e+n.price}),0))}),[W]),(0,o.useEffect)((function(){(0,k.Xp)().then((function(e){var n,t={},c=(0,r.Z)(e);try{for(c.s();!(n=c.n()).done;){var i=n.value,o=i.category,u=i.type;t[u]||(t[u]={}),t[u][o]||(t[u][o]=[]),t[u][o].push(i)}}catch(l){c.e(l)}finally{c.f()}C(t)}))}),[]),(0,z.jsxs)(l.M,{columns:{lg:"2"},gap:{base:"8",lg:"24"},children:[(0,z.jsxs)(a.m,{colorScheme:"yellow",isFitted:!0,size:"lg",variant:"enclosed",children:[(0,z.jsx)(s.t,{color:"whiteAlpha.700",mb:"1em",children:Object.keys(t).map((function(e){return(0,z.jsx)(f.O,{letterSpacing:"wider",textTransform:"uppercase",_selected:{bg:"yellow.500",border:"1px solid",borderColor:"gray.200",color:"white",fontWeight:"semibold"},children:e},e)}))}),(0,z.jsx)(d.n,{children:Object.keys(t).map((function(e){return(0,z.jsx)(p.x,{as:h.k,flexDir:"column",gap:"8",children:Object.keys(t[e]).map((function(n){return(0,z.jsxs)(h.k,{flexDir:"column",gap:"4",children:[(0,z.jsx)(g.x,{fontWeight:"semibold",fontSize:"lg",letterSpacing:"wider",textTransform:"uppercase",children:n}),(0,z.jsx)(h.k,{flexWrap:"wrap",gap:"6",children:t[e][n].map((function(e){return(0,z.jsxs)(x.z,{gap:"4",onClick:function(){return function(e){q([].concat((0,c.Z)(W),[e]))}(e)},variant:"outline",_hover:{bg:"yellow.500"},children:[(0,z.jsx)(g.x,{children:e.name}),(0,z.jsx)(g.x,{children:(0,_.T)(e.price)})]},e.id)}))})]},n)}))},"panel-".concat(e))}))})]}),(0,z.jsxs)(m.Z,{as:"form",borderRadius:"none",h:"fit-content",onSubmit:function(e){e.preventDefault();var n=e.target.elements.client,t=JSON.parse(localStorage.getItem("USER"));(0,T.LV)({client:n.value,products:W,status:"pending",userId:t.id,total:E}).then((function(){q([]),L(0),n.value=""}))},children:[(0,z.jsx)(b.O,{px:{base:"4",lg:"12"},pt:{base:"4",lg:"8"},children:(0,z.jsx)(g.x,{fontWeight:"semibold",fontSize:"lg",letterSpacing:"wider",textTransform:"uppercase",children:"Resumen de la orden"})}),(0,z.jsx)(j.e,{px:{base:"4",lg:"12"},children:(0,z.jsxs)(h.k,{flexDir:"column",gap:"4",children:[(0,z.jsx)(v.I,{name:"client",placeholder:"Nombre del cliente",required:!0,size:"lg"}),null===W||void 0===W?void 0:W.map((function(e){return(0,z.jsxs)(y.r,{alignItems:"center",gap:{base:"4",lg:"8"},templateColumns:{base:"8fr 3fr 1fr",lg:"9fr 2fr 1fr"},children:[(0,z.jsx)(g.x,{children:e.name}),(0,z.jsx)(g.x,{children:(0,_.T)(e.price)}),(0,z.jsx)(w.h,{colorScheme:"yellow",icon:(0,z.jsx)(u.T,{}),onClick:function(){return function(e){q(W.filter((function(n){return n.id!==e.id})))}(e)},size:"sm",variant:"outline"})]},e.id)})),(0,z.jsx)(S.i,{}),(0,z.jsxs)(y.r,{alignItems:"center",fontWeight:"semibold",gap:{base:"4",lg:"8"},templateColumns:{base:"8fr 3fr 1fr",lg:"9fr 2fr 1fr"},children:[(0,z.jsx)(g.x,{children:"TOTAL"}),(0,z.jsx)(g.x,{children:(0,_.T)(E)})]})]})}),(0,z.jsx)(Z.e,{px:{base:"4",lg:"12"},pb:{base:"4",lg:"8"},children:(0,z.jsx)(x.z,{colorScheme:"yellow",ml:"auto",size:"lg",type:"submit",variant:"outline",_hover:{bg:"yellow.500",borderColor:"yellow.500",color:"white",fontWeight:"semibold"},children:"Enviar orden"})})]})]})}},8830:function(e,n,t){var r=t(1243).Z.create({baseURL:"04-burger-queen-api.vercel.app"});r.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat(localStorage.getItem("token")),e})),n.Z=r},3419:function(e,n,t){t.d(n,{AU:function(){return c},Cs:function(){return o},LV:function(){return i}});var r=t(8830),c=function(){return r.Z.get("/orders").then((function(e){return e.data}))},i=function(e){return r.Z.post("/orders",e).then((function(e){return e.data}))},o=function(e,n){return r.Z.put("/orders/".concat(e),n).then((function(e){return e.data}))}},5698:function(e,n,t){t.d(n,{Ir:function(){return l},Xp:function(){return c},nM:function(){return u},ry:function(){return i},wv:function(){return o}});var r=t(8830),c=function(){return r.Z.get("/products").then((function(e){return e.data}))},i=function(e){return r.Z.post("/products",e).then((function(e){return e.data}))},o=function(e){return r.Z.get("/products/".concat(e)).then((function(e){return e.data}))},u=function(e,n){return r.Z.put("/products/".concat(e),n).then((function(e){return e.data}))},l=function(e){return r.Z.delete("/products/".concat(e)).then((function(e){return e.data}))}},4457:function(e,n,t){t.d(n,{T:function(){return r}});var r=function(e){return new Intl.NumberFormat("es-MX",{style:"currency",currency:"MXN"}).format(e)}}}]);
//# sourceMappingURL=301.a7d5acf2.chunk.js.map