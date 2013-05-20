var lib = {};

require('./lib/Math')(lib);
require('./lib/Geodesic')(lib);
require('./lib/GeodesicLine')(lib);
require('./lib/PolygonArea')(lib);
require('./lib/DMS')(lib);
require('./lib/Interface')(lib);

module.exports = lib;