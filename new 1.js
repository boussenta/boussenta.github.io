// La fonction du bouton pour affichager la page du film :
function myFunction(i) {
    var fenetre = window.open("la_page_film.html");
    fenetre.document.write( `
<html lang="en">
<head>
	<title>${filmj.filmjs[i].titre_film}</title>
    <link rel="stylesheet" href="style.css" />
</head>
<body class="body2">
    <h2>La page du film : ${filmj.filmjs[i].titre_film}</h2>
    <div class="myDiv2" >
    <table>
    <tr>
    <td>
        <img class="image2" src = ${filmj.filmjs[i].image_film}>
    </td>
    <td>
        <div class="text2">
            <strong>Le titre du film : <u>${filmj.filmjs[i].titre_film}</strong></u> <br/>
            <strong>Le genre du film : </strong>${filmj.filmjs[i].genre} <br/>
            <strong>La durée de film : </strong>${filmj.filmjs[i].duree} <br/>
            <strong>La date de sortie : </strong>${filmj.filmjs[i].date_sortie}<br/>
            <strong class="note2">La note des utilisateurs google : ${filmj.filmjs[i].note_google} </strong>
        </div>
    </td>
    </tr>
    </table>
        <div class="synopsis"> <strong>Le synopsis du film : </strong> <br/> ${filmj.filmjs[i].synopsis} <br/><br/>
        </div>

        <iframe width="560" height="315" src=${filmj.filmjs[i].video_film_href}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </div>
</body>
    <script src="new 1.js"></script>
</html>
`);
}

// decouper la liste des film en 54 films :
var numpage = 0;
function pagesuivante(){
    numpage += 1;
    if (numpage < filmj.filmjs.length/54){
        document.getElementById("demo").innerHTML = content.slice(54*numpage, 54*numpage+54);
        document.getElementById("NumPage").innerHTML = "Page : " + (numpage+1);
        document.getElementById("NumPage1").innerHTML = "Page : " + (numpage+1);
    }else{
        numpage -= 1;
    }
};
function pageprecedente(){
    numpage -= 1;
    if (numpage >= 0){
        document.getElementById("demo").innerHTML = content.slice(54*numpage, 54*numpage+54);
        document.getElementById("NumPage").innerHTML = "Page : " + (numpage+1);
        document.getElementById("NumPage1").innerHTML = "Page : " + (numpage+1);
    }else{
        numpage += 1;
    }
};

// Afficher la page index :
var content=[];
for(var i=0; i<filmj.filmjs.length; i++){
    content[i] = `
            <button class="myDiv" onclick="myFunction(${i})">
                <img class="image" src = ${filmj.filmjs[i].image_film}>
                <div class="text">
                    <u><strong>${filmj.filmjs[i].titre_film}</strong></u> <br/>
                    <strong class="note">Note google : ${filmj.filmjs[i].note_google} </strong> <br/>
                    <strong>${[i]}</strong>
                </div>
            </button>
        `;
        }
document.getElementById("demo").innerHTML = content.slice(0, 54);
document.getElementById("NumPage").innerHTML = "Page : " + (numpage+1);
document.getElementById("NumPage1").innerHTML = "Page : " + (numpage+1);


// trier les films croissant :
function croissant(){
    numpage = 0;
    content=[];
    filmj.filmjs.sort(function(a, b){return a.note_google.localeCompare(b.note_google)});
    for(var i=0; i<filmj.filmjs.length; i++){
        content[i] = `
        <button class="myDiv" onclick="myFunction(${i})">
            <img class="image" src = ${filmj.filmjs[i].image_film}>
            <div class="text">
                <u><strong>${filmj.filmjs[i].titre_film}</strong></u> <br/>
                <strong class="note">Note google : ${filmj.filmjs[i].note_google} </strong> <br/>
                <strong>${filmj.filmjs[i].date_sortie}</strong>
            </div>
        </button>
    `;}
    document.getElementById("demo").innerHTML = content.slice(0, 54);
    document.getElementById("NumPage").innerHTML = "Page : " + (numpage+1);
    document.getElementById("NumPage1").innerHTML = "Page : " + (numpage+1);
};

// trier les films décroissant :
function décroissant(){
    numpage = 0;
    content=[];
    filmj.filmjs.sort(function(a, b){return b.note_google.localeCompare(a.note_google)});
    for(var i=0; i<filmj.filmjs.length; i++){
        content[i] = `
        <button class="myDiv" onclick="myFunction(${i})">
            <img class="image" src = ${filmj.filmjs[i].image_film}>
            <div class="text">
                <u><strong>${filmj.filmjs[i].titre_film}</strong></u> <br/>
                <strong class="note">Note google : ${filmj.filmjs[i].note_google} </strong> <br/>
                <strong>${filmj.filmjs[i].date_sortie}</strong>
            </div>
        </button>
    `;
        }
    document.getElementById("demo").innerHTML = content.slice(0, 54);
    document.getElementById("NumPage").innerHTML = "Page : " + (numpage+1);
    document.getElementById("NumPage1").innerHTML = "Page : " + (numpage+1);
};

// trier les films parnom A -> z :
function parnomA(){
    numpage = 0;
    content=[];
    filmj.filmjs.sort(function(a, b){return a.titre_film.localeCompare(b.titre_film)});
    for(var i=0; i<filmj.filmjs.length; i++){
        content[i] = `
        <button class="myDiv" onclick="myFunction(${i})">
            <img class="image" src = ${filmj.filmjs[i].image_film}>
            <div class="text">
                <u><strong>${filmj.filmjs[i].titre_film}</strong></u> <br/>
                <strong class="note">Note google : ${filmj.filmjs[i].note_google} </strong> <br/>
                <strong>${filmj.filmjs[i].date_sortie}</strong>
            </div>
        </button>
    `;
        }
    document.getElementById("demo").innerHTML = content.slice(0, 54);
    document.getElementById("NumPage").innerHTML = "Page : " + (numpage+1);
    document.getElementById("NumPage1").innerHTML = "Page : " + (numpage+1);
};

// trier les films parnom Z -> A :
function parnomZ(){
    numpage = 0;
    content=[];
    filmj.filmjs.sort(function(a, b){return b.titre_film.localeCompare(a.titre_film)});
    for(var i=0; i<filmj.filmjs.length; i++){
        content[i] = `
        <button class="myDiv" onclick="myFunction(${i})">
            <img class="image" src = ${filmj.filmjs[i].image_film}>
            <div class="text">
                <u><strong>${filmj.filmjs[i].titre_film}</strong></u> <br/>
                <strong class="note">Note google : ${filmj.filmjs[i].note_google} </strong> <br/>
                <strong>${filmj.filmjs[i].date_sortie}</strong>
            </div>
        </button>
    `;
        }
    document.getElementById("demo").innerHTML = content.slice(0, 54);
    document.getElementById("NumPage").innerHTML = "Page : " + (numpage+1);
    document.getElementById("NumPage1").innerHTML = "Page : " + (numpage+1);
};
