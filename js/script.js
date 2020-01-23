$( document ).ready(function(){
const currentDay = moment().format('dddd, MMMM Do YYYY');
$('#currentDay').html(currentDay);



$(".9amsave").on('click', function(){
  var amText = $(".9am").val();
  localStorage.setItem("9amSlot", amText);

});

$(textarea).forEach(function(){
  var time = $(textarea).attr("data-time").val();
  if(time === currentTime) {
    $(textarea).attr("class", "present");
  }
  else if(time > currentTime){
    $(textarea).attr("class", "future");
  
  } 
  else {
    $(textarea).attr("class", "past");
  }


});








});





