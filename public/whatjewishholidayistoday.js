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
	document.write("Seventeenth of Tammuz");
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

else if (today === "10/09/2014") {
	document.write("Sukkot");
}

else if (today === "10/16/2014") {
	document.write("Shemini Atzeret");
}

else if (today === "10/17/2014") {
	document.write("Simchat Torah");
}

else if (today === "12/16/2014") {
	document.write("Chanukkah");
}

else if (today === "12/17/2014") {
	document.write("Chanukkah");
}

else if (today === "12/18/2014") {
	document.write("Chanukkah");
}

else if (today === "12/19/2014") {
	document.write("Chanukkah");
}

else if (today === "12/20/2014") {
	document.write("Chanukkah");
}

else if (today === "12/21/2014") {
	document.write("Chanukkah");
}

else if (today === "12/22/2014") {
	document.write("Chanukkah");
}

else if (today === "12/23/2014") {
	document.write("Chanukkah");
}

else if (today === "12/24/2014") {
	document.write("Chanukkah");
}

else {
	document.write("Ein Od");
}



