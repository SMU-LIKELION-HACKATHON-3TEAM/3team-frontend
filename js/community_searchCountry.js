$.getJSON("../json/data_searchCountry.json", function(data) {
  $.each(data, function(index, item) {
    
    var $postIcon = $('<div>').addClass('postIcon');
    var $postId = $('<div>').addClass('postId').text(item.userName);
    var $time = $('<div>').addClass('time').text(item.create_at);
    var $postContent = $('<textarea>').addClass('postContent').attr('spellcheck', 'false').text(item.content);
    // title 말고 userName이 들어가는게 맞나?

    var $views = $('<div>').addClass('views');
    var $likes = $('<div>').addClass('likes').text(item.like);
    var $likes_image = $('<div>').addClass('likes_image');

    var $comment = $('<div>').addClass('comment').text(item.comment);
    var $comment_image = $('<div>').addClass('comment_image');



    var $scrap = $('<div>').addClass('scrap').text("스크랩");
    var $scrap_image = $('<div>').addClass('scrap_image');

    var $share = $('<div>').addClass('share').text("공유");
    var $share_image = $('<div>').addClass('share_image');
    var $report = $('<div>').addClass('report').text("신고");
    

    var $file_only = $('<div>').addClass('file_only').text(item.file1);
      
      

    $('#wrap_community').append($postIcon).append($time).append($postId).append($postContent).append($file_only).append($views).append($likes).append($likes_image).append($comment).append($comment_image).append($scrap).append($scrap_image).append($share).append($share_image).append($report).trigger("create");

      
    




    
    $('#wrap_search_country').keyup(function(event) {
        
      if (event.key === 'Enter') {
        var query = $(this).val();
        console.log('hi');
        localStorage.setItem('query', query);
        $('#wrap_search_country').attr('placeholder', query);

        var url = 'http://127.0.0.1:5500/html/community_searchCountry.html';
        window.location.href = url;
      }});






      // 네비바 이동
    $('.a-community').click(function() {
        var url = 'http://127.0.0.1:5500/html/community.html';
        window.location.href = url;
    });
      $('.a-exchange').click(function() {
        var url = 'http://127.0.0.1:5500/html/exchangeRate.html';
        window.location.href = url;
    });
      $('.a-price').click(function() {
        var url = 'http://127.0.0.1:5500/html/pricecomparison.html';
        window.location.href = url;
    });
      $('.a-customer').click(function() {
        var url = 'http://127.0.0.1:5500/html/고객지원.html';
        window.location.href = url;
    });


  })

  });
  














// var jsonData = {
// "code": 200,
// "httpStatus": "OK",
// "message": "요청에 성공하였습니다.",
// "data": [
//         {
//         "post_id" : "24",
//         "title" : "미국 갱스터 피하는 법",
//         "userName" : "김동현",
//         "created_at" : "2023-06-27 16:46:08",
//         "views" : "65",
//         "like" : "4",
//         "comment" : "15"
//         },
//         { // post icon이랑 post 
//         "post_id" : "24",
//         "title" : "미국 맛집과 시세 모음",
//         "userName" : "이은지",
//         "created_at" : "2023-06-28 13:15:26",
//         "views" : "79",
//         "like" : "35",
//         "comment" : "19"
//         }
//     ]
// };

// $(document).ready(function() {
//     var query = localStorage.getItem('query');
//     if (query) {

//       url = '/api/post/US?query=' + encodeURIComponent(query);
//       $.ajax({
//         type: 'GET',
//         dataType: 'json',
//         url: url,
//         data : { json: JSON.stringify( jsonData ) },
//         success: function(data) { //postId, post icon, post title = postContent, post nserName = postId, post created_at : time,  

//             var $postId = $('<div>').addClass('postId').text(data.postId);  //얘는 ㅇ>ㅇ ?
//             var $title = $('<div>').addClass('postContent').text(data.title);  
//             var $userName = $('<div>').addClass('postId').text(data.userName);
//             var $created_at = $('<div>').addClass('time').text(data.created_at);
        
//             var $views = $('<div>').addClass('views').text(data.views);
//             var $likes = $('<div>').addClass('likes').text(data.likes);
//             var $comment = $('<div>').addClass('comment').text(data.comment);
      
      
//         $('#wrap_community').append($postId).append($title).append($userName).append($created_at).append($views).append($likes).append($comment);
//       }});
//     }
//   });