

export const fadeOutToLeft = /*css*/`

  @keyframes fade-out-to-left{
    0%   { 
      opacity: 1; 
    }
    100% {
      filter: grayscale(1);
      opacity: 0; 
      transform: translateY(70%);
    }
  }
  @keyframes fade-in-from-left{
    0%   { 
      opacity: 0; 
      transform: translateY(70%);
    }
    100% {
      opacity: 1; 
      transform: translateY(0);
    }
  }

  [fading-out]{
    animation: fade-out-to-left .5s;
  }
  [fading-in]{
    animation: fade-in-from-left .5s;
  }
`