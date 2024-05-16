import './styles.css';

window.onload = () => { 
  const animatedSvg = document.getElementById('animated_text').contentDocument;
  const animatedSvgAnimations = animatedSvg.querySelectorAll("animateTransform");

  const cardContainerAnimations = document.getElementById('card_container').getAnimations();

  const cardAnimations = document.getElementById('card').getAnimations();

  // start animations synchronously on window load
  animatedSvgAnimations.forEach(animation => animation.beginElement());

  cardContainerAnimations.forEach(animation => animation.play());
  
  cardAnimations.forEach(animation => animation.play());

  // add eventlisteners to restart animations on window focus

  const restartAnimations = () => {
    console.log("restarting animations");
    animatedSvgAnimations.forEach(animation => animation.beginElement());
    cardContainerAnimations.forEach(animation => {
      animation.cancel();
      animation.play();
    });
    cardAnimations.forEach(animation => {
      animation.cancel();
      animation.play();
    });
  }

  window.addEventListener("focus", restartAnimations);
}