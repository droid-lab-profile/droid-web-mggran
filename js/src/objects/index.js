Index = {
    init: function(){
        Index.assignMaps();
    },
    assignMaps: function(){
        var maps = [
            {
                id    : 'nitz-map',
                lat   : -23.6402254,
                lng   : -46.6956807,
                zoom  : 10,
                title : 'Clínica Nitz',
                styles: [{"featureType":"all","elementType":"all","stylers":[{"invert_lightness":true},{"saturation":10},{"lightness":30},{"gamma":0.5},{"hue":"#246b92"}]}]
            }
        ];
        Maps.configure(maps);
    }
}

$(document).ready(function() {
    Index.init();
});