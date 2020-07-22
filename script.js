// Into screen with button which directs to quiz page

// This is an exmaple of countries database with features
const result = {};


// building database
const countries = {

    Norway = {
        season: 'winter',
        weather: ['stormy', 'snow-storms', 'snow'],
        landscape: ['mountains', 'seaside'],
        weather: 'snow',
        food: 'seafod',
        music: 'scandinavian folk',
        wayofLife: ['secluded', 'journeys and outdoors'],
        dreamHouse: ['forest cabin', 'log house'],
        annoyingPeople: ['talkative', 'bragging', 'lazy'],
        bestWeekEnd: ['fishing', 'outdoors', 'family gathering'],
        movieRole: ['historical', 'cop', 'ordinary people'],
        loveIs: ['trust', 'strong family']
    }

}

const questions = {
    season: ["Winter ", "Spring", "Summer", "Fall"],
    weather: ["Rainy", "Stormy", "Sunny", "Cloudy", "Hot", "Cold", "Dry", "Wet", "Windy", "Hurricanes", "typhoons", "Sand-storms", "Snow-storms", "Tornados", "Humid", "Foggy", "Snow", "Thundersnow", "Hail", "Sleet", "drought", "wildfire", "blizzard", "avalanche", "Mist", "Thunderstorms"],
    landscape: ["Desert", "Plain", "Taiga", "Tundra", "Wetland ", "Mountain", "Mountain range", "Cliff", "Coast ", "Glacier", "Polar regions of Earth", "Shrubland", "Forest", "Rainforest", "Woodland ", "Jungle"],
    food: ["indonesian", "turkish", "thai", "spanish", "morocan", "japanese", "indian", "italian", "french", "chinese", "american", "mediterranean"],
    diet: ["vegetarian", "raw eater", "meat eater", "sweet tooth", "fitness"],
    music: ["electronic dance music", "rock", "jazz", "classical", "rhythm and blues", "techno", "country", "pop music", "ethnic", "latin pop", "k-pop", "rap", "hip hop", "indie", "metal", "reggae", "soul"],
    wayOfLife: ["Secluded", "Vibrant city life", "Adventurous and survival", "Rural, farming and gardening", "Journeys and lost of outdoor activities", "Venture", ""]
}

// If statements ckecks if the sellected answer coincide with feature objects element of country
// After input another question is rendered on page

// submit button confirms the choice and starts next question


// Math.random finalize the result to exclude the coincidence of countries with similar features



// Backgdound image of container provides picture from unsplash.com or pixabay.com and illustrates the choice and some informaiton about the country