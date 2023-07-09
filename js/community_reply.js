$(document).ready(function() {
  // 로컬 스토리지에서 postID 값을 가져오기
  var selectedPostID = localStorage.getItem('postid');


  // postID를 비교하여 데이터뭉치 처리
  $('.post-container').each(function() {
    var postID = $(this).data('postid');
    if (postID !== selectedPostID) {
      $(this).hide();
    }
  });
});
// 해 냈 다