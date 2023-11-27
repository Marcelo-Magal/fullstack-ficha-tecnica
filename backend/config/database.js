module.exports = {
  development: {
    username: "postgres",
    password: process.env.DB_PASSWORD,
    database: "gastrotech_test",
    host: "127.0.0.1",
    dialect: "postgres",
    // Adicione outras configurações necessárias
  },
  // Você pode adicionar mais configurações para outros ambientes
};
