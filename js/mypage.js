var jsonLocation = "../json/interestCountry.json ";
$.getJSON(jsonLocation, function(data) {
    const length = data.data.length;

    var i;
    for (i = 0; i < length; i++) {

        const showData = () => {

            const countryName = data.data[i].countryName;
            const imgUrl = data.data[i].ImageUrl;

            console.log(countryName);
            /* 이미지 */

            let interestConutry = document.querySelector(".interestConutry");

            let country = document.createElement("div");
            country.setAttribute("class", "country");
            interestConutry.appendChild(country);

            let img = document.createElement("img");
            img.src = imgUrl;

            /* 이름 */
            let p = document.createElement("p");
            p.innerHTML = countryName;

            country.appendChild(img);
            country.appendChild(p);
        }
        showData();
    }
});