// Help please! I'm trying to build a quiz. It compares two nested objects: countries and questions.

// I receive the value from questions, have to find the same value in countries and get the key which is the name of country.

// Countries and their parameters
const app = {};

app.init = function() {

}

app.countries = {

    Norway: {
        season: 'winter',
        weather: ['stormy', 'snow-storms', 'snow'],
        landscape: ['mountains', 'seaside'],
        food: 'seafood',
        music: ['rock', 'metal', 'electronic', 'techno'],
        wayofLife: ['secluded', 'journeys and outdoors'],
        dreamHouse: ['forest cabin', 'log house'],
        annoyingPeople: ['talkative', 'bragging', 'lazy'],
    },
    Germany: {
        season: ['winter', 'fall'],
    },
    Thailand: {
        season: 'summer',
        weather: ['sunny', 'hot'],
        landscape: ['mountains', 'seaside', 'rainforest'],
        food: ['seafood', 'thai'],
        music: ['techno', 'k-pop'],
        annoyingPeople: ['bragging'],
    },
}


// Quiz Quesions
app.questions = {

    season: {
        ask: "What are your favourie seasons?",
        answer: ["winter ", "spring", "summer", "fall"],
    },
    weather: {
        ask: "What are the most beautiful types weather?",
        answer: ["sunny", "hot", "cold", "snow", ],
    },
    landscape: ["mountain", "rainforest", "Woodland ", "jungle", "seaside"],
    food: ["indonesian", "turkish", "thai", "spanish", "morocan", "japanese", "indian", "italian", "french", "chinese", "american", "mediterranean", "seafoo"],
    diet: ["vegetarian", "raw eater", "meat eater", "sweet tooth", "fitness"],
    music: ["electronic dance music", "rock", "jazz", "classical", "rhythm and blues", "techno", "country", "pop music", "ethnic", "latin pop", "k-pop", "rap", "hip hop", "indie", "metal", "reggae", "soul"],
}



$('button').on('click', function(e) {
    e.preventDefault();
    const choice = [];
    $.each($('input[name=answer]:checked'),
        function() {
            console.log(choice)
            `enter code here`
            choice.push($(this).val());
            $('body').html(choice)
        })
})