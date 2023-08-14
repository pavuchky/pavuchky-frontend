"use strict";(self.webpackChunkpavuchky_frontend=self.webpackChunkpavuchky_frontend||[]).push([[764],{3528:function(n,i,e){e.d(i,{G:function(){return g}});var t,r,o,a=e(9230),d=e(168),p=e(1087),l=e(7691),s=l.ZP.div(t||(t=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  gap: ",";\n  padding-left: ",";\n  margin-bottom: ",";\n\n  @media only screen and (min-width: 768px) {\n    gap: ",";\n    padding-left: ",";\n    margin-top: 0;\n    margin-bottom: ",";\n  }\n\n  @media only screen and (min-width: 1440px) {\n    padding-left: ",";\n    margin-bottom: ",";\n  }\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.spacing(6.5)}),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.spacing(8)}),(function(n){return n.theme.spacing(11)}),(function(n){return n.theme.spacing(16)}),(function(n){return n.theme.spacing(16)})),u=(0,l.ZP)(p.rU)(r||(r=(0,d.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: 12px;\n  line-height: 1.33;\n\n  color: ",";\n\n  @media only screen and (min-width: 1440px) {\n    font-size: 14px;\n    line-height: normal;\n  }\n"])),(function(n){return n.theme.fonts.regular}),(function(n){return n.theme.fontWeights.regular}),(function(n){return n.theme.colors.grey})),h=l.ZP.svg(o||(o=(0,d.Z)(["\n  width: 10px;\n  height: 12px;\n"]))),m=e(4596),x=e(184),g=function(n){var i=n.current,e=n.isGallery,t=(n.galleryType,{path:"/",name:(0,(0,a.$G)().t)("nav.main")});return(0,x.jsxs)(s,{children:[(0,x.jsx)(u,{to:t.path,dangerouslySetInnerHTML:{__html:t.name}}),(0,x.jsx)(h,{children:(0,x.jsx)("use",{href:m.Z+"#path-arrow"})}),(0,x.jsx)(u,{to:i.path,dangerouslySetInnerHTML:{__html:i.name}}),e&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h,{children:(0,x.jsx)("use",{href:m.Z+"#path-arrow"})}),(0,x.jsx)(u,{to:i.path,dangerouslySetInnerHTML:{__html:i.galleryType}})]})]})}},9764:function(n,i,e){e.r(i),e.d(i,{default:function(){return J}});var t,r,o,a,d,p,l,s,u,h=e(9230),m=e(4805),x=e(3528),g=e(559),c=e(1413),f=e(9439),w=e(2791),b=e(4576),v=e(928),y=e(168),j=e(7691),Z=e(4818),P=e(2351),M=P.r.colors,I=P.r.radii,k=P.r.borders,z=(0,j.ZP)(Z.Z)(t||(t=(0,y.Z)(["\n  width: 320px;\n\n  margin-left: auto;\n  margin-right: auto;\n\n  display: flex;\n  justify-content: space-around;\n\n  .MuiPaginationItem-root {\n    margin: 0px;\n    color: ",";\n\n    .MuiPaginationItem-icon {\n      fill: ",";\n    }\n  }\n\n  & .Mui-selected {\n    color: ",";\n    border-color: "," !important;\n    background-color: transparent !important;\n  }\n\n  .MuiPagination-ul {\n    gap: 16px;\n    @media (min-width: 1440px) {\n      gap: 24px;\n    }\n  }\n  .MuiPaginationItem-page {\n    background-color: transparent;\n    width: 40px;\n    height: 40px;\n\n    border: ",";\n    border-color: ",";\n    border-radius: ",";\n  }\n\n  .MuiPaginationItem-previousNext {\n    width: 40px;\n    height: 40px;\n    border: ",";\n    border-color: "," !important;\n    border-radius: ",";\n  }\n\n  .Mui-disabled {\n    border-color: "," !important;\n\n    .MuiPaginationItem-icon {\n      fill: ",";\n    }\n  }\n  .MuiPaginationItem-ellipsis {\n    width: 40px;\n    height: 40px;\n    border: ",";\n    border-color: ",";\n    border-radius: ",";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  @media (min-width: 768px) {\n    width: 432px;\n\n    .MuiPaginationItem-page {\n      width: 48px;\n      height: 48px;\n    }\n\n    .MuiPaginationItem-previousNext {\n      width: 48px;\n      height: 48px;\n    }\n\n    .MuiPaginationItem-ellipsis {\n      width: 48px;\n      height: 48px;\n    }\n  }\n\n  @media (min-width: 1440px) {\n    width: 592px;\n  }\n"])),M.grey,M.blue,M.blue,M.blue,k.normal,M.grey,I.round,k.normal,M.blue,I.round,M.grey,M.grey,k.normal,M.grey,I.round),_=j.ZP.ul(r||(r=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n\n  @media (min-width: 1440px) {\n  }\n"]))),L=e(6907),C=e(9822),S=e(184),W=function(){var n,i=(0,w.useState)(1),e=(0,f.Z)(i,2),t=e[0],r=e[1],o=(0,w.useState)(1),a=(0,f.Z)(o,2),d=a[0],p=a[1],l=(0,m.useMediaQuery)({minWidth:768}),s=(0,m.useMediaQuery)({minWidth:1440}),u=(0,b.Z)("reviews").data;(0,w.useEffect)((function(){var n=Math.ceil((null===u||void 0===u?void 0:u.reviewList.length)/3)||1,i=Math.ceil((null===u||void 0===u?void 0:u.reviewList.length)/6)||1;p(l&&!s?i:n)}),[null===u||void 0===u?void 0:u.reviewList.length,s,l]);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(_,{children:null===(n=function(){var n=l&&!s?6:3;return null===u||void 0===u?void 0:u.reviewList.slice(t*n-n,t*n)}())||void 0===n?void 0:n.map((function(n){var i=n.id,e=n.reviewDesc,t=n.reviewImage;return(0,S.jsx)("li",{children:(0,S.jsx)(v.Z,{review:e,reviewImage:t})},i)}))}),(0,S.jsx)(z,{onChange:function(n,i){r(i)},count:d,boundaryCount:1,siblingCount:l?0:-1,renderItem:function(n){return(0,S.jsx)(C.Z,(0,c.Z)({slots:{previous:L.YNj,next:L.p6n}},n))}})]})},G=P.r.colors,Q=P.r.radii,T=P.r.borders,F=P.r.fontWeights,H=P.r.fonts,N=P.r.fontSizes,D=j.ZP.section(o||(o=(0,y.Z)(["\n  margin-bottom: 36px;\n  @media (min-width: 768px) {\n    margin-bottom: 44px;\n  }\n\n  @media (min-width: 1440px) {\n    margin-bottom: 64px;\n  }\n"]))),$=j.ZP.div(a||(a=(0,y.Z)(["\n  display: inline-flex;\n  padding: 28px 16px;\n\n  flex-direction: column;\n  justify-content: center;\n\n  gap: 24px;\n\n  border-radius: 16px;\n\n  background: ",";\n\n  margin-bottom: 34px;\n  @media (min-width: 768px) {\n    padding: 32px;\n\n    width: 720px;\n    overflow: hidden;\n    border-radius: ",";\n    gap: 24px;\n    margin-bottom: 0;\n  }\n\n  @media (min-width: 1440px) {\n    padding: 44px 64px;\n\n    width: 1408px;\n\n    border-radius: ",";\n    gap: 44px;\n  }\n"])),G.gradientBackground,Q.m,Q.xl),B=j.ZP.div(d||(d=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding-left: 16px;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: flex-end;\n    padding-left: 0px;\n  }\n\n  @media (min-width: 1440px) {\n  }\n"]))),E=j.ZP.div(p||(p=(0,y.Z)(["\n  margin-bottom: 24px;\n\n  @media (min-width: 768px) {\n    margin-bottom: 0px;\n  }\n\n  @media (min-width: 1440px) {\n  }\n"]))),U=j.ZP.h4(l||(l=(0,y.Z)(["\n  font-weight: ",";\n  font-size: 18px;\n  font-family: ",";\n\n  margin-bottom: 12px;\n  @media (min-width: 768px) {\n    font-size: ",";\n  }\n\n  @media (min-width: 1440px) {\n    font-weight: ",";\n    font-size: 26px;\n    font-family: ",";\n\n    margin-bottom: 16px;\n  }\n"])),F.regular,H.regular,N.m,F.light,H.light),Y=j.ZP.p(s||(s=(0,y.Z)(["\n  font-weight: ",";\n  font-size: ",";\n  font-family: ",";\n\n  @media (min-width: 768px) {\n    width: 316px;\n    font-size: ",";\n  }\n\n  @media (min-width: 1440px) {\n    width: 745px;\n  }\n"])),F.light,N.xs,H.light,N.s),q=j.ZP.button(u||(u=(0,y.Z)(["\n  width: 327px;\n  height: 40px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n\n  border: ",";\n  border-color: ",";\n  border-radius: 8px;\n  padding: 10.5px;\n\n  background-color: ",";\n\n  font-weight: ",";\n  font-size: ",";\n  font-family: ",";\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n    color: ",";\n  }\n\n  @media (min-width: 768px) {\n    width: 288px;\n    height: 48px;\n    padding: 12px;\n    font-size: ",";\n    border-radius: ",";\n  }\n\n  @media (min-width: 1440px) {\n    width: 440px;\n    height: 76px;\n    padding: 26px;\n\n    border-radius: ",";\n  }\n"])),T.normal,G.blue,G.white,F.light,N.xs,H.light,G.blue,G.white,N.s,Q.s,Q.l),A=e(7689),J=function(){var n=(0,h.$G)().t,i=(0,m.useMediaQuery)({minWidth:768}),e=(0,m.useMediaQuery)({minWidth:1440}),t=(0,A.s0)(),r=(0,S.jsxs)(B,{children:[(0,S.jsxs)(E,{children:[(0,S.jsx)(U,{children:"\u041d\u0430\u043f\u0438\u0448\u0438 \u043d\u0430\u043c"}),(0,S.jsx)(Y,{children:i?e?"\u0414\u043b\u044f \u043d\u0430\u0441 \u0434\u0443\u0436\u0435 \u0432\u0430\u0436\u043b\u0438\u0432\u0430 \u0432\u0430\u0448\u0430 \u0434\u0443\u043c\u043a\u0430. \u0417\u0430\u0432\u0434\u044f\u043a\u0438 \u0432\u0430\u043c \u043c\u0438 \u0441\u0442\u0430\u0454\u043c\u043e \u043a\u0440\u0430\u0449\u0456! ":"\u0414\u044f\u043a\u0443\u0454\u043c\u043e! \u0417\u0430\u0432\u0434\u044f\u043a\u0438 \u0432\u0430\u043c \u043c\u0438 \u0441\u0442\u0430\u0454\u043c\u043e \u043a\u0440\u0430\u0449\u0456! ":"\u0417\u0430\u0432\u0434\u044f\u043a\u0438 \u0432\u0430\u043c \u043c\u0438 \u0441\u0442\u0430\u0454\u043c\u043e \u043a\u0440\u0430\u0449\u0456!"})]}),(0,S.jsx)(q,{type:"submit",onClick:function(n){return function(n){n.preventDefault(),t("/review")}(n)},children:"\u0417\u0430\u043b\u0438\u0448\u0438\u0442\u0438 \u0432\u0456\u0434\u0433\u0443\u043a"})]});return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(x.G,{current:{path:"/reviews",name:n("pages.reviews")}}),(0,S.jsxs)(D,{children:[(0,S.jsxs)($,{children:[(0,S.jsx)(g.IQ,{children:(0,S.jsx)(g.kP,{children:"\u0412\u0456\u0434\u0433\u0443\u043a\u0438"})}),(0,S.jsx)(W,{}),i&&r]}),!i&&r]})]})}}}]);
//# sourceMappingURL=764.2004346e.chunk.js.map