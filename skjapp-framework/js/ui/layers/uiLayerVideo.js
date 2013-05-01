/////////////////////////
///// SHAPE : LINE	/////
/////////////////////////

var create_ui_layer_video = function createUILayerVideo(layer)
{
	
} ;

var get_ui_layer_video = function getUILayerVideo()
{
	
}

var update_ui_layer_video = function updateUILayerVideo()
{
	
}

var draw_ui_layer_video = function drawUILayerVideo(layer)
{
	x		= data[layer]['x'] ;
	y		= data[layer]['y'] ;
	endX	= data[layer]['endX'] ;
	endY	= data[layer]['endY'] ;
			
}

var delete_ui_layer_video = function deleteUILayerVideo()
{
	
}


data['engine']['ui.layer.shape.line'] = 
{
	'createLayer'	: create_ui_layer_video 	,
	'getLayer'		: get_ui_layer_video		,
	'updateLayer'	: update_ui_layer_video	,
	'drawLayer'		: draw_ui_layer_video		,
	'deleteLayer'	: draw_ui_layer_video
} ;