import { join } from 'path';

export default {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'test',
  password: process.env.DB_PASSWORD || 'test',
  database: process.env.DB_NAME || 'test',
  synchronize: Boolean(process.env.DB_SYNC) || false,
  logging: Boolean(process.env.DB_LOGGING) || true,
  entities: [join(__dirname, '..', '**/*.entity.{js,ts}')],
};
