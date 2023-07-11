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


function onSubmitLogin(){
  var userId = $('#userId').val();
  var userPw =$('#userPw').val();
  $.ajax({
      type: 'POST',
      url: 'http://grishare.ap-northeast-2.elasticbeanstalk.com/api/user/login',
      contentType: 'application/json',
      data: JSON.stringify({
        'userId':userId,
        'userPw':userPw,
      }),
      success : function(data){
        location.href=`/html/mainpage.html`;
      },
      error: function(request, status, error){
        console.error("로그인 실패:",error);
        alert("로그인 실패(id 혹은 pw 틀림)");
      }
  })
}

function onSubmitLogin_cbv(){
  $("#login_submit").trigger("click")
  onSubmitLogin();
}