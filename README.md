## Descrição
Este repositório contem todo o código relacionado a interface de usuário do SmartCleaner.

Para mais informações sobre a arquiteture e recursos do projeto, visite: [SmartCleaner Wiki](https://github.com/rafaelsouzak2b/smart-cleaner-ui/wiki)

<br>

**Link para acesso do projeto**

Para acessar o projeto em produção visite: http://production.eba-32pvrax3.us-east-1.elasticbeanstalk.com/

## Como executar o projeto

### Defina as variáveis de ambiente
Renomeie o arquivo .env.example para .env.local e substituia as informações padrão por credenciais válidas.<br>
Abaixo temos o arquivo .env.example com informações fictícias.

```
NEXT_PUBLIC_API_URL=http://localhost:9090
NEXT_PUBLIC_DEFAULT_TOKEN=XYZ
```

### Rode os comandos para instalação e execução do projeto

```shell
// para instalação dos pacotes
npm install

// para rodar em modo de desenvolvimento
npm run dev

// para fazer o build da aplicação
npm run build

// para rodar a aplicação após o build 
npm start 
```





