Merch = [new Item('"beets by schrute" sweatshirt', '19.99', 'media/beets_sweatshirt.jpg', 'beets'),
         new Item('"supermean" sweatshirt', '19.99', 'media/supermean_sweatshirt.jpg', 'supermean')]

function Item(name, price, image, c_name){
  this.name = name;
  this.price = price;
  this.image = image;
  this.c_name = c_name;
}

function initCookies(){
  for (var i = 0 ; i < Merch.length ; i++){
    checkCookie(Merch[i].c_name);
  }
}

function changeBeets(cname){
  x = document.beets.value
  if(!x){
    setCookie('beets', '0', 10)
    location.reload();
  }
}

function addBeet(){
  var x = parseInt(getCookie('beets'));
  setCookie('beets', ++x, 10);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
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

function checkCookie(cname) {
  var val=getCookie(cname);
  if (val == "") {
    setCookie(cname, "0", 10);
  }
}