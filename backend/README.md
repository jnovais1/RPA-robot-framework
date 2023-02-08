# marca_ambiental
<h3>Projeto Mãos que Conectam com a Segurança</h3>



<strong><blockquote>Este software é uma API criada para a empresa Marca Ambiental, onde possui diversas rotas e o caminho para o banco de dados será explicado neste documento: </blockquote></strong>



A criação de modelos e conexão é feita pelo 'Prisma.io'.



<strong>_Para que a aplicação seja inicializada pela primeira vez, é necessário executar os seguintes passos: </strong>_
<ul>
<strong><li>Criação de um arquivo .env e preencher os campos da seguinte forma: </strong>

DATABASE_URL: "mysql://janedoe:mypassword@localhost:3306/mydb". </li> Alterando o link de conexão com o banco de dados, usuário e senha personalizado que estará usando.

-Caso a aplicação não encontre "DATABASE_URL", voltar ao arquivo .env e remover as aspas da string de conexão. 

<strong><li>SECRET: Chave v4 UUID qualquer gerada. </li></strong>
Exemplo: 'da755695-01a4-44c1-8380-9bde6f45cf5e'.

<strong><li>cd backend </strong>

<strong><li>Instalação dos módulos: </li></strong>
npm install 


<strong><li>Criação do banco de dados: </li></strong>
npx prisma db push 


<strong><li>Inicialização da aplicação: </li></strong>
npm start 
<ul>


- ***Em caso de erro com o ".prisma/client", executar os seguintes passos:***
 - npx prisma generate
 - Utilizando a IDE "VSCode": 
 - CTRL + SHIFT + P > Developer: Reload Window
 
