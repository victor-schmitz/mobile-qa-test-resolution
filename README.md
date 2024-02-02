# Processo seletivo para QA Test

Este repositório contém o código de um aplicativo móvel que foi utilizado para o teste de desenvolvedor móvel. Neste caso, vamos utlizar como código base a submissão de [@ermessonlima](https://github.com/ermessonlima). O teste foi baseado neste [repo](https://github.com/mhadaniya/mobile-weather-app), mas o código é baseado neste [repo](https://github.com/ermessonlima/mobile-weather-app).

## Apresentação do aplicativo

De maneira resumida, é um aplicativo com previsão de tempo de cidades. Ele consome uma API externa, e tem algumas regrinhas para renderização na tela.

Abaixo, alguns vídeos demonstrando o funcionamento da aplicação:

<table>
  <tr>
    <td>
      <p>Daytime - IOS</p>
      <video src="https://user-images.githubusercontent.com/59540379/235064730-8ea328ce-1d38-4ee5-abcc-999211c5e8df.mp4" width="400" height="300" controls></video>
    </td>
    <td>
      <p>Nighttime - IOS</p>
      <video src="https://user-images.githubusercontent.com/59540379/235065579-d936e540-086b-4154-96d8-16b8fc62e7d4.mp4" width="400" height="300" controls></video>
    </td>
        <td>
      <p>Daytime - ANDROID</p>
            <video src="https://user-images.githubusercontent.com/59540379/235074744-271351fc-20b0-4998-bae5-2927c8664785.webm" width="400" height="300" controls></video>
    </td>
       <td>
      <p>Nighttime - ANDROID</p>
       <video src="https://user-images.githubusercontent.com/59540379/235074172-60807b7c-8e8e-44aa-8d99-721dce1159f0.webm" width="400" height="300" controls></video>
    </td>
  </tr>
</table>

### Funcionalidades

- Previsão do tempo: exibir temperatura atual, condições climáticas, chance de chuva, umidade do ar, velocidade do vento e outras informações.
- Seleção de cidade: permitir que os usuários pesquisem e escolham a cidade de sua preferência para visualizar a previsão do tempo.
- Animações meteorológicas: utilizar animações para representar visualmente as condições climáticas em tempo real, incluindo mudanças com base no horário do dia (como transições de dia para noite).
- Previsão estendida do tempo: fornecer previsões de longo prazo para os próximos dias, com informações sobre temperaturas máximas e mínimas e chance de chuva.

### Tech stack

Algumas libs utilizadas neste projeto: React Native, Expo, Axios, Moment, Styled Components, Zustand, Lottie React Native, React Native SVG, React Native Gesture Handler, React Native Async Storage, React Native Location, Husky, Commitlint, ESLint, Jest.

A API no backend utilizado foi: Api hgbrasil

### Requirementos

- Node.js
- Yarn (ou NPM)
- Expo CLI

### <a name="exec-proj"></a>Como executar o projeto

Para executar este projeto, você precisa seguir estas etapas:

1. Instale o Node.js em seu computador a partir do site oficial: https://nodejs.org/

2. Instale o gerenciador de pacotes Yarn (você também pode usar o NPM, que vem com o Node.js, se preferir) executando o seguinte comando:

```bash
npm install --global yarn
```

3. Instale o Expo CLI globalmente usando o Yarn (ou NPM):

```bash
yarn global add expo-cli
```

4. Clone este repositório para o seu computador:

```bash
git clone https://github.com/victor-schmitz/mobile-qa-test-resolution.git
```

5. Navegue até a pasta do projeto clonado e instale as dependências:

```bash
cd mobile-qa-test-resolution/
yarn install --force
```

6. Inicie o servidor de desenvolvimento do Expo:

```bash
npx expo start
```

7. O Expo exibirá um código QR. Para visualizar o aplicativo em seu dispositivo móvel, instale o aplicativo Expo Go, disponível na App Store (iOS) ou no Google Play Store (Android). Depois de instalá-lo, abra o aplicativo e escaneie o código QR usando a câmera do seu telefone ou a função de escaneamento dentro do aplicativo Expo Go. Isso iniciará o aplicativo em seu dispositivo móvel, permitindo que você visualize e teste suas funcionalidades.


Não esqueça de configurar a variável de ambiente para executar o projeto. Você precisa criar um arquivo `.env`, e este arquivo deve conter:

`REACT_APP_BASE_URL:https://api.hgbrasil.com/weather?key={my_key}`

Se por ventura, mesmo criando o arquivo `.env` e adicionando a linha acima, a API ainda não funcionar, você deve fazer o seguinte:

no arquivo `.env` colar apenas essa linha:

`REACT_APP_BASE_URL=https://api.hgbrasil.com/weather?key={my_key}`

e no arquivo `src\services\api.ts` substituir:

`export const instance = createInstance(process.env.REACT_APP_BASE_URL ?? '')`

por:

`export const instance = createInstance('https://api.hgbrasil.com/weather?key={my_key}&format=json' ?? '')`


# Resolução do teste


### Teste de tela
- [x] Fazer teste de tela (bônus)

Nessa etapa, foram utilizados [Java JDK8](http://www.oracle.com/technetwork/pt/java/javase/downloads/jdk8-downloads-2133151.html), [Node.js](https://nodejs.org/en/), [Python](https://www.python.org/), [Android Studio](https://developer.android.com/studio?hl=pt-br), [Appium](https://appium.io/docs/en/2.4/) e [Robot Framework](https://robotframework.org/) para realizar os testes automatizados das telas.

Para fazer os testes da tela, você precisa primeiramente ter instalado as ferramentas para [executar o Projeto](#como-executar-o-projeto), e logo em seguida seguir estas etapas:

1. Instale Python, você pode seguir esse tutorial: https://www.youtube.com/watch?v=0pG4NrucQR4


2. Intale o JDK 8 através [desse link](http://www.oracle.com/technetwork/pt/java/javase/downloads/jdk8-downloads-2133151.html)

3. Instale o Android Studio: https://developer.android.com/studio?hl=pt-br

4. No cmd execute:
```bash
npm install -g appium
npm install -g appium-doctor
```

5. Instale o Appium Server GUI (Appium-Server-GUI-windows-1.22.3-4.exe
): https://github.com/appium/appium-desktop/releases/tag/v1.22.3-4

6. Instale o Robot Framework:

```bash
pip install robotframework
pip install robotframework-appiumlibrary
```

7. O Android SDK (para executar comandos adb) é baixado pelo Android Studio, mas você precisa de adiciona-lo nas variáveis de ambiente.
* Para isso, você pode seguir esse tutorial: https://www.youtube.com/watch?v=YMSj4g5yEzs
* No vídeo, é dito para colocar na PATH das variáveis do sistema tanto uma pasta chamada `platform-tools`, quanto `tools`. Se por ventura você não encontrar a pasta `tools`, adicione a pasta `emulator` em vez dela.
* Se o `adb devices` ainda não for reconhecido, sugiro que você não coloque o caminho encurtado (como `%ANDROID_HOME%\platform-tools`) na PATH das variáveis de sistema, e sim coloca-lo por extenso, como por exemplo: `C:\Users\usuario\AppData\Local\Android\Sdk\emulator`

8. Abra o Android Studio e crie um novo projeto.

9. Depois, quando o projeto carregar, clique em Device Manager e dê Start no dispositivo pré criado pelo Android Studio.

10. No arquivo `test_screen\resources\base.robot`, você deve alterar a seguinte linha:

    `...                 udid={MY_DEVICE}`

    Digite `adb devices` no cmd e substitua o seu dispositivo pelo `{MY_DEVICE}`

    Exemplo: 
    `...                 udid=emulator-5544`

11. Abra o Appium server GUI

12. No Appium Server GUI, clique em `Edit Configurations` e onde diz `ANDROID_HOME`, cole o caminho que você usou para configurar as variáveis de ambiente do Android Studio. Será algo como `C:\Users\usuario\AppData\Local\Android\Sdk`

13. Com tudo pronto, entre na pasta `test_screen`

```bash
cd test_screen
```
   
13. Digite o seguite comando para executar os testes:

```bash
robot -d ./logs suite.robot
```

14. Assim, os testes serão executados e documentados na pasta `test_screen\logs`

15. Além disso, nesse [link do google planilhas](https://docs.google.com/spreadsheets/d/1MpSpvWoOmYTfgf7QZ9qzGrxpZqkv3-TKbHkBmfqKRps/edit?usp=sharing) , deixei os mesmos testes que foram realizados usando Robotframework, só que feitos manualmente.


## Teste de Componentes
- [x] Fazer teste de 5 componentes

Foram realizados teste de mais 5 componentes, sendo 4 deles usando Jest, que para testa-los, você deve executar o seguinte comando na pasta raiz do projeto:

```bash
npm test
```

O 5° componente foi testado com o Robotframework, sendo o componente de botão de troca de cidade. Para testa-lo, você deve, depois de ter [configurado o Robot Framework], deve navegar até a pasta `test_screen` e executar o teste:

```bash
cd test_screen
robot -d ./logs -t "Check City Selection with Weather Forecast" suite.robot
```


## Atualizar o README
- [x] README atualizado com instruções de instalação e execução dos testes
