<?php
	if ( et_theme_builder_overrides_layout( ET_THEME_BUILDER_HEADER_LAYOUT_POST_TYPE ) || et_theme_builder_overrides_layout( ET_THEME_BUILDER_FOOTER_LAYOUT_POST_TYPE ) ) {
		// Skip rendering anything as this partial is being buffered anyway.
		// In addition, avoids get_sidebar() issues since that uses
		// locate_template() with require_once.
	return;
	}
?>
<?php do_action('et_after_main_content'); ?>
<?php if('on' === et_get_option('divi_back_to_top', 'false')) : ?>
	<span class="et_pb_scroll_top et-pb-icon"></span>
<?php endif; ?>
<?php if(!is_page_template('page-template-blank.php')) : ?>
	<footer id="main-footer">
		<?php get_sidebar('footer'); ?>
		<?php if(has_nav_menu('footer-menu')) : ?>
			<div id="et-footer-nav">
				<div class="container">
					<?php
						wp_nav_menu( array(
							'theme_location' => 'footer-menu',
							'depth'          => '1',
							'menu_class'     => 'bottom-nav',
							'container'      => '',
							'fallback_cb'    => '',
						));
					?>
				</div>
			</div>
		<?php endif; ?>
		<div id="footer-bottom">
			<div class="container clearfix footer-logo-social">
				<?php if(false !== et_get_option('show_footer_social_icons', true)) { ?>
					<?php get_template_part('includes/social_icons', 'footer'); ?>
				<?php } ?>
			</div>
		</div>
	</footer>
	</div>
<?php endif; ?>
	</div>
	<?php wp_footer(); ?>
</body>
</html>
