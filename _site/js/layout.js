

$(document).ready(function() {

    var timer=[];

    $('#fullpage').fullpage({
        slidesColor: ['#fff', '#fff', '#fff'],
        anchors: ['Html','Angular'],
        menu: '#menu',

        'afterLoad': function(anchorLink, index){
            var title = anchorLink+'我爱北京天安门'.split('');
            var _html = ''
            $('#header h1 ').html('<b class="caret">_</b>');
            $.each(title,function(i,o){
                timer.push(setTimeout(function(){
                    if(i%2){
                        _html='<span class="odd title_'+i+'">'+ o +'</span>';
                    }else{
                        _html='<span class="even title_'+i+'">'+ o +'</span>';
                    }
                    $('#header .caret').before(_html);
                    timer.push(setTimeout(function(){
                        $('#header .title_'+i).removeClass('even').removeClass('odd');
                    },10*i));
                    if(i==title.length-1){
                        timer.push(setTimeout(function(){
                            $('#header h1 b').remove();
                        },1000));
                    }
                },390*i ));

            });

        },

        'onLeave': function(index, direction){
            $.each(timer,function(i,o){
                clearTimeout(o);
                if(i==timer.length-1){
                    timer.length = 0;
                }
            });

            $('#header h1 span').remove();
        }
    });

//    $('#header').mouseenter(function(){
//            $.each($(this).find('ul>li'),function(i,o){
//                var _self = this;
//                setTimeout(function(){
//                    $(_self).addClass('magictime tinRightIn');
//            },i*200);
//        })
//    });
//    $('#header').mouseout(function(){
//            $.each($(this).find('ul>li'),function(i,o){
//                var _self = this;
//                setTimeout(function(){
//                    $(_self).removeClass('magictime tinRightIn');
//                },i*200);
//            })
//    });
});