module.exports = function(app, pool) {

  app.post('/api/usuario', (req, res) => {

    pool.connect((err, client, release) => {

      const nome = req.body.nome;
      const telefone = req.body.telefone;
      const endereco = req.body.endereco;
      const email = req.body.email;
      const tipoUser = req.body.tipoUser;
      const senha = req.body.senha;

      if (err) {
        res.status(500);
        return console.error('Erro na conexão.', err.stack);
      }

      client.query("INSERT INTO usuario(nome,telefone,endereco,email,tipoUser,senha) VALUES ($1,$2,$3,$4,$5,$6)", [nome,telefone,endereco,email,tipoUser,senha], (err, item) => {

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


  app.get('/api/usuario', (req, res) => {

    const id = req.params.id;

    pool.connect((err, client, release) => {

      const nome = req.body.nome;
      const telefone = req.body.telefone;
      const endereco = req.body.endereco;
      const email = req.body.email;
      const tipoUser = req.body.tipoUser;
      const senha = req.body.senha;


      if (err) {
        res.status(500);
        return console.error('Erro na conexão.', err.stack);
      }

      client.query("SELECT * FROM usuario", [], (err, item) => {

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


  app.get('/api/usuario/:id', (req, res) => {

    const id = req.params.id;

    pool.connect((err, client, release) => {

      const nome = req.body.nome;
      const telefone = req.body.telefone;
      const endereco = req.body.endereco;
      const email = req.body.email;
      const tipoUser = req.body.tipoUser;
      const senha = req.body.senha;


      if (err) {
        res.status(500);
        return console.error('Erro na conexão.', err.stack);
      }

      client.query("SELECT * FROM usuario WHERE id = $1", [id], (err, item) => {

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

  app.delete('/api/usuario/:id', (req, res) => {
    const id = req.params.id;

    pool.connect((err, client, release) => {

      const nome = req.body.nome;
      const telefone = req.body.telefone;
      const endereco = req.body.endereco;
      const email = req.body.email;
      const tipoUser = req.body.tipoUser;
      const senha = req.body.senha;


      if (err) {
        res.status(500);
        return console.error('Erro na conexão.', err.stack);
      }

      client.query("DELETE FROM usuario WHERE id = $1", [id], (err, item) => {

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
