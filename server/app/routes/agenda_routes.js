
module.exports = function(app, pool) {

  app.post('/api/agenda', (req, res) => {

    pool.connect((err, client, release) => {

      const razao_social = req.body.razao_social;
      const nome_fantasia = req.body.nome_fantasia;
      const cnpj = req.body.cnpj;
      const telefone = req.body.telefone;
      const nome_dono = req.body.nome_dono;
      const nome_compra = req.body.nome_compra;
      const local_entrega = req.body.local_entrega;
      const rua = req.body.rua;
      const numero = req.body.numero;
      const bairro = req.body.bairro;
      const cep = req.body.cep;
      const complemento = req.body.complemento;
      const observacao = req.body.observacao;



      if (err) {
        res.status(500);
        return console.error('Erro na conexão.', err.stack);
      }

      client.query("INSERT INTO contato(razao_social,nome_fantasia,cnpj,telefone,nome_dono,nome_compra,local_entrega,rua,numero,bairro,cep,complemento,observacao)VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)", [razao_social,nome_fantasia,cnpj,telefone,nome_dono,nome_compra,local_entrega,rua,numero,bairro,cep,complemento,observacao], (err, item) => {

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

      const razao_social = req.body.razao_social;
      const nome_fantasia = req.body.nome_fantasia;
      const cnpj = req.body.cnpj;
      const telefone = req.body.telefone;
      const nome_dono = req.body.nome_dono;
      const nome_compra = req.body.nome_compra;
      const local_entrega = req.body.local_entrega;
      const rua = req.body.rua;
      const numero = req.body.numero;
      const bairro = req.body.bairro;
      const cep = req.body.cep;
      const complemento = req.body.complemento;
      const observacao = req.body.observacao;

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

      const razao_social = req.body.razao_social;
      const nome_fantasia = req.body.nome_fantasia;
      const cnpj = req.body.cnpj;
      const telefone = req.body.telefone;
      const nome_dono = req.body.nome_dono;
      const nome_compra = req.body.nome_compra;
      const local_entrega = req.body.local_entrega;
      const rua = req.body.rua;
      const numero = req.body.numero;
      const bairro = req.body.bairro;
      const cep = req.body.cep;
      const complemento = req.body.complemento;
      const observacao = req.body.observacao;


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

      const razao_social = req.body.razao_social;
      const nome_fantasia = req.body.nome_fantasia;
      const cnpj = req.body.cnpj;
      const telefone = req.body.telefone;
      const nome_dono = req.body.nome_dono;
      const nome_compra = req.body.nome_compra;
      const local_entrega = req.body.local_entrega;
      const rua = req.body.rua;
      const numero = req.body.numero;
      const bairro = req.body.bairro;
      const cep = req.body.cep;
      const complemento = req.body.complemento;
      const observacao = req.body.observacao;


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
