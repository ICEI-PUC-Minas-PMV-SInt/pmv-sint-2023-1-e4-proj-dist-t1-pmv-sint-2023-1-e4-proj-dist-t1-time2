## 4. APIs Projetadas
### 4.1 API Consumida - Bolsa Família disponível por CPF ou NIS

* Recurso URL

https://api.portaldatransparencia.gov.br/swagger-ui.html#/operations/Benef%C3%ADcios/bolsaFamiliaDisponivelPorCpfOuNisUsingGET
|:---|

* Informações

Formato de Resposta|JSON
|:---|:---|
Exige Autenticação?|Sim
Limite de Requisições|180/minuto

* Parâmetros

Nome|Descrição
|:---|:---|
anoMesCompetencia|Ano e mês de competência (AAAAMM)
anoMesReferencia|Ano e mês de referência (AAAAMM)
chave-api-dados|Chave para acessar a API.
codigo|CPF/NIS (sem máscara, somente números)
pagina|Página consultada

### 4.2 API Oferecida - Distribuição de Cestas do BMA - Poços de Caldas

* Recurso URL

/api/Beneficiarios

* Informações

Formato de Resposta|JSON
|:---|:---|
Exige Autenticação?|Sim
Limite de Requisições|Não possui

* Parâmetros

Nome|Descrição
|:---|:---|
CPF do Beneficiário|CPF (sem máscara, somente números)
Nome do Beneficiário|Nome do Beneficiário
Tipo de Cesta|Tipo de Cesta (Cesta Básica ou Cesta Verde)
Data de Retirada|Dia, mês e ano de referência (dd-MM-yyyy)
Local de Retirada|Nome e endereço do local de retirada




