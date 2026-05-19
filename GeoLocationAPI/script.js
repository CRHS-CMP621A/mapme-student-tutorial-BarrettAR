navigator.geolocation.getCurrentPosition(
  function (position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coords = [latitude, longitude];

    var map = L.map("map").setView(coords, 13);

    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker(coords)
      .addTo(map)
      .bindPopup(
        "<b>Location Name</b><br><img src='alexjones-alex-jones-jew.gif' width='200' height ='150'>"
      )
      .openPopup();

    console.log(latitude, longitude);
    console.log("https://www.google.com/maps/@" + latitude + "," + longitude);
  },
  function () {
    alert("Could not get position.");
  }
);
