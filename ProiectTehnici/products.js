//  Adaugarea produselor se va face din baza de date 


fetch('http://localhost:3000/products',
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

//Poza
   var poza = document.createElement("img");
   poza.src= data[i].img;
   box[i%box.length].appendChild(poza);



//Informatii ( pret si descriere )
   var price = document.createElement("p");
   price.innerHTML = data[i].price;
   box[i%box.length].appendChild(price);

   var info = document.createElement("p");
   info.innerHTML = data[i].about;
   box[i%box.length].appendChild(info);
} 

      });
});
