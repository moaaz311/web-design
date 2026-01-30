function formcheck(){
    var name = document.getElementById("username").value;
    var Email = document.getElementById("email").value;
    var Phone = document.getElementById("phone").value;
    var error= document.getElementById("error");
    var text ="";
    if(name.length<3)
    {
        text="please enter a vaild user_name";
        error.innerHTML=text;
        return false;
    }
    //to search in email if there "@" or not !!
    else if(Email.indexOf("@")==-1 || Email.length<6)
        {
            text="please enter a vaild email";
            error.innerHTML=text;
            return false;
        }
    //isNaN()-->checkif it is a num or not as "Phone.value!=Number"
    else if( isNaN(Phone)|| Phone.length!=11)
        {
            text="please enter a vaild phone";
            error.innerHTML=text;
            return false;
        }
        else 
        {
            alert("data sent succfully");
            return true;
        }
    } 
