$(document).ready(function() {
  $('#birth_date').datepicker({
    format: 'mm/dd/yyyy'
  }).on('changeDate', function(ev) {
    $("#c_age").val(calcAge(ev.date));
  });

  $('#d_date').datepicker({
    format: 'mm/dd/yyyy'
  }).on('changeDate', function(ev) {
    $("#d_age").val(d_age($('#birth_date').val(), ev.date));
  });

  $.extend($.datepicker, {_checkOffset:function(inst,offset,isFixed){return offset}});
  $('#birth_date').click(function(){
    $('#ui-datepicker-div').css("left", $(window).width()/2)
  });

  $("input#d_age").change(function(){
    yearsOld = $(this).val();
    var date = getYearsOldOn($('#birth_date').val(), yearsOld);
    if(date){
      $("#d_date").datepicker('setValue', date);
    }
  });
});

function calcAge(birthday) {
  return ~~((Date.now() - birthday) / (31557600000));
}

function getYearsOldOn(birthdayString, yearsOld){
  if(birthdayString){
    var birthday = new Date(birthdayString);
    birthday.setYear(parseInt(birthday.getFullYear()) + parseInt(yearsOld));
    return birthday;
  }
}


function d_age(dateString, date2) {
  var birthday = new Date(dateString);
  console.log(dateString);
  console.log(birthday);
  return ~~((date2 - birthday) / (31557600000));
}
