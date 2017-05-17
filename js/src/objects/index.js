Index = {
    init: function(){
    	Index.setGallery();
    },
    setGallery: function(){
		$("[data-fancybox]").fancybox({
            infobar    : true,
            closeBtn   : true,
            slideShow  : false,
            fullScreen : false,
            thumbs     : false,
            touch      : false,
            baseTpl    : '<div class="fancybox-container" role="dialog" tabindex="-1">' +
                        '<div class="fancybox-bg"></div>' +
                        '<div class="fancybox-controls">' +
                            '<div class="fancybox-infobar">' +
                                '<button data-fancybox-previous class="fancybox-button fancybox-button--left" title="Anterior">' +
                                '<button data-fancybox-next class="fancybox-button fancybox-button--right" title="Próximo"></button>' +
                            '</div>' +
                            '<div class="fancybox-buttons">' +
                                '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="Fechar"></button>' +
                            '</div>' +
                        '</div>' +
                        '<div class="fancybox-slider-wrap">' +
                            '<div class="fancybox-slider"></div>' +
                        '</div>' +
                        '<div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div>' +
                    '</div>',
        });
    }
}

$(document).ready(function() {
    Index.init();
});