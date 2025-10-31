// Slider and interactions
document.addEventListener('DOMContentLoaded', function(){
  const slides = document.querySelectorAll('.slide');
  let idx = 0;
  function show(n){ slides.forEach(s=>s.classList.remove('active')); slides[n].classList.add('active'); }
  show(0);
  setInterval(()=>{ idx = (idx+1)%slides.length; show(idx); }, 4500);

  // Lightbox
  const lightbox = document.getElementById('lightbox');
  document.body.addEventListener('click', function(e){
    const img = e.target.closest('.item img, .gallery img');
    if(img){
      const src = img.src || img.getAttribute('src');
      lightbox.innerHTML = '<img src="'+src+'">';
      lightbox.style.display = 'flex';
      lightbox.setAttribute('aria-hidden','false');
      return;
    }
    if(e.target === lightbox) { lightbox.style.display = 'none'; lightbox.setAttribute('aria-hidden','true'); }
  });

  // Filters
  const filters = document.querySelectorAll('.filter');
  const items = document.querySelectorAll('#portfolioGrid .item');
  filters.forEach(f=>{
    f.addEventListener('click', ()=>{
      filters.forEach(x=>x.classList.remove('active'));
      f.classList.add('active');
      const cat = f.dataset.filter;
      items.forEach(it=> it.style.display = (cat==='all' || it.dataset.cat===cat) ? 'block' : 'none');
    });
  });

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  if(navToggle) navToggle.addEventListener('click', ()=> nav.style.display = (nav.style.display==='block') ? 'none' : 'block');
});
