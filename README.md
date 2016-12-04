
Interactive Elections Map
Leaflet NouiSlider Canada Elections Map


<a href="http://greggsmuller.com/gis/">Demo</a>

![alt tag](https://raw.githubusercontent.com/Great-Northern-Cartography-Co/Leaflet-NouiSlider-Canada-Elections-Map/master/img/screenshot.jpg)

Installation

Start a webserver in the app folder. For example:

For python3

$ python -m http.server 1333
For older versions of python

$ python -m SimpleHTTPServer 1333
visit http://localhost:1333


Development
The map is based on <a href="http://leafletjs.com/">Leaflet 1.02</a> and election data is in <a href="http://geojson.org/">geojson</a>

Data
Electoral Data was and compiled from lab-deliminated spreadsheets when available and by poll-by-poll data when necesary from <a href="http://www.elections.ca/content.aspx?section=res&dir=rep/off/38gedata&document=byed&lang=e">Elections.ca</a>

UI
These libraries were used for UI
<a href="http://jquery.com/">jQuery</a>
<a href="https://refreshless.com/nouislider/">noUiSlider</a>

Inspiration
<a href="https://github.com/berlinermorgenpost/mietkarte">mietkarte</a>
<a href="http://gis.stackexchange.com/users/56906/nathansnider">nathansnider</a>

License
The MIT License (MIT)

Copyright (c) 2016 Great Northern Cartography Co.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
