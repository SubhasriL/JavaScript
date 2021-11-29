function validate(){
//firstname
var name=document.getElementById("Name");
var nameregx=/[a-zA-Z]{3,30}/;
if(name.value.trim()=="")
{
    document.getElementById("uname").style.visibility="visible";
    name.style.border="solid 2px red";
    

}
else if(nameregx.test(name.value))
{
    document.getElementById("uname").innerHTML="Valid";

}
else
{
        

        document.getElementById("uname").innerHTML="InValid";
        name.style.border="solid 2px red";                
        document.getElementById("uname").style.visibility="visible";

}
//lastname
            
var lname=document.getElementById("Last Name");

if(lname.value.trim()==""){
    document.getElementById("lname1").style.visibility="visible";
    lname.style.border="solid 2px red";
    

}

else if(nameregx.test(lname.value))
{
    document.getElementById("lname1").innerHTML="Valid";

}
else
{
        

        document.getElementById("lname1").innerHTML="InValid";
        lname.style.border="solid 2px red";                
        document.getElementById("lname1").style.visibility="visible";

}
//mail

var mail=document.getElementById("MailId");
var mailregx=/(^[a-zA-z0-9\._]+)@([a-zA-z0-9_]+).([a-z]{3,8})(.[a-z]{3,8})?/;
if(mail.value.trim()==""){
    document.getElementById("mail1").style.visibility="visible";
    mail.style.border="solid 2px red";
    

}
else if(mailregx.test(mail.value))
{
    document.getElementById("mail1").innerHTML="Valid";

}
else
{
        

        document.getElementById("mail1").innerHTML="InValid";
        mail.style.border="solid 2px red";                
        document.getElementById("mail1").style.visibility="visible";

}
//dob

var dob=document.getElementById("DOB");
var dobregx=/([0-9]{1,2})-([0-9]{1,2})-([0-9]{4})/
if(dob.value.trim()==""){
    document.getElementById("birth").style.visibility="visible";
    dob.style.border="solid 2px red";
    

}

 else if(dobregx.test(dob.value))
{
    document.getElementById("birth").innerHTML="Valid";

}
else
{
        

        document.getElementById("birth").innerHTML="InValid";
        dob.style.border="solid 2px red";                
        document.getElementById("birth").style.visibility="visible";

}

//mobileno
var num=document.getElementById("no");
var mobileregx=/^[7-9]\d{9}$/;
if(num.value.trim()==""){
    document.getElementById("no1").style.visibility="visible";
    num.style.border="solid 2px red";
    

}
else if(mobileregx.test(num.value))
{
    document.getElementById("no1").innerHTML="Valid";

}
else
{
        

        document.getElementById("no1").innerHTML="InValid";
        num.style.border="solid 2px red";                
        document.getElementById("no1").style.visibility="visible";

}


//address



var add1=document.getElementById("addressl1");
var addregx=/([0-9]{1,3})([0-9]{1,3})/
if(add1.value.trim()==""){
    document.getElementById("address1").style.visibility="visible";
    add1.style.border="solid 2px red";
    

}
else if(addregx.test(add1.value))
{
    document.getElementById("address1").innerHTML="Valid";

}
else
{
        

        document.getElementById("address1").innerHTML="InValid";
        add1.style.border="solid 2px red";                
        document.getElementById("address1").style.visibility="visible";

}
//address2
var add2=document.getElementById("addressl2");
var addregx2=/([a-zA-z0-9].)/;
if(add2.value.trim()==""){
    document.getElementById("address2").style.visibility="visible";
    add2.style.border="solid 2px red";
    

}
else if(addregx2.test(add2.value))
{
    document.getElementById("address2").innerHTML="Valid";

}
else
{
        

        document.getElementById("address2").innerHTML="InValid";
        add2.style.border="solid 2px red";                
        document.getElementById("address2").style.visibility="visible";

}
//city
var city1=document.getElementById("city");
var cityregx=/[a-zA-z]/;
if(city1.value.trim()==""){
    document.getElementById("c1").style.visibility="visible";
    city1.style.border="solid 2px red";
    

}
else if(cityregx.test(city1.value))
{
    document.getElementById("c1").innerHTML="Valid";

}
else
{
        

        document.getElementById("c1").innerHTML="InValid";
        city1.style.border="solid 2px red";                
        document.getElementById("c1").style.visibility="visible";

}
//zipcode
var code1=document.getElementById("code");
var coderegx=/^[6-9]\d{6}$/;
if(code1.value.trim()==""){
    document.getElementById("zip code").style.visibility="visible";
    code1.style.border="solid 2px red";
    

}
else if(cregx.test(code1.value))
{
    document.getElementById("zip code").innerHTML="Valid";

}
else
{
        

        document.getElementById("zip code").innerHTML="InValid";
        code1.style.border="solid 2px red";                
        document.getElementById("zip code").style.visibility="visible";

}
//checkbox
var ch =document.getElementById("check");
if(ch.value==true){
   
   padd1.value=add1.value;
   padd2.value=add2.value;
   pcity1.value=city1.value;
   pcode1.value=code1.value;


}

else
{

//permanent address


    var padd1=document.getElementById("paddressl1");
    var addregx=/([0-9]{1,3})([0-9]{1,3})/
    if(padd1.value.trim()==""){
        document.getElementById("paddress1").style.visibility="visible";
        padd1.style.border="solid 2px red";
        

    }
    else if(addregx.test(padd1.value))
    {
        document.getElementById("pddress1").innerHTML="Valid";

    }
    else
    {
            

            document.getElementById("paddress1").innerHTML="InValid";
            padd1.style.border="solid 2px red";                
            document.getElementById("paddress1").style.visibility="visible";

    }
    //address2
    var padd2=document.getElementById("paddressl2");
    var paddregx2=/([a-zA-z0-9].)/;
    if(padd2.value.trim()==""){
        document.getElementById("paddress2").style.visibility="visible";
        padd2.style.border="solid 2px red";
        

    }
    else if(paddregx2.test(padd2.value))
    {
        document.getElementById("paddress2").innerHTML="Valid";

    }
    else
    {
            

            document.getElementById("paddress2").innerHTML="InValid";
            padd2.style.border="solid 2px red";                
            document.getElementById("paddress2").style.visibility="visible";

    }
    //city
    var pcity1=document.getElementById("pcity");
    var cityregx=/[a-zA-z]/;
    if(pcity1.value.trim()==""){
        document.getElementById("pc1").style.visibility="visible";
        pcity1.style.border="solid 2px red";
        

    }
    else if(cityregx.test(pcity1.value))
    {
        document.getElementById("pc1").innerHTML="Valid";

    }
    else
    {
            

            document.getElementById("pc1").innerHTML="InValid";
            pcity1.style.border="solid 2px red";                
            document.getElementById("pc1").style.visibility="visible";

    }
    //zipcode
    var pcode1=document.getElementById("pcode");
    var coderegx=/^[6-9]\d{6}$/;
    if(pcode1.value.trim()==""){
        document.getElementById("pzip code").style.visibility="visible";
        pcode1.style.border="solid 2px red";
        

    }
    else if(cityregx.test(code1.value))
    {
        document.getElementById("pzip code").innerHTML="Valid";

    }
    else
    {
            

            document.getElementById("pzip code").innerHTML="InValid";
            pcode1.style.border="solid 2px red";                
            document.getElementById("pzip code").style.visibility="visible";

    }


}
var File=document.getElementById("file");
if(File.value==true){
    document.getElementById("f1").innerHTML="sucess";
}
else{
    File.style.border="solid 2px red"; 
    document.getElementById(f1).style.visibility="visible";
}
}