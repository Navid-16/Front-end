let submitBtn = document.getElementById("submit");
let form = document.getElementById("form-id");
let boxDiv = document.getElementById("hiddenid");

form.addEventListener("submit", notRefresh);
function notRefresh(event) {
    event.preventDefault();

}

//form validation
submitBtn.addEventListener("click", validate);
function validate() {
    let firstName = document.getElementById("Fnameid");
    let lastName = document.getElementById("Lnameid");
    let comments = document.getElementById("textarea");
    let email = document.getElementById("emailid");
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
       
    if (firstName.value === "" || firstName.value.indexOf(" ") >= 0) {
            firstName.style.borderBottom = "solid red 2px";
            firstName.focus()
            firstName.placeholder = "Invalid first name"
            firstName.addEventListener("change", fcheck);
            function fcheck(){
              firstName.style.borderBottom = "solid white 2px"
            }
    }else if(lastName.value === "" || lastName.value.indexOf(" ") >= 0){
        lastName.style.borderBottom = "solid red 2px"
        lastName.placeholder = "Invalid last name"
        lastName.focus()
        lastName.addEventListener("change", lcheck);
        function lcheck(){
            lastName.style.borderBottom = "solid white 2px"
        }
    }else if(!filter.test(email.value)){
        email.style.borderBottom = "solid red 2px"
        email.placeholder = "Invalid email"
        email.focus()
        email.addEventListener("change", Echeck);
        function Echeck(){
            email.style.borderBottom = "solid white 2px"
        }
    }else if(comments.value === ""){
        comments.style.borderBottom = "solid red 2px"
        comments.placeholder = "write a comment"
        comments.focus()
        comments.addEventListener("change", Ccheck);
        function Ccheck(){
            comments.style.borderBottom = "solid white 2px"
        }
    }else{
          localStorage.setItem("firstname", firstName.value);
           boxDiv.style.display = "block";
           setTimeout(() => {
               let text = document.getElementById("p_text");
               let textBtn = document.getElementById("boxbtn");

               text.className = "ptext";
               textBtn.className = "btnclass"

               textBtn.addEventListener("click", removeBox);
               function removeBox(){
                   boxDiv.className = "newboxclass"
                   text.remove()
                   textBtn.remove()
                   setTimeout(() => {
                       location.reload()
                   }, 1000);
               }
           }, 1000);
      
    }
}