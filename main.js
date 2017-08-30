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

          var vehicle = "<div class='vehicle col-lg-4 col-md-6 col-sm-12 col-xs-12' id='"+make+"'>";
              vehicle += "<div class='image'><img src="+ image +" class='img-responsive'></div>";
              vehicle += "<h1 class='make'>" + makeUppercase + "</h1>";
              vehicle += "<span class='equip'>"+ equipment +"</span>";
              vehicle += "<p class='model'>" + "<b> Model : </b>" + model + "</p>";
              vehicle += "<p class='trim'>" + "<b> Trim : </b>" + trim + "</p>";
              vehicle += "<p class='year'>" + "<b> Year : </b>" + year + "</p>";
              vehicle += "<button class='btn btn-primary' data-toggle='modal' data-target='#myModal'>Show Details</button>";
              vehicle += "</div>";
          var optVehicle = "<option value='"+make+"'>"+make+"</option>";

          $(".panel").append(vehicle);
          $(".dropdown").append(optVehicle);
        }
    }

    /* On keyup Search */
    $("#myInput").on("keyup", function(){
      var input, filter, vehicle, make;
      input   = $(this).val();
      filter  = input.toUpperCase();
      vehicle = $(".vehicle");

      for(var x = 0; x < vehicle.length; x++){
        make = vehicle[x];
        var h1 = $(make).find("h1").text();
        if(h1.indexOf(filter) > -1){
          $(make).css("display","");
        }else{
          $(make).css("display","none");
        }
      }
    });

    /* Dropdown Search */
    $(".dropdown").on("change", function(){
      var selected = $(this).val();
      $(".vehicle:not('#"+ selected +"')").hide();
      $(".vehicle#"+selected).show();
      if($(this).val() == "default"){
        $(".vehicle").removeAttr('style');
      }

    });







});
