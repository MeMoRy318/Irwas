import addZero from './addZero';

const timer = (deadline) => {
  const getTime = () => {
    const time = (Date.parse(deadline) - new Date()) / 1000;
    const seconds = addZero(Math.floor(time % 60));
    const minutes = addZero(Math.floor((time / 60) % 60));
    const hours = addZero(Math.floor((time / 60 / 60) % 24));
    const days = addZero(Math.floor(time / 60 / 60 / 24));

    return {
      time,
      seconds,
      minutes,
      hours,
      days
    };
  };

  const setClock = (endtime) => {
    const daysElement = document.querySelector('#days');
    const hoursElement = document.querySelector('#hours');
    const minutesElement = document.querySelector('#minutes');
    const secondsElement = document.querySelector('#seconds');

    daysElement.innerText = endtime.days;
    hoursElement.innerText = endtime.hours;
    minutesElement.innerText = endtime.minutes;
    secondsElement.innerText = endtime.seconds;
  };

  const updateClock = () => {
    const currentTime = new Date().getTime();
    const timeDiff = Date.parse(deadline) - currentTime;

    if (timeDiff <= 0) {
      clearInterval(timerInterval);
      setClock({ time:'00', seconds:'00', minutes:'00', hours:'00', days:'00' });
    } else {
      setClock(getTime());
    }
  };

  const timerInterval = setInterval(updateClock, 1000);
  updateClock();
};

export default timer;
