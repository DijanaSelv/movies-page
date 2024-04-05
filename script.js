import movies from "./movesStatic.js";

//display movies from static data

function generateMovieCards(moviesArray) {
  $.each(movies, function (index, movie) {
    console.log(movie);

    const card = `<div class="card"  id='${index}'>
    <p class="details-hover">View details</p>
      <img
        src="${
          movie.poster
            ? movie.poster
            : "https://images.pexels.com/photos/5662857/pexels-photo-5662857.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }"
        class="card-img-top"
        alt="movie poster"
      />
      <div class="card-body">
        
        <div class="d-flex justify-content-between"><h5 class="card-title">${
          movie.title
        }</h5><span>${movie.year}</span></div>
        <span>Sci-Fi</span>
        <p class="card-text">
          ${movie.description}
        </p>
      </div>
    </div>`;

    $(".movies-row").append(card);
  });
}

generateMovieCards(movies);
$(".card").hover(function () {
  $(this).find(".details-hover").stop().fadeIn(500);
});

$(".card").on("mouseleave", function () {
  $(this).find(".details-hover").stop().fadeOut(300);
});
//end of display movies
