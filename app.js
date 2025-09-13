// Team member data
const teamData = {
  1: {
    name: "Arjun Sharma",
    role: "President",
    bio: "Final year Computer Science student passionate about algebraic geometry and competitive programming.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/arjunsharma",
    email: "arjun@vitchennai.ac.in"
  },
  2: {
    name: "Priya Patel",
    role: "Vice President",
    bio: "Mathematics and Computing major with expertise in number theory and cryptography.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5c2?w=300&h=300&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/priyapatel",
    email: "priya@vitchennai.ac.in"
  },
  3: {
    name: "Rahul Kumar",
    role: "Secretary",
    bio: "Third year student specializing in applied mathematics and statistical modeling.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/rahulkumar",
    email: "rahul@vitchennai.ac.in"
  },
  4: {
    name: "Sneha Reddy",
    role: "Technical Lead",
    bio: "Expert in computational mathematics and machine learning applications.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/snehareddy",
    email: "sneha@vitchennai.ac.in"
  },
  5: {
    name: "Karthik Iyer",
    role: "Event Coordinator",
    bio: "Second year student passionate about discrete mathematics and graph theory.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/karthikiyer",
    email: "karthik@vitchennai.ac.in"
  },
  6: {
    name: "Ananya Singh",
    role: "Workshop Head",
    bio: "Mathematics enthusiast with focus on pure mathematics and topology.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/ananyasingh",
    email: "ananya@vitchennai.ac.in"
  }
};

// Event data
const eventData = {
  1: {
    title: "Mathematical Modeling Workshop",
    date: "September 20, 2025",
    time: "2:00 PM - 5:00 PM"
  },
  2: {
    title: "Pi Day Celebration",
    date: "March 14, 2025",
    time: "10:00 AM - 4:00 PM"
  }
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing app...');
  initializeApp();
});

function initializeApp() {
  try {
    // Initialize theme
    initializeTheme();
    
    // Initialize navigation
    initializeNavigation();
    
    // Initialize team interactions
    initializeTeam();
    
    // Initialize events
    initializeEvents();
    
    // Initialize forms
    initializeForms();
    
    // Initialize modals
    initializeModals();
    
    // Initialize animations
    initializeAnimations();
    
    // Initialize logo interactions
    initializeLogoInteractions();
    
    console.log('App initialized successfully');
  } catch (error) {
    console.error('Error initializing app:', error);
  }
}

// Logo interactions
function initializeLogoInteractions() {
  const headerLogo = document.querySelector('.logo');
  const heroLogo = document.querySelector('.logo-circle');
  
  // Header logo click - smooth scroll to top
  if (headerLogo) {
    headerLogo.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    headerLogo.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    });
  }
  
  // Hero logo hover effects
  if (heroLogo) {
    heroLogo.addEventListener('mouseenter', function() {
      this.style.animationPlayState = 'paused';
    });
    
    heroLogo.addEventListener('mouseleave', function() {
      this.style.animationPlayState = 'running';
    });
  }
  
  // Handle logo image load errors
  const logoImages = document.querySelectorAll('.logo-image, .hero-logo-image');
  logoImages.forEach(img => {
    img.addEventListener('error', function() {
      console.log('Logo image failed to load, using fallback');
    });
    
    img.addEventListener('load', function() {
      console.log('Logo image loaded successfully');
    });
  });
}

// Theme Management - FIXED
function initializeTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle?.querySelector('.theme-icon');
  
  if (!themeToggle || !themeIcon) {
    console.error('Theme toggle elements not found');
    return;
  }
  
  // Load saved theme or default to dark
  const savedTheme = localStorage.getItem('mathclub-theme') || 'dark';
  document.documentElement.setAttribute('data-color-scheme', savedTheme);
  updateThemeIcon(savedTheme);
  
  console.log('Theme initialized:', savedTheme);
  
  themeToggle.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const currentTheme = document.documentElement.getAttribute('data-color-scheme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    console.log('Switching theme from', currentTheme, 'to', newTheme);
    
    document.documentElement.setAttribute('data-color-scheme', newTheme);
    localStorage.setItem('mathclub-theme', newTheme);
    updateThemeIcon(newTheme);
    
    // Add transition effect
    document.body.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      document.body.style.transition = '';
    }, 300);
  });
  
  function updateThemeIcon(theme) {
    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }
}

// Navigation - FIXED
function initializeNavigation() {
  const navLinks = document.querySelectorAll('.nav-link, .footer-nav a');
  
  console.log('Found navigation links:', navLinks.length);
  
  navLinks.forEach((link, index) => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      console.log('Navigation clicked:', targetId, 'Element found:', !!targetElement);
      
      if (targetElement) {
        const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Active navigation highlighting
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = 'home';
    const scrollPosition = window.pageYOffset + 150;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// Team Section - FIXED
function initializeTeam() {
  const teamCards = document.querySelectorAll('.team-card[data-member-id]');
  
  console.log('Found team cards:', teamCards.length);
  
  teamCards.forEach((card, index) => {
    // Click handler
    card.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const memberId = this.getAttribute('data-member-id');
      const member = teamData[memberId];
      
      console.log('Team card clicked:', memberId, 'Member found:', !!member);
      
      if (member) {
        showMemberModal(member);
      }
    });
    
    // Keyboard handler
    card.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const memberId = this.getAttribute('data-member-id');
        const member = teamData[memberId];
        
        if (member) {
          showMemberModal(member);
        }
      }
    });
    
    // Hover effects
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05) rotateY(5deg)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1) rotateY(0deg)';
    });
  });
}

function showMemberModal(member) {
  const modal = document.getElementById('memberModal');
  const memberName = document.getElementById('memberName');
  const memberRole = document.getElementById('memberRole');
  const memberBio = document.getElementById('memberBio');
  const memberImage = document.getElementById('memberImage');
  const memberLinkedIn = document.getElementById('memberLinkedIn');
  const memberEmail = document.getElementById('memberEmail');
  
  if (!modal) {
    console.error('Member modal not found');
    return;
  }
  
  console.log('Showing member modal for:', member.name);
  
  if (memberName) memberName.textContent = member.name;
  if (memberRole) memberRole.textContent = member.role;
  if (memberBio) memberBio.textContent = member.bio;
  if (memberImage) {
    memberImage.src = member.image;
    memberImage.alt = member.name;
  }
  if (memberLinkedIn) memberLinkedIn.href = member.linkedin;
  if (memberEmail) memberEmail.href = `mailto:${member.email}`;
  
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

// Events Section - FIXED
function initializeEvents() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  const registerButtons = document.querySelectorAll('.register-btn[data-event]');
  
  console.log('Found event elements - tabs:', tabButtons.length, 'register buttons:', registerButtons.length);
  
  // Tab switching
  tabButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const targetTab = this.getAttribute('data-tab');
      
      console.log('Tab clicked:', targetTab);
      
      // Remove active class from all tabs and contents
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked tab and corresponding content
      this.classList.add('active');
      const targetContent = document.getElementById(targetTab);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
  
  // Registration buttons
  registerButtons.forEach((button, index) => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const eventId = this.getAttribute('data-event');
      console.log('Register button clicked for event:', eventId);
      
      showRegistrationModal(eventId);
    });
  });
}

function showRegistrationModal(eventId) {
  const modal = document.getElementById('registrationModal');
  const event = eventData[eventId];
  
  if (!modal) {
    console.error('Registration modal not found');
    return;
  }
  
  console.log('Showing registration modal for event:', eventId);
  
  if (event) {
    const modalTitle = modal.querySelector('.modal-header h3');
    if (modalTitle) {
      modalTitle.textContent = `Register for ${event.title}`;
    }
  }
  
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

// Forms
function initializeForms() {
  // Contact form
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      handleFormSubmission(this, 'Thank you for your message! We\'ll get back to you soon.');
    });
  }
  
  // Newsletter form
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      handleFormSubmission(this, 'Thank you for subscribing to our newsletter!');
    });
  }
  
  // Registration form
  const registrationForm = document.querySelector('.registration-form');
  if (registrationForm) {
    registrationForm.addEventListener('submit', function(e) {
      e.preventDefault();
      handleFormSubmission(this, 'Registration successful! We\'ll send you more details soon.');
      setTimeout(() => {
        closeModal('registrationModal');
      }, 2000);
    });
  }
}

function handleFormSubmission(form, message) {
  // Simulate form submission
  const submitButton = form.querySelector('button[type="submit"]');
  if (!submitButton) return;
  
  const originalText = submitButton.textContent;
  
  submitButton.textContent = 'Submitting...';
  submitButton.disabled = true;
  
  setTimeout(() => {
    showNotification(message, 'success');
    form.reset();
    submitButton.textContent = originalText;
    submitButton.disabled = false;
  }, 1500);
}

// Modals - FIXED
function initializeModals() {
  const modals = document.querySelectorAll('.modal');
  
  console.log('Found modals:', modals.length);
  
  modals.forEach((modal, index) => {
    const closeButton = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    if (closeButton) {
      closeButton.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Modal close button clicked:', modal.id);
        closeModal(modal.id);
      });
    }
    
    if (overlay) {
      overlay.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Modal overlay clicked:', modal.id);
        closeModal(modal.id);
      });
    }
  });
  
  // Close modal on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const openModal = document.querySelector('.modal:not(.hidden)');
      if (openModal) {
        console.log('Escape pressed, closing modal:', openModal.id);
        closeModal(openModal.id);
      }
    }
  });
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    console.log('Closing modal:', modalId);
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// Animations
function initializeAnimations() {
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe elements for animations
  const animatedElements = document.querySelectorAll('.glass-card, .section-title');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
  
  // Parallax effect for hero section
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-symbols .symbol');
    
    parallaxElements.forEach((element, index) => {
      const speed = 0.1 + (index * 0.05);
      element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
  });
  
  // Dynamic mathematical symbols
  createDynamicSymbols();
}

function createDynamicSymbols() {
  const symbols = ['∂', 'φ', 'ψ', 'ω', 'λ', 'μ', 'σ', 'τ', '∇', '∆'];
  const container = document.querySelector('.floating-symbols');
  
  if (!container) return;
  
  setInterval(() => {
    if (container.children.length < 12) {
      const symbol = document.createElement('span');
      symbol.className = 'symbol';
      symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      symbol.style.top = Math.random() * 100 + '%';
      symbol.style.left = Math.random() * 100 + '%';
      symbol.style.animationDelay = Math.random() * 3 + 's';
      symbol.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
      
      container.appendChild(symbol);
      
      // Remove symbol after animation
      setTimeout(() => {
        if (symbol.parentNode) {
          symbol.parentNode.removeChild(symbol);
        }
      }, 8000);
    }
  }, 3000);
}

// Notification system
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span class="notification-message">${message}</span>
      <button class="notification-close">&times;</button>
    </div>
  `;
  
  // Add notification styles
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--glass-border);
    border-radius: 12px;
    padding: 1rem 1.5rem;
    color: var(--text-primary);
    box-shadow: var(--glass-shadow);
    z-index: 3000;
    transform: translateX(400px);
    transition: transform 0.3s ease;
    max-width: 300px;
  `;
  
  document.body.appendChild(notification);
  
  // Slide in animation
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Close button functionality
  const closeBtn = notification.querySelector('.notification-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      closeNotification(notification);
    });
  }
  
  // Auto close after 5 seconds
  setTimeout(() => {
    closeNotification(notification);
  }, 5000);
}

function closeNotification(notification) {
  notification.style.transform = 'translateX(400px)';
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 300);
}

// 3D hover effects for cards
document.addEventListener('mousemove', function(e) {
  const cards = document.querySelectorAll('.glass-card');
  
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    } else {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }
  });
});

// Reset card transforms when mouse leaves
document.addEventListener('mouseleave', function() {
  const cards = document.querySelectorAll('.glass-card');
  cards.forEach(card => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  });
});

// Performance optimization
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(function() {
  // Scroll-based animations and effects
  const scrolled = window.pageYOffset;
  const header = document.querySelector('.header');
  
  if (header) {
    if (scrolled > 100) {
      header.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
      header.style.background = 'rgba(10, 10, 10, 0.8)';
    }
  }
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Loading animation
window.addEventListener('load', function() {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});

// Error handling
window.addEventListener('error', function(e) {
  console.error('Application error:', e.error);
});

// Prevent default on logo clicks to avoid navigation issues
document.addEventListener('click', function(e) {
  if (e.target.closest('.logo')) {
    e.preventDefault();
  }
});

console.log('JavaScript loaded successfully');
