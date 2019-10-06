var app = {
    init: function () {

        $('#videoModal').on('show.bs.modal', function (event) {
            var button = $(event.relatedTarget)
            var content = button.data('content')

            var modal = $(this)
            // modal.find('.modal-body input').val(content)
            modal.find('.modal-body iframe').attr("src", content)
        })

        app.autoPlayYouTubeModal();
    },

    autoPlayYouTubeModal: function () {
        var trigger = $("body").find('[data-toggle="modal"]');

        trigger.click(function () {
            var theModal = $(this).data("target"),
                videoSRC = $(this).attr("data-content"),
                videoSRCauto = videoSRC + "?autoplay=1";
                $(theModal + ' iframe').attr('src', videoSRCauto);
                $(theModal + ' button.close').click(function () {
                $(theModal + ' iframe').attr('src', videoSRC);
            });
        });
    }
}

$(app.init);
