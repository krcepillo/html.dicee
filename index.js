function randomImage() {
   let randomNumber1 = Math.floor(Math.random() * 6 + 1);
   let randomNumber2 = Math.floor(Math.random() * 6 + 1);
   let winner = '';

   if (randomNumber1 > randomNumber2) {
      winner = document.querySelector('h1').innerHTML = ('🚩Player 1 winner!');
   } else if (randomNumber1 < randomNumber2) {
      winner = document.querySelector('h1').innerHTML = ('Player 2 winner!🚩');
   } else if (randomNumber1 === randomNumber2) {
      winner = document.querySelector('h1').innerHTML = ('Drawn!');
   }


   return document.querySelector('.img1').setAttribute('src', './images/dice' + randomNumber1 + '.png'), 
          document.querySelector('.img2').setAttribute('src', './images/dice' + randomNumber2 + '.png'), 
          winner;
}
