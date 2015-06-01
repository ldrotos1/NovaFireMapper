<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ page import="java.util.List" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />
		<link rel="stylesheet" type="text/css" href="css/leaflet.label.css">
		<link rel="stylesheet" type="text/css" href="css/layout.css">
		<link rel="stylesheet" type="text/css" href="css/jquery-ui.css">
		<link rel="stylesheet" type="text/css" href="css/incident-pane.css">
		<link rel="stylesheet" type="text/css" href="css/queryPane.css">
		<link rel="stylesheet" type="text/css" href="css/controlPane.css">
		<link rel="stylesheet" type="text/css" href="css/paneDesign.css">
		<link rel="stylesheet" type="text/css" href="css/station-label.css">
		<link rel="stylesheet" type="text/css" href="css/station-info-dialog.css">
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
		<script type="text/javascript" src="javascript/jquery-ui.min.js"></script>
		<script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>
		<script src="javascript/station-info-dialog.js" type="text/javascript"></script>
		<script src="javascript/leaflet.label.js" type="text/javascript"></script>
		<script src="javascript/globalVars.js" type="text/javascript"></script>
		<script src="javascript/station.js" type="text/javascript"></script>
		<script src="javascript/map.js" type="text/javascript"></script>
		<script src="javascript/query-pane.js" type="text/javascript"></script>
		<script src="javascript/query.js" type="text/javascript"></script>
		<script src="javascript/incident-pane.js" type="text/javascript"></script>
		<script src="javascript/control-pane.js" type="text/javascript"></script>
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<title>Northern Virginia Fire Department Mapper</title>
	</head>

	<body>
		<header class="ui-widget-header">
			<h1 id="title">Northern Virginia Fire Department Mapper</h1>
		</header>
		
		<div id='wrapper'>
			<div id='map'></div>
			
			<div id='queryPane' class='pane'>
				<label id='queryLabel' class='paneMainLabel'>Query</label>
					
				<div id='queryControls'>
						
					<div id='unitDiv'>
						<div class='labelDiv'>
							<label class='query-sub-label'>Unit Type:</label><br>
						</div>	
						<select id="unitCombo">
							<option selected="selected">None Selected</option>
							<c:forEach items="${applicationScope.unitTypes}" var="dept" >
								<option>${dept}</option>
							</c:forEach>
						</select>
					</div>
						
					<div id='deptDiv'>
						<div class='labelDiv'>
							<label class='query-sub-label'>Department:</label>
						</div>	
						<select id="deptCombo">
							<option selected="selected">None Selected</option>
							<c:forEach items="${applicationScope.departments}" var="dept" >
								<option>${dept}</option>
							</c:forEach>
						</select>
					</div>
						
					<div id='stationDiv'>
						<div class='labelDiv'>
							<label class='query-sub-label'>Station Name:</label>
						</div>
						<input id="stationInput">
					</div>
						
					<div id='searchBtnDiv' class="ui-widget">
						<input id="searchBtn" type="submit" value="Search">
					</div>
				</div>
			</div>
		
			<div id='incident-pane' class='pane'>
				<label id='incident-label' class='paneMainLabel'>Incident Response</label>
				<div id='alarm-div'>
					<label id="alarm-label" class='incident-sub-label' for="alarm-count">Number of Alarms :</label>
  					<input id="alarm-count" name="alarms">
				</div>
				<div id='fire-loc-div'>
					<label id='fire-loc-label' class='incident-sub-label' for='btn-fire'>Fire Location :</label>
					<button id='btn-fire'></button>
				</div>
				<div>
					<button id='btn-response'>Simulate Response</button>
				</div>
				<p id="processing">Processing . . .</p>
			</div>
		
			<div id='controlPane' class='pane'>
				<span id='radioBtns'>
					<input type="checkbox" id="btn-query">
					<label id='btn-query-label' for="btn-query">Query</label>
					<input type="checkbox" id="btn-incident">
					<label id='btn-incident-label' for="btn-incident">Incident</label>
				</span>
				<button id="clearButton" >Clear</button>
			</div>
			
			<div id="stationInfo" title="Station Information">
  				<div>
  					<div id="station-basic-info">
  						<span class="basicInfo"></span><br>
  						<span class="basicInfo"></span>
  					</div>
  					<div id="station-address">
  						<span class="address"></span><br>
  						<span class="address"></span>
  					</div>
  					<div id="station-contact">
  						<span class="contactInfo"></span><br>
  						<span class="contactInfo"></span>
  					</div>
  				</div>
  				<div id="tableContainer">
  					<span id="tableTitle">Assigned Units</span>
  					<table id="unitTable">
  						<tr id="unitTableHeader">
  							<th>Unit Designator</th>
  							<th>Unit Type</th>
  						</tr>
  					</table>
  				</div>
			</div>
		</div>
	</body>
</html>