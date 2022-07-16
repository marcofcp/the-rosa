/* Efeitos com ScrollReveal */

window.sr = ScrollReveal({reset: true});

sr.reveal('.welcome', {duration: 1000});
sr.reveal('.the-rosa', {duration: 3000});
sr.reveal('.divisoria, .opened', {duration: 4000});

sr.reveal('.x-rotate', {
    rotate: {x:0, y:80, z:0},
    duration: 2000,
});

sr.reveal('.x-y-rotate', {
    rotate: {x:100, y:100, z:0},
    duration: 2000,
});