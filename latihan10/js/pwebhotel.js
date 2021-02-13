const endpoint_url = 'https://51018021.p-web.click/praktikum8/api';

document.addEventListener("DOMContentLoaded", function() {
  getRoomRate();
});

function getRoomRate() {
  fetch(endpoint_url + "/rooms/roomcountbytype")
    .then(status)
    .then(json)
    .then(function(data) {
      var tb_header = `
      <table id="tb_roomrate">
        <thead>
        <tr>
          <th>Room Type</th>
          <th>Room Rate</th>
          <th>Available</th>
        </tr>
        </thead>
        <tbody></tbody>
      </table>
`     ;
  $("#dttable").html( tb_header );
  $("#tb_title").html( "Room Rate" );
  $('#tb_roomrate').DataTable({
    "data": data.rooms,
    "columns": [
                  { "data": "rtype" },
                  { "data": "rate" },
                  { "data": "jumlah_kamar" }
                ]
              });
  $('select').formSelect();
  })
  .catch(error);
}

function getRoomList() {
  fetch(endpoint_url + "/rooms/roomlist1")
    .then(status)
    .then(json)
    .then(function(data) {
      var tb_header = `
      <table id="tb_roomrate">
        <thead>
          <tr>
            <th>Room</th>
            <th>Type</th>
            <th>View</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      `;
      $("#dttable").html( tb_header );
      $("#tb_title").html( "Rooms" );
      $('#tb_roomrate').DataTable({
        "data": data.rooms,
        "columns": [
                    { "data": "room" },
                    { "data": "rtype" },
                    { "data": "dview" },
                    { "data": "vrate" }
                  ]
      });
      $('select').formSelect();
})
.catch(error);
}

function getGuestList() {
  fetch(endpoint_url + "/guests/guestlist1")
    .then(status)
    .then(json)
    .then(function(data) {
      var tb_header = `
      <table id="tb_roomrate">
        <thead>
          <tr>
            <th>Guest</th>
            <th>From</th>
            <th>Room</th>
            <th>Check-In</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      `;
      $("#dttable").html( tb_header );
      $("#tb_title").html( "Guests" );
      $('#tb_roomrate').DataTable({
        "data": data.guests,
        "columns": [
                    { "data": "nama" },
                    { "data": "Country" },
                    { "data": "room" },
                    { "data": "date_in" }
                  ]
      });
      $('select').formSelect();
})
.catch(error);
}

function getMemberList() {
  fetch(endpoint_url + "/members/memberlist1")
    .then(status)
    .then(json)
    .then(function(data) {
      var tb_header = `
      <table id="tb_roomrate">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>From</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      `;
      $("#dttable").html( tb_header );
      $("#tb_title").html( "Members" );
      $('#tb_roomrate').DataTable({
        "data": data.members,
        "columns": [
                    { "data": "member_ID" },
                    { "data": "nama" },
                    { "data": "Country" },
                    { "data": "telepon" }
                  ]
      });
      $('select').formSelect();
})
.catch(error);
}
