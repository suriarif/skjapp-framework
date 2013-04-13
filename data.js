// App's Data

var data = 
{
	'engine' :
	{
		'app' : 'app',
		
		'pluginfiles' : 
		[
			'skjapp-framework/js/ui/layers/uiLayer.js',
			'skjapp-framework/js/ui/pages/uiPage.js',
			'skjapp-framework/js/ui/layers/deviceBlackBerry10.js'
		]
	},
	
	'app':
	{
		'viewportWidth' : 768,		// Width
		'viewportHeight' : 1280,	// Height
		'viewportResize' : "no",	// Disable Zoom In and Zoom Out
		
		'type' : 'app',
		
		'name' : 'YOUR APP NAME',
		
		'x'			: 0,
		'y'			: 0,
		'width'		: 768,
		'height'	: 1280,
		
		'maxFrameRate'	: 60,
		
		'pages'			: ['loading_page'],
		'currentPage'	: 'loading_page'
	},
	
	'loading_page' :
	{
		'type'		: 'ui.page',
		
		'layers'	: ['BlackBackground','bb10','Logo','rect1','rect2']
	},
	
	'bb10' :
	{
		'type' : 'device.blackberry10',
		'scrolling' : false
	},
	
	'BlackBackground' :
	{
		'type'	: 'ui.layer.shape.rectangle',
		
		'visible': true,
		
		'x'		: 0,
		'y'		: 0,
		'width'	: 450,
		'height': 750,
		'fill'	: true,
		'color'	: '#000',
	},

	'Logo'	:
	{
		'type'	: 'ui.layer.image',
		
		'visible': true,
		
		'src'	: 'images/SKJ.png',
		
		'drag' : true,
		
		'x'		: 270,
		'y'		: 410
	},
	
	'rect1' :
	{
		'type' 	: 'ui.layer.shape.rectangle',
		
		'x'		: 50,
		'y'		: 50,
		'width' : 100,
		'height': 100,
		
		'fill' : true,
		
		'color' : "#f2f2f2",
		'visible' : true
	},
	
	'rect2' :
	{
		'type' 	: 'ui.layer.shape.rectangle',
		
		'x'		: 300,
		'y'		: 100,
		'width' : 100,
		'height': 100,
		
		'fill' : true,
		
		'drag' : true,
		
		'color' : "#fff",
		
		'visible' : true
	},
	
	'rect3' :
	{
		'type' 	: 'ui.layer.shape.rectangle',
		
		'x'		: 450,
		'y'		: 150,
		'width' : 100,
		'height' : 300,
		
		'fill' : true,
		
		'rotate' : 0,
		'rotateX': 50,
		'rotateY': 50,
		
		'color' : "#ff8f7d",
		
		'effect' : 'slideIn',
		'visible': true
	},
}
