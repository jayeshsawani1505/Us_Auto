(function(){window.wpfront_scroll_top=function(a){var d=jQuery,c=d("#wpfront-scroll-top-container").css("opacity",0),b={};switch(a.location){case 1:b.right=a.marginX+"px";b.bottom=a.marginY+"px";break;case 2:b.left=a.marginX+"px";b.bottom=a.marginY+"px";break;case 3:b.right=a.marginX+"px";b.top=a.marginY+"px";break;case 4:b.left=a.marginX+"px",b.top=a.marginY+"px"}c.css(b);a.button_width=0==a.button_width?"auto":a.button_width+"px";a.button_height=0==a.button_height?"auto":a.button_height+"px";c.children("img").css({width:a.button_width,
height:a.button_height});if(!a.hide_iframe||d(window).attr("self")===d(window).attr("top")){var e=!1,f=0,h=function(){clearTimeout(f);c.is(":visible")&&c.stop().fadeTo(a.button_fade_duration,0,function(){c.hide();e=!1})},k=function(){a.auto_hide&&(clearTimeout(f),f=setTimeout(function(){h()},1E3*a.auto_hide_after))},g=!1;b=function(){g||(g=!0,d(window).scrollTop()>a.scroll_offset?(c.stop().css("opacity",e?1:a.button_opacity).show(),e||k()):h(),g=!1)};d(window).on("scroll",b);d(document).on("scroll",
b);c.on("mouseenter",function(){clearTimeout(f);e=!0;d(this).css("opacity",1)}).on("mouseleave",function(){d(this).css("opacity",a.button_opacity);e=!1;k()}).on("click",function(b){if("url"===a.button_action)return!0;if("element"===a.button_action){b.preventDefault();var c=d(a.button_action_element_selector).first();b=d(a.button_action_container_selector);c=c.offset();if(null==c)return!1;var e=b.last().offset();if(null==e)return!1;a.button_action_element_offset=parseInt(a.button_action_element_offset);
isNaN(a.button_action_element_offset)&&(a.button_action_element_offset=0);b.animate({scrollTop:c.top-e.top-a.button_action_element_offset},a.scroll_duration);return!1}b.preventDefault();d("html, body").animate({scrollTop:0},a.scroll_duration);return!1})}}})();