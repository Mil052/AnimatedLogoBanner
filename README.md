# Animated Header Banner

Banner with animated letters dropping down. Each letter is a mask that display an image underneath. After the letters fall down, there appears an animation of card rotating in 3d.

## App description

Project seems to not be very complicated, but there were few obstacles to make it work. So here are some notes to keep in mind for future projects:

1. At first I try to place SVG into HTML and add cllasses to elemens inside <mask> tag. Clases had animations added in CSS. Result was quite suprising for me. Animations worked fine until I keep moving mouse coursor on the screen, but the moment I stop moving mouse, animations were stoped in Chrome, and Firefox slows them down to just few frames per second. It's probably connected with browser handling of requestAnimationFrame() method (browsers stops or slow down animations on inactive tabs).  
The solution was to use native SVG animation tags, im my case <animateTransform> tag inside <mask> elements directly in SVG file (finaly I decided to keep SVG as a separate file).
2. When you want to place SVG into HTML and need an access to document elements use <object> tag in HTML.
3. SVG has its own API ( https://developer.mozilla.org/en-US/docs/Web/API/SVG_API ) for example for running animations, and its a bit diferent from Web Animation Api ( https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API ).
4. To preserve animations synchronization in SVG and in CSS I explicitly start them on window load event and window focus event. If you don't do this animations lose synchronization when loading in slow internet connection, or when you go to another tab and then go back after some time (SVG and CSS animations seems to use diferent timeline).
5. When using CSS transform-style: preserve-3d, and then appling overflow: hidden rule, opacity rule, clip-path rule or filter rule, transform-style of the element is being overwriten to 'flat'. The solution is to use wrapping element, and there use those rules.

As a summary, a little thing, but I've learn few new things doing it.

## How to run the code:
* Download the code and instal dependencies (in the project directory run: `npm install`).
* Run the app in the development mode (In the project directory run: `npm start`, then open http://localhost:8080 in the browser)

You can also see the working app here: http://animated-logo.seeuinweb.pl/