
var Sticky = {

  initialize: function() {
    this.elements();
    this.events();
  },

  elements: function() {
    this.element = $('header');
  },

  events: function() {
    $(window).scroll(function() {
      if ($(window).scrollTop() > Sticky.element.outerHeight()) {
        $('body').addClass('sticky--active');
      } else {
        $('body').removeClass('sticky--active');
      };
    });
  }
};
Sticky.initialize();

$('.wy-menu-vertical .caption').each(function() {
    if ($(this).next().hasClass('current')) {
        if ($(this).text() == 'General') {
            $('header .toctree-l1:nth-child(1)').addClass('current');
            console.log($(this).text());
        } else if ($(this).text() == 'For Developers') {
            $('header .toctree-l1:nth-child(2)').addClass('current');
            console.log($(this).text());
        } else if ($(this).text() == 'For Editors') {
            $('header .toctree-l1:nth-child(3)').addClass('current');
            console.log($(this).text());
        } else if ($(this).text() == 'Release Notes') {
            $('header .toctree-l1:nth-child(4)').addClass('current');
            console.log($(this).text());
        }
    }
});
