function inscrit(){
  var details = document.getElementById('details');
  var form = document.querySelector(".cardForm");

  details.style.display = "none";
  form.style.display = 'block';
}



var emailV, nameV, phoneV, UrlV, sexeV, dateV, imagesV;

function readFom() {
  emailV = document.getElementById("email").value;
  nameV = document.getElementById("name").value;
  phoneV = document.getElementById("phone").value;
  nV = document.getElementById("Niv").value;
  dateV = document.getElementById("date").value;
  sexeV = document.getElementById("sexe").value;
  adressV = document.getElementById("image").value;
  refV = document.getElementById("Ref").value;
  Nmref = document.getElementById("ER").value;
  msg = document.getElementById("msg");
  console.log(emailV, nameV, phoneV, nV, sexeV, dateV, adressV, refV);
}
document.getElementById("reference").style.display = "none";
function select(){
  readFom();
  if(refV == "ED"){
    document.getElementById("reference").style.display = "block";
  }else{
    document.getElementById("reference").style.display = "none";
  }

}

//-----------------------------inserer data to firebase-----------------------//
document.getElementById("insert").onclick = function () {
  readFom();

  if (nameV == ""){
    msg.textContent = "Antre non ou";
  }else if(emailV == ""){
    msg.textContent = "Antre Email ou";
    msg.style.color = 'red';
  }else if(phoneV == ""){
    msg.textContent = "Antre Nimewo ou";
     msg.style.color = 'red';
  }else if(adressV == ""){
     msg.style.color = 'red';
    msg.textContent = "Antre Adress ou";
  }else if(dateV == ""){
     msg.style.color = 'red';
    msg.textContent = "Antre Dat nesans ou";
  }else if(sexeV == ""){
     msg.style.color = 'red';
    msg.textContent = "sleksyone seks ou";
  }else if(nV == ""){
     msg.style.color = 'red';
    msg.textContent = "Selecksyone nivo ou";
  }else if(refV == ""){
     msg.style.color = 'red';
    msg.textContent = "seleksyone yon referans ou";
  }else{
     firebase.database().ref('Kals Debitan A1/' + nameV).set({
      ANAME: nameV,
      Email: emailV,
      Number: phoneV,
      Adresse: adressV,
      Date: dateV,
      Sexe: sexeV,
      Niveau: nV,
      Ref : refV + " / " + Nmref
    });
  alert("Data Inserted");
  document.getElementById("email").value = "";
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("image").value = "";
  document.getElementById("sexe").value = "";
  document.getElementById("date").value = "";
  document.getElementById("Niv").value = "";
  document.getElementById("ER").value ="";
  //window.location.reload();
  }
  
};



   /* 
      
      Social Share Links:
      
      WhatsApp:
      https://wa.me/?text=[post-title] [post-url]
      
      Facebook:
      https://www.facebook.com/sharer.php?u=[post-url]
      
      Twitter:
      https://twitter.com/share?url=[post-url]&text=[post-title]
      
      Pinterest:
      https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]
      
      LinkedIn:
      https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]
      
      */
      
      const facebookBtn = document.querySelector(".facebook-btn");
      const twitterBtn = document.querySelector(".twitter-btn");
      const whatsappBtn = document.querySelector(".whatsapp-btn");
      const h1 = document.getElementById('h1');
      const h2 = document.getElementById('h2');
      const h3 = document.getElementById('h3');
      var message = document.getElementById('ul');
      
      function init() {
      
      let postUrl = encodeURI(document.location.href);
      let postTitle = encodeURI(document.getElementById("h1").textContent);
      let sousTitle = encodeURI(document.getElementById("h2").textContent);
      let tTitle = encodeURI(document.getElementById("h3").textContent);
      
      
      facebookBtn.setAttribute(
      "href",
      `https://www.facebook.com/sharer.php?u=${postTitle} ${sousTitle} ${tTitle} ${postUrl}`
      );
      
      twitterBtn.setAttribute(
      "href",
      `https://twitter.com/share?url=${postTitle} ${sousTitle} ${tTitle} ${postUrl}`
      );
      
      
      whatsappBtn.setAttribute(
      "href",
      `https://wa.me/?text=${postTitle} ${sousTitle} ${tTitle} ${postUrl}`
      );
      }
      init();