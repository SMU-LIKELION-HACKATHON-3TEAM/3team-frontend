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
    var userPw = $("#userPw").val();
    var email = $("email").val();
    var name = $("name").val();
    var nickname = $("nickname").val();
    var bd = $("bd").val();
    $.ajax({
        type: 'POST',
        url: 'http://grishare.ap-northeast-2.elasticbeanstalk.com/api/user/register',
        data: JSON.stringify({
          "userId":userId,
          "userPw":userPw,
          "email":email,
          "name":name,
          "nickname":nickname,
          "bd":bd,
        }),
        success : function(data){
          window.location.href='/html/mainpage.html'
        },
        error: function(request, status, error){
          alert("회원가입 실패:",error);
        }
    })
}
function onSubmitSignup_cbv(){
    $("#signUp_submit").trigger("click");
    onSubmitSignup();
}
