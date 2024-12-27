const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');

const config = {
    host: 'db',  
    user: 'root',
    password: 'root',
    database: 'challengedb'
};

const connection = mysql.createConnection(config);

app.get('/', (req, res) => {

    const insertSql = `INSERT INTO people(name) VALUES ('FullCycle NGINX')`;
    
    connection.query(insertSql, (error, results) => {
        if (error) {
            console.error('Error inserting into database:', error);
            return res.status(500).send('Error inserting into database');
        }
        
        console.log('Record inserted successfully:', results);
        
        const selectSql = `SELECT * FROM people`;
        
        connection.query(selectSql, (error, results) => {
            if (error) {
                console.error('Error when searching the database:', error);
                return res.status(500).send('Error when searching the database');
            }
            
            let html = '<h1>Full Cycle Rocks!!</h1><ul>';
            results.forEach(person => {
                html += `<li>${person.name}</li>`;
            });
            html += '</ul>';
            
            res.send(html);
        });
    });    
    
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to the database');
    app.listen(port, () => {
        console.log('Running on port ' + port);
    });
});
