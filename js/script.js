const currDate = moment().format('dddd, MMMM Do YYYY');
$('#currentDay').html(currDate);

function getCurrentHour() {
    const dt = new Date();
    const hour = dt.getHours();
    return hour;
  }
  const currHour = getCurrentHour();


  //set colors for past, present, future hours.

  $( ".hours" ).each(function( index ) {
    console.log( index + ": " + $( this ).text() );
  });