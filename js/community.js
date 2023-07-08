$.getJSON("../js/data.json", function(data) {
  $.each(data, function(index, item) {
  
    var $postIcon = $('<div>').addClass('postIcon');
    var $postId = $('<div>').addClass('postId').text(item.postId);
    var $time = $('<div>').addClass('time').text(item.time);
    var $postContent = $('<textarea>').addClass('postContent').attr('spellcheck', 'false').text(item.postContent);


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

      $('#wrap_community_box').append($postIcon).append($time).append($postId).append($postContent).append($file1).append($file2).append($views).append($likes).append($comment).append($scrap).append($share).append($report).trigger("create");

    } else if (item.file1) {
      // file1만 있는 경우
      var $file_only = $('<div>').addClass('file_only').text(item.file1);

      $('#wrap_community_box').append($postIcon).append($time).append($postId).append($postContent).append($file_only).append($views).append($likes).append($comment).append($scrap).append($share).append($report).trigger("create");

    }

  })
  
  

  
  $('#wrap_search_country').keyup(function(event) {
    if (event.key === 'Enter') {
      var query = $(this).val();
      localStorage.setItem('query', query);
      var url = 'http://127.0.0.1:5500/html/community_searchCountry.html';
  
      window.location.href = url;
    }});

    $(document).ready(function() {
      $('#wrap_newPostMade').click(function() {
        window.location.href = 'http://127.0.0.1:5500/html/community_post.html';
      });
    });
 

  
});
