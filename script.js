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
        sundaymorning: ['home', 'parents'],
        people: ['talkative', 'fancy']
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
        sundaymorning: ['temple', 'hospital'],
        people: ['slow', 'uncultured']

    },
    Thailand: {
        score: 0,
        season: ['summer'],
        weather: ['sunny', 'hot', 'thunder', 'rainy', 'hot'],
        food: ['asian', 'seafood'],
        spicy: ['suicide'],
        landscape: ['mountains', 'seaside', 'jungle'],
        wayOfLife: ['rural', 'island'],
        dreamhouse: ['oceanvilla', 'junglehut'],
        sundaymorning: ['beach', 'police'],
        people: ['silent']
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
        sundaymorning: ['airport', 'parents'],
        people: ['polite']
    },
    Panama: {
        score: 0,
        season: ['summer'],
        weather: ['sunny', 'hot', 'thunder', 'rainy'],
        food: ['seafood'],
        spicy: ['spicy'],
        landscape: ['seaside'],
        wayOfLife: ['journey', 'adventurous'],
        dreamhouse: ['condominium'],
        sundaymorning: ['beach', 'parents'],
        people: ['polite', 'silent']


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
        sundaymorning: ['woods', 'home'],
        people: ['fancy', 'rude']
    },
    England: {
        score: 0,
        season: ['fall', 'spring'],
        weather: ['rainy', 'foggy', 'cloudy', 'windy'],
        food: ['oatmeal'],
        spicy: ['none'],
        landscape: ['cityscape'],
        wayOfLife: ['citylife'],
        dreamhouse: ['townhouse', 'estate', 'cityappartment'],
        sundaymorning: ['parents', 'home'],
        people: ['uncultured', 'rude']
    },
    Tunisia: {
        score: 0,
        season: ['summer'],
        weather: ['hot', 'windy', 'sunny'],
        food: ['seafood'],
        spicy: ['spicy'],
        landscape: ['desert', 'seaside'],
        wayOfLife: ['adventurous', 'journeys'],
        dreamhouse: ['oceanvilla'],
        sundaymorning: ['airport', 'beach'],
        people: ['slow', 'silent']
    },
    Russia: {
        score: 0,
        season: ['winter'],
        weather: ['snowy'],
        food: ['meats'],
        spicy: ['none'],
        landscape: ['forest', 'cityscape'],
        wayOfLife: ['adventurous'],
        dreamhouse: ['woodloghouse'],
        sundaymorning: ['temple', 'police'],
        people: ['talkative']
    }
}


// event listner and obtaining values from user choices
$('#submit').on('click', function(e) {

    e.preventDefault();
    const choice = [];

    let countryScore = 0;
    $.each($('input:checked'),
            function() {
                console.log(choice)

                const userChoice = {
                    category: $(this).attr('name'),
                    selection: $(this).val(),

                }
                countryScore++;
                choice.push(userChoice);
            })
        // this is the selection after checkbox checked
    serchForAnswer(choice);

})


// searching for answer adding score to country and desplay the most relevant
// displaying resul dynamically


const serchForAnswer = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let countryName in app.countries) {

            if (app.countries[countryName][arr[i].category].includes(arr[i].selection)) {

                app.countries[countryName].score++;

                console.log(`${countryName}: ${app.countries[countryName].score}`);

                $('body').html(`
                <div class="wrapper answer-wrapper">
                <h2>Perhaps you were supposed to be born in ${countryName}</h2>
                <div class="answer-img-container">
                <img src="https://source.unsplash.com/450x750/?${countryName},landmark" alt="Random placeholder image of landmark in ${countryName}">
                <img src="https://source.unsplash.com/450x750/?${countryName},people" alt="People of ${countryName}">
                <img src="https://source.unsplash.com/450x750/?${countryName},nature" alt="Nature of ${countryName}">
            </div>
           
            <a href="quiz.html" id="reset"><button type="submit">Start over</button></a>
            </div>
            <footer>
            <ul class="social">
    
                <li><a class="tw-ic mr-3 " role="button " href="https://twitter.com/ChurkinSerge" target="_blank"><i class="fab fa-lg fa-twitter "></i></a></li>
                <li><a class="li-ic mr-3 " role="button " href="https://www.linkedin.com/in/sergechurkin/" target="_blank"><i class="fab fa-lg fa-linkedin-in " ></i></a></li>
                <li><a class="git-ic mr-3 " role="button " href="https://github.com/SergeChurkin-ca" target="_blank"><i class="fab fa-lg fa-github " href="https://github.com/SergeChurkin-ca" target="_blank"></i></a></li>
    
            </ul>
            <p class="trademark ">
                2020 &copy serge-web created at Juno College of Technology
            </p>
        </footer>
                `);
            }
        }
    }
}


// clear input fields and refresh the page
$('#reset').on('click', function(e) {
    $("input:checked").prop("checked", false);
    location.reload();
})