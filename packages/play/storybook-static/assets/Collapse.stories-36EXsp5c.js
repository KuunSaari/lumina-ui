import{n as V,c as x,r as I,u as $,l as T}from"./index-CpjS5xOn.js";import{d as E,e as j,t as N,w as z,y as H,o as k,k as p,p as i,q as s,b as O,f as q,z as u,m as h,A,B as F,j as P,C as G,D as J,E as K,F as M,T as Q,v as R}from"./vue.esm-bundler-CjkrJlcs.js";const B=Symbol("collapseContext"),U=x(E({name:"LuCollapse",__name:"Collapse",props:{modelValue:{},accordion:{type:Boolean}},emits:["update:modelValue","change"],setup(e,{emit:d}){const a=e,o=d,r=I("collapse"),c=j(a.modelValue);function l(t){c.value=t,o("update:modelValue",t),o("change",t)}return z(()=>a.modelValue,t=>l(t)),H(()=>{a.accordion&&c.value.length>1&&T()}),R(B,{activeNames:c,handleItemClick:function(t){let n=[...c.value];if(a.accordion)return n=[n[0]===t?"":t],void l(n);const v=n.indexOf(t);v>-1?n.splice(v,1):n.push(t),l(n)}}),(t,n)=>(k(),N("div",{class:i([s(r).getName()])},[p(t.$slots,"default",{},void 0,!0)],2))}}),[["__scopeId","data-v-a85267b0"]]),f=e=>e.style.height="0px",b=e=>e.style.height=`${e.scrollHeight}px`,g=e=>e.style.height="",C=e=>e.style.overflow="hidden",_=e=>e.style.overflow="",W={beforeEnter(e){f(e),C(e)},enter:e=>b(e),afterEnter(e){g(e),_(e)},beforeLeave(e){b(e),C(e)},leave:e=>f(e),afterLeave(e){g(e),_(e)}},X=["id"],Y=["id"],Z=x(E({name:"LuCollapseItem",__name:"CollapseItem",props:{name:{},title:{},disabled:{type:Boolean}},setup(e){const d=e,a=I("collapse-item"),o=O(B,void 0),r=q(()=>{var l;return(l=o==null?void 0:o.activeNames.value)==null?void 0:l.includes(d.name)});function c(){d.disabled||(o==null||o.handleItemClick(d.name))}return(l,t)=>(k(),N("div",{class:i([s(a).getName(),s(a).is("disabled",l.disabled),s(a).is("active",r.value)])},[u("div",{class:i([s(a).e("header"),s(a).is("disabled",l.disabled),s(a).is("active",r.value)]),id:`item-header-${l.name}`,onClick:c},[u("span",{class:i(s(a).e("title"))},[p(l.$slots,"title",{},()=>[A(F(l.title),1)],!0)],2),h($,{icon:"angle-right",class:i([s(a).e("header-angle")])},null,8,["class"])],10,X),h(Q,K({name:"collapse-slide"},M(s(W))),{default:P(()=>[G(u("div",{class:i([s(a).e("wapper")])},[u("div",{class:i([s(a).e("content")]),id:`item-content-${l.name}`},[p(l.$slots,"default",{},void 0,!0)],10,Y)],2),[[J,r.value]])]),_:3},16)],2))}}),[["__scopeId","data-v-06df54fa"]]),D=V(U),S=V(Z),le={title:"Example/Collapse",component:D,subcomponents:{LuCollapseItem:S},tags:["autodocs"]},m={render:e=>({components:{LuCollapse:D,LuCollapseItem:S},setup(){return{args:e}},template:`
    <lu-collapse v-bind="args">
      <lu-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </lu-collapse-item>
      <lu-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </lu-collapse-item>
      <lu-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </lu-collapse-item>
    </lu-collapse>
    `}),args:{accordion:!0,modelValue:["a"]}};var y,w,L;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      LuCollapse,
      LuCollapseItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <lu-collapse v-bind="args">
      <lu-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </lu-collapse-item>
      <lu-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </lu-collapse-item>
      <lu-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </lu-collapse-item>
    </lu-collapse>
    \`
  }),
  args: {
    accordion: true,
    modelValue: ['a']
  }
}`,...(L=(w=m.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};const te=["Default"];export{m as Default,te as __namedExportsOrder,le as default};
