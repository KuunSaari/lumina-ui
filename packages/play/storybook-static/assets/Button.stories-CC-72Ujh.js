import{f as W,w as k,u as r,e as g,c as X}from"./index-CznU_mYj.js";import{n as M,c as P,o as Y,u as R,r as q}from"./index-CpjS5xOn.js";import{d as O,u as Z,b as tt,e as et,f as u,g as L,o as m,j as nt,k as v,l as _,m as ot,n as D,p as B,q as a,s as at,t as st,v as lt,r as rt,x as b}from"./vue.esm-bundler-CjkrJlcs.js";const F=Symbol("buttonGroupContext"),ct=P(O({name:"LuButton",__name:"Button",props:{tag:{default:"button"},type:{},size:{},nativeType:{default:"button"},icon:{},loading:{type:Boolean},circle:{type:Boolean},plain:{type:Boolean},round:{type:Boolean},disabled:{type:Boolean},text:{type:Boolean},bg:{type:Boolean},autofocus:{type:Boolean},loadingIcon:{},useThrottle:{type:Boolean,default:!1},throttleDuration:{default:500}},emits:["click"],setup(n,{expose:o,emit:s}){const t=q("button"),l=n,J=s,K=Z(),c=tt(F,void 0),Q=et(),w=u(()=>(c==null?void 0:c.size)??(l==null?void 0:l.size)??""),x=u(()=>(c==null?void 0:c.type)??(l==null?void 0:l.type)??""),T=u(()=>(c==null?void 0:c.disabled)||(l==null?void 0:l.disabled)||!1),C=e=>J("click",e),U=Y(C,l.throttleDuration,{trailing:!1}),h=u(()=>({marginRight:K.default?"6px":"0px"}));return o({ref:Q}),(e,z)=>(m(),L(at(e.tag),{autofocus:e.autofocus,type:e.tag==="button"?e.nativeType:void 0,class:B([a(t).getName(),x.value&&a(t).m(x.value),w.value&&a(t).m(w.value),a(t).is("plain",e.plain),a(t).is("round",e.round),a(t).is("circle",e.circle),a(t).is("disabled",T.value||e.loading),a(t).is("loading",e.loading),a(t).is("text",e.text),a(t).is("bg",e.bg)]),disabled:!(!T.value&&!e.loading)||void 0,onClick:z[0]||(z[0]=E=>e.useThrottle?a(U)(E):C(E))},{default:nt(()=>[e.loading?v(e.$slots,"loading",{key:0},()=>[ot(R,{class:B(a(t).e("loading-icon")),icon:e.loadingIcon??"spinner",style:D(h.value),size:"1x",spin:""},null,8,["class","icon","style"])],!0):_("",!0),e.icon&&!e.loading?(m(),L(R,{key:1,icon:e.icon,style:D(h.value),size:"1x"},null,8,["icon","style"])):_("",!0),v(e.$slots,"default",{},void 0,!0)]),_:3},8,["autofocus","type","class","disabled"]))}}),[["__scopeId","data-v-5cd8c434"]]),ut=P(O({name:"LuminaButtonGroup",__name:"ButtonGroup",props:{size:{},type:{},disabled:{type:Boolean}},setup(n){const o=n,s=q("button-group");return lt(F,rt({size:b(o,"size"),type:b(o,"type"),disabled:b(o,"disabled")})),(t,l)=>(m(),st("div",{class:B([a(s).getName()])},[v(t.$slots,"default",{},void 0,!0)],2))}}),[["__scopeId","data-v-f9aee446"]]),y=M(ct),it=M(ut),yt={title:"Example/Button",component:y,tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["primary","success","warning","danger","default"]},size:{control:{type:"select"},options:["small","default","large"]},disabled:{control:"boolean"},autofocus:{control:"boolean"},tag:{control:{type:"select"},options:["button","a","div"]},nativeType:{control:{type:"select"},options:["button","submit","reset",""]},icon:{control:{type:"text"}},loadingIcon:{control:{type:"text"}},useThrottle:{control:"boolean"},throttleDuration:{control:{type:"number"}}},args:{onClick:W()}},f=n=>`
<div style="margin: 5px;">
  ${n}
</div>
`,i={argTypes:{content:{control:{type:"text"}}},args:{type:"primary",content:"Button"},render:n=>({components:{LuButton:y},setup(){return{args:n}},template:f('<lu-button v-bind="args">{{ args.content }}</lu-button>')}),play:async({canvasElement:n,args:o,step:s})=>{const t=k(n);o.useThrottle=!1,await s("click btn without throttle",async()=>{await r.click(t.getByRole("button")),await r.click(t.getByRole("button"))}),g(o.onClick).toHaveBeenCalledTimes(2),X(),o.useThrottle=!0,await s("click btn with throttle",async()=>{await r.click(t.getByRole("button")),await r.click(t.getByRole("button")),await new Promise(l=>setTimeout(l,600)),await r.click(t.getByRole("button"))}),g(o.onClick).toHaveBeenCalledTimes(2)}},p={args:{icon:"search"},render:n=>({components:{LuButton:y},setup(){return{args:n}},template:f(`
      <lu-button circle v-bind="args"/>
    `)}),play:async({canvasElement:n,args:o,step:s})=>{const t=k(n);await s("click button",async()=>{await r.click(t.getByRole("button"))}),g(o.onClick).toHaveBeenCalled()}},d={argTypes:{groupType:{control:{type:"select"},options:["primary","success","warning","danger","default"]},groupSize:{control:{type:"select"},options:["large","default","small"]},groupDisabled:{control:"boolean"},content1:{control:{type:"text"},defaultValue:"Button1"},content2:{control:{type:"text"},defaultValue:"Button2"}},args:{round:!0,content1:"Button1",content2:"Button2"},render:n=>({components:{LuButton:y,LuButtonGroup:it},setup(){return{args:n}},template:f(`
       <lu-button-group :type="args.groupType" :size="args.groupSize" :disabled="args.groupDisabled">
         <lu-button v-bind="args">{{args.content1}}</lu-button>
         <lu-button v-bind="args">{{args.content2}}</lu-button>
       </lu-button-group>
    `)}),play:async({canvasElement:n,args:o,step:s})=>{const t=k(n);await s("click btn1",async()=>{await r.click(t.getByText("Button1"))}),await s("click btn2",async()=>{await r.click(t.getByText("Button2"))}),g(o.onClick).toHaveBeenCalled()}};var S,G,H;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  argTypes: {
    content: {
      control: {
        type: 'text'
      }
    }
  },
  args: {
    type: 'primary',
    content: 'Button'
  },
  render: (args: any) => ({
    components: {
      LuButton
    },
    setup() {
      return {
        args
      };
    },
    template: container('<lu-button v-bind="args">{{ args.content }}</lu-button>')
  }),
  play: async ({
    canvasElement,
    args,
    step
  }: any) => {
    const canvas = within(canvasElement);
    args.useThrottle = false;

    // 测试不使用节流
    await step('click btn without throttle', async () => {
      await userEvent.click(canvas.getByRole('button'));
      await userEvent.click(canvas.getByRole('button'));
    });
    expect(args.onClick).toHaveBeenCalledTimes(2); // 没有节流，应该触发两次点击事件

    // 重置点击次数
    clearAllMocks();

    // 更新为使用节流
    args.useThrottle = true;

    // 测试使用节流
    await step('click btn with throttle', async () => {
      await userEvent.click(canvas.getByRole('button'));
      await userEvent.click(canvas.getByRole('button'));
      await new Promise(resolve => setTimeout(resolve, 600)); // 等待超过节流时间
      await userEvent.click(canvas.getByRole('button'));
    });
    expect(args.onClick).toHaveBeenCalledTimes(2); // 使用节流，应该触发两次点击事件
  }
}`,...(H=(G=i.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var I,V,$;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    icon: 'search'
  },
  render: (args: any) => ({
    components: {
      LuButton
    },
    setup() {
      return {
        args
      };
    },
    template: container(\`
      <lu-button circle v-bind="args"/>
    \`)
  }),
  play: async ({
    canvasElement,
    args,
    step
  }: any) => {
    const canvas = within(canvasElement);
    await step('click button', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });
    expect(args.onClick).toHaveBeenCalled();
  }
}`,...($=(V=p.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var N,j,A;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  argTypes: {
    groupType: {
      control: {
        type: 'select'
      },
      options: ['primary', 'success', 'warning', 'danger', 'default']
    },
    groupSize: {
      control: {
        type: 'select'
      },
      options: ['large', 'default', 'small']
    },
    groupDisabled: {
      control: 'boolean'
    },
    content1: {
      control: {
        type: 'text'
      },
      defaultValue: 'Button1'
    },
    content2: {
      control: {
        type: 'text'
      },
      defaultValue: 'Button2'
    }
  },
  args: {
    round: true,
    content1: 'Button1',
    content2: 'Button2'
  },
  render: (args: any) => ({
    components: {
      LuButton,
      LuButtonGroup
    },
    setup() {
      return {
        args
      };
    },
    template: container(\`
       <lu-button-group :type="args.groupType" :size="args.groupSize" :disabled="args.groupDisabled">
         <lu-button v-bind="args">{{args.content1}}</lu-button>
         <lu-button v-bind="args">{{args.content2}}</lu-button>
       </lu-button-group>
    \`)
  }),
  play: async ({
    canvasElement,
    args,
    step
  }: any) => {
    const canvas = within(canvasElement);
    await step('click btn1', async () => {
      await userEvent.click(canvas.getByText('Button1'));
    });
    await step('click btn2', async () => {
      await userEvent.click(canvas.getByText('Button2'));
    });
    expect(args.onClick).toHaveBeenCalled();
  }
}`,...(A=(j=d.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};const bt=["Default","Circle","Group"];export{p as Circle,i as Default,d as Group,bt as __namedExportsOrder,yt as default};
