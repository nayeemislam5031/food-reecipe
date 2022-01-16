const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('meal-details-content');

const recipeCloseBtn = document.getElementById('recipe-close-btn');
//event listener
searchBtn.addEventListener('click',getMealList);
mealList.addEventListener('click',getMealRecipe);



function getMealList(){
    let searchInputTxt = document.getElementById('search-input').value.trim();
    

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(res => res.json())
    .then(data=> {
        let html = "";
        if (data.meals) {
            data.meals.forEach(meal => {
                html+= `
                <div class="meal-item" data-id="${meal.idMeal}">
                        <div class="meal-img">
                            <img src="${meal.strMealThumb} " alt="Food">
                        </div>
                        <div class="meal-name">
                            <h3>"${meal.strMeal} " </h3>
                            <a href="#" class="recipe-btn">Get Recipe</a>
                        </div>
                </div>
                `;
            });
            mealList.classList.remove('notFound')
            
        }

        else{
            html = "Sorry, we don't find any meal!";
            mealList.classList.add('notFound');

        }

    mealList.innerHTML = html;    
    });
}


function getMealRecipe(e){
    e.preventDefault();
    if(e.target.classList.contains('recipe-btn')){
        let mealItem = e.target.parentElement.parentElement;
        
    }
}
