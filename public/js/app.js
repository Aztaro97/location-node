var reveal = document.querySelectorAll('[class*="reveal-"]')

const ratio = .1 ;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
  }
  
var HandleIntersection = function(entries, observer) {
    entries.forEach(entry => {
      if(entry.intersectionRatio > ratio) {
          entry.target.classList.add('reveal-visible')
          observer.unobserve(entry.target)
      }
    });
}



  var observer = new IntersectionObserver(HandleIntersection, options);

  reveal.forEach(function(r) {
    observer.observe(r)
  })







// SIMPLE SCROLLTOP  BUTTON 

var btn = document.querySelector('.btn');
let OnScroll = function() {
  window.scroll({ top:0, behavior:'smooth'})
}
btn.addEventListener('click', OnScroll)



//  Fullscreen image
let images = document.querySelectorAll('.house_image')
for ( var i = 0; i < images.length ; i++) {
  let image = images[i]
  image.addEventListener('click', function() {
    if (image.requestFullscreen) {
      image.requestFullscreen()
    }
  })
}