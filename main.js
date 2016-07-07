$(document).ready(function(){
    var wrapp = $('.wrapp');
    wrapp.append('<div class="container"></div>');
    var container = $('.container');
    var itemArr = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
    var testClicks = 0;
    var savedArr = [];
    var kraj = 0;
    var totalClicks = 0;
    var span =  $('.clicks').find('span');
    
    $('button').on('click',function(){
        location.reload();
    });
    
    
    for (var i = 0; i<16; i++){
        var rand = Math.floor(Math.random()*itemArr.length);
        container.append('<div class = "box"><div class = "back">'+ itemArr[rand] +'</div><div class = "front"></div></div>');
        itemArr.splice(rand,1);
    }
    var boxes = $('.box');
    
    start();
    function start(){
          boxes.click(function(){
            totalClicks++;
            span.html(totalClicks);
            savedArr.push($(this));
            testClicks++;
            $(this).find('.front').css('transform', 'perspective(900px) rotateY(180deg)'); 
            $(this).find('.back').css('transform', 'perspective(900px) rotateY(0deg)');
            if(testClicks == 2){
            boxes.off();
            if(savedArr[0].html() === savedArr[1].html()){
                console.log(savedArr[0]);
                testClicks = 0;
                savedArr.length = 0;
                kraj++;
                if(kraj == 8){
                    alert('Igra je zavrsena');
                    if(totalClicks < 40){
                    alert("You're a genious");
                    setTimeout(function(){
                        alert("Let's move to level 2!")
                        window.location.href = "level2.html";
                    },800);
                    
                }
                }
                start();
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
            },800);
              
                
        };
    };
    });  
    };
            

    });