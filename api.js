const API_KEY = "472c17459349532471f96489e3468cd9";
const BASE_URL = "https://api.themoviedb.org/3/";
const SESSION_URL ="authentication/session/new?api_key=";
const END_SESSION_URL ="authentication/session?api_key=";
const LOGIN_URL ="authentication/token/validate_with_login?api_key=";



const GET = async ( type= "tv",resource ="153870") => {
  const res = await fetch(`${BASE_URL}${type}/${resource}?api_key=${API_KEY}&language=en-US`);
  const data = await res.json();
  return data;
};




async function tokenGen() { let obj 
  const res = await GET("authentication","token/new").then((data) => {
   obj = (data.request_token);  sessionStorage.setItem("request_token", obj); 
   })} 




const ratingPOST = async (tvId = "536554", body, sesID) => {
  const res = await fetch(
    `${BASE_URL}tv/${tvId}/rating?api_key=${API_KEY}&session_id=${sesID}`,
    {
      method: "POST",
      headers: {"Content-type": "application/json;charset=UTF-8"},
      body: JSON.stringify(body),
    }
  );
  const data = await res.json();
  return data;
};

const sessionPost = async (body) => {
  const res = await fetch(
    `${BASE_URL}${SESSION_URL}${API_KEY}`,
    {
      method: "POST",
      headers: {"Content-type": "application/json;charset=UTF-8"},
      body: JSON.stringify(body),
    }
  );
  const data = await res.json();
  return data;
};

const sessionDelete = async (body) => {
  const res = await fetch(
    `${BASE_URL}${END_SESSION_URL}${API_KEY}`,
    {
      method: "DELETE",
      headers: {"Content-type": "application/json;charset=UTF-8"},
      body: JSON.stringify(body),
    }
  );
  const data = await res.json();
  return data;
};




const loginPost = async (body) => {
  const res = await fetch(
    `${BASE_URL}${LOGIN_URL}${API_KEY}`,
    {
      method: "POST",
      headers: {"Content-type": "application/json; charset=UTF-8"},
      body: JSON.stringify(body),
    }
  );
  const data = await res.json();
  return data;
};



export { GET, ratingPOST, sessionPost , loginPost, tokenGen, sessionDelete };