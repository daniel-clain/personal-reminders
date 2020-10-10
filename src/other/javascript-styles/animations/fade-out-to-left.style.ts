

export const fadeOutToLeft = /*css*/`

  @keyframes fade-out-to-left{
    0%   { 
      opacity: 1; 
    }
    70%   { 
      max-width: 200px; 
    }
    100% {
      max-width: 0px; 
      padding: 0;
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
    animation: fade-out-to-left .3s;
  }
  [fading-in]{
    animation: fade-in-from-left .3s;
  }
`