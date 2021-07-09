<?php
/**
 * @author Divi Child
 * @copyright 2021
 */

// shortcodes
require_once get_stylesheet_directory() . '/inc/shortcodes.php';

// document post type
// require_once get_stylesheet_directory() . '/inc/cpt/document.php';

// acf options pages
if ( function_exists( 'acf_add_options_page' ) ) {
	$child = acf_add_options_sub_page(array(
		'page_title' 	=> 'Blog Settings',
		'menu_title' 	=> 'Settings',
		'menu_slug'   	=> 'blog-settings',
		'parent_slug' 	=> 'edit.php',
	));
	$child = acf_add_options_sub_page(array(
		'page_title' 	=> 'Documents Settings',
		'menu_title' 	=> 'Settings',
		'menu_slug'   	=> 'documents-settings',
		'parent_slug' 	=> 'edit.php?post_type=document',
	));
}

if (!defined('ABSPATH')) die();
function enqueue_parent() {
	wp_enqueue_style('divi-style', get_template_directory_uri() . '/style.css');
}

function enqueue_forefront_scripts_n_styles() {
	wp_enqueue_script('forefront-js', get_stylesheet_directory_uri() . '/build/bundle.js', array('jquery'));
	wp_enqueue_style('forefront-style', get_stylesheet_directory_uri() . '/build/bundle.css');
}
add_action('wp_enqueue_scripts', 'enqueue_parent');
add_action('wp_enqueue_scripts', 'enqueue_forefront_scripts_n_styles');