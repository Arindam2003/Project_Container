// alert("arindam");
function validateFrom(event){
    event.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const confirmPassword=document.getElementById("confirmPassword").value;
    const errormessage=document.getElementById("errormessage");

    if(name.trim()==='' || email.trim()===''|| password.trim()===''||confirmPassword.trim()==='')
    {
        errormessage.innerText="All fields are reuired";
        return;
    }
    if(password!==confirmPassword)
    {
        errormessage.innerText="Password and Confirm Password not same";
        return;
    }
    else{
        if(!isValidate(password)){
            errormessage.innerText="Password Minium 8 charecter Required";
            return;
        }
        if(!(checkCapital(password)&&checkDigit(password)&& checkSpecial(password)))
        {
            errormessage.innerText="Somthing Mistakes"
            return 
        }
    }



    document.getElementById("registration").submit()
}

function checkName(nm)  //Name length
{
    if(nm.length<5){
        return false;
    }
    else{
        return true;
    }
}

function checkCapital(pwd)  //One Capital
{
    for (let i = 0; i < pwd.length; i++) {
        if(pwd.charAt(i)>='A' && pwd.charAt(i)<='Z')
        {
            return true;
        }
    }
    return false;
}
function checkDigit(pwd)  //One digit
{
    for (let i = 0; i < pwd.length; i++) {
        if(pwd.charAt(i)>='0' && pwd.charAt(i)<='9')
        {
            return true;
        }
    }
    return false;
}
function checkSpecial(pwd) //One Special
{
    for (let i = 0; i < pwd.length; i++) {
        if(pwd.charAt(i)>='0' && pwd.charAt(i)<='9'||pwd.charAt(i)>='a'&&pwd.charAt(i)<='z' || pwd.charAt(i)>='A'&&pwd.charAt(i)<='Z')
        {
            
        }
        else{
            return true;
        }
    }
    return false;
}

function isValidate(pwd)
{
    if(pwd.length>8)
        return true;
    else
        return false;
}
