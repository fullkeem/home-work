# Mission-01
<br />
<strong>Html & CSS 과제</strong>

## 목차
1. Screenshot
2. 과제 소개
3. html 구조
4. 과제 회고
<br />

------



### Screenshot
<img width="493" alt="스크린샷 2023-11-04 212721" src="https://github.com/kimchoongman/11_04_practice/assets/103557910/553a5a23-a5d5-4d82-8734-953b34e4ace4">

<br />
<br />

### 과제 소개

- Html 과 CSS로 상품 구매 목록 카드 만들기

<br />
<br />
  

### html 구조

* div(container)
  + section(product box) 
    + div(logo & description box) 
      + img(product logo)
      + h2(product description)
    + img(product picture)
    + button(purchase link) > a > img
-----
- section들을 페이지 가운데 배치하기 위해 div(container)로 감싸고 display: flex, justify-content align-items에 center 값을 줬습니다.
- logo와 description을 묶고 * img(product logo)와 같이 div로 감싸 display: flex로 위치를 지정했습니다.
- kamill카드와 gomgom 카드는 나란히 배치하기 위해 각 카드를 article로 묶고 section으로 감싸 display: flex, justify-content: space-between을 사용햇습니다.
- 구매 버튼은 position: absolute를 사용해 배치했습니다.

<br />
<br />

### 과제 회고
  이번 과제를 하면서 여러가지 방법으로 작업하고 싶었지만 아직 자유자제로 응용하진 못해 가장 편한 display: flex와 position: absolute를 사용해서 작업했습니다. <br /> 
  그리고 수업을 들을 때는 이해했다고 생각한 웹 접근성과 애니메이션을 직접 해보려고 하니 어려운 부분이 있었습니다. <br /> 
  이번 과제를 작업하면서 나의 어떤 부분이 부족한지 잘 파악할 수 있었습니다.
