Shared = {
	Debug: {
		debugMode : false,
		constant  : '[DCFRONT] ',
		log: function(msg){
			if(Shared.Debug.debugMode)
				console.log(Shared.Debug.constant + msg);
		},
		error: function(msg){
			if(Shared.Debug.debugMode)
				console.error(Shared.Debug.constant + msg);
		},
		info: function(msg){
			if(Shared.Debug.debugMode)
				console.info(Shared.Debug.constant + msg);
		}
	},
	__is_empty: function(val){
		return (val == "" || val == null || val == undefined);
	},
	__set_button: function(objId, callBack, params){
		if(Shared.__is_empty(objId))
			return;
		var objId = "#" + objId;
		if(!$(objId).length){
			var objId = objId.replace("#", ".");
		}
        if($(objId).length){
        	if(!Shared.__is_empty(params)){
	            $(objId).on('click', params, function(params){
	                callBack(params);
	            });
        	}
        	else{
	            $(objId).on('click', function(event){
	                callBack(event);
	            });
        	}
        }
	},
	__ajax: function(obj, config, callBack){
		if(Shared.__is_empty(config.action))
			return;
		var action     = config.action;
		var data       = config.data || null;
		$.ajax({
		    type  : "POST",
		    url   : action,
		    data  : data,
		    success: function (result) {
		    	if(!Shared.__is_empty(callBack)){
		    		callBack(result);
		    	}
		    },
		});
	}
}

Oracle = {
	NiceScroll: {
		config : {
			cursorwidth        : "8px",
			zindex             : 99999999,
			scrollspeed        : 90,
			mousescrollstep    : 60,
			cursoropacitymax   : 0.8,
			cursorcolor        : "#00a9bb",
			horizrailenabled   : false,
			cursorborder       : "none",
			cursorborderradius : "0px"
		},
		init: function(){
			$("html").niceScroll(Oracle.NiceScroll.config);
		}
	},
	Preloader: {
		loaded : false,
		config : {
			delay    : 500,
			recheck  : 200,
			velocity : "slow"
		},
		init: function(){
			if(Oracle.Preloader.loaded){
				Oracle.Preloader.pageLoaded();
			}
			else{
				setTimeout(function(){
					Shared.Debug.log('Still Loading');
					Oracle.Preloader.init();
				}, Oracle.Preloader.recheck);
			}
		},
		pageLoaded: function(){
			Oracle.Preloader.hide();
		},
		show: function(){
			$("#status").fadeIn();
			$("#preloader").delay(Oracle.Preloader.delay).fadeIn(Oracle.Preloader.velocity);
		},
		hide: function(){
			$("#status").fadeOut();
			$("#preloader").delay(Oracle.Preloader.delay).fadeOut(Oracle.Preloader.velocity);
		}
	},
	Menu : {
        config: {
            senseSpeed    : 5,
            previusScroll : 0,
            imediate      : 10,
            openMenu      : false
        },
		init: function(){
			Oracle.Menu.setDebounce();
			Oracle.Menu.setHamburguer();
			Oracle.Menu.setScroll();
		},
		setScroll: function(){
			$('.go-menu').on('click',function(event){
				event.preventDefault();
			    var $anchor = $(this);
				$(".hamburguer").toggleClass("active");
				$(".menu-dropdown").toggleClass("active");
				setTimeout(function(){
					$(".menu-dropdown").toggleClass("end");
				}, 500);
			    $('html, body').stop().animate({ scrollTop: $($anchor.attr('href')).offset().top}, 1000, 'easeOutQuart');
			});
		},
		setDebounce: function(){
			$(document).scroll(Oracle.Menu.debounce(function(){ Oracle.Menu.go() }, Oracle.Menu.config.imediate));
		},
		setHamburguer: function(){
			$(".hamburguer").on("click", function(e){
				e.preventDefault();
				$(this).toggleClass("active");
				$(".menu-dropdown").toggleClass("active");
				setTimeout(function(){
					$(".menu-dropdown").toggleClass("end");
				}, 500);
			});
		},
		debounce: function(func, wait, immediate) {
			var timeout;
			return function() {
				var context = this, args = arguments;
				var later = function() {
					timeout = null;
					if (!immediate) func.apply(context, args);
				};
				var callNow = immediate && !timeout;
				clearTimeout(timeout);
				timeout = setTimeout(later, wait);
				if (callNow) func.apply(context, args);
			};
		},
		go: function(){
			var scroller  = $(document).scrollTop();
			var offset    = $(window).height() * 1/6;
			var offsetImg = $(".bg-img").height() - ($(window).height() - 200);
            if (scroller - Oracle.Menu.config.senseSpeed >  Oracle.Menu.config.previousScroll && scroller > offset){
            	$('#menu').addClass('off');
            	$('#menu').removeClass('on');
				if($(".menu-dropdown").hasClass('active')){
					$(".hamburguer").toggleClass("active");
					$(".menu-dropdown").toggleClass("active");
					setTimeout(function(){
						$(".menu-dropdown").toggleClass("end");
					}, 500);
				}
            }
            else if (scroller + Oracle.Menu.config.senseSpeed < Oracle.Menu.config.previousScroll && scroller > offset){
            	$('#menu').addClass('on');
            	$('#menu').removeClass('off');
            }
            Oracle.Menu.config.previousScroll = scroller;
		}
	},
	init: function () {
		var exec = [
			Oracle.NiceScroll,
			Oracle.Modernizr,
			Oracle.Preloader,
			Oracle.Menu
		];
		for(var i=0; i<exec.length; i++){
			exec[i].init();
		}
	}
}

$(document).ready(function() {
	Oracle.init();
});

$(window).load(function(){
	Oracle.Preloader.loaded = true;
})