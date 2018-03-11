module.exports = function(app, pool) {

  app.post('/api/pedido', (req, res) => {

    pool.connect((err, client, release) => {

      const qtd_produto = req.body.qtd_produto;
      const valor_total = req.body.valor_total;
      const contato_id_contato = req.body.contato_id_contato;
      const usuario_id_usuario = req.body.usuario_id_usuario;


      if (err) {
        res.status(500);
        return console.error('Erro na conexão.', err.stack);
      }

      client.query("INSERT INTO pedido(qtd_produto,valor_total,contato_id_contato,usuario_id_usuario) VALUES ($1,$2,$3,$4)", [qtd_produto,valor_total,contato_id_contato,usuario_id_usuario], (err, item) => {

        release();

        if (err) {
          res.status(500).json(err);
          return console.error('Erro executanto a consulta', err.stack);

        } else {
          res.status(200).json("adicionado");
          return console.log('Inserido registro');

        }

      });
    });
  });


  app.get('/api/pedido', (req, res) => {

    const id = req.params.id;

    pool.connect((err, client, release) => {

      const qtd_produto = req.body.qtd_produto;
      const valor_total = req.body.valor_total;
      const contato_id_contato = req.body.contato_id_contato;
      const usuario_id_usuario = req.body.usuario_id_usuario;


      if (err) {
        res.status(500);
        return console.error('Erro na conexão.', err.stack);
      }

      client.query("SELECT * FROM pedido", [], (err, item) => {

        release();

        if (err) {
          res.status(500).json(err);
          return console.error('Erro executanto a consulta', err.stack);

        } else {
          res.status(200).json(item.rows);
          return console.log(item.rowCount + ' registros retornados.');

        }

      });

    });

  });


  app.get('/api/pedido/:id', (req, res) => {

    const id = req.params.id;

    pool.connect((err, client, release) => {

      const qtd_produto = req.body.qtd_produto;
      const valor_total = req.body.valor_total;
      const contato_id_contato = req.body.contato_id_contato;
      const usuario_id_usuario = req.body.usuario_id_usuario;


      if (err) {
        res.status(500);
        return console.error('Erro na conexão.', err.stack);
      }

      client.query("SELECT * FROM pedido WHERE id = $1", [id], (err, item) => {

        release();

        if (err) {
          res.status(500).json(err);
          return console.error('Erro executanto a consulta', err.stack);

        } else {
          res.status(200).json(item.rows);
          return console.log(item.rowCount + ' registros retornados.');

        }

      });

    });

  });

  app.delete('/api/pedido/:id', (req, res) => {
    const id = req.params.id;

    pool.connect((err, client, release) => {

      const qtd_produto = req.body.qtd_produto;
      const valor_total = req.body.valor_total;
      const contato_id_contato = req.body.contato_id_contato;
      const usuario_id_usuario = req.body.usuario_id_usuario;


      if (err) {
        res.status(500);
        return console.error('Erro na conexão.', err.stack);
      }

      client.query("DELETE FROM pedido WHERE id = $1", [id], (err, item) => {

        release();

        if (err) {
          res.status(500).json(err);
          return console.error('Erro executanto a consulta', err.stack);

        } else {
          res.status(200).json(item.rows);
          return console.log(item.rowCount + ' registros retornados.');

        }

      });

    });
  });

};
