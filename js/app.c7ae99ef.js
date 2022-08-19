(function(){"use strict";var t={179:function(t,e,a){var r=a(963),o=a(252);const s=(0,o.Uk)("Статистика"),l=(0,o.Uk)(" | "),n=(0,o.Uk)("Расходы"),i=(0,o.Uk)(" | "),y=(0,o.Uk)("Доходы");function u(t,e,a,r,u,h){const c=(0,o.up)("router-link"),g=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("nav",null,[(0,o.Wm)(c,{to:"/"},{default:(0,o.w5)((()=>[s])),_:1}),l,(0,o.Wm)(c,{to:"/buys"},{default:(0,o.w5)((()=>[n])),_:1}),i,(0,o.Wm)(c,{to:"/salary"},{default:(0,o.w5)((()=>[y])),_:1})]),(0,o.Wm)(g,{BuysArr:u.BuysArr,categoryArr:u.categoryArr,onAddCategory:h.addCategory,saveToLS:h.saveToLS,SalarysArr:u.SalarysArr,categorySalaryArr:u.categorySalaryArr,onAddCategorySalary:h.addCategorySalary,onDeleteBuy:h.deleteBuy,onDeleteSalary:h.deleteSalary,onDeleteCatSalary:h.deleteCatSalary,onDeleteCatBuy:h.deleteCatBuy},null,8,["BuysArr","categoryArr","onAddCategory","saveToLS","SalarysArr","categorySalaryArr","onAddCategorySalary","onDeleteBuy","onDeleteSalary","onDeleteCatSalary","onDeleteCatBuy"])],64)}var h={data(){return{BuysArr:[],categoryArr:[{category:"Техника",img:"./assets/tech.svg",status:!1},{category:"Одежда",img:"./assets/cloth.svg",status:!1},{category:"Еда",img:"./assets/food.svg",status:!1},{category:"Машина",img:"./assets/auto.svg",status:!1},{category:"Здоровье",img:"./assets/health.svg",status:!1}],SalarysArr:[],categorySalaryArr:[{category:"Депозит",img:"./assets/depo.svg",status:!1},{category:"Зарплата",img:"./assets/cash.svg",status:!1},{category:"Сбережения",img:"./assets/sber.svg",status:!1}]}},methods:{saveToLS(t,e){localStorage.setItem(`${t}`,JSON.stringify(e))},addCategory(t){this.categoryArr.push(t),this.saveToLS("categoryArr",this.categoryArr)},addCategorySalary(t){this.categorySalaryArr.push(t),this.saveToLS("categorySalaryArr",this.categorySalaryArr)},deleteBuy(t){this.BuysArr=this.BuysArr.filter((e=>e.id!=t)),this.saveToLS("BuysArr",this.BuysArr)},deleteSalary(t){this.SalarysArr=this.SalarysArr.filter((e=>e.id!=t)),this.saveToLS("SalarysArr",this.SalarysArr)},deleteCatSalary(t){this.categorySalaryArr=this.categorySalaryArr.filter((e=>e.category!=t)),this.saveToLS("categorySalaryArr",this.categorySalaryArr)},deleteCatBuy(t){this.categoryArr=this.categoryArr.filter((e=>e.category!=t)),this.saveToLS("categoryArr",this.categoryArr)}},computed:{},mounted(){localStorage.getItem("categoryArr")&&(this.categoryArr=JSON.parse(localStorage.getItem("categoryArr"))),localStorage.getItem("BuysArr")&&(this.BuysArr=JSON.parse(localStorage.getItem("BuysArr"))),localStorage.getItem("categorySalaryArr")&&(this.categorySalaryArr=JSON.parse(localStorage.getItem("categorySalaryArr"))),localStorage.getItem("SalarysArr")&&(this.SalarysArr=JSON.parse(localStorage.getItem("SalarysArr")))}},c=a(744);const g=(0,c.Z)(h,[["render",u]]);var d=g,m=a(201),p=a.p+"img/plus.7899e151.svg";const w=t=>((0,o.dD)("data-v-528803b8"),t=t(),(0,o.Cn)(),t),C={class:"home"},_=w((()=>(0,o._)("h2",null,"Выберите категорию",-1))),A={class:"my-block"},b=w((()=>(0,o._)("img",{src:p,alt:"img",class:"img-btn--big"},null,-1))),v=w((()=>(0,o._)("p",null,"Добавить категорию",-1))),S=[b,v],f={class:"inputs_block"},k=w((()=>(0,o._)("p",null,"Напишите название новой категории",-1))),B=w((()=>(0,o._)("img",{src:p,alt:"img",class:"img-btn"},null,-1))),D=(0,o.Uk)("Добавить"),M=[B,D],T={class:"inputs_block"},U=w((()=>(0,o._)("p",{class:"text"},"Cумма",-1))),j={key:0,class:"error"},W=w((()=>(0,o._)("p",{class:"text"},"Дата",-1))),$=w((()=>(0,o._)("p",{class:"text"},"Комментарий",-1))),x=w((()=>(0,o._)("img",{src:p,alt:"img",class:"img-btn"},null,-1))),I=(0,o.Uk)("Добавить расход"),O=[x,I];function z(t,e,a,s,l,n){const i=(0,o.up)("DeleteBtn"),y=(0,o.up)("MyBlock"),u=(0,o.up)("ModalWindow");return(0,o.wg)(),(0,o.iD)("div",C,[_,(0,o._)("div",A,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.categoryArr,(t=>((0,o.wg)(),(0,o.j4)(y,{key:t.category,item:t,onChooseCathegory:n.ChooseCathegory},{default:(0,o.w5)((()=>[t.status?((0,o.wg)(),(0,o.j4)(i,{key:0,onClick:e=>this.$emit("deleteCatBuy",t.category)},null,8,["onClick"])):(0,o.kq)("",!0)])),_:2},1032,["item","onChooseCathegory"])))),128)),(0,o._)("button",{onClick:e[0]||(e[0]=t=>l.show2.show=!0),class:"button"},S)]),(0,o.Wm)(u,{show:l.show2},{default:(0,o.w5)((()=>[(0,o._)("div",f,[k,(0,o.wy)((0,o._)("input",{ref:"newCat",type:"text",placeholder:"Категория","onUpdate:modelValue":e[1]||(e[1]=t=>l.newCategory=t)},null,512),[[r.nr,l.newCategory]]),(0,o._)("button",{onClick:e[2]||(e[2]=(...t)=>n.AddToCategory&&n.AddToCategory(...t))},M)])])),_:1},8,["show"]),(0,o.Wm)(u,{show:l.show},{default:(0,o.w5)((()=>[(0,o._)("div",T,[U,(0,o.wy)((0,o._)("input",{type:"number",ref:"sum",placeholder:"Сумма","onUpdate:modelValue":e[3]||(e[3]=t=>l.sumCath=t)},null,512),[[r.nr,l.sumCath]]),l.errorSum?((0,o.wg)(),(0,o.iD)("p",j,"Введите верную сумму")):(0,o.kq)("",!0),W,(0,o.wy)((0,o._)("input",{type:"date","onUpdate:modelValue":e[4]||(e[4]=t=>l.dateCathegory=t)},null,512),[[r.nr,l.dateCathegory]]),$,(0,o.wy)((0,o._)("input",{type:"text",placeholder:"Комментарий","onUpdate:modelValue":e[5]||(e[5]=t=>l.commentCathegory=t)},null,512),[[r.nr,l.commentCathegory]]),(0,o._)("button",{onClick:e[6]||(e[6]=t=>n.AddToMain(l.cathegory))},O)])])),_:1},8,["show"])])}var V=a(577);const L=["src"];function Y(t,e,a,r,s,l){return(0,o.wg)(),(0,o.iD)("div",{onClick:e[0]||(e[0]=t=>l.ChooseCathegory(a.item.category))},[(0,o._)("img",{src:a.item.img,alt:"img"},null,8,L),(0,o._)("p",null,(0,V.zw)(a.item.category),1),(0,o.WI)(t.$slots,"default",{},void 0,!0)])}var H={name:"HelloWorld",props:["item"],methods:{ChooseCathegory(t){this.$emit("ChooseCathegory",t)}}};const F=(0,c.Z)(H,[["render",Y],["__scopeId","data-v-42b55005"]]);var Z=F;function q(t,e,a,s,l,n){const i=(0,o.up)("DeleteBtn");return(0,o.wg)(),(0,o.j4)(r.uT,{name:"fade"},{default:(0,o.w5)((()=>[a.show.show?((0,o.wg)(),(0,o.iD)("div",{key:0,class:"modalWindow",onClick:e[1]||(e[1]=(0,r.iM)(((...t)=>n.closeModal&&n.closeModal(...t)),["stop"]))},[(0,o._)("div",{class:"modalItem",onClick:e[0]||(e[0]=(0,r.iM)((()=>{}),["stop"]))},[(0,o.WI)(t.$slots,"default"),(0,o.Wm)(i,{onClick:(0,r.iM)(n.closeModal,["stop"])},null,8,["onClick"])])])):(0,o.kq)("",!0)])),_:3})}const K={class:"delete-btn"};function E(t,e,a,r,s,l){return(0,o.wg)(),(0,o.iD)("button",K,"X")}var G={};const J=(0,c.Z)(G,[["render",E],["__scopeId","data-v-32ffe228"]]);var N=J,P={components:{DeleteBtn:N},name:["ModalWindow"],props:["TextBtn","show"],data(){return{obj:{}}},methods:{openModal(){this.show=!0},closeModal(){this.obj.show=!1}},mounted(){this.obj=this.show}};const X=(0,c.Z)(P,[["render",q]]);var Q=X,R={name:"HomeView",components:{MyBlock:Z,ModalWindow:Q,DeleteBtn:N},props:["BuysArr","categoryArr","saveToLS"],data(){return{errorSum:!1,show2:{show:!1},show:{show:!1},newCategory:"",cathegory:"",obj:{},ChoosenCathegory:{},sumCath:"",dateCathegory:"",fromCathegory:"",commentCathegory:""}},methods:{AddToCategory(){if(""!=this.newCategory){this.show2.show=!1;let t={img:"./assets/other.svg",category:this.newCategory,status:!0};this.$emit("addCategory",t),this.newCategory=""}else this.setBG(this.$refs.newCat,"Введите название категории","Название")},ChooseCathegory(t){this.cathegory=t,this.show.show=!0},AddToMain(){if(""!=this.sumCath&&this.sumCath>=1){this.show.show=!1;let t={id:Date.now(),sum:this.sumCath,date:this.dateCathegory.split("-").reverse().join("-"),comment:this.commentCathegory,category:this.cathegory};console.log(this.dateCathegory),this.obj.push(t),this.saveToLS("BuysArr",this.BuysArr),this.sumCath="",this.dateCathegory="",this.fromCathegory="",this.commentCathegory=""}else this.errorSum=!0,setTimeout((()=>{this.errorSum=!1}),1e3)},setBG(t,e,a){t.style.backgroundColor="orange",t.value=e,setTimeout((()=>{t.style.backgroundColor="white",t.value="",t.setAttribute("placeholder",a)}),1e3)}},mounted(){let t=new Date;this.obj=this.BuysArr,t.getMonth()>9?t.getDate()>9?this.dateCathegory=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate():this.dateCathegory=t.getFullYear()+"-0"+(t.getMonth()+1)+"-0"+t.getDate():this.dateCathegory=t.getFullYear()+"-0"+(t.getMonth()+1)+"-"+t.getDate()}};const tt=(0,c.Z)(R,[["render",z],["__scopeId","data-v-528803b8"]]);var et=tt;const at=t=>((0,o.dD)("data-v-4599f84c"),t=t(),(0,o.Cn)(),t),rt={class:"home"},ot=at((()=>(0,o._)("h2",null,"Выберите раздел прибыли",-1))),st={class:"my-block"},lt=at((()=>(0,o._)("img",{src:p,alt:"img",class:"img-btn--big"},null,-1))),nt=at((()=>(0,o._)("p",null,"Добавить категорию",-1))),it=[lt,nt],yt={class:"inputs_block"},ut=at((()=>(0,o._)("p",null,"Напишите название новой категории",-1))),ht=at((()=>(0,o._)("img",{src:p,alt:"img",class:"img-btn"},null,-1))),ct=at((()=>(0,o._)("p",null,"Добавить",-1))),gt=[ht,ct],dt={class:"inputs_block"},mt=at((()=>(0,o._)("p",{class:"text"},"Cумма",-1))),pt=at((()=>(0,o._)("p",{class:"text"},"Дата",-1))),wt=at((()=>(0,o._)("p",{class:"text"},"Комментарий",-1))),Ct=at((()=>(0,o._)("img",{src:p,alt:"img",class:"img-btn"},null,-1))),_t=at((()=>(0,o._)("p",null,"Добавить доход",-1))),At=[Ct,_t];function bt(t,e,a,s,l,n){const i=(0,o.up)("DeleteBtn"),y=(0,o.up)("MyBlock"),u=(0,o.up)("ModalWindow");return(0,o.wg)(),(0,o.iD)("div",rt,[ot,(0,o._)("div",st,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.categorySalaryArr,(t=>((0,o.wg)(),(0,o.j4)(y,{key:t.category,item:t,onChooseCathegory:n.ChooseCathegory},{default:(0,o.w5)((()=>[t.status?((0,o.wg)(),(0,o.j4)(i,{key:0,onClick:e=>this.$emit("deleteCatSalary",t.category)},null,8,["onClick"])):(0,o.kq)("",!0)])),_:2},1032,["item","onChooseCathegory"])))),128)),(0,o._)("button",{onClick:e[0]||(e[0]=t=>l.show2.show=!0),class:"button"},it)]),(0,o.Wm)(u,{show:l.show2},{default:(0,o.w5)((()=>[(0,o._)("div",yt,[ut,(0,o.wy)((0,o._)("input",{ref:"newCat",type:"text",placeholder:"Категория","onUpdate:modelValue":e[1]||(e[1]=t=>l.newCategory=t)},null,512),[[r.nr,l.newCategory]]),(0,o._)("button",{onClick:e[2]||(e[2]=(...t)=>n.AddToCategory&&n.AddToCategory(...t))},gt)])])),_:1},8,["show"]),(0,o.Wm)(u,{show:l.show},{default:(0,o.w5)((()=>[(0,o._)("div",dt,[mt,(0,o.wy)((0,o._)("input",{type:"text",ref:"sum",placeholder:"Сумма","onUpdate:modelValue":e[3]||(e[3]=t=>l.sumCath=t)},null,512),[[r.nr,l.sumCath]]),pt,(0,o.wy)((0,o._)("input",{type:"date","onUpdate:modelValue":e[4]||(e[4]=t=>l.dateCathegory=t)},null,512),[[r.nr,l.dateCathegory]]),wt,(0,o.wy)((0,o._)("input",{type:"text",placeholder:"Комментарий","onUpdate:modelValue":e[5]||(e[5]=t=>l.commentCathegory=t)},null,512),[[r.nr,l.commentCathegory]]),(0,o._)("button",{onClick:e[6]||(e[6]=t=>n.AddToMain(l.cathegory))},At)])])),_:1},8,["show"])])}var vt={name:"HomeView",components:{MyBlock:Z,ModalWindow:Q,DeleteBtn:N},props:["categorySalaryArr","SalarysArr","saveToLS"],data(){return{show2:{show:!1},show:{show:!1},newCategory:"",cathegory:"",obj:{},ChoosenCathegory:{},sumCath:"",dateCathegory:"",commentCathegory:""}},methods:{AddToCategory(){if(""!=this.newCategory){this.show2.show=!1;let t={img:"./assets/other.svg",category:this.newCategory,status:!0};this.$emit("addCategorySalary",t),this.newCategory=""}else this.setBG(this.$refs.newCat,"Введите название категории","Название")},ChooseCathegory(t){this.cathegory=t,this.show.show=!0},AddToMain(){if(""!=this.sumCath&&this.sumCath>=1){this.show.show=!1;let t={id:Date.now(),sum:this.sumCath,date:this.dateCathegory.split("-").reverse().join("-"),comment:this.commentCathegory,category:this.cathegory};this.obj.push(t),this.saveToLS("SalarysArr",this.SalarysArr),this.sumCath="",this.dateCathegory="",this.fromCathegory="",this.commentCathegory=""}else this.setBG(this.$refs.sum,"Введите верную сумму","Сумма")},setBG(t,e,a){t.style.backgroundColor="orange",t.value=e,setTimeout((()=>{t.style.backgroundColor="white",t.value="",t.setAttribute("placeholder",a)}),1e3)}},mounted(){this.obj=this.SalarysArr;let t=new Date;t.getMonth()>9?t.getDate()>9?this.dateCathegory=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate():this.dateCathegory=t.getFullYear()+"-0"+(t.getMonth()+1)+"-0"+t.getDate():this.dateCathegory=t.getFullYear()+"-0"+(t.getMonth()+1)+"-"+t.getDate()}};const St=(0,c.Z)(vt,[["render",bt],["__scopeId","data-v-4599f84c"]]);var ft=St;const kt=t=>((0,o.dD)("data-v-3ef0535a"),t=t(),(0,o.Cn)(),t),Bt={key:0,class:"select"},Dt=kt((()=>(0,o._)("option",{disabled:""},"Cортировать по:",-1))),Mt=kt((()=>(0,o._)("option",{value:"date"},"Дате",-1))),Tt=kt((()=>(0,o._)("option",{value:"sum"},"Сумме",-1))),Ut=[Dt,Mt,Tt],jt=kt((()=>(0,o._)("option",{disabled:""},"По категории:",-1))),Wt=kt((()=>(0,o._)("option",{value:"all"},"Показать все",-1))),$t={key:1,class:"select"},xt=kt((()=>(0,o._)("option",{disabled:""},"Cортировать по:",-1))),It=kt((()=>(0,o._)("option",{value:"date"},"Дате",-1))),Ot=kt((()=>(0,o._)("option",{value:"sum"},"Сумме",-1))),zt=[xt,It,Ot],Vt=kt((()=>(0,o._)("option",{disabled:""},"По категории:",-1))),Lt=kt((()=>(0,o._)("option",{value:"all"},"Показать все",-1))),Yt={class:"btns"},Ht={class:"all"},Ft={class:"salary"},Zt={class:"buys"},qt={key:0},Kt={key:1},Et={class:"main"},Gt={class:"blocks block--last",key:"1"},Jt=kt((()=>(0,o._)("p",{class:"bold"},"Всего потрачено: ",-1))),Nt=kt((()=>(0,o._)("span",{class:"bold"},"Категория:",-1))),Pt=kt((()=>(0,o._)("span",{class:"bold"},"Сумма: ",-1))),Xt=kt((()=>(0,o._)("span",{class:"bold"},"Дата: ",-1))),Qt={key:0},Rt=kt((()=>(0,o._)("span",{class:"bold"},"Комментарий: ",-1))),te={class:"blocks block--last",key:"1"},ee=kt((()=>(0,o._)("p",{class:"bold"},"Общая прибыль: ",-1))),ae=kt((()=>(0,o._)("span",{class:"bold"},"Категория: ",-1))),re=kt((()=>(0,o._)("span",{class:"bold"},"Сумма: ",-1))),oe=kt((()=>(0,o._)("span",{class:"bold"},"Дата:",-1))),se={key:0},le=kt((()=>(0,o._)("span",{class:"bold"},"Комментарий:",-1)));function ne(t,e,a,s,l,n){const i=(0,o.up)("DeleteBtn");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("header",null,[l.buys?((0,o.wg)(),(0,o.iD)("div",Bt,[(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":e[0]||(e[0]=t=>l.sort=t),class:"search"},Ut,512),[[r.bM,l.sort]]),(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":e[1]||(e[1]=t=>l.sortByCategory=t),class:"search"},[jt,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.categoryArr,(t=>((0,o.wg)(),(0,o.iD)("option",{key:t.category},(0,V.zw)(t.category),1)))),128)),Wt],512),[[r.bM,l.sortByCategory]])])):((0,o.wg)(),(0,o.iD)("div",$t,[(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":e[2]||(e[2]=t=>l.sort=t),class:"search"},zt,512),[[r.bM,l.sort]]),(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":e[3]||(e[3]=t=>l.sortByCategory=t),class:"search"},[Vt,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.categorySalaryArr,(t=>((0,o.wg)(),(0,o.iD)("option",{key:t.category},(0,V.zw)(t.category),1)))),128)),Lt],512),[[r.bM,l.sortByCategory]])])),(0,o._)("div",Yt,[(0,o._)("button",{onClick:e[4]||(e[4]=(...t)=>n.salary&&n.salary(...t)),class:"salary btn"},"Доходы"),(0,o._)("button",{onClick:e[5]||(e[5]=(...t)=>n.buysFunc&&n.buysFunc(...t)),class:"buys btn"},"Расходы")]),(0,o._)("div",Ht,[(0,o._)("div",Ft,"Всего потрачено :"+(0,V.zw)(n.allBuys)+"$",1),(0,o._)("div",Zt,"Всего прибыли :"+(0,V.zw)(n.allSalary)+"$",1)]),(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":e[6]||(e[6]=t=>l.search=t),placeholder:"Поиск...",class:"search"},null,512),[[r.nr,l.search]])]),l.buys?((0,o.wg)(),(0,o.iD)("h2",qt,"Расходы")):((0,o.wg)(),(0,o.iD)("h2",Kt,"Доходы")),(0,o._)("div",Et,[l.buys?((0,o.wg)(),(0,o.j4)(r.W3,{key:0,name:"list",appear:""},{default:(0,o.w5)((()=>[(0,o._)("div",Gt,[Jt,(0,o._)("p",null,(0,V.zw)(n.totalSum)+"$",1)]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.newArr,(t=>((0,o.wg)(),(0,o.iD)("div",{class:"blocks",key:t.id},[(0,o._)("p",null,[Nt,(0,o.Uk)(" "+(0,V.zw)(t.category),1)]),(0,o._)("p",null,[Pt,(0,o.Uk)((0,V.zw)(t.sum)+"$",1)]),(0,o._)("p",null,[Xt,(0,o.Uk)((0,V.zw)(t.date),1)]),""!=t.comment?((0,o.wg)(),(0,o.iD)("p",Qt,[Rt,(0,o.Uk)((0,V.zw)(t.comment),1)])):(0,o.kq)("",!0),(0,o.Wm)(i,{onClick:e=>n.deleteBuy(t.id)},null,8,["onClick"])])))),128))])),_:1})):((0,o.wg)(),(0,o.j4)(r.W3,{key:1,name:"list",appear:""},{default:(0,o.w5)((()=>[(0,o._)("div",te,[ee,(0,o._)("p",null,(0,V.zw)(n.totalSumSalary)+"$",1)]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.salArr,(t=>((0,o.wg)(),(0,o.iD)("div",{class:"blocks",key:t.id},[(0,o._)("p",null,[ae,(0,o.Uk)((0,V.zw)(t.category),1)]),(0,o._)("p",null,[re,(0,o.Uk)((0,V.zw)(t.sum)+"$",1)]),(0,o._)("p",null,[oe,(0,o.Uk)(" "+(0,V.zw)(t.date),1)]),""!=t.comment?((0,o.wg)(),(0,o.iD)("p",se,[le,(0,o.Uk)(" "+(0,V.zw)(t.comment),1)])):(0,o.kq)("",!0),(0,o.Wm)(i,{onClick:e=>n.deleteSalary(t.id)},null,8,["onClick"])])))),128))])),_:1}))])],64)}var ie={components:{DeleteBtn:N},props:["BuysArr","categoryArr","SalarysArr","categorySalaryArr"],data(){return{search:"",arr:[],sort:"Cортировать по:",sortByCategory:"По категории:",salArr:[],buys:!0}},mounted(){this.arr=[...this.BuysArr],this.salArr=[...this.SalarysArr]},methods:{salary(){this.buys=!1},buysFunc(){this.buys=!0},deleteBuy(t){this.$emit("deleteBuy",t)},deleteSalary(t){this.$emit("deleteSalary",t)}},watch:{sort(t){this.buys?this.arr.sort(((e,a)=>"sum"==t?e[t]-a[t]:e[t].localeCompare(a[t]))):this.salArr.sort(((e,a)=>"sum"==t?e[t]-a[t]:e[t].localeCompare(a[t])))},sortByCategory(t){this.buys?(this.arr=[...this.BuysArr].filter((e=>e.category==t)),"all"==t&&(this.arr=[...this.BuysArr])):(this.salArr=[...this.SalarysArr].filter((e=>e.category==t)),"all"==t&&(this.salArr=[...this.SalarysArr]))},search(t){this.buys?this.arr=[...this.BuysArr].filter((e=>e.comment.includes(t))):this.salArr=[...this.SalarysArr].filter((e=>e.comment.includes(t)))},BuysArr(t){this.arr=[...t]},SalarysArr(t){this.salArr=[...t]}},computed:{totalSumSalary(){let t=0;return this.salArr.forEach((e=>t+=+e.sum)),t},totalSum(){let t=0;return this.arr.forEach((e=>t+=+e.sum)),t},allSalary(){let t=0;return this.SalarysArr.forEach((e=>t+=+e.sum)),t},allBuys(){let t=0;return this.BuysArr.forEach((e=>t+=+e.sum)),t},newArr(){return this.arr}}};const ye=(0,c.Z)(ie,[["render",ne],["__scopeId","data-v-3ef0535a"]]);var ue=ye;const he=[{path:"/buys",name:"buys",component:et},{path:"/salary",name:"salary",component:ft},{path:"/",name:"home",component:ue}],ce=(0,m.p7)({history:(0,m.r5)("/MoneyApp/"),routes:he});var ge=ce;(0,r.ri)(d).use(ge).mount("#app")}},e={};function a(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={exports:{}};return t[r](s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,r,o,s){if(!r){var l=1/0;for(u=0;u<t.length;u++){r=t[u][0],o=t[u][1],s=t[u][2];for(var n=!0,i=0;i<r.length;i++)(!1&s||l>=s)&&Object.keys(a.O).every((function(t){return a.O[t](r[i])}))?r.splice(i--,1):(n=!1,s<l&&(l=s));if(n){t.splice(u--,1);var y=o();void 0!==y&&(e=y)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[r,o,s]}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.p="/MoneyApp/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,s,l=r[0],n=r[1],i=r[2],y=0;if(l.some((function(e){return 0!==t[e]}))){for(o in n)a.o(n,o)&&(a.m[o]=n[o]);if(i)var u=i(a)}for(e&&e(r);y<l.length;y++)s=l[y],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(u)},r=self["webpackChunkmoney_app"]=self["webpackChunkmoney_app"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(179)}));r=a.O(r)})();
//# sourceMappingURL=app.c7ae99ef.js.map