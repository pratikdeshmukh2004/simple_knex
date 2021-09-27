# Basic `knex` implementation with `MySQL` database

In this project I have implmented basic `knex` operations with `MySQL` database

## Requirements ↴

        $ MySQL
        $ knex

## Installation process and Execution:

First of all If you'are using `Linux-based-OS`, open your `terminal` and install the latest version of `mysql` database into your system. by writing the following commands.

1. Update your system ↴

       sudo apt-get update

2. Install `MySQL` server in your system ↴

       sudo apt-get install mysql-server

3. Open `MySQL` shell ↴

       sudo mysql -u root -p

4. Set password to your `MySQL` server ↴

       ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Anand@18';

+ Note- password should be strong. Exa:- Anand@18

5. FLUSH your server ↴

       FLUSH PRIVILEGES;

+ Install `knex` query-builder in your system.

        npm install knex --save