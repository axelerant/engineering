(function(window, document) {

  document.addEventListener('DOMContentLoaded', function() {
    var toc = document.querySelector('.toc')
    var tocBtn = document.querySelector('.btn--toc');
    tocBtn.addEventListener('click', function(e) {
      e.preventDefault();
      toc.classList.toggle('is-active');
    })
  });

})(window, document);
