async function getData(){
    try{
      const response = await fetch("http://localhost:8000/getemployees");
      const data = await response.json();
      displayData(data); 
    } catch(err){
      console.log(err);
    }
  }
  //
  function displayData(arr) { 
      let outHTML = "";
    for(let i=0; i < arr.length; i++){
          outHTML+="<p>"+arr[i].empName + " weighed " + arr[i].empPass + " Kgs</p>";
      }
      document.getElementById("documents").innerHTML = outHTML; 
  }

function validateForm(){
    document.getElementById("namemsg").innerHTML="";
    document.getElementById("weightmsg").innerHTML="";  
    let empName = document.forms["frmcollectweight"]["empName"];
    let empWeight = document.forms["frmcollectweight"]["empWeight"];
    let alphaOnly = /^[A-Za-z]+$/;
    //
    if (empName.value == "") {
        document.getElementById("namemsg").innerHTML="Name cannot be empty!";  
        empName.focus();       
      return false;
    }
    if (!empName.value.match(alphaOnly)) {
        document.getElementById("namemsg").innerHTML="Name cannot contain numbers!";
        empName.focus();
        return false;
    }   
    if (empName.value.length < 3 && empName.value != "") {   
		document.getElementById("namemsg").innerHTML="Name too short!";  
		empName.focus();   
		return false;   
    }
    if (empWeight.value == "" || empWeight.value == 0) {
        document.getElementById("weightmsg").innerHTML="Weight cannot be empty or Zero!";  
        empWeight.focus();       
      return false;
    }
    if (isNaN(empWeight.value)) {   
        document.getElementById("weightmsg").innerHTML="Weight must be a number";  
        empWeight.focus();   
        return false;   
    }  
    //
    return true;
}