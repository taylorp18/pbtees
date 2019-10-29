Merch = [new Item('"beets by schrute" sweatshirt', '19.99', 'media/img1.jpg', 'beets'),
         new Item('"supermean" sweatshirt', '19.99', 'media/img2.jpg', 'supermean')]

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

function resetCookies(){
  for (var i = 0; i < Merch.length; i++){
    setCookie(Merch[i].c_name, "0", 10);
  }
}

function changeCookie(cname){
  x = "#" + cname;
  y = $(x).val();
  
  if (y <= 0){
    setCookie(cname, 0, 10)
    location.reload();
  }

  else{
    setCookie(cname, y, 10)
  }

  calculateCost();
}

function addBeet(){
  var x = parseInt(getCookie('beets'));
  setCookie('beets', ++x, 10);
}

function addSupermean(){
  var x = parseInt(getCookie('supermean'));
  setCookie('supermean', ++x, 10);
}

function addToCart(id, cname){
  x = "#" + id;
  y = parseInt($(x).val());

  if (y > 0){
    y += parseInt(getCookie(cname))
    setCookie(cname, y, 10)
  }
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

function calculateCost(){
  var total = 0;
  for (var i = 0; i < Merch.length; i++) {
    total +=(Merch[i].price * getCookie(Merch[i].c_name))
  }
  
  total = Math.round(total * 100) / 100;

  total = total.toString();
  
  if (total.indexOf('.') == -1) {
    total += '.00'
  }

  else if ((total.length - total.indexOf('.')) == 2 )
    total += '0'

  $('#total').html('<strong>Total:</strong> $' + total);

}
