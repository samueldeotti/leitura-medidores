import app from './app';
import sequelize from './config/db';

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => console.log('Database connected!'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
