# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t10-portal_intra/blob/main/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t10-portal_intra/blob/main/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface</a>

Os requisitos para realização dos testes de software são:
<ul><li>Site publicado na internet;</li>
<li>Navegador da internet: Chrome, Firefox ou Edge.</li>
</ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-A: Verificar o funcionamento dos links da página Home</td>
  <td>
   <ul>
   <li>RF-002:	A aplicação deve permitir a publicação de informações de destaque em texto e/ou imagem em espaço dedicado</li>
   <li>RF-002:	O site deve permitir ao usuário fazer o login da sua conta.</li>
   <li>RF-003:	A aplicação deve permitir a criação de abas para input de informações segmentadas.</li>
   <li>RF-004:	A aplicação deve permitir a customização de cores e planos de fundo do Portal.</li>
   <li>RF-006:	A aplicação deve permitir a criação de enquetes com botões para votação.</li>
   <li>RF-007:	A aplicação deve permitir o registro anônimo de ocorrências/denúncias que deverão ser encaminhadas para e-mails específicos de acordo com a estrutura da empresa.</li>
   <li>RF-008:	A aplicação deve permitir o cadastro de usuários.</li>
   <li>RF-009:	A aplicação deve ser acessada por meio do input de usuário e senha.</li>
   </ul>
  </td>
  <td>Verificar se os links da página Home estão encaminhando para as respectivas páginas corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar nos links da página Home.</li>
   </ol>
   </td>
  <td>Todos os links da página Home devem encaminhar os usuários para as páginas descritas.</td>
  <td>Jonathan</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-B: Verificar o funcionamento do carrossel dos Destaques</td>
  <td>
   <ul>
    <li>RF-002:	<li>RF-002:	O site deve permitir ao usuário fazer o login da sua conta.</li>
   </ul>
  </td>
  <td>Verificar se as imagens cadastradas no destaque estão alternando em formato carrossel</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Observar alternância de imagens nos destaques</li>
   </ol>
   </td>
  <td>As imagens cadastradas nos destaques devem alternar.</td>
  <td>MSaulo</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>  
 </tr>
 <tr>
  <td>CT-C: Verificar os espaços para informações segmentadas</td>
  <td>
   <ul>
    <li>RF-003:	A aplicação deve permitir a criação de abas para input de informações segmentadas</li>
   </ul>
  </td>
  <td>Verificar se foram disponibilizados os segmentos e pastas dedicadas com links para informações específicas</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Verificar a existência de segmentos com pastas de nuvem dedicadas</li>
   </ol>
   </td>
  <td>Existência de segmentos com pastas dedicadas por tema</td>
  <td>Mayara</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-D: Verificar a customização do site</td>
  <td>
   <ul>
    <li>RF-004:	 A aplicação deve permitir a customização de cores e planos de fundo do Portal</li>
   </ul>
  </td>
  <td>Verificar se está sendo possível customizar cores de layout do site.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Alternar cores disponíveis</li>
   </ol>
   </td>
  <td>Deve ser possível alterar as cores disponíveis para o layout do site.</td>
  <td>Saulo</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-E: Verificar se é possível criar enquetes</td>
  <td>
   <ul>
   <li>RF-006: A aplicação deve permitir a criação de enquetes com botões para votação.</li>
   </ul>
  </td>
  <td>Verificar se está sendo possível criar enquetes com opções de votação. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em "Criar enquetes"</li>
    <li>Simular a criação de uma enquete com opções para votação. </li>
   </ol>
   </td>
  <td>Deve ser possível simular a criação de uma enquete com opções para votação. </td>
  <td>Jonathan</td>
 </tr>

 <table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-F: Verificar se é possível registrar denúncias. </td>
  <td>
   <ul>
   <li>RF-007	A aplicação deve permitir o registro anônimo de ocorrências/denúncias que deverão ser encaminhadas para e-mails específicos de acordo com a estrutura da empresa.</li>
   </ul>
  </td>
  <td>Verificar se é possível simular o registro de uma denúncia. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em "Gerar denúncia"</li>
    <li>Preencher todos os campos.</li>
    <li>Clicar em "Enviar"</li>
    <li>Verificar se aparece o alerta: "Informações submetidas à análise"</li>
   </ol>
   </td>
  <td>Deve ocorrer uma validação das informações fornecidas pelo usuário, e ao clicar em "Cadastrar", deve aparecer a mensagem "Livro cadastrado com sucesso".</td>
  <td>João</td>
 </tr>
</table>

 <table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-G: Verificar o cadastro de tutores</td>
  <td>
   <ul>
   <li>RF-008	A aplicação deve permitir o cadastro de usuários.</li>
   </ul>
  </td>
  <td>Verificar se é possível cadastro usuários na aplicação. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em "Criar usuário"</li>
    <li>Preencher todos os campos.</li>
    <li>Clicar em "Cadastrar"</li>
    <li>Verificar se aparece a mensagem: "Usuário cadastrado com sucesso"</li>
   </ol>
   </td>
  <td>Deve ocorrer uma validação das informações fornecidas pelo usuário, e ao clicar em "Cadastrar", deve aparecer a mensagem "Tutoria cadastrada com sucesso".</td>
  <td>Saulo</td>
 </tr>
</table>
 
 <table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-H: Acessar aplicação com usuário e senha. </td>
  <td>
   <ul>
   <li>RF-009	A aplicação deve ser acessada por meio do input de usuário e senha</li>
   </ul>
  </td>
  <td>Verificar se é possível acessar aplicação por meio do input de usuário e senha. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página de acesso. </li>
    <li>Preencher usuário e senha.</li>
    <li>Clicar no botão "Entrar".</li>
   </ul>
   </ol>
   </td>
  <td>Deve ser possível acessar a aplicação após input de usuário e senha.</td>
  <td>Mayara</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
 



# Plano de Testes de Software

Pré-requisitos: Especificação do Projeto, Projeto de Interface

Os requisitos para realização dos testes de software são: Site publicado na internet;

Navegador da internet: Chrome

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

Caso de teste	Requisitos associados	Objetivo do teste	Passos	Critérios de êxito	Responsável

CT-01: Verificar o funcionamento dos links da página Home	[ok] - Jonathan

RF-001: O site deve permitir ao usuário cadastrar uma conta.[ok] - Jonathan

RF-002: O site deve permitir ao usuário fazer o login da sua conta.

RF-01	A aplicação deve possuir calendário contendo opção de registro de informações nas datas[ok] - Jonathan

RF-05	A aplicação deve permitir a criação de fóruns contendo botões para resposta em texto [ok] - Jonathan

RF-08	A aplicação deve permitir o cadastro de usuários[ok] - Jonathan

Verificar se os links da página Home estão encaminhando para as respectivas páginas corretamente[ok] - Jonathan

Acessar o navegador.[ok] - Jonathan

Visualizar a página Home.[ok] - Jonathan

Todos os links da página Home devem encaminhar os usuários para as páginas descritas.	[ok] - Jonathan
