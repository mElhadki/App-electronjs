
    /*	Current Tab 	*/
    $('.phone-tabs li a').click(function(){
        $('.phone-tabs li').removeClass('current');
        $(this).parent().addClass('current');
    });
      
      $(".call-button").click(function() {
        $(".callscreen").addClass("callscreen-transition").css("-webkit-transform", "scale(1.3, 1.3)");
        $(".callscreen").toggle(); /* toggle deprecated */
        $(".callscreen-container").toggle();
        $(".dialer-app-container").toggle(); 
        $(".status-bar, .fa-signal").css("color", "white"); 
        $(".phone-tabs").css("visibility", "hidden"); 
        $(".phone-tab-contents").css("visibility", "hidden");
    });

    
    $(".end-call-button").click(function() {
      $(".callscreen-container").toggle();
      $(".dialer-app-container").toggle(); 
      $(".callscreen").toggle();
      $(".status-bar, .fa-signal").css("color", "black"); 
      $(".phone-tabs").css("visibility", "visible"); 
      $(".phone-tab-contents").css("visibility", "visible");
      location.reload();
    });
    /*	Simple Tab 	*/
    var tabContents = $('.phone-tab-contents');
    $('.phone-tabs .getphone').click(function(){
      tabContents.removeClass('getpeoples');
      tabContents.removeClass('getclock');
    });
    
    $('.phone-tabs .getclock').click(function(){
      tabContents.removeClass('getpeoples');
      tabContents.addClass('getclock');
    });
    
    $('.phone-tabs .getpeoples').click(function(){
      tabContents.removeClass('getclock');
      tabContents.addClass('getpeoples');
    });
    
    /*	Delete */
    $('.delete-btn').click(function(){
      var numbers =  $('.number-area .numbers').text();	
      var numbers2 =  $('.number-area .numbers').text().length;
      $('.number-area .numbers').text(numbers.substr(0,numbers2-1));
      if(document.getElementById('numbers').textContent.length != 10){
        $('#callit').css('display', 'none');
        $('#suggestion').css('display', 'none');
      }
    });
  
      $(".home-button").click(function() {
        $(".homescreen").toggle(); /* toggle deprecated */
    });
    
    /*	Pusher	*/
    var pusher = {
      number : function(num) {
        $('.numbers-container .pushed' + num + '').click(function(){
          if(document.getElementById('numbers').textContent.length < 10){
            $('.number-area .numbers').append(''+num+'');
          }
          if(document.getElementById('numbers').textContent.length == 10){
            $('#callit').css('display', 'flex');
            $('#suggestion').css('display', 'initial');
          }
        });		
      }
    }
    
    pusher.number(1);
    pusher.number(2);
    pusher.number(3);
    pusher.number(4);
    pusher.number(5);
    pusher.number(6);
    pusher.number(7);
    pusher.number(8);
    pusher.number(9);
    pusher.number(0);
    
    $('.numbers-container .pushedasterisk').click(function(){
      $('.number-area .numbers').append('*');
    });	
    
    $('.numbers-container .pushednumber').click(function(){
      $('.number-area .numbers').append('#');
    });	

    $(".suggestion").on('click', function() {
      $(".custom-model-main").addClass('model-open');
    }); 
    $(".close-btn, .bg-overlay").click(function(){
      $(".custom-model-main").removeClass('model-open');
    });