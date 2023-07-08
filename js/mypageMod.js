/*** 회원 정보 ***/
var jsonLocation = "../json/userInfor.json";
$.getJSON(jsonLocation, function(data) {

    const showData = () => {

        const userName = data.data.userName;
        const email = data.data.email;
        const nickName = data.data.nickName;
        const picture = data.data.nickName;

        let wrap_infor = document.querySelector(".wrap_infor");

        /* 이미지 */
        // let img = document.createElement("img");
        // img.src = picture;

        /* 이름 */
        let p_name = document.createElement("p");
        p_name.innerHTML = userName;
        let p_email = document.createElement("p");
        p_email.setAttribute("class", "memEmail");
        p_email.innerHTML = email;
        let p_nickName = document.createElement("p");
        p_nickName.setAttribute("class", "memNick");
        p_nickName.innerHTML = nickName;

        // wrap_infor.appendChild(img); // 없어서 보류
        wrap_infor.appendChild(p_name);
        wrap_infor.appendChild(p_email);
        wrap_infor.appendChild(p_nickName);

    }
    showData();

});