## 1. Especificação da Solução
Para determinar os requisitos do sistema, foram utilizados os seguintes perfis de usuários do sistema, descritos no quadro a seguir:

|Perfil|Descrição|
|:---:|:---:|
|Administrador|Servidor do BMA com grau máximo de visualização e controle do sistema.|
|Usuário BMA/ CRAS|Servidor/colaborador vinculado ao BMA/CRAS que cadastra os beneficiários e distribui as cestas básicas e cestas verdes.|
|Beneficiário|Pessoa que recebe a cesta básica ou a cesta verde.|
|Cidadão|Qualquer pessoa que acesse o site para buscar informações sobre o Banco de Alimentos.|

[^1]: BMA - Banco Municipal de Alimentos
[^2]: CRAS - Centro de Referência de Assistência Social

### 1.1 Requisitos Funcionais 

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











