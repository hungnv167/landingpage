document.addEventListener("DOMContentLoaded", function(){
    var chapter1 = document.querySelector('.full-window-img');
    var chapter2 = document.querySelector('.img-bg-chapter2-chil');
    var buttonMobile = document.querySelector('.btn-menu');
    var line = document.getElementsByClassName('line');
    var collapse = document.querySelector('.collapse');
    var nav = document.getElementsByTagName('nav');
    
    var trangthai = 'on';
    buttonMobile.addEventListener('click', function(){
        line[0].classList.toggle('line-f');
        line[1].classList.toggle('remove');
        line[2].classList.toggle('line-l');
        // collapse.classList.toggle('showMenu');
        if (window.screen.width <= 1024 && window.screen.width >= 768) {
            if(trangthai == 'on'){
                trangthai = 'off';
                nav[0].classList.add('showMenu');
                nav[0].classList.remove('animate-right');
                nav[0].classList.add('animate-left');
                nav[0].classList.remove('animate-left1');
            }
            else if( trangthai == 'off'){
                trangthai = 'on';
                nav[0].classList.remove('animate-left');
                nav[0].classList.add('animate-right');
                nav[0].classList.remove('animate-right1');
            }  
        }
        if (window.screen.width < 768){        
            if(trangthai == 'on'){
                trangthai = 'off';
                nav[0].classList.add('showMenu');
                nav[0].classList.remove('animate-right');
                nav[0].classList.add('animate-left1');
                nav[0].classList.remove('animate-left');
            }
            else if( trangthai == 'off'){
                trangthai = 'on';
                nav[0].classList.remove('animate-left');
                nav[0].classList.add('animate-right1');
                nav[0].classList.remove('animate-right');
            }  
        }  
        // nav[0].classList.toggle('showMenu');
        // if(trangthai=='on'){
        //     trangthai = 'off';
        //     nav[0].classList.add('showMenu');
        //     if (window.screen.width <= 1024 && window.screen.width >= 768) {
        //         nav[0].classList.remove('animate-right');
        //         nav[0].classList.add('animate-left');
        //         nav[0].classList.remove('animate-left1');

        //     }
        //     if (window.screen.width < 768){
        //         nav[0].classList.remove('animate-right');
        //         nav[0].classList.remove('animate-left');
        //         nav[0].classList.add('animate-left1');

        //     }        
        // }
        // else{
        //     nav[0].classList.remove('showMenu');
        //     nav[0].classList.remove('animate-left');
        //     nav[0].classList.add('animate-right');
        //     trangthai = 'on'
        // }
        
    })
    window.addEventListener('scroll',function(){
        if(window.pageYOffset <= 1900){
            chapter1.setAttribute('style','position: absolute;background-image: url(https://media.shorthand.com/media/organisations/M0QNnc1ojf/lIWhKDJJn8/001-1920x1080.jpeg)')
        }
        if(window.pageYOffset >1900){
            chapter1.setAttribute('style','position: fixed;background-image: url(https://media.shorthand.com/media/organisations/M0QNnc1ojf/CflfvJxyRj/002-1920x1080.jpeg)')
        }
        if(window.pageYOffset >2150){
            chapter1.setAttribute('style','position: fixed;background-image: url(https://media.shorthand.com/media/organisations/M0QNnc1ojf/KT3eSJEC4Q/003-1920x1080.jpeg)')
        }
        if(window.pageYOffset >2250){
            chapter1.setAttribute('style','position: absolute;background-image: url(https://media.shorthand.com/media/organisations/M0QNnc1ojf/yCV5NZ6rTa/006-1920x1080.jpeg)')
        }
        if(window.pageYOffset >6800){
            chapter2.setAttribute('style','position: fixed;background-image: url(https://media.shorthand.com/media/organisations/M0QNnc1ojf/g9uy0re2Mj/013-1920x1080.jpeg)')
        }
        if(window.pageYOffset >7000){
            chapter2.setAttribute('style','position: fixed;background-image: url(https://media.shorthand.com/media/organisations/M0QNnc1ojf/FLu8hJEuOZ/016-1920x1080.jpeg)')
        }
        if(window.pageYOffset >7300){
            chapter2.setAttribute('style','position: fixed;background-image: url(https://media.shorthand.com/media/organisations/M0QNnc1ojf/53T9iTxVpA/018-1920x1080.jpeg)')
        }
        if(window.pageYOffset >7600){
            chapter2.setAttribute('style','position: fixed;background-image: url(https://media.shorthand.com/media/organisations/M0QNnc1ojf/dJKkChvGzh/027-1920x1080.jpeg)')
        }
    })
})