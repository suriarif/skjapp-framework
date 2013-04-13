var framework = 
{
	'coreFiles' : 
	[
		'skjapp-framework/js/uiLayer.js',
		'skjapp-framework/js/uiPage.js',
		'skjapp-framework/js/deviceBlackBerry10.js'
	],
	
	'pluginFiles' : 
	[
		
	],
	
	// Keyboard Events
	'keyDown'		: [] ,
	'keyPress'		: [] ,
	'keyUp'			: [] ,
	
	// Mouse Events
	'mouseClick'	: [] ,
	'mouseDblClick'	: [] ,
	'mouseDown'		: [] ,
	'mouseUp'		: [] ,
	'mouseMove'		: [] ,
	'mouseOver'		: [] ,
	'mouseOut'		: [] ,

	// Touch Events
	'touchLayer'	: undefined,
	'touchLayerPart': undefined,
	
	// Gestures
	'gesture'  		: {} ,				// Gesture 

	'resourcesLoaded' : false,
	'drag' : false
}