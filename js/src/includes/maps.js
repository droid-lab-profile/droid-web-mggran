Maps = {
	config: {
		options : {
			zoom              : 18,
			mapTypeId         : google.maps.MapTypeId.ROADMAP,
			scrollwheel       : false,
			navigationControl : false,
			mapTypeControl    : false,
			scaleControl      : false,
			draggable         : false,
			disableDefaultUI  : true
		}
	},
	configure: function(maps){
		Maps.config.maps = maps;
		google.maps.event.addDomListener(window, 'load', Maps.init(Maps.config));
	},
	init: function(config){
		var config    = config || Maps.config;
		var latlngs   = [];
		var mapCanvas = [];
		var options   = [];
		var maps      = [];
		var markers   = [];
		for(var i=0; i<config.maps.length; i++){
			latlngs[i]        = {lat : config.maps[i].lat, lng: config.maps[i].lng};
			mapCanvas[i]      = document.getElementById(config.maps[i].id);
			options[i]        = config.options;
			options[i].center = latlngs[i];
			if(!Shared.__is_empty(config.maps[i].styles))
				options[i].styles = config.maps[i].styles;
			maps[i]           = new google.maps.Map(mapCanvas[i], options[i]);
			var icon = {
			    url: "./assets/images/pin.svg",
			    scaledSize: new google.maps.Size(100, 100),
			    anchor: new google.maps.Point(40,50)
			};
			markers[i] = new google.maps.Marker({
				position: latlngs[i],
    			map: maps[i],
    			title: config.maps[i].title,
    			icon: icon
  			});
		}
	}
}