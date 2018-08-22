const app = require('express')();

app.use('/', require('./routes'));

const { PORT = 8080 } = process.env;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
