/* پر کردن سایت از config.js و projects.js */
document.querySelectorAll("[data-text]").forEach(el=>{const k=el.dataset.text;let v=SITE[k]||"";if(k==="github"||k==="linkedin")v=v.replace(/^https?:\/\/(www\.)?/,"");el.textContent=v});
document.querySelectorAll("[data-link]").forEach(a=>{const k=a.dataset.link,v=SITE[k];if(!v){a.hidden=true;return}a.href=k==="email"?"mailto:"+v:v});
document.getElementById("skills").innerHTML=SITE.skills.map(t=>`<span>${t}</span>`).join("");
const lk=(u,t)=>u?`<a href="${u}" target="_blank" rel="noopener noreferrer">${t}</a>`:"";
document.getElementById("projectGrid").innerHTML=PROJECTS.map(p=>`<article class="pj g">${p.image?`<div class="pv"><img src="${p.image}" alt="${p.title}" loading="lazy"></div>`:`<div class="pv">${p.visual||"{ }"}</div>`}<h3>${p.title}</h3><p>${p.desc}</p><div class="tags">${(p.tags||[]).map(t=>`<b>${t}</b>`).join("")}</div><div class="pl">${lk(p.github,"GitHub ↗")}${lk(p.demo,"دمو ↗")}${lk(p.download,"دانلود ↓")}</div></article>`).join("")+(SITE.showNextSlot?`<article class="pj g next"><div class="pv">+</div><h3>پروژه‌ی بعدی</h3><p>به‌زودی اینجا اضافه می‌شود.</p></article>`:"");
const mb=document.querySelector(".mb"),nav=document.querySelector("nav");
mb.onclick=()=>mb.setAttribute("aria-expanded",nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.onclick=()=>nav.classList.remove("open"));
let rating=0;const sb=document.getElementById("stars");
function paint(){sb.innerHTML="";for(let i=1;i<=5;i++){const b=document.createElement("button");b.type="button";b.textContent=i<=rating?"★":"☆";b.setAttribute("aria-label",i+" از 5");b.onclick=()=>{rating=i;paint();sb.children[i-1].focus()};sb.append(b)}}
paint();
document.getElementById("ff").onsubmit=async e=>{
  e.preventDefault();
  const st=document.getElementById("fs"),d=new FormData(e.target);
  d.append("rating",rating+"/5");
  d.append("_subject","بازخورد جدید از نمونه‌کار");
  st.textContent="در حال ارسال...";
  try{
    const r=await fetch(SITE.formEndpoint,{method:"POST",body:d,headers:{Accept:"application/json"}});
    if(r.ok){e.target.reset();rating=0;paint();st.textContent="پیام شما ارسال شد. ممنون!"}
    else st.textContent="ارسال نشد. دوباره تلاش کنید."
  }catch{st.textContent="اتصال برقرار نشد. دوباره تلاش کنید."}
};
const secs=[...document.querySelectorAll("main section[id]")],links=[...nav.querySelectorAll("a")];
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting)links.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+x.target.id))}),{rootMargin:"-35% 0px -55% 0px"});
secs.forEach(s=>io.observe(s));
if(window.THREE&&!matchMedia("(prefers-reduced-motion:reduce)").matches){
const sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(65,innerWidth/innerHeight,.1,100);cam.position.z=8;
const r=new THREE.WebGLRenderer({canvas:document.getElementById("space"),alpha:true,antialias:true});r.setPixelRatio(Math.min(devicePixelRatio,2));r.setSize(innerWidth,innerHeight);
const p=new Float32Array(2550);for(let i=0;i<850;i++){p[i*3]=(Math.random()-.5)*24;p[i*3+1]=(Math.random()-.5)*14;p[i*3+2]=(Math.random()-.5)*14}
const g=new THREE.BufferGeometry();g.setAttribute("position",new THREE.BufferAttribute(p,3));
const pts=new THREE.Points(g,new THREE.PointsMaterial({color:0x3ea8ff,size:.026,transparent:true,opacity:.72}));sc.add(pts);
const kn=new THREE.Mesh(new THREE.TorusKnotGeometry(1.25,.025,150,10),new THREE.MeshBasicMaterial({color:0x665cff,wireframe:true,transparent:true,opacity:.22}));kn.position.set(-3,-.4,-1);sc.add(kn);
addEventListener("resize",()=>{cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix();r.setSize(innerWidth,innerHeight)});
(function a(){requestAnimationFrame(a);pts.rotation.y+=.00035;kn.rotation.x+=.0025;kn.rotation.y+=.004;r.render(sc,cam)})();
}
