# FacilitaTask
FacilitaTask

# Sumário
* [FacilitaTask](#facilitatask---explicação-do-codigoconstrução-do-codigo-e-plus)
* [FacilitaTask - Construção do app](##facilitatask---construção-do-app)
* [Desafio - todoList](#desafio---todolist)

## FacilitaTask - (Explicação do codigo,Construção do codigo e Plus)

- Projeto Foi Dividido na seguinte estrutura de pastas:
  - View - Paginas de visualização.
  - Components - Todos os items para montagem da tela.
  - Component/Modal - Modal para criar tarefa e de excluir tarefa.
  - Component/Content - montagem do texto no meio da tela de "você possui tantas tarefas".
  - assets - onde são colocados os css, imagens e fonts e etc.
  - router - montagem das rotas da aplicação.
  - store - para o uso do vuex na aplicação.


## FacilitaTask - Construção do app
> Bom a construção do app se deu primeiro no layout primeiramente. E logo apois isso construi as funções basicas do crud que foi dado no
[Desafio](#Desafio)

### Desafio - todoList
- Listar tarefas
- Adicionar tarefa
- Excluir tarefa
- Marcar tarefa como concluída
- Buscar tarefas pelo título
- Uso do LocalStorage


## Plus Nivel 1 e Nivel 2
* Nivel 1.
  * Responsividade das telas  - (**Obs.: Foi feito somente a responsividade com mais detalhes da pagina de Login**)
  * Comente o código criando uma mini documentação
  * Hospede o projeto em um servidor e nos mande a URL para visualização.

* Nivel 2
  * Crie o recurso de edição da tarefa
  * Implemente uma busca que utiliza os campos título e descrição juntos.
  * Ao listar todas as tarefas, ordene a lista de acordo com a prioridade: Urgentes, Importantes, Outras
  * Utilize o Vuex

## Explicando Codigo 
 - MyTasks.vue
    * Bom aqui eu estou criando a NavBar que contém as informações do Dashboard,Tarefas e Configurações, logo depois disso, eu creio o LayoutContent, pois é onde crio o content do app e também o outro Navbar de categorias e também o header do app, que contém a informação do Usuario que logou no sistema
 ![myImage](https://i.ibb.co/J3ktBkb/Screenshot-17.png)
 
 - LayoutContent.vue 
    * Aqui estamos criando os componentes que mencionei logo acima na primeira imagem, que são Header,Leftbar que e o Navbar a direito, e o Content, onde tem a lista de tarefas. Bom e dentro do Componente Header também chamo outro component chamado CardUser que é onde está escrito o nome do "usuario e front-end Developer"
 ![myImage](https://i.ibb.co/CwFDC56/Screenshot-18.png)
 
 - CardUser.vue
    * Nesse arquivo para puxar o nome do usuario eu puxo diretamente do Localstorage.
 ![myImage](https://i.ibb.co/1JPsKwr/Screenshot-19.png)
 
 - Header.vue
    * Chamada do Arquivo CardUser.vue
 ![myImage](https://i.ibb.co/W2H7MJc/Screenshot-20.png)
 
 - Content.vue
    * Nesse arquivo é onde ele irá criar o content da listagem das tarefas, e o compponente que chama "MyTasks" estou chamando ele nesse arquivo, enviando algumas props que ele irá receber os dados, como a props ":listJobs", bom aqui é eu envio toda a lista de tarefas para o component "MyTasks", e também envio outras props que são "msg e valor", bom aqui é para caso eu obtenha algum erro para adicionar a tarefa e para não chamar o component modal de exclusão aqui ou para criar outro component para isso, eu so envio essas props para o proprio component que chamo de "ConfirmTask.vue" e esse componente fica por conta de confirmar se será um component de msg de erro, ou um component de exclusão.
 ![myImage](https://i.ibb.co/1s4y7pv/Screenshot-21.png)
 
 - MyTasks.vue
    * Nesse local da imagem eu estou fazendo a verificação que mencionei na imagem acima, onde que ele faz o teste se é ou nao um erro, e envia ao component 
 ![myImage](https://i.ibb.co/RDWPRzG/Screenshot-25.png)
 
 - MyTasks.vue
    * Nesse arquivo é onde contém a renderização de toda a lista, e aqui eu estou mostrando a parte onde ele irá abrir a modal de exclução e a modal de alteração caso seja clicado
 ![myImage](https://i.ibb.co/D1XCN7h/Screenshot-24.png)

 - MyTasks.vue
    * Nesse local aqui, é onde eu faço a checagem para ver se a tarefa foi concluida ou nao, e quando for marcada como concluida irá alterar uma variavel no localstorage e no VUEX para determinar que está tarefa foi concluida
  
 ![myImage](https://i.ibb.co/M136scN/Screenshot-23.png)

 - LefBar.vue - Imagem do component montado no navegador
    * aqui esse menu ele está funcionando - Clicavel, e irá redirecionar para a mesma pagina porém irá filtrar de acordo com (urgentes, importante, outras e etc)
    
![NavBar](https://i.ibb.co/LZCMKPL/download.png)
