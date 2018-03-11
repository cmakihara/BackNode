module.exports = function(app, pool) {

  app.post('/api/agenda', (req, res) => {

    pool.connect((err, client, release) => {

      const nome = req.body.nome;
      const telefone = req.body.telefone;
      const endereco = req.body.endereco;
      const email = req.body.email;
      const celular = req.body.celular;

      if (err) {
        res.status(500);
        return console.error('Erro na conexão.', err.stack);
      }

      client.query("INSERT INTO contato(nome,telefone,endereco,email,celular) VALUES ($1,$2,$3,$4,$5)", [nome,telefone,endereco,email,celular], (err, item) => {

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


  app.get('/api/agenda', (req, res) => {

    const id = req.params.id;

    pool.connect((err, client, release) => {

      const nome = req.body.nome;
      const telefone = req.body.telefone;
      const endereco = req.body.endereco;
      const email = req.body.email;
      const celular = req.body.celular;


      if (err) {
        res.status(500);
        return console.error('Erro na conexão.', err.stack);
      }

      client.query("SELECT * FROM contato", [], (err, item) => {

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


  app.get('/api/agenda/:id', (req, res) => {

    const id = req.params.id;

    pool.connect((err, client, release) => {

      const nome = req.body.nome;
      const telefone = req.body.telefone;
      const endereco = req.body.endereco;
      const email = req.body.email;
      const celular = req.body.celular;


      if (err) {
        res.status(500);
        return console.error('Erro na conexão.', err.stack);
      }

      client.query("SELECT * FROM contato WHERE id = $1", [id], (err, item) => {

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

  app.delete('/api/agenda/:id', (req, res) => {
    const id = req.params.id;

    pool.connect((err, client, release) => {

      const nome = req.body.nome;
      const telefone = req.body.telefone;
      const endereco = req.body.endereco;
      const email = req.body.email;
      const celular = req.body.celular;


      if (err) {
        res.status(500);
        return console.error('Erro na conexão.', err.stack);
      }

      client.query("DELETE FROM contato WHERE id = $1", [id], (err, item) => {

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
