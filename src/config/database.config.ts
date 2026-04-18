import 'dotenv/config';

export const databaseUrl =
  `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}` +
  `@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}` +
  `?schema=${process.env.DB_SCHEMA}`;
