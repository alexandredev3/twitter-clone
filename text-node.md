# Twitter Responsivo com ReactJS | UI Clone

-=-=-=-=-=-=-=-=-=-=-=-=-=-=- Depedencias -=-=-=-=-=-=-=-=-=-=-=-=-=-=-

$ yarn add styled-components styled-icons react-sticky-box
  - styled-components: Escrever css em forma de javascript.
  - styled-icons: Para usarmos pacotes de icones.
  - react-sticky-box: Ajudar na parte do resposivo.

$ yarn add @types/styled-components -D
  - Precisamos instalar as tipages do styled components.

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

 * tsconfig.json
  ```json
  "isolatedModules": false,
  ```
    - Desabilitar isolatedModules.

* Wrapper: E um elemento que fica por volta de alguma coisa.

```css
  div {
    width: min(601px, 100%)
  }
```
  - min: vai ser feito uma comparação entre o primeiro valor e o segundo valor,
  quem ganhar vai ficar como valor final.

