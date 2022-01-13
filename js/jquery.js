$(document).ready(function() {
    
    'use strict';
    
    var $searchView = $('.menu-search-container');
    var $menu = $('.menu-search, .heading-ncs');
    var $fadeScreen = $('.fade-screen');
    var $searchInput = $('.menu-search-input');
    
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
      $searchInput.val('');
      e.preventDefault();
    });
      
    
    // Dropdown toggle for docsets
    $(function() { 
    $('.icon-home').click(function() { $('.rst-other-versions').toggleClass('visible');
    $(".dropit").toggleClass("active")
    });
    }());
    
    $(function() { // Dropdown toggle for versions
    $('.ncs-version').click(function() { $('.dropdown ul').slideToggle();
    $(".ncs-dropdown").toggleClass("active"); //toggle arrow up and down
    });
    
    $(document).click(function(e) { 
    var target = e.target; 
    if (!$(target).is('.ncs-version') && !$(target).parents().is('.ncs-version')) 
    //{ $('.dropdown').hide(); }
      { $('.dropdown ul').slideUp(); }
    });
    }());
  }());