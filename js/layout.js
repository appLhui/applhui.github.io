

$(document).ready(function() {


    $('#fullpage').fullpage({
        slidesColor: ['#000', '#000', '#000'],
        anchors: ['firstPage', 'secondPage', '3rdPage'],
        menu: '#menu',

        'afterLoad': function(anchorLink, index){
             console.log(anchorLink);
             console.log(index);
        },

        'onLeave': function(index, direction){
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