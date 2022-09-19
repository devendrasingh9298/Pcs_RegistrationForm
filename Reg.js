
/* Name Validation Function...... */ 

function Name(){
    var name = document.getElementById('name').value;

    var name_exp = /^[A-Za-z\s]*$/;

  if ((name == "") || (!name_exp.test(name))) {
    document.getElementById("name-span").style.visibility = "visible";
    document.getElementById("name-span").style.color = "red";
    document.getElementById("name").style.borderBottom = "2px solid red";
    document.getElementById("name-span").innerText = "required only string";
   }else if((name !== "")|| (name_exp.test(name))){
    document.getElementById("name-span").style.visibility = "hidden";
    document.getElementById("name").style.borderBottom = "1px solid gray";
  }
}

/* Email Validation Function...... */ 

function validateemail(){  
var email  = document.getElementById("email").value;  
var atposition=email.indexOf("@");  
var dotposition=email.lastIndexOf(".");  

if (email == "" || atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
    document.getElementById("email-span").style.visibility = "visible";
    document.getElementById("email-span").style.color = "red";
    document.getElementById("email").style.borderBottom = "2px solid red";
    document.getElementById("email-span").innerText = "enter valid email";
}else if((email !== "")){
    document.getElementById("email-span").style.visibility = "hidden";
    document.getElementById("email").style.borderBottom = "1px solid gray";
            
    }
}  
	
/* UserName Validation Function...... */ 

const isRequired = value => value === '' ? false : true;

const isBetween = (length, min, max) => length < min || length > max ? false : true;

function User(){
    let valid = false;
    const min = 3,max = 25;

    const username = document.getElementById("user").value.trim();

        if (!isRequired(username) || !isBetween(username.length, min, max)) {
            document.getElementById("user-span").style.visibility = "visible";
            document.getElementById("user-span").style.color = "red";
            document.getElementById("user").style.borderBottom = "2px solid red";
            document.getElementById("user-span").innerText = `Username must be between ${min} and ${max} characters.`;
        } else if (isRequired(username)) {
            document.getElementById("user-span").style.visibility = "hidden";
            document.getElementById("user").style.borderBottom = "1px solid gray";
        } 
}

/* Password Validation and Match */


function Password(){
    var password = document.getElementById("password").value;

    const isRequired = value => value === '' ? false : true;
    const isBetween = (length, min, max) => length < min || length > max ? false : true;
    let password_exp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;

    const min = 4,max = 8;

    if (!isRequired(password) || !isBetween(password.length, min, max) || !password_exp.test(password)) {
        document.getElementById("password-span").style.visibility = "visible";
        document.getElementById("password-span").style.color = "red";
        document.getElementById("password").style.borderBottom = "2px solid red";
        document.getElementById("password-span").innerText = `Password must be between ${min} and ${max} characters.`;
    } else if (isRequired(password)) {
        document.getElementById("password-span").style.visibility = "hidden";
        document.getElementById("password").style.borderBottom = "1px solid gray";
    }
}
    
function RepPassword(){
    var repeatpassword = document.getElementById("repeat-password").value;
    var password = document.getElementById("password").value;

    if(password !== repeatpassword){
        document.getElementById("rep-password-span").style.visibility = "visible";
        document.getElementById("rep-password-span").style.color = "red";
        document.getElementById("repeat-password").style.borderBottom = "2px solid red";
        document.getElementById("rep-password-span").innerText = "password not match";
    }else if(password == repeatpassword){
        document.getElementById("rep-password-span").style.visibility = "hidden";
        document.getElementById("repeat-password").style.borderBottom = "1px solid gray";
    console.log('hello')
}
}


/* Checkbox Validation....... */

function Checkbox(){
    if(document.getElementById("checkbox").checked = false){
        document.getElementById("checkbox-span").style.visibility = "visible";
        document.getElementById("checkbox-span").style.color = "red";
        document.getElementById("checkbox-span").innerText = "Check Term & Conditions";
        }else if(document.getElementById("checkbox").checked = true){
            document.getElementById("checkbox-span").style.visibility = "hidden";
        }
    }


    function Submit(){
        Name();
        validateemail();
        User();
        Password();
        RepPassword();
        Checkbox();
        // alert('Thank You for Registration!');
        
    }


