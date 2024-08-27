import { Model, QueryInterface, DataTypes } from 'sequelize';
import { Measure } from '../types/Measure';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<Measure>>('measures', {
      uuid: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      customerCode: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'customer_code',
      },
      measureDate: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'measure_date',
      },
      measureType: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'measure_type',
      },
      measureValue: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'measure_value',
      },
      hasConfirmed: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        field: 'has_confirmed',
      },
      imageUrl: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'image_url',
      },
      
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('measures');
  },
};
