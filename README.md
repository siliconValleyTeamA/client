# Fuding

Project Funding Service

## ✋Team Members

- [![title](https://img.shields.io/badge/DEVLOPER-최윤선-123456)](https://github.com/OMEGA-Y)
- [![title](https://img.shields.io/badge/DEVLOPER-이연정-123456)](https://github.com/YeonJeongLee00)
- [![title](https://img.shields.io/badge/DEVLOPER-유창헌-123456)](https://github.com/dbckdgjs369)
- [![title](https://img.shields.io/badge/DEVLOPER-노기진-123456)](https://github.com/nohgijin)

---

## 🧞Quick Start 1

### 1. Clone & Install Packages

```bash
git clone https://github.com/siliconValleyTeamA/client.git
cd client
npm install

git clone https://github.com/siliconValleyTeamA/server.git
cd server
npm install
```

### 2. Add config.json / secret.json / auth.json in server

add cofing.json in db folder

```bash
confing.json
{
    "host": “${serverIP}”,
    "user": “${dbUser}”,
    "password”: “${dbPassword}”,
    "database": “${dbName}”
}
```

add secret.json in root folder

```bash
secret.json
{
    "SECRET_KEY": “${loginKEY}”
}
```

add auth.json in root folder

```bash
auth.json
{
    "CLIENT_ID": "${githubPassPortID}",
    "CLIENT_SECRET": "${githubPassPortID}",
    "CALLBACK_URL": "${githubCallbackURL}"
}

```

### 3. Run develop client

```bash
npm start
```

### 4. Run develop server

```bash
npm run dev
```

Then, you can access to your server http://localhost:3000

---

## 🐳Quick Start 2 - docker

https://github.com/siliconValleyTeamA/docker

---

## 기술 스택

**Frontend**

- ![title](https://img.shields.io/badge/-HTML5-E34F26?&logo=html5&logoColor=white)
- ![title](https://img.shields.io/badge/-SCSS-CC6699?&logo=Sass&logoColor=white)
- ![title](https://img.shields.io/badge/-Webpack-7ac5f1?&logo=Webpack&logoColor=white)
- ![title](https://img.shields.io/badge/-Babel-eece4f?&logo=Babel&logoColor=white)

**Backend**

- ![title](https://img.shields.io/badge/-Node.js-339933?&logo=Node.js&logoColor=white)
- ![title](https://img.shields.io/badge/-Express-191919?&logo=Node.js&logoColor=white)
- ![title](https://img.shields.io/badge/-MySQL-4479A1?&logo=MySQL&logoColor=white)

**ETC**

- ![title](https://img.shields.io/badge/-EC2-232F3E?&logo=Amazon-AWS&logoColor=white)
- ![title](https://img.shields.io/badge/-Github-181717?&logo=Github&logoColor=white)
- ![title](https://img.shields.io/badge/-Slack-4A154B?&logo=Slack&logoColor=white)

---

## 프로젝트 구조

```bash
|-- client
    |
    |-- public
    |   |
    |   |
    |   |-- src
    |   |   |-- api
    |   |   |    ... // api 호출 함수 모음
    |   |   |
    |   |   |-- components
    |   |   |   ...  // 컴포넌트 파일
    |   |   |
    |   |   |-- images
    |   |   |   ... //페이지 구성 이미지
    |   |   |
    |   |   |-- modules
    |   |   |  ... //reducer 모음
    |   |
    |   |-- pages
    |   |  ...// 페이지 모음
    |   |-- styles
    |   |  ...//글로벌 palette 및 스타일 모음
    |   |
    |   |-- App.js
    |   |     라우팅
    |   |       ...  // 페이지 별 라우팅 장소
    |   |
    |   |-- index.js
            ... // 페이지 최종 모음
    |
    |-- package.json //설치 모듈 및 버전
```

```bash
|-- server // Backend
    |-- bin
    |   |-- www
    |
    |-- public
    |   |-- docs
    |   |   ... // 스웨거 관련 파일
    |   |
    |   |-- swagger.yaml
    |   |
    |-- db
    |   ... // 데이터베이스 작업 처리
    |
    |-- routes
    |   ... // 라우터 요청에 따른 작업 처리
    |
    |-- views
    |   ...  // pug 파일
    |
    |-- app.js
```
