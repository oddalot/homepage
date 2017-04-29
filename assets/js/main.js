if ('addEventListener' in window) {
  window.addEventListener('load', function() { 
    document.body.classList.remove('is-loading');
  });
  if (navigator.userAgent.match(/(MSIE|rv:11\.0)/)) classList.add('is-ie');
}

(function () {
  var root = null;
  var useHash = true;
  var hash = '#!';
  var router = new Navigo(root, useHash, hash);
  var root = document.getElementById("root");
  var portfolio = document.getElementById("portfolio");
  var portfolioWrapper = document.getElementById('portfolio-wrapper');
  var portfolioButtons = portfolioWrapper.querySelectorAll('.button');
  var iso = new Isotope( '.grid', {
    percentPosition: true,
    layoutMode: 'fitRows'
  });
  var buttonCheck = function (element) {
    portfolioButtons.forEach(function(el) {
      el.classList.remove('is-checked');
    });
    element.classList.add('is-checked');
  };
  var screenLoad = function () {
    setTimeout(function () {
      document.body.classList.remove('is-loading');
      iso.arrange({filter: ''});
      var allButton = document.getElementById("button-all");
      buttonCheck(allButton);
    }, 50);
  };

  router
  .on('/', function () {
    portfolio.style.display = "none";
    document.body.classList.add("is-loading");
    root.style.display = "block";
    screenLoad();
  })
  .on('/portfolio', function () {
    root.style.display = "none";
    document.body.classList.add("is-loading");
    portfolio.style.display = "block";
    screenLoad();
  })
  .resolve();

  portfolioWrapper.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    buttonCheck(e.target);
    switch (e.target.id) {
      case 'button-all':
        iso.arrange({filter: ''});
        break;
      case 'button-javascript':
        iso.arrange({filter: '.javascript'});
        break;
      case 'button-android':
        iso.arrange({filter: '.android'});
        break;
      case 'button-rails':
        iso.arrange({filter: '.rails'});
        break;
    }
  });
}());
