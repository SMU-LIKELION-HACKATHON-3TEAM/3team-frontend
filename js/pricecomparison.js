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