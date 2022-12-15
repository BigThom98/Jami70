
function showHello(str) {
	var request = new XMLHttpRequest(); //questo funziona sui non windows
  //var xmlwind = new ActiveXObject();   per internet explorer bisona utilizzare questa
  
  request.onreadystatechange = function(){
	if(this.readyState == 4 && this.status == 200){ //Richiesta inviata ed elaborata dal server 
		console.log(request.responseText)
		document.getElementById("ServerResponse").innerHTML = request.responseText;
	}
};
  
  
  request.open("GET", "saluto?user=" + str, true); //Setto la richiesta verso il server
  request.send(); //La invio 
}