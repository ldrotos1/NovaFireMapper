/**
 * Louis Drotos
 * May 15, 2015
 * 
 * This file contains code that is used to initialize the incident
 * pane controls and its functionality.
 */

/**
 * @function Initializes the incident pane widgets once the document
 * is ready. 
 */
$(function() {
	
	// Inits the alarm count spinner
	$( "#alarm-count" ).spinner({
		  min: 1,
		  max: 6
	}).spinner("value", 1).width(20);
	
	// Inits the buttons
	$( "#btn-fire" ).button({
		  text: false
	});
	$( "#btn-response" ).button();
	
	// Aligns the controls
	alignControls();
	$( "#processing" ).toggle();
	//setInitPaneHeight();
	
	// Sets the pane to be hidden.
	$( "#incident-pane" ).hide();
	
	// Wires the simulate response button click event
	$( "#btn-response" ).click(function() {

		// Displays the processing message
		startProcessing();
		
	});
	
	// Wires fire button click event
	$( "#btn-fire" ).click(function() {
		  
		var objMap = objGlobalVars.objMap;
		
		$( "#map" ).css( 'cursor', 'crosshair' );
		
		map.once('click', function(e) {        
	        
			var loc,
	        newMarker,
	        oldMarker;
	        
			// Creates the incident marker
	        loc = e.latlng;
	        newMarker = L.marker(loc, {
	        	icon: L.icon({
	    		    iconUrl: 'css/images/incident.png',
	    		    iconSize: [20, 20],
	    		    iconAnchor: [10, 10]
	    		})	
	        });
	        objMap.addLayer(newMarker);
	        
	        // Removes the old incident marker
	        oldMarker = objGlobalVars.objIncidentLoc;
	        if(oldMarker instanceof L.Marker) {
	        	objMap.removeLayer(oldMarker);
	        }
	        
	        objGlobalVars.objIncidentLoc = newMarker;
	        $( "#map" ).css( 'cursor', '' );     
	    });  
	});
	
	/**
	 * @function Creates the incident icon and stores it as 
	 * a global variable.
	 */
	function createIncidentIcon(){
		var icon = L.icon({
		    iconUrl: 'css/images/incident.png',
		    iconSize: [20, 20],
		    iconAnchor: [10, 10]
		});
		
		// Adds the icon to the global object
		objGlobalVars.objIncidentIcon = icon;
	}
	
	/**
	 * @function Vertically aligns the labels for the alarm
	 * number and fire location controls 
	 */
	function alignControls() {
		
		var strAlarmDivHeight,
		strFireLocDivHeight;
		
		// Gets the containing heights of the DIVs
		strFireLocDivHeight = $( "#fire-loc-div" ).css( "height" );
		strAlarmDivHeight = $( "#alarm-div" ).css( "height" );

		// Sets line height equal to containing DIVs
		$( "#alarm-label" ).css( "line-height", strAlarmDivHeight );
		$( "#fire-loc-label" ).css( "line-height", strFireLocDivHeight );		
	}
	
	/**
	 * @function Adjusts the state of the incident pane to indicate
	 * that the application is computing the incident response  
	 */
	function startProcessing() {
		
		var objInterval,
		objProcessingTag,
		arrValues = ["Processing .", "Processing . .", "Processing . . ."],
		intArrIndex = 0;
		
		// Disables the incident pane controls
		$( '#alarm-count' ).spinner( "disable" );
		$( '#btn-fire' ).button( "disable" );
		$( '#btn-response' ).button( "disable" );
		
		// Displays the processing message
		objProcessingTag = $( "#processing" );
		objProcessingTag.toggle( "slow" );
		
		// Animates the processing message
		objInterval = setInterval(function(){
			
			objProcessingTag.text( arrValues[intArrIndex] );
			if ( intArrIndex == arrValues.length - 1 ) {
				intArrIndex = 0;
			}
			else {
				intArrIndex++;
			}
		}, 700);
		
		return objInterval;
	}
	
	/**
	 * @function Adjusts the state of the incident pane so that
	 * it is not in a processing state.
	 */
	function endProcessing(objInterval) {
		
		// Enables the incident pane controls
		$( '#alarm-count' ).spinner( "enable" );
		$( '#btn-fire' ).button( "enable" );
		$( '#btn-response' ).button( "enable" );
		
		// Hides the processing message
		$( "#processing" ).toggle( "slow" );
		clearInterval(objInterval);
	}
});




