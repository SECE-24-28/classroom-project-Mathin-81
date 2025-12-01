document.addEventListener('DOMContentLoaded',()=>{
  const nav=document.querySelectorAll('.navbar a');
  nav.forEach(a=>{
    if(location.pathname.endsWith(a.getAttribute('href'))|| (location.pathname.endsWith('/') && a.getAttribute('href')==='index.html')){
      a.classList.add('active');
    }
  });

  const yearEls=[document.getElementById('year'),document.getElementById('year2'),document.getElementById('year3'),document.getElementById('year4'),document.getElementById('year5')];
  yearEls.forEach(el=>{if(el) el.textContent=new Date().getFullYear()});

  const circles=document.querySelectorAll('.circle');
  circles.forEach(c=>{
    const val=Number(c.getAttribute('data-value')||0);
    const progress=c.querySelector('.progress');
    const radius=16;
    const circumference=2*Math.PI*radius;
    const offset=circumference - (val/100)*circumference;
    if(progress){
      progress.style.strokeDasharray=`${circumference} ${circumference}`;
      progress.style.strokeDashoffset=String(circumference);
      setTimeout(()=>{progress.style.transition='stroke-dashoffset 1.2s ease';progress.style.strokeDashoffset=offset},250);
    }
  });

  const forms=document.querySelectorAll('form');
  forms.forEach(f=>{
    f.addEventListener('submit',e=>{
      e.preventDefault();
      alert('Form submitted (demo). Replace with your backend or email handler.');
      f.reset();
    })
  })
});
