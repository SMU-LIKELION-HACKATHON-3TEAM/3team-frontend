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
  
  
  function onSubmitsearchId(){
    var email =$('#email').val();
    $.ajax({
        type: 'POST',
        url: 'http://grishare.ap-northeast-2.elasticbeanstalk.com/api/user/findId',
        contentType: 'application/json',
        data: JSON.stringify({
          'email':email,
        }),
        success : function(data){
          alert("이메일로 아이디를 전송했습니다.")
        },
        error: function(request, status, error){
          console.error(error);
          alert("이메일 오류");
        }
    })
  }
  
  function onSubmitsearchId_cbv(){
    $("#searchId_submit").trigger("click")
    onSubmitsearchId();
  }