"use strict";(self.webpackChunkpavuchky_frontend=self.webpackChunkpavuchky_frontend||[]).push([[969],{9093:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,a,i,o,m,u=t(5861),l=t(9439),h=t(4687),s=t.n(h),c=t(2791),p=t(5705),d=t(9655),f=t(9230),x=t(4805),g=t(4390),b=t(7417),y=t(6675),j=t(8053),v=t.p+"static/media/heart.516e97967f7efb25c5df.png",w=t(168),C=t(7691),k=C.ZP.div(r||(r=(0,w.Z)(["\n  padding: 28px 16px;\n  margin-bottom: 36px;\n  border-radius: 16px;\n  background: ",";\n\n  @media (min-width: 768px) {\n    padding: 32px;\n    border-radius: ",";\n  }\n\n  @media (min-width: 1440px) {\n    padding: 44px 64px;\n    border-radius: ",";\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n"])),(function(n){return n.theme.colors.gradientBackground}),(function(n){return n.theme.radii.m}),(function(n){return n.theme.radii.xl})),Z=C.ZP.h3(a||(a=(0,w.Z)(["\n  margin-bottom: 24px;\n  font-family: ",";\n  font-size: ",";\n  font-weight: ",";\n\n  @media (min-width: 768px) {\n    font-family: ",";\n    font-size: ",";\n    letter-spacing: -1.44px;\n  }\n\n  @media (min-width: 1440px) {\n    margin-bottom: 44px;\n    font-size: ",";\n    letter-spacing: -2.4px;\n  }\n"])),(function(n){return n.theme.fonts.regular}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.regular}),(function(n){return n.theme.fonts.headRegular}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontSizes.xl})),z=C.ZP.form(i||(i=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n\n  @media (min-width: 768px) {\n    gap: 24px;\n  }\n\n  @media (min-width: 1440px) {\n    gap: 36px;\n  }\n"]))),S=C.ZP.button(o||(o=(0,w.Z)(["\n  margin-top: 4px;\n  width: 100%;\n  height: 40px;\n  padding: 10px;\n  text-align: center;\n  border-radius: 12px;\n  font-family: ",";\n  font-size: ",";\n  font-weight: ",";\n  background: ",";\n  color: ",";\n\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n\n  @media (min-width: 768px) {\n    width: 656px;\n    height: 48px;\n    padding: 10px;\n    margin-top: 20px;\n    border-radius: 16px;\n    font-size: ",";\n  }\n\n  @media (min-width: 1440px) {\n    width: 519px;\n    height: 64px;\n    border-radius: ",";\n  }\n"])),(function(n){return n.theme.fonts.regular}),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.fontWeights.regular}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.yellow}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.radii.m})),P=C.ZP.img(m||(m=(0,w.Z)(["\n  width: 446px;\n  height: 490px;\n"]))),V=t(184),F=function(){var n=(0,c.useState)(!1),e=(0,l.Z)(n,2),t=e[0],r=e[1],a=(0,f.$G)().t,i=(0,x.useMediaQuery)({query:"(min-width: 1440px)"}),o=(0,p.TA)({initialValues:{name:"",company:"",email:"",phone:"",comment:""},validationSchema:b.D,onSubmit:function(){var n=(0,u.Z)(s().mark((function n(e){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,g.Of)(e);case 3:r(!0),d.Am.success(a("forms.success")),n.next=11;break;case 7:n.prev=7,n.t0=n.catch(0),r(!1),d.Am.error(a("forms.error"));case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}),m=o.values,h=m.name,w=m.company,C=m.email,F=m.phone,A=m.comment;return(0,V.jsx)(V.Fragment,{children:t?(0,V.jsx)(y.p,{title:a("partnerForm.thank"),text:a("forms.contact"),variant:"primary"}):(0,V.jsxs)(k,{children:[(0,V.jsxs)("div",{children:[(0,V.jsx)(Z,{children:a("forms.data")}),(0,V.jsxs)(z,{onSubmit:o.handleSubmit,children:[(0,V.jsx)("label",{children:(0,V.jsx)(j.t,{title:a("forms.name"),type:"text",name:"name",placeholder:a("forms.namePl"),autoComplete:"username",value:h,onChange:o.handleChange,hasValue:h.length>0,touched:o.touched.name,error:o.errors.name})}),(0,V.jsx)("label",{children:(0,V.jsx)(j.t,{title:a("partnerForm.activity"),type:"text",name:"company",placeholder:a("partnerForm.activityPl"),autoComplete:"off",value:w,onChange:o.handleChange,hasValue:w.length>0,touched:o.touched.company,error:o.errors.company})}),(0,V.jsx)("label",{children:(0,V.jsx)(j.t,{title:"E-mail",type:"email",name:"email",placeholder:"ukrain@gmail.com",autoComplete:"username",value:C,onChange:o.handleChange,hasValue:C.length>0,touched:o.touched.email,error:o.errors.email})}),(0,V.jsx)("label",{children:(0,V.jsx)(j.t,{title:a("forms.number"),type:"text",name:"phone",placeholder:"+380 98 200 77 49",autoComplete:"tel",value:F,onChange:o.handleChange,hasValue:F.length>0,touched:o.touched.phone,error:o.errors.phone})}),(0,V.jsx)("label",{children:(0,V.jsx)(j.t,{title:a("forms.comments"),type:"text",name:"comment",placeholder:a("forms.commentsPl"),autoComplete:"off",value:A,onChange:o.handleChange,hasValue:A.length>0})}),(0,V.jsx)(S,{type:"submit",children:a("forms.submit")})]})]}),i&&(0,V.jsx)(P,{src:v,alt:"support"})]})})},A=t(3528),G=function(){var n=(0,f.$G)().t;return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(A.G,{current:{path:"/partners",name:n("pages.partnership")}}),(0,V.jsx)(F,{})]})}}}]);
//# sourceMappingURL=969.761a0891.chunk.js.map