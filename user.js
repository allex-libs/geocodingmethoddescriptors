module.exports = {
  geoCodeLatLng: [{
    title: 'Latitude-Longitude Object',
    type: 'object',
    properties: {
      latitude: {type: 'number'},
      longitude: {type: 'number'}
    }
  }],
  geoCodeAddressBrief: [{
    title: 'Address',
    type: 'string'
  }]
};
