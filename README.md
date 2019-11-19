
#Dependencias

##mysql2
    -- npm install --save mysql2

    Banco de dados do sistema

##express-session
    -- npm install --save express-session

##Redis
    -- npm install --save connect-redis
    -- npm install --save redis

É preciso depois instalar o redis no seu sistema
como estou usando o Linux Mint eu usei.
    baixei a versão 5.0.5 do redis no site

Baixe, extraia e compile o Redis com:

    $ wget http://download.redis.io/releases/redis-5.0.5.tar.gz
    $ tar xzf redis-5.0.5.tar.gz
    $ cd redis-5.0.5
    $ make

Os binários que agora são compilados estão disponíveis no 

$ src/diretório 

    Execute o Redis com:

$ src/redis-server

https://redis.io/download
usado para armazenar os dados das sessões
