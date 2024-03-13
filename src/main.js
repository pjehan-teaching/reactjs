import Prism from 'prismjs';
import './css/style.scss';

require.context('./images', false, /\.(png|jpe?g|svg|gif)$/); // Import all images

// Add script tag to load Google Trends embed_loader.js
const script = document.createElement('script');
script.src = 'https://ssl.gstatic.com/trends_nrtr/3620_RC01/embed_loader.js';
document.head.appendChild(script);

document.getElementById('revealexpress').addEventListener('loaded', function (event) {

  Prism.highlightAll();

  // Wait for script to be loaded
  script.onload = function () {
    window.trends.embed.renderExploreWidgetTo(document.getElementById("alternatives"), "TIMESERIES", {
      "comparisonItem": [
        {"keyword": "react", "geo": "", "time": "today 5-y"},
        {"keyword": "angular", "geo": "", "time": "today 5-y"},
        {"keyword": "vuejs", "geo": "", "time": "today 5-y"}
      ],
      "category": 0,
      "property": ""
    }, {
      "exploreQuery": "date=today%205-y&q=react,angular,vuejs",
      "guestPath": "https://trends.google.com:443/trends/embed/"
    });
  };

});
