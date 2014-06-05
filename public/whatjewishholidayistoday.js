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

else if (today === "07/15/2014") {
	document.write("Fast of the 17th of Tammuz");
}

else if (today === "08/04/2014") {
	document.write("Fast of Tish'a B'Av");
}

else if (today === "08/05/2014") {
	document.write("Fast of Tish'a B'Av");
}

else if (today === "08/11/2014") {
	document.write("The 15th of Av");
}

else if (today === "09/24/2014") {
	document.write("Rosh Hashanah");
}

else if (today === "09/25/2014") {
	document.write("Rosh Hashanah");
}

else if (today === "09/26/2014") {
	document.write("Rosh Hashanah");
}

else if (today === "10/03/2014") {
	document.write("Yom Kippur");
}

else if (today === "10/04/2014") {
	document.write("Yom Kippur");
}

else {
	document.write("Lo");
}


