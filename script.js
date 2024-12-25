const add = document.querySelector("#add");
const nav_box = document.querySelector(".box");
const container=document.querySelector(".container")
const section=document.querySelector("section");
const save = document.querySelector("#save");
const dealete = document.querySelector("#delete");
const text=document.querySelector("textarea");
const note=document.querySelector(".Note");

section.addEventListener("click",function(e){
    if(e.target.id === "add"){
        let note = document.createElement('div');
        note.classList.add("Note");
        container.appendChild(note);
        note.innerHTML=`
                <nav>
            <div class="box">
                <i id="save" class="fa-solid fa-floppy-disk"></i>
                <i id="delete" class="fa-solid fa-trash"></i>
        </div>
        <div class="span"></div>
        </nav>
        <textarea name="" id="" style="height: 194px; width: 200px;"></textarea>
        `;
    }
});

nav_box.addEventListener("click",function(e){
    if(e.target.id === "save"){
        savetask();
    }
    if(e.target.id === "delete"){
        dealetetask();
    }
});

function savetask(){
    localStorage.setItem("d1",text.value);
}
function showtask(){
    text.value=localStorage.getItem("d1");
}
function dealetetask(){
    note.remove();
    localStorage.removeItem("d1");
}


showtask();