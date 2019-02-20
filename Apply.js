function Apply(num,UID, Jobtitle,empcode, company) {
    var x = this.findIndex;
    console.log("Number " + num);
    // console.log(this);
    var JobID = document.getElementsByClassName("JobID")[num - 1].innerHTML;
    var JobID2 = JobID.slice(6);
    console.log(JobID2);


    console.log(JobID);
//console.log(x);

    console.log(localStorage.getItem("userid"));

     writeApplication(JobID2, UID,Jobtitle,empcode,company);

}


function writeApplication(JobID2,uid,Jobtitle,EmpID,company) {
    var Application={
            Job:JobID2,
            Applicant:uid,
            Status:"Pending",
            InterView:"Pending",
            Jobtitle:Jobtitle,
            EmpID:EmpID,
            Company:company
    }


    firebase.database().ref("Applications/" ).push(Application);
}