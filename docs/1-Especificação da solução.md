
<h2>1. Especificação da Solução</h2>
Para determinar os requisitos do sistema, foram utilizados os seguintes perfis de usuários do sistema, descritos no quadro a seguir:

|Perfil|Descrição|
|:---:|:---:|
|Administrador|Servidor do BMA com grau máximo de visualização e controle do sistema.|
|Usuário BMA/ CRAS|Servidor/colaborador vinculado ao BMA/CRAS que cadastra os beneficiários e distribui as cestas básicas e cestas verdes.|
|Beneficiário|Pessoa que recebe a cesta básica ou a cesta verde.|
|Cidadão|Qualquer pessoa que acesse o site para buscar informações sobre o Banco de Alimentos.|

[^1]: BMA - Banco Municipal de Alimentos
[^2]: CRAS - Centro de Referência de Assistência Social

<details>
  <summary><h3>1.1 Requisitos Funcionais</h3></summary> 

|ID|Descrição do Requisito|Dificuldade|Prioridade|
|:---:|:---:|:---:|:---:|
|RF-01|O sistema deve permitir ao usuário realizar autenticação e autorização de entrada no sistema por meio de login e senha.|MÉDIA|ALTA|
|RF-02|O sistema deve permitir que o usuário faça logoff do sistema.|BAIXA|ALTA|
|RF-03|O sistema deve permitir que somente o usuário com o perfil de administrador cadastre os outros usuários do sistema.|MÉDIA|ALTA|
|RF-04|O sistema deve permitir que o administrador consulte, altere e exclua o cadastro dos usuários do sistema|MÉDIA|ALTA|
|RF-04|O sistema deve permitir que o administrador consulte, altere e exclua o cadastro dos usuários do sistema|MÉDIA|ALTA|
|RF-05|O sistema deve permitir que o usuário do BMA/CRAS cadastre os beneficiários.|MÉDIA|ALTA|
|RF-06|O sistema deve ser capaz de recuperar informações sobre beneficiários do bolsa família que estão disponíveis nas API's do Governo Federal e disponibilizar aos usuários do BMA/CRAS.|ALTA|ALTA|
|RF-07|O sistema deve permitir que o usuário do BMA/CRAS consulte, altere e exclua o cadastro dos beneficiários.|MÉDIA|ALTA|
|RF-08|O sistema deve permitir que o usuário registre as retiradas de cestas pelo beneficiário.|MÉDIA|ALTA|
|RF-09|O sistema deve restringir a retirada de cesta, conforme periodicidade estabelecida pelo município.|ALTA|ALTA|
|RF-10|O sistema deve permitir que o usuário visualize histórico de retirada dos beneficiários.|MÉDIA|MÉDIA|
|RF-11|O sistema deve permitir que o usuário realize a redefinição de senha.|MÉDIA|MÉDIA|
|RF-12|O sistema deve disponibilizar tela informativa aos beneficiários sobre as datas de entrega das cestas.|BAIXA|MÉDIA|
|RF-13|O sistema deve disponibilizar aos órgãos e cidadãos autorizados, por meio de uma API,dados sobre o registro de doação de cestas, com informações dos beneficiários cadastrados, tipo de cestas recebidas, datas de recebimento das cestas e quantidade de recebimento de cestas.|ALTA|ALTA|
|RF-14|O sistema deve restringir o acesso ao tipo de dados sobre o registro de doação de cestas, respeitando a Lei Geral de Proteção de Proteção de Dados|ALTA|ALTA|
|RF-15|O sistema deve realizar o cadastro assíncrono no banco de dados.|ALTA|ALTA|
|RF-16|O sistema deve emitir aviso aos beneficiários quando seus benefícios estiverem  disponíveis para retirada.|BAIXA|BAIXA|
|RF-17|O sistema deve registrar o orçamento público destinado ao BMA, especificando a fonte financeira (federal ou municipal)|BAIXA|BAIXA|
|RF-18|O sistema deve registrar as doações recebidas por meio de campanhas de arrecadação, pessoas físicas e jurídicas.|MÉDIA|BAIXA|
|RF-19|O sistema deve emitir relatórios gerenciais com informações sobre: quantitativo de cestas doadas por regional; quantitativo de beneficiários; renda média das pessoas atendidas; demanda de cestas por regional; gasto do governo federal e municipal; quantidade de alimentos doados em determinado período.|MÉDIA|MÉDIA|
</details>
  
<details>
  <summary><h3>1.2 Requisitos Não Funcionais</h3></summary>
1. RNF1 - Disponibilidade- O sistema deve estar disponível em horário integral, durante 24 horas por dia e sete dias por semana.

|Estímulo|O beneficiário acessa o sistema no domingo no período da madrugada.|
|---|---|
|Fonte do estímulo|Beneficiário.|
|Ambiente|Sistema com carga normal.|
|Artefato|O sistema como um todo.|
|Resposta|O sistema deve permitir o acesso ao beneficiário em qualquer hora, seja do dia ou da noite.|
|Medida de resposta|100% das tentativas de acesso e requisição de informações ao sistema devem ser respondidas.|

2. RNF2 - Desempenho- A latência total do sistema não deve ultrapassar 10 segundos.

|Estímulo|O usuário autenticado acessa uma funcionalidade na interface gráfica do sistema.|
|---|---|
|Fonte do estímulo|Usuário autenticado.|
|Ambiente|Sistema com carga normal.|
|Artefato|Módulo de informações cadastrais.|
|Resposta|O sistema processa a solicitação e retorna a informação em até 10 segundos para o usuário.|
|Medida de resposta|Resposta do sistema com até 10 segundos de duração.|

3. RNF3 - Desempenho- O sistema deve estar preparado para receber alto volume de requisições simultaneamente, apresentar bom desempenho e, para não haver sobrecarga, possuir infraestrutura escalável.

|Estímulo|Grande quantidade de usuários acessam simultaneamente o sistema.|
|---|---|
|Fonte do estímulo|Usuários requisitam e fornecem informações.|
|Ambiente|Sistema com carga além do normal.|
|Artefato|Sistema como um todo.|
|Resposta|O sistema funciona sem atrasos nas requisições e com bom desempenho sem interferir na experiência do usuário.|
|Medida de resposta|Requisições e respostas com rapidez e sistema utilizando sua capacidade elástica para comportar todas as operações.|

4. RNF4 - Segurança- O sistema deve possuir controle de acesso baseado em funções (RBAC)

|Estímulo|O administrador realiza o cadastro de um novo usuário no sistema.|
|---|---|
|Fonte do estímulo|Administrador.|
|Ambiente|Sistema com carga baixa, normal e além do normal.|
|Artefato|Módulo de Autenticação.|
|Resposta|Cadastro de usuário no sistema.|
|Medida de resposta|Ao verificar o banco de dados, o novo usuário deverá ter o perfil de acordo com o que foi cadastrado.|

5. RNF5 - Segurança- O sistema deve negar a entrada de usuário não autorizado.

|Estímulo|Usuário realiza ação de carregamento de uma página protegida ao qual necessita de login e senha para ser visualizada.|
|---|---|
|Fonte do estímulo|Usuário não autenticado.|
|Ambiente|Sistema com carga normal.|
|Artefato|Módulo de Autenticação.|
|Resposta|A página de login é carregada, ocorre o envio de mensagem informando a negação de acesso e solicitando a informação de usuário e senha.|
|Medida de resposta|Todas as requisições com usuário ou senha incorretos devem impedir que o usuário entre na página protegida do sistema.|

6. RNF6 - Segurança- O sistema deve negar a entrada de usuário sem informações de login.

|Estímulo|Usuário tenta fazer login com informações de registro de usuário e senha incorretos.|
|---|---|
|Fonte do estímulo|Usuário não autenticado.|
|Ambiente|Sistema com carga normal.|
|Artefato|Módulo de Autenticação.|
|Resposta|Envio de mensagem informando que o usuário e senha estão incorretos.|
|Medida de resposta|Todas as requisições com usuário ou senha incorretos devem impedir que o usuário entre na página protegida do sistema.|

7. RNF7 - Testabilidade- O sistema deve ser testável em todas suas funcionalidades.

|Estímulo|Desenvolvedor de software executa testes unitários do sistema para verificar se não houve quebra de funcionalidades anteriores ao implementar uma nova funcionalidade.|
|---|---|
|Fonte do estímulo|Desenvolvedor de software.|
|Ambiente|Ambiente de desenvolvimento.|
|Artefato|Módulo de informações cadastrais.|
|Resposta|O sistema validou todas as regras de negócio cobertas por testes unitários.|
|Medida de resposta|Testes unitários passando na verificação com status OK.|

8. RNF8 - Acessibilidade- O sistema deverá prover uma interface gráfica simples, fácil de usar, responsiva e adaptativa para browsers e diferentes resoluções de modo que seja disponibilizada nas plataformas web e móvel.

|Estímulo|Usuário logado utilizando a interface gráfica do sistema.|
|---|---|
|Fonte do estímulo|Usuário logado.|
|Ambiente|Sistema com carga baixa, normal e além do normal.|
|Artefato|Módulo de informações cadastrais.|
|Resposta|A interface gráfica do projeto apresenta navegabilidade e objetividade nas ações disponíveis ao usuário.|
|Medida de resposta|O usuário realiza suas ações rapidamente e sem desvios indesejados para outras funcionalidades.|

9. Interoperabilidade- O sistema deverá interoperar com aplicações legadas com baixo acoplamento utilizando APIs ou outros recursos para consumo de serviços.

|Estímulo|Para completar uma operação, o sistema precisa recuperar uma informação que está localizada no domínio de uma aplicação legada.|
|---|---|
|Fonte do estímulo|O sistema como um todo.|
|Ambiente|Sistema com carga normal.|
|Artefato|Módulo de informações cadastrais.|
|Resposta|Troca de informações com os sistemas legados.|
|Medida de resposta|Conexão, envio de mensagens e/ou requisições e/ou respostas provenientes de aplicações legadas.|

10. RNF10 - Interoperabilidade- O sistema deverá se comunicar com sistema de banco de dados.

|Estímulo|Para completar uma operação, o sistema precisa ler e atualizar os dados em um banco de dados.|
|---|---|
|Fonte do estímulo|O sistema como um todo.|
|Ambiente|Sistema com carga normal.|
|Artefato|Módulo de informações cadastrais.|
|Resposta|Confirmação do registro no banco de dados.|
|Medida de resposta|Envio de mensagens de confirmação e apresentação de informação proveniente do banco de dados.|
</details>

<details>
  <summary><h3>1.3 Restrições Arquiteturais.</h3></summary> 

|ID|Restrição|
|:---:|:---:|
|R1|O front end deve ser desenvolvido em cshtml e, para isso, deverá ser utilizado o framework asp.Net na versão mais recente.
|R2|Em relação ao guia de estilo, deve-se utilizar o framework Bootstrap para padronização de interface com o usuário.
R3|Como linguagem de folha de estilos deve-se utilizar o CSS.
R4|Para responsividade do sistema, o mesmo deve fazer uso de Media Queries e do sistema Grid do Bootstrap.
R5|O sistema deverá expor funcionalidades e interoperar com outras aplicações legadas utilizando o protocolo HTTP por meio de APIs RESTful.
R6|O sistema deverá utilizar o formato JSON para transporte de informações.
R7|A autorização entre as APIS deve ser realizada por meio de JWT.
R8|O sistema deve ser construído em camadas.
R9|Os módulos que compõe os microserviços no backend devem ser desenvolvidos em linguagem C# utilizando o asp.Net como ambiente de execução do lado do servidor.
R10|As camadas do sistema deverão ser construídas e hospedadas em nuvem por meio da plataforma Azure.
R11|Os módulos do sistema deverão fazer uso do banco de dados relacional MySQL.
R12|Deve ser utilizado o GIT como ferramenta de versionamento do código.
R13|O sistema deve possuir características de aplicação distribuída: abertura, portabilidade, uso de recursos de rede.
</details>  

<details>
  <summary><h3>1.4 Mecanismos Arquiteturais.</h3></summary>

Análise|Design|Implementação
|:---:|:---:|:---:|
Persistência|Framework ORM|Entity Framework
Persistência|Banco de dados relacional|MySQL
Front end|Framework de desenvolvimento|Asp.Net Core MVC
Front end|Linguagem de programação|cshtml
Front end|Framework de estilos|Bootstrap
Deploy|Plataforma de deploy|Azure
Back end|Linguagem de programação|C#
Back end|Ambiente de execução|Visual Studio
Back end|Serviço de execução do código|Azure
Autenticação|Padrão de formato de autenticação|JWT
Autenticação|Serviço de autenticação|JWTBearer
Integração|Formato de transporte de informações|JSON
Integração|Protocolo de comunicação|HTTP
Integração|Estilo de arquitetura|REST
Versionamento|Controle e armazenamento do código fonte|GitHub
Versionamento|Versionamento do código fonte|Git
Build|Ferramenta de build de componentes de software|NuGet
Folha de estilos|Linguagem de folha de estilos|CSS

  </details>
  





































