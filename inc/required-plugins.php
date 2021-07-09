<?php
/**
 * Required plugins
 *
 * @package Divi Child
 */

/**
 * TGM Plugin Activation
 */
require_once get_template_directory() . '/inc/vendor/class-tgm-plugin-activation.php';

/**
 * Register required plugins
 */
function forefront_register_required_plugins() {
	$plugins = array(
		array(
			'name'     => 'ACF RGBA Color Picker',
			'slug'     => 'acf-rgba-color-picker',
			'required' => true,
		)
	);
	$config  = array(
		'id'           => 'forefront',
		'default_path' => '',
		'menu'         => 'tgmpa-install-plugins',
		'parent_slug'  => 'themes.php',
		'capability'   => 'edit_theme_options',
		'has_notices'  => true,
		'dismissable'  => true,
		'dismiss_msg'  => '',
		'is_automatic' => false,
		'message'      => '',
	);

	tgmpa( $plugins, $config );
}
add_action( 'tgmpa_register', 'forefront_register_required_plugins' );
