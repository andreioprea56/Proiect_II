// Manipularea DOM-ului

//Creare element.
var info = document.getElementById("info");
var more = document.createElement("h6");
more.innerHTML = "Pentru mai multe informatii completati formularul de mai jos. ";
info.appendChild(more);


//Editare element.

var end = document.getElementById("end");
end.innerHTML = "ATM, Copyright &copy; 2018";

//Stergere element.
var lista = document.getElementById("lista");
var elem = document.createElement("li");
var textElem = document.createTextNode("MORE INFO");
elem.appendChild(textElem);
lista.appendChild(elem);
elem.remove();

//Adaugare eveniment onkeypress
//in input-ul nume nu se pot adauga cifre.

document.getElementById("nume").onkeypress=function(e){

  var e=window.event || e
  var keyunicode=e.charCode || e.keyCode
  //Accepta toate literele plus BACKSPACE si SPACE
  return (keyunicode>=65 && keyunicode<=122 || keyunicode==8 || keyunicode==32)? true : false
  }


//Prealuarea informatiilor din formular cu actiunea de tip Post

    function Preluare (){
    var nume = document.getElementById("nume").value;
    var mail  = document.getElementById("mail").value;
    var msj = document.getElementById("msg").value;
      
    if (nume && mail && msj){
    fetch('http://localhost:3000/contact', {
      method: 'post',
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: "user_name="+nume+ "&user_mail="+mail+ "&user_message="+msj
    })
    .then(function (data) {
      console.log('Succes!', data);
    
    })
    .catch(function (error) {
      console.log('Esec!', error);
    });
  //Stergerea informatiilor din  input-uri dupa ce a fost adaugata inregistrarea.
    document.forms["id_form"].reset();
    
  }
  del.disabled = true;
  upd.disabled = true;
    
  }

    //adaugare functionalitate pentru buton Send
    var buton = document.getElementById("btn");
    buton.addEventListener("click",Preluare);   
 


//Functionalitate formular : get, put, delete.


//metoda get pentru a lua informatiile pentru update
function cerere(){
  var nr = document.getElementById("id").value;
  if (nr)
  {
  var url = "http://localhost:3000/contact" + "/" + nr;
  fetch(url, {
      method: 'get'
      })
      .then(function(response) {

          response.json().then(function(data) {

         var nume = document.getElementById("nume");
         var email = document.getElementById("mail");
         var message = document.getElementById("msg");

         nume.value = data.user_name;
         email.value = data.user_mail;
         message.value = data.user_message;
        
            });
      });
  }
  //activare butoane update si delete  
  del.disabled = false;
  upd.disabled = false;
 
}


//metoda delete 
function stergere() {

  var nr = document.getElementById("id").value;
  if (nr)
  {
      var url = "http://localhost:3000/contact" + "/" + nr;
      fetch(url, {
  method: 'delete'
  })

  .then(function (data) {
  console.log('Succes!', data);

  })
  .catch(function (error) {
  console.log('Esec!', error);
  });
  }

  //Stergerea informatiilor din  input-uri dupa ce a fost stearsa inregistrarea.
  document.forms["id_form"].reset();

  del.disabled = true;
  upd.disabled = true; 
}


//metoda update
function update(){

  var nume = document.getElementById("nume").value;
  var email  = document.getElementById("mail").value;
  var message  = document.getElementById("msg").value;

  var nr = document.getElementById("id").value;
  var url = "http://localhost:3000/contact" + "/" + nr;


  fetch(url, {
      method: 'put',
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: "user_name="+nume+ "&user_mail="+email +"&user_message="+message
    
  })

  .then(function (data) {
      console.log('Succes!', data);
  })

  .catch(function (error) {
      console.log('Esec!', error);
  })
  //Stergerea informatiilor din  input-uri dupa ce s-a updatat inregistrarea.
  document.forms["id_form"].reset();

  upd.disabled = true;
  del.disabled = true;
}


//adaugare functionalitate pe butoane.
//adaugare evenimente pe click.

var req = document.getElementById("request");
req.addEventListener("click",cerere);

var upd = document.getElementById("upd");
upd.addEventListener("click",update);

var del = document.getElementById("del");
del.addEventListener("click",stergere);