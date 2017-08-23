$(document).ready(function(){
  $.getJSON('test.json', function(data){
    for(var x in data){
      var make = data[x][0].make;
      var make_list = "<div class='vehicle'>" + "<h2>"+ make +"</h2>" + "</div>";
      $('.panel').append(make_list);
    }
  })


});
