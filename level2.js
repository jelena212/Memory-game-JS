$(document).ready(function(){
    
    var wrapp = $('.wrapp');
    wrapp.append('<div class="container"></div>');
    var container = $('.container'),
    itemArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
    testClicks = 0,
    savedArr = [],
    kraj = 0,
    totalClicks = 0,
    span =  $('.clicks').find('span');
    
      
    $('button').on('click',function(){
        location.reload();
    });
    
    for(var i = 0; i < 36; i++){
        var rand = Math.floor(Math.random()* itemArr.length);
        container.append('<div class="box"><div class="back">'+ itemArr[rand] +'</div><div class="front"></div></div>');
        itemArr.splice(rand, 1);
    }
    var boxes = $('.box');
    
    start();
    
    function start(){
    boxes.click(function(){
        totalClicks++;
        span.html(totalClicks);
        testClicks++;
        savedArr.push($(this));
        console.log(savedArr);
        console.log(testClicks);
        $(this).find('.front').css('transform', 'perspective(900px) rotateY(180deg)');
        $(this).find('.back').css('transform', 'perspective(900px) rotateY(0deg)');
        if(testClicks == 2){
            boxes.off();
        };
        if(savedArr[0].html() === savedArr[1].html()){
            kraj++;
            testClicks = 0;
            savedArr.length = 0;
            start();
            if(kraj == 18){
                alert("Igra je zavrsena!");
            }
        }
        else{
        setTimeout(function(){
            savedArr[0].find('.front').css('transform', 'perspective(900px) rotateY(0deg)');
            savedArr[0].find('.back').css('transform', 'perspective(900px) rotateY(180deg)');
            savedArr[1].find('.front').css('transform', 'perspective(900px) rotateY(0deg)');
            savedArr[1].find('.back').css('transform', 'perspective(900px) rotateY(180deg)');
            testClicks = 0;
            savedArr.length = 0;
            start();
            }, 800);
        }
    });
    };
});