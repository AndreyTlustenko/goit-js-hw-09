
const refForm = document.querySelector("form");
const refInputs = document.querySelectorAll("input");
const delayRef = refInputs[0];
const stepRef =  refInputs[1];
const amountRef = refInputs[2];
const btnSubmit= document.querySelector("button");
// btnSubmit.addEventListener('click', createPromise);

// let getEl = selector => document.querySelector(selector);
// getEl('.form')

// const Promise = new Promise((resolve, reject) => { 
 function createPromise(position, delay) {
       setTimeout(() => {
        const shouldResolve = Math.random() > 0.3;
    
    if (shouldResolve) {   return new Promise (resolve, reject)
      // Promise.resolve({ position, delay});
  } return
      // Promise.reject({ position, delay});
}, delay);
};

refForm.addEventListener("input", () => {
  const delay = parseInt(delayRef.value);
  const step = parseInt(stepRef.value);
  const amount = parseInt(amountRef.value);

 refForm.addEventListener("submit", (event) =>{
   event.preventDefault();
   console.log(delay, step, amount)
  for (let i = 0; i <= amount-1; i+=1) {
   createPromise(i, delay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  }); 
  delay += step
    };
 })
}); 



