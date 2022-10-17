const options = {
  threshold: 1.0
}

function showRightElements(entries){
  entries.forEach((entry)=>{
    // console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show-right')
    } else {
      entry.target.classList.remove('show-right')
    }
  })
}

function showLeftElements(entries){
  entries.forEach((entry)=>{
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show-left')
    } else {
      entry.target.classList.remove('show-left')
    }
  })
}

const observerRight = new IntersectionObserver(showRightElements, {
  threshold: 0.1
})

const observerLeft = new IntersectionObserver(showLeftElements, {
  threshold: 0.1
})

const rightSlide = document.querySelectorAll('.right-slide')
const leftSlide = document.querySelectorAll('.left-slide')

rightSlide.forEach((el)=> observerRight.observe(el))
leftSlide.forEach((el)=> observerLeft.observe(el))