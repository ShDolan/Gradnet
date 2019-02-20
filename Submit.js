function accept(id){
    document.getElementById("Interviews").style.display='block';
    var x=  document.getElementById(id).value;
    console.log(x);
    //   var x= document.getElementById("TITLE").innerHTML= Name



}




function  submit(){
    var status="Accepted" ;
    var date= document.getElementById("date-interview").value;
    var message=  document.getElementById("date-interview").value;
    var x=   document.getElementById("Appid").value;
    writeUserData(x,date, message, status);
    alert("Applicant has been notified.")   ;
    document.getElementById('Interviews').style.display='none'
}