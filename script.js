window.addEventListener("DOMContentLoaded",onDocumentReady);

function onDocumentReady(event){
    /*
    ******************************************************************                      
                        Event Binding                              
    ******************************************************************
    */
    // Instanciate relevant node lists
    let voteButtons = document.querySelectorAll('.vote-button .vote');
    let submitBtn = document.getElementById("submit-btn");

    //Bind vote action to each vote button
    voteButtons.forEach( function(button,index){
        button.addEventListener("click",onclickRatingHandler);
    })
    
    //Bind submit action to submit button
    submitBtn.addEventListener("click",onRatingSubmitHandler);
}

function onclickRatingHandler(event){
    let selectedElements = document.querySelectorAll ('.selected');
    selectedElements.forEach(element => {element.classList.remove('selected')});
    let ratingInput = document.getElementById('rating-input');
    let currentRating = event.target.getAttribute("data-rating");
    ratingInput.value=currentRating;
    event.target.classList.add('selected');// to do active
}

function onRatingSubmitHandler(event){
    let ratingInput = document.getElementById('rating-input');
    let ratingValue = document.getElementById("fetched-rating");
    ratingValue.innerHTML = ratingInput.value;

    let submitContainer = document.getElementById("submit-container");
    let ratingContainer = document.getElementById("rating-container");
    submitContainer.classList.remove("inactive");
    ratingContainer.classList.add("inactive");
}