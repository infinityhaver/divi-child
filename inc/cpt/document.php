<?php 
	// register document post type
	function document_function() {
		$labels = array(
			'name'                  => _x( 'Documents', 'Post Type General Name', 'divi-child' ),
			'singular_name'         => _x( 'Document', 'Post Type Singular Name', 'divi-child' ),
			'menu_name'             => __( 'Documents', 'divi-child' ),
			'name_admin_bar'        => __( 'Documents', 'divi-child' ),
			'archives'              => __( 'Document Archives', 'divi-child' ),
			'attributes'            => __( 'Document Attributes', 'divi-child' ),
			'parent_item_colon'     => __( 'Parent Document:', 'divi-child' ),
			'all_items'             => __( 'All Documents', 'divi-child' ),
			'add_new_item'          => __( 'Add New Document', 'divi-child' ),
			'add_new'               => __( 'Add New', 'divi-child' ),
			'new_item'              => __( 'New Document', 'divi-child' ),
			'edit_item'             => __( 'Edit Document', 'divi-child' ),
			'update_item'           => __( 'Update Document', 'divi-child' ),
			'view_item'             => __( 'View Document', 'divi-child' ),
			'view_items'            => __( 'View Documents', 'divi-child' ),
			'search_items'          => __( 'Search Document', 'divi-child' ),
			'not_found'             => __( 'Not found', 'divi-child' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'divi-child' ),
			'featured_image'        => __( 'Featured Image', 'divi-child' ),
			'set_featured_image'    => __( 'Set featured image', 'divi-child' ),
			'remove_featured_image' => __( 'Remove featured image', 'divi-child' ),
			'use_featured_image'    => __( 'Use as featured image', 'divi-child' ),
			'insert_into_item'      => __( 'Insert into document', 'divi-child' ),
			'uploaded_to_this_item' => __( 'Uploaded to this document', 'divi-child' ),
			'items_list'            => __( 'Document list', 'divi-child' ),
			'items_list_navigation' => __( 'Documents list navigation', 'divi-child' ),
			'filter_items_list'     => __( 'Filter documents list', 'divi-child' ),
		);
		$rewrite = array(
			'slug'                  => 'documents',
			'with_front'            => true,
			'pages'                 => true,
			'feeds'                 => true,
		);
		$args = array(
			'label'                 => __( 'Document', 'divi-child' ),
			'description'           => __( 'Documents', 'divi-child' ),
			'labels'                => $labels,
			'supports'              => array( 'title', 'editor', 'excerpt', 'thumbnail' ),
			'taxonomies'            => array( 'doc_cat', 'doc_tag' ),
			'hierarchical'          => true,
			'public'                => true,
			'show_ui'               => true,
			'show_in_menu'          => true,
			'menu_position'         => 5,
			'menu_icon'             => 'dashicons-media-document',
			'show_in_admin_bar'     => true,
			'show_in_nav_menus'     => true,
			'can_export'            => true,
			'has_archive'           => true,
			'exclude_from_search'   => false,
			'publicly_queryable'    => true,
			'rewrite'               => $rewrite,
			'capability_type'       => 'page',
		);
		register_post_type( 'document', $args );
	}
	add_action( 'init', 'document_function', 0 );

	// register doc_cat taxonomy
	function doc_cat_function() {
		$labels = array(
			'name'                       => _x( 'Document Categories', 'Taxonomy General Name', 'divi-child' ),
			'singular_name'              => _x( 'Document Category', 'Taxonomy Singular Name', 'divi-child' ),
			'menu_name'                  => __( 'Categories', 'divi-child' ),
			'all_items'                  => __( 'All Categories', 'divi-child' ),
			'parent_item'                => __( 'Parent Item', 'divi-child' ),
			'parent_item_colon'          => __( 'Parent Item:', 'divi-child' ),
			'new_item_name'              => __( 'New Category Name', 'divi-child' ),
			'add_new_item'               => __( 'Add New Category', 'divi-child' ),
			'edit_item'                  => __( 'Edit Category', 'divi-child' ),
			'update_item'                => __( 'Update Category', 'divi-child' ),
			'view_item'                  => __( 'View Category', 'divi-child' ),
			'separate_items_with_commas' => __( 'Separate categories with commas', 'divi-child' ),
			'add_or_remove_items'        => __( 'Add or remove categories', 'divi-child' ),
			'choose_from_most_used'      => __( 'Choose from the most used', 'divi-child' ),
			'popular_items'              => __( 'Popular Categories', 'divi-child' ),
			'search_items'               => __( 'Search Categories', 'divi-child' ),
			'not_found'                  => __( 'Not Found', 'divi-child' ),
			'no_terms'                   => __( 'No categories', 'divi-child' ),
			'items_list'                 => __( 'Categories list', 'divi-child' ),
			'items_list_navigation'      => __( 'Categories list navigation', 'divi-child' ),
		);
		$rewrite = array(
			'slug'                       => 'document-categories',
			'with_front'                 => false,
			'hierarchical'               => false,
		);
		$args = array(
			'labels'                     => $labels,
			'hierarchical'               => true,
			'public'                     => true,
			'show_ui'                    => true,
			'show_admin_column'          => true,
			'show_in_nav_menus'          => true,
			'show_tagcloud'              => true,
			'rewrite'                    => $rewrite,
		);
		register_taxonomy( 'doc_cat', array( 'document' ), $args );
	}
	add_action( 'init', 'doc_cat_function', 0 );

	// register doc_tag taxonomy
	function doc_tag_function() {
		$labels = array(
			'name'                       => _x( 'Document Tags', 'Taxonomy General Name', 'divi-child' ),
			'singular_name'              => _x( 'Document Tag', 'Taxonomy Singular Name', 'divi-child' ),
			'menu_name'                  => __( 'Tags', 'divi-child' ),
			'all_items'                  => __( 'All Tags', 'divi-child' ),
			'parent_item'                => __( 'Parent Tag', 'divi-child' ),
			'parent_item_colon'          => __( 'Parent Tag:', 'divi-child' ),
			'new_item_name'              => __( 'New Tag Name', 'divi-child' ),
			'add_new_item'               => __( 'Add New Tag', 'divi-child' ),
			'edit_item'                  => __( 'Edit Tag', 'divi-child' ),
			'update_item'                => __( 'Update Tag', 'divi-child' ),
			'view_item'                  => __( 'View Tag', 'divi-child' ),
			'separate_items_with_commas' => __( 'Separate tags with commas', 'divi-child' ),
			'add_or_remove_items'        => __( 'Add or remove tags', 'divi-child' ),
			'choose_from_most_used'      => __( 'Choose from the most used', 'divi-child' ),
			'popular_items'              => __( 'Popular Tags', 'divi-child' ),
			'search_items'               => __( 'Search Tags', 'divi-child' ),
			'not_found'                  => __( 'Not Found', 'divi-child' ),
			'no_terms'                   => __( 'No tags', 'divi-child' ),
			'items_list'                 => __( 'Tags list', 'divi-child' ),
			'items_list_navigation'      => __( 'Tags list navigation', 'divi-child' ),
		);
		$rewrite = array(
			'slug'                       => 'document-tags',
			'with_front'                 => true,
			'hierarchical'               => false,
		);
		$args = array(
			'labels'                     => $labels,
			'hierarchical'               => false,
			'public'                     => true,
			'show_ui'                    => true,
			'show_admin_column'          => true,
			'show_in_nav_menus'          => true,
			'show_tagcloud'              => true,
			'rewrite'                    => $rewrite,
		);
		register_taxonomy( 'doc_tag', array( 'document' ), $args );
	}
	add_action( 'init', 'doc_tag_function', 0 );

	// make doc_cats filterable
	add_action('restrict_manage_posts', 'ffw_filter_post_type_by_doc_cat');
	function ffw_filter_post_type_by_doc_cat() {
		global $typenow;
		$post_type = 'document'; // change to your post type
		$taxonomy  = 'doc_cat'; // change to your taxonomy
		if ($typenow == $post_type) {
			$selected      = isset($_GET[$taxonomy]) ? $_GET[$taxonomy] : '';
			$info_taxonomy = get_taxonomy($taxonomy);
			wp_dropdown_categories(array(
				'show_option_all' => __("Show All {$info_taxonomy->label}"),
				'taxonomy'        => $taxonomy,
				'name'            => $taxonomy,
				'orderby'         => 'name',
				'selected'        => $selected,
				'show_count'      => true,
				'hide_empty'      => true,
			));
		};
	}
	add_filter('parse_query', 'ffw_convert_doc_cat_id_to_term_in_query');

	// make doc_tags filterable
	add_action('restrict_manage_posts', 'ffw_filter_post_type_by_doc_tag');
	function ffw_filter_post_type_by_doc_tag() {
		global $typenow;
		$post_type = 'document'; // change to your post type
		$taxonomy  = 'doc_tag'; // change to your taxonomy
		if ($typenow == $post_type) {
			$selected      = isset($_GET[$taxonomy]) ? $_GET[$taxonomy] : '';
			$info_taxonomy = get_taxonomy($taxonomy);
			wp_dropdown_categories(array(
				'show_option_all' => __("Show All {$info_taxonomy->label}"),
				'taxonomy'        => $taxonomy,
				'name'            => $taxonomy,
				'orderby'         => 'name',
				'selected'        => $selected,
				'show_count'      => true,
				'hide_empty'      => true,
			));
		};
	}
	add_filter('parse_query', 'ffw_convert_doc_tag_id_to_term_in_query');

	function ffw_convert_doc_cat_id_to_term_in_query($query) {
		global $pagenow;
		$post_type = 'document'; // change to your post type
		$taxonomy  = 'doc_cat'; // change to your taxonomy
		$q_vars    = &$query->query_vars;
		if ( $pagenow == 'edit.php' && isset($q_vars['post_type']) && $q_vars['post_type'] == $post_type && isset($q_vars[$taxonomy]) && is_numeric($q_vars[$taxonomy]) && $q_vars[$taxonomy] != 0 ) {
			$term = get_term_by('id', $q_vars[$taxonomy], $taxonomy);
			$q_vars[$taxonomy] = $term->slug;
		}
	}

	function ffw_convert_doc_tag_id_to_term_in_query($query) {
		global $pagenow;
		$post_type = 'document'; // change to your post type
		$taxonomy  = 'doc_tag'; // change to your taxonomy
		$q_vars    = &$query->query_vars;
		if ( $pagenow == 'edit.php' && isset($q_vars['post_type']) && $q_vars['post_type'] == $post_type && isset($q_vars[$taxonomy]) && is_numeric($q_vars[$taxonomy]) && $q_vars[$taxonomy] != 0 ) {
			$term = get_term_by('id', $q_vars[$taxonomy], $taxonomy);
			$q_vars[$taxonomy] = $term->slug;
		}
	}

	// make custom taxonomy columns sortable
	add_filter( 'manage_document_posts_columns', 'set_custom_edit_document_columns' );
	function set_custom_edit_document_columns( $columns ) {
		$date = $colunns['date'];
		unset( $columns['date'] );
		unset( $columns['taxonomy-doc_cat'] );
		unset( $columns['taxonomy-doc_tag'] );
		$columns['doc_cat'] = __( 'Categories', 'divi-child' );
		$columns['doc_tag'] = __( 'Tags', 'divi-child' );
		$columns['date'] = __( 'Date', 'divi-child' );
	  return $columns;
	}

	add_action( 'manage_document_posts_custom_column' , 'custom_document_column', 10, 2 );
	function custom_document_column( $column, $post_id ) {
		switch ( $column ) {
			case 'doc_cat' :
				$terms = get_the_term_list( $post_id , 'doc_cat' , '' , ', ' , '' );
				echo is_string( $terms ) ? $terms : '—';
			break;
			case 'doc_tag' :
				$terms = get_the_term_list( $post_id , 'doc_tag' , '' , ', ' , '' );
				echo is_string( $terms ) ? $terms : '—';
			break;

		}
	}

	add_filter( 'manage_edit-document_sortable_columns', 'set_custom_document_sortable_columns' );
	function set_custom_document_sortable_columns( $columns ) {
		$columns['doc_cat'] = 'doc_cat';
		$columns['doc_tag'] = 'doc_tag';
		$columns['date'] = 'date';
		return $columns;
	}