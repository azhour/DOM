

// Exercice 1 : changer le BG d'un p en cliquant sur un bouton
 var colorText= document.getElementById("buttonColor");
      colorText.addEventListener("click", function(){

        document.getElementById("textColor").style.backgroundColor = "red";
      });



  // Exercice 2 :
  // Ecrivez un programme qui permet, lors du clic sur le bouton, d’afficher dans le
  // paragraphe tous les attributs du lien.

  var attributLink = document.getElementById('buttonAttribut');
  attributLink.addEventListener("click", function() {
    var attribut2 =  document.getElementById("google").attributes;
    // console.log(attribut2);

    for (var i = 0; i < attribut2.length; i++) {

      document.getElementById("textAttribut").innerHTML += attribut2[i].name;

    };
  });


// Exercice 3 :

function survol(element) {
  element.innerHTML = "Bienvenue";
  element.style.backgroundColor = "white";
}

function exit(element){
  element.innerHTML = "Survolez moi";
  element.style.backgroundColor = "lightgrey";
}

// Exercice 4 :
var buttonDate2 = document.getElementById("buttonDate");
var dateP = document.getElementById("demo");

buttonDate2.onclick = function () {

  dateP.innerHTML = Date();
}


// Exercice 5:
// Créez un programme qui permet d’afficher le temps passé sur la page, ainsi que
// l’heure actuelle qui défle

var timer = setInterval(displayDate2,1000);


function displayDate2() {
  document.getElementById("Time").innerHTML = Date();

}



// Exercice 6:
// Ecrivez un programme JavaScript qui permet lors d'un clic sur un bouton de
// changer sa couleur 3 fois, pas plus
var colorDiv2 = document.getElementById("colorDiv");
var color = ["red", "blue", "black"];
var clickNumber = 0;

colorDiv2.onclick = function () {
    if (clickNumber < 3) {
      clickNumber++;
      var colorChoice = color[Math.floor(Math.random() * color.length)];

      colorDiv2.style.backgroundColor = colorChoice;
      colorDiv2.innerHTML = "Vous avez cliquez :" + clickNumber + "fois"
    }
}



 // Exercice 7 :




  var arrayTab = document.getElementById("tableau"); // display array
  var AddRow2 = document.getElementById("AddRow"); // display button


 AddRow2.onclick = function () {
   var lines = arrayTab.insertRow(-1);//add lines
   var column = lines.insertCell(0);//add cells
   var clickName = 2; // number of click
    clickName++;
   if (clickName < 10) {

     column.innerHTML = "Ligne" + clickName;

     var column2 = lines.insertCell(1);
     column2.innerHTML = "Ligne" + clickName;
   }

 }

 // Exercice 8:

//  Exo 8
// Ecrivez un programme JavaScript qui permet de créer ces éléments et de les ajouter a
// notre page index.html
// <div>
// <a href="#" target="_blank">
// <img src="img/img1.jpg" alt="image 1">
// <p>description de l'image</p>
// </a>
// </div>

var divE = document.createElement("div"); // create div

var links = document.createElement("a"); // create <a>
var attr = document.createAttribute("href"); // first attribute of a
   attr.value = "#"; // value of href     links.href = '#';
var attr2 = document.createAttribute("target"); // second attribute of a
      attr2.value = "_blank"; // value of target
   links.setAttributeNode(attr); // display first attribute in a
   links.setAttributeNode(attr2); // display second attribute in a


  var newImg = document.createElement("img");
  newImg.src = "img/img1.jpg";
  newImg.alt = "image 1";

var para = document.createElement("p");                       // Create a <p> node
var t = document.createTextNode("Description de l'image");      // Create a text node

divE.appendChild(links); // display a in div
links.appendChild(newImg);  // display picture in links
links.appendChild(para); // display text in paragraph
para.appendChild(t);

var currentDiv = document.getElementById("exos");
  document.body.insertBefore(divE, currentDiv);

  // Exercice 9:
//   Créez 3 balises <img> avec la même classe, mais un id unique pour chacune.
// Ecrivez un programme qui permet de stocker dans un tableau l’id de l’image sur laquelle
// vous avez cliqué.
// Si vous avez déja cliqué sur l’image, vous ne devez pas pouvoir recliquer dessus. Une
// fois que vous avez cliqué sur les 3 images, elles disparaissent et un message
// « Félicitations, vous avez cliqué sur les 3 images. Voici leurs id : (lister les id que vous
// avez stocké dans le tableau) . »

var img1 = document.getElementById("coffe");
var img2 = document.getElementById("coffe2");
var img3 = document.getElementById("coffe3");
var texte = document.getElementById("paraT");

var tableP = new Array();

img1.onclick = function () {
  img1.style.display = "none";
  texte.innerHTML = "Félicitations, vous avez cliqué sur les 3 images";
}

img2.onclick = function () {
  img2.style.display = "none";
  img2.Id = tableP;
}

img3.onclick = function () {
  img3.style.display = "none";
}





//Exercice 10:
// Copiez le code suivant :
// <div> voici ma div </div>
// <button> cliquer ici </button>
// Créez un programme JavaScript qui, au clic, permet de changer le contenu de la div en
// « le contenu a changé » , mais ça doit s’exécuter au bout de 2 secondes

var divContain = document.getElementById("main");
var buttonDiv = document.getElementById('buttonDiv');

buttonDiv.onclick = function () {
  ExecuteCode()
};

function ExecuteCode() {
divContain.innerHTML = "le contenu a changé";
var test = setTimeout(ExecuteCode, 2000);

}
