import movies from "./movesStatic.js";

//~~~~~~~~~~~display movies from static data

function generateMovieCards(moviesArray) {
  //iterate through all the object in the array

  $.each(movies, function (index, movie) {
    //create a card for each movie
    const card = `<div class="card"  id='${index}' data-bs-toggle="modal" data-bs-target="#details-modal">
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
        <span>${movie.genre}</span>
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
//~~~~~~~~~~end display movies

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
//~~~~~~~~~~~~~~~end fetch quote

// ~~~~~~~~~~~~~~~~~open and populate details modal on click

$(".card").on("click", function () {
  //empty previously populated modal
  $("#details-modal .modal-body").empty();

  //find the selected movie by div id
  const movieIndex = $(this).attr("id");
  const clickedMovie = movies[movieIndex];

  //set elements for modal body
  const modalBody = `<img src="${clickedMovie.poster}"/>
  <div class='movie-details'><h2>${clickedMovie.title}</h2>
  <p>${clickedMovie.duration} / ${clickedMovie.genre} / ${clickedMovie.year}</p>
  <span>SUMMARY</span>
  <p>${clickedMovie.description}</p>
  <p>Director: ${clickedMovie.director}</p>
  <p>Rating: ${clickedMovie.rating}</p>
  `;

  //add to DOM
  $("#details-modal .modal-body").append(modalBody);
});
// ~~~~~~~~~~~~~~~~~end details modal

// ~~~~~~~~~~~~~~~ form validation
const currentYear = new Date().getFullYear();

//CUSTOM METHODS

//rating allowed from 1-10 with one decimal.
jQuery.validator.addMethod(
  "ratingToTen",
  function (value, element) {
    return this.optional(element) || /^(10|[1-9](\.\d)?)$/.test(value);
  },
  "Rating can be between 1 and 10 with one decimal allowed."
);

//director must have first and last name
jQuery.validator.addMethod(
  "fullName",
  function (value, element) {
    return this.optional(element) || value.split(" ").length >= 2;
  },
  "Must include first and last name."
);

//VALIDATE FORM
$(".new-movie-form").validate({
  /* Prevent adding error class to input elements, instead add is-invalid for bootstrap formatting */
  highlight: function (element, errorClass, validClass) {
    if (
      element.tagName === "SELECT" ||
      element.tagName === "TEXTAREA" ||
      element.tagName === "INPUT"
    ) {
      $(element).addClass("is-invalid").removeClass(validClass);
    } else {
      $(element).addClass(errorClass).removeClass(validClass);
    }
  },
  unhighlight: function (element, errorClass, validClass) {
    if (
      element.tagName === "SELECT" ||
      element.tagName === "TEXTAREA" ||
      element.tagName === "INPUT"
    ) {
      $(element).removeClass("is-invalid");
    } else {
      $(element).addClass(errorClass).removeClass(validClass);
    }
  },
  rules: {
    title: {
      required: true,
      maxlength: 250,
    },
    year: {
      required: true,
      range: [1888, +`${currentYear}`],
    },
    genre: {
      required: true,
    },
    director: {
      fullName: true,
    },
    rating: {
      ratingToTen: true,
    },
    summary: {
      required: true,
      maxlength: 500,
    },
    image: {
      url: true,
    },
  },
  messages: {
    title: {
      required: "required",
      maxlength: jQuery.validator.format("Maximum {0} characters allowed!"),
    },
    year: {
      required: "required",
      range: "Year is not valid.",
    },
    genre: {
      required: "required",
    },
    director: {
      fullName: "First and Last Name required.",
    },
    rating: {
      ratingToTen: "Rating can be between 1 and 10 with one decimal allowed",
    },
    summary: {
      required: "required",
      maxlength: "Maximum {0} characters allowed.",
    },
    image: {
      url: "Please enter a vald URL.",
    },
  },
});

//~~~~~~~~~~~~~~~~~~~~~~~~~Submit event

$(".new-movie-form").on("submit", function (e) {
  e.preventDefault();
  console.log(e.target.genre.value);
});
