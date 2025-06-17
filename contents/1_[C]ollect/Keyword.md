---
createdAt: 2025-06-17
updatedAt: 2025-06-17
tags:
  - memo
---

# Frontend
### signal
### temporal
### ISO TIME
### Hydration
하이드레이션이란? = 수분공급
html에 js를 불러와서 상태관리 및 이벤트핸들러를 등록시키는 것
즉, 정적인 html 페이지에 동적인 행위를 활성화 시키는 것
### Rendering performance

### 에버그린 브라우저
재설치 하지 않아도 브라우저 내에서 업데이트가 가능한 브라우저

### IIFE (Immediately Invoked Function Expression) 방식
>정의 되자마자 사용하는 함수 표현 방식
- 장점
    - 모듈화 은닉화
    - 초기화 코드 실행
    - 전역 네임스페이스 오염을 방지
    - 라이브러리간 충돌 방지
- 단점
    - 가독성
    - 메모리 사용 증가 (함수 인스턴스를 추가 생성하기 때문)
    - 테스트 어려움
    - 모듈 시스템의 등장으로 사용 빈도 하락
### pretendard web font

### 로컬스토리지 / 세션스토리지
| 구분     | 유효범위                                 | 용량  | 연산 처리방식 |
| ------ | ------------------------------------ | --- | ------- |
| 로컬스토리지 | 브라우저 화면, 탭간 공유가능한 데이터                | 5MB | 동기      |
| 세션스토리지 | 브라우저 탭 안에서만 유효하며 탭이 닫히면 스토리지도 종료(삭제) | 5MB | 동기      |
***참고글***
[https://sevity.tistory.com/233](https://sevity.tistory.com/233)
명세서:[https://html.spec.whatwg.org/multipage/webstorage.html#webstorage](https://html.spec.whatwg.org/multipage/webstorage.html#webstorage)