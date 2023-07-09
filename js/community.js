var postsByPostID = {};

$.getJSON("../json/data_community.json", function(data) {
  $.each(data, function(index, item) {
  
    var $postIcon = $('<div>').addClass('postIcon');
    var $postId = $('<div>').addClass('postId').text(item.postId);
    var $time = $('<div>').addClass('time').text(item.time);
    var $postContent = $('<textarea>').addClass('postContent').attr('spellcheck', 'false').text(item.postContent);


    var $views = $('<div>').addClass('views');
    
    var $likes = $('<div>').addClass('likes').text(item.likes);
    var $likes_image = $('<div>').addClass('likes_image');

    var $comment = $('<div>').addClass('comment').text(item.comment);
    var $comment_image = $('<div>').addClass('comment_image');



    var $scrap = $('<div>').addClass('scrap').text("스크랩");
    var $scrap_image = $('<div>').addClass('scrap_image');

    var $share = $('<div>').addClass('share').text("공유");
    var $share_image = $('<div>').addClass('share_image');

    var $report = $('<div>').addClass('report').text("신고");
    
    var $file_only = $('<div>').addClass('file_only').text(item.file1);

    if (!postsByPostID[item.postId]) {
      postsByPostID[item.postId] = $('<div>').addClass('post-container');
    }
    var $postContainer = $('<div>').addClass('post-container').attr('data-postid', item.postId);


    $postContainer.append($postIcon, $time, $postId, $postContent, $file_only, $views, $likes, $likes_image, $comment, $comment_image, $scrap, $scrap_image, $share, $share_image, $report);

    // wrap_community_box에 게시물 컨테이너 추가
    $('#wrap_community_box').append($postContainer);


    
  })
  
  // // 동적으로 생성된 "likes" 요소에 클릭 이벤트 핸들러 추가
  // $(document).on('click', '.likes_image', function() {
  //   var $image = $(this).find('png'); // "likes" 요소 내의 이미지 요소 선택
  //   $image.attr('src', '../img/🦆 icon _heart_red.png'); // 이미지의 src 속성 변경
  // });

  $('#wrap_community_box').on('click', '.post-container', function() {
    var postid = $(this).data('postid');
    localStorage.setItem('postid', postid);
  
    var url = 'http://127.0.0.1:5500/html/community_comment.html';
    window.location.href = url;
  });
  

  // 신고
  let is_clicked = false;

  $('.report').click(function() {
    if (!is_clicked) {
      var $report_click = $('<div>').addClass('report_click').text("신고하기");
      $('.report').append($report_click);
      is_clicked = true;
    } else {
      $('.report_click').remove();
      is_clicked = false;
    }
  });
  
  $(document).on('click', '.report_click', function() {
    alert("신고되었습니다.");
    var url = 'http://127.0.0.1:5500/html/community.html';
  
    window.location.href = url;
  });
  

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
