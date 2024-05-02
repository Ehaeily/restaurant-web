
//for small screen 
const toggleBtn = document.querySelector('.navbar__toogleBtn');
const menu = document.querySelector('.navbar__menu');

toggleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
});

//sections h3,p opacity effect
const sections = document.querySelectorAll('section');

const options = {
  root: null,
  threshold: 0.2
};

const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });                            
  });
  
  document.querySelectorAll('#s1 h3').forEach((section) => io.observe(section));
  document.querySelectorAll('#s1 p').forEach((section) => io.observe(section));

  document.querySelectorAll('#s2 h3').forEach((section) => io.observe(section));
  document.querySelectorAll('#s2 p').forEach((section) => io.observe(section));

  document.querySelectorAll('#s3 h3').forEach((section) => io.observe(section));
  document.querySelectorAll('#s3 p').forEach((section) => io.observe(section));


//sections img slide effect
const sections2 = document.querySelectorAll('section');

const options2 = {
  root: null,
  threshold: 0.2
};

const io2 = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add('slide');
      } else {
        entry.target.classList.remove('slide');
      }
    });                            
  });
  
  document.querySelectorAll('.photo1').forEach((section) => io2.observe(section));
  document.querySelectorAll('.photo2').forEach((section) => io2.observe(section));
  document.querySelectorAll('.photo3').forEach((section) => io2.observe(section));


  b 

