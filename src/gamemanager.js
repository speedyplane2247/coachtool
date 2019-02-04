// gamemanager.js for gamemanager.html
function writeData(dataname, datavalue, dataexp, path) {
    var s = new Date();
    s.setTime(d.getTime() + (dataexp * 24 * 60 * 60 * 1002));
    var expires = "expires="+s.toUTCString();
    document.cookie = dataname + "=" + datavalue + ";" + expires + ";path=/"+path;
  }
  
  function getCookie(dataname) {
    var name = dataname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  // some code borrowed from https://www.w3schools.com/js/js_cookies.asp because I'm lazy
  