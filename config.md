1. yarn init -y
2. yarn add webpack webpack-cli webpack-dev-server -D
3. yarn add react react-dom
4. yarn add mini-css-extract-plugin style-loader css-loader sass-loader node-sass -D
5. yarn add @babel/{core,preset-env,preset-react} babel-{loader,preset-es2015} -D
6. yarn add html-webpack-plugin clean-webpack-plugin -D

html-webpack-plugin: webpack이 실행될 때 public 파일에 설정한 파일을 기준으로 결과물 생성

clearn-webpack-plugin: Webpack이 실행될 때 이전에 나온 결과물을 제거
mini-css-extract-plugin: css 결과물을 여러개의 chunk 파일로 분리 시켜준다.

@babel/core : babel 사용을 위한 코어 라이브러리
babel-loader : Webpack을 사용할 때 babel을 적용하기 위한 라이브러리
@babel/preset-env : JavaScript ES6 코드를 ES5로 compiling 해주는 라이브러리
@babel/preset-react : JSX 코드를 JavaScript 코드로 변환시켜 주는 라이브러리

Plugin - 플러그인은 웹팩의 기본적인 동작에 추가적인 기능을 제공하는 속성
로더랑 비교시 로더는 파일을 해석하고 변환하는 과정에 관리,
플러그인은 해당 결과물의 형태를 바꾸는 역할을 한다.
