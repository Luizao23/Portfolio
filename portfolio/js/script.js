
document.addEventListener('DOMContentLoaded', () => {
  // add slow reveal
  document.querySelectorAll('.card, .content, .home .box').forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(18px)';
    setTimeout(()=>{
      el.style.transition = 'opacity .6s ease, transform .6s ease';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, 120 * i);
  });
});
