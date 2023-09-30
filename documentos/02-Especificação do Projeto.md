# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 1 - Empresário/Gestor </th>
</tr> 
<tr>
<td width="150px"><b>Descrição:  </b></td>
<td width="600px">Perfil responsável pelas customizações no Portal e input de informações</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
<li>Publicar notícias e lembretes</li>
<li>Publicar informações de forma segmentada por área</li>
<li>Divulgar resultados</li>
<li>Criar fóruns e enquetes</li>
<li>Registrar datas importantes em calendário específico</li>
<li>Customizar temas e cores do Portal</li>
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 2 - Colaborador </th>
</tr>
<tr>
<td width="150px"><b>Descrição: </b></td>
<td width="600px">Perfil que irá acessar as informações, participar em fóruns e enquetes e registrar denúncias</td> 
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
<li>Acessar as informações publicadas no Portal</li>
<li>Participar em fóruns e enquetes</li>
<li>Registrar denúncias de forma anônima</li>
</td>
</tr>
</tbody>
</table>


## Histórias de Usuários

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
| Colaborador               | Registrar denúncias, comentários anônimos | Comunicar fraudes e outros temas sensíveis a gestão sem o risco de retaliação quando de possíveis investigações                          |
| Empresário/gestor ou outro colaborador              | Receber por e-mail denúncias registradas no Portal Intra anonimamente                       | Obter as informações necessárias de forma sigilosa para tratamento de denúncias                              |
## Requisitos do Projeto

### Requisitos Funcionais

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

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 | A aplicação deverá ser responsiva permitindo a visualização em dispositivos diversos de forma adequada..| Alta | 
| RNF-02 |A aplicação deve ser compatível com os principais navegadores do mercado: Google Chrome, Firefox e Microsoft Edge. | Média|
| RNF-03 | A ferramenta deve estar disponível 98% do tempo, considerando o período de 24 horas diárias, 7 dias por semana. | Média| 
| RNF-04 |A ferramenta deve permitir o acesso dos usuários em até 5 segundos após login e senha. | Média| 

**Prioridade: Alta / Média / Baixa. 

