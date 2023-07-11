function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

function onSubmitSignup(){
    var userId = $('#userId').val();
    var password = $("#password").val();
    var email = $("email").val();
    var userName = $("userName").val();
    var nickName = $("nickName").val();
    var birthDay = $("birthDay").val();
    $.ajax({
        type: 'POST',
        url: 'http://grishare.ap-northeast-2.elasticbeanstalk.com/api/user/register',
        data: JSON.stringify({
          "userId":userId,
          "password":password,
          "email":email,
          "userName":userName,
          "nickName":nickName,
          "birthDay":birthDay,
        }),
        success : function(data){
          
        },
        error: function(request, status, error){
          alert("잘못된 요청입니다.",error);
        }
    })
}
function onSubmitSignup_cbv(){
    $("#signUp_submit").trigger("click");
    onSubmitSignup();
}
