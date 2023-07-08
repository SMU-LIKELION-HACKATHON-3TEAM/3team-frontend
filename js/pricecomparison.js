/* 나라 선택 */
var jsonLocation = "../json/countryList.json";
$.getJSON(jsonLocation, function(data) {
    const length = data.data.length;

    var i;
    for (i = 0; i < length; i++) {

        const countryName = data.data[i].countryName;

        let countryList = document.querySelector(".country1");
        let country = document.createElement("option");
        country.setAttribute("value", "US");
        country.innerHTML = countryName;
        countryList.appendChild(country);
    }
});

/* 지역 선택 */
var jsonLocation = "../json/divisionList.json";
$.getJSON(jsonLocation, function(data) {
    const length = data.data.length;

    var i;
    for (i = 0; i < length; i++) {

        const ADName = data.data[i].ADName;

        let divisionList = document.querySelector(".division1");
        let division = document.createElement("option");
        division.setAttribute("value", "US");
        division.innerHTML = ADName;
        divisionList.appendChild(division);
    }
});


var barChartData = {
    labels: ["한끼 평균 식사비", "1km당 평균 택시비", "한 잔 평균 커피값", "각종 먹거리"],
    datasets: [{
            label: '나라1',
            backgroundColor: "#F87DC0",
            data: [
                Math.random() * 90000,
                Math.random() * 90000,
                Math.random() * 90000,
                Math.random() * 90000

            ]
        }, {
            label: '나라2',
            backgroundColor: "#83A07F",
            data: [
                Math.random() * 90000,
                Math.random() * 90000,
                Math.random() * 90000,
                Math.random() * 90000

            ]
        }, {
            label: '나라3',
            backgroundColor: "#F5D8A0",
            data: [
                Math.random() * 90000,
                Math.random() * 90000,
                Math.random() * 90000,
                Math.random() * 90000

            ]
        }

    ]
};
window.onload = function() {
    var ctx = $('#chart').get(0).getContext("2d");
    window.theChart = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {}
    });
}