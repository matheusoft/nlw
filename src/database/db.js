//inportar a dependencia do sqlite3

const sqlite = require('sqlite3').verbose()


//iniciar o objeto que ira fazer operações no banco de dados

const db = new sqlite.Database('./src/database/database.db')

module.exports = db

//utilizar o objeto de banco de dados, sera nossas operação

db.serialize(()=>{
    //Com comandos SQL eu vou:

    //1 Criar um tabela 

//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );


//     `)

//     //2 Inserir dados da tabela
//     const query =`
//     INSERT INTO places(
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city, 
//         items

//     ) VALUES ( ?,?,?,?,?,?,?);


// `   
//     const values = [
//         "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
//         "Papersider",
//         "Guilherme Gemballa, Jardim América",
//         "Número 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Papéis e Papelão"

//     ]


//     function afterInsertData(err){
//         if(err){
//             return console.log(err)
//         }

//         console.log('Cadastrado com Sucesso')
//         console.log(this)

//     }


    // db.run(query,values, afterInsertData)

 
    //3 Consultar os dados da tabela

    // db.all('SELECT * FROM places', function(err, rows){
    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log('Aqui estão os seus registros: ')
    //     console.log(rows)

    // })



    //4 Deletar um dados da tabela

    // db.run('DELETE FROM places WHERE Id = ?',[1], function(err){
    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log('Registro deletado com sucesso!')
    // })

})