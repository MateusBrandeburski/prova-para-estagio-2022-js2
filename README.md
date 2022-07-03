<div align="center">
<img src="https://user-images.githubusercontent.com/102932581/177040691-dd114a38-5504-4563-93b3-1916759b9b2f.png" width="1000px" />
</div>

<h1 align="center"> Projeto para Teste de Estágio  </h1>


## Descrição do Projeto:

O projeto desenvolvido faz parte do teste da empresa DashCommerce, para estagiário de desenvolvedor Fullstack. O Web Service é um projeto que ajuda o estudande a entender os mecanismos básicos de uma API.

A execução do projeto ajuda o estudante de programação entender como a aplicação interage com o servidor, entender as diferenças entre o Node.JS e o Apache, entender o farmato JSON, ter contato com os mecanismos da URL, fazer deploy da aplicação deixa-la online, ter contato com git bash para fazer o versionamento, além de ter contato com o código e suas funções.

## Funcionalidades:

O URL ultiliza Query Params, sendo que os parâmetros foram programados para responder como variáveis. Essas variáveis respondem a uma estrutura condicional. Se o parâmetro digitado correspoder a **true**, o navegador responderá com uma mensagem no formato JSON. Se o parâmetro for **false**, o nevegador resonderá com outra mensagem no formato JSON.

## Aplicação:

<div align="center">
<img src="https://user-images.githubusercontent.com/102932581/177048927-e7315f47-b4fd-4f24-91e0-28711471be44.gif" width="1000px" />
</div>


## Acesso ao projeto:

 
## Como Executar o projeto:
  Ao digitar no navegador o parâmetro **?user=dashcommerce&password=chooseMe** o Web Service deve retornar: *{"mensagem":"My full name is Mateus Brandeburski Ramos. I want this job!"}*
  
Exemplo: https://pova-para-estagio-2022-js2.herokuapp.com/dashcommercetest?user=dashcommerce&password=chooseMe4
  
  Caso seja digitado qualquer outra coisa depois do parâmetro, ele deve retornar: *{"mensagem":"Wrong credentials."}*

Exemplo: https://pova-para-estagio-2022-js2.herokuapp.com/dashcommercetest
  
## Ferramentas Utilizadas:

| <img src="https://user-images.githubusercontent.com/102932581/177049031-61ab3a9c-8a37-40fb-b48e-9a90d7017560.png" width=115><br><sub>Node.JS|  <img src="https://user-images.githubusercontent.com/102932581/177049037-f19854ad-7ffc-4d01-8a4b-7d0545d8919f.png" width=115><br><sub>Heroku</sub>|  <img src="https://user-images.githubusercontent.com/102932581/177049046-6d72585c-c7f9-493f-82cd-3c85bf141a4f.png" width=115><br><sub>Visual Studio</sub>| <img src="https://user-images.githubusercontent.com/102932581/177049095-88a849aa-e9ee-4558-83f8-aaeeebb91cb2.png" width=115><br><sub>Git Bash</sub>|
| :---: | :---: | :---: | :---: |

  
## Considerações Finais:

Esse teste foi um desafio para mim. Tive de enteder do zero a como contruir uma API, começando do mais básico:

* O que é um Web Service 
* GET, POST, DELETE, PUT...
* Como funciona o Express
* Criar um server
* Params Query, Route, Body...
* Git Bash

Apesar do teste não usar outro parêmetros além do query, foi necessario passar por alguns outros afim de entender como um todo o processo. Depois que eu entendi que a URL utilizava *query params*, precisei entender como fazer o parâmetro se comportar como uma variável. Como eu tinha feito Lógica de programação e Algoritmo em Python, eu sabia que era uma estrutura condicional que precisava ser feita.

Depois de tudo feito, chegou a hora de fazer o deploy. Porém, toda vez que eu subia o repositório no Heraku, ele não funcionava. Tive que ver diversos vídeos, pesquisar no Google, ver em Fóruns, entrar em canais de desenvolvedores do Discord e perguntar, etc. Até que eu percebi que todo o problema, era que eu não tinha criado um **.gitignore** e toda vez que eu atualizada o projeto com o git bash, ele subia a pasta *node_module*. Depois de resolvido esse problema, obtive exito em subir o projeto no Heroku.
  
O projeto conta com 35 commits de atualização (muitas tentativas, erros, acertos e aprendizado).

Ao todo, foram mais de 29.2 horas líquidas dedicadas ao projeto. Eu usei o método pomodoro, estudo focado por 25 minutos e 5 minutos relaxando, sendo que só são computadas as horas de estudo focado. 



<div align="center">
<img src="https://user-images.githubusercontent.com/102932581/177045406-52ad88f8-94f3-4cf1-973c-31f7f95a02d6.jpg" width="1000px" />
</div>

## Desenvolvedor
| [<img src="https://user-images.githubusercontent.com/102932581/177051558-31499416-a0cf-4495-8ab7-409dabca514f.jpg" width=115><br><br><sub>Mateus Brandeurski Ramos</sub>](https://github.com/TatakaeBR) |
| :---: |
