import { GET, ratingPOST, sessionPost, loginPost, tokenGen, sessionDelete } from "./api.js";
import { qS, qSA, cE, heroGen, modalGen, tvCardGen, tvSpecsGen, popularEl, topRatedEl, airTodayEl, wrapperEl, wrapperImgEl, hero, tvSpecsEl, tendinaLogin, tendinaLogout, userToggle, modalEl, modalOverlay, arrow,
  username, password, logButton, loginForm, logoutForm, starWrapper, rate1, rate2, rate3, rate4, rate5, navUser, userIcon, selMobMenu, mobMenu
   } from "./utils.js";





 
  // tendina menu mobile
   selMobMenu.addEventListener("click",() => {
  mobMenu.classList.toggle("show_cont_mobile")});

  // tendina menu mobile





  // hero

  // GET("tv","popular")
  // .then((data) => {
  //  let newData = data.results.map((tv) => (tv.poster_path));
  //  console.log(newData);
  //   heroGen(newData);
  // })




  GET("tv","popular")
  .then((data) => {
   let newData = data.results.map((tv) => (tv.poster_path));
    sessionStorage.setItem("images", newData)
  })


const images = sessionStorage.getItem("images").split(",")
let imgCounter = 1;


wrapperEl.className = "hero_wrapper";
wrapperImgEl.setAttribute("src", `https://image.tmdb.org/t/p/original${images[0]}`);
wrapperImgEl.setAttribute("alt", `image 0`);
wrapperEl.appendChild(wrapperImgEl);
hero.appendChild(wrapperEl);


const heroSlider = () =>{ setInterval(() => {
  wrapperImgEl.src = `https://image.tmdb.org/t/p/original${images[imgCounter]}`;
  wrapperImgEl.alt = `image ${imgCounter}`;
  imgCounter++;

  if (imgCounter >= images.length) {
    imgCounter = 0;
  }
}, 3000);}

heroSlider();



// hero


// verifica autenticazione

userToggle.addEventListener("click", () => { if (sessionStorage.getItem("session_success")=="true") 
{  tendinaLogout.classList.toggle("show_logout");console.log("sei loggato");} 
else { tendinaLogin.classList.toggle("show_login");console.log("non sei loggato");}})

if (sessionStorage.getItem("session_success")=="true"){navUser.textContent= sessionStorage.getItem("sesUserName");userIcon.setAttribute("src","/images/user_logged_icon.png")}
// verifica autenticazione


// generazione di card e reindirizzamento verso la pagina con info serie tv

GET("tv","popular")
  .then((data) => {
    data.results.map((tv) => popularEl.append(tvCardGen(tv)));
    console.log(data);
  })
  .then(() => {
    const tvEls = qSA(".tv");
    tvEls.forEach((tv) =>
      tv.addEventListener("click", () =>
        GET("tv", tv.id).then( data =>{if (navUser.textContent==="Utente"){
          window.location.replace(`./tvPage.html/?id=${tv.id}`)}else{window.location.replace(`./tvPage.html?user=${navUser.textContent}?id=${tv.id}`)}
        } )
      )
    );
  });


  GET("tv","on_the_air")
  .then((data) => {
    data.results.map((tv) => airTodayEl.append(tvCardGen(tv)));
    console.log(data);
  })
  .then(() => {
    const tvEls = qSA(".tv");
    tvEls.forEach((tv) =>
      tv.addEventListener("click", () =>
        GET("tv", tv.id).then( data =>{if (navUser.textContent==="Utente"){
          window.location.replace(`./tvPage.html/?id=${tv.id}`)}else{window.location.replace(`./tvPage.html?user=${navUser.textContent}?id=${tv.id}`)}
        } )
      )
    );
  });

  


  GET("tv","top_rated")
  .then((data) => {
    data.results.map((tv) => topRatedEl.append(tvCardGen(tv)));
    console.log(data);
  })
  .then(() => {
    const tvEls = qSA(".tv");
    tvEls.forEach((tv) =>
      tv.addEventListener("click", () =>
        GET("tv", tv.id).then( data =>{if (navUser.textContent==="Utente"){
          window.location.replace(`./tvPage.html/?id=${tv.id}`)}else{window.location.replace(`./tvPage.html?user=${navUser.textContent}?id=${tv.id}`)}
        } )
      )
    );
  });

// generazione di card


// generazione token
tokenGen(); 

// generazione token



// login e acquisizione sessionid
  loginForm.addEventListener("submit", event => {
    tendinaLogin.classList.toggle("show_login")
    const token = sessionStorage.getItem("request_token");
    let sesID;
    let sesSuc;
    event.preventDefault();
    const loginSpecs={username: username.value,
    password: password.value, request_token: token };
    console.log(loginSpecs)
    loginPost(loginSpecs).then((data) => { console.log(data);
        if (data.success == true) { alert("login effettuato con successo"); navUser.textContent= username.value;
        userIcon.setAttribute("src","/images/user_logged_icon.png"); sessionPost({request_token: token}).then((session) => {
          sesID = (session.session_id);  sessionStorage.setItem("session_id", sesID);
          sesSuc = (session.success);  sessionStorage.setItem("session_success", sesSuc);console.log(sesID);
           sessionStorage.setItem("sesUserName", username.value)
   }).catch(err => console.log('Request Failed', err));}
        else {console.log("Riesegui il login")};
      }).catch(err => console.log('Request Failed', err));
     
  }) 

// login e acquisizione sessionid



// logout
 logoutForm.addEventListener("submit",() => {
    tendinaLogout.classList.toggle("show_logout");
    const sessionId = sessionStorage.getItem("session_id");
    const body = {"session_id":sessionId};
    sessionDelete(body).then((data) => {console.log(data)}).then(sessionStorage.removeItem("session_id"),sessionStorage.removeItem("session_success"),
    sessionStorage.removeItem("sesUserName"),alert("Logout effettuato con successo")).then(
    navUser.textContent="Utente ",userIcon.setAttribute("src","/images/user_icon.png"))
  })
    // logout