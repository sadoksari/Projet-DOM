
 
window.onload = function() {
  // document.getElementById("").focus();
}

// charger la liste des images des articles
var t = [ './images/pc-portable-lenovo.jpg', 
          './images/tablette.jpeg'         , 
          './images/PC_HP.jpeg'  
        ] ;
// constructeur des objets article
function article ( designation , qte_stk ,unite, prix_unit ,devise, chemin , description){
  this.designation   = designation ;
  this.qte_stock     = qte_stk     ;
  this.prix_unitaire = prix_unit   ;
  this.devise        = devise      ;
  this.chemin_image  = chemin      ;
  this.altImage      = designation    ;
  this.unite         = unite       ;
  this.desc          = description ;
  

}

// instanciation des articles
let art01 = new article( "Pc Portable Lenovo" ,10 ,"Pc", 1500 ,"TND" ,"./images/pc-portable-lenovo.jpg" ,
                          
                        "This is a wider card with supporting text below as a naturel lead-in to additional content." ) ;
console.log(art01) ;

let art02 = new article( "Pc Portable HP" ,30 ,"Pc", 1800 ,"TND","./images/PC_HP.jpeg" ,
"This is a wider card with supporting text below as a naturel lead-in to additional content." ) ;
console.log(art02) ;

let art03 = new article( "Tablette HP" ,12 ,"Tablette(s)" , "120.520" ,"TND",'./images/tablette.jpeg' ,
"This is a wider card with supporting text below as a naturel lead-in to additional content." ) ;
console.log(art03) ;

let art04 = new article( "Tablette HP" ,12 ,"Tablette(s)" , "120.520" ,"TND",'./images/tablette.jpeg' ,
"This is a wider card with supporting text below as a naturel lead-in to additional content." ) ;

console.log(art03) ;

// charger les article dans un vecteur
let listArt = [ art01 , art02 , art03 , art04] ;
const lineBreak = document.createElement('br') ;
// ramener la division d'affichage de la liste des articles
var divItems = document.getElementById("items") ;
var total =0 ;
let i = 0 ;
for ( i=0 ; i<listArt.length ; i++) {

    // pour chaque article on va creer une division de maniere dynamique
    var art = document.createElement("div") ; // nouvelle division pour 
    art.setAttribute("id", "art"+i) ; //ajouter l'attribut "id" à l'element (dans le css = div[id^="art"] )
       
    //creation de l'element  de l'image de l'article
    let image = document.createElement('IMG');
    image.src = listArt[i].chemin_image ;
    image.alt = listArt[i].designation  ;
    image.id  = "imgArt"+i ;
     
      //creation de l'element  pied d'image(pour les details qte achat, prix, qte en stock )
    let piedImage = document.createElement("div") ; // nouvelle division piedPage
    piedImage.setAttribute("id", "piedImage"+i) ; //ajouter la classe "piedImage" a l'elment
    let textpiedImage = document.createElement("div") ;
    textpiedImage.setAttribute("id","txtPiedImage"+i);
    //affiche le nom de l'article 
    let desArt = document.createElement("h3") ;
    desArt.setAttribute("id","desArt"+i)
    desArt.innerHTML += listArt[i].designation  ;

    textpiedImage.appendChild(desArt) ;

    //affiche la description de l'article 
    let descArt = document.createElement("p") ;
    descArt.setAttribute("id","descArt"+i)
    descArt.innerHTML = listArt[i].desc  ;

    textpiedImage.appendChild(descArt) ;

    //textpiedImage.appendChild(lineBreak) ;
          //affiher la quantité en stock
    textpiedImage.innerHTML += "Quantité en stock :"+listArt[i].qte_stock +" "+listArt[i].unite;
    //textpiedImage.appendChild(lineBreak) ;
          //afficher le prix unitaire de l'article
    textpiedImage.innerHTML += "<br> Prix unitaire: "+ listArt[i].prix_unitaire +" "+listArt[i].devise;
      

    //ajout du champ de saisie de la quantité a acheter
    var qteArt = document.createElement('input');
    setAttrElementQteArt(qteArt, i ) ;
    
    //creation de label pour le champs
    var labelQte = document.createElement("label");
    labelQte.setAttribute("id", "lab"+i) ;
    labelQte.setAttribute("for","qteArt"+i); 
    
  
    labelQte.innerHTML = "Quantité:&nbsp;&nbsp;";

    // creer le bouton (+)
    var boutonPlus = document.createElement("input");
    boutonPlus.setAttribute("type" , "button") ;
    boutonPlus.setAttribute("value" ,"+") ;
    boutonPlus.setAttribute("id", "button_p") ;
    boutonPlus.setAttribute("onclick",  "fqte('qteArt"+i+"','+','"+listArt[i].prix_unitaire+"' )");
     

    // creer le bouton (-)
    var boutonMoins = document.createElement("input");
    boutonMoins.setAttribute("type" , "button") ;
    boutonMoins.setAttribute("onclick", "fqte('qteArt"+i+"','-','"+listArt[i].prix_unitaire+"' )");
    boutonMoins.setAttribute("id", "button_m") ;
    boutonMoins.setAttribute("value" ,"-") ;
 
    //creation de l'element  de l'image de delete
    let imageDElete = document.createElement('IMG');
    imageDElete.src = "./images/delete.jpeg" ;
    imageDElete.alt = "Delete"  ;
    imageDElete.id  = "imgDelete"+i ;
    imageDElete.setAttribute("onclick", "deleteArt('qteArt"+i+"','"+listArt[i].prix_unitaire+"','art"+i+"' )");
   

    //creation de l'element  de l'image de jaime 0
    let imageJaime0 = document.createElement('IMG');
    imageJaime0.src = "./images/jaime0.png" ;
    imageJaime0.alt = "J'aime"  ;
    imageJaime0.id  = "imgAime"+i ;
    imageJaime0.setAttribute("onclick", "like(this)");



    //affecter l'element newlabel et qteArt a l'element divQte
    var divQte = document.createElement("div") ;
    divQte.setAttribute("id", "qte"+i) ;
    divQte.append( labelQte ,boutonPlus, qteArt , boutonMoins,imageDElete , imageJaime0 ) ;  
    
    piedImage.appendChild(textpiedImage);
    piedImage.append(divQte) ;         


    // affectation de l'image a la division
    art.appendChild(image) ;

    // affcher la quantité en stock de l'article
    art.appendChild(piedImage) ;    
     
    
    //affectation de la division à l'element 'items';
    divItems.appendChild(art) ;

    // affcher l'element des totaux
 //affecter l'element newlabel et qteArt a l'element divQte
 //alert(Number( listArt[i].prix_unitaire )+"=prix qte="+Number(document.getElementById("qteArt"+i).value))
   total += Number( listArt[i].prix_unitaire ) * Number(document.getElementById("qteArt"+i).value)  ;
   
}
document.getElementById("totaux").innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total : <b> <i>"+total +"</i></b>";
/***********************************************************/
/*****************************les fonctions  ***************/
/***********************************************************/

function setAttrElementQteArt(elem, i ) {
    
    elem.setAttribute("type"        , "text") ;
    elem.setAttribute("name"        , "qteCommande"+i) ;
    elem.setAttribute("id"          , "qteArt"+i) ;
    elem.setAttribute("value"       , 1   ) ;
    elem.setAttribute("maxlength"   , 2   ) ;
    elem.setAttribute("placeholder" , "qte") ;
    elem.setAttribute("readOnly"     , "true" );
    elem.setAttribute("keydown"     , "keyNumerique(elem)" ) ;
                                      

}

function fqte(elem, sens,prx ) { 
   if(document.getElementById(elem).value=="" ){
     document.getElementById(elem).value=0;
   }

   if(Number(document.getElementById(elem).value) == 1  && sens =="-"){
     document.getElementById(elem).value=1;

   }
  
  if(sens == "+" ) {
     document.getElementById(elem).value = Number(document.getElementById(elem).value) + 1 ;
     total += Number(prx ) ;
     document.getElementById("totaux").innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total : <b> <i>"+total +"</i></b>";
  
  }
  else if(sens == "-" && Number(document.getElementById(elem).value) > 1 ) {

     document.getElementById(elem).value = Number(document.getElementById(elem).value) - 1 ;
  
     total -= Number(prx ) ;
     document.getElementById("totaux").innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total : <b> <i>"+total +"</i></b>";

  }
}

/**************/
function deleteArt( elem, prx ,art) {
  if(confirm ("Etes vous sûr de vouloir supprimer cet article ?")==true){
    
    total -= Number(prx ) * Number(document.getElementById(elem).value);
    document.getElementById("totaux").innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total : <b> <i>"+total +"</i></b>";
    document.getElementById(art).remove();
    
   }
 
 }
 



function keyNumerique(elem){
   element.addEventListener("keydown", 
                            function(event) { 
                                    alert("ele="+elem) 
                                    if (Number(event.key)>=0 && Number(event.key)<=9) {
                                        element.value=0;
                                    }
                            });
}
function like(elem) {

  if(elem.src.indexOf("jaime0.png") != -1)  {
    elem.src="./images/jaime1.png" ;
  }
  else
    elem.src="./images/jaime0.png" ;


}

