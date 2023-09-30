# Especificação do Projeto

## Perfis de Usuários

[Enumere e faça o detalhamento dos perfis de usuários. Utilize o modelo de tabela abaixo para sintetizá-los.]

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil Empresarios/Gestor </th>
</tr> Necessidades: 
<tr>
<td width="150px"><b>Descrição:  </b></td>
<td width="600px">Perfil responsável pelas customizações no Portal e input de informações</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>•	Publicar notícias e lembretes
•	Publicar informações de forma segmentada por área
•	Divulgar resultados
•	Criar fóruns e enquetes
•	Registrar datas importantes em calendário específico
•	Customizar temas e cores do Portal
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil Colaborador </th>
</tr>
<tr>
<td width="150px"><b>Descrição: ></b></td>
<td width="600px">Perfil que irá acessar as informações, participar em fóruns e enquetes e registrar denúncias</td> 
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>•	Acessar as informações publicadas no Portal
•	Participar em fóruns e enquetes
•	Registrar denúncias de forma anônima
</td>
</tr>
</tbody>
</table>


## Histórias de Usuários

[Apresente aqui as histórias de usuários que são relevantes para o projeto da solução.]

> **Link Útil**:
> - [Como escrever boas histórias de usuário](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

[Utilize o modelo de tabela abaixo para apresentar as histórias de usuários.]

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|----------------------------------|----------------------------------------------------------------------------------------------------------|
| Empresário/Gestor                | Registrar as principais datas que afetam o negócio                      | Planejamento de atividades considerando os dias não úteis, comunicação de aniversários para gestão de clima, acessar e comunicar   o vencimento de atividades e pagamentos, fácil identificação de funcionários ausentes e razão de férias ou licença                            |
| Empresário/gestor               | Divulgar notícias, lembretes, comunicados e oportunidades de movimentação interna                       | Informar aos colaboradores temas relevantes sobre o negócio que podem impactar a estratégia, lembrar as atividades a serem realizadas, abrir oportunidades de movimentação interna antes de divulgar as vagas no mercado                              |
| Empresário/gestor             | Criar subitens/categorias                       | Segmentar as informações pertinentes às diversas funções e projetos da organização                              |
| Empresário/gestor            | Alterar o tema e cores do Portal                       | Personalização do layout de acordo com a identidade visual da empresa                              |
| Empresário/gestor               | Criar fóruns e enquetes                      | Promover a interação e obter de opinião de colaboradores sobre determinado assunto                             |
| Empresário/gestor               | Cadastrar usuários                       | Dar acesso as informações da organização aos colaboradores                              |
| Colaborador               | Acessar as informações e datas disponibilizadas pelo empresário/gestor                       | Atuação profissional                              |
| Colaborador               | Registrar comentários em fóruns e votar enquetes                       | Interagir e expor opiniões                              |
| Colaborador               | Interagir e expor opiniões                       | Interagir e expor opiniões                              |
| Empresários/gestor ou outro colaborador               | Receber por e-mail denúncias registradas no Portal Intra anonimamente                       | Obter as informações necessárias de forma sigilosa para tratamento de denúncias                              |
## Requisitos do Projeto

[Com base nas Histórias de Usuários, enumere os requisitos da solução. Lembre-se que cada requisito deve corresponder a uma, e somente uma, característica alvo da solução. Além disso, certifique-se de que todos os aspectos capturados nas Histórias de Usuário foram cobertos.]

### Requisitos Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos funcionais]

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 |A aplicação deve possuir calendário contendo opção de registro de informações nas datas | Média |  
| RF-02| A aplicação deve permitir a publicação de informações de destaque em texto e/ou imagem em espaço dedicado | Alta |
| RF-03| A aplicação deve permitir a criação de abas para input de informações segmentadas | Média |
| RF-04| A aplicação deve permitir a customização de cores e planos de fundo do Portal | Média |
| RF-05| A aplicação deve permitir a criação de fóruns contendo botões para resposta em texto | Alta |
| RF-06| A aplicação deve permitir a criação de enquetes com botões para votação | Baixa |
| RF-07| A aplicação deve permitir o registro anônimo de ocorrências/denúncias que deverão ser encaminhadas para e-mails específicos de acordo com a estrutura da empresa | Alta |
| RF-08| A aplicação deve permitir o cadastro de usuários | Alta |
| RF-09| A aplicação deve ser acessada por meio do input de usuário e senha | Alta |

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos não-funcionais]

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 | A aplicação deverá ser responsiva permitindo a visualização em dispositivos diversos de forma adequada..| Alta | 
| RNF-02 |A ferramenta deve estar disponível 98% do tempo, considerando o período de 24 horas diárias, 7 dias por semana.  | Média|
| RNF-03 | A ferramenta deve estar disponível 98% do tempo, considerando o período de 24 horas diárias, 7 dias por semana. | Média| 
| RNF-04 |A ferramenta deve permitir o acesso dos usuários em até 5 segundos após login e senha. | Média| 

**Prioridade: Alta / Média / Baixa. 

