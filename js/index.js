$(document).ready(function () {



  // email validation
  $('#email').keyup(function () {
    if (validateEmail()) {
      $('#email').css('background', 'green');
    } else {
      $('#email').css('background', 'red');
    }
  });


  // password validation
  $('#pass').keyup(function () {
    if (ValidationPassword()) {
      $('#pass').css('background', 'green')
    } else {
      $('#pass').css('background', 'red')
    }
  });

  // phone number validation

  $('#phone').keyup(function () {
    if (ValidationNumber()) {
      $('#phone').css('background', 'green')
    } else {
      $('#phone').css('background', 'red')
    }
  });

  // username validation

  $('#username').keyup(function () {
    if (ValidationUsername()) {
      $('#username').css('background', 'green')
    } else {
      $('#username').css('background', 'red')
    }
  });









)}
  // });


  // function use for validation

  // email validation

  function validateEmail() {
    // get value of the input
    var email = $('#email').val();
    // use regular expression
    var reg = /(?:((?:[\w-]+(?:\.[\w-]+)*)@(?:(?:[\w-]+\.)*\w[\w-]{0,66})\.(?:[a-z]{2,6}(?:\.[a-z]{2})?));*)/;

    if (reg.test(email)) {
      return true;

    } else {
      return false;
    }



password validation

function ValidationPassword() {
  // get the value input
  var pass = $('#pass').val();
  // use reguler expression

  var reg = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
  if (reg.test(pass)) {
    return true;
  } else {
    return false;
  }
};

// phone number validation

function ValidationNumber() {
  // get the value input
  var phone = $('#phone').val();
  // use reguler expression

  var reg = /^[0-9]{11}$/;
  if (reg.test(phone)) {
    return true;
  } else {
    return false;
  }
};

// username validation

function ValidationUsername() {
  // get the value input
  var username = $('#username').val();
  // use reguler expression

  var reg = /^[a-z0-9_-]{5,15}$/;
  if (reg.test(username)) {
    return true;
  } else {
    return false;
  }
};