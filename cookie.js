function writeCookie(name, value, days){
  //쿠키는 일시적이므로 디폴트로 소멸일자는 없는것으로 설정
  var expires = "";

  //쿠키가 지속되는 날짜 수를 지정
  if (days){
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toGMTString();
  }

  //쿠키에 이름, 값, 소멸 일자를 설정.
  document.cookie = name + "=" + value + expires + "; path=/";
}
function readCookie(name){
  //특정 쿠키를 찾아 그 값을 반환
  var searchName = name + "=";
  var cookies = document.cookie.split(';');
  for(var i = 0; i < cookies.length; i++){
    var c = cookies[i];
    while(c.charAt(0) == '')
      c = c.substring(1, c.length);
    if(c.indexOf(searchName.length, c.length);
  }
  return null;
}
function eraseCooke(name){
  //특정쿠키 삭제
  writeCookie(name,"", -1);
}
