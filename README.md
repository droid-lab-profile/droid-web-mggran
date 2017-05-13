# WebSite MGGran

Instruções para desenvolvimento do layout:

1. Instalar o gulp em seu ambiente (NodeJS);
2. Instalar as dependências do projeto para o gulp:

```
$ npm install
```

* Isso irá criar uma pasta node_modules na raiz do projeto com todas as dependência para o Gulp;

3. Na pasta assets-mggran estão já os assets necessários para a configuração do layout;

4. A paleta de cores para o projeto é:
	* #223843
	* #B2BD7E
	* #749C75
	* #F1F7EE
	* #B0BEA9

5. Para a geração do arquivo CSS precisa-se utilizar o gulp para compilar automaticamente os arquivos sass (disponíveis em /assets/sass)

6. Para rodar o inspetor de arquivos do gulp:

```
$ gulp wsass
```

* Isso fará com que qualquer alteração nos arquivos .sass gerem automaticamente o correspondente em css.

7. Para minificar os arquivos e criar as pastas dist:

```
$ gulp
```

* O gulp é configurável (javascript) seu código está disponível em .gulpfile.js

8. Para abrir as fotos em uma popup implementar o plugin fancybox;

9. As fontes utilizadas no projeto:

	* https://fonts.google.com/specimen/Droid+Serif
	* https://fonts.google.com/specimen/Raleway

10. Pontos a serem estudados:

	* Bootstrap 3 - Para alinhamentos e grades;
	* Inclusão de fontes pelo Google Fonts;
	* Sass :
		* Entender a estrutura aplicada no projeto;
		* Entender os mixins;
		* Entender compilações;
		* Entender hierarquia aninhada;
	* HTML5
		* Entender meta-tags para SEO;
		* Estudar Schemas (para melhor indexar o endereço e telefone, por exemplo);
	* SVG
		* Como incluir um svg inline;
		* Como incluir um svg por referência de arquivo;
	* JavaScript
		* Entender a estrutura de arquivos e organização dos códigos em objeto literal;
	* Organização do Projeto
		* Entender a estutura do projeto como um todo

11. Url de testes
	* Estudar sobre o GitHub Pages;
	* A url de testes do projeto é: https://droid-lab.github.io/droid-web-mggran/
	* Sempre que houver um novo commit essa página será atualizada;

12. Estudar Configuração do Registro.br para apontar para o github;
13. Criar uma conta no gmail para o projeto do site (sitemggran@gmail.com);
14. Utilizar esta conta para gerar código do analytics;
15. Utilizar a mesma conta para criar e configurar o serviço de email zoho;
16. Inserir na página o código de acompanhamento do analytics;
17. Coletar materiais:
	* Logotipo;
	* Links para as redes sociais;
	* Endereço e Telefone;
	* Fotos, Nome e Curta descrição dos 12 produtos;
18. Criar conteúdos para cada um dos blocos com base em entrevista com o cliente;
	* Texto sobre a empresa;
	* Missão;
	* Visão;
	* Valores;
	* Conteúdo CTA Contato;
	* Texto produtos;
	* Nome, Texto de cada um dos produtos;
	* Observação Produtos;
	* Email (Criar?), Telefones, Endereço;
	* Redes Sociais;
19. Criar menu do site:
	* Home;
	* Sobre a Empresa;
	* Produtos;
	* Contato;
20. Estrutura de arquivos e pastas:
	* index.html - Arquivo Principal;
	* robots.txt - (Estudar) é o arquivo que libera a indexação pelo Google;
	* .gitignore - São pastas e arquivos que serão ignoradas nos commits (node_modules é utilizando apenas localmente)
	* assets - É a pasta de assets do projeto
		* css - São os arquivos css do projeto;
		* fonts - São as fonts (não disponíveis no google) utilizadas no projeto;
		* images - São as imagens do projeto;
		* scss - São os arquivos SASS que irão dar origem aos arquivos CSS;
	* js - É a pasta com a estrutura de arquivos JS do projeto.
		* bootstrap - Biblioteca do Bootstrap;
		* includes - Algumas funcionalides padrões que podem ou não ser incluídas no projeto;
		* jquery - Biblioteca do JQuery;
		* libs - Plugins e Bibliotecas utilizadas no projeto;
			* easing - melhoria de efeitos visuais;
			* fancybox - popup da imagem;
			* mouse.whell - scroll do mouse;
			* nice.scroll - barra de rolagem personalisada;
		* objects - São os javascripts correspondente a cada uma das páginas do projeto;
			* index.js - Javascript específico da página index.html
		* oracle - Javascript Genético, incluído obrigatoriamente por todas as páginas do projeto.
21. src e dist - São pastas que definem respectivamente: os arquivos editáveis (por seres humanos) e os arquivos comprimidos para publicação
22. Publicar atualizações;