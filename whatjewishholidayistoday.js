var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd;
} 

if(mm<10) {
    mm='0'+mm;
} 

today = mm+'/'+dd+'/'+yyyy;

if (today === "06/04/2014") {
	document.write("Shavu'ot!");
}

else if (today === "06/05/2014") {
	document.write("Shavu'ot!");
}