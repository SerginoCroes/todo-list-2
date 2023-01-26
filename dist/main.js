(()=>{"use strict";const t=document.querySelector("#content");class e{constructor(t,e,n){this.el=document.createElement(t),n.text&&(this.el.innerText=n.text),n.attr&&Object.keys(n.attr).forEach((t=>this.el.setAttribute(t,n.attr[t]))),n.styles&&Object.keys(n.styles).forEach((t=>this.el.style[t]=n.styles[t])),e.append(this.el)}append(t){this.el.appendChild(t)}setText(t){this.el.innerText=t}}const n=new e("div",t,{attr:{class:"header"}}),l=(new e("h1",n,{text:"Todo list"}),new e("div",t,{attr:{class:"menu"}})),s=new e("button",l,{text:"Add todo",attr:{class:"button"}}),o=(new e("h2",l,{text:"Projects:"}),new e("button",l,{text:"Add project",attr:{class:"button"}}));s.el.addEventListener("click",(()=>c.el.style.display="block")),o.el.addEventListener("click",(()=>d.el.style.display="block"));const a=new e("div",t,{attr:{class:"main"}}),i=new e("div",t,{attr:{class:"footer"}});new e("p",i,{text:"Footer"});const c=function(){const t=new e("div",a,{attr:{class:"dialog"},styles:{display:"none"}}),n=new e("div",t,{attr:{class:"topdiv"}});new e("p",n,{text:"Add todo"}),new e("button",n,{text:"x",attr:{class:"closebutton"}}).el.addEventListener("click",(()=>t.el.style.display="none"));const l=new e("form",t,{attr:{class:"form"}}),s=new e("div",l,{attr:{class:"inputdiv"}}),o=(new e("label",s,{text:"Todo:",attr:{for:"todoinput"}}),new e("input",s,{attr:{id:"todoinput",class:"input"}}),new e("div",l,{attr:{class:"inputdiv"}})),i=(new e("label",o,{text:"Date:",attr:{for:"dateinput"}}),new e("input",o,{attr:{type:"date",id:"dateinput",class:"input"}}),new e("div",l,{attr:{class:"buttondiv inputdiv"}}));return new e("button",i,{text:"Submit",attr:{class:"button"}}).el.addEventListener("click",(e=>{e.preventDefault(),t.el.style.display="none"})),t}(),d=function(){const t=new e("div",a,{attr:{class:"dialog"},styles:{display:"none"}}),n=new e("div",t,{attr:{class:"topdiv"}});new e("p",n,{text:"Add project"}),new e("button",n,{text:"x",attr:{class:"closebutton"}}).el.addEventListener("click",(()=>t.el.style.display="none"));const l=new e("form",t,{attr:{class:"form"}}),s=new e("div",l,{attr:{class:"inputdiv"}}),o=(new e("label",s,{text:"Project name:",attr:{for:"projectinput"}}),new e("input",s,{attr:{id:"projectinput",class:"input"}}),new e("div",l,{attr:{class:"buttondiv inputdiv"}}));return new e("button",o,{text:"Submit",attr:{class:"button"}}).el.addEventListener("click",(e=>{e.preventDefault(),t.el.style.display="none"})),t}();let r=[];class u{constructor(t,e){this.todo=t,this.date=e,this.done=!1}setDone(){this.done=!0}}let p={};function v(){return p}c.el.children[1][2].addEventListener("click",(()=>{const t=c.el.children[1][0].value,n=c.el.children[1][1].value;t&&n&&(function(t,e){r.push(new u(t,e))}(t,n),function(t,n){const l=new e("div",a,{attr:{class:"tododiv"}});new e("p",l,{text:t}),new e("p",l,{text:n})}(t,n)),console.log(new Date(n)),c.el.children[1][0].value="",c.el.children[1][1].value=""})),d.el.children[1][1].addEventListener("click",(()=>{const t=d.el.children[1][0].value,n=function(t){const n=new e("button",l,{text:t,attr:{class:"button projectbutton"}});return new e("button",n,{text:"x",attr:{class:"delproject"}}).el.addEventListener("click",(t=>l.el.removeChild(t.target.parentNode))),n}(t),s=(o=t,p[Object.keys(p).length]=o,Object.keys(p).length);var o;n.el.children[0].addEventListener("click",(t=>{console.log("removing project "+s),delete p[s-1],console.log(v())})),console.log(v()),d.el.children[1][0].value=""}))})();