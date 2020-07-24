// Into screen with button which directs to quiz page

// This is an exmaple of countries database with features
const app = {};



// building database
app.countries = {

    Norway: {
        score: 0,
        season: ['Winter'],
        weather: ['stormy', 'snow-storms', 'snow'],
        landscape: ['mountains', 'seaside'],
        food: 'seafood',
        music: ['rock', 'metal', 'electronic', 'techno'],
        wayofLife: ['secluded', 'journeys and outdoors'],
        dreamHouse: ['forest cabin', 'log house'],
        annoyingPeople: ['talkative', 'bragging', 'lazy'],
        bestWeekEnd: ['fishing', 'outdoors', 'family gathering'],
        movieRole: ['historical', 'cop', 'ordinary people'],
        loveIs: ['trust', 'strong family']
    },
    Germany: {
        score: 0,
        season: ['Winter', 'fall']
    },
    Thailand: {
        score: 0,
        season: 'summer',
        weather: ['Sunny', 'hot'],
        landscape: ['mountains', 'seaside'],
        food: ['seafood', 'thai'],
        music: ['techno', 'k-pop'],
        annoyingPeople: ['bragging'],

    }

}



// quiz questions
// app.questions = {

//     season: {
//         ask: "What are your favourie seasons?",
//         answer: ["Winter ", "Spring", "Summer", "Fall"],

//     },
//     weather: {
//         ask: "What are the most beautiful types weather?",
//         answer: ["Rainy", "Stormy", "Sunny", "Cloudy", "Hot", "Cold", "Dry", "Wet", "Windy", "Hurricanes", "typhoons", "Sand-storms", "Snow-storms", "Tornados", "Humid", "Foggy", "Snow", "Thundersnow", "Hail", "Sleet", "drought", "wildfire", "blizzard", "avalanche", "Mist", "Thunderstorms"],
//     },
//     landscape: ["Desert", "Plain", "Taiga", "Tundra", "Wetland ", "Mountain", "Mountain range", "Cliff", "Coast ", "Glacier", "Polar regions of Earth", "Shrubland", "Forest", "Rainforest", "Woodland ", "Jungle"],
//     food: ["indonesian", "turkish", "thai", "spanish", "morocan", "japanese", "indian", "italian", "french", "chinese", "american", "mediterranean", "seafoo"],
//     diet: ["vegetarian", "raw eater", "meat eater", "sweet tooth", "fitness"],
//     music: ["electronic dance music", "rock", "jazz", "classical", "rhythm and blues", "techno", "country", "pop music", "ethnic", "latin pop", "k-pop", "rap", "hip hop", "indie", "metal", "reggae", "soul"],
//     wayOfLife: ["Secluded", "Vibrant city life", "Adventurous and survival", "Rural, farming and gardening", "Journeys and lost of outdoor activities", "Venture"]
// }

// const countryCriterias = Object.values(app.countries);
// console.log(countryCriterias);
// const questionParameters = Object.values(app.questions);
// const listOfCountries = Object.keys(app.countries);
// console.log(listOfCountries)
// If statements ckecks if the sellected answer coincide with feature objects element of country
// After input another question is rendered on page
// submit button confirms the choice and starts next question
// Math.random finalize the result to exclude the coincidence of countries with similar features
// Backgdound image of container provides picture from unsplash.com or pixabay.com and illustrates the choice and some informaiton about the country


//1. Output array of questions on html in ul>li
//2. Onclick li - value is selected and stored

// ------------------------------------------
// Displaying quiz quesionts dynamically
// get values of selection on submit click
// ------------------------------------------


// for (let index in app.questions) {
//     for (let i in app.questions[index].answer) {


//         $('.question').append(`
//     <ul>
//     ${app.questions[index].ask}
//         <li>
//         <input type="checkbox" name="answer" id="answer" value="${app.questions[index].answer[i]}">
//         ${app.questions[index].answer[i]}   
//         </li>    
//     </ul>
//     `);



//     }
$('button').on('click', function(e) {
    e.preventDefault();
    const choice = [];


    let countryScore = 0;
    $.each($('input:checked'),
            function() {
                console.log(choice)

                // console.log($(this).attr('name'));
                // choice.push($(this).val());
                const userChoice = {
                        category: $(this).attr('name'),
                        selection: $(this).val()

                    }
                    // console.log(userChoice);
                    // $('body').html(choice)
                    // countryScore++;
                    // console.log("score is " + countryScore)

                choice.push(userChoice);

            })
        // this is the selection after checkbox checked

    serchForAnswer(choice);
    //find the list of countrie
})

const serchForAnswer = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let countryName in app.countries) {
            console.log(app.countries[countryName][arr[i].category]);
            console.log(arr[i])
            if (app.countries[countryName][arr[i].category].includes(arr[i].selection)) {
                console.log(countryName)
            }

        }

    }
}


// }

// $(function() {
//     app.init();
// })