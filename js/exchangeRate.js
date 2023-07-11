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
/*선택한 나라, 은행 값 보내줘야됌 */
/*선택된 나라와 은행의 환율 받아와야함 */



/*환율계산*/
$.getJSON("../json/er.json", function (data) {
    var select_country=$("country2").val();
    var select_bank=$("bank").val();
    /*선택된 나라와 은행의 환율 받아와야함 */
    /*ajax get... */
    let er=data.data.exchangeRate;
    let result=0;
    const showData=()=>{
        var input_value=$("#money1").val();  
        console.log(input_value);
        result=input_value*er;
        const result_money=document.getElementById('#money2');
        $("#money2").val(result);
        
    }
    showData();
});
