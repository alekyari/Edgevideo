import { GET, ratingPOST, sessionPost, loginPost, tokenGen,sessionDelete } from "./api.js";
import {qS, qSA, cE, modalGen, tvCardGen, tvSpecsGen, popularEl, wrapperEl, wrapperImgEl, hero, tvSpecsEl, tendinaLogin, tendinaLogout, userToggle, modalEl, modalOverlay, arrow,
  username, password, logButton, loginForm, logoutForm, starWrapper, rate1, rate2, rate3, rate4, rate5, navUser, userIcon, selMobMenu, mobMenu } from "./utils.js";





  // tendina menu mobile
  selMobMenu.addEventListener("click",() => {
    mobMenu.classList.toggle("show_cont_mobile")});
  
  
  // tendina menu mobile

const images = [
  "https://image.tmdb.org/t/p/original/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
  "https://image.tmdb.org/t/p/original/kDZhUEwqWrRkG6W2Y0WIYTstb0K.jpg",
  "https://image.tmdb.org/t/p/w1280/17yQZnnodzS1ZrKcpqHnQV8eQGN.jpg",
];
let imgCounter = 0;

wrapperEl.className = "hero_wrapper";
wrapperImgEl.setAttribute("src", images[0]);
wrapperImgEl.setAttribute("alt", `image 0`);

setInterval(() => {
  wrapperImgEl.src = images[imgCounter];
  wrapperImgEl.alt = `image ${imgCounter}`;
  imgCounter++;

  if (imgCounter >= images.length) {
    imgCounter = 0;
  }
}, 4000);

wrapperEl.appendChild(wrapperImgEl);
hero.appendChild(wrapperEl);

// hero


// verifica autenticazione
userToggle.addEventListener("click", () => { if (sessionStorage.getItem("session_success")=="true") 
{  tendinaLogout.classList.toggle("show_logout");} 
else { tendinaLogin.classList.toggle("show_login");}})


// verifica autenticazione



// acquisizion tvId e username da url
let url = window.document.URL;

const idUrl = url.split("?id=");

const tvId = parseInt(idUrl[1]);

if (url.includes("Utente")){alert("ricordati di effettuare il login per poter votare il film")}else{
  const miscUserUrl = idUrl[0].split("user=");
  const userUrl = miscUserUrl[1];
  navUser.textContent= userUrl;
  userIcon.setAttribute("src","/images/user_logged_icon.png")
  sessionStorage.setItem("sesUserName", userUrl)

}
// acquisizion tvId e username da url



// generazione di card info serie tv
GET("tv",tvId).then((data) => {
  tvSpecsEl.append(tvSpecsGen(data));
});
// generazione di card info serie tv



// modale per il voto
modalOverlay.addEventListener("click", () => {
  const modalTvEl = qS(".rate-modal");
  modalEl.style.display = "none";
  modalTvEl.remove();})
// modale per il voto
  
// generazione token
  tokenGen(); 
// generazione token



// login e acquisizione sessionid

  loginForm.addEventListener("submit", event => {
    tendinaLogin.classList.toggle("show_login")
    const token = sessionStorage.getItem("request_token") 
    // const method = event.target[0].value;
    // console.log(method);
    let sesID;
    let sesSuc;
    event.preventDefault();
    const loginSpecs={username: username.value,
    password: password.value, request_token: token };
    loginPost(loginSpecs).then((data) => { 
        if (data.success == true) { alert("login effettuato con successo"); navUser.textContent= username.value;userIcon.setAttribute("src","/images/user_logged_icon.png");
        sessionStorage.setItem("sesUserName", username.value); sessionPost({request_token: token}).then((session) => {
          sesID = (session.session_id);  sessionStorage.setItem("session_id", sesID);
          sesSuc = (session.success);  sessionStorage.setItem("session_success", sesSuc);console.log(sesID);
   }).catch(err => console.log('Request Failed', err));}
        else {console.log("Riesegui il login")};
      }).catch(err => console.log('Request Failed', err));
     
  }) 


// login e acquisizione sessionid



 



// voto

rate1.addEventListener("click", () => { 
  const sessionID = sessionStorage.getItem("session_id");
  const sessionSuccess = sessionStorage.getItem("session_success")
  if (sessionSuccess == "true"){
  ratingPOST( tvId, {
    value: 1,
  }, sessionID).then((data) => {
    console.log(data);
    modalEl.appendChild(modalGen("1"));
    modalEl.style.display = "flex";
  }).catch(err => console.log('Request Failed', err))
  }else{
    alert("Effettua l'accesso prima di votare")
  };  
});


rate2.addEventListener("click", () => { 
  const sessionID = sessionStorage.getItem("session_id");
  const sessionSuccess = sessionStorage.getItem("session_success")
  if (sessionSuccess == "true"){
  ratingPOST( tvId, {
    value: 1,
  }, sessionID).then((data) => {
    console.log(data);
    modalEl.appendChild(modalGen("2"));
    modalEl.style.display = "flex";
  }).catch(err => console.log('Request Failed', err))
  }else{
    alert("Effettua l'accesso prima di votare")
  };  
});


rate3.addEventListener("click", () => { 
  const sessionID = sessionStorage.getItem("session_id");
  const sessionSuccess = sessionStorage.getItem("session_success")
  if (sessionSuccess == "true"){
  ratingPOST( tvId, {
    value: 1,
  }, sessionID).then((data) => {
    console.log(data);
    modalEl.appendChild(modalGen("3"));
    modalEl.style.display = "flex";
  }).catch(err => console.log('Request Failed', err))
  }else{
    alert("Effettua l'accesso prima di votare")
  };  
});


rate4.addEventListener("click", () => { 
  const sessionID = sessionStorage.getItem("session_id");
  const sessionSuccess = sessionStorage.getItem("session_success")
  if (sessionSuccess == "true"){
  ratingPOST( tvId, {
    value: 1,
  }, sessionID).then((data) => {
    console.log(data);
    modalEl.appendChild(modalGen("4"));
    modalEl.style.display = "flex";
  }).catch(err => console.log('Request Failed', err))
  }else{
    alert("Effettua l'accesso prima di votare")
  };  
});


rate5.addEventListener("click", () => { 
  const sessionID = sessionStorage.getItem("session_id");
  const sessionSuccess = sessionStorage.getItem("session_success")
  if (sessionSuccess == "true"){
  ratingPOST( tvId, {
    value: 1,
  }, sessionID).then((data) => {
    console.log(data);
    modalEl.appendChild(modalGen("5"));
    modalEl.style.display = "flex";
  }).catch(err => console.log('Request Failed', err))
  }else{
    alert("Effettua l'accesso prima di votare")
  };  
});

// voto



 


    // logout

logoutForm.addEventListener("submit", event  => {
  event.preventDefault()
  tendinaLogout.classList.toggle("show_logout");
  const sessionId = sessionStorage.getItem("session_id");
  const body = {"session_id":sessionId};
  sessionDelete(body).then((data) => {console.log(data)}).then(sessionStorage.removeItem("session_id"),sessionStorage.removeItem("session_success"),sessionStorage.removeItem("sesUserName"),
  alert("Logout effettuato con successo")).then(
  navUser.textContent="Utente ",userIcon.setAttribute("src","/images/user_icon.png"))
})

    // logout





















 
 