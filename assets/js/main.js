const author = 'Made by: <strong>Amjad Hamidi</strong>';
function getAuthor(){
    document.getElementById('authorName').innerHTML = author;
}
getAuthor();


async function getRecipes(){
    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const data = await response.json();
    //console.log(data); return => Object contains [count:28 , Array of recipes [each element of it has {publisher,title,source_url,recipe_id,image_url,social_rank,publisher_url}]]
    const recipes = data.recipes; 
    //console.log(recipes);  return => Array of recipes 
    
    const result = recipes.map(function(recipe){
        return `
            <div class="recipe">
                <h2>${recipe.title}</h2>
                <img src = '${recipe.image_url}' />
            </div>
        `;
    }).join('');
    
    document.querySelector('.recipes .row').innerHTML = result; // insert Array of recipe that contains now {title,image_url} HTML into the HTML document
}

getRecipes();