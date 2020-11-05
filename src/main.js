import Koa from 'koa';
import mongoose from 'mongoose';

const app = new Koa();

const { PORT, MONGO_URI } = process.env;
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(e => {
    console.error(e);
  });

//response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(3000);
