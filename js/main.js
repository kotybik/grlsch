$(function () {
    var clientid = '1276211045.1677ed0.042a9ab8d07941ec8c81fc21e447482c',
        hashtag = 'слушайгород',
        counter = 4;

    $('#success-btn').click(function (e) {
        e.preventDefault();

        $('#question').fadeOut(function() {
            $('#advertisment').fadeIn();
            initInstagramPhotos();
        })
    })

    function initInstagramPhotos () {
        $.ajax({
            url: 'https://api.instagram.com/v1/tags/' + hashtag + '/media/recent',
            dataType: 'jsonp',
            type: 'GET',
            data: {
                access_token: clientid,
                count: counter
            },
            success: function (result) {
                console.log(result)
            }
        })
    }
});
