map.on('load', function () {
    console.log("Style Loaded:", map.getStyle());
  
    fetch('night_data_type.geojson')
      .then(response => response.json())
      .then(data => {
        console.log("GeoJSON Data Loaded:", data);
      })
      .catch(error => console.error('Error loading GeoJSON:', error));
  });
  