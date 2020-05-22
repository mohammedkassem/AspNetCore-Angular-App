(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"s+ND":function(e,n,r){"use strict";r.r(n),r.d(n,"UserInfoModule",(function(){return ie}));var t=r("ofXK"),i=r("tyNb"),a=r("IzEk"),o=r("1G5W"),c=r("nYR2"),l=r("ds6q"),s=r("DBRY"),u=r("fXoL"),b=r("aR35"),d=r("B8yH");class m{constructor(e,n,r){this.op=e,this.path=n,this.value=r}}var f=function(e){return e.add="add",e.remove="remove",e.replace="replace",e}({}),g=r("tk/3"),h=r("3wlO");let p=(()=>{class e{constructor(e,n,r){this.http=e,this.dataStateSrc=n,this.config=r}EditProfile(e){return this.http.patch(this.config.apiEndpoint+d.a[this.dataStateSrc.UserRole+"Profile"],this.generatePatchDocument(e))}generatePatchDocument(e){const n=[],r=this.dataStateSrc.User;return this.dataStateSrc.UserProps.forEach(t=>{e[t]=""===e[t]?null:e[t],null===r[t]&&null!==e[t]?n.push(new m(f.add,"/"+t,e[t])):null!==r[t]&&null===e[t]?n.push(new m(f.remove,"/"+t)):r[t]!==e[t]&&n.push(new m(f.replace,"/"+t,e[t]))}),n}}return e.\u0275fac=function(n){return new(n||e)(u.ac(g.b),u.ac(h.a),u.ac(b.a))},e.\u0275prov=u.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var v=r("jFld"),D=r("JqCM"),C=r("3Pt+"),y=r("LYRX");let E=(()=>{class e{constructor(e){this.minValue=e,this.minValue=Number(this.minValue)}validate(e){return null!==e.value&&""!==e.value&&Number(e.value)<this.minValue?{min:!0}:null}}return e.\u0275fac=function(n){return new(n||e)(u.bc("min"))},e.\u0275dir=u.Lb({type:e,selectors:[["","min",""]],features:[u.Cb([{provide:C.h,useExisting:e,multi:!0}])]}),e})(),S=(()=>{class e{constructor(e){this.maxValue=e,this.maxValue=Number(this.maxValue)}validate(e){return Number(e.value)>this.maxValue?{max:!0}:null}}return e.\u0275fac=function(n){return new(n||e)(u.bc("max"))},e.\u0275dir=u.Lb({type:e,selectors:[["","max",""]],features:[u.Cb([{provide:C.h,useExisting:e,multi:!0}])]}),e})();var M=r("kmnG");const x=["ProfileForm"];function V(e,n){if(1&e&&(u.Wb(0,"mat-error"),u.Ec(1),u.Vb()),2&e){const e=n.$implicit;u.Db(1),u.Fc(e)}}function U(e,n){if(1&e&&(u.Ub(0),u.Cc(1,V,2,1,"mat-error",19),u.Tb()),2&e){u.ic();const e=u.tc(1);u.Db(1),u.nc("ngForOf",null==e?null:e.errors.server)}}function W(e,n){1&e&&(u.Wb(0,"mat-error"),u.Ec(1,"Last name field is required."),u.Vb())}function w(e,n){1&e&&(u.Wb(0,"mat-error"),u.Ec(1,"Last name length must be between 2 and 25 symbols."),u.Vb())}function O(e,n){1&e&&(u.Wb(0,"mat-error"),u.Ec(1," Last name cannot have white spaces."),u.Vb())}function F(e,n){if(1&e&&(u.Wb(0,"mat-error"),u.Ec(1),u.Vb()),2&e){const e=n.$implicit;u.Db(1),u.Fc(e)}}function I(e,n){if(1&e&&(u.Ub(0),u.Cc(1,F,2,1,"mat-error",19),u.Tb()),2&e){u.ic(2);const e=u.tc(5);u.Db(1),u.nc("ngForOf",null==e?null:e.errors.server)}}function P(e,n){if(1&e&&(u.Ub(0),u.Cc(1,W,2,0,"mat-error",2),u.Cc(2,w,2,0,"mat-error",2),u.Cc(3,O,2,0,"mat-error",2),u.Cc(4,I,2,1,"ng-container",2),u.Tb()),2&e){u.ic();const e=u.tc(5);u.Db(1),u.nc("ngIf",null==e?null:e.errors.required),u.Db(1),u.nc("ngIf",null==e?null:e.errors.minlength),u.Db(1),u.nc("ngIf",null==e?null:e.errors.validateEmpty),u.Db(1),u.nc("ngIf",null==e?null:e.errors.server)}}function N(e,n){1&e&&(u.Wb(0,"mat-error"),u.Ec(1,"First name field is required."),u.Vb())}function _(e,n){1&e&&(u.Wb(0,"mat-error"),u.Ec(1,"First name length must be between 2 and 20 symbols."),u.Vb())}function q(e,n){1&e&&(u.Wb(0,"mat-error"),u.Ec(1," First name cannot have white spaces."),u.Vb())}function R(e,n){if(1&e&&(u.Wb(0,"mat-error"),u.Ec(1),u.Vb()),2&e){const e=n.$implicit;u.Db(1),u.Fc(e)}}function k(e,n){if(1&e&&(u.Ub(0),u.Cc(1,R,2,1,"mat-error",19),u.Tb()),2&e){u.ic(2);const e=u.tc(9);u.Db(1),u.nc("ngForOf",null==e?null:e.errors.server)}}function T(e,n){if(1&e&&(u.Ub(0),u.Cc(1,N,2,0,"mat-error",2),u.Cc(2,_,2,0,"mat-error",2),u.Cc(3,q,2,0,"mat-error",2),u.Cc(4,k,2,1,"ng-container",2),u.Tb()),2&e){u.ic();const e=u.tc(9);u.Db(1),u.nc("ngIf",null==e?null:e.errors.required),u.Db(1),u.nc("ngIf",null==e?null:e.errors.minlength),u.Db(1),u.nc("ngIf",null==e?null:e.errors.validateEmpty),u.Db(1),u.nc("ngIf",null==e?null:e.errors.server)}}function j(e,n){1&e&&(u.Wb(0,"mat-error"),u.Ec(1,"You have to be at least 18 years old."),u.Vb())}function $(e,n){1&e&&(u.Wb(0,"mat-error"),u.Ec(1,"Age must be between 18 and 100."),u.Vb())}function z(e,n){if(1&e&&(u.Wb(0,"mat-error"),u.Ec(1),u.Vb()),2&e){const e=n.$implicit;u.Db(1),u.Fc(e)}}function L(e,n){if(1&e&&(u.Ub(0),u.Cc(1,z,2,1,"mat-error",19),u.Tb()),2&e){u.ic(2);const e=u.tc(16);u.Db(1),u.nc("ngForOf",null==e?null:e.errors.server)}}function Q(e,n){if(1&e&&(u.Ub(0),u.Cc(1,j,2,0,"mat-error",2),u.Cc(2,$,2,0,"mat-error",2),u.Cc(3,L,2,1,"ng-container",2),u.Tb()),2&e){u.ic();const e=u.tc(16);u.Db(1),u.nc("ngIf",null==e?null:e.errors.min),u.Db(1),u.nc("ngIf",null==e?null:e.errors.max),u.Db(1),u.nc("ngIf",null==e?null:e.errors.server)}}function B(e,n){1&e&&(u.Wb(0,"mat-error"),u.Ec(1,"Specialization cannot have white spaces."),u.Vb())}function Y(e,n){1&e&&(u.Wb(0,"mat-error"),u.Ec(1,"Specialization must be at least 3 characters long."),u.Vb())}function J(e,n){if(1&e&&(u.Wb(0,"mat-error"),u.Ec(1),u.Vb()),2&e){const e=n.$implicit;u.Db(1),u.Fc(e)}}function X(e,n){if(1&e&&(u.Ub(0),u.Cc(1,J,2,1,"mat-error",19),u.Tb()),2&e){u.ic(2);const e=u.tc(22);u.Db(1),u.nc("ngForOf",null==e?null:e.errors.server)}}function A(e,n){if(1&e&&(u.Ub(0),u.Cc(1,B,2,0,"mat-error",2),u.Cc(2,Y,2,0,"mat-error",2),u.Cc(3,X,2,1,"ng-container",2),u.Tb()),2&e){u.ic();const e=u.tc(22);u.Db(1),u.nc("ngIf",null==e?null:e.errors.validateEmpty),u.Db(1),u.nc("ngIf",null==e?null:e.errors.minlength),u.Db(1),u.nc("ngIf",null==e?null:e.errors.server)}}function G(e,n){1&e&&(u.Wb(0,"mat-error"),u.Ec(1,"Experience have to be at least 1 year."),u.Vb())}function K(e,n){1&e&&(u.Wb(0,"mat-error"),u.Ec(1,"Experience can't be more than 45 years."),u.Vb())}function H(e,n){if(1&e&&(u.Wb(0,"mat-error"),u.Ec(1),u.Vb()),2&e){const e=n.$implicit;u.Db(1),u.Fc(e)}}function Z(e,n){if(1&e&&(u.Ub(0),u.Cc(1,H,2,1,"mat-error",19),u.Tb()),2&e){u.ic(2);const e=u.tc(26);u.Db(1),u.nc("ngForOf",null==e?null:e.errors.server)}}function ee(e,n){if(1&e&&(u.Ub(0),u.Cc(1,G,2,0,"mat-error",2),u.Cc(2,K,2,0,"mat-error",2),u.Cc(3,Z,2,1,"ng-container",2),u.Tb()),2&e){u.ic();const e=u.tc(26);u.Db(1),u.nc("ngIf",null==e?null:e.errors.min),u.Db(1),u.nc("ngIf",null==e?null:e.errors.max),u.Db(1),u.nc("ngIf",null==e?null:e.errors.server)}}const ne=function(e){return{invisible:e}};let re=(()=>{class e{constructor(e,n,r,t,i,o){this.infoSrc=e,this.errorSrc=n,this.datePipe=r,this.dataStateSrc=t,this.spinner=i,this.route=o,this.Roles=s.a,this.destroyed$=new l.Subject,this.route.data.pipe(Object(a.a)(1)).subscribe(e=>this.User=Object.assign({},e.user)),this.ModelsEqual=!0,this.SaveBtnDisabled=!1}OnChange(){this.ModelsEqual=this.ProfileForm.invalid||this.dataStateSrc.UserProps.every(e=>this.propsEqual(this.dataStateSrc.User[e],this.User[e]))}propsEqual(e,n){return null===e&&this.isNullOrEmpty(n)||e===n}isNullOrEmpty(e){return null===e||""===e}OnSaveChanges(){this.disabledForm(),this.infoSrc.EditProfile(this.User).pipe(Object(a.a)(1),Object(o.a)(this.destroyed$),Object(c.a)(()=>this.enableForm())).subscribe(()=>this.editSuccess(),e=>this.errorSrc.SetServerErrors(e,this.dataStateSrc.User,this.ProfileForm))}disabledForm(){this.spinner.show(),this.SaveBtnDisabled=!0}enableForm(){this.spinner.hide(),this.SaveBtnDisabled=!1}editSuccess(){this.ModelsEqual=!0,this.dataStateSrc.User=Object.assign({},this.User)}ngOnDestroy(){this.destroyed$.next(),this.destroyed$.complete()}}return e.\u0275fac=function(n){return new(n||e)(u.Qb(p),u.Qb(v.a),u.Qb(t.e),u.Qb(h.a),u.Qb(D.c),u.Qb(i.a))},e.\u0275cmp=u.Kb({type:e,selectors:[["app-user-info"]],viewQuery:function(e,n){var r;1&e&&u.Ic(x,!0),2&e&&u.sc(r=u.fc())&&(n.ProfileForm=r.first)},decls:31,vars:23,consts:[["id","userProfile","novalidate","",3,"keyup","ngSubmit"],["ProfileForm","ngForm"],[4,"ngIf"],[1,"form_group"],["type","text","name","lastName","required","","validateEmpty","","minlength","2","maxlength","25","placeholder","Last name",1,"form_field",3,"ngModel","ngModelChange"],["lastName","ngModel"],["name","firstName","required","","validateEmpty","","minlength","2","maxlength","20","placeholder","First name",1,"form_field",3,"ngModel","ngModelChange"],["firstName","ngModel"],["disabled","disabled","name","userName","placeholder","Email",1,"form_field",3,"ngModel"],["userName","ngModel"],["name","age","type","number","min","18","max","100","placeholder","Age",1,"form_field",3,"ngModel","ngModelChange"],["age","ngModel"],[1,"form_group",3,"ngClass"],["disabled","disabled","name","registryDate","type","text",1,"form_field",3,"ngModel"],["name","specialization","validateEmpty","","minlength","3","maxlength","40","placeholder","Specialization",1,"form_field",3,"ngModel","ngModelChange"],["spc","ngModel"],["name","yearsOfExperience","type","number","min","1","max","45","placeholder","Experience",1,"form_field",3,"ngModel","ngModelChange"],["exp","ngModel"],["id","save_btn","type","submit",3,"disabled"],[4,"ngFor","ngForOf"]],template:function(e,n){if(1&e&&(u.Wb(0,"form",0,1),u.ec("keyup",(function(){return n.OnChange()}))("ngSubmit",(function(){return n.OnSaveChanges()})),u.Cc(2,U,2,1,"ng-container",2),u.Wb(3,"div",3),u.Wb(4,"input",4,5),u.ec("ngModelChange",(function(e){return n.User.lastName=e})),u.Vb(),u.Cc(6,P,5,4,"ng-container",2),u.Vb(),u.Wb(7,"div",3),u.Wb(8,"input",6,7),u.ec("ngModelChange",(function(e){return n.User.firstName=e})),u.Vb(),u.Cc(10,T,5,4,"ng-container",2),u.Vb(),u.Wb(11,"div",3),u.Rb(12,"input",8,9),u.Vb(),u.Wb(14,"div",3),u.Wb(15,"input",10,11),u.ec("ngModelChange",(function(e){return n.User.age=e})),u.Vb(),u.Cc(17,Q,4,3,"ng-container",2),u.Vb(),u.Wb(18,"div",12),u.Rb(19,"input",13),u.Vb(),u.Wb(20,"div",12),u.Wb(21,"input",14,15),u.ec("ngModelChange",(function(e){return n.User.specialization=e})),u.Vb(),u.Cc(23,A,4,3,"ng-container",2),u.Vb(),u.Wb(24,"div",12),u.Wb(25,"input",16,17),u.ec("ngModelChange",(function(e){return n.User.yearsOfExperience=e})),u.Vb(),u.Cc(27,ee,4,3,"ng-container",2),u.Vb(),u.Wb(28,"div",3),u.Wb(29,"button",18),u.Ec(30," Save changes "),u.Vb(),u.Vb(),u.Vb()),2&e){const e=u.tc(1),r=u.tc(5),t=u.tc(9),i=u.tc(16),a=u.tc(22),o=u.tc(26);u.Db(2),u.nc("ngIf",e.invalid&&(null==e||null==e.errors?null:e.errors.server)),u.Db(2),u.nc("ngModel",n.User.lastName),u.Db(2),u.nc("ngIf",r.invalid&&r.dirty),u.Db(2),u.nc("ngModel",n.User.firstName),u.Db(2),u.nc("ngIf",t.invalid&&t.dirty),u.Db(2),u.nc("ngModel",n.User.userName),u.Db(3),u.nc("ngModel",n.User.age),u.Db(2),u.nc("ngIf",i.invalid&&i.dirty),u.Db(1),u.nc("ngClass",u.qc(17,ne,n.dataStateSrc.UserRole===n.Roles.doctor)),u.Db(1),u.nc("ngModel",n.datePipe.transform(n.User.registryDate,"dd-MM-yyyy")),u.Db(1),u.nc("ngClass",u.qc(19,ne,n.dataStateSrc.UserRole===n.Roles.patient)),u.Db(1),u.nc("ngModel",n.User.specialization),u.Db(2),u.nc("ngIf",a.invalid&&a.dirty),u.Db(1),u.nc("ngClass",u.qc(21,ne,n.dataStateSrc.UserRole===n.Roles.patient)),u.Db(1),u.nc("ngModel",n.User.yearsOfExperience),u.Db(2),u.nc("ngIf",o.invalid&&o.dirty),u.Db(2),u.nc("disabled",n.ModelsEqual||n.SaveBtnDisabled)}},directives:[C.q,C.l,C.m,t.l,C.b,C.p,y.a,C.g,C.f,C.k,C.n,C.o,E,S,t.j,t.k,M.b],styles:["#userProfile[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-width:270px;height:auto;max-height:345px;margin-left:2rem}.form_group[_ngcontent-%COMP%]{margin-bottom:.7rem}.form_field[_ngcontent-%COMP%]{width:-webkit-fill-available;max-width:220px;min-width:165px;height:22px;border-radius:8px;border-top:none;border-bottom:none;border-right:none;padding:.375rem .75rem;box-shadow:inset 20px -8px 25px 0 rgba(59,208,98,.38);background-color:hsla(0,0%,100%,0);color:#495057;outline:none;font-size:.95rem}#save_btn[_ngcontent-%COMP%]{padding:.55rem;font-size:.875rem;border-radius:10px;margin-bottom:.7rem;background-color:#28a745;color:#fff;border:none;cursor:pointer}#save_btn[_ngcontent-%COMP%]:disabled{opacity:.7;cursor:default}"]}),e})();var te=r("d2mR");let ie=(()=>{class e{}return e.\u0275mod=u.Ob({type:e}),e.\u0275inj=u.Nb({factory:function(n){return new(n||e)},providers:[t.e,p,v.a],imports:[[te.a,i.f.forChild([{path:"",component:re}])]]}),e})()}}]);