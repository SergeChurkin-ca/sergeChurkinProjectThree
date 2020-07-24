function startQuiz(questions, countries, results, submitButton) {


    function showQuestion(questions, countries) {

    }


    function showResults(questions, countries, results) {

    }


    showQuestion(questions, countryCriterias);

    $('button').on('click', function() {
        showResults(questions, countries, results)
        console.log('clicked');
    })
}