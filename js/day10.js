jQuery(function($){
    $('#box').on('fastcampus', function(event){
       alert('click'); 
    });
    $(document).on('keydown', function(event){
       if(event.which === 13) {
           $('#box').trigger('fastcampus');
       } 
    });
    
    // trigger 이벤트 예제
    /*$('li').on('click', function(event){
        $(this).clone().insertAfter($(this));
    });
    $('#cloneItem').on('click', function(event){
       $('li:first').trigger('click'); 
    });
    
    $('ul').on('click', 'li', function(event){
        $(this).clone().insertAfter($(this));
    });*/
    
    $('#show').on('click', function(event){
       $('#box').slideDown(300); 
    });
    
    $('#hide').on('click', function(event){
       $('#box').delay(1000).slideUp(300); 
    });
    
    $('#toggle').on('click', function(event){
       $('#box').slideToggle(300); 
    });
    
    $(document).on('keydown', function(event){
        var winWidth = $(window).width();
        var $box = $('#box');
        var boxOffset = $box.offset(), left = boxOffset.left, top = boxOffset.top;;
        var bottom = $('h2:first').offset().top - $box.height();
        var right = winWidth - $box.width();
        const move = 60;
        
        switch(event.which){
            case 37 : 
                if(left - move < 0) {
                    left = 0;
                } else {
                    left -= move;
                }
                $box.stop().animate({'left':left}, 100); break;
            case 38 : 
                event.preventDefault();
                if(top - move < 0) {
                    top = 0;
                } else {
                    top -= move;
                }
                $box.stop().animate({'top':top}, 100); break;
            case 39 : 
                if(left + move > right) {
                    left = right;
                } else {
                    left += move;
                }
                $box.stop().animate({'left':left}, 100); break;
            case 40 :
                event.preventDefault();
                if(top + move > bottom) {
                    top = bottom;
                } else {
                    top += move;
                }
                $box.stop().animate({'top':top}, 100); break;
        }
        
    });
    $('h2').on('click', function(event){
       $(this).addClass('header');
        console.log($('#box').offset().top);
    });
    $('.top').on('click', function(event){
        event.preventDefault();
        $('html,body').animate({'scrollTop': 0}, 200);
    });
    
    // 문제: <a>태그를 모두 선택한 후 <i class="fa fa-external-link"></i> 태그를 
    // 선택한 <a>태그의 마지막 자식 요소로 추가하라.
    $('a[href^="http:"]').attr('target', '_blank').append('<i class="fa fa-external-link"></i>');
    //$('<i class="fa fa-external-link"></i>').appendTo('a');
    
    $('#tab').on('click', ' li a',function(event){
        event.preventDefault();
        var $this = $(this);
        $this
            .parent('li')
                .siblings().removeClass('active')
            .end()
            .addClass('active');
        $($this.attr('href')).siblings().removeClass('active').end().addClass('active');
            
    });
       
});
