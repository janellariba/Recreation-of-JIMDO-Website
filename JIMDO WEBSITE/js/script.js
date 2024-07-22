// Owlcarousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	loop:true,
    margin:10,
    nav:true,
	autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    center: true,
    navText: [
	    "<i><svg xmlns=' http://www.w3.org/2000/svg' style= ' height=20px; width=20px' fill='none' viewBox='0 0 20 20'><path fill='currentColor' fill-rule='evenodd' d='M9.723 10l4.768-4.768-2.94-2.94L3.84 10l7.71 7.709 2.94-2.941L9.724 10z' clip-rule='evenodd'></path></svg></i>",
	    "<i><svg xmlns= 'http://www.w3.org/2000/svg' style= ' height=20px; width=20px' fill='none' viewBox='0 0 20 20'><path fill='currentColor' fill-rule='evenodd' d='M9.723 10l4.768-4.768-2.94-2.94L3.84 10l7.71 7.709 2.94-2.941L9.724 10z' clip-rule='evenodd'></path></svg></i>"
	],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
  });
});