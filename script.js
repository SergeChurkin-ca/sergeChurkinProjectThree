// Into screen with button which directs to quiz page

// This is an exmaple of countries database with features
const app = {};



// building database
app.countries = {

    Norway: {
        // score: 0,
        season: ['winter'],
        weather: ['stormy', 'snowy'],
        food: ['seafood'],
        weather: ['stormy', 'snowy'],
        music: ['rock', 'metal', 'electronic', 'techno'],
        wayofLife: ['secluded', 'journeys and outdoors'],
        dreamHouse: ['forest cabin', 'log house'],
        annoyingPeople: ['talkative', 'bragging', 'lazy'],
        bestWeekEnd: ['fishing', 'outdoors', 'family gathering'],
        movieRole: ['historical', 'cop', 'ordinary people'],
        loveIs: ['trust', 'strong family']
    },
    Germany: {
        // score: 0,
        season: ['Winter', 'fall'],
        weather: ['stormy', 'snowy'],
        food: []
    },
    Thailand: {
        // score: 0,
        season: ['summer'],
        weather: ['sunny', 'hot', 'thunderstorms', 'rainy'],
        food: ['thai'],
        landscape: ['mountains', 'seaside'],
        food: ['seafood', 'thai'],
        music: ['techno', 'k-pop'],
        annoyingPeople: ['bragging'],

    },
    France: {
        // score: 0,
        season: ['spring'],
        weather: ['sunny'],
        food: []
    },
    Panama: {
        // score: 0,
        season: ['summer'],
        weather: ['sunny', 'hot', 'thunderstorms', 'rainy'],
        food: []
    },
    Canada: {
        // score: 0,
        season: ['winter', 'fall'],
        weather: ['stormy', 'snow-storms', 'snowy'],
        food: []

    }

}



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
                        selection: $(this).val(),

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
            // console.log(app.countries[countryName][arr[i].category]);
            // console.log("looking for category" + arr[i])
            if (app.countries[countryName][arr[i].category].includes(arr[i].selection))


            {
                // console.log(countryName)
                $('body').append(countryName)
            }


        }

    }
}


// }

// $(function() {
//     app.init();
// })