$(document).ready(function(){

  $.getJSON('test.json', function(data){
    for(var x in data){
      var make = data[x][0].make;
      var image = data[x][0].images;
      var equipment = data[x][0].equipment;
      var model = data[x][0].model;
      var trim = data[x][0].trim;
      var year = data[x][0].year;

      var vehicle = "<div class='vehicle col-lg-4 col-md-6 col-sm-12 col-xs-12'>";
          vehicle += "<div class='image'><img src="+ image +" class='img-responsive'></div>";
          vehicle += "<h1 class='make'>" + make + "</h1>";
          vehicle += '<button class="btn btn-primary" data-toggle="modal" data-target="#myModal">Show Details</button>';

      $(".panel").append(vehicle);

    }

    $('.btn').click(function(){
      var vehicle_make  = $(this).siblings().text();
      var vehicle_image = $(this).siblings().html();


      $('.vehicle_make').append(vehicle_make);
      $('.vehicle_image').append(vehicle_image);

    });
    $('.modal-footer button, .close').click(function(){
      $('.vehicle_make').text('');
      $('.vehicle_image img').detach();
    });
  });

});
