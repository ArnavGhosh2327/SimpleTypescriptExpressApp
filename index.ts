import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

app.use(helmet());
app.use(morgan('combined'));

app.get('/', (req, res) => {
  const data = {
    name: 'Trisha'
  }
  res.json(data);
})

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})
