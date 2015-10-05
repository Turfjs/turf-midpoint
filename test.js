var test = require('tape');
var midpoint = require('./');
var point = require('turf-point');

test('midpoint', function(t){
  var pt1 = point([0,0]);
  var pt2 = point([10, 0]);
  var expectedMidPoint = point([5, 0]);
  var actualMidPoint = midpoint(pt1, pt2);
  t.deepEqual(actualMidPoint, expectedMidPoint, 'should return the halfway point of a horizontal line starting off 0,0');

  var pt1 = point([0,0]);
  var pt2 = point([0,10]);
  var expectedMidPoint = point([0, 5]);
  var actualMidPoint = midpoint(pt1, pt2);
  t.deepEqual(actualMidPoint, expectedMidPoint, 'should return the halfway point of a vertical line starting off 0,0');

  var pt1 = point([1,1]);
  var pt2 = point([11,11]);
  var expectedMidPoint = point([6, 6]);
  var actualMidPoint = midpoint(pt1, pt2);
  t.deepEqual(actualMidPoint, expectedMidPoint, 'should return the halfway point of a diagonal line starting off 1,1');

  var pt1 = point([1,1]);
  var pt2 = point([11,11]);
  var expectedMidPoint = point([6, 6]);
  var actualMidPoint = midpoint(pt1, pt2);
  t.deepEqual(actualMidPoint, expectedMidPoint, 'should return the halfway point of a diagonal line starting off 1,1');

  var pt1 = {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [144.834823, -37.771257]
    }
  };
  var pt2 = {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [145.14244, -37.830937]
    }
  };
  var actualMidPoint = midpoint(pt1, pt2);
  var expectedMidPoint = {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          144.9886315,
          -37.801097
        ]
      },
      "properties": {}
   };
  t.deepEqual(actualMidPoint, expectedMidPoint, 'should return the halfway point shown in the README example.');

  t.end();
});
