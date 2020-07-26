// Into screen with button which directs to quiz page

// This is an exmaple of countries database with features
const app = {};



// building database
app.countries = {

    Norway: {
        score: 0,
        season: ['winter'],
        weather: ['stormy', 'snowy'],
        food: ['seafood', 'meats'],
        spicy: ['none'],
        landscape: ['seaside', 'mountains', 'lakeside'],
        wayOfLife: ['secluded', 'adventurous'],
        dreamhouse: ['woodloghouse'],
    },
    Germany: {
        score: 0,
        season: ['winter', 'fall', 'spring'],
        weather: ['snowy', 'mild'],
        food: ['sausages', 'meats'],
        spicy: ['mild'],
        landscape: ['forest', 'lakeside', 'cityscape'],
        wayOfLife: ['citylife', 'rural', 'journeys', 'hardworking'],
        dreamhouse: ['cityappartment', 'farmhouse'],
    },
    Thailand: {
        score: 0,
        season: ['summer'],
        weather: ['sunny', 'hot', 'thunderstorms', 'rainy', 'hot'],
        food: ['thai', 'seafood'],
        spicy: ['suicide'],
        landscape: ['mountains', 'seaside', 'jungle'],
        wayOfLife: ['rural', 'island'],
        dreamhouse: ['oceanvilla', 'junglehut'],
    },
    France: {
        score: 0,
        season: ['spring'],
        weather: ['sunny', 'mild'],
        food: ['oysters', 'meats'],
        spicy: ['none'],
        landscape: ['mountains', 'seaside'],
        wayOfLife: ['citylife'],
        dreamhouse: ['townhouse', 'cityappartment'],
    },
    Panama: {
        score: 0,
        season: ['summer'],
        weather: ['sunny', 'hot', 'thunderstorms', 'rainy'],
        food: ['seafood'],
        spicy: ['spicy'],
        landscape: ['seaside'],
        wayOfLife: ['journey', 'adventurous'],
        dreamhouse: ['condominium'],

    },
    Canada: {
        score: 0,
        season: ['winter', 'fall'],
        weather: ['stormy', 'snow-storms', 'snowy'],
        food: ['sausages', 'meats'],
        spicy: ['none'],
        landscape: ['forest', 'tundra', 'lakeside'],
        wayOfLife: ['rural', 'journeys', 'secluded'],
        dreamhouse: ['townhouse', 'farmhouse'],
    },
    England: {
        score: 0,
        season: ['fall', 'spring'],
        weather: ['stormy', 'rainy', 'foggy', 'cloudy', 'windy'],
        food: ['oatmeal'],
        spicy: ['none'],
        landscape: ['forest', 'cityscape'],
        wayOfLife: ['citylife'],
        dreamhouse: ['townhouse', 'estate', 'cityappartment'],
    },
    Tunisia: {
        score: 0,
        season: ['summer'],
        weather: ['hot', 'windy', 'sunny'],
        food: ['seafood'],
        spicy: ['spicy'],
        landscape: ['desert'],
        wayOfLife: [],
        dreamhouse: ['oceanvilla'],
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
            if (app.countries[countryName][arr[i].category].includes(arr[i].selection)) {
                // console.log(countryName)
                // $('body').append(countryName);
                app.countries[countryName].score++;

                console.log(`${countryName}: ${app.countries[countryName].score}`);
                $('.result').text(`${countryName} fits your personality best!`);



                // console.log("Maximum score is " + Math.max(app.countries[countryName].score));

                // $('.result').text(`${countryName} ${ Math.max(app.countries[countryName].score)}`);
                // $('.result').text(`${ Math.max(app.countries[countryName].score)}`);
                // $('.result').text(`${Math.max(app.countries[countryName].score)}`);
            }

        }
    }
}


// clear input fields and refresh the page
$('#reset').on('click', function(e) {
        $("input:checked").prop("checked", false);
        location.reload();
    })
    // }

// $(function() {
//     app.init();
// })