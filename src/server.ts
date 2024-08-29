import app from './app';
import sequelize from './database/config/db';
import dotenv from 'dotenv';

dotenv.config();

const PORT = 8080;

sequelize.sync().then(() => console.log('Database connected!'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
