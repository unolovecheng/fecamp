jQuery(function($){
    // 이벤트 함수 사용
//    $('#box').on('mousedown', function(event){
//        $(this)
//            .text(event.which)
//            .css('background-color', 'red');
//    });
    $('a').on('click', function(event){
        event.preventDefault();
        console.log('클릭');
    });
    // 마우스 관련 이벤트 : click, mousedown, mouseup, mousemove
    // 키보드 관련 이벤트 : click, keypress, keydown, keyup
    // 그 외 이벤트 : focus, blur, change, scroll
    
    // event.stopPropagation() 전파되는 것을 막음
    // event.preventDefault() 기본동작을 취소시킴
    
    
    $(document).on('keydown.move', function(event){
        var box = $('#box');
        var left = parseInt(box.css('left'));
        var top = parseInt(box.css('top'));
        switch(event.which){
            case 27 : $(document).off('keydown.move', arguments.callee); break;
            // JQuery에서는 css 값에 숫자만 있을 경우_ px를 자동으로 붙여준다. DOM에선 px를 붙여줘여 함
            case 37 : box.css('left', left-5); break; // 좌
            case 38 : box.css('top', top-5); break; // 상
            case 39 : box.css('left', left+5); break; // 우
            case 40 : box.css('top', top+5); break; // 하
            default : break;
        }
    });
    
    // 드래그앤드롭 구현
    // 1. #box에서 마우스 버튼을 누를 때
    //  - 초기 위치값을 가지고 온다.
    //  - 현재 CSS left, top 값을 저장해둔다.
    //  - document에 mousemove, mouseup 이벤트를 건다.
    // 2. 버튼을 누른 채 마우스가 움직이면
    //  - 현재 위치값에서 초기 위치값을 빼면 차이를 알 수 있다.
    //  - 1에서 구한 CSS left, top 값에 차이만큼을 더한다.
    // 3. 마우스 버튼을 떼면
    //  - document에 걸었던 mousemove, mouseup 이벤트를 지운다.
    
    
    $('.draggable').on('mousedown', function(event){
        event.preventDefault(); // 텍스트 선택이 되지 않도록 기본 동작 제거
        var $this = $(this);
        // 현재 커서의 위치는?
        var startX = event.pageX, startY = event.pageY;
        
        // 현재 #box의 CSS left, top 값은?
        var startLeft = parseInt($this.css('left')), startTop = parseInt($this.css('top'));
        
        if(isNaN(startLeft)) startLeft = 0;
        if(isNaN(startTop)) startTop = 0;
        
        // position이 absolute, relative, fixed가 아니면 relative 설정
        var position = $this.css('position');
        if(position != 'absolute' && position != 'relative' && position != 'fixed'){
            $this.css('position', 'relative');
        }
        
        $(document).on('mousemove.draganddrop', function(event){
            var moveX = event.pageX - startX, moveY = event.pageY - startY;
            $('.draggable').css('left', startLeft + moveX).css('top', startTop + moveY);
        });
        
        $(document).on('mouseup.draganddrop', function(event){
            //마우스 버튼을 뗄 때 쉬프트키가 눌려있으면 처음 위치로 되돌린다.
            if(event.shiftKey){
                $('.draggable').css('left', startLeft);
                $('.draggable').css('top', startTop);
            }
            $(document).off('.draganddrop');
            
        });
    });
    
    
    
    $('.size-handle').on('mousedown', function(event){
        event.preventDefault();
        
        var startX = event.pageX, startY = event.pageY;
        var startWidth = parseInt($(this).css('width')), 
            startHeight = parseInt($(this).css('height'));
        $(document).on('mousemove.sizehandle', function(event){
            var moveX = event.pageX - startX, moveY = event.pageY - startY;
            $('.size-handle').css('width', startWidth + moveX).css('height', startHeight + moveY);
        });
        $(document).on('mouseup.sizehandle', function(event){
           $(document).off('.sizehandle'); 
        });
    });
});