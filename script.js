let insert = document.querySelector(".add__insert");
let list =document.querySelector(".list");
let tasksList = document.getElementsByClassName("task");
let input= document.querySelector(".add__input"); 


insert.addEventListener("click",() => { 
    let text= input.value; 
    let nElem = document.createElement("li"); 
    nElem.innerHTML= `<p>${text}</p>
                     <div class="buttons"><button
                        class="done b">Done</button>
                        <button class="trash b">Trash</button>
                     </div>`
    if (text!=="") {
        nElem.classList.add("task");
        list.appendChild(nElem);
    }
    input.value="";

})

list.addEventListener("click",(e) => { 
    if (e.target.matches(".done")){ 
        let text = e.target.parentElement.previousElementSibling; 
        text.classList.toggle("underline");
    } else if (e.target.matches(".trash")) { 
        let task= e.target.closest(".task");
        list.removeChild(task);
    }
})

