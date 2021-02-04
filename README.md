# Fuding(client)

Project Funding Service

## ✋Team Members

- [![title](https://img.shields.io/badge/DEVLOPER-최윤선-123456)](https://github.com/OMEGA-Y)
- [![title](https://img.shields.io/badge/DEVLOPER-이연정-123456)](https://github.com/YeonJeongLee00)
- [![title](https://img.shields.io/badge/DEVLOPER-유창헌-123456)](https://github.com/dbckdgjs369)
- [![title](https://img.shields.io/badge/DEVLOPER-노기진-123456)](https://github.com/nohgijin)

---

## 🧞Quick Start 

### 1. Clone & Install Packages

```bash

git clone https://github.com/siliconValleyTeamA/client.git
cd client
npm install

```

### 2. Run develop client

```bash
npm start
```
Then, you can access to http://localhost:3000

---

## 기술 스택

**Frontend**

- ![title](https://img.shields.io/badge/-HTML5-E34F26?&logo=html5&logoColor=white)
- ![title](https://img.shields.io/badge/-SCSS-CC6699?&logo=Sass&logoColor=white)
- ![title](https://img.shields.io/badge/-Webpack-7ac5f1?&logo=Webpack&logoColor=white)
- ![title](https://img.shields.io/badge/-Babel-eece4f?&logo=Babel&logoColor=white)

**ETC**

- ![title](https://img.shields.io/badge/-EC2-232F3E?&logo=Amazon-AWS&logoColor=white)
- ![title](https://img.shields.io/badge/-Github-181717?&logo=Github&logoColor=white)
- ![title](https://img.shields.io/badge/-Slack-4A154B?&logo=Slack&logoColor=white)

---
## 정적 페이지 


http://fuding-bucket.s3-website.ap-northeast-2.amazonaws.com


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
    |   |   |  ...  // 컴포넌트 파일
    |   |   |
    |   |   |-- images
    |   |   |  ... //페이지 구성 이미지
    |   |   |
    |   |   |-- modules
    |   |   |  ... //reducer 모음
    |   |   |
    |   |   |-- hooks
    |   |   |  ...// hook 모음
    |   |   |
    |   |   |-- pages
    |   |   |  ...// 페이지 모음
    |   |   |
    |   |   |-- styles
    |   |   |  ...//글로벌 palette 및 스타일 모음
    |   |   |
    |   |   |-- App.js
    |   |   |  ...  // 페이지 별 라우팅 설정
    |   |   | 
    |   |   |-- index.js    
    |   |   |  ... // 페이지 최종 모음
    |   |
    |
    |-- package.json //설치 모듈 및 버전
```
