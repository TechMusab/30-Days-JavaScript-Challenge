let key = "a40f89c5";
let movie = document.querySelector("input");
let btn = document.querySelector(".btn");
let result = document.querySelector(".result");
let image = document.querySelector("img");
let title = document.querySelector(".title");
let year = document.querySelector(".year");
let type = document.querySelector(".type");
let runtime = document.querySelector(".runtime");
let showmore = document.querySelector(".showmore");
let plot = document.querySelector(".plot");
let genre = document.querySelector(".genre");
let rating = document.querySelector(".rating");
let headings= document.querySelectorAll("h1");
async function fetchresults() {
    headings.forEach(heading=>heading.style.display="none");
    plot.style.display="none";
    genre.style.display="none";
    rating.style.display="none";
  let name = movie.value;
  if (name.length <= 0) {
    result.style.opacity = "1";
    result.innerHTML = "<h2>Please Enter Movie Name</h2>";
    return; 
  }

  try {
    let response = await fetch(
      `http://www.omdbapi.com/?t=${name}&apikey=${key}`
    );
    let data = await response.json();
    if (data.Response === "True") {
      image.src = data.Poster;
      result.style.opacity = "1";
      title.innerHTML = `Movie Name: ${data.Title}`;
      year.innerHTML = `Year: ${data.Year}`;
      type.innerHTML = `Type: ${data.Type}`;
      runtime.innerHTML = `Runtime: ${data.Runtime}`;
    } else {
      result.style.opacity = "1";
      result.innerHTML = "<h2>Movie Not Found</h2>";
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    result.style.opacity = "1";
    result.innerHTML = "<h2>Error fetching data</h2>";
  }
}
async function showmoredetails() {
    plot.style.display="block";
    genre.style.display="block";
    rating.style.display="block";
    let name=movie.value;
  let response = await fetch(`http://www.omdbapi.com/?t=${name}&apikey=${key}`);
  let data = await response.json();
 headings.forEach(heading=>heading.style.display="block");
  plot.innerHTML = data.Plot;
  genre.innerHTML = data.Genre;
  rating.innerHTML = data.imdbRating;
}
btn.addEventListener("click", fetchresults);
showmore.addEventListener("click", showmoredetails);
