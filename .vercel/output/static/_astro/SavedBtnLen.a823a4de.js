import{j as r}from"./jsx-runtime.391947bd.js";import{r as o}from"./index.ed373d49.js";function u(){const[s,n]=o.useState(0),t=()=>{const e=localStorage.getItem("saved-posts");if(e)try{const a=JSON.parse(e);Array.isArray(a)&&n(a.length)}catch{const d=parseInt(e,10);isNaN(d)||n(d)}else n(0)};return o.useEffect(()=>(t(),window.addEventListener("storage",t),()=>{window.removeEventListener("storage",t)}),[]),o.useEffect(()=>{const e=()=>{t()};return document.addEventListener("saved-posts-changed",e),()=>{document.removeEventListener("saved-posts-changed",e)}},[]),r.jsxs("a",{href:"/saved",className:"jbtn",children:[r.jsx("span",{children:"📁"})," ",s&&r.jsx("b",{children:s>0&&`(${s})`})]})}export{u as default};