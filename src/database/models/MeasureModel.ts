import {
  DataTypes,
  Model,
  Optional,
  ModelDefined,
} from 'sequelize';
import db from '../config/db';

import { Measure } from '../../types/Measure';

export type MeasureInputtableFields = Optional<Measure, 'uuid'>;

type MeasureSequelizeModelCreator = ModelDefined<Measure, MeasureInputtableFields>;

export type MeasureSequelizeModel = Model<Measure, MeasureInputtableFields>;

const MeasureModel: MeasureSequelizeModelCreator = db.define('Measure', { 
  uuid: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUIDV4,
    defaultValue: DataTypes.UUIDV4,
  },
  customerCode: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'customer_code',
  },
  measureDatetime: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'measure_datetime',
  },
  measureType: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'measure_type',
  },
  measureValue: {
    allowNull: false,
    type: DataTypes.INTEGER,
    // defaultValue: 0, // ficar 0 por enquanto ate desenvolver a funcionalidade
    field: 'measure_value',
  },
  hasConfirmed: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: 'has_confirmed',
  },
  image: {
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
