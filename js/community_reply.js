$.getJSON("../js/data_comment.json", function(data) {
    $.each(data, function(index, item) {
        {
            if (Array.isArray(data.comment)) {
              // 댓글(comment) 배열이 있는지 확인
        
              // 댓글(comment) 배열의 각 요소에 대해 반복문 수행
              $.each(data.comment, function(index, comment) {
                // 각 댓글(comment)에 대한 작업 수행
                console.log(comment.comment_id, comment.userName, comment.contents);
        
                if (Array.isArray(comment.reply)) {
                  // 답글(reply) 배열이 있는지 확인
        
                  // 답글(reply) 배열의 각 요소에 대해 반복문 수행
                  $.each(comment.reply, function(index, reply) {
                    // 각 답글(reply)에 대한 작업 수행
                    console.log(reply.reply_id, reply.userName, reply.contents);
                  });
                }
              });
            }
          }

          $('.comment').keyup(function(event) {
            if (event.key === 'Enter') {
                var $comment_click = $('<div>').addClass('comment_click');
            }});
        });

});
    
  
//댓글 누르면 창 띄워지게 + 내용 나오는지 확인

  
  
  
  
  
  
  
  
  