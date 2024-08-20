document.getElementById('mostraAside').addEventListener('click', function() {
    const aside = document.getElementById('myAside');
    
    if (aside.style.display === 'none') {
      aside.style.display = 'block';
    } else {
      aside.style.display = 'none';
    }
  });
  