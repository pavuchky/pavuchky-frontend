"use strict";(self.webpackChunkpavuchky_frontend=self.webpackChunkpavuchky_frontend||[]).push([[533],{1451:function(n,e,t){t.r(e),t.d(e,{default:function(){return an}});var i,o,r,l,a,s,d,u,c,p,h,x,g=t(4805),m=t(8146),f=t(9439),b=t(2791),y=t(6899),j=(t(5257),t(7893)),v=t(4164),Z=t(197),w=(t(8040),t(168)),k=t(7691),P=t(2351),C=P.r.fontSizes,I=P.r.fontWeights,L=P.r.colors,M=P.r.fonts,S=P.r.borders,W=P.r.radii,z=k.ZP.ul(i||(i=(0,w.Z)(["\n  display: flex;\n  gap: 24px;\n  flex-wrap: wrap;\n  margin-bottom: 32px;\n  justify-content: center;\n"]))),F=k.ZP.li(o||(o=(0,w.Z)(["\n  display: flex;\n  flex-basis: calc((100% - 24px) / 2);\n"]))),E=k.ZP.img(r||(r=(0,w.Z)(["\n  width: 100%;\n  height: auto;\n  object-fit: cover;\n  vertical-align: middle;\n  border-radius: 10px;\n"]))),N=k.ZP.button(l||(l=(0,w.Z)(["\n  width: 656px;\n  height: 48px;\n  border-radius: 16px;\n  background: ",";\n  padding: 10px;\n  justify-content: center;\n  align-items: center;\n  font-family: ",";\n  font-size: ",";\n  font-style: normal;\n  font-weight: ",";\n  line-height: normal;\n  cursor: pointer;\n  outline: transparent;\n  color: ",";\n\n  &:hover {\n    color: ",";\n  }\n  &:focus {\n    outline: transparent;\n    color: ",";\n  }\n  @media (min-width: 1440px) {\n    display: none;\n  }\n"])),L.blue,M.regular,C.m,I.regular,L.white,L.yellow,L.yellow),O=k.ZP.ul(a||(a=(0,w.Z)(["\n  display: flex;\n  gap: 26px;\n  flex-wrap: wrap;\n  margin-bottom: 44px;\n  justify-content: center;\n"]))),V=k.ZP.li(s||(s=(0,w.Z)(["\n  display: flex;\n  flex-basis: calc((100% - 52px) / 3);\n  justify-content: center;\n"]))),A=k.ZP.img(d||(d=(0,w.Z)(["\n  width: 100%;\n  height: auto;\n  object-fit: cover;\n  vertical-align: middle;\n  border-radius: 10px;\n"]))),H=k.ZP.div(u||(u=(0,w.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Q=k.ZP.button(c||(c=(0,w.Z)(["\n  display: none;\n\n  @media (min-width: 1440px) {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 84px;\n    height: 84px;\n    border: ",";\n    color: ",";\n    border-radius: ",";\n    position: absolute;\n    top: 50%;\n    left: 3%;\n    z-index: 99999999;\n  }\n"])),S.normal,L.blue,W.round),B=k.ZP.button(p||(p=(0,w.Z)(["\n  display: none;\n\n  @media (min-width: 1440px) {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 84px;\n    height: 84px;\n    border: ",";\n    color: ",";\n    border-radius: ",";\n    position: absolute;\n    top: 50%;\n    right: 3%;\n    z-index: 99999999;\n  }\n"])),S.normal,L.blue,W.round),G=k.ZP.svg(h||(h=(0,w.Z)(["\n  stroke: ",";\n"])),L.blue),T=t(4596),_=t(184),D=function(n){var e,t=n.isOpen,i=n.selectedImageIndex,o=n.onClose,r=n.setSelectedImageIndex,l=(0,m.Z)("galleryPhoto").data,a=(0,b.useCallback)((function(n){"Escape"===n.key&&o()}),[o]);if((0,b.useEffect)((function(){return t?(document.body.classList.add("modal-open"),document.addEventListener("keydown",a)):document.body.classList.remove("modal-open"),function(){document.removeEventListener("keydown",a)}}),[t,a]),!t)return null;return v.createPortal((0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(j.nz,{}),(0,_.jsx)(j.G6,{onClick:function(n){console.log(n.target.nodeName),n.target===n.currentTarget&&o()},children:(0,_.jsx)(j.sR,{onClick:function(n){"LI"===n.target.nodeName&&o()},children:(0,_.jsx)(Z.lr,{selectedItem:i,showThumbs:!1,showStatus:!1,showIndicators:!1,showArrows:!0,dynamicHeight:!0,infiniteLoop:!0,onChange:r,onCloseClick:o,renderArrowPrev:function(n,e){return e&&(0,_.jsx)(Q,{type:"button",onClick:n,children:(0,_.jsx)(G,{width:"17px",height:"32px",children:(0,_.jsx)("use",{xlinkHref:"".concat(T.Z,"#prew-icon")})})})},renderArrowNext:function(n,e){return e&&(0,_.jsx)(B,{type:"button",onClick:n,children:(0,_.jsx)(G,{width:"17px",height:"32px",children:(0,_.jsx)("use",{xlinkHref:"".concat(T.Z,"#next-icon")})})})},children:null===l||void 0===l||null===(e=l.galleryPhotoList)||void 0===e?void 0:e.map((function(n){return(0,_.jsx)(j.Ee,{children:(0,_.jsx)(j.rV,{src:n.photoLink,alt:"Warriors and camouflage nets"})},n.id)}))})})})]}),document.getElementById("modal-root"))},R=function(n){var e,t=n.data,i=(0,b.useState)(!1),o=(0,f.Z)(i,2),r=o[0],l=o[1],a=(0,b.useState)(0),s=(0,f.Z)(a,2),d=s[0],u=s[1];return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(j.lk,{spaceBetween:16,slidesPerView:1.3,scrollbar:{draggable:!0},modules:[y.LW],children:null===t||void 0===t||null===(e=t.galleryPhotoList)||void 0===e?void 0:e.map((function(n,e){return(0,_.jsx)(j.Df,{onClick:function(){return function(n){u(n),l(!0)}(e)},children:(0,_.jsx)(j.Vz,{src:n.photoLink,alt:"Varior"})},e)}))}),(0,_.jsx)(D,{isOpen:r,images:t,selectedImageIndex:d,onClose:function(){l(!1)}})]})},Y=t(1413),$=t(9822),q=t(9230),J=t(6907),K=t(4818),U=P.r.fontSizes,X=P.r.fontWeights,nn=P.r.colors,en=P.r.fonts,tn=P.r.borders,on=P.r.radii,rn=(0,k.ZP)(K.Z)(x||(x=(0,w.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n\n  .MuiPaginationItem-root {\n    margin: 0px 24px 0px 0px;\n    width: 64px;\n    height: 64px;\n    border-radius: 50%;\n    color: ",";\n    font-size: "," !important;\n    font-family: "," !important;\n    font-weight: ",";\n    padding: 0;\n\n    .MuiPaginationItem-icon {\n      fill: ",";\n    }\n  }\n\n  & .Mui-Selected {\n    color: ",";\n    border-color: "," !important;\n    background-color: transparent !important;\n\n    .Mui-disabled {\n      border-color: "," !important;\n      .MuiPaginationItem-root.MuiPaginationItem-icon.Mui-disabled {\n        fill: "," !important;\n      }\n    }\n  }\n\n  .MuiPaginationItem-previousNext {\n    border: ",";\n    border-color: "," !important;\n    border-radius: ",";\n  }\n"])),nn.grey,U.s,en.regular,X.light,nn.blue,nn.blue,nn.blue,nn.grey,nn.grey,tn.normal,nn.blue,on.round),ln=function(n){var e,t,i,o=n.data,r=(0,b.useState)(1),l=(0,f.Z)(r,2),a=l[0],s=l[1],d=(0,b.useState)(!1),u=(0,f.Z)(d,2),c=u[0],p=u[1],h=(0,b.useState)(0),x=(0,f.Z)(h,2),m=x[0],y=x[1],j=(0,b.useState)(6),v=(0,f.Z)(j,2),Z=v[0],w=v[1],k=(0,g.useMediaQuery)({minWidth:1440}),P=(0,g.useMediaQuery)({minWidth:768}),C=(0,q.$G)().t,I=function(n){y(n),p(!0)},L=function(){p(!1)},M=9*(a-1),S=null===o||void 0===o||null===(e=o.galleryPhotoList)||void 0===e?void 0:e.slice(M,M+9);return(0,_.jsxs)(_.Fragment,{children:[!k&&P&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(z,{children:null===o||void 0===o||null===(t=o.galleryPhotoList)||void 0===t?void 0:t.slice(0,Z).map((function(n,e){return(0,_.jsx)(F,{children:(0,_.jsx)(E,{src:n.photoLink,alt:"Warriors and camouflage nets",onClick:function(){return I(e)}})},n.id)}))}),(0,_.jsx)(D,{isOpen:c,images:o,selectedImageIndex:m,onClose:L}),Z<(null===o||void 0===o?void 0:o.galleryPhotoList.length)&&(0,_.jsx)(N,{onClick:function(){w((function(n){return n+6}))},children:C("buttons.viewMore")})]}),(0,_.jsx)(_.Fragment,{children:k&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(O,{children:null===S||void 0===S?void 0:S.map((function(n,e){return(0,_.jsx)(V,{children:(0,_.jsx)(A,{src:n.photoLink,alt:"Warriors and camouflage nets",onClick:function(){return I(e)}})},n.id)}))}),(0,_.jsx)(D,{isOpen:c,images:o,selectedImageIndex:m,onClose:L}),(0,_.jsx)(H,{children:(0,_.jsx)(rn,{count:Math.ceil(((null===o||void 0===o||null===(i=o.galleryPhotoList)||void 0===i?void 0:i.length)||0)/9),page:a,onChange:function(n,e){s(e)},color:"primary",variant:"outlined",boundaryCount:1,siblingCount:0,renderItem:function(n){return(0,_.jsx)($.Z,(0,Y.Z)({slots:{previous:J.YNj,next:J.p6n}},n))}})})]})})]})},an=function(){var n=(0,m.Z)("galleryPhoto").data,e=(0,g.useMediaQuery)({minWidth:767});return(0,_.jsx)(_.Fragment,{children:e?(0,_.jsx)(ln,{data:n}):(0,_.jsx)(R,{data:n})})}}}]);
//# sourceMappingURL=533.32475b9d.chunk.js.map