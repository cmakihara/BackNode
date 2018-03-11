const agendaRoutes = require('./agenda_routes');
const produtoRoutes = require('./produto_routes');
const usuarioRoutes = require('./usuario_routes');
const pedidoRoutes = require('./pedido_routes');
module.exports = function(app , pool){
  agendaRoutes(app,pool);
  produtoRoutes(app,pool);
  usuarioRoutes(app,pool);
  pedidoRoutes(app,pool);
};
