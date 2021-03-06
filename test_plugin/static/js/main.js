var randomColorGenerator = function () {
    return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
};


//======budgetChart==================================================
var chartData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",], //["January", "February", "March", "April", "May", "June"],
    datasets: [
        {
            fillColor: randomColorGenerator(),
            strokeColor: randomColorGenerator(),
            highlightFill: randomColorGenerator(),
            highlightStroke: randomColorGenerator(),
            data: JSON.parse(appData.budget_data)
        }
    ]
};
var ctx = document.getElementById("myChart1").getContext("2d");
var budgetChart = new Chart(ctx, {
    type: 'bar',
    data: chartData
});

//======UsersRolesChart==================================================
var chartData = {
    labels: (appData.users_labels).replace(/&#39;/g, "").slice(1, -1).split(","),
    datasets: [
        {
            fillColor: randomColorGenerator(),
            strokeColor: randomColorGenerator(),
            highlightFill: randomColorGenerator(),
            highlightStroke: randomColorGenerator(),
            data: JSON.parse(appData.users_data)
        }
    ],

};
var ctx = document.getElementById("myChart2").getContext("2d");
var UsersRolesChart = new Chart(ctx, {
    type: 'doughnut',
    data: chartData,
    options: {
        cutoutPercentage: 80,
        responsive: true,
        maintainAspectRatio: true,
    }

});

//======UsersNumberChart==================================================
var chartData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",],
    datasets: [
        {
            fillColor: randomColorGenerator(),
            strokeColor: randomColorGenerator(),
            highlightFill: randomColorGenerator(),
            highlightStroke: randomColorGenerator(),
            data: JSON.parse(appData.users_numbers)
        }
    ]
};
var ctx = document.getElementById("myChart3").getContext("2d");
var UsersNumberChart = new Chart(ctx, {
    type: 'line',
    data: chartData
});


//======StatesChart==================================================
var chartData = {
    labels: (appData.states_labels).replace(/&#39;/g, "").slice(1, -1).split(","),
    datasets: [
        {
            fillColor: randomColorGenerator(),
            strokeColor: randomColorGenerator(),
            highlightFill: randomColorGenerator(),
            highlightStroke: randomColorGenerator(),
            data: JSON.parse(appData.states_data)
        }
    ]
};
var ctx = document.getElementById("myChart4").getContext("2d");
var StatesChart = new Chart(ctx, {
    type: 'pie',
    data: chartData
});