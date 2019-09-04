var languages = [
  {
    name: 'Ruby',
    description: 'Ruby is a dynamic, reflective, object-oriented, ' +
    'general-purpose programming language. It was designed and developed in the mid-1990s ' +
    'by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, ' +
    'Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, ' +
    'including functional, object-oriented, and imperative. It also has a dynamic type ' +
    'system and automatic memory management.'
  },

  {
    name: 'Victor',
    description: 'A very lovely 2000-year-old cat.'
  },

  {
    name: 'JavaScript',
    description: 'JavaScript is a high-level, dynamic, untyped, and interpreted ' +
    'programming language. It has been standardized in the ECMAScript language ' +
    'specification. Alongside HTML and CSS, JavaScript is one of the three core ' +
    'technologies of World Wide Web content production; the majority of websites employ ' +
    'it, and all modern Web browsers support it without the need for plug-ins. JavaScript ' +
    'is prototype-based with first-class functions, making it a multi-paradigm language, ' +
    'supporting object-oriented, imperative, and functional programming styles.'
  },

  {
    name: 'Lisp',
    description: 'Lisp (historically, LISP) is a family of computer programming languages ' +
    'with a long history and a distinctive, fully parenthesized prefix notation. ' +
    'Originally specified in 1958, Lisp is the second-oldest high-level programming ' +
    'language in widespread use today. Only Fortran is older, by one year. Lisp has changed ' +
    'since its early days, and many dialects have existed over its history. Today, the best '+
    'known general-purpose Lisp dialects are Common Lisp and Scheme.'
  }
];

var truncate = function(str) {
  if (str.length > 120) {
    return str.substring(0, 120) + '...'; 
  } else {
    return str; 
  }
}

var description = function(name) {
  // find description given name
  // use the variable languages
  for (var i = 0; i < languages.length; i ++) {
    if (languages[i]['name'] === name) {
      return languages[i]['description'];
    };
  };
}

$(function () {
  var articleTemplate = Handlebars.compile($('#article_template').html());
  var articles = Handlebars.compile($('#articles').html());
  Handlebars.registerPartial('article_template', $('#article_template').html());
  Handlebars.registerHelper('truncate', truncate);
  $('body').append(articles({articles: languages}));
  $('p').each(function() {
    if ($(this).text().length < 120) {
      $(this).parent().children('button').hide();
    };
  });

  $('button').click(function(e) {
    var $e = $(e.currentTarget)
    var name = $e.parent().attr('id');
    var $p = $e.parent().children('p'); 
    if ($e.hasClass('more')) {
      $p.text(description(name));
      $e.text('Show Less');
      $e.removeClass('more');
      $e.addClass('less');
    }
    else {
      $p.text(truncate(description(name)));
      $e.text('Show More');
      $e.removeClass('less');
      $e.addClass('more');
    }
  });

});
