module.exports = {
    development: {
      client: 'pg',
      connection: {
        database: 'my_project',
        user: 'postgres', 
        password: 'baron1988' 
      },
      migrations: {
        directory: __dirname + '/db/migrations'
      },
      seeds: {
        directory: __dirname + '/db/seeds'
      }
    }
  };
  