## 5.Roteiro de Implantação em Nuvem

### 5.1 Criação do banco de dados em nuvem: Azure SQL

Após a criação da conta na plataforma Azure, foi criado um banco de dados SQL Azure, conforme indicado na imagem a seguir.

![azure](https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2023-1-e4-proj-dist-t1-pmv-sint-2023-1-e4-proj-dist-t1-time2/assets/89482697/a1e208d4-c462-44d1-8fc7-b6cdde9fb55c)

### 5.2 Migração dos dados do model no banco de dados do Azure.

Na página appsettings.json foi configurada a conexão para o banco de dados do Azure. Essa conexão também foi configurada na classe Program:

![Azuresql](https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2023-1-e4-proj-dist-t1-pmv-sint-2023-1-e4-proj-dist-t1-time2/assets/89482697/d8dced66-87b4-4fc7-a187-2fafa56cdd9e)

![program](https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2023-1-e4-proj-dist-t1-pmv-sint-2023-1-e4-proj-dist-t1-time2/assets/89482697/5e5f3723-cb12-4255-8cd5-2d0e4e9e2bb5)

Após a configuração, foi realizada uma migração para o banco de dados em nuvem e, em seguida a atualização desse banco de dados.

### 5.3 Publicação da API

Após a migração para o banco de dados em nuvem e com a utilização do comando publicar no proprio Visual Studio, realizou-se o deploy da API pelo Azure. A configuração de publicação da API pode ser vista na imagem a seguir.

![publicacao](https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2023-1-e4-proj-dist-t1-pmv-sint-2023-1-e4-proj-dist-t1-time2/assets/89482697/fdc73201-181c-487a-9474-8eb1c5512ebf)



