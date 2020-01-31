import Prism from 'prismjs';
import './css/style.scss';
require.context('./images', false, /\.(png|jpe?g|svg|gif)$/); // Import all images

document.getElementById('revealexpress').addEventListener('loaded', function(event) {

  Prism.highlightAll();

  trends.embed.renderExploreWidgetTo(document.getElementById("trends"), "TIMESERIES", {"comparisonItem":[{"keyword":"react","geo":"","time":"today 5-y"},{"keyword":"angular","geo":"","time":"today 5-y"},{"keyword":"vuejs","geo":"","time":"today 5-y"}],"category":0,"property":""},{"exploreQuery":"date=today%205-y&q=react,angular,vuejs","guestPath":"https://trends.google.com:443/trends/embed/"});

});
