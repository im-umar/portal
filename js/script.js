var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Hi I’m Umar')
    .pauseFor(2500)
    .deleteAll()
    .typeString('A Web Designer')
    .pauseFor(2500)
    .deleteChars(12)
    .typeString('Front end Developer')
    .pauseFor(2500)
    .start();
