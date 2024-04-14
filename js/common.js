let mainSlide = new Swiper('.mainSlide', {
    pagination: {
      el: '.pg1',
    },
  });
  
  let sec3Con = new Swiper('.sec3Con', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
      nextEl: '.sec3Next',
      prevEl: '.sec3Prev',
    },
  });
  
  // sec4 영역
  const $figure = document.querySelectorAll('.sec4 figure');
  $figure[0].classList.add('on');
  $figure.forEach((figure) => {
    figure.addEventListener('mouseenter', (e) => {
      for (f of $figure) {
        f.classList.remove('on');
      }
      e.target.classList.add('on');
    });
  });
