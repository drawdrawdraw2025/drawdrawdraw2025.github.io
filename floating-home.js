// EASIEST REUSE - 1 line to add floating 🏠 to any page
// Usage: <script src="floating-home.js"></script>  (or ./floating-home.js if in subfolder)
// Auto-injects transparent floating home button at top-left
(function(){
  if(document.querySelector('.floating-home')) return;
  var css = `.floating-home{position:fixed;top:16px;left:16px;z-index:9999;width:52px;height:52px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.72);backdrop-filter:blur(16px) saturate(180%);-webkit-backdrop-filter:blur(16px) saturate(180%);border:1px solid rgba(255,255,255,0.6);border-radius:50%;font-size:24px;text-decoration:none;box-shadow:0 8px 32px rgba(0,0,0,0.12);transition:all .35s cubic-bezier(0.34,1.56,0.64,1)} .floating-home:hover{background:rgba(255,255,255,0.9);transform:translateY(-2px) scale(1.08)}`;
  var s=document.createElement('style'); s.textContent=css; document.head.appendChild(s);
  var a=document.createElement('a'); a.className='floating-home'; a.href='home.html'; a.title='Home'; a.textContent='🏠';
  // If current page is home.html, link to index.html
  if(location.pathname.includes('home.html')) a.href='index.html';
  document.addEventListener('DOMContentLoaded', function(){ document.body.appendChild(a); });
  if(document.readyState!=='loading') document.body.appendChild(a);
})();
