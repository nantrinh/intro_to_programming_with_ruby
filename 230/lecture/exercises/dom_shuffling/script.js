$(function() {
  var $header = $("body > header");

  $header.prependTo(document.body);
  $("main > h1").prependTo($header);
  $('figure').appendTo($('article'));
  $('figure > img[src*="baby_mop"]').prependTo($('figure').last());
  $('figure > img[src*="chin_stick"]').prependTo($('figure').first());
});
