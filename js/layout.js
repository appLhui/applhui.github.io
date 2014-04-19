

$(document).ready(function() {

//    var title = ['墨','斐','的','博','客'];

    $('#fullpage').fullpage({
        slidesColor: ['#000', '#000', '#000'],
        anchors: ['Html','Angular'],
        menu: '#menu',

        'afterLoad': function(anchorLink, index){
            var title = anchorLink+'我爱北京天安门'.split('');
            var _html = ''
            $('#header h1 ').html('<b class="caret">_</b>');
            $.each(title,function(i,o){
                setTimeout(function(){
                    if(i%2){
                        _html='<span class="odd title_'+i+'">'+ o +'</span>';
                    }else{
                        _html='<span class="even title_'+i+'">'+ o +'</span>';
                    }
                    $('#header .caret').before(_html);
                    setTimeout(function(){
                        $('#header .title_'+i).removeClass('even').removeClass('odd');
                    },10*i);
                    if(i==title.length-1){
                        setTimeout(function(){
                            $('#header h1 b').remove();
                        },1000);
                    }
                },390*i );

            });

        },

        'onLeave': function(index, direction){

            $('#header h1 span').remove();
            console.log(direction);
            console.log(index);
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