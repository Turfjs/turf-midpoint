var test = require('tape')
var midpoint = require('./')

test('midpoint', function(t){
  var line = t.linestring([[0,0], [10,0]])
  var pt1 = t.point(0,0)
  var pt2 = t.point(10, 0)
  var expectedMidPoint = t.point(5, 0)
  var expectedMidPoint = midpoint(pt1, pt2, function(err, midpoint){
  t.deepEqual(midpoint, expectedMidPoint, 'should return the halfway point of a horizontal line starting off 0,0')

  var line = t.linestring([[0,0], [0,10]])
  var pt1 = t.point(0,0)
  var pt2 = t.point(0,10)
  var expectedMidPoint = t.point(0, 5)
  var expectedMidPoint = midpoint(pt1, pt2, function(err, midpoint){
  t.deepEqual(midpoint, expectedMidPoint, 'should return the halfway point of a vertical line starting off 0,0')

  var line = t.linestring([[1,1], [11,11]])
  var pt1 = t.point(1,1)
  var pt2 = t.point(11,11)
  var expectedMidPoint = t.point(6, 6)
  t.midpoint(pt1, pt2, function(err, midpoint){
  t.deepEqual(midpoint, expectedMidPoint, 'should return the halfway point of a diagonal line starting off 1,1')

  t.end()
})