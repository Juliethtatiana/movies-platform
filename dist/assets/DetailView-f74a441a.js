import{L as l,q as r,s as n,x as e,B as a,y as c}from"./index-2971b574.js";import{m as i}from"./movies-9665e982.js";const u={class:"w-full h-full flex justify-center my-6"},d={class:"bg-gray-300 dark:bg-slate-700 p-4 rounded-lg h-full w-[80%]"},m=["src","alt"],w={__name:"DetailView",setup(_){const o=l().params.id,s=i.find(t=>t.id==o);return(t,p)=>(r(),n("div",u,[e("div",d,[e("img",{src:"/src/assets/"+a(s).image,alt:a(s).name,class:"w-full h-[85%] rounded-lg shadow-lg"},null,8,m),e("p",null,c(a(s).name),1)])]))}};export{w as default};