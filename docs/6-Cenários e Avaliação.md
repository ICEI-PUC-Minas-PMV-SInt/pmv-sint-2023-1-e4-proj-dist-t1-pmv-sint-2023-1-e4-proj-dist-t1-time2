## Cenários e Avaliação

Para avaliação arquitetural, foram considerados alguns cenários previstos no documento 3. Foram considerados os cenários utilizados durante a construção e implantação da API.
As tabelas a seguir mostram essa avaliação.


Cenário|Disponibilidade
|:---:|:---|
Objetivo do Teste|Testar se a página está acessível todos os dias da semana/24 por dia.
Requisitos que motivaram esse teste|<ul><li>RNF -01 O sistema deve estar disponível em horário integral, durante 24 horas por dia e sete dias por semana.</li></ul>
Análise: o sistema apresentou boa disponibilidade.

Cenário|Desempenho
|:---:|:---|
Objetivo do Teste|Testar se o tempo entre a solicitação do usuário e a resposta do sistema dura até 10s.
Requisitos que motivaram esse teste|<ul><li>RNF-02 A latência total do sistema não deve ultrapassar 10 segundos.</li></ul>
Análise: O sistema possui bom desempenho nesse requisito quanto à solicitação de informações no banco de dados. Porém, para solicitação em aplicações externas a latência pode ultrapassar 10s, o que demonstra um fraco desempenho nesse quesito.

Cenário|Interoperabilidade
|:---:|:---|
Objetivo do Teste|Testar se o sistema se comunica com aplicações externas.
Requisitos que motivaram esse teste|<ul><li>RNF-09 O sistema deverá interoperar com aplicações legadas com baixo acoplamento utilizando APIs ou outros recursos para consumo de serviços.</li></ul>
Análise: O sistema possui boa inteorperabilidade.

Subtipo de Teste|Interoperabilidade
|:---:|:---|
Objetivo do Teste|Testar se o sistema se comunica como banco de dados em nuvem.
Requisitos que motivaram esse teste|<ul><li>RNF-10 O sistema deverá se comunicar com sistema de banco de dados.</li></ul>
Análise: O sistema possui boa interoperabilidade.

Conclusão:

Considerando o cenários acima, a API possui alta disponibilidade e alta interoperabilidade. Quanto ao desempenho, podemos afirmar que ele possui alto desempenho quando se comunica com o servidor interno e baixo para aplicações externas.
Assim, deve-se melhorar a latência do sistema em cenários nas quais ele precisa se comunicar com outras API's.
