module.exports = function(app, pool) {

  app.post('/api/produto', (req, res) => {

    pool.connect((err, client, release) => {

      const nomeproduto = req.body.nomeproduto;
      const descricao = req.body.descricao;
      const medida = req.body.medida;
      const qtdminima = req.body.qtdminima;
      const valorminimo = req.body.valorminimo;
	  const valorvenda = req.body.valorvenda;
      const codigobarra = req.body.codigobarra;
      const categoria = req.body.categoria;

      if (err) {
        res.status(500);
        return console.error('Erro na conexão.', err.stack);
      }

      client.query("INSERT INTO produto(nomeproduto,descricao,medida,qtdminima,valorminimo,valorvenda,codigobarra,categoria) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)", [nomeproduto,descricao,medida,qtdminima,valorminimo,valorvenda,codigobarra,categoria], (err, item) => {

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


  app.get('/api/produto', (req, res) => {

    const id = req.params.id;

    pool.connect((err, client, release) => {

      const nomeproduto = req.body.nomeproduto;
      const descricao = req.body.descricao;
      const medida = req.body.medida;
      const qtdminima = req.body.qtdminima;
      const valorminimo = req.body.valorminimo;
	  const valorvenda = req.body.valorvenda;
      const codigobarra = req.body.codigobarra;
      const categoria = req.body.categoria;


      if (err) {
        res.status(500);
        return console.error('Erro na conexão.', err.stack);
      }

      client.query("SELECT * FROM produto", [], (err, item) => {

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


  app.get('/api/produto/:id', (req, res) => {

    const id = req.params.id;

    pool.connect((err, client, release) => {

      const nomeproduto = req.body.nomeproduto;
      const descricao = req.body.descricao;
      const medida = req.body.medida;
      const qtdminima = req.body.qtdminima;
      const valorminimo = req.body.valorminimo;
	  const valorvenda = req.body.valorvenda;
      const codigobarra = req.body.codigobarra;
      const categoria = req.body.categoria;


      if (err) {
        res.status(500);
        return console.error('Erro na conexão.', err.stack);
      }

      client.query("SELECT * FROM produto WHERE id = $1", [id], (err, item) => {

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

  app.delete('/api/produto/:id', (req, res) => {
    const id = req.params.id;

    pool.connect((err, client, release) => {

      const nome = req.body.nome;
      const tipo = req.body.tipo;
      const valor = req.body.valor;
      const quantidade = req.body.quantidade;
      const seila = req.body.seila;


      if (err) {
        res.status(500);
        return console.error('Erro na conexão.', err.stack);
      }

      client.query("DELETE FROM produto WHERE id = $1", [id], (err, item) => {

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
