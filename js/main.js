const navLinks = document.getElementById('navLinks');
const hamburger = document.getElementById('hamburger');

function toggleMenu(){
  navLinks.classList.toggle('active');
  hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
}

hamburger.addEventListener('click', toggleMenu);

// Close menu when you click a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.textContent = '☰';
  });
});

// Close when you click outside
document.addEventListener('click', (e) => {
  if(!navLinks.contains(e.target) && !hamburger.contains(e.target)){
    navLinks.classList.remove('active');
    hamburger.textContent = '☰';
  }
});

function sendToWhatsApp(e){
  e.preventDefault();
  const myNumber = "2349156002887"; 
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();
  const info = document.getElementById('add-info').value.trim();
  const service = document.getElementById('service').value;

  if(!service){
    alert("Please select a service");
    return;
  }
  const message = `*NEW VATICAN WATER ORDER*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Address:* ${address}%0A*Order:* ${service}%0A*Extra Info:* ${info ? info : 'None'}`;
  document.getElementById('successMsg').style.display = 'block';
  document.getElementById('orderForm').reset();
  setTimeout(() => {
    const url = `https://wa.me/${myNumber}?text=${message}`;
    window.open(url, '_blank');
  }, 1000);
}