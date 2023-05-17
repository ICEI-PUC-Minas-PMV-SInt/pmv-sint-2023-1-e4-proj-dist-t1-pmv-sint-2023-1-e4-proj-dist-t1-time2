## 3. Abordagens de testes de software

|Tipo de Teste|Funcional.|
|:---:|:---|
Subtipo de Teste|Requisitos.
Objetivo do Teste|Testar a funcionalidade de autenticação e autorização do usuário.
Requisitos que motivaram esse teste|<ul><li>RF-01 O sistema deve permitir ao usuário realizar autenticação e autorização de entrada no sistema por meio de login e senha.</li><li>RF-02 O sistema deve permitir que o usuário faça logoff do sistema.</li><li>RF-014 O sistema deve restringir o acesso ao tipo de dados sobre o registro de doação de cestas, respeitando a Lei Geral de Proteção de Dados.</li></ul>

|Tipo de Teste|Funcional.|
|:---:|:---|
Subtipo de Teste|Requisitos.
Objetivo do Teste|Testar a funcionalidade de cadastro de pessoas físicas quanto à criação de dados no banco de dados.
Requisitos que motivaram esse teste|<ul><li>RF-03 O sistema deve permitir que somente o usuário com o perfil de administrador cadastre os outros usuários do sistema</li><li>RF-04 O sistema deve permitir que o administrador consulte, altere e exclua o cadastro dos usuários do sistema.</li><li>RF-05 O sistema deve permitir que o usuário do BMA/CRAS cadastre os beneficiários.</li><li>RF-07 O sistema deve permitir que o usuário do BMA/CRAS consulte, altere e exclua o cadastro dos beneficiários.</li></ul>

|Tipo de Teste|Funcional.|
|:---:|:---|
Subtipo de Teste|Requisitos.
Objetivo do Teste|Testar as requisições para aplicações externas.
Requisitos que motivaram esse teste|<ul><li>RF-06 O sistema deve ser capaz de recuperar informações sobre beneficiários do bolsa família que estão disponíveis nas API 's do Governo Federal e disponibilizar aos usuários do BMA/CRAS.</li><li>RF-016 O sistema deve emitir aviso aos beneficiários quando seus benefícios estiverem  disponíveis para retirada.</li></ul>

|Tipo de Teste|Funcional.|
|:---:|:---|
Subtipo de Teste|Requisitos.
Objetivo do Teste|Testar a funcionalidade de cadastro de cestas quanto a criação de dados, no banco de dados.
Requisitos que motivaram esse teste|<ul><li>RF-08 O sistema deve permitir que o usuário registre as retiradas de cestas pelo beneficiário.</li><li>RF-09 O sistema deve restringir a retirada de cesta, conforme periodicidade estabelecida pelo município.</li><li>RF-015 O sistema deve realizar o cadastro assíncrono no banco de dados.</li></ul>

|Tipo de Teste|Funcional.|
|:---:|:---|
Subtipo de Teste|Requisitos.
Objetivo do Teste|Testar as funcionalidades de registro de orçamento e doações recebidas no banco de dados e verificar se o sistema está gerando relatórios, conforme os parâmetros utilizados nos filtros.
Requisitos que motivaram esse teste|<ul><li>RF-017 O sistema deve registrar o orçamento público destinado ao BMA, especificando a fonte financeira (federal ou municipal).</li><li>RF-018 O sistema deve registrar as doações recebidas por meio de campanhas de arrecadação, pessoas físicas e jurídicas.</li><li>RF-019 O sistema deve emitir relatórios gerenciais com informações sobre: quantitativo de cestas doadas por regional; quantitativo de beneficiários; renda média das pessoas atendidas; demanda de cestas por regional; gasto do governo federal e municipal; quantidade de alimentos doados em determinado período.</li></ul>

|Tipo de Teste|Funcional.|
|:---:|:---|
Subtipo de Teste|Requisitos.
Objetivo do Teste|Testar as requisições enviadas para APIs REST
Requisitos que motivaram esse teste|<ul><li>RF-06 O sistema deve ser capaz de recuperar informações sobre beneficiários do bolsa família que estão disponíveis nas API 's do Governo Federal e disponibilizar aos usuários do BMA/CRAS.</li><li>RF-013 O sistema deve disponibilizar aos órgãos e cidadãos autorizados, por meio de uma API,dados sobre o registro de doação de cestas, com informações dos beneficiários cadastrados, tipo de cestas recebidas, datas de recebimento das cestas e quantidade de recebimento de cestas.</li></ul>

|Tipo de Teste|Não Funcional.|
|:---:|:---|
Subtipo de Teste|Disponibilidade
Objetivo do Teste|Testar se a página está acessível todos os dias da semana/24 por dia.
Requisitos que motivaram esse teste|<ul><li>RNF -01 O sistema deve estar disponível em horário integral, durante 24 horas por dia e sete dias por semana.</li></ul>

|Tipo de Teste|Não Funcional.|
|:---:|:---|
Subtipo de Teste|Desempenho
Objetivo do Teste|Testar se o tempo entre a solicitação do usuário e a resposta do sistema dura até 10s.
Requisitos que motivaram esse teste|<ul><li>RNF-02 A latência total do sistema não deve ultrapassar 10 segundos.</li></ul>

|Tipo de Teste|Não Funcional.|
|:---:|:---|
Subtipo de Teste|Desempenho
Objetivo do Teste|Testar se o sistema consegue receber um alto número de requisições ao mesmo tempo.
Requisitos que motivaram esse teste|<ul><li>RNF-03 A latência total do sistema não deve ultrapassar 10 segundos.</li></ul>

|Tipo de Teste|Não Funcional.|
|:---:|:---|
Subtipo de Teste|Segurança
Objetivo do Teste|Testar se quando um usuário consegue acessar uma área restrita ao seu perfil de acesso.
Requisitos que motivaram esse teste|<ul><li>RNF-04 O sistema deve possuir controle de acesso baseado em funções (RBAC).</li><li>RNF-05 O sistema deve negar a entrada de usuário não autorizado.</li></ul>

|Tipo de Teste|Não Funcional.|
|:---:|:---|
Subtipo de Teste|Segurança
Objetivo do Teste|Testar um usuário consegue acessar uma área restrita sem as informações de login e senha.
Requisitos que motivaram esse teste|<ul><li>RNF-06 O sistema deve negar a entrada de usuário sem informações de login.</li></ul>

|Tipo de Teste|Não Funcional.|
|:---:|:---|
Subtipo de Teste|Usabilidade
Objetivo do Teste|Testar se o sistema fica distorcido em plataformas mobile.
Requisitos que motivaram esse teste|<ul><li>RNF-08 O sistema deve negar a entrada de usuário sem informações de login.</li></ul>

|Tipo de Teste|Não Funcional.|
|:---:|:---|
Subtipo de Teste|Interoperabilidade
Objetivo do Teste|Testar se o sistema se comunica com aplicações externas.
Requisitos que motivaram esse teste|<ul><li>RNF-09 O sistema deverá interoperar com aplicações legadas com baixo acoplamento utilizando APIs ou outros recursos para consumo de serviços.</li></ul>

|Tipo de Teste|Não Funcional.|
|:---:|:---|
Subtipo de Teste|Interoperabilidade
Objetivo do Teste|Testar se o sistema se comunica como banco de dados em nuvem.
Requisitos que motivaram esse teste|<ul><li>RNF-10 O sistema deverá se comunicar com sistema de banco de dados.</li></ul>
