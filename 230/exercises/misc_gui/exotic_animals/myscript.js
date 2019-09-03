var figures = [
  {
    src: "Bazookan.png",
    caption: "Bazookan"
  },
  {
    src: "blessing_elephant.png",
    caption: "Blessing Elephant"
  },
  {
    src: "Bombat.png",
    caption: "Bombat"
  },
  {
    src: "giraffemas_tree.png",
    caption: "Giraffemas Tree"
  },
  {
    src: "frankenswine.png",
    caption: "Frankenswine"
  },
  {
    src: "Hippiepotamus.png",
    caption: "Hippiepotamus"
  },
  {
    src: "sea_lion.png",
    caption: "Sea Lion"
  },
  {
    src: "Termigator.png",
    caption: "Termigator"
  },
  {
    src: "Vlambeer.png",
    caption: "Vlambeer"
  },
  {
    src: "Zegasus.png",
    caption: "Zegasus"
  },
]

var figureList = Handlebars.compile($("#figureList").html());
var figureTemplate = Handlebars.compile($("#figureTemplate").html());
Handlebars.registerPartial("figureTemplate", $("#figureTemplate").html());

$(function() {
  var App = {
    startTimer: function(e) {
      this.timer = setTimeout(function() {
        this.showToolTip(e);
      }.bind(this), 1000);
    },
  
    showToolTip: function(e) {
      $figcap = $(e.target).next('figcaption').fadeIn(300);
      $figcap.css('position', 'absolute');
    },
  
    handleMouseLeave: function() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
  
      $('figcaption').fadeOut(300);
    },
  
    init: function() {
      $('#figureGrid').on('mouseenter', 'img', this.startTimer.bind(this));
      $('#figureGrid').on('mouseleave', 'img', this.handleMouseLeave.bind(this));
    }
  }; 

  $("#figureGrid").html(figureList({figures: figures}));
  $('figcaption').hide();
  App.init();
});
