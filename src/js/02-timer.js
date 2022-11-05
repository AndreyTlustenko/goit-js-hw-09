import flatpickr from "flatpickr";

const buttonStart = document.querySelector('button[data-start]')
const Days = document.querySelector('span[data-days]');
const Hours = document.querySelector('span[data-hours]');
const Minutes = document.querySelector('span[data-minutes]');
const Seconds = document.querySelector('span[data-seconds]');
buttonStart.setAttribute("disabled", true);
let countDown = null;
let deltaTime;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

onClose(selectedDates) {
        // console.log(selectedDates[0]);
    let currentDate =  Date.now();
    console.log(currentDate);

const startDate = selectedDates[0].getTime();
console.log(startDate);

if (currentDate < startDate){
  console.log("Ok");
  buttonStart.removeAttribute("disabled","disabled");
  buttonStart.addEventListener("click", onTimeStart);

  function onTimeStart() {
    intervalId = setInterval(() => {
      const currentDate = Date.now();
      const deltaTime = startDate - currentDate;
      
      const countDown = convertMs(deltaTime);
      console.log(countDown);
    }, 1000);
  }
}else {
window.alert("Please choose a date in the future");
}  
},
};

function stopTimer(deltaTime){
    if (deltaTime <= 0){
   clearInterval(intervalId);
   }
   };
//     }
//   };
// options.onClose(selectedDates);

const calendar = flatpickr('#datetime-picker', options)

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }

function addLeadingZero(value) {
    return String(value).padStart(2, '0');}

// const timer = {
//     start() {
//         const startTime = Date.now();
//         const timeStart = calendar.selectedDates[0];
//         console.log(timer) 

//     setInterval(()=>{
//     const currentTime = Date.now();
//     const deltaTime = startTime - currentTime;
//     const time = convertMs(deltaTime);
// }, 1000);
//     }
// };


// timer.start();

// start.addEventListener('click', ()=>{
//     timer.start()
// });


  // let currentDate =  Date.now();
    // console.log(currentDate);
// // console.log(selectedDates[0].getTime());
// const startDate = selectedDates[0].getTime();
// console.log(startDate);

// if (currentDate < startDate){
//   console.log("Ok");
//   buttonStart.removeAttribute("disabled","disabled");

//   buttonStart.addEventListener("click", onTimeStart);
//   function onTimeStart() {

//     intervalId = setInterval(() => {
//       const currentDate = Date.now();
//       const deltaTime = startDate - currentDate;
      
//       const countDown = convertMs(deltaTime);
//       // console.log(countDown);
//     }, 1000);
//   }
// }else {
// window.alert("Please choose a date in the future");
// }  
// },
// };

// console.log(deltaTime);
// console.log(countDown);
// function stopTimer(deltaTime){
//     if (deltaTime <= 0){
//    clearInterval(intervalId);
//    }
//    };
   
    // const timerDesign = document.querySelector(".timer");

    // timerDesign.style.color = "teal";
    // timerDesign.style.fontSize = "18px";
    // timerDesign.style.textAlign = "left";
    // // timerDesign.style.display = "flex";
    // // timerDesign.style.marginRight = "20px";
    // timerDesign.style.padding = "20px";

    // function updateTimer({ days, hours, minutes, seconds }) {
    //   const textSeconds = document.querySelector('span[data-seconds]');
    //   textSeconds.textContent = '${countDown[seconds]}' ;
    //   }



