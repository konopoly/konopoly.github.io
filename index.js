const profileImgDiv = document.getElementsByClassName('title-bar__img')[0];
const resumeDownloadButton = document.getElementsByClassName('bio__resume-download')[0];

//do stuff after phrase was entered
const initiate = _ => {
   alert('correct password');
} 

//show username and pw for login
const validate = _ => {
   const bioDiv = document.getElementsByClassName('bio')[0];

   const phraseInput = document.createElement("Input");
   phraseInput.setAttribute("id", "phraseInputId");
   const phraseInputButton = document.createElement("button");
   phraseInputButton.innerHTML = 'Submit';

   phraseInputButton.addEventListener('click', () => {
      if(phraseInput.value === 'kharkov') {
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

const downloadResume = () => {
   window.open('./assets/resume.pdf');
}

resumeDownloadButton.addEventListener('click', downloadResume)
profileImgDiv.addEventListener('click', imgClickCounter())
