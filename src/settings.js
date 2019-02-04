// settings.js for settings.html
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
  var coachingData
    coachingData.opt = new String()

function saveData() {
    coachingData.opt.teamname = document.getElementsByName("opt_tm").value
    writeData("opt_name", coachingData.opt.teamname, 999, "opt")
    coachingData.opt.pl1_name = document.getElementsByName("opt_gm_p1_name").value
    coachingData.opt.pl2_name = document.getElementsByName("opt_gm_p2_name").value
    coachingData.opt.pl3_name = document.getElementsByName("opt_gm_p3_name").value
    coachingData.opt.pl4_name = document.getElementsByName("opt_gm_p4_name").value
    coachingData.opt.pl5_name = document.getElementsByName("opt_gm_p5_name").value
    writeData("opt_pl1_name", coachingData.opt.pl1_name, 999, "opt")
    writeData("opt_pl2_name", coachingData.opt.pl2_name, 999, "opt")
    writeData("opt_pl3_name", coachingData.opt.pl3_name, 999, "opt")
    writeData("opt_pl4_name", coachingData.opt.pl4_name, 999, "opt")
    writeData("opt_pl5_name", coachingData.opt.pl5_name, 999, "opt")
}