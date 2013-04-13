/////////////////////////
//// LAYER : CUSTOM	/////
/////////////////////////

var create_ui_layer_advanced_custom = function createUILayerAdvancedCustom(layer)
{
	
} ;

var get_ui_layer_advanced_custom = function getUILayerAdvancedCustom(layer)
{
	
} ;

var update_ui_layer_advanced_custom = function updateUILayerAdvancedCustom(layer)
{
	
} ;

var draw_ui_layer_advanced_custom = function drawUILayerAdvancedCustom(layer)
{
	var x		= data[layer]['x'] ;
	var y		= data[layer]['y'] ;
} ;

var delete_ui_layer_advanced_custom = function deleteUILayerAdvancedCustom(layer)
{
	
} ;


framework['ui.layer.advanced.custom'] = 
{
	'createLayer'	: create_ui_layer_advanced_custom 	,
	'getLayer'		: get_ui_layer_advanced_custom		,
	'updateLayer'	: update_ui_layer_advanced_custom	,
	'drawLayer'		: draw_ui_layer_advanced_custom		,
	'deleteLayer'	: delete_ui_layer_advanced_custom
} ;

/////////////////////////
///  LAYER : GROUP	/////
/////////////////////////

var create_ui_layer_advanced_group = function createUILayerAdvancedGroup(layer)
{	
	var x		= data[layer]['x'] ;
	var y		= data[layer]['y'] ;
	
	var layers = data[layer]['layers'] ;
	
	for(var i = 0; i < layers.length;i++)
	{	
		createLayer(layers[i]) ;
	}
} ;

var get_ui_layer_advanced_group = function getUILayerAdvancedGroup(layer)
{
	
} ;

var update_ui_layer_advanced_group = function updateUILayerAdvancedGroup(layer)
{	
	//consoleDiv.innerHTML = layer ;
	var layers = data[layer]['layers'] ;
	
	for(var i = 0; i < layers.length;i++)
	{
		updateLayer(layers[i]) ;
	}
} ;

var draw_ui_layer_advanced_group = function drawUILayerAdvancedGroup(layer)
{
	var visible = data[layer]['visible'] ;
		
	var layers = data[layer]['layers'] ;
	
	for(var i = 0; i < layers.length;i++)
	{
		data[layers[i]]['visible'] = visible ;
		
		data[layers[i]]['xShift'] = data[layer]['x'] ;
		data[layers[i]]['yShift'] = data[layer]['y'] ;
		
		drawLayer(layers[i]) ;
		
		//consoleDiv.innerHTML = layer + ' ' + layers[i] ;
	}
} ;

var delete_ui_layer_advanced_group = function deleteUILayerAdvancedGroup(layer)
{
	
} ;

framework['ui.layer.advanced.group'] = 
{
	'createLayer'	: create_ui_layer_advanced_group 	,
	'getLayer'		: get_ui_layer_advanced_group		,
	'updateLayer'	: update_ui_layer_advanced_group	,
	'drawLayer'		: draw_ui_layer_advanced_group		,
	'deleteLayer'	: delete_ui_layer_advanced_group
} ;

/////////////////////////
///// AUDIO : BASIC	/////
/////////////////////////

var create_ui_layer_audio = function createUILayerAudio(layer)
{
	var audio	= document.createElement('audio') ;
	
	var sourceSize = data[layer]['src'].length ;
	
	for(var i = 0; i < sourceSize; i++)
	{
		var source		= document.createElement('source') ;
	
		var sourceSrc	= data[layer]['src'][i] ;
		source.setAttribute('src' ,sourceSrc) ;
		
		var sourceType	= data[layer]['srcType'][i] ;
		source.setAttribute('type' ,sourceType) ;
		
		audio.appendChild(source) ;
	}
	
	audio.setAttribute('preload' ,"auto") ;
	document.body.appendChild(audio) ;
	
	data[layer]['audio'] = audio ;
} ;

var get_ui_layer_audio = function getUILayerAudio(layer)
{
	var ds = document.createElement("div") ;
	ds.setAttribute("id", "") ;
} ;

var update_ui_layer_audio = function updateUILayerAudio(layer)
{
	var audio = data[layer]['audio'] ;
	var source= data[layer]['src'] ;
	var state = data[layer]['state'] ;
	
	if(state == 'play' && audio != undefined)
	{
		var sound = new Audio(source) ;
		sound.play() ;
		
		data[layer]['state'] = undefined ;
	}
} ;

var draw_ui_layer_audio = function drawUILayerAudio(layer)
{
	
} ;

var delete_ui_layer_audio = function deleteUILayerAudio(layer)
{
	
} ;

framework['ui.layer.audio'] = 
{
	'createLayer'	: create_ui_layer_audio 	,
	'getLayer'		: get_ui_layer_audio		,
	'updateLayer'	: update_ui_layer_audio		,
	'drawLayer'		: draw_ui_layer_audio		,
	'deleteLayer'	: delete_ui_layer_audio
} ;

// HTML Controls

// HTML Controls

// DIV
var create_ui_layer_html_div = function createUILayerHTMLDIV(layer)
{
	var div = document.createElement('div') ;
	div.setAttribute('id',data[layer]['id']) ;
	div.setAttribute('style','position : absolute; left: ' + data[layer]['x'] + 'px;top:' + data[layer]['y'] + 'px;') ;
	div.setAttribute('class',data[layer]['class']) ;
	div.innerHTML = data[layer]['text'] ;
	
	document.body.appendChild(div) ;
}

var get_ui_layer_html_div = function getUILayerHTMLDIV()
{
	
}

var update_ui_layer_html_div = function updateUILayerHTMLDIV(layer)
{
	
}

var draw_ui_layer_html_div = function drawUILayerHTMLDIV(layer)
{
	
}

framework['ui.layer.html.div'] = 
{
	'createLayer' : create_ui_layer_html_div ,
	'getLayer'	  : get_ui_layer_html_div	 ,
	'updateLayer' : update_ui_layer_html_div ,
	'drawLayer'	  : draw_ui_layer_html_div
} ;

// Button
var create_ui_layer_html_button = function createUILayerHTMLButton(layer)
{
	var button = document.createElement('input') ;
	button.setAttribute('type','button') ;
	button.setAttribute('id',data[layer]['id']) ;
	button.setAttribute('style','position : absolute; left: ' + data[layer]['x'] + 'px;top:' + data[layer]['y'] + 'px;') ;
	button.setAttribute('class',data[layer]['class']) ;
	button.setAttribute('value',data[layer]['text']) ;
	
	document.body.appendChild(button) ;
}

var get_ui_layer_html_button = function getUILayerHTMLButton()
{
	
}

var update_ui_layer_html_button = function updateUILayerHTMLButton(layer)
{
	
}

var draw_ui_layer_html_button = function drawUILayerHTMLButton(layer)
{
	
}

framework['ui.layer.html.button'] = 
{
	'createLayer' : create_ui_layer_html_button ,
	'getLayer'	  : get_ui_layer_html_button	,
	'updateLayer' : update_ui_layer_html_button ,
	'drawLayer'	  : draw_ui_layer_html_button
} ;

// TextBox
var create_ui_layer_html_textbox = function createUILayerHTMLTextBox(layer)
{
	var textbox = document.createElement('input') ;
	textbox.setAttribute('type','textbox') ;
	textbox.setAttribute('id',data[layer]['id']) ;
	textbox.setAttribute('style','position : absolute; left: ' + data[layer]['x'] + 'px;top:' + data[layer]['y'] + 'px;') ;
	textbox.setAttribute('class',data[layer]['class']) ;
	textbox.setAttribute('value',data[layer]['text']) ;
	
	document.body.appendChild(textbox) ;
}

var get_ui_layer_html_textbox = function getUILayerHTMLTextBox()
{
	
}

var update_ui_layer_html_textbox = function updateUILayerHTMLTextBox(layer)
{
	
}

var draw_ui_layer_html_textbox = function drawUILayerHTMLTextBox(layer)
{
	
}

framework['ui.layer.html.textbox'] = 
{
	'createLayer' : create_ui_layer_html_textbox ,
	'getLayer'	  : get_ui_layer_html_textbox	,
	'updateLayer' : update_ui_layer_html_textbox ,
	'drawLayer'	  : draw_ui_layer_html_textbox
} ;

// Checkbox

// Text

/////////////////////////
/////TEXT : DEFAULT	/////
/////////////////////////

var create_ui_layer_text = function createUILayerText(layer)
{
	
}

var get_ui_layer_text = function getUILayerText()
{
	
}

var update_ui_layer_text = function updateUILayerText()
{
	
}

var draw_ui_layer_text = function drawUILayerText(layer)
{
	var text	= data[layer]['text'] ;
	var x		= data[layer]['x'] ;
	var y		= data[layer]['y'] ;
	
	var rgb		= data[layer]['rgb'] ;
	
	// alert(rgb) ;
	
	if(rgb != undefined)
	{
		ctx.fillStyle = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')' ;
	}
	
	var font	= data[layer]['font'] ;
	if(font != undefined)
	{
		ctx.font = font ;
	}
	
	ctx.textBaseline = 'top' ;
	
	if(ctx.measureText(text).width != undefined)
	{
		data[layer]['width'] = ctx.measureText(text).width ;
	}
	
	// Code for xShift and yShift
	var xShift = data[layer]['xShift'] ;
	var yShift = data[layer]['yShift'] ;
	
	if(xShift == undefined)
	{
		xShift = 0 ;
	}
	
	if(yShift == undefined)
	{
		yShift = 0 ;
	}
	
	ctx.fillText(text,x + xShift,y + yShift) ;
	ctx.fillStyle = 'rgb(0,0,0)' ;
}

var delete_ui_layer_text = function deleteUILayerText()
{
	
}


framework['ui.layer.text'] = 
{
	'createLayer'	: create_ui_layer_text 	,
	'getLayer'		: get_ui_layer_text		,
	'updateLayer'	: update_ui_layer_text	,
	'drawLayer'		: draw_ui_layer_text	,
	'deleteLayer'	: delete_ui_layer_text
} ;


/////////////////////////
///   TEXT : CSS	/////
/////////////////////////

var create_ui_layer_text_css = function createUILayerTextCSS(layer)
{
	var x		= data[layer]['x'] ;
	var y		= data[layer]['y'] ;
	var width	= data[layer]['width'] ;
	var height	= data[layer]['height'] ;
	
	var text	= data[layer]['text'] ;
	var color	= data[layer]['color'] ;
	var font	= data[layer]['font'] ;
	
	var div1				= document.createElement('div') ;
	div1.style.position		= 'absolute' ;
	
	div1.innerHTML			= text ;
	div1.style.left			= x + 'px' ;
	div1.style.top			= y + 'px';
	div1.style.width		= width + 'px' ;
	div1.style.height		= height + 'px' ;
	div1.style.color		= color ;
	div1.style.font			= font ;
	
	// div1.style.backgroundColor = 'red' ;
	
	var visible	= data[layer]['visible'] ;
	
	if(visible == true)
	{
		document.body.appendChild(div1) ;
	}
	
	data[layer]['div']		= div1 ;
}

var get_ui_layer_text_css = function getUILayerTextCSS()
{
	
}

var update_ui_layer_text_css = function updateUILayerTextCSS(layer)
{
	var visible = data[layer]['visible'] ;
	
	var div1 = data[layer]['div'] ;
	
	if(visible == true)
	{
		document.body.appendChild(div1) ;
	}
	else
	{
		document.body.removeChild(div1) ;
	}
}

var draw_ui_layer_text_css = function drawUILayerTextCSS(layer)
{	
	var x		= data[layer]['x'] ;
	var y		= data[layer]['y'] ;
	var width	= data[layer]['width'] ;
	var height	= data[layer]['height'] ;
	
	var text	= data[layer]['text'] ;
	var color	= data[layer]['color'] ;
	var font	= data[layer]['font'] ;
	
	var div1				= data[layer]['div'] ;
	
	// Code for xShift and yShift
	var xShift = data[layer]['xShift'] ;
	var yShift = data[layer]['yShift'] ;
	
	if(xShift == undefined)
	{
		xShift = 0 ;
	}
	
	if(yShift == undefined)
	{
		yShift = 0 ;
	}
	
	div1.innerHTML			= text ;
	div1.style.left			= (x + xShift) + 'px';
	div1.style.top			= (y + yShift) + 'px';
	div1.style.width		= width + 'px' ;
	div1.style.height		= height + 'px' ;
	div1.style.color		= color ;
	div1.style.font			= font ;
}

var delete_ui_layer_text_css = function deleteUILayerTextCSS()
{
	
}


framework['ui.layer.text.html'] = 
{
	'createLayer'	: create_ui_layer_text_css 	,
	'getLayer'	 	: get_ui_layer_text_css		,
	'updateLayer'	: update_ui_layer_text_css	,
	'drawLayer'	 	: draw_ui_layer_text_css	,
	'deleteLayer'	: delete_ui_layer_text_css
} ;

// Video

/////////////////////////
///// SHAPE : LINE	/////
/////////////////////////

var create_ui_layer_shape_line = function createUILayerShapeLine(layer)
{
	
} ;

var get_ui_layer_shape_line = function getUILayerShapeLine()
{
	
}

var update_ui_layer_shape_line = function updateUILayerShapeLine()
{
	
}

var draw_ui_layer_shape_line = function drawUILayerShapeLine(layer)
{
	x		= data[layer]['x'] ;
	y		= data[layer]['y'] ;
	endX	= data[layer]['endX'] ;
	endY	= data[layer]['endY'] ;
			
	// Drawing a simple line
	ctx.beginPath() ;			
	ctx.moveTo(x,y) ;			// Starting point of line 
	ctx.lineTo(endX,endY) ;		// Ending point of line
	ctx.closePath() ;
	ctx.stroke() ;				// Drawing the above coded path
}

var delete_ui_layer_shape_line = function deleteUILayerShapeLine()
{
	
}


framework['ui.layer.shape.line'] = 
{
	'createLayer'	: create_ui_layer_shape_line 	,
	'getLayer'		: get_ui_layer_shape_line		,
	'updateLayer'	: update_ui_layer_shape_line	,
	'drawLayer'		: draw_ui_layer_shape_line		,
	'deleteLayer'	: delete_ui_layer_shape_line
} ;


/////////////////////////
///SHAPE : RECTANGLE/////
/////////////////////////

var create_ui_layer_shape_rectangle = function createUILayerShapeRectangle(layer)
{
	
} ;

var get_ui_layer_shape_rectangle = function getUILayerShapeRectangle()
{
	
}

var update_ui_layer_shape_rectangle = function updateUILayerShapeRectangle()
{
	
}

var draw_ui_layer_shape_rectangle = function drawUILayerShapeRectangle(layer)
{
	x		= data[layer]['x'] ;
	y		= data[layer]['y'] ;
	width	= data[layer]['width'] ;
	height	= data[layer]['height'] ;
			
	// Drawing a simple line			
	ctx.rect(x,y,width,height) ; 
	ctx.stroke() ;				// Drawing the above coded path
}

var delete_ui_layer_shape_rectangle = function deleteUILayerShapeRectangle()
{
	
}


framework['ui.layer.shape.rectangle'] = 
{
	'createLayer'	: create_ui_layer_shape_rectangle 	,
	'getLayer'		: get_ui_layer_shape_rectangle		,
	'updateLayer'	: update_ui_layer_shape_rectangle	,
	'drawLayer'		: draw_ui_layer_shape_rectangle		,
	'deleteLayer'	: delete_ui_layer_shape_rectangle
} ;

// Widget

/////////////////////////
///// SHAPE : LINE	/////
/////////////////////////

var create_ui_layer_shape_line = function createUILayerShapeLine(layer)
{
	
} ;

var get_ui_layer_shape_line = function getUILayerShapeLine()
{
	
}

var update_ui_layer_shape_line = function updateUILayerShapeLine()
{
	
}

var draw_ui_layer_shape_line = function drawUILayerShapeLine(layer)
{
	x		= data[layer]['x'] ;
	y		= data[layer]['y'] ;
	endX	= data[layer]['endX'] ;
	endY	= data[layer]['endY'] ;
			
	// Drawing a simple line
	ctx.beginPath() ;			
	ctx.moveTo(x,y) ;			// Starting point of line 
	ctx.lineTo(endX,endY) ;		// Ending point of line
	ctx.closePath() ;
	ctx.stroke() ;				// Drawing the above coded path
}

var delete_ui_layer_shape_line = function deleteUILayerShapeLine()
{
	
}


framework['ui.layer.shape.line'] = 
{
	'createLayer'	: create_ui_layer_shape_line 	,
	'getLayer'		: get_ui_layer_shape_line		,
	'updateLayer'	: update_ui_layer_shape_line	,
	'drawLayer'		: draw_ui_layer_shape_line		,
	'deleteLayer'	: delete_ui_layer_shape_line
} ;


/////////////////////////
///SHAPE : RECTANGLE/////
/////////////////////////

var create_ui_layer_shape_rectangle = function createUILayerShapeRectangle(layer)
{
	
} ;

var get_ui_layer_shape_rectangle = function getUILayerShapeRectangle()
{
	
}

var update_ui_layer_shape_rectangle = function updateUILayerShapeRectangle()
{
	
}

var draw_ui_layer_shape_rectangle = function drawUILayerShapeRectangle(layer)
{
	x		= data[layer]['x'] ;
	y		= data[layer]['y'] ;
	width	= data[layer]['width'] ;
	height	= data[layer]['height'] ;
			
	// Drawing a simple line			
	ctx.rect(x,y,width,height) ; 
	ctx.stroke() ;				// Drawing the above coded path
}

var delete_ui_layer_shape_rectangle = function deleteUILayerShapeRectangle()
{
	
}


framework['ui.layer.shape.rectangle'] = 
{
	'createLayer'	: create_ui_layer_shape_rectangle 	,
	'getLayer'		: get_ui_layer_shape_rectangle		,
	'updateLayer'	: update_ui_layer_shape_rectangle	,
	'drawLayer'		: draw_ui_layer_shape_rectangle		,
	'deleteLayer'	: delete_ui_layer_shape_rectangle
} ;

// Images

/////////////////////////
/// IMAGE : DEFAULT	/////
/////////////////////////

var create_ui_layer_image = function createUILayerImage(layer)
{
	totalRes++ ;
	
	var src = data[layer]['src'] ;
		
	var img = new Image() ;
	img.src = src ;
	img.onload = resourceLoaded ;
		
	data[layer]['image'] = img ;
	data[app]['images'].push(img) ;
}

var get_ui_layer_image = function getUILayerImage()
{
	alert('getUILayerImageFrame') ;
}

var update_ui_layer_image = function updateUILayerImage()
{
	alert('updateUILayerImageFrame') ;
}

var draw_ui_layer_image = function drawUILayerImage(layer)
{
	var image	= data[layer]['image'] ;
	var x		= data[layer]['x'] ;
	var y		= data[layer]['y'] ;
	
	data[layer]['width']	= image.width ;
	data[layer]['height']	= image.height ;
	
	// Code for xShift and yShift
	var xShift = data[layer]['xShift'] ;
	var yShift = data[layer]['yShift'] ;
	
	var rotate  = data[layer]['rotate'] ;
	
	var rotateX	= data[layer]['rotateX'] ;
	var rotateY	= data[layer]['rotateY'] ;
		
	ctx.save();
	
	if(rotate != undefined)
	{
		ctx.translate(x + rotateX, y + rotateY) ;
		ctx.rotate(rotate * Math.PI / 180) ;
	}
	
	if(xShift == undefined)
	{
		xShift = 0 ;
	}
	
	if(yShift == undefined)
	{
		yShift = 0 ;
	}
		
	if(image != undefined)
	{
		if(rotate != undefined)
		{
			ctx.strokeStyle = '#000' ;
			ctx.strokeRect(x + xShift -rotateX, y + yShift -rotateY, 100, 100)
			ctx.drawImage(image,x + xShift -rotateX,y + yShift -rotateY) ;
		}
		else
		{
			ctx.drawImage(image,x + xShift,y + yShift) ;
		}
	}
	
	ctx.restore() ;
}

var delete_ui_layer_image = function deleteUILayerImage()
{
	alert('deleteUILayerImageFrame') ;
}


framework['ui.layer.image'] = 
{
	'createLayer'	: create_ui_layer_image 	,
	'getLayer'		: get_ui_layer_image		,
	'updateLayer'	: update_ui_layer_image		,
	'drawLayer'		: draw_ui_layer_image		,
	'deleteLayer'	: delete_ui_layer_image
} ;


/////////////////////////
/// IMAGE : FRAME	/////
/////////////////////////

var create_ui_layer_image_frame = function createUILayerImageFrame(layer)
{
	src = data[layer]['src'] ;
		
	var img = new Image() ;
	img.src = src ;
		
	data[layer]['image'] = img ;
	data[app]['images'].push(img) ;
} ;

var get_ui_layer_image_frame = function getUILayerImageFrame()
{
	alert('getUILayerImageFrame') ;
}

var update_ui_layer_image_frame = function updateUILayerImageFrame()
{
	alert('updateUILayerImageFrame') ;
}

var draw_ui_layer_image_frame = function drawUILayerImageFrame(layer)
{
	var image		= data[layer]['image'] ;
		
	var framesArray = data[layer]['frames'];
	var currentFrame= data[layer]['currentFrame'];

	var x		= data[layer]['x'] ;
	var y		= data[layer]['y'] ;
	var xOffset = framesArray[currentFrame]['xOffset'];
	var yOffset = framesArray[currentFrame]['yOffset'];
	var w = framesArray[currentFrame]['width'];
	var h = framesArray[currentFrame]['height'];
	
	data[layer]['width']	= w ;
	data[layer]['height']	= h ;
	
	// Code for xShift and yShift
	var xShift = data[layer]['xShift'] ;
	var yShift = data[layer]['yShift'] ;
	
	if(xShift == undefined)
	{
		xShift = 0 ;
	}
	
	if(yShift == undefined)
	{
		yShift = 0 ;
	}

	if (image != undefined)
	{
		ctx.drawImage(image, xOffset, yOffset, w, h, x + xShift, y + yShift, w, h);
	}
}

var delete_ui_layer_image_frame = function deleteUILayerImageFrame()
{
	alert('deleteUILayerImageFrame') ;
}


framework['ui.layer.image.frame'] = 
{
	'createLayer'	: create_ui_layer_image_frame 	,
	'getLayer'		: get_ui_layer_image_frame		,
	'updateLayer'	: update_ui_layer_image_frame	,
	'drawLayer'		: draw_ui_layer_image_frame		,
	'deleteLayer'	: delete_ui_layer_image_frame
} ;


/////////////////////////
///IMAGE : ANIMATION/////
/////////////////////////

var create_ui_layer_image_animation = function createUILayerImageAnimation(layer)
{
	src = data[layer]['src'] ;
		
	var img = new Image() ;
	img.src = src ;
		
	data[layer]['image'] = img ;
	data[app]['images'].push(img) ;
		
	data[layer]['animationIndex'] = 0 ;
	data[layer]['startTime']	= undefined ;
	
	data[layer]['oldState']		= undefined ;
} ;

var get_ui_layer_image_animation = function getUILayerImageAnimation()
{
	
} ;

var update_ui_layer_image_animation = function updateUILayerImageAnimation(layer)
{	
	if(data[layer]['state'] != data[layer]['oldState'])
	{
		data[layer]['animationIndex']	= 0;
		data[layer]['startTime']		= undefined ;
		data[layer]['frameStartTime']	= undefined ;
		
		data[layer]['oldState'] = data[layer]['state'] ;
	}
	
	if(data[layer]['startTime'] == undefined)
	{
		data[layer]['startTime'] = date.getTime() ;
		
		data[layer]['frameStartTime'] = date.getTime() ;
		data[layer]['frameTime'] = 0 ;
	}
	
	var state		= data[layer]['state'];
	var animation	= data[layer]['animation'];
	var sequence	= animation[state];
	
	var animationIndex = data[layer]['animationIndex'] ;
	var frameInterval = sequence[animationIndex]['time'];
	var dx = sequence[animationIndex]['dx'];
	var dy = sequence[animationIndex]['dy'];
	
	if(data[layer]['frameTime'] >= frameInterval)
	{
		if (animationIndex < ((sequence.length) - 1))
		{
			data[layer]['animationIndex']++;
			
			data[layer]['frameStartTime'] = date.getTime() ;
			data[layer]['frameTime'] = 0 ;
		}
		else
		{
			data[layer]['animationIndex'] = 0;
			data[layer]['startTime'] = undefined ;
		}
		
		data[layer]['x'] += dx;
		data[layer]['y'] += dy;
	}
	
	//consoleDiv.innerHTML = layer + ' 2';
} ;
 
var draw_ui_layer_image_animation = function drawUILayerImageAnimation(layer)
{	
	data[layer]['time'] = date.getTime() - data[layer]['startTime'] ;
		
	var state		= data[layer]['state'];
	var animation	= data[layer]['animation'];
	var sequence	= animation[state];
	var animationIndex = data[layer]['animationIndex'] ;

	var image = data[layer]['image'];
	var framesArray = data[layer]['frames'];
	var currentFrame = sequence[animationIndex]['frame'];
	var frameInterval = sequence[animationIndex]['time'];

	var x		= data[layer]['x'] ;
	var y		= data[layer]['y'] ;
	var dx = sequence[animationIndex]['dx'];
	var dy = sequence[animationIndex]['dy'];

	var xOffset = framesArray[currentFrame]['xOffset'];
	var yOffset = framesArray[currentFrame]['yOffset'];
	var w = framesArray[currentFrame]['width'];
	var h = framesArray[currentFrame]['height'];
	
	data[layer]['width']	= w ;
	data[layer]['height']	= h ;

	// Code for xShift and yShift
	var xShift = data[layer]['xShift'] ;
	var yShift = data[layer]['yShift'] ;
	
	if(xShift == undefined)
	{
		xShift = 0 ;
	}
	
	if(yShift == undefined)
	{
		yShift = 0 ;
	}

	if (image != undefined)
	{
		ctx.drawImage(image, xOffset, yOffset, w, h, x + xShift, y + yShift, w, h);
	}

	data[layer]['frameTime'] = date.getTime() - data[layer]['frameStartTime'] ;
} ;

var delete_ui_layer_image_animation = function deleteUILayerImageAnimation()
{
	alert('deleteUILayerImageAnimation') ;
} ;


framework['ui.layer.image.animation'] = 
{
	'createLayer'	: create_ui_layer_image_animation 	,
	'getLayer'		: get_ui_layer_image_animation		,
	'updateLayer'	: update_ui_layer_image_animation	,
	'drawLayer'		: draw_ui_layer_image_animation		,
	'deleteLayer'	: delete_ui_layer_image_animation
} ;

////////////////////////////////
/// IMAGE : ANIMATION ARRAY  ///
////////////////////////////////

var create_ui_layer_image_animation_array = function createUILayerImageAnimationArray(layer)
{
	src = data[layer]['src'] ;
		
	var img = new Image() ;
	img.src = src ;
		
	data[layer]['image'] = img ;
	data[app]['images'].push(img) ;
		
	var size = data[layer]['size'] ;
		
	data[layer]['animationIndex']	= new Array() ;
	data[layer]['time']				= new Array() ;
	data[layer]['frameTime']		= new Array() ;
	data[layer]['startTime']		= new Array() ;
	data[layer]['frameStartTime']	= new Array() ;
	data[layer]['state']			= new Array() ;
	data[layer]['oldState']			= new Array() ;
	data[layer]['visible']			= new Array() ;
	
	data[layer]['x']				= new Array() ;
	data[layer]['y']				= new Array() ;
	data[layer]['width']			= new Array() ;
	data[layer]['height']			= new Array() ;
		
	for(var i = 0; i < size; i++)
	{	
		data[layer]['animationIndex'][i]= 0 ;
		data[layer]['startTime'][i]		= undefined ;
		data[layer]['state'][i]			= undefined ;
		data[layer]['oldState'][i]		= '' ;
		
		// Setting all parts of array to default visible value of false
		data[layer]['visible'][i]		= false ;
		
		data[layer]['x']		[i]		= 200 ;
		data[layer]['y']		[i]		= 20 ;
		data[layer]['width']	[i]		= 0 ;
		data[layer]['height']	[i]		= 0 ;
	}
}

var get_ui_layer_image_animation_array = function getUILayerImageAnimationArray()
{
	
}

var update_ui_layer_image_animation_array = function updateUILayerImageAnimationArray(layer)
{
	var size = data[layer]['size'] ;
	
	for(var i = 0; i < size; i++)
	{
		// In case of change of state for animated layer
		if(data[layer]['state'][i] != data[layer]['oldState'][i])
		{
			data[layer]['animationIndex']	[i]	= 0;
			data[layer]['startTime']		[i]	= undefined ;
			data[layer]['frameStartTime']	[i]	= undefined ;
				
			data[layer]['oldState']			[i] = data[layer]['state'][i] ;
		}
		
		var visible = data[layer]['visible'][i] ;

		if(visible == true)
		{	
			// Resetting variables during the start of a sequence animation 
			if(data[layer]['startTime'][i] == undefined)
			{
				data[layer]['startTime']		[i] = date.getTime() ;
				
				data[layer]['frameStartTime']	[i] = date.getTime() ;
				data[layer]['frameTime']		[i] = 0 ;
			}
			
			var state		= data[layer]['state'][i]	;
			
			if(state == undefined)
			{
				continue ;
			}
			
			var animation	= data[layer]['animation'] 	;
			var sequence	= animation[state]			;
			
			var animationIndex	= data[layer]['animationIndex'][i] ;
			var frameInterval	= sequence[animationIndex]['time'] ;
			var dx 				= sequence[animationIndex]['dx'];
			var dy				= sequence[animationIndex]['dy'];
			
			// alert(data[layer]['frameTime'][i] + ' ' + frameInterval) ;
			
			if(data[layer]['frameTime'][i] >= frameInterval)
			{
				if (animationIndex < ((sequence.length) - 1))
				{
					data[layer]['animationIndex'][i]++;
					
					data[layer]['frameStartTime']	[i] = date.getTime() ;
					data[layer]['frameTime']		[i] = 0 ;
				}
				else
				{
					data[layer]['animationIndex']	[i] = 0;
					data[layer]['startTime']		[i] = undefined ;
				}
				
				data[layer]['x'][i] += dx;
				data[layer]['y'][i] += dy;
			}
		}
	}
	
	//alert(layer + ' update 2') ;
}

var draw_ui_layer_image_animation_array = function drawUILayerImageAnimationArray(layer)
{	
	//alert(layer + ' draw 1') ;
	var size = data[layer]['size'] ;
	
	for(var i = 0; i < size; i++)
	{
		var visible = data[layer]['visible'][i] ;
		
		if(visible == true)
		{
			data[layer]['time'][i] = date.getTime() - data[layer]['startTime'][i] ;
		
			var state		= data[layer]['state']		[i];
			
			if(state == undefined)
			{
				continue ;
			}
			
			var animation	= data[layer]['animation'] ;
			var sequence	= animation[state]	;
			var animationIndex = data[layer]['animationIndex'][i] ;//alert(layer + ' draw 3') ;
		
			var image		= data[layer]['image'];
			var framesArray = data[layer]['frames'];
			var currentFrame= sequence[animationIndex]['frame'];
			var frameInterval = sequence[animationIndex]['time'];//alert(layer + ' draw 4') ;
		
			var x		= data[layer]['x'][i] ;
			var y		= data[layer]['y'][i] ;
			var dx = sequence[animationIndex]['dx'];
			var dy = sequence[animationIndex]['dy'];//alert(layer + ' draw 5') ;
		
			var xOffset = framesArray[currentFrame]['xOffset'];
			var yOffset = framesArray[currentFrame]['yOffset'];
			var w 		= framesArray[currentFrame]['width'];
			var h 		= framesArray[currentFrame]['height'];//alert(layer + ' draw 6') ;
			
			data[layer]['width']	[i]	= w ;
			data[layer]['height']	[i]	= h ;
		
			if (image != undefined)
			{
				//consoleDiv.innerHTML = i + ' x ' + x + ' y ' + y + ' w ' + w + ' h ' + h + ' xOffset ' + xOffset + ' yOffset ' + yOffset ;
				//alert(i) ;
				ctx.drawImage(image, xOffset, yOffset, w, h, x, y, w, h);
			}
		
			data[layer]['frameTime'][i] = date.getTime() - data[layer]['frameStartTime'][i] ;
		}
	}
	//alert(layer + ' draw 2') ;
}

var delete_ui_layer_image_animation_array = function deleteUILayerImageAnimationArray()
{
	alert('deleteUILayerImageAnimation') ;
}

framework['ui.layer.image.animation.array'] = 
{
	'createLayer'	: create_ui_layer_image_animation_array 	,
	'getLayer'		: get_ui_layer_image_animation_array		,
	'updateLayer'	: update_ui_layer_image_animation_array	,
	'drawLayer'		: draw_ui_layer_image_animation_array		,
	'deleteLayer'	: delete_ui_layer_image_animation_array
} ;

// Shapes

/////////////////////////
///// SHAPE : LINE	/////
/////////////////////////

var effects = {} ;

effects["fadeIn"] 	= {} ;
effects["fadeOut"] 	= {} ;
effects["slideIn"] 	= {} ;
effects["slideOut"] = {} ;
effects["switchOff"]= {} ;
effects["grow"] 	= {} ;
effects["squish"] 	= {} ;
effects["shake"] 	= {} ;
effects["fold"] 	= {} ;
effects["pulsate"] 	= {} ;
effects["dropOut"] 	= {} ;

var create_ui_layer_shape_line = function createUILayerShapeLine(layer)
{
	
}

var create_ui_layer_shape_line = function createUILayerShapeLine(layer)
{
	
}

var get_ui_layer_shape_line = function getUILayerShapeLine()
{
	
}

var update_ui_layer_shape_line = function updateUILayerShapeLine()
{
	
}

var draw_ui_layer_shape_line = function drawUILayerShapeLine(layer)
{
	x		= data[layer]['x'] ;
	y		= data[layer]['y'] ;
	endX	= data[layer]['endX'] ;
	endY	= data[layer]['endY'] ;
			
	// Drawing a simple line
	ctx.beginPath() ;			
	ctx.moveTo(x + 0.5,y + 0.5) ; 
	ctx.lineTo(endX + 0.5,endY + 0.5) ;
	ctx.closePath() ;
	ctx.strokeStyle = data[layer]['color'] ;
	ctx.stroke() ;
}

var delete_ui_layer_shape_line = function deleteUILayerShapeLine()
{
	
}


framework['ui.layer.shape.line'] = 
{
	'createLayer'	: create_ui_layer_shape_line 	,
	'getLayer'		: get_ui_layer_shape_line		,
	'updateLayer'	: update_ui_layer_shape_line	,
	'drawLayer'		: draw_ui_layer_shape_line		,
	'deleteLayer'	: delete_ui_layer_shape_line
} ;


/////////////////////////
///SHAPE : RECTANGLE/////
/////////////////////////

var create_ui_layer_shape_rectangle = function createUILayerShapeRectangle(layer)
{
	createEffects(layer) ;
}

var get_ui_layer_shape_rectangle = function getUILayerShapeRectangle()
{
	
}

var update_ui_layer_shape_rectangle = function updateUILayerShapeRectangle()
{
	
}

var draw_ui_layer_shape_rectangle = function drawUILayerShapeRectangle(layer)
{	
	var x		= data[layer]['x'] ;
	var y		= data[layer]['y'] ;
	var width	= data[layer]['width'] ;
	var height	= data[layer]['height'] ;
		
	var fill	= data[layer]['fill'] ;
	var rotate  = data[layer]['rotate'] ;
	
	var rotateX	= data[layer]['rotateX'] ;
	var rotateY	= data[layer]['rotateY'] ;
	
	var effect	= data[layer]['effect'] ;
	
	ctx.save() ;
	
	if(effect != undefined)
	{
		if(effect == "fadeIn")
		{
			if(effects["fadeIn"][layer] == undefined)
			{
				effects["fadeIn"][layer] 	= {"alpha" : 0} ;
			}
			
			var alpha = effects["fadeIn"][layer]['alpha'] ;
			
			ctx.globalAlpha = alpha ;
		
			if(alpha <= 1.0)
			{
				effects["fadeIn"][layer]['alpha'] += 0.025 ;
			}
			else
			{
				data[layer]["effectComplete"] = true ;
			}
		}
		else if(effect == "fadeOut")
		{
			if(effects["fadeOut"][layer] == undefined)
			{
				effects["fadeOut"][layer] 	= {"alpha" : 1.0} ;
			}
			
			var alpha = effects["fadeOut"][layer]['alpha'] ;
			
			ctx.globalAlpha = alpha ;
			
			if(alpha >= 0.1)
			{
				effects["fadeOut"][layer]['alpha'] -= 0.025 ;
			}
			else
			{
				data[layer]["effectComplete"] = true ;
			}
		}
		else if(effect == "slideIn")
		{
			if(effects["slideIn"][layer] == undefined)
			{
				effects["slideIn"][layer] 	= {"height" : height, "to" : 1} ;
			}
			
			data[layer]['height'] = effects["slideIn"][layer]['to'] ;
			
			if(effects["slideIn"][layer]["height"] >= effects["slideIn"][layer]['to'])
			{
				effects["slideIn"][layer]['to'] += 10 ;
			}
			else
			{
				data[layer]['height'] = effects["slideIn"][layer]['height'] ;
				data[layer]["effectComplete"] = true ;
			}
		}
		else if(effect == "slideOut")
		{
			if(effects["slideOut"][layer] == undefined)
			{
				effects["slideOut"][layer] 	= {"height" : height, "from" : height} ;
			}
			
			data[layer]['height'] = effects["slideOut"][layer]['from'] ;
			
			if(effects["slideOut"][layer]["height"] >= effects["slideOut"][layer]['from'] && effects["slideOut"][layer]['from'] > 0)
			{
				effects["slideOut"][layer]['from'] -= 10 ;
			}
			else
			{
				data[layer]['height'] = 0 ;
				data[layer]["effectComplete"] = true ;
			}
		}
		else if(effect == "switchOff")
		{
			if(effects["switchOff"][layer] == undefined)
			{
				effects["switchOff"][layer] = {"height" : height, "from" : height, "alpha" : 1} ;
			}
			
			data[layer]['height'] = effects["switchOff"][layer]['from'] ;
			
			var alpha = effects["switchOff"][layer]['alpha'] ;
			
			ctx.globalAlpha = alpha ;
		
			if(alpha >= 0.2)
			{
				effects["switchOff"][layer]['alpha'] -= 0.025 ;
			}
			else
			{
				effects["switchOff"][layer]['alphaEffect'] = true ;
			}
			
			if(effects["switchOff"][layer]['alphaEffect'] == true)
			{
				if(effects["switchOff"][layer]["height"] >= effects["switchOff"][layer]['from'] && effects["switchOff"][layer]['from'] > 0)
				{
					effects["switchOff"][layer]['from'] -= 10 ;
					data[layer]['y'] += 5 ;
				}
				else
				{
					data[layer]['height'] = 0 ;
					data[layer]["effectComplete"] = true ;
				}
				
				ctx.globalAlpha = 1.0 ;
			}
		}
		else if(effect == "grow")
		{
			if(effects["grow"][layer] == undefined)
			{
				var growX = x + 40 ;
				var growY = y + 40 ;
				
				effects["grow"][layer] = 
				{
					"x" : x, 
					"y" : y, 
					"width" : width, 
					"height" : height, 
					"grow-width" : 20, 
					"grow-height" : 20,
					"grow-x" : growX,
					"grow-y" : growY
				} ;
			}
			
			data[layer]['x'] = effects["grow"][layer]['grow-x'] ;
			data[layer]['y'] = effects["grow"][layer]['grow-y'] ;
			
			data[layer]['height']= effects["grow"][layer]['grow-height'] ;
			data[layer]['width'] = effects["grow"][layer]['grow-height'] ;
			
			//alert(effects["grow"][layer]['grow-height'])
			
			if(effects["grow"][layer]["height"] >= effects["grow"][layer]['grow-height'])
			{
				effects["grow"][layer]['grow-x'] -= 2 ;
				effects["grow"][layer]['grow-y'] -= 2 ;
				
				effects["grow"][layer]['grow-height'] += 4 ;
				effects["grow"][layer]['grow-width'] += 4 ;
			}
			else
			{
				data[layer]['width'] = effects["grow"][layer]['width'] ;
				data[layer]['height']= effects["grow"][layer]['height'] ;
				
				data[layer]["effectComplete"] = true ;
			}
		}
		else if(effect == "squish")
		{
			if(effects["squish"][layer] == undefined)
			{
				effects["squish"][layer] = {"width" : width, "height" : height} ;		
			}
			
			if(effects["squish"][layer]["height"] >= data[layer]['height'] && data[layer]['height'] > 0)
			{
				data[layer]['width']  -= 2 ;
				data[layer]['height'] -= 2 ;
			}
			else
			{
				data[layer]['width'] = 0 ;
				data[layer]['height']= 0 ;
				data[layer]["effectComplete"] = true ;
			}
		}
		else if(effect == "shake")
		{
			if(effects["shake"][layer] == undefined)
			{
				effects["shake"][layer] = {"x" : x, "shake" : 0} ;
			}
			
			if(effects["shake"][layer]["shake"] <= 26)
			{
				if(effects["shake"][layer]["shake"] >= 1 || effects["shake"][layer]["shake"] <= 6 && effects["shake"][layer]["shake"] >= 13 || effects["shake"][layer]["shake"] <= 18)
				{
					if(effects["shake"][layer]["shake"] == 1)
					{
						data[layer]['x'] -= 2 ;
					}
					else if(effects["shake"][layer]["shake"] == 2)
					{
						data[layer]['x'] -= 4 ;
					}
					else if(effects["shake"][layer]["shake"] == 3)
					{
						data[layer]['x'] -= 6 ;
					}
					else if(effects["shake"][layer]["shake"] == 4)
					{
						data[layer]['x'] -= 8 ;
					}
					else if(effects["shake"][layer]["shake"] == 5)
					{
						data[layer]['x'] -= 12 ;
					}
					else if(effects["shake"][layer]["shake"] == 6)
					{
						data[layer]['x'] = effects["shake"][layer]["x"] ;
					}
				}
				if(effects["shake"][layer]["shake"] >= 7 || effects["shake"][layer]["shake"] <= 12)
				{
					
					if(effects["shake"][layer]["shake"] == 7)
					{
						data[layer]['x'] += 2 ;
					}
					else if(effects["shake"][layer]["shake"] == 8)
					{
						data[layer]['x'] += 4 ;
					}
					else if(effects["shake"][layer]["shake"] == 9)
					{
						data[layer]['x'] += 6 ;
					}
					else if(effects["shake"][layer]["shake"] == 10)
					{
						data[layer]['x'] += 8 ;
					}
					else if(effects["shake"][layer]["shake"] == 11)
					{
						data[layer]['x'] += 12 ;
					}
					else if(effects["shake"][layer]["shake"] == 12)
					{
						data[layer]['x'] = effects["shake"][layer]["x"] ;
					}
				}
				
				effects["shake"][layer]["shake"] += 1 ;
			}
		}
		else if(effect == "fold")
		{
			if(effects["fold"][layer] == undefined)
			{
				effects["fold"][layer] = {"width" : width, "height" : height} ;
			}
			
			if(effects["fold"][layer]["height"] >= data[layer]['height'])
			{
				if(data[layer]['height'] > 5)
				{
					data[layer]['height'] -= 2 ;	
				}
				else if(data[layer]['width'] > 0)
				{
					data[layer]['width'] -= 2 ;
				}
				else
				{
					data[layer]['width'] = 0 ;
					data[layer]['height']= 0 ;
					data[layer]["effectComplete"] = true ;
				}
			}
		}
		else if(effect == "pulsate")
		{
			if(effects["pulsate"][layer] == undefined)
			{
				effects["pulsate"][layer] = {"alpha" : 1.0, "times" : 0} ;
			}
			
			var alpha = effects["pulsate"][layer]['alpha'] ;
			
			ctx.globalAlpha = alpha ;
			
			if(effects["pulsate"][layer]['times'] < 99)
			{
				if(alpha >= 0)
				{
					effects["pulsate"][layer]['alpha'] -= 0.05 ;
				}
				else
				{
					effects["pulsate"][layer]['alpha'] = 1.0 ;
				}
				
				effects["pulsate"][layer]['times']++ ;
			}
			else
			{
				effects["pulsate"][layer]['alpha'] = 1.0 ;
				data[layer]["effectComplete"] = true ;
			}
		}
		else if(effect == "dropOut")
		{
			if(effects["dropOut"][layer] == undefined)
			{
				effects["dropOut"][layer] 	= {"alpha" : 1.0} ;
			}
			
			var alpha = effects["dropOut"][layer]['alpha'] ;
			
			ctx.globalAlpha = alpha ;
			
			if(alpha >= 0.1)
			{
				effects["dropOut"][layer]['alpha'] -= 0.05 ;
				data[layer]["y"] += 5 ;
			}
			else
			{
				ctx.globalAlpha = 0 ;
				data[layer]["effectComplete"] = true ;
			}
		}
	}
	
	if(rotate != undefined)
	{
		ctx.translate(x + rotateX, y + rotateY) ;
		ctx.rotate(rotate * Math.PI / 180) ;
	}
	
  	if(fill == true)
	{
		ctx.fillStyle =  data[layer]['color'] ;
		
		if(rotate != undefined)
		{
			ctx.fillRect(-rotateX, -rotateY, width, height) ;
		}
		else
		{
			ctx.fillRect(x, y, width, height) ;
		}
	}
	else
	{
		ctx.strokeStyle = data[layer]['color'] ;
		
		if(rotate != undefined)
		{
			ctx.strokeRect(-rotateX, -rotateY, width, height) ;
		}
		else
		{
			ctx.strokeRect(x + 0.5, y + 0.5, width, height) ;
		}
	}
	
  	ctx.restore() ;
}

var delete_ui_layer_shape_rectangle = function deleteUILayerShapeRectangle()
{
	
}

framework['ui.layer.shape.rectangle'] = 
{
	'createLayer'	: create_ui_layer_shape_rectangle 	,
	'getLayer'		: get_ui_layer_shape_rectangle		,
	'updateLayer'	: update_ui_layer_shape_rectangle	,
	'drawLayer'		: draw_ui_layer_shape_rectangle		,
	'deleteLayer'	: delete_ui_layer_shape_rectangle
} ;

///////////////////////////////
///      SHAPE : SQUARE     ///
///////////////////////////////

var create_ui_layer_shape_square = function createUILayerShapeSquare(layer)
{
	
}

var get_ui_layer_shape_square = function getUILayerShapeSquare()
{
	
}

var update_ui_layer_shape_square = function updateUILayerShapeSquare()
{
	
}

var draw_ui_layer_shape_square = function drawUILayerShapeSquare(layer)
{
	x		= data[layer]['x'] ;
	y		= data[layer]['y'] ;
	width	= data[layer]['width'] ;
				
	// Drawing a simple Square			
	ctx.rect(x,y,width,width) ;
	ctx.stroke() ;				// Drawing the above coded path
	
}

var delete_ui_layer_shape_square = function deleteUILayerShapeSquare()
{
	
}

framework['ui.layer.shape.square'] = 
{
	'createLayer'	: create_ui_layer_shape_square 	,
	'getLayer'		: get_ui_layer_shape_square		,
	'updateLayer'	: update_ui_layer_shape_square	,
	'drawLayer'		: draw_ui_layer_shape_square	,	
	'deleteLayer'	: delete_ui_layer_shape_square
} ;


////////////////////////////////////
///      SHAPE : RoundedRect     ///
////////////////////////////////////

var create_ui_layer_shape_roundedRect = function createUILayerShapeRoundedRect(layer)
{
	
}

var get_ui_layer_shape_roundedRect = function getUILayerShapeRoundedRect()
{
	
}

var update_ui_layer_shape_roundedRect = function updateUILayerShapeRoundedRect()
{
	
}

var draw_ui_layer_shape_roundedRect = function drawUILayerShapeRoundedRect(layer)
{
	x				= data[layer]['x'] ;
	y				= data[layer]['y'] ;
	width			= data[layer]['width'] ;
	height			= data[layer]['height'] ;
	roundingRadius	= data[layer]['roundingRadius'] ;
	
	/*
	ctx.moveTo(x, y) ;
	ctx.lineTo(x + width, y + height, roundingRadius) ;
	ctx.lineTo(x, y, w, h) ;
	ctx.lineTo(x, y, w, h) ;
	*/
	
	// Drawing a simple Rounded Rect
	/*ctx.beginPath() ;
	ctx.moveTo(x + roundingRadius,y) ;
	ctx.lineTo(width - (roundingRadius * 2),y) ;
	ctx.lineTo(x + width,y + height) ;
	ctx.lineTo(x,y + height) ;
	ctx.lineTo(x,y) ;
	*/
	 
	ctx.closePath() ;
	ctx.stroke() ;				// Drawing the above coded path
	
}

var delete_ui_layer_shape_roundedRect = function deleteUILayerShapeRoundedRect()
{
	
}

framework['ui.layer.shape.roundedRect'] = 
{
	'createLayer'	: create_ui_layer_shape_roundedRect ,
	'getLayer'		: get_ui_layer_shape_roundedRect	,
	'updateLayer'	: update_ui_layer_shape_roundedRect	,
	'drawLayer'		: draw_ui_layer_shape_roundedRect	,	
	'deleteLayer'	: delete_ui_layer_shape_roundedRect
} ;



//////////////////////////////////
///      SHAPE : Triangle     ///
/////////////////////////////////

var create_ui_layer_shape_triangle = function createUILayerShapeTriangle(layer)
{
	
}

var get_ui_layer_shape_triangle = function getUILayerShapeTriangle()
{
	
}

var update_ui_layer_shape_triangle = function updateUILayerShapeTriangle()
{
	
}

var draw_ui_layer_shape_triangle = function drawUILayerShapeTriangle(layer)
{
	x		= data[layer]['x'] ;
	y		= data[layer]['y'] ;
	x1		= data[layer]['x1'] ;
	y1		= data[layer]['y1'] ;
	x2		= data[layer]['x2'] ;
	y2		= data[layer]['y2'] ;				
	
	// Drawing a simple triangle			

	ctx.beginPath() ;			
	ctx.moveTo(x,y) ;			// Starting point of line 
	ctx.lineTo(x1,y1) ;			// 
	ctx.lineTo(x2,y2) ;			//  
	ctx.lineTo(x,y) ;			// 
	ctx.closePath() ;

	ctx.stroke() ;				// Drawing the above coded path
	
}

var delete_ui_layer_shape_triangle = function deleteUILayerShapeTriangle()
{
	
}

framework['ui.layer.shape.triangle'] = 
{
	'createLayer'	: create_ui_layer_shape_triangle 	,
	'getLayer'		: get_ui_layer_shape_triangle		,
	'updateLayer'	: update_ui_layer_shape_triangle	,
	'drawLayer'		: draw_ui_layer_shape_triangle		,	
	'deleteLayer'	: delete_ui_layer_shape_triangle
} ;

/////////////////////////////////
///      SHAPE : Polygon     ///
////////////////////////////////

var create_ui_layer_shape_polygon = function createUILayerShapePolygon(layer)
{
	// Compare xPoints length with yPoints length
}

var get_ui_layer_shape_polygon = function getUILayerShapePolygon()
{
	
}

var update_ui_layer_shape_polygon = function updateUILayerShapePolygon()
{
	
}

var draw_ui_layer_shape_polygon = function drawUILayerShapePolygon(layer)
{
	x		= data[layer]['x'] ;
	y		= data[layer]['y'] ;
	xPoints	= data[layer]['xPoints'] ;
	yPoints	= data[layer]['yPoints'] ;
					
	// Drawing a simple polygon			
	
	//To be done by Sir
	ctx.beginPath() ;
	ctx.moveTo(x,y) ;

	for(var i = 0; i < xPoints.length;i++)
	{
		ctx.lineTo(xPoints[i],yPoints[i]) ;
	}
 
	ctx.stroke() ;				// Drawing the above coded path
	
}

var delete_ui_layer_shape_polygon = function deleteUILayerShapePolygon()
{
	
}

framework['ui.layer.shape.polygon'] = 
{
	'createLayer'	: create_ui_layer_shape_polygon	,
	'getLayer'		: get_ui_layer_shape_polygon	,
	'updateLayer'	: update_ui_layer_shape_polygon	,
	'drawLayer'		: draw_ui_layer_shape_polygon	,	
	'deleteLayer'	: delete_ui_layer_shape_polygon
} ;


/////////////////////////////
///      SHAPE : Arc     ///
////////////////////////////

var create_ui_layer_shape_arc = function createUILayerShapeArc(layer)
{
	
}

var get_ui_layer_shape_arc = function getUILayerShapeArc()
{
	
}

var update_ui_layer_shape_arc = function updateUILayerShapeArc()
{
	
}

var draw_ui_layer_shape_arc = function drawUILayerShapeArc(layer)
{
	x				= data[layer]['x'] ;
	y				= data[layer]['y'] ;
	radius			= data[layer]['radius'] ;
	startAngle		= data[layer]['startAngle'] ;
	endAngle		= data[layer]['endAngle'] ;
	anticlockwise	= data[layer]['anticlockwise'] ;

	var startAngleinRadians = (Math.PI/180) * startAngle ;
	var endAngleinRadians	= (Math.PI/180) * endAngle ;				

	ctx.beginPath() ;
		
	ctx.arc(x, y, radius, startAngleinRadians, endAngleinRadians, anticlockwise) ; // Drawing a simple arc 
	
	ctx.stroke() ;				// Drawing the above coded path
}

var delete_ui_layer_shape_arc = function deleteUILayerShapeArc()
{
	
}

framework['ui.layer.shape.arc'] = 
{
	'createLayer'	: create_ui_layer_shape_arc	,
	'getLayer'		: get_ui_layer_shape_arc	,
	'updateLayer'	: update_ui_layer_shape_arc	,
	'drawLayer'		: draw_ui_layer_shape_arc	,	
	'deleteLayer'	: delete_ui_layer_shape_arc
} ;


/////////////////////////////////////
///      SHAPE : EllipticalArc    ///
////////////////////////////////////

var create_ui_layer_shape_ellipticalArc = function createUILayerShapeEllipticalArc(layer)
{
	
}

var get_ui_layer_shape_ellipticalArc = function getUILayerShapeEllipticalArc()
{
	
}

var update_ui_layer_shape_ellipticalArc = function updateUILayerShapeEllipticalArc()
{
	
}

var draw_ui_layer_shape_ellipticalArc = function drawUILayerShapeEllipticalArc(layer)
{
	x				= data[layer]['x'] ;
	y				= data[layer]['y'] ;
	radiusX			= data[layer]['radiusX'] ;
	radiusY			= data[layer]['radiusY'] ;
	rotation		= data[layer]['rotation'] ;
	startAngle		= data[layer]['startAngle'] ;
	endAngle		= data[layer]['endAngle'] ;
	anticlockwise	= data[layer]['anticlockwise'] ;

	var startAngleinRadians = (Math.PI/180) * startAngle ;
	var endAngleinRadians	= (Math.PI/180) * endAngle ;				

	ctx.beginPath() ;
		
	ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngleinRadians, endAngleinRadians, anticlockwise) ; // Drawing a EllipticalArc 
	ctx.stroke() ;				// Drawing the above coded path
}

var delete_ui_layer_shape_ellipticalArc = function deleteUILayerShapeArc()
{
	
}

framework['ui.layer.shape.ellipticalArc'] = 
{
	'createLayer'	: create_ui_layer_shape_ellipticalArc	,
	'getLayer'		: get_ui_layer_shape_ellipticalArc		,
	'updateLayer'	: update_ui_layer_shape_ellipticalArc	,
	'drawLayer'		: draw_ui_layer_shape_ellipticalArc		,	
	'deleteLayer'	: delete_ui_layer_shape_ellipticalArc
} ;


///////////////////////////////
///      SHAPE : Circle    ///
//////////////////////////////

var create_ui_layer_shape_circle = function createUILayerShapeCircle(layer)
{
	
}

var get_ui_layer_shape_circle = function getUILayerShapeCircle()
{
	
}

var update_ui_layer_shape_circle = function updateUILayerShapeCircle()
{
	
}

var draw_ui_layer_shape_circle = function drawUILayerShapeCircle(layer)
{
	x				= data[layer]['x'] ;
	y				= data[layer]['y'] ;
	radius			= data[layer]['radius'] ;

	var startAngleinRadians = (Math.PI/180) * 0 ;
	var endAngleinRadians	= (Math.PI/180) * 360 ;				

	ctx.beginPath() ;
	ctx.arc(x, y, radius, startAngleinRadians, endAngleinRadians, false) ; // Drawing a simple circle 
	ctx.stroke() ;	// Drawing the above coded path
}

var delete_ui_layer_shape_circle = function deleteUILayerShapeCircle()
{
	
}

framework['ui.layer.shape.circle'] = 
{
	'createLayer'	: create_ui_layer_shape_circle 	,
	'getLayer'		: get_ui_layer_shape_circle 		,
	'updateLayer'	: update_ui_layer_shape_circle 	,
	'drawLayer'		: draw_ui_layer_shape_circle 		,	
	'deleteLayer'	: delete_ui_layer_shape_circle 
} ;


///////////////////////////////
///      SHAPE : ellipse    ///
//////////////////////////////

var create_ui_layer_shape_ellipse = function createUILayerShapeEllipse(layer)
{
	
}

var get_ui_layer_shape_ellipse = function getUILayerShapeEllipse()
{
	
}

var update_ui_layer_shape_ellipse = function updateUILayerShapeEllipse()
{
	
}

var draw_ui_layer_shape_ellipse = function drawUILayerShapeEllipse(layer)
{
	x				= data[layer]['x'] ;
	y				= data[layer]['y'] ;
	radiusX			= data[layer]['radiusX'] ;
	radiusY			= data[layer]['radiusY'] ;
	rotation		= data[layer]['rotation'] ;
	startAngle		= 0 ;
	endAngle		= 360 ;
	anticlockwise	= false ;

	var startAngleinRadians = (Math.PI/180) * startAngle ;
	var endAngleinRadians	= (Math.PI/180) * endAngle ;				


	ctx.beginPath() ;
	// Drawing a Ellipse	
	ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngleinRadians, endAngleinRadians, anticlockwise) ; 
	ctx.stroke() ;				// Drawing the above coded path
}

var delete_ui_layer_shape_ellipse = function deleteUILayerShapeEllipse()
{
	
}

framework['ui.layer.shape.ellipse '] = 
{
	'createLayer'	: create_ui_layer_shape_ellipse 	,
	'getLayer'		: get_ui_layer_shape_ellipse 		,
	'updateLayer'	: update_ui_layer_shape_ellipse 	,
	'drawLayer'		: draw_ui_layer_shape_ellipse 		,	
	'deleteLayer'	: delete_ui_layer_shape_ellipse 
} ;


/////////////////////////////////////
///      SHAPE : quadraticCurve   ///
/////////////////////////////////////

var create_ui_layer_shape_quadraticCurve = function createUILayerShapeEllipse(layer)
{
	
}

var get_ui_layer_shape_quadraticCurve = function getUILayerShapeEllipse()
{
	
}

var update_ui_layer_shape_quadraticCurve = function updateUILayerShapeEllipse()
{
	
}

var draw_ui_layer_shape_quadraticCurve = function drawUILayerShapeEllipse(layer)
{
	x		= data[layer]['x'] ;
	y		= data[layer]['y'] ;
	cpx		= data[layer]['cpx'] ;
	cpy		= data[layer]['cpy'] ;
	endX	= data[layer]['endX'] ;
	endY	= data[layer]['endY'] ;
				
	// Drawing a simple Quadratic Curve			
	ctx.beginPath() ;
	ctx.moveTo(x,y) ;
	ctx.quadraticCurveTo(cpx,cpy,endX,endY) ;
	ctx.stroke() ;				// Drawing the above coded path
	
}

var delete_ui_layer_shape_quadraticCurve = function deleteUILayerShapeEllipse()
{
	
}

framework['ui.layer.shape.quadraticCurve'] = 
{
	'createLayer'	: create_ui_layer_shape_quadraticCurve	,
	'getLayer'		: get_ui_layer_shape_quadraticCurve		,
	'updateLayer'	: update_ui_layer_shape_quadraticCurve	,
	'drawLayer'		: draw_ui_layer_shape_quadraticCurve	,	
	'deleteLayer'	: delete_ui_layer_shape_quadraticCurve
} ;



///////////////////////////////////
///      SHAPE : bezierCurve   ///
//////////////////////////////////

var create_ui_layer_shape_bezierCurve = function createUILayerShapeBezierCurve(layer)
{
	
}

var get_ui_layer_shape_bezierCurve = function getUILayerShapeBezierCurve()
{
	
}

var update_ui_layer_shape_bezierCurve = function updateUILayerShapeBezierCurve()
{
	
}

var draw_ui_layer_shape_bezierCurve = function drawUILayerShapeBezierCurve(layer)
{
	x		= data[layer]['x'] ;
	y		= data[layer]['y'] ;
	cp1x	= data[layer]['cp1x'] ;
	cp1y	= data[layer]['cp1y'] ;
	cp2x	= data[layer]['cp2x'] ;
	cp2y	= data[layer]['cp2y'] ;
	endX	= data[layer]['endX'] ;
	endY	= data[layer]['endY'] ;
				
	// Drawing a simple Bezier Curve			
	ctx.beginPath() ;
		
	ctx.moveTo(x,y) ;
	ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,endX,endY) ;
	
	ctx.stroke() ;				// Drawing the above coded path
}

var delete_ui_layer_shape_bezierCurve = function deleteUILayerShapeBezierCurve()
{
	
}

framework['ui.layer.shape.bezierCurve'] = 
{
	'createLayer'	: create_ui_layer_shape_bezierCurve	,
	'getLayer'		: get_ui_layer_shape_bezierCurve		,
	'updateLayer'	: update_ui_layer_shape_bezierCurve	,
	'drawLayer'		: draw_ui_layer_shape_bezierCurve	,	
	'deleteLayer'	: delete_ui_layer_shape_bezierCurve
} ;


//////////////////////////////
///      SHAPE : path     ///
/////////////////////////////

var create_ui_layer_shape_path = function createUILayerShapePath(layer)
{
	
}

var get_ui_layer_shape_path = function getUILayerShapePath()
{
	
}

var update_ui_layer_shape_path = function updateUILayerShapePath()
{
	
}

var draw_ui_layer_shape_path = function drawUILayerShapePath(layer)
{
	x		= data[layer]['x'] ;
	y		= data[layer]['y'] ;
	width	= data[layer]['width'] ;
				
	// Drawing a simple path			
	ctx.rect(x,y,width,width) ;
	ctx.stroke() ;				// Drawing the above coded path
	
}

var delete_ui_layer_shape_path = function deleteUILayerShapePath()
{
	
}

framework['ui.layer.shape.path'] = 
{
	'createLayer'	: create_ui_layer_shape_path	,
	'getLayer'		: get_ui_layer_shape_path		,
	'updateLayer'	: update_ui_layer_shape_path	,
	'drawLayer'		: draw_ui_layer_shape_path		,	
	'deleteLayer'	: delete_ui_layer_shape_path
} ;
