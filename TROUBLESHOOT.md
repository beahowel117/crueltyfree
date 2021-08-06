# Errors
---

### PostgresSQL

- Port 5432 is already in use...cannot initialize
[resolve](https://github.com/dwyl/learn-postgresql/issues/60)

sudo lsof -i :5432
sudo pkill -u postgres


### Prisma
Error: P3014
- https://github.com/prisma/prisma/releases/tag/2.17.0
- https://www.prisma.io/docs/concepts/components/prisma-migrate/shadow-database#cloud-hosted-shadow-databases-must-be-created-manually
