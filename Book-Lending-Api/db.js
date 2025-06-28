import knexConfig from './knexfile.js';
import Knex from 'knex';
import { Model } from 'objection';

const knex = Knex(knexConfig.development);
Model.knex(knex);

export default knex;
