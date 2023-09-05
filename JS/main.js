
let rowData = document.getElementById("rowData");
let searchContainer = document.getElementById("searchContainer");
let submitBtn;



let x = window.screen.width;
let navWidth = $("nav").width();
console.log($(".black-nav").outerWidth());
$("nav").css("width", (25 / 100) * x);
const blackNav = $(".black-nav").outerWidth();
$("nav").css("left", -blackNav);
$(".menu ").click(function () {
    $(".anchors a,.slide-d").slideDown(600);

    $("nav").animate({ left: "0px" }, 600);
    
    $(".black-nav").css("paddingLeft", "10px");
    $(".nav-bottom").animate({ right: blackNav + "px" });



    $(".menu").hide();
    $(".closing").show(200);

});
$(".anchors a,.closing ").click(function (e) {
    $(".anchors a,.slide-d").slideUp(600);
    e.preventDefault();
    $("nav").animate({ left: -blackNav + "px" }, 600);
    $(".nav-bottom").animate({ left: -blackNav + "px" });
    // let cal=navWidth-blackNav
    // $("nav").css("width",`${cal}px`);
    // $("white-nav").css ("width", `${navWidth}`);
    $(".closing").hide();
    $(".menu").show(200);
    $(".black-nav").css("paddingLeft", "0px");
});

var random1 = document.getElementById("sec1Ran");

let reqest1arr = [];
(async function getRandomMEals() {
    $("#sec1").removeClass("d-none");
    $("#sec2").addClass("d-none");
    $("#sec3").addClass("d-none");
    $("#sec4").addClass( "d-none");
    $("#sec5").addClass("d-none");
    $("#sec6").addClass("d-none");
    $("#sec7").addClass("d-none");
    $("#sec8").addClass( "d-none");
    $("#sec9").addClass("d-none");
    $("#sec10").addClass( "d-none");


    

    let x = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");


    reqest1arr = await x.json();

    for (let i = 0; i < reqest1arr.meals.length; i++) {
        let sec1Ran = `
      <div class="col-lg-3 overflow-hidden ">
                 <div class="image-of-20-meals  position-relative  ">
                    
                        <img src="${reqest1arr.meals[i].strMealThumb}" class="w-100 rounded-2  " alt="meals">
    
                   
                  <div class="photo-slider position-absolute top-0 bottom-0 start-0 end-0 rounded-2 d-flex justify-content-start align-items-center  ">
                      <p class="text-black soho ps-2">${reqest1arr.meals[i].strMeal}</p>
    
                 </div>
    
    
                 </div>
        </div>
      `

        $(random1).append(sec1Ran)

    }


})();

$("#sec1Ran").on("click", ".image-of-20-meals", function () {
    let get1 = $.trim($(this).text());
   
    ingredient(get1);


});

let ingredientHtml = document.getElementById("sec2Ing")
let badgesHtml = document.getElementById("recipe");

let ing="";
async function ingredient(v) {
    $("#sec7").addClass("d-none");
    $("#sec8").addClass( "d-none");
    $("#sec9").addClass("d-none");

    $("#sec2").removeClass("d-none");
    $("#sec1").addClass("d-none");
    $("#sec3").addClass("d-none");
    $("#sec5").addClass("d-none");
    $("#sec6").addClass("d-none");

    $("#sec4").addClass( "d-none");

    
    
    (async function getRandomMEals() {
        let x = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${v}`);


        let req_ingredient = await x.json();
        let arrayofing = [
            req_ingredient.meals[0].strMeasure1,
            req_ingredient.meals[0].strMeasure2,
            req_ingredient.meals[0].strMeasure3,
            req_ingredient.meals[0].strMeasure4,
            req_ingredient.meals[0].strMeasure5,
            req_ingredient.meals[0].strMeasure6,
            req_ingredient.meals[0].strMeasure7,
            req_ingredient.meals[0].strMeasure8,
            req_ingredient.meals[0].strMeasure9,
            req_ingredient.meals[0].strMeasure10,
            req_ingredient.meals[0].strMeasure11,
            req_ingredient.meals[0].strMeasure12,
            req_ingredient.meals[0].strMeasure13,

            req_ingredient.meals[0].strMeasure14,

            req_ingredient.meals[0].strMeasure15,

            req_ingredient.meals[0].strMeasure16,

            req_ingredient.meals[0].strMeasure17,
            req_ingredient.meals[0].strMeasure18,

            req_ingredient.meals[0].strMeasure19,
            req_ingredient.meals[0].strMeasure20,
            req_ingredient.meals[0].strMeasure21]

        let newArrForIngre = [];

        for (let i = 0; i < arrayofing.length; i++) {
            if (arrayofing[i] == " " || arrayofing[i] == undefined) {
                continue;
            }
            else {
                newArrForIngre.push(arrayofing[i])

            }



        }
       
        let putBadge = "";
        for (let i = 0; i < newArrForIngre.length; i++) {
            putBadge += `
           <div class="col-lg-2">
                <span class="badge pt-2  pb-2  ">${newArrForIngre[i]}</span>
             </div>    
           
        `
        }
      

         ing += `
     <div class="col-xl-4  ">
     <div class="ingredients">
         <figure >
             <img src="${req_ingredient.meals[0].strMealThumb}" class="w-100 rounded-3 " alt="meal">
         </figure>
         <figcaption class="text-white">
         ${req_ingredient.meals[0].strMeal}
         </figcaption>
     </div>
 </div>
 <div class="col-lg-8">
         <div class="instruction ">
             <h2 class="text-white">Instructions </h2>
             <p class="text-white inst-para">${req_ingredient.meals[0].strInstructions}</p>
             
                          
             <p class="text-white paa"><span>Area : </span>${req_ingredient.meals[0].strArea}</p>
             <p class="text-white paa"><span>Category : </span>${req_ingredient.meals[0].strCategory}</p>
             <div class="recipes">
                 <p class="text-white paa"><span>Recipes : </span></p><br>
                 <div class="recipes-icons">
                     <div class="container-fluid ">
                     <div class="row gx-1 gy-2  " id="recipe">
                    ${putBadge}
                   
                 </div>
                        
                     </div>

                 </div>
                
                 
                 


             </div>
             <div class="tags mt-3">
                 <p class="text-white paa"><span>Tags : </span></p><br>

                 <div class="tags-badge ps-3 pe-3 pt-1 pb-1 rounded-2">
                 ${req_ingredient.meals[0].strTags}
                 </div> <br>

                <div class="tag-sources d-flex gap-2">
                 <div class="tags-badge-sorurc1 ps-3 pe-3 pt-1 pb-1 rounded-2">
                     <a href="${req_ingredient.meals[0].strSource}" target="_blank" class="text-decoration-none text-white">source</a>
                 </div> 
                 <div class="tags-badge-sorurc2 ps-3 pe-3 pt-1 pb-1 rounded-2">
                     <a href="${req_ingredient.meals[0].strYoutube}" target="_blank" class="text-decoration-none text-white">Youtube</a>
                 </div> 
                </div>

             </div>
         </div>
     </div>
     `
        ingredientHtml.innerHTML=ing;


       

    })();
   
    ing="";



}
let inputName=document.querySelector(".input1");
let inputLetter=document.querySelector(".input2");
async function getRandomMEals(get) {
    let x2 = await fetch(`http://www.themealdb.com/api/json/v1/1/search.php?s=${get}`);


    let reqest3arr = await x2.json();
    if(reqest3arr.meals==null){
        let x2Test = await fetch(`http://www.themealdb.com/api/json/v1/1/search.php?s=salad`);


        let reqest3arrtest = await x2Test.json();
        return reqest3arrtest;
    }
    else{
        return reqest3arr;
        

    }
};
async function getRandomMEalsbyLetter(gets) {
    let l = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${gets}`);


    let reqest3arrLetter = await l.json();
    if(reqest3arrLetter.meals==null){
        let lTest = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${gets}`);


        let reqest3arrLettertest  = await lTest.json();
        return reqest3arrLettertest ;
    }
    else{
        return reqest3arrLetter;
        

    }
};
$(inputLetter).keyup(async function () {
    
    
    if (this.value == "") {
        var DataSent2 = await  getRandomMEalsbyLetter("s");
        // console.log(DataSent2);
        searchByFirstLetter(DataSent2);
        
    }
    else {
        var DataSent2 = await  getRandomMEalsbyLetter(this.value);
        searchByFirstLetter(DataSent2);
        
    }
   
    
    
});
$(inputName).keyup(async function () {
    

    if (this.value == "") {
        var DataSent = await  getRandomMEals("salad");
        // console.log(DataSent);
        searchByName(DataSent);
        console.log(DataSent)
    }
    else {
        var DataSent = await  getRandomMEals(this.value);
        searchByName(DataSent);
        
    }
   
    
    
});
let sec3PutHtml=document.getElementById("sec3Ran")
function searchByName(Nameing)
{
  
            let sec3Ran="";
        for (let i = 0; i < (Nameing.meals).length; i++) {
            sec3Ran += `
          <div class="col-lg-3 overflow-hidden ">
                     <div class="image-of-20-meals2  position-relative  ">
                        
                            <img src="${Nameing.meals[i].strMealThumb}" class="w-100 rounded-2  " alt="meals">
        
                       
                      <div class="photo-slider position-absolute top-0 bottom-0 start-0 end-0 rounded-2 d-flex justify-content-start align-items-center  ">
                          <p class="text-black soho ps-2">${Nameing.meals[i].strMeal}</p>
        
                     </div>
        
        
                     </div>
            </div>
          `
         
        }
        sec3PutHtml.innerHTML=sec3Ran
    
    
}
function searchByFirstLetter(letter)
{
  
            let sec3Ran="";
        for (let i = 0; i < (letter.meals).length; i++) {
            sec3Ran += `
          <div class="col-lg-3 overflow-hidden ">
                     <div class="image-of-20-meals2  position-relative  ">
                        
                            <img src="${letter.meals[i].strMealThumb}" class="w-100 rounded-2  " alt="meals">
        
                       
                      <div class="photo-slider position-absolute top-0 bottom-0 start-0 end-0 rounded-2 d-flex justify-content-start align-items-center  ">
                          <p class="text-black soho ps-2">${letter.meals[i].strMeal}</p>
        
                     </div>
        
        
                     </div>
            </div>
          `
         
        }
        sec3PutHtml.innerHTML=sec3Ran
    
    
}
$(".a-1").click(function(){
    $("#sec6").addClass("d-none");
    $("#sec7").addClass("d-none");
    $("#sec8").addClass( "d-none");
    $("#sec9").addClass("d-none");
    $("#sec10").addClass( "d-none");
    $("#sec3").removeClass( "d-none");
    $("#sec2").addClass( "d-none");
    $("#sec4").addClass( "d-none");
    $("#sec5").addClass("d-none");

    $("#sec1").addClass( "d-none");
// $("#sec3").toggleClass("d-none", "d-block");

//   $("#sec1").toggleClass( "d-block","d-none");
//   $("#sec2").toggleClass( "d-block","d-none");



})
$("#sec3Ran").on("click", ".image-of-20-meals2", function () {
    let get1 = $.trim($(this).text());
   
    ingredient(get1);
    


});
$(".a-2").click(function(){
    $("#sec7").addClass("d-none");
    $("#sec9").addClass("d-none");
    $("#sec10").addClass( "d-none");
    $("#sec4").removeClass( "d-none");
    $("#sec3").addClass( "d-none");
    $("#sec2").addClass( "d-none");
    $("#sec5").addClass("d-none");
    $("#sec6").addClass("d-none");
    $("#sec8").addClass( "d-none");

    $("#sec1").addClass( "d-none");





getAllcategories();
});
let categoresHtml=document.getElementById("sec4Ran");
async function getAllcategories() {
   
    let c = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");


   let reqest1CategoryArr = await c.json();

    for (let i = 0; i < (reqest1CategoryArr.categories).length; i++) {
        let sec4Ran = `
        <div class="col-lg-3 overflow-hidden  ">
        <div class="image-of-20-meals3 position-relative  ">
         
             <img src="${reqest1CategoryArr.categories[i].strCategoryThumb}" class="w-100 rounded-2  " alt="categories">

         
         <div class="photo-slider position-absolute top-0 bottom-0 start-0 end-0 rounded-2 d-flex flex-column justify-content-start align-items-center text-center ">
             <p class="text-black awd ps-2" id="awd">${reqest1CategoryArr.categories[i].strCategory}</p>
             <h4 class="pararg">${reqest1CategoryArr.categories[i].strCategoryDescription}</h4>

        </div>


        </div>
     </div>
        `
      
        $(categoresHtml).append(sec4Ran)

    }


};

$("#sec4Ran").on("click", ".image-of-20-meals3 ", function () {
    
    
    // console.log(this)
    let get4 = $.trim($(this).find(".awd").text());
    
    searchbyMainCategory(get4)
});
let sec5PutHtml=document.getElementById("sec5Ran");
async function searchbyMainCategory(v) {
    $("#sec7").addClass("d-none");
    $("#sec8").addClass( "d-none");

    $("#sec5").removeClass("d-none");
    $("#sec6").addClass("d-none");
    $("#sec2").addClass("d-none");
    $("#sec1").addClass("d-none");
    $("#sec3").addClass("d-none");

    $("#sec4").addClass( "d-none");


    
    let categoruMainPut="";
    (async function getRandomCATEGORY() {
        let mc = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${v}`);


        let req_category = await mc.json();
        console.log(req_category);
        
        
        for (let i = 0; i < req_category.meals.length; i++) {
           categoruMainPut+=
            `<div class="col-lg-3 overflow-hidden  ">
            <div class="image-of-20-meals4 position-relative  ">
             
                 <img src="${req_category.meals[i].strMealThumb}" class="w-100 rounded-2  " alt="meals">
 
             
             <div class="photo-slider position-absolute top-0 bottom-0 start-0 end-0 rounded-2 d-flex flex-column justify-content-start align-items-center text-center ">
                 <p class="text-black awd ps-2">${req_category.meals[i].strMeal}</p>
                
 
            </div>
 
 
            </div>
         </div>`
        }
    




        sec5PutHtml.innerHTML=categoruMainPut;


    })();
   




};
$("#sec5Ran").on("click", ".image-of-20-meals4", function () {
    let get5 = $.trim($(this).text());
   
    ingredient(get5);
    


});
$(".a-3").click(function(){
    $("#sec7").addClass("d-none");
    $("#sec8").addClass( "d-none");
    $("#sec9").addClass("d-none");
    $("#sec10").addClass( "d-none");
    $("#sec6").removeClass( "d-none");
    $("#sec5").addClass("d-none");
    $("#sec4").addClass( "d-none");
    $("#sec3").addClass( "d-none");
    $("#sec2").addClass( "d-none");
    $("#sec1").addClass( "d-none");
    getAllcountries();
});
let sec6PutHtml=document.getElementById("sec6Ran");
async function getAllcountries() {
   
    let country = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
    let countryARRAY="";

   let reqest1CountryArr = await country.json();
   console.log(reqest1CountryArr)

    for (let i = 0; i < (reqest1CountryArr.meals).length; i++) {
        countryARRAY+=`
        <div class="col-lg-3 d-flex  justify-content-center align-items-center  ">
        <div class="div Countries w-50  d-flex flex-column justify-content-center align-items-center">
            <figure>
                <img src="./images/coronavirus.png" class="w-100" alt="Countries">
            </figure>
            <figcaption>
                <h2 class="text-white fw-bold ">${reqest1CountryArr.meals[i].strArea}</h2>
            </figcaption>
        </div>
    </div>
        
        `
        sec6PutHtml.innerHTML=countryARRAY;

    
    }


};
$("#sec6Ran").on("click", ".Countries", function () {
    let get6 = $.trim($(this).text());
   
    // ingredient(get6);
    console.log(get6);
    
    searchbyMainCountry(get6)

});
let sec7PutHtml=document.getElementById("sec7Ran");
async function searchbyMainCountry(v) {
    $("#sec9").addClass("d-none");
    $("#sec10").addClass( "d-none");
    $("#sec7").removeClass("d-none");
    $("#sec6").addClass("d-none");
    $("#sec5").addClass("d-none");
    $("#sec4").addClass( "d-none");
    $("#sec3").addClass("d-none");
    $("#sec2").addClass("d-none");
    $("#sec1").addClass("d-none");
    $("#sec8").addClass( "d-none");


    
    let CountryMainput="";
    (async function getRandomCATEGORY() {
        let con = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${v}`);


        let req_country = await con.json();
        console.log(req_country);
        
        
        for (let i = 0; i < req_country.meals.length; i++) {
           CountryMainput+=
            `<div class="col-lg-3 overflow-hidden  ">
            <div class="image-of-20-meals6 position-relative  ">

                 <img src="${req_country.meals[i].strMealThumb}" class="w-100 rounded-2  " alt="meals">
 
             
             <div class="photo-slider position-absolute top-0 bottom-0 start-0 end-0 rounded-2 d-flex flex-column justify-content-start align-items-center text-center ">
                 <p class="text-black awd ps-2">${req_country.meals[i].strMeal}</p>
                
 
            </div>
 
 
            </div>
         </div>`
        }
    




        sec7PutHtml.innerHTML=CountryMainput;


    })();
   




};
$("#sec7Ran").on("click", ".image-of-20-meals6", function () {
    let get7 = $.trim($(this).text());
   
    ingredient(get7);
    


});
$(".a-4").click(function(){
    $("#sec9").addClass("d-none");
    $("#sec10").addClass( "d-none");

    $("#sec8").removeClass( "d-none");

    $("#sec7").addClass("d-none");

    $("#sec4").addClass( "d-none");
    $("#sec3").addClass( "d-none");
    $("#sec2").addClass( "d-none");
    $("#sec5").addClass("d-none");
    $("#sec6").addClass("d-none");

    $("#sec1").addClass( "d-none");





    getAllingredents()
});
let sec8PutHtml=document.getElementById("sec8Ran");
async function getAllingredents() {
   
    let ListAllIngredents = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
    let ListAllIngredentsput="";

   let reqestListAllIngredientArr = await ListAllIngredents.json();
   console.log(reqestListAllIngredientArr);

    for (let i = 0; i < (reqestListAllIngredientArr.meals).length; i++) {
        ListAllIngredentsput+=`
       
            <div class="col-lg-3 d-flex  justify-content-center align-items-center  ">
                <div class="div foods w-100  d-flex flex-column justify-content-center align-items-center">
                    <figure class="w-100  d-flex  justify-content-center align-items-center ">
                        <img src="./images/burger.png" class="w-50" alt="Countries">
                    </figure>
                    <figcaption class="d-flex flex-column justify-content-center align-items-center">
                        <h3 class="text-white fwa ">${reqestListAllIngredientArr.meals[i].strIngredient}</h3>
                        <p class="text-white text-center  ">${reqestListAllIngredientArr.meals[i].strDescription}</p>    
                    </figcaption>
                    
                </div>
            </div>
           
           
           
      
    
        `

    
    }
    sec8PutHtml.innerHTML=ListAllIngredentsput;


};
$("#sec8Ran").on("click", ".foods", function () {
    let get8 = $.trim($(this).find(".fwa").text());
    
   console.log(get8)
    getMainIngredent(get8);
    


});
let sec9PutHtml=document.getElementById("sec9Ran");
async function getMainIngredent(v) {
    $("#sec9").removeClass("d-none");
    $("#sec8").addClass( "d-none");

    $("#sec7").addClass("d-none");
    $("#sec6").addClass("d-none");
    $("#sec5").addClass("d-none");
    $("#sec4").addClass( "d-none");
    $("#sec3").addClass("d-none");
    $("#sec2").addClass("d-none");
    $("#sec1").addClass("d-none");


    
    let cingMainput="";
    (async function getRandoming() {
        let ingGET = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${v}`);


        let req_INGRED = await ingGET.json();
        console.log(req_INGRED);
        
        
        for (let i = 0; i < req_INGRED.meals.length; i++) {
           cingMainput+=
            `<div class="col-lg-3 overflow-hidden  ">
            <div class="image-of-20-meals9 position-relative  ">

                 <img src="${req_INGRED.meals[i].strMealThumb}" class="w-100 rounded-2  " alt="meals">
 
             
             <div class="photo-slider position-absolute top-0 bottom-0 start-0 end-0 rounded-2 d-flex flex-column justify-content-start align-items-center text-center ">
                 <p class="text-black awd ps-2">${req_INGRED.meals[i].strMeal}</p>
                
 
            </div>
 
 
            </div>
         </div>`
        }
    




        sec9PutHtml.innerHTML=cingMainput;


    })();
   




};
$("#sec9Ran").on("click", ".image-of-20-meals9", function () {
    let get9 = $.trim($(this).text());
   
    ingredient(get9);
    


});




// function showContacts() {
//     rowData.innerHTML = `<div class="contact min-vh-100 d-flex justify-content-center align-items-center">
//     <div class="container w-75 text-center">
//         <div class="row g-4">
//             <div class="col-md-6">
//                 <input id="nameInput" onkeyup="inputsValidation()" type="text" class="form-control" placeholder="Enter Your Name">
//                 <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
//                     Special characters and numbers not allowed
//                 </div>
//             </div>
//             <div class="col-md-6">
//                 <input id="emailInput" onkeyup="inputsValidation()" type="email" class="form-control " placeholder="Enter Your Email">
//                 <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
//                     Email not valid *exemple@yyy.zzz
//                 </div>
//             </div>
//             <div class="col-md-6">
//                 <input id="phoneInput" onkeyup="inputsValidation()" type="text" class="form-control " placeholder="Enter Your Phone">
//                 <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
//                     Enter valid Phone Number
//                 </div>
//             </div>
//             <div class="col-md-6">
//                 <input id="ageInput" onkeyup="inputsValidation()" type="number" class="form-control " placeholder="Enter Your Age">
//                 <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
//                     Enter valid age
//                 </div>
//             </div>
//             <div class="col-md-6">
//                 <input  id="passwordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Enter Your Password">
//                 <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
//                     Enter valid password *Minimum eight characters, at least one letter and one number:*
//                 </div>
//             </div>
//             <div class="col-md-6">
//                 <input  id="repasswordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Repassword">
//                 <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
//                     Enter valid repassword 
//                 </div>
//             </div>
//         </div>
//         <button id="submitBtn" disabled class="btn btn-outline-danger px-2 mt-3">Submit</button>
//     </div>
// </div> `
//     submitBtn = document.getElementById("submitBtn")


//     document.getElementById("nameInput").addEventListener("focus", () => {
//         nameInputTouched = true
//     })

//     document.getElementById("emailInput").addEventListener("focus", () => {
//         emailInputTouched = true
//     })

//     document.getElementById("phoneInput").addEventListener("focus", () => {
//         phoneInputTouched = true
//     })

//     document.getElementById("ageInput").addEventListener("focus", () => {
//         ageInputTouched = true
//     })

//     document.getElementById("passwordInput").addEventListener("focus", () => {
//         passwordInputTouched = true
//     })

//     document.getElementById("repasswordInput").addEventListener("focus", () => {
//         repasswordInputTouched = true
//     })
// }

let nameInputTouched = false;
let emailInputTouched = false;
let phoneInputTouched = false;
let ageInputTouched = false;
let passwordInputTouched = false;
let repasswordInputTouched = false;




function inputsValidation() {
    if (nameInputTouched) {
        if (nameValidation()) {
            document.getElementById("nameAlert").classList.replace("d-block", "d-none")

        } else {
            document.getElementById("nameAlert").classList.replace("d-none", "d-block")

        }
    }
    if (emailInputTouched) {

        if (emailValidation()) {
            document.getElementById("emailAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("emailAlert").classList.replace("d-none", "d-block")

        }
    }

    if (phoneInputTouched) {
        if (phoneValidation()) {
            document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("phoneAlert").classList.replace("d-none", "d-block")

        }
    }

    if (ageInputTouched) {
        if (ageValidation()) {
            document.getElementById("ageAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("ageAlert").classList.replace("d-none", "d-block")

        }
    }

    if (passwordInputTouched) {
        if (passwordValidation()) {
            document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("passwordAlert").classList.replace("d-none", "d-block")

        }
    }
    if (repasswordInputTouched) {
        if (repasswordValidation()) {
            document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")

        }
    }


    if (nameValidation() &&
        emailValidation() &&
        phoneValidation() &&
        ageValidation() &&
        passwordValidation() &&
        repasswordValidation()) {
        submitBtn.removeAttribute("disabled")
    } else {
        submitBtn.setAttribute("disabled", true)
    }
}

function nameValidation() {
    return (/^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value))
}

function emailValidation() {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value))
}

function phoneValidation() {
    return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneInput").value))
}

function ageValidation() {
    return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("ageInput").value))
}

function passwordValidation() {
    return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passwordInput").value))
}

function repasswordValidation() {
    return document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value
}



$(".a-5").click(function(){
    $("#sec7").addClass("d-none");
    $("#sec8").addClass( "d-none");
    $("#sec9").addClass("d-none");
    $("#sec6").addClass("d-none");

    $("#sec10").removeClass( "d-none");
    $("#sec5").addClass("d-none");
    $("#sec4").addClass( "d-none");
    $("#sec3").addClass( "d-none");
    $("#sec2").addClass( "d-none");
    $("#sec1").addClass( "d-none");

});