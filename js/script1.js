function validateform() {
    var fname = document.myform.fname.value;
    var lname = document.myform.lname.value;
    var email = document.myform.email.value;
    var firstpassword=document.myform.password.value;  
    var secondpassword=document.myform.password2.value; 
    var number = document.myform.number.value;
    

    if (fname == null || fname == "") {
        alert("First name can't be blank");
        return false;
    } else if (lname == null || lname == "") {
        alert("Last name can't be blank");
        return false;
    } else if (email == null || email == "") {
        alert("Email can't be blank");
        return false;
    }else if (firstpassword==null || firstpassword==""){  
	alert("Enter password!");  
	return false;
    }else if (secondpassword==null || secondpassword==""){  
	alert("Confirm password!");  
	return false;
    }else if (firstpassword!=secondpassword){  
	alert("password must be same!");  
	return false;
    } else if (firstpassword.length <9) {
        alert("Enter a strong password");
        return false;	
    } else if (number.length <= 9) {
        alert("Contact number must be 10 numbers long.");
        return false;
    }
}