const express = require('express');
const app = express();
const mysql = require('mysql2')
const port = 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

function insert(name) {
  const connection = mysql.createConnection(config)
  const sql = `INSERT INTO people(name) VALUES('${name + ' - ' + nowFormattedDateBrazilWithTime()}')`
  connection.query(sql)
  connection.end()
}

function nowFormattedDateBrazilWithTime() {
  const date = new Date(Date.now());
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

insert('Igor')

app.get('/', (req, res) => {
  const connection = mysql.createConnection(config);
  const sql = `SELECT * FROM people`;

  connection.query(sql, (error, results) => {
    if (error) {
      res.send('Error retrieving data from the database.');
    } else {
      const names = results.map((row) => row.name);

      const listItems = names.map((name) => `<li>${name}</li>`).join('\n');
      const htmlResponse = `
      <h1>Full Cycle Rocks!</h1>
      <p>Lista de nomes cadastrada no banco de dados:</p>
      <ul>${listItems}</ul>
      `;

      res.send(htmlResponse);
    }

    connection.end();
  });
});

app.listen(port, () => {
  console.log('Rodando na porta ' + port);
})
