/**
 * Louis Drotos
 * April 13, 2015
 * 
 * This file contains code that is used to initialize the controls
 * on the pane pane and handle their functionality.
 */

/**
 * @function Initializes the control pane widgets once the document
 * is ready.
 */
$(function() { 
	
	var objIncidentBtn,
	objQueryBtn,
	objIncidentBtnLabel,
	objQueryBtnLabel;

	// Initializes the widgets on the control pane 
	$( "#clearButton" ).button();
	$( "#radioBtns" ).buttonset();
	
	// Gets references to the check boxes
	objIncidentBtn = $("#btn-incident");
	objQueryBtn = $("#btn-query");
	objIncidentBtnLabel = $( "#btn-incident-label" )
	objQueryBtnLabel = $( "#btn-query-label" )
	
	// Ensures the check boxes are unchecked
	objIncidentBtn.prop("checked", false);
	objIncidentBtn.removeClass( "ui-state-active" ).addClass( "ui-state-default" );
	objIncidentBtnLabel.removeClass( "ui-state-active" ).addClass( "ui-state-default" );
	
	objQueryBtn.prop("checked", false);
	objQueryBtn.removeClass( "ui-state-active" ).addClass( "ui-state-default" );
	objQueryBtnLabel.removeClass( "ui-state-active" ).addClass( "ui-state-default" );
	
	// Wires the clear button click event
	$( "#clearButton" ).click(function() {

		// Un-selects each station
		$.each(objGlobalVars.arrStations, function( index, value ) {
			  value.toggleSelection(false);
		});
		
		// Removes the incident marker from the map
		var marker = objGlobalVars.objIncidentLoc;
		if (marker instanceof L.Marker) {
			objGlobalVars.objMap.removeLayer(marker);
		}
		objGlobalVars.objIncidentLoc = {};
	});
	
	// Code to handle the clicking of the incident button
	objIncidentBtn.click(function() {
	
		var boolQueryPaneVis,
		intWaitTime;
		
		// Determine if query pane is visible
		boolQueryPaneVis = $( "#queryPane" ).is( ":visible" );
		
		if (boolQueryPaneVis === true) {
			
			// Hides the query pane
			$( "#queryPane" ).toggle({
				effect: "slide",
				easing: "linear",
				duration: 300
			});
			
			intWaitTime = 300;
			objQueryBtn.prop('checked', false);
			objQueryBtnLabel.removeClass( 'ui-state-active' );
		}
		else {
			intWaitTime = 0;
		}
		
		setTimeout(function(){
			
			// Show the incident pane
			$( "#incident-pane" ).toggle({
				effect: "slide",
				easing: "linear",
				duration: 130
			});
		},intWaitTime);
	})
	
	// Code to handle the clicking of the query button
	objQueryBtn.click(function() {
		
		var boolIncidentPaneVis,
		intWaitTime;
		
		// Determine if incident pane is visible
		var boolIncidentPaneVis = $( "#incident-pane" ).is( ":visible" );
		
		if (boolIncidentPaneVis === true) {
			
			// Hides the incident pane
			$( "#incident-pane" ).toggle({
				effect: "slide",
				easing: "linear",
				duration: 130
			});
			
			intWaitTime = 130;
			objIncidentBtn.prop('checked', false);
			objIncidentBtnLabel.removeClass( 'ui-state-active' );
		}
		else {
			intWaitTime = 0;
		}
		
		setTimeout(function(){
			
			// Show the query pane
			$( "#queryPane" ).toggle({
				effect: "slide",
				easing: "linear",
				duration: 300
			});
		}, intWaitTime);
	});
});
	
	