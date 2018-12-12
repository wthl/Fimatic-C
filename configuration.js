function js_start() {
  select_init(document.getElementsByName("TZ")[0],3);
  select_init(document.getElementsByName("Sp485")[0],7);
  select_init(document.getElementsByName("AUTH")[0],0);
  text_save(0);
  AUTH_Change(document.body.firstElementChild);
}

function request_init() {
  var req = "";
  var sel = document.getElementsByTagName("select");
  for (var i = 0; i < sel.length; i++) {
    if(sel[i].options[sel[i].selectedIndex].defaultSelected == false) {
      for (var ii = 0; ii < sel[i].length; ii++) {
        sel[i].options[ii].defaultSelected = false;
      }
      sel[i].options[sel[i].selectedIndex].defaultSelected = true;
      if(req == "") {
        req = "save.cgi?";
      }
      else {
        req += "&";
      }
      req += sel[i].name + "=" + sel[i].value;
    }
  }

var inp = document.getElementsByTagName("input");
  for (var i = 0; i < inp.length; i++) {
    if(inp[i].value != inp[i].defaultValue) {
      if((inp[i].type == "text") || (inp[i].type == "password")) {
        inp[i].defaultValue = inp[i].value;
          if (req == "") { req = "save.cgi?"; }
          else { req += "&"; }
          
          req += inp[i].name + "=" + encodeURIComponent(inp[i].value);
      }
    }
    if(req.length > 150) { return req; }
  }
  return req;
}
    
function save() {
  var request = request_init();
  while(request) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET",request,true);
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4) {
        if(xmlhttp.status == 200) {
          alert(xmlhttp.responseText);
        }
      }
    };
    xmlhttp.send(null);
    text_save(1);
    request = request_init();
  }
}

function cmd_set(str) {
  var request = "cmd.cgi?" + str;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET",request,true);
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4) {
      if(xmlhttp.status == 200) {
        alert(xmlhttp.responseText);
      }
    }
  };
  xmlhttp.send(null);
  if(str == 'default_conf')text_save(1);
  if(str == 'reset')setTimeout(function(){top.location.reload();},200);
}

function AUTH_Change(f){
  if (f.AUTH.value == 0) { 
    f.Ln.disabled = 1;
    f.Pd.disabled = 1;
  }
  else { 
    f.Ln.disabled = 0;
    f.Pd.disabled = 0;
  }
}

function select_init(sel,val) {
  sel.value = val;
  sel.options[sel.selectedIndex].defaultSelected = true;
}

function text_save(val) {
  if(val) {
    document.getElementById("SaveText").hidden = true;
    document.getElementById("ResText").hidden = false;
  }
  else {
    document.getElementById("SaveText").hidden = false;
    document.getElementById("ResText").hidden = true;
  }
}
