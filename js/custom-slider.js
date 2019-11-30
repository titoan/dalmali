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


let loadMoreBtn = document.querySelector('.load-more-btn');

loadMoreBtn.addEventListener('click', function(e){
  e.preventDefault();
})

loadMoreBtn.addEventListener('click',function(){
    // console.log(galleryMore);
    let galleryMore = document.querySelectorAll('.effect-apollo.no-active');
    for(let i = 0; i < 9; i++){
        galleryMore[i].classList.remove('no-active');
    }
    });




    // let a_grid = document.querySelector('.grid');
    // let a_gridChildren = a_grid.children;
    // a_gridChildren = [...a_gridChildren];
    

// loadMoreBtn.addEventListener('click', addMoreImg);

// function addMoreImg(){
//     let figure = document.createElement('figure');
//     figure.classList.add('col-md-4', 'effect-apollo');
//     figure.innerHTML = `<img src="images/gallery/location-.jpg" alt="Odyssey"><figcaption><h4></h4></figcaption>`;
//     // a_grid.appendChild(figure);
//     console.log(figure);

// }