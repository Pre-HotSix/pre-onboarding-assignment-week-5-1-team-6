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

- 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/81d5016d-ca92-494c-a90c-5458ffde01c5/Untitled.png)
    
    - 사용자가 입력한 텍스트와 일치하는 부분 볼드처리
        - 예)
            - 사용자 입력: 담낭
            추천 검색어:  **담낭**의 악성 신생물, **담낭**염, **담낭**의 기타 질환, 달리 분류된 질환에서의 **담낭**, 담도 및 췌장의 장애
    - 검색어가 없을 시 “검색어 없음” 표출
- API 호출 최적화
    - API 호출별로 로컬 캐싱 구현
        - 캐싱 기능을 제공하는 라이브러리 사용 금지(React-Query 등)
        - 캐싱을 어떻게 기술했는지에 대한 내용 README에 기술
    - 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행
        - README에 전략에 대한 설명 기술
    - API를 호출할 때 마다 `console.info("calling api")` 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정
- 키보드만으로 추천 검색어들로 이동 가능하도록 구현
    - 사용법 README에 기술

## 요구사항
🛠 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현
    - 사용자가 입력한 텍스트와 일치하는 부분 볼드처리
        - 예) 사용자 입력: 담낭
             추천 검색어:  **담낭**의 악성 신생물, **담낭**염, **담낭**의 기타 질환, 달리 분류된 질환에서의 **담낭**, 담도 및 췌장의 장애
    - 검색어가 없을 시 “검색어 없음” 표출
🛠 API 호출 최적화
    - API 호출별로 로컬 캐싱 구현
    - 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행
    - API를 호출할 때 마다 `console.info("calling api")` 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정

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

💡 이유 : Local Storage로 관리시 반영구적 정보가 유지되기떄문에 Session Storage에 저장했습니다.

### 3. 키보드 움직임 관련 상태를 만들어서 해당값과, 추천검색어 index값을 비교해서 일치하는값의 background에 변화를 줬습니다.

💡 이유 : 상태를 관리해야 해당값으로 변경이 가능해서 그렇게 관리했습니다.

### 4. redux로 상태관리를 했습니다.

💡 이유 : 기존 useState으로 관리하면 props드릴링이 잦아져 가독성이 나빠지므로 redux로 해결했습니다.

### 5. params로 페이지네이션, 검색을 관리해서 언제든 도메인에 접근 가능하게 했습니다.

💡 이유 : 특정 페이지의 링크를 통해서도 접근할 수 있고, Query String으로 정보를 얻어 사용할 수도 있기 때문입니다.

### 6. Tailwind CSS를 사용해서 CSS 적용을 하였습니다.

💡 이유 : 클래스명으로 선언을 함으로써 간편하게 사용이 가능하며, HTML와 CSS 파일을 별도로 관리할 필요가 없습니다. 또한, 일관된 디자인과 스타일과 쉽고 자유로운 커스텀이 가능합니다. 추가적으로 Visual Studio Code의 확장 프로그램으로 Tailwind CSS IntelliSense를 설치하면, 클래스 자동완성 기능도 사용할 수 있습니다.

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

