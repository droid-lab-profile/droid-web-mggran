Translate={currentLang:null,config:{selector:"translate",cookieVar:"DCFrontModelLang"},init:function(a){var a=a||Translate.config;$("."+a.selector).on("click",function(){var t=$(this);Shared.__is_empty(t.data("lang"))||(Translate.go(t.data("lang")),Translate.setLanguage(t.data("lang"),a))}),Translate.start()},go:function(a){$("*").each(function(){var t=$(this),e=t.data(a);t.is("input")||t.is("textarea")?Shared.__is_empty(e)||t.attr("placeholder",e):t.is("img")?Shared.__is_empty(e)||t.attr("src","./images/"+e):Shared.__is_empty(e)||t.empty().html(e)}),Shared.Debug.log("Translate Called")},setLanguage:function(a,t){var t=t||Translate.config;Translate.currentLang=a,Cookie.set(t.cookieVar,a)},getLanguage:function(a){var a=a||Translate.config;return Cookie.get(a.cookieVar)},start:function(){var a=Translate.getLanguage();Shared.__is_empty(a)||(Translate.currentLang=a,Translate.go(a))}},$(document).ready(function(){Translate.init()});