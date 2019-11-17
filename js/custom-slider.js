let grid3d = document.querySelectorAll('#grid3d .content .content-dummy');
grid3d = [...grid3d];
// grid3d.forEach(function(item){
//     item.addEventListener('click', function(){
//         this.classList.remove('show');
//         let nextEl = this.nextElementSibling;
//         nextEl.classList.add('show');
//         console.log(nextEl);
//     })
// })

console.log(grid3d.length);
for(let i= 0; i < grid3d.length; i++){
    grid3d[i].addEventListener('click', function(){        
        
        if(i !== grid3d.length - 1){
            this.classList.remove('show');
            let nextEl = this.nextElementSibling;
            nextEl.classList.add('show');
        }
    })
}