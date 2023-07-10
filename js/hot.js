$.getJSON("../json/hot-data.json", function(data) {
    $.each(data , function(index, item){
        console.log(data)
        var $post_id = $('<div>').addClass('post_id').text(item.post_id);
        var $title = $('<div>').addClass('title').text(item.title);
        var $contents = $('<div>').addClass('contents').text(item.contents);
        var $userName = $('<div>').addClass('userName').text(item.userName);
        var $created_at = $('<div>').addClass('created_at').text(item.created_at);
        var $views = $('<div>').addClass('like').text(item.views);
        var $like = $('<div>').addClass('like').text(item.like);

        $('#wrap-hot-writes').append($title).append($contents).append($like)

    })

    

})
