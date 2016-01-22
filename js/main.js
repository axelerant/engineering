(function(window, document) {

  document.addEventListener('DOMContentLoaded', () => {
    var toc = document.querySelector('.toc')
    var tocBtn = document.querySelector('.btn--toc');
    tocBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toc.classList.toggle('is-active');
    })
  });

})(window, document);
