import"../../chunks/chunk-40b29988.js";import{l as c}from"../../chunks/chunk-09807338.js";/* empty css                         *//* empty css                         */import{m as _,i as h,v as e,q as o,K as I,j as B,h as b,x as a,Z as n}from"../../chunks/chunk-ab7d783c.js";const p=B("h1",null,"System Information",-1),g=_({__name:"index.page",props:["userInfo","osInfo","nodeInfo"],setup(l){function m(d,u=2){if(d===0)return"0 Bytes";const t=1024,r=u<0?0:u,f=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],s=Math.floor(Math.log(d)/Math.log(t));return parseFloat((d/Math.pow(t,s)).toFixed(r))+" "+f[s]}return(d,u)=>{const t=c.ElDescriptionsItem,r=c.ElDescriptions,f=c.ElCard,s=c.ElCol,i=c.ElRow;return b(),h(I,null,[p,e(i,{gutter:20},{default:o(()=>[e(s,{span:6},{default:o(()=>[e(f,{header:"OS"},{default:o(()=>[e(r,{column:1},{default:o(()=>[e(t,{label:"Hostname"},{default:o(()=>[a(n(l.osInfo.hostname),1)]),_:1}),e(t,{label:"CPU cores"},{default:o(()=>[a(n(l.osInfo.cpuCount),1)]),_:1}),e(t,{label:"Total memory"},{default:o(()=>[a(n(m(l.osInfo.totalMemory)),1)]),_:1}),e(t,{label:"Free memory"},{default:o(()=>[a(n(m(l.osInfo.freeMemory)),1)]),_:1}),e(t,{label:"OS type"},{default:o(()=>[a(n(l.osInfo.osType),1)]),_:1}),e(t,{label:"OS platform"},{default:o(()=>[a(n(l.osInfo.osPlatform),1)]),_:1}),e(t,{label:"OS release"},{default:o(()=>[a(n(l.osInfo.osRelease),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{span:6},{default:o(()=>[e(f,{header:"User"},{default:o(()=>[e(r,{column:1},{default:o(()=>[e(t,{label:"Username"},{default:o(()=>[a(n(l.userInfo.username),1)]),_:1}),e(t,{label:"Home directory"},{default:o(()=>[a(n(l.userInfo.homedir),1)]),_:1}),e(t,{label:"Shell"},{default:o(()=>[a(n(l.userInfo.shell),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{span:6},{default:o(()=>[e(f,{header:"Node"},{default:o(()=>[e(r,{column:1},{default:o(()=>[e(t,{label:"Version"},{default:o(()=>[a(n(l.nodeInfo.version),1)]),_:1}),e(t,{label:"Architecture"},{default:o(()=>[a(n(l.nodeInfo.arch),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}}});export{g as default};
