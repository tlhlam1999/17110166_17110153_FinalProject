var mod_pagespeed_kXI_xomphz = "(function($){\"use strict\";$(document).ready(function(){var selector_map=$('#google_map');var img_pin=selector_map.attr('data-pin');var data_map_x=selector_map.attr('data-map-x');var data_map_y=selector_map.attr('data-map-y');var scrollwhell=selector_map.attr('data-scrollwhell');var draggable=selector_map.attr('data-draggable');if(img_pin==null){img_pin='images/icons/location.png';}if(data_map_x==null||data_map_y==null){data_map_x=40.007749;data_map_y=-93.266572;}if(scrollwhell==null){scrollwhell=0;}if(draggable==null){draggable=0;}var style=[];var latitude=data_map_x,longitude=data_map_y,map_zoom=14;var locations=[['<div class=\"infobox\"><p>Now that you visited our website, how'+' <br>about checking out our office too?</p></div>',latitude,longitude,2]];if(selector_map!==undefined){var map=new google.maps.Map(document.getElementById('google_map'),{zoom:15,scrollwheel:scrollwhell,navigationControl:true,mapTypeControl:false,scaleControl:false,draggable:draggable,styles:style,center:new google.maps.LatLng(latitude,longitude),mapTypeId:google.maps.MapTypeId.ROADMAP});}var infowindow=new google.maps.InfoWindow();var marker,i;for(i=0;i<locations.length;i++){marker=new google.maps.Marker({position:new google.maps.LatLng(locations[i][1],locations[i][2]),map:map,icon:img_pin});google.maps.event.addListener(marker,'click',(function(marker,i){return function(){infowindow.setContent(locations[i][0]);infowindow.open(map,marker);}})(marker,i));}});})(jQuery);";
var mod_pagespeed_5lzifwWIGu = "(function($){\"use strict\";$(\".animsition\").animsition({inClass:'fade-in',outClass:'fade-out',inDuration:1500,outDuration:800,linkElement:'.animsition-link',loading:true,loadingParentElement:'html',loadingClass:'animsition-loading-1',loadingInner:'<div data-loader=\"ball-scale\"></div>',timeout:false,timeoutCountdown:5000,onLoadEvent:true,browser:['animation-duration','-webkit-animation-duration'],overlay:false,overlayClass:'animsition-overlay-slide',overlayParentElement:'html',transition:function(url){window.location.href=url;}});var windowH=$(window).height()/2;$(window).on('scroll',function(){if($(this).scrollTop()>windowH){$(\"#myBtn\").css('display','flex');}else{$(\"#myBtn\").css('display','none');}});$('#myBtn').on(\"click\",function(){$('html, body').animate({scrollTop:0},300);});$('.js-show-header-dropdown').on('click',function(){$(this).parent().find('.header-dropdown')});var menu=$('.js-show-header-dropdown');var sub_menu_is_showed=-1;for(var i=0;i<menu.length;i++){$(menu[i]).on('click',function(){if(jQuery.inArray(this,menu)==sub_menu_is_showed){$(this).parent().find('.header-dropdown').toggleClass('show-header-dropdown');sub_menu_is_showed=-1;}else{for(var i=0;i<menu.length;i++){$(menu[i]).parent().find('.header-dropdown').removeClass(\"show-header-dropdown\");}$(this).parent().find('.header-dropdown').toggleClass('show-header-dropdown');sub_menu_is_showed=jQuery.inArray(this,menu);}});}$(\".js-show-header-dropdown, .header-dropdown\").click(function(event){event.stopPropagation();});$(window).on(\"click\",function(){for(var i=0;i<menu.length;i++){$(menu[i]).parent().find('.header-dropdown').removeClass(\"show-header-dropdown\");}sub_menu_is_showed=-1;});var posWrapHeader=$('.topbar').height();var header=$('.container-menu-header');$(window).on('scroll',function(){if($(this).scrollTop()>=posWrapHeader){$('.header1').addClass('fixed-header');$(header).css('top',-posWrapHeader);}else{var x=-$(this).scrollTop();$(header).css('top',x);$('.header1').removeClass('fixed-header');}if($(this).scrollTop()>=200&&$(window).width()>992){$('.fixed-header2').addClass('show-fixed-header2');$('.header2').css('visibility','hidden');$('.header2').find('.header-dropdown').removeClass(\"show-header-dropdown\");}else{$('.fixed-header2').removeClass('show-fixed-header2');$('.header2').css('visibility','visible');$('.fixed-header2').find('.header-dropdown').removeClass(\"show-header-dropdown\");}});$('.btn-show-menu-mobile').on('click',function(){$(this).toggleClass('is-active');$('.wrap-side-menu').slideToggle();});var arrowMainMenu=$('.arrow-main-menu');for(var i=0;i<arrowMainMenu.length;i++){$(arrowMainMenu[i]).on('click',function(){$(this).parent().find('.sub-menu').slideToggle();$(this).toggleClass('turn-arrow');})}$(window).resize(function(){if($(window).width()>=992){if($('.wrap-side-menu').css('display')=='block'){$('.wrap-side-menu').css('display','none');$('.btn-show-menu-mobile').toggleClass('is-active');}if($('.sub-menu').css('display')=='block'){$('.sub-menu').css('display','none');$('.arrow-main-menu').removeClass('turn-arrow');}}});$('.btn-romove-top-noti').on('click',function(){$(this).parent().remove();})\n$('.block2-btn-addwishlist').on('click',function(e){e.preventDefault();$(this).addClass('block2-btn-towishlist');$(this).removeClass('block2-btn-addwishlist');$(this).off('click');});$('.btn-num-product-down').on('click',function(e){e.preventDefault();var numProduct=Number($(this).next().val());if(numProduct>1)$(this).next().val(numProduct-1);});$('.btn-num-product-up').on('click',function(e){e.preventDefault();var numProduct=Number($(this).prev().val());$(this).prev().val(numProduct+1);});$('.active-dropdown-content .js-toggle-dropdown-content').toggleClass('show-dropdown-content');$('.active-dropdown-content .dropdown-content').slideToggle('fast');$('.js-toggle-dropdown-content').on('click',function(){$(this).toggleClass('show-dropdown-content');$(this).parent().find('.dropdown-content').slideToggle('fast');});var srcOld=$('.video-mo-01').children('iframe').attr('src');$('[data-target=\"#modal-video-01\"]').on('click',function(){$('.video-mo-01').children('iframe')[0].src+=\"&autoplay=1\";setTimeout(function(){$('.video-mo-01').css('opacity','1');},300);});$('[data-dismiss=\"modal\"]').on('click',function(){$('.video-mo-01').children('iframe')[0].src=srcOld;$('.video-mo-01').css('opacity','0');});})(jQuery);";
