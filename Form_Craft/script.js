function validate()
{
    var h=document.getElementsByTagName("h2")[0];
    h.style.color="red";
    var fname=document.getElementById("fName");
    var sname=document.getElementById("sName");
    var flag=true;
    if(fname.value.length==0)
        flag=false;
    return flag;
}