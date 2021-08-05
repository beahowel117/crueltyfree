### Error

- Port 5432 is already in use...cannot initialize
[resolve](https://github.com/dwyl/learn-postgresql/issues/60)

sudo lsof -i :5432
sudo pkill -u postgres
