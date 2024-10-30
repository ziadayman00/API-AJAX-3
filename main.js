// AJAX
//=========

// 1 
// notes
// XMLHttpRequest
// readyState ==> to make sure that it return 4 
// status must be 200
// responseText store response as string so we using parse


// (function getData(){
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function(){
//         if (this.readyState == 4 && this.status == 200){
//             var listItemsText = this.responseText;
//             var listItems = JSON.parse(listItemsText);

//             var cardsContainer = '';
//             for (var i = 0; i < listItems.length; i++){
//                 var card = `<div class="card col-md-4 text-center mb-5" style="width: 18rem; height: 30rem;">
//                                         <img src="${listItems[i].url}" class="card-img-top img-fluid h-50" alt="">
//                                         <div class="card-body">
//                                             <h5 class="card-title">${listItems[i].title}</h5>
//                                             <p class="card-text">${listItems[i].recipe_id}</p>
//                                         </div>
//                                     </div> `;
//                 cardsContainer = cardsContainer + card
                
//             }
//             document.querySelector(".cards-container").innerHTML = cardsContainer
//         }
    
//     }
//     xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true)
//     xhttp.send()
// })()

//###############################################################################
//###############################################################################

//2
// fetch('https://dummyjson.com/products')
// .then (function (items){
//     return items.json()
// })
// .then (function (listItems){
//     var cardsContainer = '';
//     for (var i = 0; i < listItems.products.length; i++){
//         var card = `<div class="card col-md-4 text-center mb-5" style="width: 18rem; height: 30rem;">
//                                 <img src="${listItems.products[i].images[0]}" class="card-img-top img-fluid h-50" alt="">
//                                 <div class="card-body">
//                                     <h5 class="card-title">${listItems.products[i].title}</h5>
//                                     <p class="card-text">${listItems.products[i].price}$</p>
//                                 </div>
//                             </div> `;
//         cardsContainer = cardsContainer + card
        
//     }
//     document.querySelector(".cards-container").innerHTML = cardsContainer
// })

//###############################################################################
//###############################################################################

//3
// await for order
(async function getData(){
    var items = await fetch ('https://forkify-api.herokuapp.com/api/search?q=pizza');
    var listItems = await items.json();
    var recipes = listItems.recipes;
    var cardsContainer = '';
    for (var i = 0; i <+ recipes.length; i++){
        var card = `<div class="card col-md-4 text-center mb-5" style="width: 18rem; height: 30rem;">
                                <img src="${recipes[i].image_url}" class="card-img-top img-fluid h-50" alt="">
                                <div class="card-body">
                                    <h5 class="card-title">${recipes[i].title}</h5>
                                    <p class="card-text">${recipes[i].recipe_id}</p>
                                </div>
                            </div> `;
        cardsContainer = cardsContainer + card
        
    }
    document.querySelector(".cards-container").innerHTML = cardsContainer
})()
