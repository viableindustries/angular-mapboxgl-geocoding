(function() {
  'use strict';

/**
 * @ngdoc service
 * @name AngularMapboxGLGeocoding.AngularMapboxGLSettings
 * @description
 */
angular.module('AngularMapboxGLGeocoding')
  .constant('AngularMapboxGLSettings', {
    geocodingUrl: 'https://api.mapbox.com/geocoding/v5/mapbox.places/',
    access_token: 'pk.eyJ1IjoiZGV2ZWxvcGVkc2ltcGxlIiwiYSI6IlZGVXhnM3MifQ.Q4wmA49ggy9i1rLr8-Mc-w'
  });

}());
