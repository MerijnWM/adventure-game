var lvlTitle = document.getElementById('lvltitle');
var lvlOptions = document.getElementById("lvloptions");
var lvlImg = document.getElementById("lvlimg");
var lvlText = document.getElementById("lvltext");
var lvlOption1 = document.createElement("li");
var lvlOption2 = document.createElement("li");
var lvlOption3 = document.createElement("li");
var lvl2Key = document.createElement("img");
var lvlSection1 = document.getElementById("lvlsection1");
var key = false;

function onloadGame() {

	lvlTitle.innerHTML = "Escape the cops";	
	lvlOption1.innerHTML ="Start the game";
	lvlOption1.setAttribute("onclick","lvl1()");
	lvlOptions.appendChild(lvlOption1);
	lvlImg.setAttribute("src","./foto/0.jpg");
	lvlText.innerHTML = "Je bent een cocaine handelaar en wordt gezocht door de politie. Door een anonieme tip is de politie er achter gekomen waar je zit en hebben je omsingelt, jij moet proberen te ontsnappen. Veel succes!!";
	console.log(lvlTitle);
	key = false;
}

function lvl1() 
{
	lvlTitle.innerHTML = "De achtertuin";
	lvlOptions.appendChild(lvlOption1);
	lvlImg.src = "./foto/1.0.jpg";
	lvlText.innerHTML = "Je ben in de achtertuin van je huis en een van de mensen waar je mee bent krijgt door dat jullie omsingelt zijn door de politie. Wat doe je?";
	lvlOption1.innerHTML = "Binnen een plan bedenken om te ontsnappen";
	lvlOption2.innerHTML = "De battle met de politie aangaan";
	lvlOptions.appendChild(lvlOption2);
	lvlOption2.setAttribute("onclick","lvl1fallPad()");
	lvlOption1.setAttribute("onclick","lvl2()");
	console.log(lvlTitle);
}

function lvl1fallPad() 
{
	lvlTitle.innerHTML = "Battle met de politie";
 	lvlImg.src = "./foto/1.2.0.jpg";
 	lvlOption1.innerHTML = "C4 voor afleiding plaatsen";
 	lvlOption2.innerHTML = "Een auto van de politie proberen te stelen om te ontsnappen";
 	lvlText.innerHTML = "Jullie kiezen er voor om de battle met de poltie aan te gaan nu moeten jullie een plan verzinnen hoe jullie dat gaan doen.";
 	lvlOption1.setAttribute("onclick", "lvl1fallEnd1()");
 	lvlOption2.setAttribute("onclick", "lvl1fallEnd2()");
 	console.log(lvlTitle);
}

function lvl1fallEnd1()
{
	lvlImg.src = "./foto/1.2.1.jpg";	
	lvlText.innerHTML = "Je heb je zelf gekilt met c4";
	lvlOption1.innerHTML = "Restart";
	lvlOption1.setAttribute("onclick", "onloadGame()");
	lvlTitle.innerHTML = "Game Over";
	lvlOption2.parentNode.removeChild(lvlOption2);
	console.log(lvlTitle);		
}

function lvl1fallEnd2()
{
	lvlImg.src = "./foto/1.2.2.jpg";
	lvlText.innerHTML = "Je bent neergeschoten door de poltie terwel je naar de auto probeerde te gaan";
	lvlOption1.innerHTML = "Restart";
	lvlOption1.setAttribute("onclick", "onloadGame()");
	lvlTitle.innerHTML = "Game Over";
	lvlOption2.parentNode.removeChild(lvlOption2);
	console.log(lvlTitle);
}

function lvl2()
{
	lvlTitle.innerHTML = "Een plan bedenken";
	lvlText.innerHTML = "Je bent binnen en jullie bespreken jullie opties. Jullie komen op twee keuze uit maar kunnen niet beslissen welke het wordt. Jij moet dit beslissen, wat wordt het? ";
	lvlImg.src = "./foto/2.0.jpg";
	lvlOption1.innerHTML = "Via een geheime gang proberen te ontsnappen";
	lvlOption1.setAttribute("onclick", "lvl2fallPad()");
	lvlOption2.innerHTML = "Een telefoon zoeken om te bellen";
	lvlOptions.appendChild(lvlOption2);
	lvlOption2.setAttribute("onclick","lvl3()");
	lvlSection1.appendChild(lvl2Key);
	lvl2Key.parentNode.removeChild(lvl2Key);
	console.log(lvlTitle);	
}

function lvl2fallPad()
{
	lvlTitle.innerHTML = "De geheime gang";
	lvlSection1.appendChild(lvl2Key);
	lvl2Key.src = "./foto/key.png"
	lvl2Key.style.width = '30px';
	lvl2Key.style.position = 'absolute';
	lvl2Key.style.left = '220px';
	lvl2Key.style.top = '220px';
	lvl2Key.setAttribute("onclick", "heeftKey()");	
	lvlImg.src = "./foto/2.1.jpg";
	lvlText.innerHTML = "De gang is in gestort ga snel terug voordat je geen tijd meer hebt om te ontsnappen.";
	lvlOption1.innerHTML = "Terug";
	lvlOption1.setAttribute("onclick", "lvl2()");	
	lvlOption2.parentNode.removeChild(lvlOption2);	
	console.log(lvlTitle);
}

function heeftKey()
{
	key = true;
	lvl2Key.parentNode.removeChild(lvl2Key);
}

function lvl3()
{
	lvlTitle.innerHTML = "Een telefoontje plegen";
	lvlText.innerHTML = "Je heb een telefoon gevonden je kan er één keer mee bellen, wie ga je bellen? ";
	lvlImg.src = "./foto/3.0.jpg";
	lvlOption1.innerHTML = "Je beld een vriend voor een vlucht voertuig";
	lvlOption1.setAttribute("onclick", "lvl3fallPad()");
	lvlOption2.innerHTML = "Je beld de politie";
	lvlOptions.appendChild(lvlOption2);
	lvlOption2.setAttribute("onclick","lvl4()");
	console.log(lvlTitle);
}

function lvl3fallPad()
{
	lvlTitle.innerHTML = "Een vlucht voertuig kiezen";
	lvlText.innerHTML = "Je beld je vriend voor een vlucht voertuig, hij kan 3 verschillende voertuigen regelen maar je kan er maar 1 kiezen. Welke wordt het?";
	lvlImg.src = "./foto/3.1.0.jpg";
	lvlOption1.innerHTML = "Een heli";
	lvlOption1.setAttribute("onclick","lvl3fallEnd1()");
	lvlOption2.innerHTML = "Een auto";
	lvlOption2.setAttribute("onclick","lvl3fallEnd2()");
	lvlOption3.innerHTML = "Een motor";
	lvlOptions.appendChild(lvlOption3);
	lvlOption3.setAttribute("onclick","lvl3fallEnd3()");
	console.log(lvlTitle);
}

function lvl3fallEnd1()
{
	lvltitle.innerHTML = "Game Over";
	lvlImg.src = "./foto/3.1.1.jpg";
	lvlText.innerHTML = "Voordat jullie konden weg vliegen, is de heli neergeschoten door de politie.";
	lvlOption1.innerHTML = "Restart";
	lvlOption1.setAttribute("onclick", "onloadGame()");	
	lvlOption2.parentNode.removeChild(lvlOption2);
	lvlOption3.parentNode.removeChild(lvlOption3);
	console.log(lvlTitle);
}

function lvl3fallEnd2()
{
	lvlTitle.innerHTML = "Game Over";
	lvlImg.src = "./foto/3.1.2.jpg";
	lvlText.innerHTML = "Wanneer jullie de stad uit proberen te komen, komen jullie er achter dat elke uitgaan in de stad is afgesloten en worden jullie opgepakt omdat jullie nergens heen kunnen.";
	lvlOption1.innerHTML = "Restart";
	lvlOption1.setAttribute("onclick", "onloadGame()");	
	lvlOption2.parentNode.removeChild(lvlOption2);
	lvlOption3.parentNode.removeChild(lvlOption3);
	console.log(lvlTitle);
}

function lvl3fallEnd3()
{
	lvlTitle.innerHTML = "Game Over";
	lvlImg.src = "./foto/3.1.3.jpg";
	lvlText.innerHTML = "De rest keert zich tegen je omdat je maar één moter heb laten komen en vermoorden je. ";
	lvlOption1.innerHTML = "Restart";
	lvlOption1.setAttribute("onclick", "onloadGame()");	
	lvlOption2.parentNode.removeChild(lvlOption2);
	lvlOption3.parentNode.removeChild(lvlOption3);
	console.log(lvlTitle);
}

function lvl4()     
{          
	lvlTitle.innerHTML = "Bellen met de politie";                                              
	lvlText.innerHTML = "Je hebt de politie aan de lijn. Ze zijn van plan naar binnen te stormen en je op te pakken, dus je moet snel een keuze maken over wat je gaat zeggen. ";  
	lvlImg.src = "./foto/4.0.jpg";
	lvlOption1.innerHTML = "Je probeert ze om te kopen";
	lvlOption1.setAttribute("onclick", "lvl5()");
	lvlOption2.innerHTML = "Je berdeigd ze en hun families";	
	lvlOption2.setAttribute("onclick","lvl4fallPad()");	
	console.log(lvlTitle);
}

function lvl4fallPad()
{
	lvlTitle.innerHTML = "Game Over";
	lvlImg.src = "./foto/4.1.jpg";
	lvlText.innerHTML = "Ze zijn niet bang voor je en rushen naar binnen met de extra motivatie die ze hebben gekregen van je bereigingen. ";
	lvlOption1.innerHTML = "Restart";
	lvlOption1.setAttribute("onclick", "onloadGame()");	
	lvlOption2.parentNode.removeChild(lvlOption2);
	console.log(lvlTitle);
}

function lvl5()
{
	lvlTitle.innerHTML = "Onderhandelen met de politie";
	lvlText.innerHTML = "Ze zijn geintresseerd in onderhandelen over een bedrag voor jullie vrijlating en een auto om weg te komen. ";
	lvlImg.src = "./foto/5.0.jpg";
	lvlOption1.innerHTML = "Je stelt een bedrag van 30 miljoen voor, maar je bent van plan om nep geld te geven.";
	lvlOption1.setAttribute("onclick", "lvl6()");
	lvlOption2.innerHTML = "Je stelt een bedrag van 10 miljoen voor.";	
	lvlOption2.setAttribute("onclick","lvl5fallPad()");	
	console.log(lvlTitle);
}

function lvl5fallPad()
{
	lvlTitle.innerHTML = "Game Over";
	lvlImg.src = "./foto/5.1.jpg";
	lvlText.innerHTML = "Ze vinden het te weinig maar vertellen je het niet, waardoor jij denkt dat je veilig bent maar wanneer je naar buiten gaat wordt je opgepakt.";
	lvlOption1.innerHTML = "Restart";
	lvlOption1.setAttribute("onclick", "onloadGame()");	
	lvlOption2.parentNode.removeChild(lvlOption2);	
	console.log(lvlTitle);
}

function lvl6()
{
	lvlTitle.innerHTML = "Vluchten van de politie";
	lvlText.innerHTML = "De politie komt er achter dat jullie hun nep geld hebben gegeven en komen achter jullie aan. Gelukkig hebben jullie al een voorsprong.";
	lvlImg.src = "./foto/6.0.jpg";
	lvlOption1.innerHTML = "Jullie gaan naar het vliegveld waar een privé vliegtuig staat.";
	lvlOption1.setAttribute("onclick", "lvl6fallPad()");
	lvlOption2.innerHTML = "Jullie gaan naar een schuilplek en daar een tijdje schuilen. ";	
	lvlOption2.setAttribute("onclick","gameEnd()");	
	console.log(lvlTitle);
}

function lvl6fallPad()
{
	lvlTitle.innerHTML = "Op het vliegveld";
	lvlText.innerHTML = "De piloot van het vliegtuig heeft je verraden en heeft de politie gebeld. Jij komt hier achter, wat ga je doen?";
	lvlImg.src = "./foto/6.1.0.jpg";
	lvlOption1.innerHTML = "Je kilt de piloot en probeert snel weg te gaan voordat de politie er is.";
	lvlOption1.setAttribute("onclick", "lvl6fallEnd1()");
	lvlOption2.innerHTML = "Je gebruikt de piloot als gijzelaar.";	
	lvlOption2.setAttribute("onclick","lvl6fallEnd2()");
	console.log(lvlTitle);		
}

function lvl6fallEnd1()
{
	lvlTitle.innerHTML = "Game Over";
	lvlImg.src = "./foto/6.1.1.jpg";
	lvlText.innerHTML = "Jullie waren niet optijd en werden neergeschoten door de politie omdat je jullie niet stoppen.";
	lvlOption1.innerHTML = "Restart";
	lvlOption1.setAttribute("onclick", "onloadGame()");	
	lvlOption2.parentNode.removeChild(lvlOption2);	
	console.log(lvlTitle);
}

function lvl6fallEnd2()
{
	lvlTitle.innerHTML = "Game Over";
	lvlImg.src = "./foto/6.1.2.jpg";
	lvlText.innerHTML = "De politie maakt het niet uit dat je een gijzelaar hebt en rusht naar binnen, waar jij bij omkomt omdat je je verzette. ";
	lvlOption1.innerHTML = "Restart";
	lvlOption1.setAttribute("onclick", "onloadGame()");	
	lvlOption2.parentNode.removeChild(lvlOption2);
	console.log(lvlTitle);
}

function gameEnd()
{ 	
	if (key == true){
		lvlTitle.innerHTML = "Game Gewonnen";		
		lvlText.innerHTML = "Jullie zijn de politie ontsnapt en kunnen weer veder met jullie cocaine business.";
		lvlImg.src = "./foto/7.0.png";
		lvlOption1.innerHTML = "Restart";
		lvlOption1.setAttribute("onclick", "onloadGame()");			
		lvlOption2.parentNode.removeChild(lvlOption2);	
	} 
	else {
		alert("Je heb een sleutel nodig om hier heen te gaan.");
	}	
	console.log(lvlTitle);
}

