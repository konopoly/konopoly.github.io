const profileImgDiv = document.getElementsByClassName('title-bar__img')[0];

//do stuff after phrase was entered
const initiate = _ => {
   alert('Konstantin loves Elizabeth, because Elizabeth is the coolest person ever!!!!');
} 

//show username and pw for login
const validate = _ => {
   const bioDiv = document.getElementsByClassName('bio')[0];

   const phraseInput = document.createElement("Input");
   phraseInput.setAttribute("id", "phraseInputId");
   const phraseInputButton = document.createElement("button");
   phraseInputButton.innerHTML = 'Submit';

   phraseInputButton.addEventListener('click', () => {
      if(phraseInput.value === 'Lam' || phraseInput.value === 'lam') {
         initiate();
      }
      
      phraseInput.value = '';
   })

   bioDiv.appendChild(phraseInput);
   bioDiv.appendChild(phraseInputButton);
}

const imgClickCounter = () => {
   let sum = 0;
   return () => {
      if(sum === 5) {
         sum = 0;
         validate();
      }
      sum+=1;
   }
}

profileImgDiv.addEventListener('click', imgClickCounter())
