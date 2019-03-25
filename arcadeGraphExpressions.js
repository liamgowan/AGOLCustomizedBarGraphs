/* Arcade expressions created by Liam Gowan, to be used for creating bar graphs within ArcGIS Online */
/* Please note that while this is a JavaScript file, these are Arcade expressions. The file is only JavaScript
   so that GitHub will colourize the expressions.*/

/* Step 2 - Value Text */ 
return Text($feature.LocalAvg)


/* Step 4 Width */
var value = $feature.LocalAvg
var from1 = 65
var to1 = 85
var from2=0
var to2=200
var width = (value - from1)/(to1-from1)*(to2-from2)+from2
return Text(round(width,0))

/* Step 5 - Text Location */
var value = $feature.LocalAvg
var from1 = 65
var to1 = 85
var from2=0
var to2=200
var width = (value - from1)/(to1-from1)*(to2-from2)+from2
return Text(round(width,0)/2)

/* Step 6 (Expression 1) - Text Location Modification */
var value = $feature.LocalAvg
var from1 = 65
var to1 = 85
var from2=0
var to2=200
var width = (value - from1)/(to1-from1)*(to2-from2)+from2
if(width<=10)
    return Text(round(width,0)/2 + 30)
else
    return Text(round(width,0)/2)
	
	
/* Step 6 (Expression 2) - Text Colour */
var value = $feature.LocalAvg
var from1 = 65
var to1 = 85
var from2=0
var to2=200
var width = (value - from1)/(to1-from1)*(to2-from2)+from2
if(width<=10)
    return "color: white;"
else
    return ""