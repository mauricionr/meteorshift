(function(){/*globals Meteor, Points */

Meteor.startup(function () {
  'use strict';
  // code to run on server at startup
  var somePoints, i;
  
  if (Points.find().count() === 0) {
    somePoints = [
      {
        series: "Phoenix",
        values: [
          {timestamp: new Date(2014, 8, 8, 12), temperature: 92},
          {timestamp: new Date(2014, 8, 9, 12), temperature: 95},
          {timestamp: new Date(2014, 8, 10, 12), temperature: 94},
          {timestamp: new Date(2014, 8, 11, 12), temperature: 99},
          {timestamp: new Date(2014, 8, 12, 12), temperature: 103},
          {timestamp: new Date(2014, 8, 13, 12), temperature: 101},
          {timestamp: new Date(2014, 8, 14, 12), temperature: 101},
          {timestamp: new Date(2014, 8, 15, 12), temperature: 103},
          {timestamp: new Date(2014, 8, 16, 12), temperature: 101},
          {timestamp: new Date(2014, 8, 17, 12), temperature: 103}
        ]
      },
      {
        series: "Huntington Beach",
        values: [
          {timestamp: new Date(2014, 8, 8, 12), temperature: 80},
          {timestamp: new Date(2014, 8, 9, 12), temperature: 80},
          {timestamp: new Date(2014, 8, 10, 12), temperature: 82},
          {timestamp: new Date(2014, 8, 11, 12), temperature: 84},
          {timestamp: new Date(2014, 8, 12, 12), temperature: 85},
          {timestamp: new Date(2014, 8, 13, 12), temperature: 88},
          {timestamp: new Date(2014, 8, 14, 12), temperature: 89},
          {timestamp: new Date(2014, 8, 15, 12), temperature: 90},
          {timestamp: new Date(2014, 8, 16, 12), temperature: 91},
          {timestamp: new Date(2014, 8, 17, 12), temperature: 89}
        ]
      }
    ];
    for (i = 0; i < somePoints.length; i = i + 1) {
      Points.insert(somePoints[i]);
    }
  }
});

})();
