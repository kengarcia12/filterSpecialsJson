$(document).ready(function(){

  $.getJSON('test.json', function(data){

    for(var x in data){
      var make = data[x][0].make;
      var image = data[x][0].images;

      var vehicle = "<div class='vehicle col-lg-12 col-md-6'>";
          vehicle += "<div class='image'><img src="+ image +" class='img-responsive'></div>";
          vehicle += "<h1>" + make + "</h1>";
          vehicle += '<button class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Show Details</button>';
          vehicle += '<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">';
          vehicle += '<div class="modal-dialog modal-lg"><div class="modal-content"><div class="img-container"></div><div class="modal_vehicle">test</div></div></div></div></div>';
          vehicle += '</div>';

      $(".panel").append(vehicle);


    }
  });


});
