//const cv = require('express')
const cv = require('opencv4nodejs');
const img = cv.imread('./1.png');
console.log(img.rows, img.cols);
