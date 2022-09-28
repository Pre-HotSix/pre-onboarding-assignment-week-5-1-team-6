# 🎉 원티드 프리온보딩 프론트엔드 코스 7차 과제

## 과제 소개

- 목표 : 오른쪽 사이트의 검색영역을 클론하기 https://clinicaltrialskorea.com/
- 작업기간 : 2022.09.27 ~ 2022.09.29

<br/>

## 구현 영상

https://user-images.githubusercontent.com/103626175/192815949-aaf08277-58d6-4940-870a-fc4958ab7358.mp4

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

1. 레포지토리를 `clone` 합니다
```markdown
$ git clone https://github.com/Pre-HotSix/pre-onboarding-assignment-week-5-1-team-6
```
2. server 실행합니다
```markdown
$ cd server
$ npm start
```

3. dependencies를 설치하고, 프로젝트를 실행합니다
```markdown
$ cd client
$ npm install
$ npm start
```

4. 프로젝트를 실행합니다

```markdown
$ npm start
```

<br/>

## 폴더 구조

```
root
├── .eslintrc
├── .vscode
├── tsconfig.json
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
    ├── App.tsx
    └── index.ts
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
[한국임상정보](https://clinicaltrialskorea.com/) 검색영역을 클론하기
<br/>
## 요구사항
🛠 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현
- 사용자가 입력한 텍스트와 일치하는 부분 볼드처리
    - 예) 사용자 입력: 담낭
    - 추천 검색어:  **담낭**의 악성 신생물, **담낭**염, **담낭**의 기타 질환, 달리 분류된 질환에서의 **담낭**, 담도 및 췌장의 장애
    - 검색어가 없을 시 “검색어 없음” 표출

🛠 API 호출 최적화
- API 호출별로 로컬 캐싱 구현
- 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행
- API를 호출할 때 마다 `console.info("calling api")` 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정

🛠 키보드만으로 추천 검색어들로 이동 가능하도록 구현

<br/>

## 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행
### 1. debounce(실행시킬 콜백함수, 지연시킬 시간) 함수를 구현 및 사용했습니다.  
연이어 호출되는 함수들 중 마지막 함수만 호출되도록, 이벤트 발생이 많을때 마지막 이벤트만을 실행시킵니다.
delay 시간 이내에 함수가 반복 호출될 경우, setTimeout 이 clearTimeout 되므로 실행되지 않습니다.
함수의 반복 호출이 멈춰진 경우, delay 시간 후에 callback 함수가 실행됩니다.
### 2. 작동 동작은 다음과 같습니다.  
- input 태그의 값을 입력하면, 해당 event 매개변수로 받은 debounce 함수가 실행됩니다.
- delay 시간 동안에는 input 태그의 값이 여러 번 변경되어도 clearTimeout 됩니다.
- delay 시간이 다되면, debounce 의 콜백함수가 실행됩니다.

## API 호출별로 로컬 캐싱 구현
### 1. Session Storage에 저장하고, 값을 비교해 api를 호출했습니다. 
해당 값을 Session Storage와 비교해서 존재하지 않는값이면 api를 호출합니다.
해당값이 Session Storage에 존재하는 값이라면 Session Storage의 값을 get해서 사용합니다.
### 2. 작동 동작은 다음과 같습니다.  
- if문으로 Session Storage에서 해당 쿼리를 인자로 get해서 값이 있는지 비교
- 값이 있다면 Session Storage에서 해당 쿼리값으로 get해서 상태를변경
- 값이 없다면 해당 쿼리를 인자로 Api호출해서 결과값으로 상태를 변경

## 키보드만으로 추천 검색어들로 이동 가능하도록 구현
### 1. 키보드 이동 관련 상태를 추가로 만들어서 검색결과를 map할때 index와 비교했습니다.
해당 값의 상태를 만든후 map함수 index와 비교헙니다.
index와 비교한값이 같으면 해당 Boolean을 props로 styled Component에 넘겨줍니다.
### 2. 작동 동작은 다음과 같습니다.  
- 해당 값의 상태를 만든후, 키보드 입력 event를 만들어서 윗 방향키면 값+1, 아래 방향키면 값-1해서 index값과 비교
- 비교한 값의 Boolean을 styled Component에 Props로 전달해서 값이 true라면 background Color 변경

<br />

## 기술 스택

![React](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) 
![Redux](https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white) 
![axios](https://img.shields.io/badge/Axios-5A29E4.svg?style=for-the-badge&logo=Axios&logoColor=white) 
![styled-components](https://img.shields.io/badge/styledcomponents-DB7093.svg?style=for-the-badge&logo=styled-components&logoColor=white)

<br />

## Best Practice

### 1. styles 폴더내 theme 파일로, 전역 css의 스타일을 정의했습니다 

💡 이유 : 전역적으로 사용되는 스타일의 유지보수에 편리하며, 같은 색깔계열에 조금씩 다른 rgb값이 아닌 통일되는 색상을 사용할 수 있습니다.

### 2. 캐싱 데이터를 Session Storage 로 관리했습니다

💡 이유 : Session Storage 는 브라우저를 종료할때 따로 데이터를 삭제해주지 않아도 되고, 새로고침 시에도 데이터가 남아있기때문에, Session Storage 를 사용했습니다. 추가적으로, Local Storage 로 관리시에는 브라우저를 종료한 후에도 정보가 영구적으로 유지되고, 로컬에 객체로 관리시에는 새로고침 시에 캐싱 데이터가 리셋되기 때문에, 해당 방법들을 사용하지 않았습니다.

### 3. 키보드 움직임 관련 값을 상태로 만든 뒤, focus 되는 값의 background 에 변화를 줬습니다

💡 이유 : 상태로 관리하면, 해당값과 추천검색어 index값을 비교한 뒤 일치하는값의 background에 변경이 가능합니다.

### 4. 상태관리는 redux 를 사용했습니다

💡 이유 : 모듈을 나눌 경우, useState 로만 관리하면 props 드릴링이 잦아져, 컴포넌트 간의 의존성이 높아지고 가독성도 떨어지기때문에 redux 로 상태관리하였습니다.

### 5. 자주 쓰는 method 는 utils 폴더에 정의했습니다

💡 이유 : 재사용성이 높아지고, method의 구현방식이 달라질 경우에 유지보수가 편하기떄문에 따로 정의하여 사용했습니다.



