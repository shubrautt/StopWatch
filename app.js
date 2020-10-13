const watch = document.querySelector('#watch');
let milliseconds = 0;
let timer;

const startWatch = () => {
  watch.classList.remove('paused');
  clearInterval(timer);
  timer = setInterval(()=>{ 
    milliseconds += 10;
    let dateTimer = new Date(milliseconds);
    watch.innerHTML = 
      ('0'+dateTimer.getUTCHours()).slice(-2) + ':' +
      ('0'+dateTimer.getUTCMinutes()).slice(-2) + ':' +
      ('0'+dateTimer.getUTCSeconds()).slice(-2) + ':' +
      ('0'+dateTimer.getUTCMilliseconds()).slice(-3,-1);
  },10);
};

const pauseWatch = () => {
  watch.classList.add('paused');
  clearInterval(timer);
};

const resetWatch = () => {
  watch.classList.remove('paused');
  clearInterval(timer);
  milliseconds = 0;
  watch.innerHTML= '00:00:00:00';
};

document.addEventListener('click', (e) =>{
  const element = e.target;
  if (element.id === 'start') startWatch();
  if (element.id === 'pause') pauseWatch();
  if (element.id === 'reset') resetWatch();
});