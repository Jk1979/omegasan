$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	/*$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});*/

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};
	
 // equal heights
 function heightses() {
 	$(".toptitle").height('auto').equalHeights();
 }
 $(window).resize(function() {
 	heightses();
 });

 heightses();

 $("img, a").on("dragstart", function(event) { event.preventDefault(); });

 
 $(".toggle-mnu").click(function() {
 	$(this).toggleClass("on");
 	$(this).parent().next().next().find(".main-mnu").slideToggle();
 	return false;
 });

 $(".main-foot .toggle-mnu").click(function() {
 	$("html, body").animate({scrollTop: $(document).height() + 200}, "slow");
 	return false;
 });
 $(window).scroll(function(){
 	if ( $(document).scrollTop() > $(this).height() ) {
 		$('#scrollup').fadeIn('slow');
 	} else {
 		$('#scrollup').fadeOut('slow');
 	}
 });
 $("body").on("click", ".top", function() {
 	$("html, body").animate({scrollTop: 0}, "slow");
 });
 
    // установливаем обработчик события resize
    var widthW, heightW;
    widthW = $( window ).width();
    heightW = $( window ).height();
    
    $( window ).resize(function() {
    	widthW = $( window ).width();
    	heightW = $( window ).height();
    });
    

    $('.menu-cat li').on('mouseenter',function(e){
    	var sub = $(this).find('.submenu-cat');
    	var position = $(this).offset();
    	if(position.left <= (widthW/2))
    	{
    		var leftPos = position.left;
    		sub.css('left', '0');
    		sub.addClass('subcat');
    	}
    	if(position.left > (widthW/2)){
    		var rightPos = widthW - position.left;
    		sub.css('right','0px');
    		sub.addClass('subright');
    		//sub.find(".sub-title").css('text-align','right');
    	}
    	sub.toggle();
//            e.preventDefault();
}); 
    $('.menu-cat li').on('mouseleave',function(e){
    	var sub = $(this).find('.submenu-cat');
    	sub.hide();

    }
    );
//////////////   Gallery   ///////////////////////////    
$(".gallery-tizer-wrap")
.attr("href", $(".gallery-images a").attr("href"))
.css("background-image", "url(" + $(".gallery-images a").data("preview") + ")")
.css("text-decoration", "none");
$(".gallery-images a:first").remove();

$(".mfp-gallery, .ourworks").each(function() {
	$(this).magnificPopup({
		delegate: 'a',
		mainClass: 'mfp-zoom-in',
		type: 'image',
		tLoading: '',
		gallery:{
			enabled: true,
		},
		removalDelay: 300,
		callbacks: {
			beforeChange: function() {
				this.items[0].src = this.items[0].src + '?=' + Math.random(); 
			},
			open: function() {
				$.magnificPopup.instance.next = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
				}
				$.magnificPopup.instance.prev = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
				}
			},
			imageLoadComplete: function() { 
				var self = this;
				setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
			}
		}
	});
});

$("a[href='#callback']").magnificPopup({
	mainClass: 'my-mfp-zoom-in',
	removalDelay: 300,
	type: 'inline',
});



$("a[href='#callback']").click(function() {
	var dataForm = $(this).data("form");
	var dataText = $(this).data("text");
	$(".form-callback h4").text(dataText);
	$(".form-callback [name=admin-data]").val(dataForm);
	
	
});

/* my popup*/
function opendialog(){
	$(".overlay").css('visibility','visible');
	$(".overlay").css('opacity','1');
        $("#callback").fadeIn(); //плавное появление блока
      }

      function closedialog(){
	   $("#callback").fadeOut(); //плавное исчезание блока
	   $(".overlay").css('visibility','hidden');
	   $(".overlay").css('opacity','0');
	 }


    //Replace all SVG images with inline SVG
    $('img.img-svg').each(function(){
    	var $img = $(this);
    	var imgClass = $img.attr('class');
    	var imgURL = $img.attr('src');

    	$.get(imgURL, function(data) {
				// Get the SVG tag, ignore the rest
				var $svg = $(data).find('svg');

				// Add replaced image's classes to the new SVG
				if(typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass+' replaced-svg');
				}

				// Remove any invalid XML tags as per http://validator.w3.org
				$svg = $svg.removeAttr('xmlns:a');

				// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
				if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
					$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
				}

				// Replace image with new SVG
				$img.replaceWith($svg);

			}, 'xml');

    });
   /*$(".carousel-brands").owlCarousel({
		loop:true,
		nav: true
	});*/
	
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin: 30,
		nav: true,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsive:{
			0:{
				items:1,
			},
			520:{
				items:1,
			},
			560:{
				items:2,
			},
			768:{
				items:2,
			},
			992:{
				items:3,
			},
			1200:{
				items:3,
			}
		}
	});

	/*Cart*/
	function cartsubWidth(){
		var widthC = $('#cart_button').outerWidth();
		$(".cart_sub").css('width',widthC + 'px');
	}
	cartsubWidth();
	$('#cart_button').on('mouseenter click',function(e){
		if($('#cart_totalitems').html() == '0 ')
		{
			$('.cart_sub_content').hide();
			$('.cart_empty').show();
		}
		else {
			$('.cart_sub_content').show();
			$('.cart_empty').hide();
		}
		if($('.cart_sub').css('display')!=='block')
		{
			$('.cart_sub').toggle();
			e.preventDefault();
		}
		$('#cart_button').click(function(e){
			$('.cart_sub').toggle();
			e.preventDefault();
		}); 
	});
	$(document).on('mousemove click',function(e)
	{    

		var $this = $(e.target);
		
		if($('.cart_sub').css('display')==='block')
		{
			if(!$this.closest('.parent__cartblock').length)
			{
				$('.cart_sub').hide();
			}
		}
	});

	/*  CART  */
	/*
	$(".ms2_form input[name='count']").on('change',function(e){
		 $(this).closest(miniShop2.form).submit();
	});*/

   
	/*  Sort products */
	jQuery(function() {
		Sort.sort();
	});


	Sort = function()
	{
		function sortDrop(){
			jQuery('.sort-list').each(function(){
				jQuery(this).hover(
					function(){
						jQuery(this).addClass('sort-list-hov');
						jQuery(this).find('.sort-drop').show();
					},
					function(){
						jQuery(this).removeClass('sort-list-hov');
						jQuery(this).find('.sort-drop').hide();
					}
					);
			});
		}

		return {
			sort: sortDrop
		}
	}();

	function SortProducts(value){
		href = window.location.toString().split('?');
		new_href = '?sort=' + value;
		if(href.length > 1){
			tmp = href[1].split('&');
			if(tmp.length > 1){
				new_href = '?' + tmp[0] + '&' + tmp[1] + '&sort=' + value;
			}
		}
		window.location = new_href;
	}



	
//init slider
// $("#slider").slider({
// 	min: price_from,
// 	max: price_to,
// 	values: [current_price_from, current_price_to],
// 	range: true,
// 	stop: function(event, ui) {
// 		$("input#minCost").val($("#slider").slider("values",0));
// 		$("input#maxCost").val($("#slider").slider("values",1));
		
// 		href = window.location.toString().split('?');

// 		new_href = '?price_from=' + ui.values[ 0 ] + '&price_to=' + ui.values[ 1 ];
		
// 		if(href.length > 1){
// 			tmp = href[1].split('&');
// 			new_href += '&' + ((tmp.length == 1) ? tmp[0] : tmp[2]);
// 		}
		
// 		window.location = href[0] + new_href;
		
// 	},
	
// 	slide: function(event, ui){
// 		$("input#minCost").val($("#slider").slider("values",0));
// 		$("input#maxCost").val($("#slider").slider("values",1));
// 	}

// });  

// 	//init input-minCost
// 	$("input#minCost").change(function(){
// 		var value1=$("input#minCost").val();
// 		var value2=$("input#maxCost").val();
		
// 		if(parseInt(value1) > parseInt(value2)){
// 			value1 = value2;
// 			$("input#minCost").val(value1);
// 		}
// 		$("#slider").slider("values",0,value1);   
// 	});
	
// 	//init input-maxCost
// 	$("input#maxCost").change(function(){
// 		var value1=$("input#minCost").val();
// 		var value2=$("input#maxCost").val();
		
// 		if (value2 > 500000) { value2 = 500000; $("input#maxCost").val(500000)}
		
// 		if(parseInt(value1) > parseInt(value2)){
// 			value2 = value1;
// 			$("input#maxCost").val(value2);
// 		}
// 		$("#slider").slider("values",1,value2);
		
// 	});
//     // фильтрация ввода в поля
//     $('.idinp').keypress(function(event){
//     	var key, keyChar;
//     	if(!event) var event = window.event;
    	
//     	if (event.keyCode) key = event.keyCode;
//     	else if(event.which) key = event.which;
    	
//     	if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
//     	keyChar=String.fromCharCode(key);
    	
//     	if(!/\d/.test(keyChar))	return false;
    	
//     });

  


});

