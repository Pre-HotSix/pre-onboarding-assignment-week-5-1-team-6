# 🎉 원티드 프리온보딩 프론트엔드 코스 7차 과제

## 과제 소개

- 목표 :
- 작업기간 : 2022.09.16 ~ 2022.09.19

<br/>

## 구현 영상

<br/>

## 팀원들을 소개합니다.

| 멤버                                          | 담당       | 포부                                      |
| :-------------------------------------------- | :--------- | :---------------------------------------- |
| [김승모(팀장)](https://github.com/endmoseung) | 프론트엔드 | 프리온보딩 코스 수료후 관련기업 취업성공! |
| [손우영](https://github.com/dndud2906)        | 프론트엔드 | 프리온보딩 기반으로 하루빨리 이직         |
| [이종호](https://github.com/devfrank9)        | 프론트엔드 | 원피스 완결 전에 오픈소스 컨트리뷰터 달기 |
| [민유경](https://github.com/MINYUKYUNG)       | 프론트엔드 | 10월 안에 취직!                           |
| [강다현](https://github.com/KKangdaa)         | 프론트엔드 | 실무를 아는 신입개발자 되기               |

<br/>

## Commit & Merge Convention

```
1. dev (개발) 브랜치를 생성한다.
2. 각자 주어진 작업에 대한 issue를 생성한다.
3. 생성된 issue 번호로 개별 branch 이름을 갖는다
4. 개별 branch에서 작업후 Git 컨벤션에 따라 커밋 및 PR을 한다.
5. 이때, PR은 dev(개발)로 한다.
6. 모든 issue close 및 작업사항 없을시 main으로 dev(개발) 브랜치를 PR한다.
7. 이후 작업 발생시 1~6을 반복한다.
```

<br />

## 실행 방법

레포지토리를 `clone` 합니다

```markdown
$ git clone https://github.com/Pre-HotSix/pre-onboarding-assignment-week-3-2-team-6
```

dependencies를 설치합니다

```markdown
$ npm install
```

env를 설정합니다

```markdown
$ 내려받은 프로젝트의 최상위 폴더 안에 .env 파일을 생성합니다.
REACT_APP_API_URL=http://localhost:4000/comments
```

api 서버를 실행합니다

```markdown
$ npm run api
```

프로젝트를 실행합니다

```markdown
$ npm start
```

<br/>

## 폴더 구조

```
root
├── .eslintrc
├── .vscode
├── .prettierrc
├── package-lock.json
├── package.json
├── public
|   ├── favicon.ico
|   └── index.html
└── src
    ├── apis
    ├── containers
    ├── components
    ├── pages
    ├── routes
    ├── redux
    ├── styles
    ├── App.jsx
    └── index.js
```

| 폴더       | 구분                                    |
| :--------- | :-------------------------------------- |
| apis       | api함수들을 모아둔 폴더                 |
| containers | 컴포넌트들에 대한 부모 Container모음    |
| components | 코드 재사용을 위한 컴포넌트 관리형 폴더 |
| pages      | url주소에 따른 페이지 구성 폴더         |
| routes     | 라우팅 관련 처리 폴더                   |
| redux      | redux를 활용한 폴더                     |
| styles     | 전역으로 사용하는 style 관리 폴더       |

<br/>

## 과제범위

## 요구사항

<br />

## 기술 스택

![React](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Recoil](https://img.shields.io/badge/Recoil-007af4.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FscXVlXzEiIGRhdGEtbmFtZT0iQ2FscXVlIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI1NS4yMSA2MjMuOTEiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDp3aGl0ZX08L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im03NC42MiAyNzcuNDYgMS4yNC0uMTMgMzQuNzgtMy4yOC01My40Ny01OC42NkE5Ni40NyA5Ni40NyAwIDAgMSAzMiAxNTAuM0gzYTEyNS4zIDEyNS4zIDAgMCAwIDMyLjggODQuNTdaTTE3Ny4xMyAzNDdsLTM2IDMuNCA1My4zMiA1OC41MUE5Ni40MSA5Ni40MSAwIDAgMSAyMTkuNjMgNDc0aDI4LjkyYTEyNS4yOCAxMjUuMjggMCAwIDAtMzIuNzYtODQuNTdaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjUzLjY5IDIzMS42OGMtNi4zMy0zMS4zLTMwLjg5LTU0LjA5LTYyLjU3LTU4LjA3bC02LjM1LS43OWE0OS42MSA0OS42MSAwIDAgMS00My4zNS00OS4xM3YtMjBhNTIuNzUgNTIuNzUgMCAxIDAtMjguOTEtLjM2djIwLjM4YTc4LjU2IDc4LjU2IDAgMCAwIDY4LjY1IDc3LjgybDYuMzYuOGMyMy4yNCAyLjkyIDM0Ljc4IDIwIDM3LjgzIDM1LjFzLS45MyAzNS4zMi0yMS4yMiA0N2E3My44MSA3My44MSAwIDAgMS0zMC4wNiA5LjYybC05NS42NiA5YTEwMi40NSAxMDIuNDUgMCAwIDAtNDEuOCAxMy4zOEM5IDMzMi40NS00LjgxIDM2MyAxLjUyIDM5NC4yOXMzMC44OSA1NC4wOCA2Mi41NyA1OC4wNmw2LjM1LjhhNDkuNiA0OS42IDAgMCAxIDQzLjM1IDQ5LjEydjE4YTUyLjc1IDUyLjc1IDAgMSAwIDI4LjkxLjI2di0xOC4yNmE3OC41NSA3OC41NSAwIDAgMC02OC42NS03Ny44MWwtNi4zNi0uOGMtMjMuMjQtMi45Mi0zNC43OC0yMC4wNS0zNy44My0zNS4xMXMuOTMtMzUuMzIgMjEuMjItNDdhNzMuNjggNzMuNjggMCAwIDEgMzAuMDYtOS42M2w5NS42Ni05YTEwMi40NSAxMDIuNDUgMCAwIDAgNDEuOC0xMy4zOGMyNy42NS0xNi4wMiA0MS40LTQ2LjU0IDM1LjA5LTc3Ljg2WiIvPjwvc3ZnPg==&logoColor=white) ![axios](https://img.shields.io/badge/Axios-5A29E4.svg?style=for-the-badge&logo=Axios&logoColor=white) ![styled-components](https://img.shields.io/badge/styledcomponents-DB7093.svg?style=for-the-badge&logo=styled-components&logoColor=white)

<br />

## Best Practice

### 1.

💡 이유 :
