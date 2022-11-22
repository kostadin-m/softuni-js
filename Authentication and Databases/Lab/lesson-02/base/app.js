const baseUrl = "http://localhost:3030";

window.addEventListener("load", async () => {
    const getRecipes = await fetch(`${baseUrl}/jsonstore/cookbook/recipes`);
    const recipes = await getRecipes.json();

    renderRecipes(Object.values(recipes));
});

function renderRecipes(recipes) {
    let mainElement = document.querySelector("main");
    mainElement.innerHTML = "";
    recipes.forEach((x) => {
        mainElement.appendChild(createRecipe(x));
    });
}

function createRecipe(recipe) {
    const recipeElement = document.createElement("article");
    recipeElement.setAttribute("class", "preview");

    const recipeId = recipe._id;

    recipeElement.addEventListener("click", async (event) => {
        const request = await fetch(`${baseUrl}/jsonstore/cookbook/details/${recipeId}`);
        const data = await request.json();
        let mainElement = document.querySelector("main");
        mainElement.innerHTML = "";

        const articleElement = document.createElement("article");

        articleElement.innerHTML = `<article>
        <h2>${data.name}</h2>
        <div class="band">
            <div class="thumb">
                <img src="${data.img}">
            </div>
            <div class="ingredients">
                <h3>Ingredients:</h3>
                <ul>
                    ${data.ingredients.map((x) => `<li>${x}</li>`).join("")}
                </ul>
            </div>
        </div>
        <div class="description">
            <h3>Preparation:</h3>
            ${data.steps.map((x) => `<p>${x}</p>`).join("")}
        </div>
    </article>`;
        mainElement.append(articleElement);
        event.currentTarget.removeEventListener("click");
    });

    recipeElement.innerHTML = `
        <div class="title">
            <h2>${recipe.name}</h2>
        </div>
        <div class="small">
            <img src="${recipe.img}">
        </div>`;
    return recipeElement;
}
