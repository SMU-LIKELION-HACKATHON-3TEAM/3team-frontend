$.getJSON("../js/data_searchCountry.json", function(data) {
  $.each(data, function(index, item) {
    
    var $postIcon = $('<div>').addClass('postIcon');
    var $postId = $('<div>').addClass('postId').text(item.userName);
    var $time = $('<div>').addClass('time').text(item.create_at);
    var $postContent = $('<textarea>').addClass('postContent').attr('spellcheck', 'false').text(item.title);


    var $views = $('<div>').addClass('views');
    var $likes = $('<div>').addClass('likes').text("좋아요");
    var $comment = $('<div>').addClass('comment').text("댓글");


    var $scrap = $('<div>').addClass('scrap').text("스크랩");
    var $share = $('<div>').addClass('share').text("공유");
    var $report = $('<div>').addClass('report').text("신고");
    
    if (item.file1 && item.file2) {
      // file1과 file2가 모두 있는 경우
      var $file1 = $('<div>').addClass('file1').text(item.file1);
      var $file2 = $('<div>').addClass('file2').text(item.file2);

      $('#wrap_community').append($postIcon).append($time).append($postId).append($postContent).append($file1).append($file2).append($views).append($likes).append($comment).append($scrap).append($share).append($report).trigger("create");

    } else if (item.file1) {
      // file1만 있는 경우
      var $file_only = $('<div>').addClass('file_only').text(item.file1);
      
      

      $('#wrap_community').append($postIcon).append($time).append($postId).append($postContent).append($file_only).append($views).append($likes).append($comment).append($scrap).append($share).append($report).trigger("create");

      $('#wrap_search_country').keyup(function(event) {
        
        if (event.key === 'Enter') {
          var query = $(this).val();
          console.log('hi');
          localStorage.setItem('query', query);
          $('#wrap_search_country').attr('placeholder', query);

          var url = 'http://127.0.0.1:5500/html/community_searchCountry.html';
          window.location.href = url;
        }});
    }

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