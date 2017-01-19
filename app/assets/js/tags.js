riot.tag2('app', '<ul><li><a href="#pagina1" onclick="{carregaPagina}">pagina1</a></li><li><a href="#pagina2" onclick="{carregaPagina}">pagina2</a></li><li><a href="#pagina3" onclick="{carregaPagina}">pagina3</a></li></ul><div show="{paginaAtual == \'pagina1\'}"><h1>pagina 1</h1></div><div show="{paginaAtual == \'pagina2\'}"><h1>pagina 2</h1></div><div show="{paginaAtual == \'pagina3\'}"><h1>pagina 3</h1></div>', '', '', function(opts) {
    var self = this;

    self.paginaAtual = '';

    riot.route(function(page) {
      if (page == '') {
        window.location.hash = 'pagina1';
      } else {
        self.paginaAtual = page;
        self.update();
      }
    });

    self.on('mount', function() {
      riot.route.start(true);
      console.log('ok')
    });

});

