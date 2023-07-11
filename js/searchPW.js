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
  
  
  function onSubmitsearchPw(){
    var userId = $('#userId').val();
    var email =$('#email').val();
    $.ajax({
        type: 'POST',
        url: 'http://grishare.ap-northeast-2.elasticbeanstalk.com/api/user/findPw',
        contentType: 'application/json',
        data: JSON.stringify({
          'userId':userId,
          'email':email,
        }),
        success : function(data){
          alert("이메일로 임시 비밀번호를 전송했습니다.")
        },
        error: function(request, status, error){
          console.error(error);
          alert("아이디 혹은 이메일 오류");
        }
    })
  }
  
  function onSubmitsearchPw_cbv(){
    $("#searchPw_submit").trigger("click")
    onSubmitsearchPw();
  }