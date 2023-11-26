import { TypeOrmModuleOptions } from '@nestjs/typeorm'

const ormconfig: TypeOrmModuleOptions[] = [
  {
    "name":"dev",
    "type":"mariadb",
    "host":"localhost",
    "port":3306,
    "username":"root",
    "password":"1234",
    "database":"electric",
    "entities":["dist/**/entities/*{.ts,.js}"],
    "synchronize":true,
    "migrations":["src/migrations/*{.ts,.js}"],
  },
  {
    "name": "prod",
    "type": "mysql",
    "host": "mysqldb",
    "port": 3306,
    "username": "root",
    "password": "pass123",
    "database": "electric",
    "entities": ["dist/**/entities/*{.ts,.js}"],
    "synchronize": true,
    "migrations": ["dist/migrations/*{.ts,.js}"],
  }
]
  
export default ormconfig