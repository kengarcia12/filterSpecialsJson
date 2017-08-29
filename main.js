$(document).ready(function(){

    $.getJSON('test.json', function(data){
      display(data);
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

    function display(data){
        for(var x in data){
          var make = data[x][0].make;
          var makeUppercase = make.toUpperCase();
          var image = data[x][0].images;
          var equipment = data[x][0].equipment;
          var model = data[x][0].model;
          var trim = data[x][0].trim;
          var year = data[x][0].year;

          var vehicle = "<div class='vehicle col-lg-4 col-md-6 col-sm-12 col-xs-12'>";
              vehicle += "<div class='image'><img src="+ image +" class='img-responsive'></div>";
              vehicle += "<h1 class='make'>" + makeUppercase + "</h1>";
              vehicle += "<span class='equip'>"+ equipment +"</span>";
              vehicle += "<p class='model'>" + "<b> Model : </b>" + model + "</p>";
              vehicle += "<p class='trim'>" + "<b> Trim : </b>" + trim + "</p>";
              vehicle += "<p class='year'>" + "<b> Year : </b>" + year + "</p>";
              vehicle += "<button class='btn btn-primary' data-toggle='modal' data-target='#myModal'>Show Details</button>";
              vehicle += "</div>";
          $(".panel").append(vehicle);
        }
    }
    $("#myInput").on("keyup", function(){
      var input, filter, vehicle, vehicle_elem, make;
      input = $(this).val();
      filter = input.toUpperCase();
      vehicle_elem = $(".vehicle");

      for (var i = 0; i < vehicle_elem.length; i++) {
         vehicle = vehicle_elem[i];
         make = $(vehicle).find("h1.make").text();
         make.indexOf(filter) > -1 ? $(vehicle).show() : $(vehicle).hide();
      }
    });



});
