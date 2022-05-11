# React-Recoil-Board-App

Javascript 상태관리 라이브러리인 Recoil을 사용한 React Board App을 만들어 보면서 Recoil에 대해 이해해 보자.
[Recoil 문서](https://recoiljs.org/ko/docs/introduction/core-concepts)를 보고 주요 개념을 파악해보고 예제를 통해 사용법을 익혀보자.

## Recoil 주요 개념

### 개요

Recoil을 사용하면 atoms(공유 상태)에서 selectors(순수 함수)를 거쳐 React 컴포넌트로 내려가는 data-flow graph를 만들 수 있다.
Atoms는 컴포넌트가 구독할 수 있는 상태의 단위다. Selector는 atoms 상태값을 동기 또는 비동기 방식을 통해 변환한다.

### Atoms

Atoms는 상태의 단위이며, 업데이트와 구독이 가능하다. 

### Selectors

Selectors는 atoms나 다른 selectors를 입력으로 받아들이는 순수 함수(pure function)다. 상위의 atoms나 selectors가 업데이트되면 하위의 selector 함수도 다시 실행된다. 컴포넌트들은 selectors를 구독할 수 있다.