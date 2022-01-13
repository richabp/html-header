function openContent(evt, contentName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(contentName).style.display = "block";
    evt.currentTarget.className += " active";
}



/* (function() {

  'use strict';
  
  var $searchView = $('.menu-search-container');
  var $menu = $('.menu-mac, .menu-iPad, .menu-iPhone, .menu-watch, .menu-tv, .menu-support, .menu-search, .menu-store, .icon-home');
  var $fadeScreen = $('.fade-screen');
  
  $('div.menu-search a, .fade-screen, .menu-search-close').on('click', function(e) {
    
    $searchView.toggleClass('active');
    
    setTimeout(function(){
      $searchView.children().find('input').focus();
    }, 1100);
    
    $fadeScreen.toggleClass('visible');
    $menu.removeClass('is-closed');
    $menu.toggleClass('hidden');
    
    e.preventDefault();
  });
  
  $('.fade-screen,.menu-search-close').on('click', function(e) {
    $menu.toggleClass('is-closed');
    e.preventDefault();
  });
    
}()) */