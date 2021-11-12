let email = document.getElementById("email");
let pwd = document.getElementById("password");

function validate(){
    if(email.value==""  || pwd.value ==""){
        alert("Fields cannot be empty");
        <div class="progress">
            <div class="progress-bar bg-danger" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Too Weak!</div>
        </div>
        return false;
    }
    else{
        return true;
    }
}