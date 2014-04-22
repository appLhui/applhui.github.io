

$(document).ready(function() {

    var timer=[];

    $('#fullpage').fullpage({
        slidesColor: ['rgba(255, 255, 255, 0.6)', 'rgba(255, 255, 255, 0)'],
        anchors: ['Html','Angular'],
        menu: '#menu',

        'afterLoad': function(anchorLink, index){
            $.each(timer,function(i,o){
                clearTimeout(o);
                if(i==timer.length-1){
                    timer.length = 0;
                }
            });

            //打印标题
            var title = anchorLink+'我爱北京动物园'.split('');
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
            //照片进场效果
            if(index==1){
                $('img').addClass('leftInEnd');
                $.each($('li'),function(i,o){
                    timer.push(setTimeout(function(){
                        $(o).addClass('rightInEnd');
                    },i*50));
                });
            }
        },

        'onLeave': function(index, direction){
            $.each(timer,function(i,o){
                clearTimeout(o);
                if(i==timer.length-1){
                    timer.length = 0;
                }
            });

            $('#header h1 span').remove();

            if(index==1){
                $('img').removeClass('leftInEnd');
                $.each($('li'),function(i,o){
                    timer.push(setTimeout(function(){
                        $(o).removeClass('rightInEnd');
                    },i*50));
                });
            }
        }
    });

});