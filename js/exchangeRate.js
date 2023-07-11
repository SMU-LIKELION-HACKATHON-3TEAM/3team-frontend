/*나라선택*/
$.getJSON("../json/er_country.json", function (data) {
    const length = data.data.countries.length;
    var i;
    for (i = 0; i < length; i++) {

        const showData = () => {

            const countryCode = data.data.countries[i].countryCode;
            const countryName = data.data.countries[i].countryName;
            const country_list=document.getElementById('country2');
            const newOption=document.createElement('option');
            newOption.value=countryCode;
            newOption.innerHTML=countryName;
            country_list.appendChild(newOption);

        }
        showData();
    }
});
/*은행선택*/
$.getJSON("../json/er_bank.json", function (data) {
    const length = data.data.banks.length;
    var i;
    for (i = 0; i < length; i++) {

        const showData = () => {

            const bankCode = data.data.banks[i].bankCode;
            const bankName = data.data.banks[i].bankName;
            const bank_list=document.getElementById('banks');
            const newOption=document.createElement('option');
            newOption.innerHTML=bankName;
            newOption.value=bankCode;
            bank_list.appendChild(newOption);
            

        }
        showData();
    }
});
/*선택된 나라와 은행의 환율 받아와야함 */
/*환율계산*/
/*1000원 */
function calculate(){
    $.ajax({
        //type:'GET',
        //url: 'http://grishare.ap-northeast-2.elasticbeanstalk.com/api/exchangeRate?country-id=1?bank-id=ECA',
    })
    let input_value=document.getElementById("money1").value;
    if(input_value.length>=4){
        let output_value=input_value*9.14 //가져온 환율값
        console.log(output_value);
    
        document.getElementById("money2").value=output_value;
    }
    
}
$(input).on('keyup', function(e){
    $(input).attr('size', $(input).val().length);
});
