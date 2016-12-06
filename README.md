<p><br /><span style="font-size: medium;"><strong>Interactive Elections Map</strong></span><br /><span style="font-size: medium;">Leaflet NouiSlider Canada Elections Map</span></p>
<p>This project was developed as a method for effective visual display of large datasets, filtering a single polygon dataset attribute with Leaflet controlled by the user through the NoUiSlider. This example uses geoJSON data and at 5.5MB initial load is a bit slow. In hindsight I`d recommend using <a href="https://github.com/topojson/topojson">TopoJSON</a> format for anything over 2MB.&nbsp;</p> 
<p><br /><a href="http://greggsmuller.com/gis/">Demo</a></p>
<p><img style="float: left;" title="Screenshot" src="https://raw.githubusercontent.com/Great-Northern-Cartography-Co/Leaflet-NouiSlider-Canada-Elections-Map/master/img/screenshot.jpg" alt="" width="800" height="525" /></p>
<p><strong>Installation<br /></strong>Start a webserver in the app folder. For example:</p>
<p>For python3</p>
<p>$ python -m http.server 1333<br />For older versions of python</p>
<p>$ python -m SimpleHTTPServer 1333<br />visit http://localhost:1333</p>
<p><br /><strong>Development</strong><br />The map is based on <a href="http://leafletjs.com">Leaflet 1.02</a>&nbsp;and election data is in <a href="http://geojson.org">geojson</a></p>
<p><strong>Data</strong><br />Electoral Data was and compiled from lab-deliminated spreadsheets when available and by poll-by-poll data when necesary from <a href="http://www.elections.ca/content.aspx?section=res&amp;dir=rep/off/38gedata&amp;document=byed&amp;lang=e">Elections.ca</a></p>
<p><strong>UI</strong><br />These libraries were used for UI<br /><a href="http://jquery.com/">jQuery</a><br /><a href="https://refreshless.com/nouislider/">noUiSlider</a></p>
<p><strong>Inspiration</strong><br /><a href="https://github.com/berlinermorgenpost/mietkarte">mietkarte</a><br /><a href="http://gis.stackexchange.com/users/56906/nathansnider">nathansnider</a></p>
<p><strong>License</strong><br />The MIT License (MIT)</p>
<p>Copyright (c) 2016 Great Northern Cartography Co.</p>
<p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>
<p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>
<p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
<p><strong>&nbsp;</strong></p>
