// initializes controller. You can add scenes to this to handle them
let controller = new ScrollMagic.Controller();
// Chain together multiple animations
let timeline = new TimelineMax();

timeline
    .to(".nav-links", 3, {y: -1000} , "-=3")
    .to(".img-box", 3, { y: -1000}, "-=3")
    .to(".info", 3, { y: -700 }, "-=3")
    .to(".social-links", 3, { y: -850}, "-=3")
    .to(".hero", 3, { y: -200}, "-=3")
    .to(".dotgrid", 3, { top: '0%' }, "-=3")
    .fromTo(".content", { opacity: 0 }, { opacity: 1, duration: 3});
    
    
// Lets you integrate scrolling
let scene = new ScrollMagic.Scene({
    // When you want the animation to trigger
    triggerElement: "section",
    duration: "200%",
    // Where you want to trigger the animation
    triggerHook: 0,
})
// Hook the animation to the scene
    .setTween(timeline)
// Sticks the first page so the one under can move up
    .setPin("section")
// Add to the controller
    .addTo(controller);