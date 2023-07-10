$.getJSON("../json/changerate_nation.json", function(data) {
    $.each(data , function(index, item){
        var $countryName = $('<div>').addClass('countryName').text(item.countryName);
        var $exchangeRate = $('<div>').addClass('exchangeRate').text(item.exchangeRate);

        $('#today-exchangeRate').append($countryName).append($exchangeRate)
    })
})