// let bt = document.querySelector('#bt')
// console.log(bt.classList.length);
// console.log(bt.classList.item(1));


// let bt2 = document.querySelector('#bt2')
// bt2.classList.add('box2')
// console.log(bt2);
// bt2.classList.remove('box')


// let bt3 = document.querySelector('#bt3')
// bt3.classList.toggle('ok')
// console.log(bt3);

// let h1 = document.querySelector('#h1')
// if(h1.classList.contains('ok')){
//    h1.classList.add('bg-danger')
// }else{
//   h1.classList.add('text-info')
// }

// let b = document.querySelector('.b')
// b.addEventListener('click', ozgar)

// function ozgar(){
//    if(b.classList.contains('.b')){
//     b.classList.toggle(`btn-info`)
//    } else{
//        b.classList.toggle( 'btn-anger')
//        console.log(b);
//    }
  
// }



let res = document.querySelector('#res')





let son = 0;

let next = document.querySelector('#next')
next.addEventListener('click', () => {
   if(next.textContent === 'Next'){
      son++
   }
   res.innerHTML = son
})


let reset = document.querySelector('#reset')
reset.addEventListener('click', () => {
   if(reset.textContent === 'Reset'){
      son = 0
     
   res.innerHTML = son
   }
})

