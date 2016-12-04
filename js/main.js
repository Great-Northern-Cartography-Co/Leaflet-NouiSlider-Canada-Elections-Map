$(document).ready(function(){

});
 
 /******************************** 
    //  
    //    init variables
    //
    *********************************/
 
   var featureSupport = {
      // only smartphones
      isSmartphone: /android.*mobile|mobile.*android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
      // tablets and smartphones
      isMobile: typeof window.orientation !== 'undefined'
    },
 
	 ui = {
     $tooltip: $('#tooltip'),
	 $tooltipPartyWin: $('#tooltip').find('.party-win'),
	 $tooltipDistrict: $('#tooltip').find('.district'),
     $tooltipvotes: $('#tooltip').find('.votes'),
     $tooltipheadline: $('#tooltip').find('.headline'),
     $tooltipwinner: $('#tooltip').find('.winner'),
	 $tooltipwinner2: $('#tooltip').find('.winner2'),
     $tooltipsecond: $('#tooltip').find('.second'),
     $tooltipthird: $('#tooltip').find('.third'),
     $tooltipfourth: $('#tooltip').find('.fourth'),
     $tooltipfifth: $('#tooltip').find('.fifth'),
     $tooltipsixth: $('#tooltip').find('.sixth'),
	 $tooltipseventh: $('#tooltip').find('.seventh'),
     $tooltipeight: $('#tooltip').find('.eighth'),
     $tooltipninth: $('#tooltip').find('.ninth'),
	 $tooltiptenth: $('#tooltip').find('.tenth'),
     $tooltipbreak: $('#tooltip').find('.break'),
   },

   map = {},
   layer = {};
   

 /******************************** 

  //  
  //   initialize slider
  //
  *********************************/
var range = {
  'min': 2000,
  '20%': 2004,
  '40%': 2006,
  '60%': 2008,
  '80%': 2011,
  'max': 2015
};

 // Initializing noUiSlider to create slider
 noUiSlider.create(slider, {
   start: [2015],
 behaviour: 'tap',
  // connect: true,
   snap: true,
   orientation: 'vertical',
   step: 2.5,
   tooltips: [true],
   range: range,
   format: wNumb({
        decimals: 0,
        }),
   pips: { // Show a scale with the slider
		mode: 'values',
    values: [2000, 2004, 2006, 2008, 2011, 2015],
		density: 20,
	}
 });

 /******************************** 

  //  
  //   initial basemap / coord functions
  //
  *********************************/
 

 // initialize map
 var map = L.map('map', {
	  center: [59.60056, -99.450832],
      zoom: getZoomByWindowSize(),
      zoomControl: false,
  //    maxBounds: L.latLngBounds([78.8989, -2.4568], [32.8989, -153.0978]),
      minZoom: 2,
      maxZoom: 12
    });
	 
 loadAjax({url : 'data/labels.json', callback : addLabels});
   function loadAjax(params) {
    $.ajax({
      url: params.url,
      dataType: 'json'
    }).done(params.callback);
  }
  
  
    function getZoomByWindowSize() {
    var mapZoom = 4,
      screenWidth = window.innerWidth;

    if (featureSupport.isSmartphone || screenWidth < 700) {
      mapZoom = 1;
    } else if (screenWidth < 1100) {
      mapZoom = 2;
    } else if (screenWidth > 2000) {
      mapZoom = 3;
    }

    return mapZoom;
  }
  
   /******************************** 

  //  
  //   Add Labels
  //
  *********************************/
  
    // add labels that are stored in data/labels.json
  function addLabels(labels) {
    labels.forEach(function(label, i) {
      var myIcon = L.divIcon({
        className: 'map-label',
        html: label[0]
      });
      L.marker([label[1], label[2]], {
        icon: myIcon
      }).addTo(map);
    });
  }

 // set source for map tiles
 ATTR = '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
   '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a> | ' +
   '&copy; <a href="http://cartodb.com/attributions">CartoDB</a>';

 CDB_URL = 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png';

 // add tiles to map
 L.tileLayer(CDB_URL, {
   attribution: ATTR,
   opacity: .6
 }).addTo(map);

 /******************************** 

   //  
   //   Set poly colors / style
   //
  *********************************/

 // Function defining colors for different ranges of data
 function getColor(d) {
   return d == "Conservative" ? '#005DAA' : d == "Liberal" ? '#E60000' : d == "New Democratic" ? '#d33f00' : d == "Bloc Québécois" ? '#6FC2F4' : d == "Progressive Conservative" ? '#817bb2' : d == "Green" ? '#5B9761': d == "Canadian Alliance" ? '#216b68':
     '#808080';
 }

 function style(feature) {
   return {
     color: 'white',
     weight: 1,
     opacity: 1,
     fillOpacity: .77,
     fillColor: getColor(feature.properties.partyAbbre[0])
   };
 }

 /******************************** 

   //  
   //   Call json
   //
  *********************************/

 $.ajax({
   dataType: 'json',
   url: 'https://dl.dropbox.com/s/6zc2htmket1gbdx/fedrslts.geojson',
   success: function(data) {
     $(data.features).each(function(key, data) {
       function updateFeature(e) {
         if (!L.Browser.ie && !L.Browser.opera) {
           layer.bringToFront();
         }
      //  info.update(layer.feature.properties);
       }
	 

       /******************************** 

        //  
        //   Set UI events
        //
       *********************************/
       function zoomToFeature(e) {
         map.fitBounds(e.target.getBounds());
       }

       function onEachFeature(feature, layer) {
         layer.on({
           'mouseover': enterPolygon,
           'mouseout': leavePolygon,
           'mousemove': setTooltipPosistion,
           'click': zoomToFeature
         });
       }

       function enterPolygon(evt) {
         var layer = evt.target,
           testYear = layer.feature.properties.fedYear;

         // only update layer and tooltip if we have valid data  
         if (testYear > 1) {
           updateTooltip({
             layer: layer,
             evt: evt
           })

           layer.setStyle({
             'color': '#fff',
             'weight': 3,
             'opacity': 1,
           });
         }
       }

       // reset layer style if user leaves the polygon
       function leavePolygon(e) {
         var layer = e.target;
         ui.$tooltip.css('display', 'none');
         layer.setStyle({
           'color': '#fff',
           'weight': 1,
           'opacity': .55,
         });
       }
       // sets tooltip content and its position
       function updateTooltip(params) {
         var feature = params.layer.feature,
           properties = feature.properties;


/******************************** 

           //  
           //   Set tooltip content
           //
*********************************/
   ui.$tooltip.show();
   ui.$tooltipDistrict.html('<strong>' + properties.riding + '<strong>');

	ui.$tooltipwinner.html(properties.candidateF[0]  + " " + properties.candidateL[0] + " | " + properties.partyAbbre[0]+ " Party");
    ui.$tooltipwinner2.html ("Votes: " + properties.votes[0] + " | "  +properties.percentTot[0]+ "%");
var resString = "";

for (i=1; i < properties.candidateF.length; i++) {
	resString = resString + properties.candidateF[i] + " " + 
  properties.candidateL[i] + " | " + properties.partyAbbre[i] + " |  " +  "Votes: " + properties.votes[i] + " | "  +properties.percentTot[i]+ "%" + "<br>";
}

ui.$tooltipsecond.html(resString);
ui.$tooltipvotes.html('<small>' +"Turnout: "+ properties.turnout + '<small>');


         ui.$tooltip.css('border-left', ('4px solid ' + params.layer.options.fillColor));
         
         
         
         setTooltipPosistion(params.evt);
       }
       
       function setTooltipPosistion(evt) {
         var pos = evt.containerPoint;
         ui.$tooltip.css({
           top: (pos.y + 90 ) + 'px',
           left: (pos.x + 25 ) + 'px'
         });
       }

       var zips = L.geoJson(data, {
         onEachFeature: onEachFeature,
         style: style,
         filter: function(feature, layer) {
           return (feature.properties.fedYear == 2015);
         }
       });

       var group = L.featureGroup([zips]).addLayer(zips).addTo(map);


       /******************************** 

         //  
         //   UI Slider Settings
         //
        *********************************/

       var slider = document.getElementById("slider");

       $("#slider").click(function(event) {
         range = slider.noUiSlider.get();
    //    rangeMin = range.slice(0, 0);
    //   rangeMax = range.slice(1, 1);


         group.clearLayers();
         digital_zips = L.geoJson(data, {
           onEachFeature: onEachFeature,
           style: style,
           filter: function(feature, layer) {
             // this is what needs to be edited
             return (feature.properties.fedYear == range);

           }
         });
         group = L.featureGroup().addLayer(digital_zips);
         group.addTo(map);
       });
     });
   }
 })

/******************************** 

//  
//   Pic Slide Settings
//
*********************************/

		
function updatePicture() {
var image_path = '<img src="img/' + sliderOutput.innerHTML + '.jpg"/>';
//console.log(image_path);
var currentImage = slider.noUiSlider.get();
  $("#img").html(image_path);
}

var sliderOutput = document.getElementById('value-slider');

slider.noUiSlider.on('update', function(values, handle) {
  sliderOutput.innerHTML = values[handle];
  updatePicture();
});