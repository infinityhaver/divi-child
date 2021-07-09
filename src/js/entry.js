// import 'script-loader!jquery';
import 'script-loader!slick-carousel';
import AOS from 'aos';
import fancybox from '@fancyapps/fancybox';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import '../scss/entry.scss';
jQuery(document).ready(function($) {
	
	// animate on scroll init
	AOS.init({ once: true, duration: 700 });
	
});