const mysql = require('mysql');
const config = require('./config')
const connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

connection.query(`SELECT * FROM task`, (result) => {
  console.log(result);
});

const insertTask = `INSERT INTO task(id, title, description, created, updated, due_date, status_id, user_id)                    
                    VALUES(?,?,?,?,?,?,?,?)`;

const insertValues = [36, 'Wash clothes', 'Title says it all.', '2017-10-25 06:54:16', '2017-10-15 13:05:09', null, 2, 1];

connection.query(insertTask, insertValues, (error, results, fields) => {
  if(error){
    return console.error(error.message);
  }
  console.log(results);
});


const changeTaskTitle = `SELECT title FROM task `

connection.end();
