	$(document).ready(function(){
	
	  $(".pricebtn").click(function(){
		$(".price_popup").toggle();
	  });
	});

//------------------------------
//Picker
//------------------------------

jQuery(function() {
	jQuery( "#datepicker,#datepicker2,#datepicker3,#datepicker4,#datepicker5,#datepicker6,#datepicker7,#datepicker8" ).datepicker();
});

 $( ".dropdown" ).click(function() {
	$( this ).toggleClass( "open" );
	});

//------------------------------
//Custom Select
//------------------------------
jQuery(document).ready(function(){
	jQuery('.mySelectBoxClass').customSelect();

	/* -OR- set a custom class name for the stylable element */
	//jQuery('.mySelectBoxClass').customSelect({customClass:'mySelectBoxClass'});
});

function mySelectUpdate(){
	setTimeout(function (){
		jQuery('.mySelectBoxClass').trigger('update');
	}, 200);
}

jQuery(window).resize(function() {
	mySelectUpdate();
});


//------------------------------
//CaroufredSell
//------------------------------
jQuery(document).ready(function(jQuery){

	jQuery("#foo").carouFredSel({
		width: "100%",
		height: 240,
		items: {
			visible: 6,
			minimum: 1,
			start: 2
		},
		scroll: {
			items: 1,
			easing: "easeInOutQuad",
			duration: 500,
			pauseOnHover: true
		},
		auto: false,
		prev: {
			button: "#prev_btn",
			key: "left"
		},
		next: {
			button: "#next_btn",
			key: "right"
		},				
		swipe: true
	});
	
	
	jQuery("#foo2").carouFredSel({
		width: "100%",
		height: 240,
		items: {
			visible: 6,
			minimum: 1,
			start: 2
		},
		scroll: {
			items: 1,
			easing: "easeInOutQuad",
			duration: 500,
			pauseOnHover: true
		},
		auto: false,				
		prev: {
			button: "#prev_btn2",
			key: "left"
		},
		next: {
			button: "#next_btn2",
			key: "right"
		},				
		swipe: true
	});
	
		jQuery("#foo3").carouFredSel({
		width: "100%",
		height: 240,
		items: {
			visible: 6,
			minimum: 1,
			start: 2
		},
		scroll: {
			items: 1,
			easing: "easeInOutQuad",
			duration: 500,
			pauseOnHover: true
		},
		auto: false,				
		prev: {
			button: "#prev_btn3",
			key: "left"
		},
		next: {
			button: "#next_btn3",
			key: "right"
		},				
		swipe: true
	});
		
	jQuery("#foo4").carouFredSel({
			width: "100%",
			height: 240,
			items: {
				visible: 6,
				minimum: 1,
				start: 2
			},
			scroll: {
				items: 1,
				easing: "easeInOutQuad",
				duration: 500,
				pauseOnHover: true
			},
			auto: false,				
			prev: {
				button: "#prev_btn4",
				key: "left"
			},
			next: {
				button: "#next_btn4",
				key: "right"
			},				
			swipe: true
		});
	
		jQuery("#foo5").carouFredSel({
				width: "100%",
				height: 240,
				items: {
					visible: 6,
					minimum: 1,
					start: 2
				},
				scroll: {
					items: 1,
					easing: "easeInOutQuad",
					duration: 500,
					pauseOnHover: true
				},
				auto: false,				
				prev: {
					button: "#prev_btn5",
					key: "left"
				},
				next: {
					button: "#next_btn5",
					key: "right"
				},				
				swipe: true
			});
		
			jQuery("#foo6").carouFredSel({
					width: "100%",
					height: 240,
					items: {
						visible: 6,
						minimum: 1,
						start: 2
					},
					scroll: {
						items: 1,
						easing: "easeInOutQuad",
						duration: 500,
						pauseOnHover: true
					},
					auto: false,				
					prev: {
						button: "#prev_btn6",
						key: "left"
					},
					next: {
						button: "#next_btn6",
						key: "right"
					},				
					swipe: true
				});
			
			jQuery("#foo7").carouFredSel({
		width: "100%",
		height: 240,
		items: {
			visible: 6,
			minimum: 1,
			start: 2
		},
		scroll: {
			items: 1,
			easing: "easeInOutQuad",
			duration: 500,
			pauseOnHover: true
		},
		auto: false,
		prev: {
			button: "#prev_btn7",
			key: "left"
		},
		next: {
			button: "#next_btn7",
			key: "right"
		},				
		swipe: true
	});
	
	
	jQuery("#foo8").carouFredSel({
		width: "100%",
		height: 240,
		items: {
			visible: 6,
			minimum: 1,
			start: 2
		},
		scroll: {
			items: 1,
			easing: "easeInOutQuad",
			duration: 500,
			pauseOnHover: true
		},
		auto: false,				
		prev: {
			button: "#prev_btn8",
			key: "left"
		},
		next: {
			button: "#next_btn8",
			key: "right"
		},				
		swipe: true
	});
	
		jQuery("#foo9").carouFredSel({
		width: "100%",
		height: 240,
		items: {
			visible: 6,
			minimum: 1,
			start: 2
		},
		scroll: {
			items: 1,
			easing: "easeInOutQuad",
			duration: 500,
			pauseOnHover: true
		},
		auto: false,				
		prev: {
			button: "#prev_btn9",
			key: "left"
		},
		next: {
			button: "#next_btn9",
			key: "right"
		},				
		swipe: true
	});
		
	jQuery("#foo10").carouFredSel({
			width: "100%",
			height: 240,
			items: {
				visible: 6,
				minimum: 1,
				start: 2
			},
			scroll: {
				items: 1,
				easing: "easeInOutQuad",
				duration: 500,
				pauseOnHover: true
			},
			auto: false,				
			prev: {
				button: "#prev_btn10",
				key: "left"
			},
			next: {
				button: "#next_btn10",
				key: "right"
			},				
			swipe: true
		});
	
		jQuery("#foo11").carouFredSel({
				width: "100%",
				height: 240,
				items: {
					visible: 6,
					minimum: 1,
					start: 2
				},
				scroll: {
					items: 1,
					easing: "easeInOutQuad",
					duration: 500,
					pauseOnHover: true
				},
				auto: false,				
				prev: {
					button: "#prev_btn11",
					key: "left"
				},
				next: {
					button: "#next_btn11",
					key: "right"
				},				
				swipe: true
			});
		
			jQuery("#foo12").carouFredSel({
					width: "100%",
					height: 240,
					items: {
						visible: 6,
						minimum: 1,
						start: 2
					},
					scroll: {
						items: 1,
						easing: "easeInOutQuad",
						duration: 500,
						pauseOnHover: true
					},
					auto: false,				
					prev: {
						button: "#prev_btn12",
						key: "left"
					},
					next: {
						button: "#next_btn12",
						key: "right"
					},				
					swipe: true
				});
			
			
			
	

});



//------------------------------
//Add rooms
//------------------------------
		function addroom2(){
			jQuery('.room2').addClass('block');
			jQuery('.room2').removeClass('none');
			
			jQuery('.addroom1').removeClass('block');
			jQuery('.addroom1').addClass('none');
		}
		function removeroom2(){
			jQuery('.room2').addClass('none');
			jQuery('.room2').removeClass('block');
			
			jQuery('.addroom1').removeClass('none');
			jQuery('.addroom1').addClass('block');
		}
		function addroom3(){
			jQuery('.room3').addClass('block');
			jQuery('.room3').removeClass('none');
			
			jQuery('.addroom2').removeClass('block');
			jQuery('.addroom2').addClass('none');
		}
		function removeroom3(){
			jQuery('.room3').addClass('none');
			jQuery('.room3').removeClass('block');
			
			jQuery('.addroom2').removeClass('none');
			jQuery('.addroom2').addClass('block');			
		}
		
		
		function addroom4(){
			jQuery('.room4').addClass('block');
			jQuery('.room4').removeClass('none');
			
			jQuery('.addroom3').removeClass('block');
			jQuery('.addroom3').addClass('none');
		}
		function removeroom4(){
			jQuery('.room4').addClass('none');
			jQuery('.room4').removeClass('block');
			
			jQuery('.addroom3').removeClass('none');
			jQuery('.addroom3').addClass('block');			
		}
		
		function addroom5(){
			jQuery('.room5').addClass('block');
			jQuery('.room5').removeClass('none');
			
			jQuery('.addroom4').removeClass('block');
			jQuery('.addroom4').addClass('none');
		}
		function removeroom5(){
			jQuery('.room5').addClass('none');
			jQuery('.room5').removeClass('block');
			
			jQuery('.addroom4').removeClass('none');
			jQuery('.addroom4').addClass('block');			
		}
		
		function addroom6(){
			jQuery('.room6').addClass('block');
			jQuery('.room6').removeClass('none');
			
			jQuery('.addroom5').removeClass('block');
			jQuery('.addroom5').addClass('none');
		}
		function removeroom6(){
			jQuery('.room6').addClass('none');
			jQuery('.room6').removeClass('block');
			
			jQuery('.addroom5').removeClass('none');
			jQuery('.addroom5').addClass('block');			
		}
		
		function addroom7(){
			jQuery('.room7').addClass('block');
			jQuery('.room7').removeClass('none');
			
			jQuery('.addroom6').removeClass('block');
			jQuery('.addroom6').addClass('none');
		}
		function removeroom7(){
			jQuery('.room7').addClass('none');
			jQuery('.room7').removeClass('block');
			
			jQuery('.addroom6').removeClass('none');
			jQuery('.addroom6').addClass('block');			
		}
		
		function addroom8(){
			jQuery('.room8').addClass('block');
			jQuery('.room8').removeClass('none');
			
			jQuery('.addroom7').removeClass('block');
			jQuery('.addroom7').addClass('none');
		}
		function removeroom8(){
			jQuery('.room8').addClass('none');
			jQuery('.room8').removeClass('block');
			
			jQuery('.addroom7').removeClass('none');
			jQuery('.addroom7').addClass('block');			
		}
		
		
		function addroom9(){
			jQuery('.room9').addClass('block');
			jQuery('.room9').removeClass('none');
			
			jQuery('.addroom8').removeClass('block');
			jQuery('.addroom8').addClass('none');
		}
		function removeroom9(){
			jQuery('.room9').addClass('none');
			jQuery('.room9').removeClass('block');
			
			jQuery('.addroom8').removeClass('none');
			jQuery('.addroom8').addClass('block');			
		}

		//Center searchfield
		//jQuery('.sboxpurple').addClass('searchvalign');
		
		var $ = jQuery.noConflict();
		
		$(document).ready(function(){
			function centerSearch(){
				var $sih = $(window).height();
				var $srcHeight = $('.searchcontainer').innerHeight();
				var $srcValign = $sih/2 - $srcHeight;
				
				$('.searchcontainer').css({'opacity': 0, 'marginTop' : $srcValign - 30  +'px'});

				setTimeout(function (){
					$('.searchcontainer').stop().animate({'opacity': 1, 'marginTop' : $srcValign  +'px'}, 1000);		
				
				}, 1500);
				
			}
			centerSearch();
			
		});	
		
		//js for currency and country
		var config = {
      '.chosen-select'           : {},
      '.chosen-select-deselect'  : {allow_single_deselect:true},
      '.chosen-select-no-single' : {disable_search_threshold:10},
      '.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
      '.chosen-select-width'     : {width:"95%"}
    }
    for (var selector in config) {
      $(selector).chosen(config[selector]);
    };
	
	
	//js for accordian
	
	$(document).ready(function(){
		$('.detailbtn').click(function(){
		$('.accordian1').slideToggle();
		})
		
  });
  
   $('ul li img').click(function () {
                
                var idx = $(this).parent('li').index();
                console.log("image clicked in li index " + idx);
                $('#myCarousel').carousel(idx);
            });
			
			
	 $(document).ready(function () {
            HouseTrip.Views.SearchBar.load();
            new HouseTrip.Views.Homepage({ el: 'body' });

            HouseTrip.Helpers.KissMetrics.setProperty({ "Visited Responsive Home Page": "Yes" });
            HouseTrip.Helpers.KissMetrics.setUserProperties();
        });
		
		 $(function () {
            HouseTrip.navigationBar = new HouseTrip.Views.NavigationBar({
                el: '.ht-navbar-collapse',
                model: new HouseTrip.Models.NavigationBar({ "path": "/en/v4/layout/navigation_bar" })
            });
        });
		
		$(document).ready(function(){
		$('#mcal').click(function(){
			$('.pr_val_modal').hide();
		});	
	});
	
	docReady(function () {

            var container = document.querySelector('.masonry');
            var button = document.querySelector('#toggle-button');
            var msnry = new Masonry(container, {
                columnWidth: 2
            });

            var isActive = true;

            eventie.bind(button, 'click', function () {
                if (isActive) {
                    msnry.destroy();
                } else {
                    msnry = new Masonry(container);
                }
                isActive = !isActive;
            });

        }); 
		
		
 