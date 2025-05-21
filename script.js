
document.addEventListener('DOMContentLoaded', function() {
  
  const menuToggle = document.createElement('button');
  menuToggle.className = 'mobile-menu-toggle';
  menuToggle.innerHTML = '☰';
  document.querySelector('.cl1').prepend(menuToggle);
  
  const navButtons = document.querySelector('.cl1').querySelectorAll('button:not(.mobile-menu-toggle)');
  
  menuToggle.addEventListener('click', function() {
    navButtons.forEach(button => {
      button.style.display = button.style.display === 'none' ? 'block' : 'none';
    });
  });


  document.querySelectorAll('.b11, .b21, .b30').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.textContent.toLowerCase();
      const targetSection = document.querySelector(`.${targetId}`);
      
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  
  document.querySelectorAll('.b42, .b53, .button055, .cl26').forEach(button => {
    button.addEventListener('click', function() {
      alert("This project preview isn't available right now.\n\nPlease check back soon or contact me directly for more details about my work!");
    });
  });

  
  const contactForm = document.createElement('form');
  contactForm.className = 'contact-form';
  const contactSection = document.querySelector('.grid8');
  const inputs = contactSection.querySelectorAll('input');
  
  inputs.forEach(input => {
    contactForm.appendChild(input.cloneNode(true));
    input.parentNode.removeChild(input);
  });
  
  const submitButton = contactSection.querySelector('.cl26');
  contactForm.appendChild(submitButton.cloneNode(true));
  submitButton.parentNode.removeChild(submitButton);
  
  contactSection.querySelector('.division3').appendChild(contactForm);

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = this.querySelector('input[type="email"]');
    const messageInput = this.querySelector('input[type="text"]:last-of-type');
    
    if (!emailInput.value.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }
    
    if (messageInput.value.length < 10) {
      alert('Your message should be at least 10 characters long');
      return;
    }
    
    alert('Message sent successfully! ');
    this.reset();
  });


  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.grid2, .grid3, .grid4, .grid5, .grid6');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  
  document.querySelectorAll('.grid2, .grid3, .grid4, .grid5, .grid6').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); 
});
  