animate({
    duration: 1000,
    timing(timeFraction) {
      return timeFraction;
    },
    draw(progress)
    {
      elem.style.width = progress * 100 + '%';
    }
  });
