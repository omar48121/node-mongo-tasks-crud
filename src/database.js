import {connect} from 'mongoose';
import {MONGODB_URI} from './config';

// contectar atraves de mongo al localhost a la db llamada crud-mongo
(async () => {
  try {
    const db = await connect(MONGODB_URI);
    console.log('db connected to:', db.connection.name);
  } catch (e) {
    console.log(e);
  }
})();