import { FormEventListener } from "./editMovie.js";
import { router } from "./router.js";

const movieDetails = document.querySelector("#movie-example");
const editForm = document.querySelector("#edit-movie form");

export async function loadDetails(id) {
    movieDetails.style.display = "block";

    const currentUserID = sessionStorage.getItem("id");

    const [movie, likes, likedbyUser] = await Promise.all([
        getMovieDetails(id),
        getLikesCount(id),
        ownLike(currentUserID, id),
    ]);

    renderDetails(currentUserID, movie, likes, likedbyUser);
}

function renderDetails(userId, movie, likesCount, likedbyUser) {
    movieDetails.innerHTML = `
    <div class="container">
          <div class="row bg-light text-dark">
            <h1>Movie title: ${movie.title}</h1>
            <div class="col-md-8">
              <img class="img-thumbnail" src="${movie.img}" alt="Movie"/>
            </div>
            <div class="col-md-4 text-center">
              <h3 class="my-3">Movie Description</h3>
              <p>${movie.description}</p>
              ${buttons(userId, movie, likesCount, likedbyUser)}
            </div>
          </div>
        </div>`;
    const likeButtonElement = document.querySelector(".col-md-4.text-center > .btn.btn-primary");
    const deleteButton = document.querySelector(".col-md-4.text-center > .btn.btn-danger");
    const editButton = document.querySelector(".col-md-4.text-center > .btn.btn-warning");
    if (likeButtonElement) {
        likeButtonElement.addEventListener("click", (e) => likeMovie(e, movie._id));
    } else if (deleteButton && editButton) {
        deleteButton.addEventListener("click", (e) => deleteCurrent(e, movie._id));
        editForm.addEventListener("submit", function submitted(e) {
            e.preventDefault();
            FormEventListener(e, movie._id);
            editForm.removeEventListener("submit", submitted);
        });
        editButton.addEventListener("click", function clicked(e) {
            e.preventDefault();
            router("/editMovie");
            editButton.removeEventListener("click", clicked);
        });
    }
}

async function getMovieDetails(id) {
    const request = await fetch("http://localhost:3030/data/movies/" + id);
    const data = await request.json();

    return data;
}

async function ownLike(userId, movieId) {
    const request = await fetch(`http://localhost:3030/data/likes`);
    let result = false;
    const res = await request.json();
    Object.values(res).forEach((el) => {
        if (el._ownerId === userId && el.movieId === movieId) {
            result = true;
        }
    });

    return result;
}

async function getLikesCount(id) {
    const request = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`);
    const data = await request.json();

    return data;
}

async function likeMovie(e, movieId) {
    e.preventDefault();

    await fetch(`http://localhost:3030/data/likes`, {
        method: "POST",
        headers: { "content-type": "application/json", "X-Authorization": sessionStorage.getItem("accessToken") },
        body: JSON.stringify({ movieId }),
    });
    loadDetails(movieId);
}

function buttons(userId, movie, likes, likedByCurrentUser) {
    let controls = [];
    const isOwner = userId == movie._ownerId;

    if (isOwner) {
        controls.push(`<a class="btn btn-danger" href="#">Delete</a>`);
        controls.push(`<a class="btn btn-warning" href="#">Edit</a>`);
    } else if (userId && likedByCurrentUser == false) {
        controls.push('<a class="btn btn-primary" href="#">Like</a>');
    }
    controls.push(`<span class="enrolled-span">Liked ${likes}</span>`);
    return controls.join("");
}

async function deleteCurrent(e, id) {
    e.preventDefault();
    await fetch(`http://localhost:3030/data/movies/${id}`, {
        method: "DELETE",
        headers: { "X-Authorization": sessionStorage.getItem("accessToken") },
    });
    router("/");
}
