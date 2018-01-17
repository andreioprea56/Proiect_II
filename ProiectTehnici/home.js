//Functie care actioneaza atunci cand apasam pe click pe imaginea de logo din home.html
//La fiecare click, poza se va schimba.

var logo = document.getElementById("logo");
logo.addEventListener("click",changeLogo);
logo.nrclick = 0;

function changeLogo(){
   logo.nrclick += 1;

   if(logo.nrclick %2==0)
   {
    logo.src="https://orig00.deviantart.net/0d7d/f/2010/248/2/9/phone_case_logo_by_blackp-d2y2i6l.png";
    logo.alt="Logo";
   }
   else
   {
    logo.src="https://i.ytimg.com/vi/klaBDQUu4As/maxresdefault.jpg"
    logo.alt ="logo2";
   }
   
}

//Sectiunea despre accesorii va fi adaugata din baza de date db.json.

fetch('http://localhost:3000/info',
{
    method:'get'
})
.then(function(response) {


    response.json().then(function(data) {
        console.log(data);

//Creare dinamica a informatiilor
   var box = document.getElementsByClassName("box");
   for (var i = 0 ;i< data.length; i++ )
{
 
//Denumire
   var nume = document.createElement("h2");
   nume.innerHTML = data[i].name;
   box[i%box.length].appendChild(nume);
       
//Poza
   var poza = document.createElement("img");
   poza.src= data[i].img;
   box[i%box.length].appendChild(poza);

//Informatii
   var info = document.createElement("p");
   info.innerHTML = data[i].about;
   box[i%box.length].appendChild(info);

}  
      });
});
 