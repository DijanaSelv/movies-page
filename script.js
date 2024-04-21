//get movies file and locally stored movies if any
import movies from "./movesStatic.js";
let storedMovies = [];
const storedMoviesJSON = localStorage.getItem("movies");

if (storedMoviesJSON) {
  storedMovies = JSON.parse(storedMoviesJSON);
}

function clearInput() {
  $(".modal-form .form-control").val("");
  $(".modal-form .form-control").removeClass("is-invalid");
  $(".modal-form .form-select").val("");
  $(".modal-form .form-select").removeClass("is-invalid");
  $(".modal-form .error").remove();
}

//~~~~~~~~~~~display movies from static data and local storage if any
const moviesToDisplay = [...movies, ...storedMovies];

let moviesForCards;

function generateMovieCards(moviesArray, filteredGenres) {
  $(".movies-row").empty();

  //iterate through all the object in the array
  //if there are genres selected, filter only those movies
  moviesForCards =
    filteredGenres && filteredGenres.length > 0
      ? $.grep(moviesArray, function (movie) {
          return filteredGenres.includes(movie.genre);
        })
      : [...moviesArray];

  //sort alphabetically
  moviesForCards.sort(function (a, b) {
    return a.title
      .replace("The ", "")
      .toLowerCase()
      .localeCompare(b.title.replace("The ", "").toLowerCase());
  });

  //if description is long, display only part in card
  $.each(moviesForCards, function (index, movie) {
    const description =
      movie.description.length > 200
        ? movie.description.slice(0, 200).concat("...")
        : movie.description;

    //create a card for each movie
    const card = `<div class="card"  id='${index}' data-bs-toggle="modal" data-bs-target="#details-modal">
    <p class="details-hover">Click for more</p>
      <img
        src="${
          movie.poster
            ? movie.poster
            : "https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_1280.jpg"
        }"
        class="card-img-top"
        alt="movie poster"
      />
      <div class="card-body" style="height: 50px;">
        <div class="d-flex justify-content-between"><h5 class="card-title">${
          movie.title
        }</h5><span>${movie.year}</span></div>
        <span>${movie.genre}</span>
        <p class="card-text">
          ${description}
        </p>
      </div>
    </div>`;

    //add the card to the DOM
    $(".movies-row").append(card);
  });
}
generateMovieCards(moviesToDisplay);

//styling on hover for cards
$(".movies-row").on("mouseenter", ".card", function () {
  $(this).find(".card-body").css({
    height: "400px",
    transition: "height 0.7s ease-in",
  });
  $(this).find(".details-hover").stop().fadeIn(500);
});

$(".movies-row").on("mouseleave", ".card", function () {
  $(this).find(".card-body").css({
    height: "50px",
    transition: "height 0.7s ease-out",
  });
  $(this).find(".details-hover").stop().fadeOut(300);
});

//~~~~~~~~~~end display movies

//~~~~~~~~~~~~~~~~~~~~Fetch a  quote
// I used a different api, the one that was provided was blocking my requests by CORS policy
const fetchAndDisplayQuote = () => {
  $.ajax({
    url: "https://api.api-ninjas.com/v1/quotes?category=movies",
    method: "GET",
    headers: {
      "X-Api-Key": "PRK9olZJhAIuT3D0EBMHMw==RYszKLP564lXJeLe",
    },
    success: function (response) {
      $(".loading-quote").remove();
      $(".p-quote").text(`"${response[0].quote.slice(0, 500)}"`);
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
$(".movies-row").on("click", ".card", function () {
  //empty previously populated modal
  $("#details-modal .modal-body").empty();

  //find the selected movie by div id
  const movieIndex = $(this).attr("id");
  const clickedMovie = moviesForCards[movieIndex];

  //display duration "xh xxm" format
  const duration = clickedMovie.duration
    ? clickedMovie.duration.split(":").join("h ").concat("m")
    : undefined;

  //set elements for modal body
  const modalBody = `<img src="${clickedMovie.poster}"/>
  <div class='movie-details'><h2>${clickedMovie.title}</h2>
  <p>${duration ? duration + " /" : ""}  ${clickedMovie.genre} / ${
    clickedMovie.year
  }</p>
  <span class='details-label'>SUMMARY</span>
  <p class='summary'>${clickedMovie.description}</p>
  <div class='row text-light'>
  <div class="col-3 details-label">Director:</div> <div class="col-9">${
    clickedMovie.director ? clickedMovie.director : "N/A"
  }</div>
  <div class="col-3 details-label">Rating:</div> <div class="col-9">${
    clickedMovie.rating ? clickedMovie.rating : "N/A"
  }</div>
  </div>`;

  //add to DOM
  $("#details-modal .modal-body").append(modalBody);
});
// ~~~~~~~~~~~~~~~~~end details modal

//~~~~~~~~~~~~~~~~~~~~~~~~~VALIDATE AND SUBMIT ON CLICK

//needed for year input validation
const currentYear = new Date().getFullYear();

//Custom validate methods
//rating allowed from 1-10 with one decimal.
jQuery.validator.addMethod(
  "ratingToTen",
  function (value, element) {
    return this.optional(element) || /^(10|[1-9](\.\d)?)$/.test(value);
  },
  "Rating can be between 1 and 10 with one decimal allowed."
);

//director must have first and last name (at least)
jQuery.validator.addMethod(
  "fullName",
  function (value, element) {
    return this.optional(element) || value.split(" ").length >= 2;
  },
  "Must include first and last name."
);

//empty string not allowed
jQuery.validator.addMethod(
  "notemptystring",
  function (value, element) {
    return this.optional(element) || value.trim() !== "";
  },
  "requred"
);

//duration validation
jQuery.validator.addMethod(
  "duration",
  function (value, element) {
    return (
      this.optional(element) || /^(([0-9]|[1-9][0-9])):[0-5][0-9]$/.test(value)
    );
  },
  "Incorrect format (ex. 1:45)"
);

//submit click event
$(".new-movie-form")
  .submit(function (e) {
    e.preventDefault();
  })
  .validate({
    /* Prevent adding default error class to input elements, instead add is-invalid for bootstrap formatting */
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
        notemptystring: true,
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
        notemptystring: true,
        maxlength: 500,
      },
      image: {
        url: true,
      },
      duration: {
        duration: true,
      },
    },
    messages: {
      title: {
        required: "required",
        notemptystring: "required",
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
        notemptystring: "required",
        maxlength: "Maximum {0} characters allowed.",
      },
      image: {
        url: "Please enter a vald URL.",
      },
      duration: {
        duration: "Incorrect format (ex. 1:45).",
      },
    },

    submitHandler: function (form) {
      const newMovie = {
        title: form.title.value,
        year: form.year.value,
        genre: form.genre.value,
        description: form.summary.value,
        director:
          form.director.value.trim() !== "" ? form.director.value : undefined,
        duration:
          form.duration.value.trim() !== "" ? form.duration.value : undefined,
        rating: form.rating.value.trim() !== "" ? form.rating.value : undefined,
        poster:
          form.image.value ||
          "https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_1280.jpg",
      };

      //add movie
      //in local storage together with previously stored movies
      storedMovies.push(newMovie);
      localStorage.setItem("movies", JSON.stringify(storedMovies));

      //rerender shown movie posters
      moviesToDisplay.push(newMovie);
      generateMovieCards(moviesToDisplay);

      //close the modal on successful submit and clear input
      $("#add-movie-modal").modal("toggle");
      clearInput();
    },
  });

//clear input in modal when it closes
$(".modal-form").on("hidden.bs.modal", clearInput);

//Filter movies by genre
$(".genre-input").on("change", function () {
  const selectedGenres = $(".genre-input:checked")
    .map(function () {
      return $(this).val();
    })
    .get();

  generateMovieCards(moviesToDisplay, selectedGenres);
});
