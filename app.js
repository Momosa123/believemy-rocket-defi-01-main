const observerRight = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show-right')
    } else {
      entry.target.classList.remove('show-right')
    }
  })
})

const observerLeft = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show-left')
    } else {
      entry.target.classList.remove('show-left')
    }
  })
})

const rightSlide = document.querySelectorAll('.right-slide')
const leftSlide = document.querySelectorAll('.left-slide')

rightSlide.forEach((el)=> observerRight.observe(el))
leftSlide.forEach((el)=> observerLeft.observe(el))