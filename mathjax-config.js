window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']]
  },
  svg: {
    fontCache: 'global'
  }
};

(function () {
  var script = document.createElement('script');
  script.src = '/home/agniva/git/agnivachaudhuri.github.io/mathjax/tex-svg.js';
  script.async = true;
  document.head.appendChild(script);
})();
