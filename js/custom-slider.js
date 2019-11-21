let arrowRight = document.querySelectorAll('.arrow-right');
arrowRight = [...arrowRight];

let slideArr = document.querySelectorAll('.grid3d > .content > .content-dummy');
slideArr = [...slideArr];
console.log(slideArr);
arrowRight.forEach(function(item){
item.addEventListener('click', function(){
    const thisSliderElem = this.parentElement.parentElement;
    
    const nextElem = thisSliderElem.nextElementSibling;      
       if(thisSliderElem.classList.value == thisSliderElem.classList.value){
         
        thisSliderElem.classList.remove('show');
        nextElem.classList.add('show');
        // console.log(typeof nextElem.classList.value);        
       }

    });
})    