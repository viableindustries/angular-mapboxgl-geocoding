(function() {

  "use strict";

  angular.module("AngularMapboxGLGeocoding")
    .service("AngularMapboxGLGeocodingService", ['$http', 'AngularMapboxGLSettings', function($http, AngularMapboxGLSettings) {
        return {

          /**
           * Retrieve a list of possible geocoded address from the Mapbox Geocoding
           * API, based on user input.
           *
           * @param (string) requestedLocation
           *    A simple string containing the information you wish to check
           *    against the Mapbox Geocoding API
           *
           * @return (object) featureCollection
           *    A valid GeoJSON Feature Collection containing a list of matched
           *    addresses and their associated geographic information
           *
           * @see https://www.mapbox.com/api-documentation/#geocoding
           *
           */
          forward: function(requestedLocation) {

            //
            // Check to make sure that the string is not empty prior to submitting
            // it to the Mapbox Geocoding API
            //
            if (!requestedLocation) {
              return;
            }

            //
            // Created a valid Mapbox Geocoding API compatible URL
            //
            var mapboxGeocodingAPI = AngularMapboxGLSettings.geocodingUrl.concat(requestedLocation, '.json');

            //
            // Send a GET request to the Mapbox Geocoding API containing valid user
            // input
            //
            var promise = $http.get(mapboxGeocodingAPI, {
              params: {
                'callback': 'JSON_CALLBACK',
                'access_token': AngularMapboxGLSettings.access_token
              }
            })
              .success(function(featureCollection) {
                return featureCollection;
              })
              .error(function(data) {
                console.error('Mapbox Geocoding API could not return any results based on your input', data);
              });

            //
            // Always return Requests in angular.services as a `promise`
            //
            return promise;
          },

          /**
           * Retrieve a list of possible addresses from the Mapbox Geocoding
           * API, based on user input.
           *
           * @param (array) requestedCoordinates
           *    A two value array containing the longitude and latitude respectively
           *
           *    Example:
           *    [
           *       '<LONGITUDE>',
           *       '<LATITUDE>',
           *    ]
           *
           * @return (object) featureCollection
           *    A valid GeoJSON Feature Collection containing a list of matched
           *    addresses and their associated geographic information
           *
           * @see https://www.mapbox.com/api-documentation/#geocoding
           *
           */
          reverse: function(requestedCoordinates) {

            //
            // Check to make sure that the string is not empty prior to submitting
            // it to the Mapbox Geocoding API
            //
            if (!requestedCoordinates) {
              return;
            }

            //
            // Created a valid Mapbox Geocoding API compatible URL
            //
            var mapboxGeocodingAPI = AngularMapboxGLSettings.geocodingUrl.concat(requestedCoordinates[0], ',', requestedCoordinates[1], '.json');

            //
            // Send a GET request to the Mapbox Geocoding API containing valid user
            // input
            //
            var promise = $http.get(mapboxGeocodingAPI, {
              params: {
                'callback': 'JSON_CALLBACK',
                'access_token': AngularMapboxGLSettings.access_token
              }
            })
              .success(function(featureCollection) {
                //
                // Return the valid GeoJSON FeatureCollection sent by Mapbox to
                // the module requesting the data with this Service
                //
                return featureCollection;
              })
              .error(function(data) {
                console.error('Mapbox Geocoding API could not return any results based on your input', data);
              });

            //
            // Always return Requests in angular.services as a `promise`
            //
            return promise;
          },

          /**
           * Retrieve a list of possible geocoded address from the Mapbox Geocoding
           * API, based on user input.
           *
           * @param (array) requestedQueries
           *    An array of up to 50 queries to perform. Each individual query
           *    should be a simple string containing the information you wish to
           *    check against the Mapbox Geocoding API
           *
           * @return (object) featureCollection
           *    A valid GeoJSON Feature Collection containing a list of matched
           *    addresses and their associated geographic information
           *
           * @see https://www.mapbox.com/api-documentation/#geocoding
           *
           */
          batch: function(requestedQueries) {
            console.log('Mapbox Geocoding Batch Geocoding not implemented, see https://www.mapbox.com/api-documentation/#geocoding for more information.');
          }
        };

    }]);

});
