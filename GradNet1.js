
function post(){
	
	var compname =document.getElementById("cname").value;
	var jobtitle =document.getElementById("jtitle").value;
	var jobdes =document.getElementById("subject").value;
	var city =document.getElementById("city").value;
	var jobtype =document.getElementById("jtype").value;
	var salary=document.getElementById("salary").value;
	var experience =document.getElementById("exp").value;
	var lic =document.getElementById("licence").value;
	var edulevel =document.getElementById("elevel").value;
	var languages =document.getElementById("language").value;
	
	
	
	var userId = firebase.auth().currentUser.uid;
	
	console.log("************",userId);
	writeJobData(userId,"Jobs",compname,jobtitle,jobdes,city,jobtype,salary,experience,lic,edulevel,languages);
}



function writeJobData(uid,jo,ce,je,js,cy,jpe,sy,ee,lic,el,ls){
	
	var Job={
		Jobs:jo,
		compname:ce,
		jobtitle:je,
		jobdes:js,
		City:cy,
		jobtype:jpe,
		salary:sy,
		experience:ee,
		lic:lic,
		edulevel:el,
		Languages:ls,
	}
	Job.employer=uid;
	  document.getElementById("menu2").innerHTML = Job[Object.keys(Job)[0]] + '/' + Job[Object.keys(Job)[1]];
	 //var newJobKey = firebase.database().ref().child(uid).push().key;
	   firebase.database().ref("Jobs/" ).push(Job);
}