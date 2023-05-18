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
    let date = new Date;
    post.innerHTML += `<div class="div">
      <div class="col">
        <h4 class="head-2">${data.text}</h4>
        <span class="options">
          <i onclick="editPost(this)" class="fa fa-edit"></i>
          <i onclick="deletePost(this)" class="fa fa-trash"></i>
        </span>
      </div>
      <div class="col">
        <img class="image-1" src = "image/img-2.jpg" alt="no" width="200px" height="300px">
        <div> TIME :${date.toLocaleTimeString()}</div>
        <div> DATE: ${ date.toLocaleDateString()}</div>
        <div class = "icons">
          <div class ="ico"><i onclick="like(this)" class="fa fa-thumbs-up"></i></div>
          <div class ="wrapper"><i onclick="heart(this)" class="fa fa-heart"></i></div>
       </div>   
    </div>`
    input.value=" ";
}
function editPost(values){
   input.value = values.parentElement.previousElementSibling.innerHTML;
   post.innerHTML="";
}
function deletePost(e){
    e.parentElement.parentElement.parentElement.remove();   
}
function like(L){
   L.style.transform = "scale(2.5,2.5)";
   L.style.color = "blue";
   L.style.transition = "1s";
   L.parentElement.nextElementSibling.remove();
}
function heart(H){
  H.style.transform = "scale(2.5,2.5)";
  H.style.color = "red";
  H.style.transition = "1s";
  H.parentElement.previousElementSibling.remove();
}