// http://cs.selu.edu/~rbyrd/math/midpoint/
// ((x1+x2)/2), ((y1+y2)/2)
var point = require('turf-point');

/**
 * Takes two {@link Point} features and returns a Point midway between the two.
 *
 * @module turf/midpoint
 * @param {Point} pt1 - first point
 * @param {Point} pt2 - second point
 * @return {Point} a point between the two
 * @example
 * var pt1 = turf.point(0,0)
 * var pt2 = turf.point(10, 0)
 * var midpointed = turf.midpoint(pt1, pt2)
 * var features = turf.featurecollection([
 *  pt1, pt2, midpointed]);
 *
 * //=features
 */
module.exports = function(point1, point2) {
  if (point1 === null || point2 === null){
    throw new Error('Less than two points passed.');
  }

  var x1 = point1.geometry.coordinates[0];
  var x2 = point2.geometry.coordinates[0];
  var y1 = point1.geometry.coordinates[1];
  var y2 = point2.geometry.coordinates[1];

  var x3 = x1 + x2;
  var midX = x3/2;
  var y3 = y1 + y2;
  var midY = y3/2;

  var midpoint = point(midX, midY);

  return midpoint;
};
