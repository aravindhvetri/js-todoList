let form=document.querySelector("form");
let input=document.getElementById("input");
let post=document.getElementById("post");

form.addEventListener("submit", function(e){
  e.preventDefault();
 
  readpost();
})

let data={};
function readpost(){
  data["text"]=input.value;
  createpost();
}

function createpost(){
    post.innerHTML += `<div class="div">
      <h4 class="head-2">${data.text}</h4>
      <span class="options">
        <i onclick="editPost(this)" class="fa fa-edit"></i>
        <i onclick="deletePost(this)" class="fa fa-trash"></i>
      </span>  
    </div>`
    input.value=" ";
}
function editPost(values){
   input.value = values.parentElement.previousElementSibling.innerHTML;
}
function deletePost(e){
    e.parentElement.parentElement.remove();
}