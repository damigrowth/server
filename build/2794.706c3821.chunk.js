"use strict";(self.webpackChunkserver=self.webpackChunkserver||[]).push([[2794],{22794:(c,M,_)=>{_.r(M),_.d(M,{AdminSeatInfoEE:()=>W});var E=_(92132),l=_(68074),t=_(30893),O=_(83997),i=_(79739),L=_(58805),A=_(21610),a=_(80403),C=_(68994),I=_(14595),v=_(54894),B=_(82437),R=_(59157),U=_(86132),N=_(21272),H=_(72810),F=_(18022),G=_(48940),z=_(2600),V=_(51187),X=_(15126),J=_(63299),Q=_(67014),Y=_(59080),Z=_(79275),$=_(14718),e=_(61535),p=_(5790),u=_(12083),k=_(35223),w=_(5409),b=_(74930),q=_(41286),__=_(56336),E_=_(39404),s_=_(58692),t_=_(54257),a_=_(501),D_=_(57646),M_=_(23120),O_=_(44414),n_=_(25962),P_=_(14664),o_=_(42588),d_=_(90325),l_=_(62785),i_=_(87443),L_=_(41032),A_=_(22957),C_=_(93179),I_=_(73055),v_=_(15747),B_=_(85306),R_=_(77965),U_=_(26509),T_=_(84624),K_=_(71210),W_=_(32058),m_=_(81185),h_=_(82261);const T="https://cloud.strapi.io/profile/billing",K="https://strapi.io/billing/request-seats",W=()=>{const{formatMessage:s}=(0,v.A)(),{settings:m}=(0,B.d4)(R.s),{isLoading:n,allowedActions:{canRead:h,canCreate:r,canUpdate:g,canDelete:f}}=(0,a.ec)(m?.users??{}),{license:P,isError:x,isLoading:j}=(0,U.m)({enabled:!n&&h&&r&&g&&f});if(x||(n||j)||!P)return null;const{licenseLimitStatus:S,enforcementUserCount:o,permittedSeats:D,isHostedOnStrapiCloud:d}=P;return D?(0,E.jsxs)(l.E,{col:6,s:12,children:[(0,E.jsx)(t.o,{variant:"sigma",textColor:"neutral600",children:s({id:"Settings.application.admin-seats",defaultMessage:"Admin seats"})}),(0,E.jsxs)(O.s,{gap:2,children:[(0,E.jsx)(O.s,{children:(0,E.jsx)(t.o,{as:"p",children:s({id:"Settings.application.ee.admin-seats.count",defaultMessage:"<text>{enforcementUserCount}</text>/{permittedSeats}"},{permittedSeats:D,enforcementUserCount:o,text:y=>(0,E.jsx)(t.o,{fontWeight:"semiBold",textColor:o>D?"danger500":void 0,children:y})})})}),S==="OVER_LIMIT"&&(0,E.jsx)(i.m,{description:s({id:"Settings.application.ee.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"}),children:(0,E.jsx)(L.I,{width:(0,a.a8)(14),height:(0,a.a8)(14),color:"danger500",as:C.A})})]}),(0,E.jsx)(A.N,{href:d?T:K,isExternal:!0,endIcon:(0,E.jsx)(I.A,{}),children:s({id:"Settings.application.ee.admin-seats.add-seats",defaultMessage:"{isHostedOnStrapiCloud, select, true {Add seats} other {Contact sales}}"},{isHostedOnStrapiCloud:d})})]}):null}}}]);
