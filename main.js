let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Me gusta el mundo de la programación  y el desarrollo de paginas web.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
