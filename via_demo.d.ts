import via_demo from "../via-2.0.9/via_demo";


declare var VIA_VERSION: string;
declare var VIA_NAME: string;
declare var VIA_SHORT_NAME: string;
declare var VIA_REGION_SHAPE: {
    RECT: string;
    CIRCLE: string;
    ELLIPSE: string;
    POLYGON: string;
    POINT: string;
    POLYLINE: string;
};
declare var VIA_ATTRIBUTE_TYPE: {
    TEXT: string;
    CHECKBOX: string;
    RADIO: string;
    IMAGE: string;
    DROPDOWN: string;
};
declare var VIA_DISPLAY_AREA_CONTENT_NAME: {
    IMAGE: string;
    IMAGE_GRID: string;
    SETTINGS: string;
    PAGE_404: string;
    PAGE_GETTING_STARTED: string;
    PAGE_ABOUT: string;
    PAGE_START_INFO: string;
    PAGE_LICENSE: string;
};
declare var VIA_ANNOTATION_EDITOR_MODE: {
    SINGLE_REGION: string;
    ALL_REGIONS: string;
};
declare var VIA_ANNOTATION_EDITOR_PLACEMENT: {
    NEAR_REGION: string;
    IMAGE_BOTTOM: string;
    DISABLE: string;
};
declare var VIA_REGION_EDGE_TOL: number;
declare var VIA_REGION_CONTROL_POINT_SIZE: number;
declare var VIA_POLYGON_VERTEX_MATCH_TOL: number;
declare var VIA_REGION_MIN_DIM: number;
declare var VIA_MOUSE_CLICK_TOL: number;
declare var VIA_ELLIPSE_EDGE_TOL: number;
declare var VIA_THETA_TOL: number;
declare var VIA_POLYGON_RESIZE_VERTEX_OFFSET: number;
declare var VIA_CANVAS_DEFAULT_ZOOM_LEVEL_INDEX: number;
declare var VIA_CANVAS_ZOOM_LEVELS: number[];
declare var VIA_REGION_COLOR_LIST: string[];
declare var VIA_REGION_SHAPES_POINTS_RADIUS: number;
declare var VIA_REGION_POINT_RADIUS: number;
declare var VIA_REGION_POINT_RADIUS_DEFAULT: number;
declare var VIA_THEME_REGION_BOUNDARY_WIDTH: number;
declare var VIA_THEME_BOUNDARY_LINE_COLOR: string;
declare var VIA_THEME_BOUNDARY_FILL_COLOR: string;
declare var VIA_THEME_SEL_REGION_FILL_COLOR: string;
declare var VIA_THEME_SEL_REGION_FILL_BOUNDARY_COLOR: string;
declare var VIA_THEME_SEL_REGION_OPACITY: number;
declare var VIA_THEME_MESSAGE_TIMEOUT_MS: number;
declare var VIA_THEME_CONTROL_POINT_COLOR: string;
declare var VIA_CSV_SEP: string;
declare var VIA_CSV_QUOTE_CHAR: string;
declare var VIA_CSV_KEYVAL_SEP: string;
declare var _via_img_metadata: {};
declare var _via_img_src: {};
declare var _via_img_fileref: {};
declare var _via_img_count: number;
declare var _via_canvas_regions: any[];
declare var _via_canvas_scale: number;
declare var _via_image_id: string;
declare var _via_image_index: number;
declare var _via_current_image_filename: any;
declare var _via_current_image: any;
declare var _via_current_image_width: any;
declare var _via_current_image_height: any;
declare var _via_img_stat: {};
declare var _via_is_all_img_stat_read_ongoing: boolean;
declare var _via_img_stat_current_img_index: boolean;
declare var _via_display_area: HTMLElement;
declare var _via_img_panel: HTMLElement;
declare var _via_reg_canvas: HTMLElement;
declare var _via_reg_ctx: any;
declare var _via_canvas_width: any, _via_canvas_height: any;
declare var _via_canvas_zoom_level_index: number;
declare var _via_canvas_scale_without_zoom: number;
declare var _via_is_user_drawing_region: boolean;
declare var _via_current_image_loaded: boolean;
declare var _via_is_window_resized: boolean;
declare var _via_is_user_resizing_region: boolean;
declare var _via_is_user_moving_region: boolean;
declare var _via_is_user_drawing_polygon: boolean;
declare var _via_is_region_selected: boolean;
declare var _via_is_all_region_selected: boolean;
declare var _via_is_loaded_img_list_visible: boolean;
declare var _via_is_attributes_panel_visible: boolean;
declare var _via_is_reg_attr_panel_visible: boolean;
declare var _via_is_file_attr_panel_visible: boolean;
declare var _via_is_canvas_zoomed: boolean;
declare var _via_is_loading_current_image: boolean;
declare var _via_is_region_id_visible: boolean;
declare var _via_is_region_boundary_visible: boolean;
declare var _via_is_region_info_visible: boolean;
declare var _via_is_ctrl_pressed: boolean;
declare var _via_is_debug_mode: boolean;
declare var _via_current_shape: string;
declare var _via_current_polygon_region_id: number;
declare var _via_user_sel_region_id: number;
declare var _via_click_x0: number;
declare var _via_click_y0: number;
declare var _via_click_x1: number;
declare var _via_click_y1: number;
declare var _via_region_click_x: any, _via_region_click_y: any;
declare var _via_region_edge: number[];
declare var _via_current_x: number;
declare var _via_current_y: number;
declare var _via_region_selected_flag: any[];
declare var _via_copied_image_regions: any[];
declare var _via_paste_to_multiple_images_input: any;
declare var _via_message_clear_timer: any;
declare var _via_attribute_being_updated: string;
declare var _via_attributes: {
    region: {};
    file: {};
};
declare var _via_current_attribute_id: string;
declare var _via_canvas_regions_group_color: {};
declare var _via_user_input_ok_handler: any;
declare var _via_user_input_cancel_handler: any;
declare var _via_user_input_data: {};
declare var _via_annotation_editor_panel: HTMLElement;
declare var _via_metadata_being_updated: string;
declare var _via_annotation_editor_mode: string;
declare var _via_is_local_storage_available: boolean;
declare var _via_is_save_ongoing: boolean;
declare var _via_image_id_list: any[];
declare var _via_image_filename_list: any[];
declare var _via_image_load_error: any[];
declare var _via_image_filepath_resolved: any[];
declare var _via_image_filepath_id_list: any[];
declare var _via_reload_img_fn_list_table: boolean;
declare var _via_img_fn_list_img_index_list: any[];
declare var _via_img_fn_list_html: any[];
declare var image_grid_panel: HTMLElement;
declare var _via_display_area_content_name: string;
declare var _via_display_area_content_name_prev: string;
declare var _via_image_grid_requires_update: boolean;
declare var _via_image_grid_content_overflow: boolean;
declare var _via_image_grid_load_ongoing: boolean;
declare var _via_image_grid_page_first_index: number;
declare var _via_image_grid_page_last_index: number;
declare var _via_image_grid_selected_img_index_list: any[];
declare var _via_image_grid_page_img_index_list: any[];
declare var _via_image_grid_visible_img_index_list: any[];
declare var _via_image_grid_mousedown_img_index: number;
declare var _via_image_grid_mouseup_img_index: number;
declare var _via_image_grid_img_index_list: any[];
declare var _via_image_grid_region_index_list: any[];
declare var _via_image_grid_group: {};
declare var _via_image_grid_group_var: any[];
declare var _via_image_grid_group_show_all: boolean;
declare var _via_image_grid_stack_prev_page: any[];
declare var VIA_IMG_PRELOAD_INDICES: number[];
declare var VIA_IMG_PRELOAD_COUNT: number;
declare var _via_buffer_preload_img_index: number;
declare var _via_buffer_img_index_list: any[];
declare var _via_buffer_img_shown_timestamp: any[];
declare var _via_preload_img_promise_list: any[];
declare var _via_settings: {};
declare var invisible_file_input: HTMLElement;
declare var display_area: HTMLElement;
declare var ui_top_panel: HTMLElement;
declare var image_panel: HTMLElement;
declare var img_fn_list_panel: HTMLElement;
declare var img_fn_list: HTMLElement;
declare var leftsidebar: HTMLElement;
declare var BBOX_LINE_WIDTH: number;
declare var BBOX_SELECTED_OPACITY: number;
declare var BBOX_BOUNDARY_FILL_COLOR_ANNOTATED: string;
declare var BBOX_BOUNDARY_FILL_COLOR_NEW: string;
declare var BBOX_BOUNDARY_LINE_COLOR: string;
declare var BBOX_SELECTED_FILL_COLOR: string;
declare var VIA_ANNOTATION_EDITOR_HEIGHT_CHANGE: number;
declare var VIA_ANNOTATION_EDITOR_FONTSIZE_CHANGE: number;
declare var VIA_IMAGE_GRID_IMG_HEIGHT_CHANGE: number;
declare var VIA_LEFTSIDEBAR_WIDTH_CHANGE: number;
declare var VIA_POLYGON_SEGMENT_SUBTENDED_ANGLE: number;
declare var VIA_FLOAT_PRECISION: number;
declare var VIA_COCO_EXPORT_RSHAPE: string[];
declare var VIA_COCO_EXPORT_ATTRIBUTE_TYPE: string[];
declare function file_metadata(filename: any, size: any): void;
declare function file_region(): void;
declare function _via_init(): void;
declare function _via_init_reg_canvas_context(): void;
declare function _via_init_keyboard_handlers(): void;
declare function _via_init_mouse_handlers(): void;
declare function download_as_image(): void;
declare function clear_display_area(): void;
declare function is_content_name_valid(content_name: any): boolean;
declare function show_home_panel(): void;
declare function set_display_area_content(content_name: any): void;
declare function show_single_image_view(): void;
declare function show_image_grid_view(): void;
declare function sel_local_images(): void;
declare function download_all_region_data(type: any, file_extension: any): void;
declare function sel_local_data_file(type: any): void;
declare function import_files_url_from_file(event: any): void;
declare function import_annotations_from_file(event: any): void;
declare function load_coco_annotations_json_file(event: any): void;
declare function import_annotations_from_csv(data: any): Promise<unknown>;
declare function parse_csv_header_line(line: any): {
    is_header: boolean;
    filename_index: number;
    size_index: number;
    file_attr_index: number;
    region_shape_attr_index: number;
    region_attr_index: number;
    csv_column_count: number;
} | {
    is_header: boolean;
    filename_index?: undefined;
    size_index?: undefined;
    file_attr_index?: undefined;
    region_shape_attr_index?: undefined;
    region_attr_index?: undefined;
    csv_column_count?: undefined;
};
declare function import_coco_annotations_from_json(data_str: any): Promise<unknown>;
declare function import_annotations_from_json(data_str: any): Promise<unknown>;
declare function parse_csv_line(s: any, field_separator: any): any[];
declare function json_str_to_map(s: any): any;
declare function map_to_json(m: any): string;
declare function escape_for_csv(s: any): any;
declare function unescape_from_csv(s: any): any;
declare function remove_prefix_suffix_quotes(s: any): any;
declare function clone_image_region(r0: any): any;
declare function clone_value(value: any): any;
declare function _via_get_image_id(filename: any, size: any): any;
declare function load_text_file(text_file: any, callback_function: any): void;
declare function import_files_url_from_csv(data: any): Promise<unknown>;
declare function pack_via_metadata(return_type: any): Promise<unknown>;
declare function export_project_to_coco_format(): string[];
declare function via_region_shape_to_coco_annotation(shape_attributes: any): {
    segmentation: any[][];
    area: any[];
    bbox: any[];
    iscrowd: number;
};
declare function save_data_to_local_file(data: any, filename: any): void;
declare function init_message_panel(): void;
declare function show_message(msg: any, t: any): void;
declare function _via_regions_group_color_init(): void;
declare function _via_load_canvas_regions(): void;
declare function select_region_shape(sel_shape_name: any): void;
declare function set_all_canvas_size(w: any, h: any): void;
declare function set_all_canvas_scale(s: any): void;
declare function show_all_canvas(): void;
declare function hide_all_canvas(): void;
declare function jump_to_image(image_index: any): void;
declare function count_missing_region_attr(img_id: any): number;
declare function count_missing_file_attr(img_id: any): number;
declare function toggle_all_regions_selection(is_selected: any): void;
declare function select_only_region(region_id: any): void;
declare function set_region_select_state(region_id: any, is_selected: any): void;
declare function show_annotation_data(): void;
declare function _via_reg_canvas_dblclick_handler(e: any): void;
declare function _via_reg_canvas_mousedown_handler(e: any): void;
declare function _via_reg_canvas_mouseup_handler(e: any): void;
declare function _via_reg_canvas_mouseover_handler(e: any): void;
declare function _via_reg_canvas_mousemove_handler(e: any): void;
declare function _via_move_selected_regions(move_x: any, move_y: any): void;
declare function _via_validate_move_region(x: any, y: any, canvas_attr: any): boolean;
declare function _via_move_region(region_id: any, move_x: any, move_y: any): void;
declare function _via_polygon_del_vertex(region_id: any, vertex_id: any): boolean;
declare function _via_redraw_reg_canvas(): void;
declare function _via_clear_reg_canvas(): void;
declare function draw_all_regions(): void;
declare function _via_draw_control_point(cx: any, cy: any): void;
declare function _via_draw_rect_region(x: any, y: any, w: any, h: any, is_selected: any): void;
declare function _via_draw_rect(x: any, y: any, w: any, h: any): void;
declare function _via_draw_circle_region(cx: any, cy: any, r: any, is_selected: any): void;
declare function _via_draw_circle(cx: any, cy: any, r: any): void;
declare function _via_draw_ellipse_region(cx: any, cy: any, rx: any, ry: any, rr: any, is_selected: any): void;
declare function _via_draw_ellipse(cx: any, cy: any, rx: any, ry: any, rr: any): void;
declare function _via_draw_polygon_region(all_points_x: any, all_points_y: any, is_selected: any, shape: any): void;
declare function _via_draw_point_region(cx: any, cy: any, is_selected: any): void;
declare function _via_draw_point(cx: any, cy: any, r: any): void;
declare function draw_all_region_id(): void;
declare function get_region_bounding_box(region: any): any[];
declare function is_inside_region(px: any, py: any, descending_order: any): any;
declare function is_inside_this_region(px: any, py: any, region_id: any): boolean;
declare function is_inside_circle(cx: any, cy: any, r: any, px: any, py: any): boolean;
declare function is_inside_rect(x: any, y: any, w: any, h: any, px: any, py: any): boolean;
declare function is_inside_ellipse(cx: any, cy: any, rx: any, ry: any, rr: any, px: any, py: any): boolean;
declare function is_inside_polygon(all_points_x: any, all_points_y: any, px: any, py: any): 1 | 0;
declare function is_inside_point(cx: any, cy: any, px: any, py: any): boolean;
declare function is_left(x0: any, y0: any, x1: any, y1: any, x2: any, y2: any): number;
declare function is_on_region_corner(px: any, py: any): number[];
declare function is_on_rect_edge(x: any, y: any, w: any, h: any, px: any, py: any): 1 | 5 | 2 | 3 | 4 | 6 | 7 | 8 | 0;
declare function is_on_circle_edge(cx: any, cy: any, r: any, px: any, py: any): 1 | 5 | 2 | 3 | 4 | 6 | 0;
declare function is_on_ellipse_edge(cx: any, cy: any, rx: any, ry: any, rr: any, px: any, py: any): 5 | 6 | 0;
declare function is_on_polygon_vertex(all_points_x: any, all_points_y: any, px: any, py: any): any;
declare function is_on_polygon_edge(all_points_x: any, all_points_y: any, px: any, py: any): number;
declare function is_point_inside_bounding_box(x: any, y: any, x1: any, y1: any, x2: any, y2: any): boolean;
declare function dist_to_line(x: any, y: any, x1: any, y1: any, x2: any, y2: any): number;
declare function rect_standardize_coordinates(d: any): void;
declare function rect_update_corner(corner_id: any, d: any, x: any, y: any, preserve_aspect_ratio: any): void;
declare function _via_update_ui_components(): void;
declare function _via_window_keydown_handler(e: any): void;
declare function _via_handle_global_keydown_event(e: any): void;
declare function _via_reg_canvas_keyup_handler(e: any): void;
declare function _via_reg_canvas_keydown_handler(e: any): void;
declare function _via_polyshape_finish_drawing(): void;
declare function _via_polyshape_delete_last_vertex(): void;
declare function _via_polyshape_add_new_polyshape(img_id: any, region_shape: any, region_id: any): void;
declare function del_sel_regions(): void;
declare function sel_all_regions(): void;
declare function copy_sel_regions(): void;
declare function paste_sel_regions_in_current_image(): void;
declare function paste_to_multiple_images_with_confirm(): void;
declare function paste_to_multiple_images_confirmed(input: any): void;
declare function paste_regions(img_index: any): number;
declare function del_sel_regions_with_confirm(): void;
declare function del_sel_regions_confirmed(input: any): void;
declare function delete_regions(img_index: any): number;
declare function show_first_image(): void;
declare function show_last_image(): void;
declare function jump_image_block_get_count(): number;
declare function jump_to_next_image_block(): void;
declare function jump_to_prev_image_block(): void;
declare function move_to_prev_image(): void;
declare function move_to_next_image(): void;
declare function set_zoom(zoom_level_index: any): void;
declare function reset_zoom_level(): void;
declare function zoom_in(): void;
declare function zoom_out(): void;
declare function toggle_region_boundary_visibility(): void;
declare function toggle_region_id_visibility(): void;
declare function toggle_region_info_visibility(): void;
declare function _via_reg_canvas_mouse_wheel_listener(e: any): void;
declare function region_visualisation_update(type: any, default_id: any, next_offset: any): void;
declare function leftsidebar_toggle(): void;
declare function leftsidebar_increase_width(): void;
declare function leftsidebar_decrease_width(): void;
declare function leftsidebar_show(): void;
declare function init_leftsidebar_accordion(): void;
declare function is_img_fn_list_visible(): boolean;
declare function img_loading_spinbar(image_index: any, show: any): void;
declare function update_img_fn_list(): void;
declare function img_fn_list_onregex(): void;
declare function img_fn_list_onpresetfilter_select(): void;
declare function is_region_annotation_missing(img_id: any): boolean;
declare function is_file_annotation_missing(img_id: any): boolean;
declare function img_fn_list_ith_entry_selected(img_index: any, is_selected: any): void;
declare function img_fn_list_ith_entry_error(img_index: any, is_error: any): void;
declare function img_fn_list_ith_entry_add_css_class(img_index: any, classname: any): void;
declare function img_fn_list_ith_entry_remove_css_class(img_index: any, classname: any): void;
declare function img_fn_list_clear_all_style(): void;
declare function img_fn_list_clear_css_classname(classname: any): void;
declare function img_fn_list_ith_entry_html(i: any): string;
declare function img_fn_list_generate_html(regex: any): void;
declare function img_fn_list_scroll_to_current_file(): void;
declare function img_fn_list_scroll_to_file(file_index: any): void;
declare function toggle_img_fn_list_visibility(): void;
declare function toggle_attributes_editor(): void;
declare function update_vertical_space(): void;
declare function attribute_update_panel_set_active_button(): void;
declare function show_region_attributes_update_panel(): void;
declare function show_file_attributes_update_panel(): void;
declare function update_attributes_name_list(): void;
declare function update_attributes_update_panel(): void;
declare function update_attribute_properties_panel(): void;
declare function show_attribute_properties(): void;
declare function show_attribute_options(): void;
declare function attribute_property_add_input_property(title: any, name: any, value: any, id: any): void;
declare function attribute_property_add_option(attr_id: any, option_id: any, option_desc: any, option_default: any, attribute_type: any): void;
declare function attribute_property_add_new_entry_option(attr_id: any, attribute_type: any): void;
declare function attribute_property_on_update(p: any): void;
declare function attribute_get_unique_values(attr_type: any, attr_id: any): any[];
declare function attribute_property_on_option_update(p: any): void;
declare function attribute_property_on_option_default_update(attribute_being_updated: any, attr_id: any, new_default_option_id: any): Promise<unknown>;
declare function attribute_property_on_option_add(p: any): void;
declare function attribute_property_reset_new_entry_inputs(): void;
declare function attribute_property_show_new_entry_inputs(attr_id: any, attribute_type: any): void;
declare function attribute_property_option_id_is_valid(attr_id: any, new_option_id: any): {
    is_valid: boolean;
    message: string;
} | {
    is_valid: boolean;
    message?: undefined;
};
declare function attribute_property_id_exists(name: any): boolean;
declare function delete_existing_attribute_with_confirm(): void;
declare function delete_existing_attribute_confirmed(input: any): void;
declare function delete_existing_attribute(attribute_type: any, attr_id: any): void;
declare function add_new_attribute_from_user_input(): void;
declare function add_new_attribute(attribute_id: any): void;
declare function update_current_attribute_id(p: any): void;
declare function get_current_attribute_id(): any;
declare function update_attribute_option_id_with_confirm(attr_type: any, attr_id: any, option_id: any, new_option_id: any): void;
declare function update_attribute_option_id_cancel(input: any): void;
declare function update_attribute_option_id_confirmed(input: any): void;
declare function update_attribute_option(is_delete: any, attr_type: any, attr_id: any, option_id: any, new_option_id: any): void;
declare function update_file_attribute_option_in_all_metadata(is_delete: any, attr_id: any, option_id: any, new_option_id: any): void;
declare function update_region_attribute_option_in_all_metadata(is_delete: any, attr_id: any, option_id: any, new_option_id: any): void;
declare function delete_region_attribute_in_all_metadata(attr_id: any): void;
declare function delete_file_attribute_option_from_all_metadata(attr_id: any, option_id: any): void;
declare function delete_file_attribute_option_from_metadata(image_id: any, attr_id: any, option_id: any): void;
declare function delete_file_attribute_from_all_metadata(image_id: any, attr_id: any): void;
declare function invoke_with_user_inputs(ok_handler: any, input: any, config: any, cancel_handler: any): void;
declare function setup_user_input_panel(ok_handler: any, input: any, config: any, cancel_handler: any): void;
declare function user_input_default_cancel_handler(): void;
declare function user_input_cancel_handler(): void;
declare function user_input_parse_and_invoke_handler(): void;
declare function show_user_input_panel(): void;
declare function hide_user_input_panel(): void;
declare function annotation_editor_show(): void;
declare function annotation_editor_hide(): void;
declare function annotation_editor_toggle_on_image_editor(): void;
declare function annotation_editor_update_content(): Promise<unknown>;
declare function annotation_editor_get_placement(region_id: any): {};
declare function annotation_editor_remove(): void;
declare function is_annotation_editor_visible(): boolean;
declare function annotation_editor_toggle_all_regions_editor(): void;
declare function annotation_editor_set_active_button(): void;
declare function edit_region_metadata_in_annotation_editor(): void;
declare function edit_file_metadata_in_annotation_editor(): void;
declare function annotation_editor_update_header_html(): void;
declare function annotation_editor_update_metadata_html(): void;
declare function annotation_editor_update_row(row_id: any): void;
declare function annotation_editor_add_row(row_id: any): void;
declare function annotation_editor_get_metadata_row_html(row_id: any): HTMLDivElement;
declare function annotation_editor_scroll_to_row(row_id: any): void;
declare function annotation_editor_highlight_row(row_id: any): void;
declare function annotation_editor_clear_row_highlight(): void;
declare function annotation_editor_extract_html_id_components(html_id: any): {};
declare function _via_get_file_metadata_stat(img_index_list: any, attr_id: any): {};
declare function _via_get_region_metadata_stat(img_index_list: any, attr_id: any): {};
declare function annotation_editor_on_metadata_focus(p: any): void;
declare function annotation_editor_on_metadata_update(p: any): void;
declare function annotation_editor_on_metadata_update_done(type: any, attr_id: any, update_count: any): void;
declare function annotation_editor_update_file_metadata(img_index_list: any, attr_id: any, new_value: any, new_checked: any): Promise<unknown>;
declare function annotation_editor_update_region_metadata(img_index_list: any, region_id: any, attr_id: any, new_value: any, new_checked: any): Promise<unknown>;
declare function set_region_annotations_to_default_value(rid: any): void;
declare function set_file_annotations_to_default_value(image_id: any): void;
declare function annotation_editor_increase_panel_height(): void;
declare function annotation_editor_decrease_panel_height(): void;
declare function annotation_editor_increase_content_size(): void;
declare function annotation_editor_decrease_content_size(): void;
declare function project_set_name(name: any): void;
declare function project_init_default_project(): void;
declare function project_on_name_update(p: any): void;
declare function project_get_default_project_name(): string;
declare function project_save_with_confirm(): void;
declare function project_save_confirmed(input: any): void;
declare function project_open_select_project_file(): void;
declare function project_open(event: any): void;
declare function project_open_parse_json_file(project_file_data: any): void;
declare function project_parse_via_attributes_from_img_metadata(): void;
declare function project_import_settings(s: any): void;
declare function project_file_remove_with_confirm(): void;
declare function project_file_remove_confirmed(input: any): void;
declare function project_remove_file(img_index: any): void;
declare function project_add_new_file(filename: any, size: any, file_id: any): any;
declare function project_file_add_local(event: any): void;
declare function project_file_add_abs_path_with_input(): void;
declare function project_file_add_abs_path_input_done(input: any): void;
declare function project_file_add_url_with_input(): void;
declare function project_file_add_url_input_done(input: any): void;
declare function project_file_add_url(url: any): any;
declare function project_file_add_base64(filename: any, base64: any): void;
declare function project_file_load_on_fail(img_index: any): void;
declare function project_file_load_on_success(img_index: any): void;
declare function project_settings_toggle(): void;
declare function project_settings_show(): void;
declare function project_filepath_add_from_input(p: any, button: any): void;
declare function project_filepath_add(new_path: any): void;
declare function project_filepath_del(path: any): void;
declare function project_save_attributes(): void;
declare function project_import_attributes_from_file(event: any): void;
declare function project_import_attributes_from_json(data: any): void;
declare function image_grid_init(): void;
declare function image_grid_update(): void;
declare function image_grid_toggle(): void;
declare function image_grid_show_all_project_images(): void;
declare function image_grid_clear_all_groups(): void;
declare function image_grid_set_content(img_index_list: any): void;
declare function image_grid_clear_content(): void;
declare function image_grid_set_content_panel_height_fixed(): void;
declare function image_grid_content_append_img(img_grid_index: any): void;
declare function image_grid_on_img_load(e: any): void;
declare function image_grid_on_img_error(e: any): void;
declare function image_grid_add_img_if_possible(img: any): void;
declare function image_grid_onchange_show_image_policy(p: any): void;
declare function image_grid_page_show_all_regions(): void;
declare function image_grid_is_region_in_current_group(r: any): boolean;
declare function image_grid_show_region_shape(img_index: any, img_param: any): Promise<unknown>;
declare function image_grid_image_size_increase(): void;
declare function image_grid_image_size_decrease(): void;
declare function image_grid_image_size_reset(): void;
declare function image_grid_mousedown_handler(e: any): void;
declare function image_grid_mouseup_handler(e: any): void;
declare function image_grid_update_sel_count_html(): void;
declare function image_grid_update_img_select(img_index: any, state: any): void;
declare function image_grid_group_select_all(): void;
declare function image_grid_group_select_none(): void;
declare function image_grid_group_set_all_selection_state(state: any): void;
declare function image_grid_group_toggle_select_all(): void;
declare function image_grid_parse_html_img_id(html_img_id: any): number;
declare function image_grid_get_html_img_id(img_index: any): string;
declare function image_grid_parse_html_region_id(html_region_id: any): {
    img_index: number;
    region_id: number;
} | {
    img_index?: undefined;
    region_id?: undefined;
};
declare function image_grid_get_html_region_id(img_index: any, region_id: any): string;
declare function image_grid_dblclick_handler(e: any): void;
declare function image_grid_toolbar_update_group_by_select(): void;
declare function image_grid_toolbar_group_by_select_get_html_id(type: any, name: any): string;
declare function image_grid_toolbar_group_by_select_parse_html_id(id: any): {
    attr_type: string;
    attr_name: any;
};
declare function image_grid_toolbar_onchange_group_by_select(p: any): void;
declare function image_grid_remove_html_group_panel(d: any): void;
declare function image_grid_add_html_group_panel(d: any): void;
declare function image_grid_group_panel_set_selected_value(group_index: any): void;
declare function image_grid_group_panel_set_options(group_index: any): void;
declare function image_grid_group_select_get_html_id(group_index: any): string;
declare function image_grid_group_select_parse_html_id(id: any): number;
declare function image_grid_group_by_select_set_disabled(type: any, name: any, is_disabled: any): void;
declare function image_grid_remove_group_by(p: any): void;
declare function image_grid_group_by(type: any, name: any): void;
declare function image_grid_group_by_merge(group: any, current_level: any, target_level: any): any[];
declare function image_grid_group_by_collapse(group: any): any[];
declare function image_grid_group_split_all_arrays(group: any, type: any, name: any): {};
declare function image_grid_split_array_to_group(img_index_array: any, attr_type: any, attr_name: any): {};
declare function image_grid_group_next(p: any): void;
declare function image_grid_group_prev(p: any): void;
declare function image_grid_group_value_onchange(p: any): void;
declare function image_grid_jump_to_group(group_index: any, value_index: any): void;
declare function image_grid_set_content_to_current_group(): void;
declare function image_grid_page_next(): void;
declare function image_grid_page_prev(): void;
declare function image_grid_page_nav_show_cancel(): void;
declare function image_grid_cancel_load_ongoing(): void;
declare function image_zoom_init(): void;
declare function _via_region(shape: any, id: any, data_img_space: any, view_scale_factor: any, view_offset_x: any, view_offset_y: any): void;
declare function _via_region_rect(): void;
declare function _via_region_circle(): void;
declare function _via_region_ellipse(): void;
declare function _via_region_line(): void;
declare function _via_region_polyline(): void;
declare function _via_region_polygon(): void;
declare function _via_region_point(): void;
declare function _via_cancel_current_image_loading(): void;
declare function _via_show_img(img_index: any): void;
declare function _via_buffer_hide_current_image(): void;
declare function _via_show_img_from_buffer(img_index: any): Promise<unknown>;
declare function _via_img_buffer_add_image(img_index: any): Promise<unknown>;
declare function _via_img_buffer_get_html_id(img_index: any): string;
declare function _via_img_buffer_parse_html_id(html_id: any): number;
declare function _via_img_buffer_start_preload(img_index: any, preload_index: any): Promise<unknown>;
declare function _via_img_buffer_preload_img(img_index: any, preload_index: any): Promise<unknown>;
declare function _via_img_buffer_get_preload_img_index(img_index: any, preload_index: any): any;
declare function _via_img_buffer_remove_least_useful_img(): void;
declare function _via_buffer_remove(buffer_index: any): void;
declare function _via_buffer_remove_all(): void;
declare function _via_buffer_get_oldest_in_list(not_in_preload_list: any): number;
declare function _via_buffer_get_buffer_furthest_from_current_img(): number;
declare function _via_buffer_img_not_in_preload_list(): any[];
declare function _via_buffer_get_current_preload_list(): number[];
declare function settings_panel_toggle(): void;
declare function settings_init(): void;
declare function settings_save(): void;
declare function settings_show_current_value(): void;
declare function settings_region_visualisation_update_options(): void;
declare function settings_filepath_update_html(): void;
declare function _via_file_resolve_all_to_default_filepath(): void;
declare function _via_file_resolve_file_to_default_filepath(img_id: any): void;
declare function _via_file_resolve_all(): Promise<unknown>;
declare function _via_file_get_search_path_list(): any[];
declare function _via_file_resolve(file_index: any, search_path_list: any): Promise<unknown>;
declare function _via_file_resolve_check_path(file_index: any, path_index: any, search_path_list: any): Promise<unknown>;
declare function show_page_404(img_index: any): void;
declare function is_url(s: any): boolean;
declare function get_filename_from_url(url: any): any;
declare function fixfloat(x: any): number;
declare function shape_attribute_fixfloat(sa: any): void;
declare function array_intersect(array_list: any): any;
declare function generate_img_index_list(input: any): any;
declare function img_stat_set(img_index: any, stat: any): void;
declare function img_stat_set_all(): Promise<unknown>;
declare function img_stat_get(img_index: any): Promise<unknown>;
declare function polygon_to_bbox(pts: any): number[];
export = via_demo;