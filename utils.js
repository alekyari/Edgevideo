const qS = (type) => document.querySelector(type);
const qSA = (type) => document.querySelectorAll(type);
const cE = (element) => document.createElement(element);

const popularEl = qS(".popular");
const airTodayEl = qS(".airToday");
const topRatedEl = qS(".top_rated");
const wrapperEl = cE("div");
const wrapperImgEl = cE("img");
const hero = qS("hero");
const tvSpecsEl = qS(".tv_specs_container");
const tendinaLogin = qS(".tendina_login");
const tendinaLogout = qS(".tendina_logout");
const userToggle = qS("#user_toggle");
const modalEl = qS(".modal");
const modalOverlay = qS(".overlay");
const arrow = qS(".dropdownarrow");
const username = qS("#username");
const password = qS("#password");
const logButton = qS("#login_button");
const loginForm = qS("#login_form");
const logoutForm = qS("#logout_form");
const starWrapper = qS(".star-wrapper");
const rate1 = qS("#rate1");
const rate2 = qS("#rate2");
const rate3 = qS("#rate3");
const rate4 = qS("#rate4");
const rate5 = qS("#rate5");
const navUser = qS("#utente");
const userIcon = qS(".user_icon")
const selMobMenu = qS("#mobile_menu")
const mobMenu = qS(".nav_cont_mobile")





const tvCardGen = (data) => {
  const cardEl = cE("div");
  const imgEl = cE("img");
  const titleEl = cE("p");
  titleEl.textContent = data.name;
  titleEl.className = "tv_title";

  cardEl.setAttribute("id", data.id);
  cardEl.className = "tv";
  if (data.poster_path) {
    imgEl.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    );
  }
  imgEl.setAttribute("alt", data.title);

  cardEl.append(imgEl, titleEl);

  return cardEl;
};
const modalGen = (n) => {
  const modalEl = cE("div");
  const titleEl = cE("h2");
  modalEl.className = "rate-modal";
  titleEl.textContent = `Hai valutato questa serie! Il tuo voto è stato ${n}`;
  modalEl.appendChild(titleEl);
  return modalEl;
};


const heroGen = (images) =>{
let imgCounter = 0;  
wrapperEl.className = "hero_wrapper";
wrapperImgEl.setAttribute("src", `https://image.tmdb.org/t/p/original${images[0]}`);
wrapperImgEl.setAttribute("alt", `image 0`);
// const heroSlider = () =>{ setInterval(() => {
//   wrapperImgEl.src = images[imgCounter];
//   wrapperImgEl.alt = `image ${imgCounter}`;
//   imgCounter++;

//   if (imgCounter >= images.length) {
//     imgCounter = 0;
//   }
// }, 2000);}
// wrapperImgEl.src = images[0];
// wrapperImgEl.alt = `image ${imgCounter}`;
wrapperEl.appendChild(wrapperImgEl);
hero.appendChild(wrapperEl);
}



const tvSpecsGen = (data) => {
  const tvSpecsEl = cE("div");
  const imgEl = cE("img");
  const wrapperTextEl = cE("ul");
  wrapperTextEl.className = "wrapper_text";
  const titleEl = cE("li");
  const overviewEl = cE("li");
  const genreEl = cE("li");
  const episodesEl = cE("li");
  const seasonEl = cE("li");
  const releaseDateEl = cE("li");
  const voteAverageEl = cE("li");
  
  tvSpecsEl.className = "tv_specs";
  imgEl.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
  imgEl.alt = data.title;
  titleEl.innerHTML = `<h2>${data.name}</h2>`;
  if (data.overview) {overviewEl.innerHTML = `<b style="color: rgb(41, 150, 172);">Trama in Inglese: </b> <p>${data.overview}</p>`};
  releaseDateEl.innerHTML = `<b style="color: rgb(41, 150, 172);" >Data di Uscita:</b> <p>${data.first_air_date}</p>`;
  genreEl.innerHTML = `<b style="color: rgb(41, 150, 172);" >Genere:</b> <p>${data.genres.map((genre)=>((genre.name))).toString()}</p>`;
  episodesEl.innerHTML = `<b style="color: rgb(41, 150, 172);" >Numero di episodi:</b> <p>${data.number_of_episodes}</p>`;
  seasonEl.innerHTML = `<b style="color: rgb(41, 150, 172);" >Numero di stagioni:</b> <p>${data.number_of_seasons}</p>`;
  voteAverageEl.innerHTML = `<b style="color: rgb(41, 150, 172);" >Voto Medio: </b> <p>${data.vote_average}</p>`;

  wrapperTextEl.append(titleEl, overviewEl, genreEl, releaseDateEl,  episodesEl, seasonEl, voteAverageEl, );
  tvSpecsEl.append(imgEl, wrapperTextEl);
  return tvSpecsEl;
};




export { qS, qSA, cE, heroGen, modalGen, tvCardGen, tvSpecsGen, popularEl, airTodayEl, topRatedEl, wrapperEl, wrapperImgEl, hero, tvSpecsEl, tendinaLogin, tendinaLogout, userToggle, modalEl, modalOverlay, arrow,
username, password, logButton, loginForm, logoutForm, starWrapper, rate1, rate2, rate3, rate4, rate5, navUser, userIcon, selMobMenu, mobMenu };
