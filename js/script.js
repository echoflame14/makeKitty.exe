var catName;
var catAge;
var catColor;
var catGender;
function makeKitty(){
  var cat = {}
  var names = ["Lucky", "Tigger", "Oreo"];
  var colors = ["white ","black ","orange ","tabby "];
  var ages = ["a young ", "an old "];
  var genders = ["male.", "female."];

  function getName(){
    n = Math.random();
    if (n > 0.66) {
      n = names[0];
    }
    if(n > 0.33 && n < 0.66) {
      n = names[1];
    }
    if(n < 0.33){
      n = names[2];
    }
    return n;
  }
  function getColor(){
    c = Math.random();
    if(c > 0.75) {
      c = colors[3];
    }
    if(c > 0.5 && c < 0.75){
      c = colors[2];
    }
    if(c > 0.25 && c < 0.5){
      c = colors[1];
    }
    if(c < 0.25) {
      c = colors[0];
    }
    return c;
  }
  function getAge(){
    var a = Math.random();
    if(a >= .50){
      a = ages[0];
    }
    if(a < .50){
      a = ages[1];
    }
    return a;
  }
  function getGender(){
    var g = Math.random();
    if(g >= .50){
      g = genders[0];
    }
    if(g < .50){
      g = genders[1];
    }
    return g;
  }

   catName = getName();
   catColor = getColor();
   catAge = getAge();
   catGender = getGender();
	function getPronoun(){
	   if (catGender === "male.") {
			p = "He ";
	   }
		else {
			p = "She ";
		}
		return p;
	}
	catPronoun = getPronoun();
  	document.getElementById("results").style.visibility = "visible";
	document.getElementById("name").innerHTML = catName;
	document.getElementById("age").innerHTML = catAge;
	document.getElementById("gender").innerHTML = catGender;
	document.getElementById("color").innerHTML = catColor;
	document.getElementById("pronoun").innerHTML = catPronoun;

	//setting sprite image
	if (catAge === "a young " && catGender === "female.") {
		switch (catColor) {
			case "white ":
				document.getElementById('sprite').style.background = "url(../img/yWF.jpg)"
				break;
			case "black ":
				document.getElementById('sprite').style.background = "url(../img/yBF.jpg)"
				break;
			case "orange ":
				document.getElementById('sprite').style.background = "url(../img/yOF.jpg)"
				break;
			case "tabby ":
				document.getElementById('sprite').style.background = "url(../img/yTF.jpg)"
				break;
			default:
		}
	}
	if (catAge === "an old " && catGender === "female.") {
		switch (catColor) {
			case "white ":
				document.getElementById('sprite').style.background = "url(../img/oWF.jpg)"
				break;
			case "black ":
				document.getElementById('sprite').style.background = "url(../img/oBF.jpg)"
				break;
			case "orange ":
				document.getElementById('sprite').style.background = "url(../img/oOF.jpg)"
				break;
			case "tabby ":
				document.getElementById('sprite').style.background = "url(../img/oTF.jpg)"
				break;
			default:
		}
	}
	if (catAge === "a young " && catGender === "male.") {
		switch (catColor) {
			case "white ":
				document.getElementById('sprite').style.background = "url(../img/yWM.jpg)"
				break;
			case "black ":
				document.getElementById('sprite').style.background = "url(../img/yBM.jpg)"
				break;
			case "orange ":
				document.getElementById('sprite').style.background = "url(../img/yOM.jpg)"
				break;
			case "tabby ":
				document.getElementById('sprite').style.background = "url(../img/yTM.jpg)"
				break;
			default:
		}
	}
	if (catAge === "an old " && catGender === "male.") {
		switch (catColor) {
			case "white ":
				document.getElementById('sprite').style.background = "url(../img/oWM.jpg)"
				break;
			case "black ":
				document.getElementById('sprite').style.background = "url(../img/oBM.jpg)"
				break;
			case "orange ":
				document.getElementById('sprite').style.background = "url(../img/oOM.jpg)"
				break;
			case "tabby ":
				document.getElementById('sprite').style.background = "url(../img/oTM.jpg)"
				break;
			default:
		}
	}
}
