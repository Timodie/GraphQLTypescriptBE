import { __prod__ } from './constants';
import { Post } from './entities/Post';
import { User } from './entities/User';
import { MikroORM } from '@mikro-orm/core';
import path from 'path';

export default {
  entities: [Post, User],
  dbName: 'fullstackgraphql',
  debug: !__prod__,
  type: 'postgresql',
  user: 'postgres',
  password: 'newPassword',
  migrations: {
    path: path.join(__dirname, './migrations'), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/ // regex pattern for the migration files
  }
} as Parameters<typeof MikroORM.init>[0];
