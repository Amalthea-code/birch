(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10a3bc44"],{"51f1":function(t,e,i){t.exports=i.p+"img/child.da1d0f5b.png"},"5d3c":function(t,e,i){},"706e":function(t,e,i){"use strict";i("5d3c")},9378:function(t,e,i){"use strict";i("a1f4")},a1f4:function(t,e,i){},ae7d:function(t,e,i){"use strict";var r=i("7a23"),n=function(t){return Object(r["F"])("data-v-bcbf621e"),t=t(),Object(r["D"])(),t},a=n((function(){return Object(r["g"])("div",{class:"alert__title"},"Ошибка!",-1)})),s=n((function(){return Object(r["g"])("div",{class:"alert__text"},[Object(r["i"])("Поля выделенные "),Object(r["g"])("span",null,"красным"),Object(r["i"])(" заполнены неверно."),Object(r["g"])("br"),Object(r["i"])("Попробуйте еще раз.")],-1)}));function c(t,e,i,n,c,l){return Object(r["C"])(),Object(r["f"])("div",{class:Object(r["s"])({alert:!0,alert_active:c.isActive,alert_disable:c.isDisable})},[a,s,Object(r["g"])("button",{onClick:e[0]||(e[0]=function(t){return l.switchActive()}),type:"button",class:"alert__button"},"Хорошо")],2)}var l={data:function(){return{isActive:!1,isDisable:!1}},methods:{switchActive:function(){var t=this;this.isActive?(this.isDisable=!this.isDisable,setTimeout((function(){t.isDisable=!t.isDisable,t.isActive=!t.isActive}),500)):(this.isActive=!this.isActive,setTimeout((function(){t.isActive&&(t.isDisable=!t.isDisable,setTimeout((function(){t.isDisable=!t.isDisable,t.isActive=!t.isActive}),500))}),5e3))}}},o=(i("706e"),i("6b0d")),u=i.n(o);const d=u()(l,[["render",c],["__scopeId","data-v-bcbf621e"]]);e["a"]=d},b0c0:function(t,e,i){var r=i("83ab"),n=i("5e77").EXISTS,a=i("e330"),s=i("9bf2").f,c=Function.prototype,l=a(c.toString),o=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,u=a(o.exec),d="name";r&&!n&&s(c,d,{configurable:!0,get:function(){try{return u(o,l(this))[1]}catch(t){return""}}})},f145:function(t,e,i){"use strict";i.r(e);i("b0c0");var r=i("7a23"),n=i("51f1"),a=i.n(n),s=function(t){return Object(r["F"])("data-v-1dae940d"),t=t(),Object(r["D"])(),t},c={class:"registration-child"},l=s((function(){return Object(r["g"])("div",{class:"registration-child__title"},"Данные ребенка",-1)})),o={class:"registration-child__radio"},u=s((function(){return Object(r["g"])("div",{class:"registration-child__radio-title"},"Пол",-1)})),d={class:"registration-child__radio-box"},h=s((function(){return Object(r["g"])("label",{for:"child-1",class:"registration-child__radio-label"},"Мальчик",-1)})),b=s((function(){return Object(r["g"])("label",{for:"child-2",class:"registration-child__radio-label"},"Девочка",-1)})),p={class:"registration-child__forms"},_={class:"registration-child__block"},g={class:"registration-child__box"},f={class:"registration-child__box"},m={class:"registration-child__block"},j={class:"registration-child__box"},O=s((function(){return Object(r["g"])("div",{class:"registration-child__box-title"},"Адрес фактического проживания",-1)})),v=s((function(){return Object(r["g"])("button",{class:"registration-child__button"},"Сохранить",-1)})),$={class:"registration-child__box"},y=s((function(){return Object(r["g"])("div",{class:"registration-child__box-title"},"Паспортные данные",-1)})),V=s((function(){return Object(r["g"])("div",{class:"registration-child__box-subTitle"},"Или свидетельство о рождении",-1)})),x=s((function(){return Object(r["g"])("div",{class:"registration-child__alert"},"Заполнить одно из полей",-1)})),N=s((function(){return Object(r["g"])("img",{src:a.a,alt:"",class:"registration-child__image"},null,-1)}));function S(t,e,i,n,a,s){var S=Object(r["K"])("alert"),T=Object(r["L"])("mask");return Object(r["C"])(),Object(r["f"])("form",c,[l,Object(r["g"])("div",o,[u,Object(r["g"])("div",d,[Object(r["V"])(Object(r["g"])("input",{type:"radio",value:"мальчик",id:"child-1",name:"child",class:"registration-child__radio-input","onUpdate:modelValue":e[0]||(e[0]=function(t){return a.isTreatment=t})},null,512),[[r["R"],a.isTreatment]]),h,Object(r["V"])(Object(r["g"])("input",{type:"radio",value:"девочка",id:"child-2",name:"child",class:"registration-child__radio-input","onUpdate:modelValue":e[1]||(e[1]=function(t){return a.isTreatment=t})},null,512),[[r["R"],a.isTreatment]]),b])]),Object(r["g"])("div",p,[Object(r["g"])("div",_,[Object(r["g"])("div",g,[Object(r["V"])(Object(r["g"])("input",{class:Object(r["s"])({"registration-child__input":!0,"registration-child__input_error":n.v$.surName.$dirty&&n.v$.surName.$error}),placeholder:"Фамилия",type:"text","onUpdate:modelValue":e[2]||(e[2]=function(t){return a.surName=t})},null,2),[[r["S"],a.surName]]),Object(r["V"])(Object(r["g"])("input",{class:Object(r["s"])({"registration-child__input":!0,"registration-child__input_error":n.v$.name.$dirty&&n.v$.name.$error}),placeholder:"Имя",type:"text","onUpdate:modelValue":e[3]||(e[3]=function(t){return a.name=t})},null,2),[[r["S"],a.name]]),Object(r["V"])(Object(r["g"])("input",{class:"registration-child__input",placeholder:"Отчество",type:"text","onUpdate:modelValue":e[4]||(e[4]=function(t){return a.lastName=t})},null,512),[[r["S"],a.lastName]])]),Object(r["g"])("div",f,[Object(r["V"])(Object(r["g"])("input",{class:Object(r["s"])({"registration-child__input":!0,"registration-child__input_error":n.v$.birthday.$dirty&&n.v$.birthday.$error}),placeholder:"Дата рождения",type:"text","onUpdate:modelValue":e[5]||(e[5]=function(t){return a.birthday=t})},null,2),[[r["S"],a.birthday],[T,"##.##.####"]]),Object(r["V"])(Object(r["g"])("input",{class:Object(r["s"])({"registration-child__input":!0,"registration-child__input_error":n.v$.old.$dirty&&n.v$.old.$error}),placeholder:"Возраст (полных лет на день заезда в смену)",type:"text","onUpdate:modelValue":e[6]||(e[6]=function(t){return a.old=t})},null,2),[[r["S"],a.old],[T,"##"]])])]),Object(r["g"])("div",m,[Object(r["g"])("div",j,[O,Object(r["V"])(Object(r["g"])("input",{class:Object(r["s"])({"registration-child__input":!0,"registration-child__input_error":n.v$.city.$dirty&&n.v$.city.$error}),placeholder:"Город/населенный пункт",type:"text","onUpdate:modelValue":e[7]||(e[7]=function(t){return a.city=t})},null,2),[[r["S"],a.city]]),Object(r["V"])(Object(r["g"])("input",{class:Object(r["s"])({"registration-child__input":!0,"registration-child__input_error":n.v$.street.$dirty&&n.v$.street.$error}),placeholder:"Улица",type:"text","onUpdate:modelValue":e[8]||(e[8]=function(t){return a.street=t})},null,2),[[r["S"],a.street]]),Object(r["V"])(Object(r["g"])("input",{class:Object(r["s"])({"registration-child__input":!0,"registration-child__input_error":n.v$.home.$dirty&&n.v$.home.$error}),placeholder:"Дом, корпус",type:"text","onUpdate:modelValue":e[9]||(e[9]=function(t){return a.home=t})},null,2),[[r["S"],a.home]]),Object(r["V"])(Object(r["g"])("input",{class:Object(r["s"])({"registration-child__input":!0,"registration-child__input_error":n.v$.apartment.$dirty&&n.v$.apartment.$error}),placeholder:"Квартира",type:"text","onUpdate:modelValue":e[10]||(e[10]=function(t){return a.apartment=t})},null,2),[[r["S"],a.apartment]]),v]),Object(r["g"])("div",$,[y,Object(r["V"])(Object(r["g"])("input",{class:Object(r["s"])({"registration-child__input":!0,"registration-child__input_error":n.v$.series.$dirty&&n.v$.series.$error}),placeholder:"Серия и номер",type:"text","onUpdate:modelValue":e[11]||(e[11]=function(t){return a.series=t})},null,2),[[r["S"],a.series],[T,"#### ######"]]),Object(r["V"])(Object(r["g"])("input",{class:Object(r["s"])({"registration-child__input":!0,"registration-child__input_error":n.v$.date.$dirty&&n.v$.date.$error}),placeholder:"Дата выдачи (дд.мм.гггг)",type:"text","onUpdate:modelValue":e[12]||(e[12]=function(t){return a.date=t})},null,2),[[r["S"],a.date],[T,"##.##.####"]]),Object(r["V"])(Object(r["g"])("input",{class:Object(r["s"])({"registration-child__input":!0,"registration-child__input_error":n.v$.issued.$dirty&&n.v$.issued.$error}),placeholder:"Кем выдан",type:"text","onUpdate:modelValue":e[13]||(e[13]=function(t){return a.issued=t})},null,2),[[r["S"],a.issued]]),V,Object(r["V"])(Object(r["g"])("input",{class:Object(r["s"])({"registration-child__input":!0,"registration-child__input_error":n.v$.birthCertificate.$dirty&&n.v$.birthCertificate.$error}),placeholder:"Номер",type:"text","onUpdate:modelValue":e[14]||(e[14]=function(t){return a.birthCertificate=t})},null,2),[[r["S"],a.birthCertificate]]),x,N])])]),Object(r["j"])(S)])}var T=i("5530"),A=(i("ac1f"),i("5319"),i("5502")),U=i("25a0"),C=i("e3e1"),D=i("ae7d"),w={setup:function(){return{v$:Object(U["a"])()}},components:{Alert:D["a"]},data:function(){return{profile:{},maxLength:50,isTreatment:null,surName:"",name:"",lastName:"",birthday:"",old:"",street:"",home:"",apartment:"",city:"",series:"",date:"",issued:"",birthCertificate:""}},watch:{surName:function(t){this.surName=t.replace(/[^\\а-яёА-ЯЁ ]/g,"")},name:function(t){this.name=t.replace(/[^\\а-яёА-ЯЁ ]/g,"")},lastName:function(t){this.lastName=t.replace(/[^\\а-яёА-ЯЁ ]/g,"")},mail:function(t){this.mail=t.replace(/[^\\a-zA-Z, @, . ]/g,"")},birthCertificate:function(t){this.birthCertificate=t.replace(/[^0-9, -]/g,"")},series:function(t){this.series=t.replace(/[^0-9, -]/g,"")},issued:function(t){this.issued=t.replace(/[^\\а-яёА-ЯЁ, ^0-9, ., /,, ;, :, (, ), -]/g,"")},street:function(t){this.street=t.replace(/[^\\а-яёА-ЯЁ, ^0-9, ., /,, ;, :, (, ), -]/g,"")},home:function(t){this.home=t.replace(/[^\\а-яёА-ЯЁ, ^0-9, ., /,, ;, :, (, ), -]/g,"")},apartment:function(t){this.apartment=t.replace(/[^\\а-яёА-ЯЁ, ^0-9, ., /,, ;, :, (, ), -]/g,"")},city:function(t){this.city=t.replace(/[^\\а-яёА-ЯЁ, ^0-9, ., /,, ;, :, (, ), -]/g,"")}},validations:function(){return{surName:{required:C["d"]},name:{required:C["d"]},street:{required:C["d"]},home:{required:C["d"]},apartment:{required:C["d"]},city:{required:C["d"]},series:{required:C["d"]},date:{required:C["d"]},issued:{required:C["d"]}}},methods:Object(T["a"])(Object(T["a"])(Object(T["a"])({},Object(A["b"])({fetchCreateParent:"parents/fetchCreateParent"})),Object(A["d"])({SET_PARENT:"parents/SET_PARENT"})),{},{createChild:function(){this.v$.$touch(),this.v$.$errors.length||"нет"!==this.isTreatment&&"да"!==this.isTreatment?this.$refs.alert.switchActive():(this.collector(),this.SET_PARENT(this.parent),this.fetchCreateParent(),this.$router.push({name:"cabinet"})),this.v$.$invalid},collector:function(){this.parent.sName=this.surName,this.parent.username=this.name,this.parent.tName=this.lastName,this.parent.phone=this.phone,this.parent.email=this.mail,this.parent.street=this.street,this.parent.home=this.home,this.parent.apartment=this.apartment,this.parent.city=this.city,this.parent.series=this.series,this.parent.datePassport=this.date,this.parent.issued=this.issued,this.parent.isParent=this.isTreatment}})},q=(i("9378"),i("6b0d")),P=i.n(q);const k=P()(w,[["render",S],["__scopeId","data-v-1dae940d"]]);e["default"]=k}}]);
//# sourceMappingURL=chunk-10a3bc44.c6508ea8.js.map