function zillowSearch(city, state) {
     var count = 0;
	 if (city.indexOf('>') > -1) {
		 alert("> found inside your input");
		 count++;
	 }
	 if (city.indexOf('<') > -1) {
		 alert("< found inside your input");
		 count++;
	 }
	 if (city.indexOf('/') > -1) {
		 alert("/ found inside your input");
		 count++;
	 }
	 if (city.indexOf(':') > -1) {
		 alert(": found inside your input");
		 count++;
	 }
	 if (count == 0) {
		window.open("https://www.zillow.com/"+city+"-"+state+"/rent-houses/");
	 }
}
