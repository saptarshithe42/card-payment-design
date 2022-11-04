// alert("working");

var card_holder_name_input = document.querySelector("#card-holder");
var card_number_input = document.querySelector("#card-number");
var card_holder_name = document.querySelector(".card-holder-name");
var card_number = document.querySelector(".card-number");

// card.textContent = "Saptarshi";

// function card_holder_name_func()
// {
//     card_holder_name.textContent = (card_holder_name_input.value).toLocaleUpperCase();
// }

var numberOfCardInputs = document.querySelectorAll(".card-input").length;

for(let i = 0; i < numberOfCardInputs; i++)
{
    document.querySelectorAll(".card-input")[i].addEventListener("input", function(event){
        let divClassName = "." + this.id + "-div";
        let div = document.querySelector(divClassName);
        div.textContent = document.querySelector("#" + this.id).value.toLocaleUpperCase();
        console.log(this.id);
        // console.log(event.target);
    });
}


/*
card_holder_name_input.addEventListener("input", function(event){
    let divClassName = "." + this.id + "-div";
    let div = document.querySelector(divClassName);
    div.textContent = document.querySelector("#" + this.id).value.toLocaleUpperCase();
    console.log(this.id);
    // console.log(event.target);
});

card_number_input.addEventListener("input", function(event){
    let divClassName = "." + this.id + "-div";
    let div = document.querySelector(divClassName);
    div.textContent = document.querySelector("#" + this.id).value.toLocaleUpperCase();
    console.log(this.id);
    // console.log(event.target);
});
*/


var count = 0;

function card_number_func()
{
    card_number.textContent = (card_number_input.value);
}