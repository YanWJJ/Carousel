    var list = document.getElementsByTagName("li");
    var imgs = document.getElementById("imgs");
    var ri = document.getElementById("r");
    var le = document.getElementById("l");
    var imgs_arr = ["05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg"];
    var len = imgs_arr.length;
    var num = 0;
 
    sw_style(1);  
    run();

    for(var j=1; j<=len; j++){
        list[j].onclick = function(n){
            return function(){
                num = n-1;
                imgs.src = imgs_arr[num];
                sw_style(n);
            };
        }(j);
    }

    ri.onclick = function(){
        sw_imgs();
    };

    le.onclick = function(){
        sw_imgs2();
    };
    //换导航点
    function sw_style(n){
        for(var i=1; i<6; i++){
            list[i].setAttribute("style", "list-style: circle");
        }
        i = null;
        list[n].setAttribute("style", "list-style: disc");
    }
    //换图
    function sw_imgs(){
        num++;
        if(num == len){
            num = 0;
        }
        imgs.src = imgs_arr[num];
        sw_style(num+1);
    }
    //反方向换图
    function sw_imgs2(){
        num--;
        if(num < 0){
            num = 4;
        } 
        imgs.src = imgs_arr[num];
        sw_style(num+1);
    }
    //循环换图
    function run(){
        setInterval(sw_imgs, 3000);
    }  