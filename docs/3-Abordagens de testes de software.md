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
