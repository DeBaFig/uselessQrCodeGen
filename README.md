
![Sem título](https://github.com/user-attachments/assets/93b3177c-ac2d-49a7-8c8b-f4d323a7f6cb)
# uselessQrCodeGen


![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)  ![Visual Studio Code Badge](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)   ![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![Java Script badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)  

![GitHub last commit](https://img.shields.io/github/last-commit/DeBaFig/uselessQrCodeGen)  [![GitHub issues](https://img.shields.io/github/issues/DeBaFig/uselessQrCodeGen)](https://github.com/DeBaFig/uselessQrCodeGen/issues) [![GitHub forks](https://img.shields.io/github/forks/DeBaFig/uselessQrCodeGen)](https://github.com/DeBaFig/uselessQrCodeGen/network) [![GitHub stars](https://img.shields.io/github/stars/DeBaFig/uselessQrCodeGen)](https://github.com/DeBaFig/uselessQrCodeGen/stargazers) [![GitHub license](https://img.shields.io/github/license/DeBaFig/uselessQrCodeGen)](https://github.com/DeBaFig/uselessQrCodeGen/blob/main/LICENSE) 

**Gerador de QRCode para Daltônicos** é uma aplicação web que gera QR Codes acessíveis para pessoas daltônicas, com opções de personalização para diferentes tipos de daltonismo. O projeto também inclui um ranking divertido para registrar o tempo gasto na geração dos QR Codes e uma lista de sites "inúteis" para entretenimento.

## Funcionalidades

- **Geração de QR Code acessível:**  
  Permite gerar QR Codes otimizados para diferentes tipos de daltonismo (Protanopia, Deuteranopia, Tritanopia).
- **Ranking de usuários:**  
  Os usuários podem inserir seu nome e registrar o tempo gasto na geração do QR Code.
- **Timer:**  
  Exibe o tempo decorrido durante a interação.
- **Sugestão de sites inúteis:**  
  Integração com a OpenAI para sugerir URLs de sites inúteis e divertidos.
- **Interface amigável:**  
  Layout moderno e responsivo, com validação de formulários usando jQuery Validation.

## Tecnologias Utilizadas

- ASP.NET Core MVC
- C#
- Razor Pages
- JavaScript (jQuery, jQuery Validation, jQuery Validation Unobtrusive)
- OpenAI API (para sugestões de sites)
- Docker (opcional para deploy)

## Instalação

1. **Clone o repositório:**

2. **Configuração da chave OpenAI:**
- Adicione sua chave da OpenAI no arquivo de configuração (`appsettings.json` ou variáveis de ambiente) com o nome `OpenAIKey`.

3. **Build e execução:**
- Via Visual Studio 2022: Abra a solução e pressione F5.
- Via Docker:docker build -t uselessqrcodegen .

4. **Acesse no navegador:**  
http://localhost:8080

## Estrutura do Projeto

- `Controllers/` — Lógica de controle MVC.
- `Views/` — Páginas Razor para interface do usuário.
- `Services/UselessWebsitesService.cs` — Serviço para buscar e sugerir sites inúteis via OpenAI.
- `wwwroot/lib/` — Bibliotecas JavaScript (jQuery, validação, etc).

## Licenças

- O projeto utiliza bibliotecas de terceiros sob licença MIT, como o [jQuery Validation](https://jqueryvalidation.org/).

## Contribuição

Pull requests são bem-vindos! Sinta-se à vontade para abrir issues para sugestões ou bugs.

---

Projeto criado para fins de aprendizado, diversão e acessibilidade.


### Author

**Denize**

It is not luck, it is hard work!

<img style="border-radius: 50%;" src="https://user-images.githubusercontent.com/46844031/163518939-915f6e15-200a-4e9c-9f54-9bee6beec89b.jpg" width="100px;" alt=""/>

Where to find me:

[![Twitter Badge](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/Dbassi91)   [![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dbfigueiredo/)   [![Gmail Badge](	https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:denize.f.bassi@gmail.com)   [![CodePen](https://img.shields.io/badge/Codepen-000000?style=for-the-badge&logo=codepen&logoColor=white)](https://codepen.io/debafig)   
[![Facebook Badge](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/d.bassi91/)   [![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DeBaFig)   [![Instagram Badge](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/bassidenize/)   [![About.me Badge](https://img.shields.io/badge/website-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://debafig.github.io/me/)   [![Whatsapp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://whatsa.me/5547988184372)
