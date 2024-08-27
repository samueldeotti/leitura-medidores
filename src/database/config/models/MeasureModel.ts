import {
  DataTypes,
  Model,
  Optional,
  ModelDefined,
} from 'sequelize';
import db from '../db';

import { Measure } from '../../../types/Measure';

export type MeasureInputtableFields = Optional<Measure, 'uuid'>;

type MeasureSequelizeModelCreator = ModelDefined<Measure, MeasureInputtableFields>;

export type MeasureSequelizeModel = Model<Measure, MeasureInputtableFields>;

const MeasureModel: MeasureSequelizeModelCreator = db.define('Measure', { 
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
}, {
  tableName: 'measures',
  timestamps: false,
  underscored: true,
});


export default MeasureModel;
