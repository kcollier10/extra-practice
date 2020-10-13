$(function() {

    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet

    let pet_info = {
        name: "Chief",
        weight: 80,
        happiness: 100
    }

    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();

    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);




    function clickedTreatButton() {
        pet_info.happiness = pet_info.happiness + 1;
        pet_info.weight = pet_info.weight + 1;


        checkAndUpdatePetInfoInHtml();
    }

    function clickedPlayButton() {
        pet_info.weight = pet_info.weight - 1;
        pet_info.happiness = pet_info.happiness + 3
        // Increase pet happiness
        // Decrease pet weight
        checkAndUpdatePetInfoInHtml();
    }

    function clickedExerciseButton() {
        // Decrease pet happiness
        pet_info.happiness = pet_info.happiness - 2;
        pet_info.weight = pet_info.weight - 3;
        // Decrease pet weight
        checkAndUpdatePetInfoInHtml();
    }

    function checkAndUpdatePetInfoInHtml() {
        checkWeightAndHappinessBeforeUpdating();
        updatePetInfoInHtml();
    }

    function checkWeightAndHappinessBeforeUpdating() {
        // Add conditional so if weight is lower than zero, set it back to zero
        if (pet_info.weight >= 0) {
            return pet_info.weight === 0;
        }
    }

    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
        $('.name').text(pet_info.name);
        $('.weight').text(pet_info.weight);
        $('.happiness').text(pet_info.happiness);
    }
})