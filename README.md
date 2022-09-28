# 🎉 원티드 프리온보딩 프론트엔드 코스 7차 과제

## 과제 소개

- 목표 : 오른쪽 사이트의 검색영역을 클론하기 https://clinicaltrialskorea.com/
- 작업기간 : 2022.09.27 ~ 2022.09.29

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
$ git clone https://github.com/Pre-HotSix/pre-onboarding-assignment-week-5-1-team-6
```

dependencies를 설치합니다

```markdown
$ npm install
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
    ├── components
    ├── pages
    ├── routes
    ├── store
    ├── styles
    ├── utils
    ├── App.jsx
    └── index.js
```

| 폴더       | 구분                                    |
| :--------- | :-------------------------------------- |
| apis       | api함수들을 모아둔 폴더                 |
| utils      | 타입들과 util함수를 지정한 폴더    |
| components | 코드 재사용을 위한 컴포넌트 관리형 폴더 |
| pages      | url주소에 따른 페이지 구성 폴더         |
| routes     | 라우팅 관련 처리 폴더                   |
| store      | redux를 활용한 폴더                     |
| styles     | 전역으로 사용하는 style 관리 폴더       |

<br/>

## 과제범위

## 요구사항

<br />

## 기술 스택

![React](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) 
![Redux](https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white) 
![axios](https://img.shields.io/badge/Axios-5A29E4.svg?style=for-the-badge&logo=Axios&logoColor=white) 
![styled-components](https://img.shields.io/badge/styledcomponents-DB7093.svg?style=for-the-badge&logo=styled-components&logoColor=white)

<br />

## Best Practice

### 1. styles폴더내에 theme파일로 css의 스타일을 정의해서 썼습니다. 

💡 이유 : 혹여나 스타일이 바껴도 유지보수에 편하며, 같은 색깔계열에 조금씩 다른 rgb값이 없도록 통일했습니다.

### 2. 캐싱을 Session Storage로 관리했습니다.

💡 이유 : Local Storage로 관리시 반영구적 정보가 유지되기떄문에 Session Storage에 저장했고, 검색 api호출하기 전에 해당값을 Session Storage와 비교해서 값이 있으면 해당값으로 상태를 업데이트 하고 없다면 api를 호출하는 방식으로 구현했습니다.

### 3. 입력마다 API를 호출하지 않도록 setTimeout으로 term을 만들어 호출했습니다.  

💡 이유 : setTimeout과 useCallback을 사용해서 debounce함수를 만들어서 

### 4. 키보드 움직임 관련 상태를 만들어서 해당값과, 추천검색어 index값을 비교해서 일치하는값의 background에 변화를 줬습니다.

💡 이유 : 상태를 관리해야 해당값으로 변경이 가능해서 그렇게 관리했습니다.

### 5. recoil과 react-query로 상태관리를 했습니다.

💡 이유 : 서버 데이터 상태 관리와 클라이언트 데이터 상태 관리를 분리하기 위해, 서버 데이터관리는 react-query를, 클라이언트 데이터관리는 recoil을 사용했습니다.

### 6. params로 페이지네이션, 검색을 관리해서 언제든 도메인에 접근 가능하게 했습니다.

💡 이유 : 특정 페이지의 링크를 통해서도 접근할 수 있고, Query String으로 정보를 얻어 사용할 수도 있기 때문입니다.

### 7. Tailwind CSS를 사용해서 CSS 적용을 하였습니다.

💡 이유 : 클래스명으로 선언을 함으로써 간편하게 사용이 가능하며, HTML와 CSS 파일을 별도로 관리할 필요가 없습니다. 또한, 일관된 디자인과 스타일과 쉽고 자유로운 커스텀이 가능합니다. 추가적으로 Visual Studio Code의 확장 프로그램으로 Tailwind CSS IntelliSense를 설치하면, 클래스 자동완성 기능도 사용할 수 있습니다.
