import 'dotenv/config'
import { createError } from 'http-json-errors'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import { resolve } from 'path'

import indexRouter from './routes/index.js'
import authorRouter from './routes/authors.js'
import postRouter from './routes/posts.js'
import favoriteRouter from './routes/favorites.js'

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(resolve(), 'public')));

app.use('/', indexRouter);
app.use('/authors', authorRouter);
app.use('/posts', postRouter);
app.use('/favorites', favoriteRouter);


// catch 404 and forward to error handler
app.use(function(req, res) {
  res.send(createError(404));
  return
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err.message });
});

export default app;
