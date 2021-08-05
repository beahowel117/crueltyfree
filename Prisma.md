### Commands

- npx prisma migrate dev --name *COMMITMESSAGE*

// Apply to your local db after schema updates
- npx prisma migrate dev

###
[Type mapping between PostgreSQL to Prisma schema](https://www.prisma.io/docs/concepts/database-connectors/postgresql#configuring-an-ssl-connection)

[Formatting Models](https://www.prisma.io/docs/concepts/components/prisma-schema)


### Downloads

1. [Prisma Studio](https://www.prisma.io/studio)
   - Visual viewing and editing

### In this schema, you configure three things:
1. __Data source__: Specifies your database connection (via an environment variable)
2. __Generator__: Indicates that you want to generate Prisma Client
3. __Data model__: Defines your application models


#### Data Model
1. Data model is a collection of models.
2. A model has two major functions:
    - Represent a table inr elational dbs
    -  Provide the foundation for the queiries in the Prisma Client API
3. Two major workflows for "getting" a data model into your Prisma schema:
    - Manually writing the data model and mapping it to the database with Prisma Migrate
    - Generating the data model by introspecting a database


### `db push` vs Prisma Migrate
- db push and Prisma Migrate both synchronize your Prisma schema and database schema,
- BUT they play different roles in the development workflow and should not be used interchangeably.
