document.addEventListener("DOMContentLoaded", function(){
    var chapter1 = document.querySelector('.full-window-img');
    var chapter2 = document.querySelector('.img-bg-chapter2-chil');
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