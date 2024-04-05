import movies from "./movesStatic.js";

//~~~~~~~~~~~display movies from static data

function generateMovieCards(moviesArray) {
  //iterate through all the object in the array

  $.each(movies, function (index, movie) {
    //create a card for each movie
    const card = `<div class="card"  id='${index}'>
    <p class="details-hover">View details</p>
      <img
        src="${
          movie.poster
            ? movie.poster
            : "https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_1280.jpg"
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

    //add the card to the DOM
    $(".movies-row").append(card);
  });
}
generateMovieCards(movies);

//styling on hover for cards
$(".card").hover(function () {
  $(this).find(".details-hover").stop().fadeIn(500);
});

$(".card").on("mouseleave", function () {
  $(this).find(".details-hover").stop().fadeOut(300);
});
//~~~~~~~~~~end of display movies

//~~~~~~~~~~~~~~~~~~~~Fetch a  quote
// I used a different api, the one that was provided was blocking my requests by CORS policy
const fetchAndDisplayQuote = async () => {
  $.ajax({
    url: "https://api.api-ninjas.com/v1/quotes?category=movies",
    method: "GET",
    headers: {
      "X-Api-Key": "PRK9olZJhAIuT3D0EBMHMw==RYszKLP564lXJeLe",
    },
    success: function (response) {
      $(".loading-quote").remove();
      $(".p-quote").text(`"${response[0].quote}"`);
      $(".p-author").text(response[0].author);
    },
    error: function ajaxError(jqXHR) {
      console.error(jqXHR.responseText);
      $(".loading-quote").remove();
      $(".p-quote").text("Can't think of any quote at the moment.");
      $(".p-author").text(":(");
    },
  });
};

fetchAndDisplayQuote();
//~~~~~~~~~~~~~~~End of fetch quote
