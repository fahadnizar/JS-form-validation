function validateform(){  
var fname=document.myform.fname.value; 
var lname=document.myform.lname.value;
var password=document.myform.password.value;  
  
if (fname==null || fname==""){  
  alert("First name can't be blank");  
  return false; 
}else if (lname==null || lname==""){  
  alert("Last name can't be blank");  
  return false;  
}else if(password.length<6){  
  alert("Password must be at least 6 characters long.");  
  return false;  
  }  
}  