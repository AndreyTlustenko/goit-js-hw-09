
const refForm = document.querySelector("form");
const refInputs = document.querySelectorAll("input");
const delayRef = inputsRef[0];
const stepRef = inputsRef[1];
const amountRef = inputsRef[2];
const btnSubmit= document.querySelector("button");
// btnSubmit.addEventListener('click', createPromise);

function createPromise(position, delay) {
  setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      // return new Promise (resolve, reject)
    if (shouldResolve) {
      return Promise.resolve({ position, delay});
  } 
    return Promise.reject({ position, delay});
}, delay);
};


refForm.addEventListener("input", () =>{
  const delay = parseInt(delayRef.value);
  const step = parseInt(stepRef.value);
  const amount = parseInt(amountRef.value);

 refForm.addEventListener("submit", (event) =>{
   event.preventDefault();
  for (let i = 1; i <= amount-1; i+=1) {
   createPromise(i, delay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  }); 
  delay += step
    };
 });
}); 



