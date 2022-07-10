
var 
progress = document.getElementById('progress') ,
prevBtn = document.querySelector('.prev') ,
nextBtn = document.querySelector('.next'),
number = document.querySelectorAll('.numbers'),
count = 1;



nextBtn.addEventListener('click', function() {
  count++;
  
  if(count > number.length) {
    count = number.length   
  }
  numUpdate();
})

prevBtn.addEventListener('click', function() {
  count--;
  
  if(count < 1) {
    count = 1   
  }
  numUpdate();
})

function numUpdate() {
  number.forEach(progressBar);
  function progressBar(element, index) 
  {
    if(index < count) {
      element.classList.add('active')
    } else {
      element.classList.remove('active')
    }
   }
   
  var actives = document.querySelectorAll('.active'); 
   // progress-bar width styling
  progress.style.width = (actives.length -1) / (number.length - 1) * 100 + '%';

  if(count === 1) {
    prevBtn.classList.add('disabled');
  } else if(count === number.length) {
    nextBtn.classList.add('disabled');
  } else {
    prevBtn.disabled = false;
    nextBtn.classList.remove('disabled');
    prevBtn.classList.remove('disabled');
  }
}


