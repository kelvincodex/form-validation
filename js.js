$(document).ready(function(){
$('#bar').click(function(){
  progbar($('#select').val())
});

function progbar(progcom){
  $('.inner').animate({
    "width": (400*progcom)/100
  },300);
  $({counter:1}).animate({counter: progcom},{
    duration: 300,
    step: function(){
      $('.inner').text(Math.ceil(this.counter) + '%')
    }
  })
};

})