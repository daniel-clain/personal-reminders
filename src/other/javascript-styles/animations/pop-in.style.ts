export const popIn = /*css*/`

  @keyframes pop-in{
    0%   { 
      opacity: 0;     
      transform: scale(0);
    }
    70% {
      transform: scale(1.1);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .popping-in{
    animation: pop-in .3s;
  }
`