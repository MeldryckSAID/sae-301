import{d as x,h as b,p as f,o as h,c as v,a,b as e,q as y,v as g,_ as w,w as E,F as C,e as F,s as _,r as V,j as L}from"./index.cf2aec66.js";import{_ as s,a as P}from"./FormkitMateriaux.vue_vue_type_script_setup_true_lang.f16fc062.js";const k={class:"m-0 min-h-screen bg-mclair"},B=a("h1",{class:"font-montagu-slab"},"ici on personalise",-1),M={class:"flex justify-around"},$={class:"flex space-x-8"},j={class:"flex flex-col"},q={class:"flex flex-col"},A={class:"flex flex-col"},K={class:"flex flex-col"},N={class:"flex flex-col"},R={class:"flex flex-col"},U=x({__name:"personalisation",props:["id"],async setup(u){let o,i;const m=u,d=L(),r=b({});if(m.id){let{data:n,error:t}=([o,i]=f(()=>_.from("montre").select("*").eq("id_montre",m.id)),o=await o,i(),o);t?console.log("n'a pas pu charger le table montre :",t):r.value=n[0]}async function p(n,t){const{data:l,error:c}=await _.from("montre").upsert(n);c?t.setErrors([c.message]):(t.setErrors([]),d.push("/liste"))}return(n,t)=>{const l=V("FormKit");return h(),v(F,null,[a("main",k,[a("section",null,[B,a("div",M,[e(w,y(g(r.value)),null,16),a("div",null,[e(l,{type:"form","submit-label":"Acheter",modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=c=>r.value=c),onSubmit:p,"submit-attrs":{classes:{input:" bg-Marron text-white p-1 rounded-xl hover:bg-white hover:text-black"}}},{default:E(()=>[a("div",$,[a("div",j,[e(s,{name:"ecran",label:"\xC9cran"}),e(l,{name:"ecran",label:"\xC9cran",type:"color"})]),a("div",q,[e(s,{name:"bracelet_t",label:"Lanniere haute"}),e(l,{name:"bracelet_t",label:"Lanniere haute",type:"color"})]),a("div",A,[e(s,{name:"bracelet_b",label:"Lanniere basse"}),e(l,{name:"bracelet_b",label:"Lanniere basse",type:"color"})]),a("div",K,[e(s,{name:"cercle_in",label:"cercle int\xE9rieur"}),e(l,{name:"cercle_in",label:"cercle int\xE9rieur",type:"color"})]),a("div",N,[e(s,{name:"cercle_ex",label:"cercle ext\xE9rieur"}),e(l,{name:"cercle_ex",label:"cercle ext\xE9rieur",type:"color"})]),a("div",R,[e(s,{name:"pointe",label:"Pointe"}),e(l,{name:"pointe",label:"Pointe",type:"color"})])]),e(P,{name:"id_materiaux",label:"Materiaux"})]),_:1},8,["modelValue"])])])])]),a("footer",null,[e(C)])],64)}}});export{U as _};
