let arrowRight = document.querySelectorAll('.arrow-right');
let arrowLeft = document.querySelectorAll('.arrow-left');
arrowRight = [...arrowRight];
arrowLeft = [...arrowLeft];

arrowRight.forEach(function(item, index, arr){
    item.addEventListener('click',function(){
        if(index !== arr.length - 1){
            item.parentElement.parentElement.classList.remove('show');
            item.parentElement.parentElement.nextElementSibling.classList.add('show');
        }
    });
});

arrowLeft.forEach(function(item, index, arr){
    item.addEventListener('click', function(){
       if(index !== 0){
           item.parentElement.parentElement.classList.remove('show');
           item.parentElement.parentElement.previousElementSibling.classList.add('show');
       }
    });
});