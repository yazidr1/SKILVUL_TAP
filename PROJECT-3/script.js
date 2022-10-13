// api variable
const api_key = "8a2507304430638b873784c0dec105b7";
const base_url = "https://api.themoviedb.org/3";
const img_url = "https://image.tmdb.org/t/p/w500/";

// search_key = ambil element dom input value
const search_key = document.querySelector("#input-search");
const card_container = document.querySelector("#movie-catalog");
let search_button = document.querySelector(".search-btn");

const api_end = {
  get_1: `/discover/movie?api_key=${api_key}&sort_by=popularity.desc&page=1`,
  search_1: `/search/movie?api_key=${api_key}&query=${search_key.value}&page=1`,
};




// Fetch API
let displayCard = (item) => {
  return `<div class="col-md-3 my-3 ">
  <div class="card" style="width: 18rem">
    <img
      src="${img_url + item.poster_path}"
      class="card-img-top"
    />
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <h5 class="text-title fw-normal">${item.original_title}</h5>
        <p class="px-2"><b>${item.vote_average}</b></p>
      </div>
      <p class="card-text">
        <small class="text-muted fw-normal">${item.release_date}</small>
      </p>
    </div>
  </div>
</div>`;
};

let getDataMovie = async () => {
  const URL_get = String(base_url + api_end.get_1);
  let res = await fetch(URL_get);
  let movies = await res.json();
  let cards = "";

  console.log(res);
  console.log(movies.results);
  // Menampilkan 20 data movies
  movies.results.forEach((item, index) => {
    cards += displayCard(item);
    card_container.innerHTML = cards;
  });
};
getDataMovie();


search_button.addEventListener("click", async function (e) {
  e.preventDefault();
  // const search_key = document.querySelector("#input-search").value;
  const URL_query = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${search_key.value}&page=1`
  let res = await fetch(URL_query);
  let movies = await res.json();
  let cards = "";

  movies.results.slice(0, 20).forEach((item, index) => {
    cards += displayCard(item);
    card_container.innerHTML = cards;
  });
});

