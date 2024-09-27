(()=>{"use strict";var e={d:(t,o)=>{for(var a in o)e.o(o,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:o[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{z:()=>l});class t{static fromJson({id:e,tarea:o,completado:a,creado:s}){const d=new t(o);return d.id=e,d.completado=a,d.creado=s,d}constructor(e){this.tarea=e,this.id=(new Date).getTime(),this.completado=!1,this.creado=new Date}}const o=document.querySelector(".todo-list"),a=document.querySelector(".new-todo"),s=document.querySelector(".clear-completed"),d=document.querySelector(".filters"),r=document.querySelectorAll(".filtro"),c=e=>{const t=`\n    <li class="${e.completado?"completed":""}" data-id="${e.id}">\n        <div class="view">\n            <input class="toggle" type="checkbox" ${e.completado?"checked":""}">\n            <label>${e.tarea}</label>\n            <button class="destroy"></button>\n        </div>\n        <input class="edit" value="Create a TodoMVC template">      \n    </li>       \n    `,a=document.createElement("div");return a.innerHTML=t,o.append(a.firstElementChild),a.firstElementChild};a.addEventListener("keyup",(e=>{if(13===e.keyCode&&a.value.length>0){const e=new t(a.value);l.nuevoTodo(e),c(e),a.value=""}})),o.addEventListener("click",(e=>{const t=e.target.localName,a=e.target.parentElement.parentElement,s=a.getAttribute("data-id");t.includes("input")?(l.marcarCompletado(s),a.classList.toggle("completed")):t.includes("button")&&(l.eliminarTodo(s),o.removeChild(a))})),s.addEventListener("click",(()=>{l.eliminarCompletados();for(let e=o.children.length-1;e>=0;e--){const t=o.children[e];t.classList.contains("completed")&&o.removeChild(t)}})),d.addEventListener("click",(e=>{const t=e.target.text;if(t){r.forEach((e=>e.classList.remove("selected"))),e.target.classList.add("selected");for(const e of o.children){e.classList.remove("hidden");const o=e.classList.contains("completed");switch(t){case"Pendientes":o&&e.classList.add("hidden");break;case"Completados":o||e.classList.add("hidden")}}}}));const l=new class{constructor(){this.cargarLocalStorage()}nuevoTodo(e){this.todos.push(e),this.guardarLocalStorage()}eliminarTodo(e){this.todos=this.todos.filter((t=>t.id!=e)),this.guardarLocalStorage()}marcarCompletado(e){for(const t of this.todos)if(t.id==e){t.completado=!t.completado,this.guardarLocalStorage();break}}eliminarCompletados(){this.todos=this.todos.filter((e=>!e.completado)),this.guardarLocalStorage()}guardarLocalStorage(){localStorage.setItem("todo",JSON.stringify(this.todos))}cargarLocalStorage(){this.todos=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[],this.todo=this.todos.map(t.fromJson)}};l.todos.forEach(c)})();