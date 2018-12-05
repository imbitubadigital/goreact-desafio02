import { createGlobalStyle } from 'styled-components';
import 'font-awesome/css/font-awesome.css';

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline:none;
  }

  body{
    background: #9B65E6;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
  }

  .slide-enter{
    transform: translateX(-100%);
  }
  .slide-enter-active{
    animation: slide-in 300ms ease-out forwards;
  }
  .slide-leave{
    transform: translateX(0%);
  }
  .slide-leave-active{
    animation: slide-out 300ms ease-out forwards;
  }

  @keyframes slide-in{
    from{
      transform: translateX(-100%);
    }
    to{
      transform: translateX(0%);
    }
  }
  @keyframes slide-out{
    from{
      transform: translateX(0%);
    }
    to{
      transform: translateX(100%);
    }
  }

  .flip-enter{
    transform: rotateY(180deg);
  }
  .flip-enter-active{
    animation: flip-in 300ms ease-out forwards;
  }
  .flip-leave{
    transform: rotateY(0deg);
  }
  .flip-leave-active{
    animation: flip-out 300ms ease-out forwards;
  }

  @keyframes flip-in{
    from{
      transform: rotateY(180deg);
    }
    to{
      transform: rotateY(0deg);
    }
  }
  @keyframes flip-out{
    from{
      transform: rotateY(0deg);;
    }
    to{
      transform: rotateY(90deg);
    }
  }
`;

export default GlobalStyle;
