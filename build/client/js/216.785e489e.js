"use strict";(self["webpackChunkNGGG"]=self["webpackChunkNGGG"]||[]).push([[216],{394:function(e,s){const r=/^[a-z0-9]{4,12}$/,o=/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/,l=/^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,10}/,a=/^[0-9|null]*$/,n={id:e=>!!r.test(e),password:e=>!!o.test(e),name:e=>!!l.test(e),phone:e=>!!a.test(e),registration_number:e=>!!a.test(e)};s["Z"]=n},5201:function(e,s,r){r.d(s,{Z:function(){return u}});var o=r(3614),l=(r(6809),r(3396));function a(e,s,r,a,n,t){const d=o.mi;return(0,l.wg)(),(0,l.j4)(d,{type:"primary",onClick:e.addressSearch},{default:(0,l.w5)((()=>[(0,l.Uk)(" 주소 찾기 ")])),_:1},8,["onClick"])}var n=(0,l.aZ)({components:{ElButton:o.mi},setup(e,s){const{emit:r}=s;function o(){new daum.Postcode({oncomplete:function(e){const{roadAddress:s,jibunAddress:o}=e;r("getRoadAddress",s),r("getJibunAddress",o)}}).open()}return{addressSearch:o}}}),t=r(89);const d=(0,t.Z)(n,[["render",a]]);var u=d},9032:function(e,s,r){r.r(s),r.d(s,{default:function(){return B}});var o=r(7988),l=(r(1844),r(3614)),a=(r(6809),r(3396));const n=e=>((0,a.dD)("data-v-655d393a"),e=e(),(0,a.Cn)(),e),t=n((()=>(0,a._)("span",{id:"confirm"}," 정말로 회원탈퇴 하시겠습니까? ",-1))),d={class:"dialog-footer"};function u(e,s,r,n,u,i){const m=l.mi,c=o.d0;return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(m,{type:"danger",onClick:s[0]||(s[0]=s=>e.centerDialogVisible=!0)},{default:(0,a.w5)((()=>[(0,a.Uk)("회원탈퇴")])),_:1}),(0,a.Wm)(c,{modelValue:e.centerDialogVisible,"onUpdate:modelValue":s[2]||(s[2]=s=>e.centerDialogVisible=s),title:"경고",width:"20%",center:""},{footer:(0,a.w5)((()=>[(0,a._)("span",d,[(0,a.Wm)(m,{class:"dialogbutton",type:"danger",onClick:s[1]||(s[1]=s=>e.centerDialogVisible=!1)},{default:(0,a.w5)((()=>[(0,a.Uk)("아니오 ")])),_:1}),(0,a.Wm)(m,{class:"dialogbutton",onClick:e.goToDelete,style:{width:"70px"}},{default:(0,a.w5)((()=>[(0,a.Uk)("예 ")])),_:1},8,["onClick"])])])),default:(0,a.w5)((()=>[t])),_:1},8,["modelValue"])],64)}r(7658);var i=r(4870),m=r(2483),c=(0,a.aZ)({name:"UserDeleteDialog",components:{ElDialog:o.d0,ElButton:l.mi},setup(){const e=(0,i.iH)(!1),s=(0,m.tv)(),r=()=>{s.push({path:"/delete"})};return{centerDialogVisible:e,goToDelete:r}}}),_=r(89);const p=(0,_.Z)(c,[["render",u],["__scopeId","data-v-655d393a"]]);var w=p,f=r(8131),h=(r(2064),r(7113),r(3417));r(172);function g(e,s,r,o,n,t){const d=h.EZ,u=l.mi,i=f.nH,m=f.ly;return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(m,{model:e.password_change_form,rules:e.first_rules,"status-icon":"","scroll-to-error":"","label-width":"22%","label-position":"left",disabled:e.isChecked},{default:(0,a.w5)((()=>[(0,a.Wm)(i,{label:"기존 비밀번호",prop:"password"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{modelValue:e.password_change_form.password,"onUpdate:modelValue":s[0]||(s[0]=s=>e.password_change_form.password=s),type:"password",class:"content",placeholder:"기존 비밀번호를 입력해주세요.","show-password":""},null,8,["modelValue"]),(0,a.Wm)(u,{type:"primary",onClick:e.confirmPassword,class:"button-size"},{default:(0,a.w5)((()=>[(0,a.Uk)("비밀번호 확인 ")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules","disabled"]),(0,a.Wm)(m,{model:e.password_change_form,rules:e.second_rules,"status-icon":"","scroll-to-error":"","label-width":"22%","label-position":"left"},{default:(0,a.w5)((()=>[(0,a.Wm)(i,{label:"새 비밀번호",prop:"new_password"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{modelValue:e.password_change_form.new_password,"onUpdate:modelValue":s[1]||(s[1]=s=>e.password_change_form.new_password=s),disabled:!e.isChecked,class:"content",type:"password",placeholder:"새 비밀번호를 입력해주세요.","show-password":""},null,8,["modelValue","disabled"])])),_:1}),(0,a.Wm)(i,{label:"새 비밀번호 확인",prop:"new_password_confirm"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{modelValue:e.password_change_form.new_password_confirm,"onUpdate:modelValue":s[2]||(s[2]=s=>e.password_change_form.new_password_confirm=s),disabled:!e.isChecked,class:"content",type:"password",placeholder:"새 비밀번호를 다시 입력해주세요.","show-password":""},null,8,["modelValue","disabled"]),(0,a.Wm)(u,{onClick:e.sendChangePassword,type:"primary",class:"button-size"},{default:(0,a.w5)((()=>[(0,a.Uk)("비밀번호 변경 ")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])],64)}var b=r(8201),k=r(5679),y=(0,a.aZ)({name:"PasswordChange",components:{ElForm:f.ly,ElFormItem:f.nH,ElInput:h.EZ,ElButton:l.mi},setup(){const e=(0,i.qj)({password:"",new_password:"",new_password_confirm:""});let s=(0,i.iH)(!1);const r=async()=>{const r=await(0,b.oH)(e),o=r.data;r.status===k.Z.Ok&&(s.value=o)},o=async()=>{const s=await(0,b.Cp)(e);s.status===k.Z.Ok&&console.log("password change success")},l=(s,r,o)=>{""===r?o(new Error("Please input the password again")):r!==e.new_password?o(new Error("Two inputs don't match!")):o()},a=(0,i.qj)({password:[{required:!0,message:"비밀번호를 반드시 입력하세요",trigger:"blur"},{min:8,max:16,message:"비밀번호는 8글자 이상, 16자 이하입니다.",trigger:"blur"}]}),n=(0,i.qj)({new_password:[{required:!0,message:"새 비밀번호는 반드시 입력해주세요.",trigger:"blur"},{min:8,message:"비밀번호는 8글자 이상으로 만들어주세요.",trigger:"blur"},{max:16,message:"비밀번호는 16글자 이하로 만들어주세요.",trigger:"blur"}],new_password_confirm:[{required:!0,message:"비밀 번호 확인은 반드시 입력해주세요.",trigger:"blur"},{min:8,message:"비밀번호는 8글자 이상으로 만들어주세요.",trigger:"blur"},{max:16,message:"비밀번호는 16글자 이하로 만들어주세요.",trigger:"blur"},{validator:l,message:"비밀번호는 같아야함"}]});return{confirmPassword:r,password_change_form:e,sendChangePassword:o,first_rules:a,second_rules:n,isChecked:s}}});const U=(0,_.Z)(y,[["render",g],["__scopeId","data-v-14b90f64"]]);var V=U,W=r(5201),v=r(7139),C=r(9242);const A=e=>((0,a.dD)("data-v-77afc077"),e=e(),(0,a.Cn)(),e),E={id:"mypagedetail"},Z=A((()=>(0,a._)("h1",null,"내 정보",-1))),x=A((()=>(0,a._)("hr",null,null,-1))),z={class:"content"},D={class:"content",style:{display:"flex"}},q=A((()=>(0,a._)("p",{style:{flex:"1","text-align":"center",margin:"0px"}},"-",-1))),H=A((()=>(0,a._)("p",{style:{flex:"1","text-align":"center",margin:"0px"}},"-",-1))),P=A((()=>(0,a._)("hr",{style:{"margin-bottom":"100px"}},null,-1))),I=A((()=>(0,a._)("h1",null,"비밀번호 변경",-1))),j=A((()=>(0,a._)("hr",null,null,-1))),F=A((()=>(0,a._)("hr",null,null,-1)));function G(e,s,r,o,n,t){const d=f.nH,u=l.mi,i=f.ly,m=h.EZ,c=W.Z,_=V,p=w;return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",E,[Z,x,e.isChange?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(i,{key:0,"label-width":"22%","label-position":"left"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{label:"아이디"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,v.zw)(e.info.user_id),1)])),_:1}),(0,a.Wm)(d,{label:"이름"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,v.zw)(e.info.user_name),1)])),_:1}),(0,a.Wm)(d,{label:"핸드폰 번호"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,v.zw)(e.info.user_phone?.slice(0,3))+" - "+(0,v.zw)(e.info.user_phone?.slice(4,8))+" - "+(0,v.zw)(e.info.user_phone?.slice(9,13)),1)])),_:1}),(0,a.Wm)(d,{label:"주소"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,v.zw)(e.info.user_address),1)])),_:1}),(0,a.Wm)(d,{label:"사업자 번호"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("div",{class:"content"},(0,v.zw)(e.info.corporate_registration_number?.slice(0,3))+" - "+(0,v.zw)(e.info.corporate_registration_number?.slice(3,5))+" - "+(0,v.zw)(e.info.corporate_registration_number?.slice(5,10)),513),[[C.F8,e.info.corporate_registration_number]]),(0,a.wy)((0,a._)("div",z,null,512),[[C.F8,!e.info.corporate_registration_number]]),(0,a.Wm)(u,{onClick:e.putUserInfo,type:"primary",class:"button-size"},{default:(0,a.w5)((()=>[(0,a.Uk)("수정하기")])),_:1},8,["onClick"])])),_:1})])),_:1})),1==e.isChange?((0,a.wg)(),(0,a.j4)(i,{key:1,ref:"changeformRef",model:e.changeform,rules:e.rules,"label-width":"22%","label-position":"left"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{label:"아이디"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,v.zw)(e.info.user_id),1)])),_:1}),(0,a.Wm)(d,{label:"이름",prop:"user_name"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{class:"content",modelValue:e.changeform.user_name,"onUpdate:modelValue":s[0]||(s[0]=s=>e.changeform.user_name=s)},null,8,["modelValue"])])),_:1}),(0,a.Wm)(d,{label:"핸드폰 번호",prop:"user_phone"},{default:(0,a.w5)((()=>[(0,a._)("div",D,[(0,a.Wm)(m,{modelValue:e.fullUserPhone.first_user_phone,"onUpdate:modelValue":s[1]||(s[1]=s=>e.fullUserPhone.first_user_phone=s),placeholder:"010",style:{flex:"3"},maxlength:"3",disabled:""},null,8,["modelValue"]),q,(0,a.Wm)(m,{modelValue:e.fullUserPhone.second_user_phone,"onUpdate:modelValue":s[2]||(s[2]=s=>e.fullUserPhone.second_user_phone=s),placeholder:"1234",style:{flex:"4"},maxlength:"4"},null,8,["modelValue"]),H,(0,a.Wm)(m,{modelValue:e.fullUserPhone.third_user_phone,"onUpdate:modelValue":s[3]||(s[3]=s=>e.fullUserPhone.third_user_phone=s),placeholder:"5678",style:{flex:"4"},maxlength:"4"},null,8,["modelValue"])])])),_:1}),(0,a.Wm)(d,{label:"주소",prop:"user_address"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{class:"content",modelValue:e.fullAddress.roadAddress,"onUpdate:modelValue":s[4]||(s[4]=s=>e.fullAddress.roadAddress=s),readonly:""},null,8,["modelValue"]),(0,a.Wm)(c,{class:"address-search-button button-size",onGetRoadAddress:e.setRoadAddress},null,8,["onGetRoadAddress"]),(0,a.Wm)(d,{class:"content"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{modelValue:e.fullAddress.detailAddress,"onUpdate:modelValue":s[5]||(s[5]=s=>e.fullAddress.detailAddress=s),placeholder:"상세 주소를 입력해주세요."},null,8,["modelValue"])])),_:1})])),_:1}),(0,a.Wm)(d,{label:"사업자 번호",prop:"corporate_registration_number"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{class:"content",modelValue:e.changeform.corporate_registration_number,"onUpdate:modelValue":s[6]||(s[6]=s=>e.changeform.corporate_registration_number=s),placeholder:" '-' 를 뺀 10자리 사업자 번호를 입력해주세요."},null,8,["modelValue"]),(0,a.Wm)(u,{onClick:s[7]||(s[7]=s=>e.submitForm(e.changeformRef)),type:"primary",class:"button-size"},{default:(0,a.w5)((()=>[(0,a.Uk)("저장하기")])),_:1})])),_:1})])),_:1},8,["model","rules"])):(0,a.kq)("",!0)]),P,I,j,(0,a.Wm)(_),F,(0,a.Wm)(p)],64)}var R=r(65),$=r(394),S=(0,a.aZ)({name:"UserInfo",components:{AddressSearchButton:W.Z,PasswordChange:V,UserDeleteDialog:w,ElForm:f.ly,ElFormItem:f.nH,ElInput:h.EZ,ElButton:l.mi},setup(){const e=(0,R.oR)(),s=(0,i.iH)(),r=e=>{d.roadAddress=e},o=async()=>{const s=await(0,b.bG)(),r=s.data;s.status===k.Z.Ok?e.commit("userStore/GET_USER_INFO",r):console.log("err")},l=(0,a.Fl)((()=>e.state.userStore.user_info)),n=(0,i.qj)({first_user_phone:"010",second_user_phone:null,third_user_phone:null}),t=(0,i.iH)(`${n.first_user_phone} ${n.second_user_phone} ${n.third_user_phone}`),d=(0,i.qj)({roadAddress:"",detailAddress:null}),u=(0,i.iH)(`${d.roadAddress} ${d.detailAddress}`),m=(0,i.qj)({user_name:"",user_id:"",user_phone:t,user_address:u,corporate_registration_number:""}),c=(e,s,r)=>{""===s?r(new Error("이름은 반드시 입력해주세요.")):m.user_name.length<2||m.user_name.length>8?r(new Error("이름은 2~8글자 사이로 만들어주세요.")):!1===$.Z.name(m.user_name)?r(new Error("이름은 한글만 가능합니다!")):r()},_=(e,s,r)=>{null!=!n.second_user_phone&&"4"!=n.second_user_phone?.["length"]||""==n.third_user_phone?r(new Error("올바르지 않은 핸드폰 번호입니다.")):0==$.Z.phone(n.second_user_phone)||0==$.Z.phone(n.third_user_phone)?r(new Error("핸드폰 번호는 숫자만 가능합니다!")):r()},p=(e,s,r)=>{d.roadAddress?d.roadAddress&&0==d.detailAddress?.["length"]?r(new Error("주소는 반드시 입력해주세요.")):r():r(new Error("주소는 반드시 입력해주세요."))},w=(0,i.qj)({user_name:[{required:!0,validator:c,trigger:"blur"}],user_phone:[{required:!0,validator:_,trigger:"blur"}],user_address:[{required:!0,validator:p,trigger:"blur"}]});let f=(0,i.iH)(!1);const h=()=>{f.value=!0},g=async()=>{const s=await(0,b.oK)(m),r=s.data;s.status===k.Z.Ok?(e.commit("userStore/USER_INFO_CHANGE",r),f.value=!1,o()):console.log("err")},y=async e=>{t.value=n.first_user_phone+"-"+n.second_user_phone+"-"+n.third_user_phone,u.value=d.roadAddress+" "+d.detailAddress,e&&await e.validate(((e,s)=>{e?(g(),console.log(e)):console.log("error submit",s)}))};return{composition:o,info:l,changeformRef:s,changeform:m,rules:w,isChange:f,putUserInfo:h,submitForm:y,saveChangeInfo:g,fullUserPhone:n,fullAddress:d,setRoadAddress:r}}});const O=(0,_.Z)(S,[["render",G],["__scopeId","data-v-77afc077"]]);var B=O}}]);