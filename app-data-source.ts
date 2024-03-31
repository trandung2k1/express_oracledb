import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Photo } from './entities/Photo';

export const dataSource = new DataSource({
    type: 'oracle',
    username: 'system',
    password: '123456789',
    port: 1521,
    database: 'nodejs',
    entities: [Photo],
    logging: true,
    synchronize: true,
});
