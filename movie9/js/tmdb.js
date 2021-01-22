const key = '286b95d83820572024c3659de413987f';
const endpoint_url = 'https://api.themoviedb.org/3';

//Request api
function getListMovie(services, sectiontitle) {
  fetch(endpoint_url + services + "?api_key=" + key + "&language=en-US&page=1")
  .then(status)
  .then(json)
  .then(function(data) {
    // Objek/array JavaScript dari response.json() masuk lewat data.
    // Menyusun komponen card movie secara dinamis
    var moviesHTML = "";
    data.results.forEach(function(movie) {
      moviesHTML += `
      <div class="col m3 s6">
        <div class="card">
          <a href="./movie.html?id=${movie.id}">
            <div class="card-image waves-effect waves-block waves-light">
              <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" />
            </div>
          </a>
          <div class="card-content text-center">
          <strong>${movie.title}</strong>
          <p class="grey-text text-lighten">Release Date </p>
          <p class="grey-text text-lighten">${movie.release_date}</p>
          </div>
        </div>
      </div>
      `;
    });
    document.getElementById("movie_list").innerHTML = moviesHTML;
      document.getElementById("section_title").innerHTML = sectiontitle;
  })
  .catch(error);
}

function getMovie(movie_id){
fetch(endpoint_url+ "/movie/" + movie_id + "?api_key=" + key + "&language=en-US&page=1")
 .then(status)
 .then(json)
 .then(function(data) {
  var movinfo = "";
  //movie overview
  movinfo += `
  <div id="index-banner" class="parallax-container">
    <div class="section no-pad-bot">
      <div class="container">
        <h1 class="header center white-text light text-darken-1 customopacity">${data.original_title}</h1>
      </div>
    </div>
    <div class="parallax">
      <img src="https://image.tmdb.org/t/p/original${data.backdrop_path}"
           srcset="https://image.tmdb.org/t/p/w300${data.backdrop_path} 300w,
                   https://image.tmdb.org/t/p/w780${data.backdrop_path} 780w,
                  https://image.tmdb.org/t/p/w1280${data.backdrop_path} 1280w"
           size="100vw"
           alt="${data.title}"
           style="transform: translate3d(-50%, 0px, 0px);opacity: 1;">
    </div>
  </div>
  <div class="container">
    <div class="col s12 m5">
      <div class="card">
      <div class="card-image waves-effect waves-block waves-light z-depth-3">
        <img src="https://image.tmdb.org/t/p/w500${data.poster_path}"/>
      </div>
    </div>
    </div>

  <div class="col m7 s12">
  <table class="">
  <thead>
    <tr>
        <th>Nama Film</th>
        <td class="grey-text text-darken-2">${data.title}</td>
    </tr>
    <tr>
    <th>Tanggal</th>
      <td class="grey-text text-darken-2">${data.release_date}</td>
    </tr>
    <tr>
      <th>Budget</th>
      <td class="grey-text text-darken-2">US$ ${data.budget}</td>
    </tr>
    <tr>
      <th>Bahasa</th>
      <td class="grey-text text-darken-2"> ${data.original_language}</td>
    </tr>
    <tr>
      <th>Pendapatan</th>
      <td class="grey-text text-darken-2">US$ ${data.revenue}</td>
    </tr>
    <tr>
      <th>Durasi Film</th>
      <td class="grey-text text-darken-2"> ${data.runtime} Menit</td>
    </tr>
    <tr>
      <th>Status</th>
      <td class="grey-text text-darken-2"> ${data.status}</td>
    </tr>
    <tr>
      <th>Homepage</th>
      <td><a href="${data.homepage}" class="customlink">${data.homepage}</a></td>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>
<div class="col m12 s12 sinopsis" style="border:2px;">
  <h3>Sinopsis Cerita </h3>
  <p>${data.overview}</p>
</div>
  </div>
  </div>
`;
      document.getElementById("movie_detail").innerHTML = movinfo;
})

  .catch(error);

}
