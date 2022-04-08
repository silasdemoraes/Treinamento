
# Pré requistos

Docker 20 ou superior
Docker-compose
Dbeaver
Visual stutdio code
Node 14 ou superior
NPM 6 ou superior


# Como rodar

Para executar o projeto é necessário rodar o docker-copose.yml 

```bash
docker-compose up --build 
```

# Permissões
chmod +x back/etaure/wait-for.sh

# Parando containers e excluindo volumes

Para parar todos os containers do projeto limpando os seus volumes basta executar o comando abaixo

```bash
docker-compose down -v --remove-orphans
```

# Gerar entidades por engenharia reversa
instalar modulo globalmente

npm i -g typeorm-model-generator

## Rodar dentro do container PDV
npx typeorm-model-generator -h database -p 5432  -d banco -u usuario -x senha -e postgres -o . -s public

## Problemas de permissão node modules
Caso esteja tendo problemas de permissão será necessário adicionar o seu usário como propietário da pasta do node_modules

sudo chown -R silas:silas node_modules