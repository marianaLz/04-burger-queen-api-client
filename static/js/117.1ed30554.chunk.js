"use strict";(self.webpackChunk_04_burger_queen_api_client=self.webpackChunk_04_burger_queen_api_client||[]).push([[117],{117:function(e,r,n){n.r(r),n.d(r,{default:function(){return Y}});var t=n(9439),i=n(2791),a=n(5903),o=(0,a.I)({displayName:"CheckCircleIcon",d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"}),s=(0,a.I)({d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z",displayName:"WarningIcon"}),l=n(5297),c=n(2899),u=n(1882),d=n(9229),f=n(3303),m=n(176),p=n(8594),h=n(7281),g=n(8613),x=n(1413),v=n(5987),b=n(6337),y=n(7872),Z=n(2952),j=n(6992),_=n(184),C=["size","colorScheme","variant","className","spacing","isAttached","isDisabled","orientation"],N={horizontal:{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}},vertical:{"> *:first-of-type:not(:last-of-type)":{borderBottomRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderTopRadius:0}}},w={horizontal:function(e){return{"& > *:not(style) ~ *:not(style)":{marginStart:e}}},vertical:function(e){return{"& > *:not(style) ~ *:not(style)":{marginTop:e}}}},A=(0,y.G)((function(e,r){var n=e.size,t=e.colorScheme,a=e.variant,o=e.className,s=e.spacing,l=void 0===s?"0.5rem":s,c=e.isAttached,u=e.isDisabled,d=e.orientation,f=void 0===d?"horizontal":d,m=(0,v.Z)(e,C),p=(0,j.cx)("chakra-button__group",o),h=(0,i.useMemo)((function(){return{size:n,colorScheme:t,variant:a,isDisabled:u}}),[n,t,a,u]),g=(0,x.Z)({display:"inline-flex"},c?N[f]:w[f](l)),y="vertical"===f;return(0,_.jsx)(b.D,{value:h,children:(0,_.jsx)(Z.m.div,(0,x.Z)({ref:r,role:"group",__css:g,className:p,"data-attached":c?"":void 0,"data-orientation":f,flexDir:y?"column":void 0},m))})}));A.displayName="ButtonGroup";var G=n(2435),T=n(4363),W=n(9886),S=n(9084),k=n(2996),z=["isDisabled","children"],R=(0,W.k)({name:"TagStylesContext",errorMessage:"useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Tag />\" "}),I=(0,t.Z)(R,2),L=I[0],D=I[1],M=(0,y.G)((function(e,r){var n=(0,S.jC)("Tag",e),t=(0,k.Lr)(e),i=(0,x.Z)({display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%"},n.container);return(0,_.jsx)(L,{value:n,children:(0,_.jsx)(Z.m.span,(0,x.Z)((0,x.Z)({ref:r},t),{},{__css:i}))})}));M.displayName="Tag";var B=(0,y.G)((function(e,r){var n=D();return(0,_.jsx)(Z.m.span,(0,x.Z)((0,x.Z)({ref:r,noOfLines:1},e),{},{__css:n.label}))}));B.displayName="TagLabel";var O=(0,y.G)((function(e,r){return(0,_.jsx)(T.J,(0,x.Z)({ref:r,verticalAlign:"top",marginEnd:"0.5rem"},e))}));O.displayName="TagLeftIcon",(0,y.G)((function(e,r){return(0,_.jsx)(T.J,(0,x.Z)({ref:r,verticalAlign:"top",marginStart:"0.5rem"},e))})).displayName="TagRightIcon";var q=function(e){return(0,_.jsx)(T.J,(0,x.Z)((0,x.Z)({verticalAlign:"inherit",viewBox:"0 0 512 512"},e),{},{children:(0,_.jsx)("path",{fill:"currentColor",d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"})}))};q.displayName="TagCloseIcon",(0,y.G)((function(e,r){var n=e.isDisabled,t=e.children,i=(0,v.Z)(e,z),a=D(),o=(0,x.Z)({display:"flex",alignItems:"center",justifyContent:"center",outline:"0"},a.closeButton);return(0,_.jsx)(Z.m.button,(0,x.Z)((0,x.Z)({ref:r,"aria-label":"close"},i),{},{type:"button",disabled:n,__css:o,children:t||(0,_.jsx)(q,{})}))})).displayName="TagCloseButton";var F=n(3419),X=n(4457),Y=function(){var e=(0,i.useState)([]),r=(0,t.Z)(e,2),n=r[0],a=r[1],x=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"delivered",t=n.find((function(r){return r.id===e}));t.status=r,(0,F.Cs)(e,t).then((function(e){a((function(r){return r.map((function(r){return r.id===e.id?e:r}))}))}))};return(0,i.useEffect)((function(){(0,F.AU)().then((function(e){a(e.sort((function(e,r){return r.id-e.id})))}))}),[]),(0,_.jsx)(l.M,{columns:{md:"2",lg:"3"},gap:"8",children:n.map((function(e){var r;return(0,_.jsxs)(c.Z,{borderRadius:"none",children:[(0,_.jsx)(u.O,{px:{base:"4",lg:"12"},pt:{base:"4",lg:"8"},children:(0,_.jsxs)(d.x,{fontWeight:"semibold",fontSize:"lg",letterSpacing:"wider",textTransform:"uppercase",children:["Orden ",e.id]})}),(0,_.jsx)(f.e,{px:{base:"4",lg:"12"},children:(0,_.jsxs)(m.k,{flexDir:"column",gap:"4",children:[(0,_.jsxs)(d.x,{fontWeight:"semibold",letterSpacing:"wider",children:["Cliente: ",e.client]}),(0,_.jsxs)(d.x,{fontWeight:"semibold",letterSpacing:"wider",children:["N\xfamero de vendedor: ",e.userId]}),null===(r=e.products)||void 0===r?void 0:r.map((function(e){return(0,_.jsxs)(p.r,{alignItems:"center",gap:{base:"4",lg:"8"},templateColumns:{base:"8fr 3fr 1fr",lg:"9fr 2fr 1fr"},children:[(0,_.jsx)(d.x,{children:e.name}),(0,_.jsx)(d.x,{children:(0,X.T)(e.price)})]},e.id)})),(0,_.jsx)(h.i,{}),(0,_.jsxs)(p.r,{alignItems:"center",fontWeight:"semibold",gap:{base:"4",lg:"8"},templateColumns:{base:"8fr 3fr 1fr",lg:"9fr 2fr 1fr"},children:[(0,_.jsx)(d.x,{children:"TOTAL"}),(0,_.jsx)(d.x,{children:(0,X.T)(e.total)})]})]})}),(0,_.jsx)(g.e,{px:{base:"4",lg:"12"},pb:{base:"4",lg:"8"},children:"pending"===e.status?(0,_.jsxs)(A,{gap:"4",w:"full",children:[(0,_.jsx)(G.z,{colorScheme:"yellow",onClick:function(){return x(e.id)},size:"lg",variant:"outline",w:"full",_hover:{bg:"yellow.500",borderColor:"yellow.500",color:"white",fontWeight:"semibold"},children:"Completar"}),(0,_.jsx)(G.z,{colorScheme:"red",onClick:function(){return x(e.id,"canceled")},size:"lg",variant:"outline",w:"full",_hover:{bg:"red.600",borderColor:"red.600",color:"white",fontWeight:"semibold"},children:"Cancelar"})]}):"delivered"===e.status?(0,_.jsxs)(M,{colorScheme:"green",ml:"auto",size:"lg",variant:"outline",children:[(0,_.jsx)(O,{as:o}),(0,_.jsx)(B,{children:"Completada"})]}):(0,_.jsxs)(M,{colorScheme:"red",ml:"auto",size:"lg",variant:"outline",children:[(0,_.jsx)(O,{as:s}),(0,_.jsx)(B,{children:"Cancelada"})]})})]},e.id)}))})}},8830:function(e,r,n){var t=n(1243).Z.create({baseURL:"04-burger-queen-api.vercel.app"});t.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat(localStorage.getItem("token")),e})),r.Z=t},3419:function(e,r,n){n.d(r,{AU:function(){return i},Cs:function(){return o},LV:function(){return a}});var t=n(8830),i=function(){return t.Z.get("/orders").then((function(e){return e.data}))},a=function(e){return t.Z.post("/orders",e).then((function(e){return e.data}))},o=function(e,r){return t.Z.put("/orders/".concat(e),r).then((function(e){return e.data}))}},4457:function(e,r,n){n.d(r,{T:function(){return t}});var t=function(e){return new Intl.NumberFormat("es-MX",{style:"currency",currency:"MXN"}).format(e)}},4390:function(e,r,n){n.d(r,{Y:function(){return o},v:function(){return s}});var t=n(9439),i=(0,n(5084).eC)("Card"),a=(0,t.Z)(i,2),o=a[0],s=a[1]},3303:function(e,r,n){n.d(r,{e:function(){return d}});var t=n(1413),i=n(5987),a=n(4390),o=n(6992),s=n(7872),l=n(2952),c=n(184),u=["className"],d=(0,s.G)((function(e,r){var n=e.className,s=(0,i.Z)(e,u),d=(0,a.v)();return(0,c.jsx)(l.m.div,(0,t.Z)({ref:r,className:(0,o.cx)("chakra-card__body",n),__css:d.body},s))}))},2899:function(e,r,n){n.d(r,{Z:function(){return m}});var t=n(1413),i=n(5987),a=n(4390),o=n(6992),s=n(7872),l=n(2996),c=n(9084),u=n(2952),d=n(184),f=["className","children","direction","justify","align"],m=(0,s.G)((function(e,r){var n=(0,l.Lr)(e),s=n.className,m=n.children,p=n.direction,h=void 0===p?"column":p,g=n.justify,x=n.align,v=(0,i.Z)(n,f),b=(0,c.jC)("Card",e);return(0,d.jsx)(u.m.div,(0,t.Z)((0,t.Z)({ref:r,className:(0,o.cx)("chakra-card",s),__css:(0,t.Z)({display:"flex",flexDirection:h,justifyContent:g,alignItems:x,position:"relative",minWidth:0,wordWrap:"break-word"},b.container)},v),{},{children:(0,d.jsx)(a.Y,{value:b,children:m})}))}))},8613:function(e,r,n){n.d(r,{e:function(){return d}});var t=n(1413),i=n(5987),a=n(4390),o=n(6992),s=n(7872),l=n(2952),c=n(184),u=["className","justify"],d=(0,s.G)((function(e,r){var n=e.className,s=e.justify,d=(0,i.Z)(e,u),f=(0,a.v)();return(0,c.jsx)(l.m.div,(0,t.Z)({ref:r,className:(0,o.cx)("chakra-card__footer",n),__css:(0,t.Z)({display:"flex",justifyContent:s},f.footer)},d))}))},1882:function(e,r,n){n.d(r,{O:function(){return d}});var t=n(1413),i=n(5987),a=n(4390),o=n(6992),s=n(7872),l=n(2952),c=n(184),u=["className"],d=(0,s.G)((function(e,r){var n=e.className,s=(0,i.Z)(e,u),d=(0,a.v)();return(0,c.jsx)(l.m.div,(0,t.Z)({ref:r,className:(0,o.cx)("chakra-card__header",n),__css:d.header},s))}))},8594:function(e,r,n){n.d(r,{r:function(){return c}});var t=n(1413),i=n(5987),a=n(7872),o=n(2952),s=n(184),l=["templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"],c=(0,a.G)((function(e,r){var n=e.templateAreas,a=e.gap,c=e.rowGap,u=e.columnGap,d=e.column,f=e.row,m=e.autoFlow,p=e.autoRows,h=e.templateRows,g=e.autoColumns,x=e.templateColumns,v=(0,i.Z)(e,l),b={display:"grid",gridTemplateAreas:n,gridGap:a,gridRowGap:c,gridColumnGap:u,gridAutoColumns:g,gridColumn:d,gridRow:f,gridAutoFlow:m,gridAutoRows:p,gridTemplateRows:h,gridTemplateColumns:x};return(0,s.jsx)(o.m.div,(0,t.Z)({ref:r,__css:b},v))}));c.displayName="Grid"},9229:function(e,r,n){n.d(r,{x:function(){return m}});var t=n(1413),i=n(5987),a=n(7872),o=n(9084),s=n(2996),l=n(2952),c=n(6992),u=n(5246),d=n(184),f=["className","align","decoration","casing"],m=(0,a.G)((function(e,r){var n=(0,o.mq)("Text",e),a=(0,s.Lr)(e),m=(a.className,a.align,a.decoration,a.casing,(0,i.Z)(a,f)),p=(0,u.oA)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,d.jsx)(l.m.p,(0,t.Z)((0,t.Z)((0,t.Z)({ref:r,className:(0,c.cx)("chakra-text",e.className)},p),m),{},{__css:n}))}));m.displayName="Text"},5297:function(e,r,n){n.d(r,{M:function(){return m}});var t=n(1413),i=n(5987),a=n(8594),o=n(7872),s=n(5310),l=n(3142),c=n(6992);Object.freeze(["base","sm","md","lg","xl","2xl"]);function u(e,r){return Array.isArray(e)?e.map((function(e){return null===e?null:r(e)})):(0,c.Kn)(e)?Object.keys(e).reduce((function(n,t){return n[t]=r(e[t]),n}),{}):null!=e?r(e):null}var d=n(184),f=["columns","spacingX","spacingY","spacing","minChildWidth"],m=(0,o.G)((function(e,r){var n=e.columns,o=e.spacingX,c=e.spacingY,m=e.spacing,p=e.minChildWidth,h=(0,i.Z)(e,f),g=(0,s.F)(),x=p?function(e,r){return u(e,(function(e){var n,t=(0,l.LP)("sizes",e,"number"===typeof(n=e)?"".concat(n,"px"):n)(r);return null===e?null:"repeat(auto-fit, minmax(".concat(t,", 1fr))")}))}(p,g):u(n,(function(e){return null===e?null:"repeat(".concat(e,", minmax(0, 1fr))")}));return(0,d.jsx)(a.r,(0,t.Z)({ref:r,gap:m,columnGap:o,rowGap:c,templateColumns:x},h))}));m.displayName="SimpleGrid"},7281:function(e,r,n){n.d(r,{i:function(){return m}});var t=n(1413),i=n(5987),a=n(7872),o=n(9084),s=n(2996),l=n(2952),c=n(6992),u=n(184),d=["borderLeftWidth","borderBottomWidth","borderTopWidth","borderRightWidth","borderWidth","borderStyle","borderColor"],f=["className","orientation","__css"],m=(0,a.G)((function(e,r){var n=(0,o.mq)("Divider",e),a=n.borderLeftWidth,m=n.borderBottomWidth,p=n.borderTopWidth,h=n.borderRightWidth,g=n.borderWidth,x=n.borderStyle,v=n.borderColor,b=(0,i.Z)(n,d),y=(0,s.Lr)(e),Z=y.className,j=y.orientation,_=void 0===j?"horizontal":j,C=y.__css,N=(0,i.Z)(y,f),w={vertical:{borderLeftWidth:a||h||g||"1px",height:"100%"},horizontal:{borderBottomWidth:m||p||g||"1px",width:"100%"}};return(0,u.jsx)(l.m.hr,(0,t.Z)((0,t.Z)({ref:r,"aria-orientation":_},N),{},{__css:(0,t.Z)((0,t.Z)((0,t.Z)({},b),{},{border:"0",borderColor:v,borderStyle:x},w[_]),C),className:(0,c.cx)("chakra-divider",Z)}))}));m.displayName="Divider"}}]);
//# sourceMappingURL=117.1ed30554.chunk.js.map