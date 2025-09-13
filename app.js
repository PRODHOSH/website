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

// Extended mathematical symbols for dynamic generation
const mathematicalSymbols = [
  'π', '∑', '∫', '√', '∞', 'α', 'β', 'θ', 'δ', 'λ', 'φ', 'ψ', '∂', '∇', 
  '≈', '≠', '≤', '≥', '±', '×', '÷', '∆', 'Ω', 'ε', 'μ', 'σ', 'τ', 'ρ', 
  'ξ', 'Γ', '∈', '∉', '⊂', '⊃', '∪', '∩', '→', '↔', '⇒', '⇔', '∀', '∃', 
  '¬', '∧', '∨', 'ℕ', 'ℤ', 'ℚ', 'ℝ', 'ℂ'
];

// Animation classes for symbols
const animationClasses = ['bounce-symbol', 'spiral-symbol', 'zigzag-symbol', 'circular-symbol', 'linear-symbol'];

// Global variables
let mouseX = 0;
let mouseY = 0;
let isMouseMoving = false;
let mouseFollower = null;
let symbolInteractionEnabled = true;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('App initializing...');
  initializeApp();
});

function initializeApp() {
  try {
    // Initialize theme with enhanced transitions
    initializeEnhancedTheme();
    
    // Initialize navigation (FIXED)
    initializeNavigation();
    
    // Initialize enhanced mathematical symbols
    initializeEnhancedSymbols();
    
    // Initialize mouse tracking
    initializeMouseTracking();
    
    // Initialize team interactions (FIXED)
    initializeTeam();
    
    // Initialize events
    initializeEvents();
    
    // Initialize forms with enhanced effects
    initializeEnhancedForms();
    
    // Initialize enhanced modals
    initializeEnhancedModals();
    
    // Initialize scroll animations
    initializeScrollAnimations();
    
    // Initialize performance optimizations
    initializePerformanceOptimizations();
    
    // Initialize accessibility features
    initializeAccessibility();
    
    console.log('App initialized successfully');
  } catch (error) {
    console.error('Error during app initialization:', error);
  }
}

// Enhanced Theme Management with Sweeping Transitions (FIXED)
function initializeEnhancedTheme() {
  console.log('Initializing enhanced theme...');
  
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.querySelector('.theme-icon');
  const themeOverlay = document.getElementById('themeOverlay');
  
  if (!themeToggle) {
    console.error('Theme toggle button not found');
    return;
  }
  
  if (!themeIcon) {
    console.error('Theme icon not found');
    return;
  }
  
  // Load saved theme or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-color-scheme', savedTheme);
  updateThemeIcon(savedTheme);
  
  // Add click event listener
  themeToggle.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    console.log('Theme toggle clicked');
    
    // Disable symbol interactions during theme change
    symbolInteractionEnabled = false;
    
    const currentTheme = document.documentElement.getAttribute('data-color-scheme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    console.log(`Switching from ${currentTheme} to ${newTheme}`);
    
    // Get click position for ripple effect
    const rect = themeToggle.getBoundingClientRect();
    const clickX = rect.left + rect.width / 2;
    const clickY = rect.top + rect.height / 2;
    
    // Create ripple effect from click position
    createThemeRipple(clickX, clickY);
    
    // Activate theme transition overlay if it exists
    if (themeOverlay) {
      themeOverlay.classList.add('active');
    }
    
    // Add sweeping animation class to body
    document.body.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    
    // Change theme after short delay for visual effect
    setTimeout(() => {
      document.documentElement.setAttribute('data-color-scheme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
      
      // Update symbol colors
      updateSymbolColors(newTheme);
    }, 200);
    
    // Remove overlay and reset transitions
    setTimeout(() => {
      if (themeOverlay) {
        themeOverlay.classList.remove('active');
      }
      document.body.style.transition = '';
      symbolInteractionEnabled = true;
    }, 1000);
  });
  
  function updateThemeIcon(theme) {
    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
      
      // Add rotation animation to icon
      themeIcon.style.transition = 'transform 0.3s ease';
      themeIcon.style.transform = 'rotate(360deg)';
      setTimeout(() => {
        themeIcon.style.transform = 'rotate(0deg)';
      }, 300);
    }
  }
  
  function createThemeRipple(x, y) {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
      position: fixed;
      top: ${y}px;
      left: ${x}px;
      width: 10px;
      height: 10px;
      background: radial-gradient(circle, var(--color-yellow) 0%, transparent 70%);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 9998;
      animation: themeRipple 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    `;
    
    document.body.appendChild(ripple);
    
    // Add ripple animation if not exists
    if (!document.getElementById('themeRippleStyle')) {
      const rippleStyle = document.createElement('style');
      rippleStyle.id = 'themeRippleStyle';
      rippleStyle.textContent = `
        @keyframes themeRipple {
          0% { 
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.8;
          }
          100% { 
            transform: translate(-50%, -50%) scale(100);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(rippleStyle);
    }
    
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 800);
  }
  
  function updateSymbolColors(theme) {
    const symbols = document.querySelectorAll('.symbol');
    symbols.forEach(symbol => {
      if (theme === 'dark') {
        symbol.style.color = 'var(--color-purple)';
      } else {
        symbol.style.color = 'var(--color-orange)';
      }
    });
  }
  
  console.log('Theme system initialized');
}

// Enhanced Mathematical Symbols System
function initializeEnhancedSymbols() {
  const symbolsContainer = document.getElementById('floatingSymbols');
  
  if (!symbolsContainer) {
    console.error('Symbols container not found');
    return;
  }
  
  // Enhanced interaction for existing symbols
  const existingSymbols = symbolsContainer.querySelectorAll('.symbol');
  existingSymbols.forEach(symbol => {
    enhanceSymbolInteractivity(symbol);
  });
  
  // Create additional dynamic symbols
  createDynamicSymbols();
  
  // Start continuous symbol generation
  startContinuousSymbolGeneration();
  
  // Add parallax effect based on scroll
  window.addEventListener('scroll', debounce(handleSymbolParallax, 16));
}

function enhanceSymbolInteractivity(symbol) {
  let originalTransform = '';
  let isHovering = false;
  
  // Enhanced hover effects
  symbol.addEventListener('mouseenter', function() {
    if (!symbolInteractionEnabled) return;
    
    isHovering = true;
    originalTransform = symbol.style.transform || '';
    
    // Pause current animation
    symbol.style.animationPlayState = 'paused';
    
    // Add glow effect
    symbol.style.filter = 'drop-shadow(0 0 20px currentColor)';
    
    // Create particle effect
    createParticleEffect(symbol);
  });
  
  symbol.addEventListener('mouseleave', function() {
    if (!symbolInteractionEnabled) return;
    
    isHovering = false;
    
    // Resume animation
    symbol.style.animationPlayState = 'running';
    
    // Remove glow
    symbol.style.filter = '';
    
    // Reset to original transform with smooth transition
    setTimeout(() => {
      if (!isHovering) {
        symbol.style.transform = originalTransform;
      }
    }, 100);
  });
  
  // Enhanced click effects
  symbol.addEventListener('click', function(e) {
    if (!symbolInteractionEnabled) return;
    
    e.preventDefault();
    
    // Add clicked class for explosion animation
    symbol.classList.add('clicked');
    
    // Create explosion effect
    createExplosionEffect(symbol, e.clientX, e.clientY);
    
    // Remove clicked class after animation
    setTimeout(() => {
      symbol.classList.remove('clicked');
    }, 600);
    
    // Generate new symbol at random location
    setTimeout(() => {
      createSingleDynamicSymbol();
    }, 300);
  });
}

function createParticleEffect(symbol) {
  const particleCount = 5;
  const rect = symbol.getBoundingClientRect();
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: fixed;
      top: ${rect.top + rect.height / 2}px;
      left: ${rect.left + rect.width / 2}px;
      width: 4px;
      height: 4px;
      background: currentColor;
      border-radius: 50%;
      pointer-events: none;
      z-index: 1000;
      opacity: 0.8;
    `;
    
    document.body.appendChild(particle);
    
    // Animate particle
    const angle = (i / particleCount) * Math.PI * 2;
    const distance = 30 + Math.random() * 20;
    const duration = 800 + Math.random() * 400;
    
    particle.animate([
      {
        transform: 'translate(-50%, -50%) scale(1)',
        opacity: 0.8
      },
      {
        transform: `translate(${Math.cos(angle) * distance - 50}%, ${Math.sin(angle) * distance - 50}%) scale(0)`,
        opacity: 0
      }
    ], {
      duration: duration,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }).onfinish = () => particle.remove();
  }
}

function createExplosionEffect(symbol, x, y) {
  const explosionCount = 8;
  
  for (let i = 0; i < explosionCount; i++) {
    const explosion = document.createElement('div');
    explosion.textContent = symbol.textContent;
    explosion.style.cssText = `
      position: fixed;
      top: ${y}px;
      left: ${x}px;
      font-size: 1.5rem;
      color: var(--color-cyan);
      pointer-events: none;
      z-index: 1001;
      opacity: 1;
    `;
    
    document.body.appendChild(explosion);
    
    // Animate explosion
    const angle = (i / explosionCount) * Math.PI * 2;
    const distance = 60 + Math.random() * 40;
    
    explosion.animate([
      {
        transform: 'translate(-50%, -50%) scale(1) rotate(0deg)',
        opacity: 1
      },
      {
        transform: `translate(${Math.cos(angle) * distance - 50}%, ${Math.sin(angle) * distance - 50}%) scale(0) rotate(360deg)`,
        opacity: 0
      }
    ], {
      duration: 1000,
      easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    }).onfinish = () => explosion.remove();
  }
}

function createDynamicSymbols() {
  const additionalSymbolsCount = 15;
  
  for (let i = 0; i < additionalSymbolsCount; i++) {
    setTimeout(() => {
      createSingleDynamicSymbol();
    }, i * 200);
  }
}

function createSingleDynamicSymbol() {
  const symbolsContainer = document.getElementById('floatingSymbols');
  if (!symbolsContainer) return;
  
  const symbol = document.createElement('span');
  const randomSymbol = mathematicalSymbols[Math.floor(Math.random() * mathematicalSymbols.length)];
  const randomAnimation = animationClasses[Math.floor(Math.random() * animationClasses.length)];
  
  symbol.className = `symbol ${randomAnimation}`;
  symbol.textContent = randomSymbol;
  symbol.setAttribute('data-symbol', randomSymbol);
  
  // Random positioning
  symbol.style.top = Math.random() * 90 + '%';
  symbol.style.left = Math.random() * 90 + '%';
  symbol.style.animationDelay = Math.random() * 5 + 's';
  symbol.style.animationDuration = (8 + Math.random() * 12) + 's';
  symbol.style.fontSize = (1.5 + Math.random() * 1.5) + 'rem';
  symbol.style.opacity = 0.3 + Math.random() * 0.3;
  
  // Random color variation
  const colors = ['var(--color-purple)', 'var(--color-yellow)', 'var(--color-green)', 'var(--color-orange)', 'var(--color-cyan)'];
  symbol.style.color = colors[Math.floor(Math.random() * colors.length)];
  
  symbolsContainer.appendChild(symbol);
  enhanceSymbolInteractivity(symbol);
  
  // Remove symbol after animation cycle
  setTimeout(() => {
    if (symbol.parentNode && symbolsContainer.children.length > 30) {
      symbol.remove();
    }
  }, 15000 + Math.random() * 10000);
}

function startContinuousSymbolGeneration() {
  setInterval(() => {
    const symbolsContainer = document.getElementById('floatingSymbols');
    if (symbolsContainer && symbolsContainer.children.length < 40) {
      createSingleDynamicSymbol();
    }
  }, 3000 + Math.random() * 2000);
}

function handleSymbolParallax() {
  const symbols = document.querySelectorAll('.symbol');
  const scrolled = window.pageYOffset;
  
  symbols.forEach((symbol, index) => {
    const speed = 0.05 + (index % 5) * 0.02;
    const yPos = scrolled * speed;
    const rotation = scrolled * 0.05;
    
    if (!symbol.style.animationPlayState || symbol.style.animationPlayState !== 'paused') {
      symbol.style.transform = `translateY(${yPos}px) rotate(${rotation}deg)`;
    }
  });
}

// Enhanced Mouse Tracking System
function initializeMouseTracking() {
  // Create mouse follower element
  mouseFollower = document.createElement('div');
  mouseFollower.className = 'mouse-follower';
  document.body.appendChild(mouseFollower);
  
  let mouseTimeout;
  
  document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    isMouseMoving = true;
    
    // Update mouse follower position
    updateMouseFollower(e.clientX, e.clientY);
    
    // Clear previous timeout
    clearTimeout(mouseTimeout);
    
    // Set timeout to detect when mouse stops moving
    mouseTimeout = setTimeout(() => {
      isMouseMoving = false;
    }, 100);
    
    // Subtle symbol attraction to mouse
    if (symbolInteractionEnabled) {
      attractSymbolsToMouse(e.clientX, e.clientY);
    }
  });
  
  // Hide mouse follower when mouse leaves window
  document.addEventListener('mouseleave', function() {
    if (mouseFollower) {
      mouseFollower.style.opacity = '0';
    }
  });
  
  document.addEventListener('mouseenter', function() {
    if (mouseFollower) {
      mouseFollower.style.opacity = '0.1';
    }
  });
}

function updateMouseFollower(x, y) {
  if (mouseFollower) {
    mouseFollower.style.left = x + 'px';
    mouseFollower.style.top = y + 'px';
    mouseFollower.style.opacity = '0.1';
  }
}

function attractSymbolsToMouse(mouseX, mouseY) {
  const symbols = document.querySelectorAll('.symbol:not(:hover)');
  
  symbols.forEach(symbol => {
    const rect = symbol.getBoundingClientRect();
    const symbolX = rect.left + rect.width / 2;
    const symbolY = rect.top + rect.height / 2;
    
    const distance = Math.sqrt(Math.pow(mouseX - symbolX, 2) + Math.pow(mouseY - symbolY, 2));
    
    // Only attract if mouse is within 200px
    if (distance < 200) {
      const force = (200 - distance) / 200;
      const deltaX = (mouseX - symbolX) * force * 0.05;
      const deltaY = (mouseY - symbolY) * force * 0.05;
      
      if (symbol.style.animationPlayState !== 'paused') {
        symbol.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        symbol.style.opacity = 0.4 + force * 0.4;
      }
    }
  });
}

// Navigation with enhanced effects (FIXED)
function initializeNavigation() {
  console.log('Initializing navigation...');
  
  const navLinks = document.querySelectorAll('.nav-link, .footer-nav a');
  const header = document.querySelector('.header');
  
  if (!header) {
    console.error('Header not found');
    return;
  }
  
  navLinks.forEach((link, index) => {
    console.log(`Setting up nav link ${index}:`, link.getAttribute('href'));
    
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      console.log(`Navigation clicked: ${targetId}`, targetElement);
      
      if (targetElement) {
        const headerHeight = header.offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;
        
        console.log(`Scrolling to position: ${targetPosition}`);
        
        // Smooth scroll with easing
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Add active class with delay
        setTimeout(() => {
          updateActiveNavigation();
        }, 500);
      }
    });
    
    // Enhanced hover effects
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px) scale(1.05)';
    });
    
    link.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
  
  // Enhanced scroll-based header changes
  window.addEventListener('scroll', debounce(() => {
    const scrolled = window.pageYOffset;
    
    if (scrolled > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    updateActiveNavigation();
  }, 10));
  
  console.log('Navigation initialized');
}

function updateActiveNavigation() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
      
      // Add pulse effect to active link
      link.style.animation = 'pulse 0.5s ease';
      setTimeout(() => {
        link.style.animation = '';
      }, 500);
    }
  });
}

// Enhanced Team Section (FIXED)
function initializeTeam() {
  console.log('Initializing team interactions...');
  
  const teamCards = document.querySelectorAll('.enhanced-team-card, .team-card');
  
  console.log(`Found ${teamCards.length} team cards`);
  
  teamCards.forEach((card, index) => {
    console.log(`Setting up team card ${index}`);
    
    let tiltTimeout;
    
    card.addEventListener('click', function() {
      const memberId = this.getAttribute('data-member-id');
      const member = teamData[memberId];
      
      console.log(`Team card clicked: ${memberId}`, member);
      
      if (member) {
        showEnhancedMemberModal(member);
      }
    });
    
    // Enhanced 3D hover effects (FIXED)
    card.addEventListener('mouseenter', function() {
      console.log('Team card hover enter');
      this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
      this.style.transform = 'scale(1.05) rotateY(10deg) rotateX(5deg)';
      this.style.zIndex = '100';
      this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
      console.log('Team card hover leave');
      this.style.transform = 'scale(1) rotateY(0deg) rotateX(0deg)';
      this.style.zIndex = '1';
      this.style.boxShadow = '';
      
      clearTimeout(tiltTimeout);
    });
    
    // Mouse tracking for subtle 3D effect
    card.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      clearTimeout(tiltTimeout);
      this.style.transform = `scale(1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  });
  
  console.log('Team interactions initialized');
}

function showEnhancedMemberModal(member) {
  const modal = document.getElementById('memberModal');
  if (!modal) {
    console.error('Member modal not found');
    return;
  }
  
  const memberName = document.getElementById('memberName');
  const memberRole = document.getElementById('memberRole');
  const memberBio = document.getElementById('memberBio');
  const memberImage = document.getElementById('memberImage');
  const memberLinkedIn = document.getElementById('memberLinkedIn');
  const memberEmail = document.getElementById('memberEmail');
  
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
  
  // Add entrance animation
  const modalContent = modal.querySelector('.modal-content');
  if (modalContent) {
    modalContent.style.animation = 'modalEntrance 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
  }
}

// Enhanced Events Section
function initializeEvents() {
  const tabButtons = document.querySelectorAll('.enhanced-tab, .tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  const registerButtons = document.querySelectorAll('.register-btn');
  
  // Enhanced tab switching
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetTab = this.getAttribute('data-tab');
      
      // Remove active class from all tabs and contents
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => {
        content.classList.remove('active');
        content.style.opacity = '0';
        content.style.transform = 'translateX(-20px)';
      });
      
      // Add active class to clicked tab
      this.classList.add('active');
      
      // Show target content with animation
      setTimeout(() => {
        const targetContent = document.getElementById(targetTab);
        if (targetContent) {
          targetContent.classList.add('active');
          targetContent.style.opacity = '1';
          targetContent.style.transform = 'translateX(0)';
          
          // Animate cards in the new tab
          const cards = targetContent.querySelectorAll('.enhanced-card, .event-card');
          cards.forEach((card, index) => {
            card.style.animation = `slideInUp 0.6s ease ${index * 0.1}s both`;
          });
        }
      }, 150);
    });
  });
  
  // Enhanced registration buttons
  registerButtons.forEach(button => {
    button.addEventListener('click', function() {
      const eventId = this.getAttribute('data-event');
      showEnhancedRegistrationModal(eventId);
      
      // Button click effect
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);
    });
  });
  
  // Add slideInUp animation if not exists
  if (!document.getElementById('slideInUpStyle')) {
    const slideInUpStyle = document.createElement('style');
    slideInUpStyle.id = 'slideInUpStyle';
    slideInUpStyle.textContent = `
      @keyframes slideInUp {
        0% { 
          opacity: 0; 
          transform: translateY(30px) scale(0.9); 
        }
        100% { 
          opacity: 1; 
          transform: translateY(0) scale(1); 
        }
      }
    `;
    document.head.appendChild(slideInUpStyle);
  }
}

function showEnhancedRegistrationModal(eventId) {
  const modal = document.getElementById('registrationModal');
  if (!modal) {
    console.error('Registration modal not found');
    return;
  }
  
  const event = eventData[eventId];
  
  if (event) {
    const modalTitle = modal.querySelector('.modal-header h3');
    if (modalTitle) {
      modalTitle.textContent = `Register for ${event.title}`;
    }
  }
  
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  
  // Enhanced entrance animation
  const modalContent = modal.querySelector('.modal-content');
  if (modalContent) {
    modalContent.style.animation = 'modalEntrance 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
  }
}

// Enhanced Forms
function initializeEnhancedForms() {
  // Contact form
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      handleEnhancedFormSubmission(this, 'Thank you for your message! We\'ll get back to you soon.');
    });
  }
  
  // Newsletter form
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      handleEnhancedFormSubmission(this, 'Thank you for subscribing to our newsletter!');
    });
  }
  
  // Registration form
  const registrationForm = document.querySelector('.registration-form');
  if (registrationForm) {
    registrationForm.addEventListener('submit', function(e) {
      e.preventDefault();
      handleEnhancedFormSubmission(this, 'Registration successful! We\'ll send you more details soon.');
      closeEnhancedModal('registrationModal');
    });
  }
  
  // Enhanced input effects
  const inputs = document.querySelectorAll('.enhanced-input, .form-control');
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      if (this.parentElement) {
        this.parentElement.classList.add('focused');
      }
      createInputRipple(this);
    });
    
    input.addEventListener('blur', function() {
      if (this.parentElement) {
        this.parentElement.classList.remove('focused');
      }
    });
  });
}

function handleEnhancedFormSubmission(form, message) {
  const submitButton = form.querySelector('button[type="submit"]');
  if (!submitButton) return;
  
  const originalText = submitButton.textContent;
  
  // Add loading animation
  submitButton.innerHTML = `
    <span style="animation: spin 1s linear infinite;">⚡</span> 
    Submitting...
  `;
  submitButton.disabled = true;
  
  // Add spin animation if not exists
  if (!document.getElementById('spinStyle')) {
    const spinStyle = document.createElement('style');
    spinStyle.id = 'spinStyle';
    spinStyle.textContent = `
      @keyframes spin {
        100% { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(spinStyle);
  }
  
  setTimeout(() => {
    showEnhancedNotification(message, 'success');
    form.reset();
    submitButton.textContent = originalText;
    submitButton.disabled = false;
    
    // Add success animation to form
    form.style.animation = 'pulse 0.5s ease';
    setTimeout(() => {
      form.style.animation = '';
    }, 500);
  }, 1500);
}

function createInputRipple(input) {
  const ripple = document.createElement('div');
  ripple.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, var(--color-purple) 0%, transparent 70%);
    opacity: 0.1;
    pointer-events: none;
    border-radius: inherit;
    animation: inputRipple 0.6s ease-out;
  `;
  
  if (input.parentElement) {
    input.parentElement.style.position = 'relative';
    input.parentElement.appendChild(ripple);
  }
  
  if (!document.getElementById('inputRippleStyle')) {
    const inputRippleStyle = document.createElement('style');
    inputRippleStyle.id = 'inputRippleStyle';
    inputRippleStyle.textContent = `
      @keyframes inputRipple {
        0% { transform: scale(0); opacity: 0.3; }
        100% { transform: scale(1); opacity: 0; }
      }
    `;
    document.head.appendChild(inputRippleStyle);
  }
  
  setTimeout(() => {
    if (ripple.parentNode) {
      ripple.parentNode.removeChild(ripple);
    }
  }, 600);
}

// Enhanced Modals
function initializeEnhancedModals() {
  const modals = document.querySelectorAll('.enhanced-modal, .modal');
  
  modals.forEach(modal => {
    const closeButton = modal.querySelector('.enhanced-close, .modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        closeEnhancedModal(modal.id);
      });
    }
    
    if (overlay) {
      overlay.addEventListener('click', () => {
        closeEnhancedModal(modal.id);
      });
    }
  });
  
  // Close modal on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const openModal = document.querySelector('.enhanced-modal:not(.hidden), .modal:not(.hidden)');
      if (openModal) {
        closeEnhancedModal(openModal.id);
      }
    }
  });
}

function closeEnhancedModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  
  const modalContent = modal.querySelector('.modal-content');
  
  if (modalContent) {
    // Add exit animation
    modalContent.style.animation = 'modalExit 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards';
    
    // Add exit animation style if not exists
    if (!document.getElementById('modalExitStyle')) {
      const exitStyle = document.createElement('style');
      exitStyle.id = 'modalExitStyle';
      exitStyle.textContent = `
        @keyframes modalExit {
          0% { 
            opacity: 1; 
            transform: scale(1) rotateY(0deg); 
          }
          100% { 
            opacity: 0; 
            transform: scale(0.8) rotateY(-90deg); 
          }
        }
        @keyframes modalEntrance {
          0% { 
            opacity: 0; 
            transform: scale(0.5) rotateY(90deg); 
          }
          100% { 
            opacity: 1; 
            transform: scale(1) rotateY(0deg); 
          }
        }
      `;
      document.head.appendChild(exitStyle);
    }
  }
  
  setTimeout(() => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    if (modalContent) {
      modalContent.style.animation = '';
    }
  }, 500);
}

// Enhanced Scroll Animations
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        
        // Add staggered animation for child elements
        const children = entry.target.querySelectorAll('.enhanced-card, .team-card, .event-card');
        children.forEach((child, index) => {
          setTimeout(() => {
            child.style.opacity = '1';
            child.style.transform = 'translateY(0) scale(1)';
          }, index * 100);
        });
      }
    });
  }, observerOptions);
  
  // Observe scroll reveal elements
  const scrollElements = document.querySelectorAll('.scroll-reveal');
  scrollElements.forEach(el => {
    observer.observe(el);
  });
  
  // Prepare child elements for staggered animation
  const childElements = document.querySelectorAll('.enhanced-card, .team-card, .event-card');
  childElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px) scale(0.95)';
    el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
  });
}

// Enhanced Notification System
function showEnhancedNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `enhanced-notification enhanced-notification--${type}`;
  
  // Create notification content
  notification.innerHTML = `
    <div class="notification-icon">${getNotificationIcon(type)}</div>
    <div class="notification-content">
      <span class="notification-message">${message}</span>
    </div>
    <button class="notification-close enhanced-close">&times;</button>
  `;
  
  // Style the notification
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--glass-border);
    border-radius: 15px;
    padding: 1.5rem;
    color: var(--text-primary);
    box-shadow: var(--glass-shadow);
    z-index: 3000;
    transform: translateX(400px);
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    max-width: 350px;
    display: flex;
    align-items: center;
    gap: 1rem;
  `;
  
  document.body.appendChild(notification);
  
  // Entrance animation
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Close button functionality
  const closeBtn = notification.querySelector('.notification-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      closeEnhancedNotification(notification);
    });
  }
  
  // Auto close after 5 seconds
  setTimeout(() => {
    closeEnhancedNotification(notification);
  }, 5000);
}

function getNotificationIcon(type) {
  const icons = {
    success: '✅',
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️'
  };
  return icons[type] || icons.info;
}

function closeEnhancedNotification(notification) {
  notification.style.transform = 'translateX(400px) scale(0.8)';
  notification.style.opacity = '0';
  
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 500);
}

// Performance Optimizations
function initializePerformanceOptimizations() {
  // Intersection observer for expensive animations
  const performanceObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      } else {
        entry.target.classList.remove('animate');
      }
    });
  });
  
  // Observe symbols for performance
  const symbols = document.querySelectorAll('.symbol');
  symbols.forEach(symbol => {
    performanceObserver.observe(symbol);
  });
  
  // Throttled scroll handler
  let ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      requestAnimationFrame(function() {
        handleScrollEffects();
        ticking = false;
      });
      ticking = true;
    }
  });
}

function handleScrollEffects() {
  const scrolled = window.pageYOffset;
  
  // Parallax for hero section
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
  
  // Symbol parallax (throttled)
  if (scrolled % 5 === 0) {
    handleSymbolParallax();
  }
}

// Accessibility Features
function initializeAccessibility() {
  // Keyboard navigation for interactive elements
  const interactiveElements = document.querySelectorAll('.symbol, .enhanced-btn, .enhanced-team-card, .team-card, .btn');
  
  interactiveElements.forEach(element => {
    element.setAttribute('tabindex', '0');
    element.setAttribute('role', 'button');
    
    element.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        element.click();
      }
    });
  });
  
  // Focus indicators
  const focusableElements = document.querySelectorAll('button, a, input, textarea, select, [tabindex]');
  focusableElements.forEach(element => {
    element.addEventListener('focus', function() {
      this.classList.add('keyboard-focus');
    });
    
    element.addEventListener('blur', function() {
      this.classList.remove('keyboard-focus');
    });
  });
  
  // Reduce motion for accessibility
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--transition-fast', '0.01s');
    document.documentElement.style.setProperty('--transition-medium', '0.01s');
    document.documentElement.style.setProperty('--transition-slow', '0.01s');
    
    // Disable symbol interactions for reduced motion
    symbolInteractionEnabled = false;
  }
}

// Utility function for debouncing
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

// Loading animation and initialization
window.addEventListener('load', function() {
  console.log('Window loaded');
  
  // Remove loading state
  document.body.classList.add('loaded');
  
  // Initialize entrance animations
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.animation = 'heroEntrance 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s both';
  }
  
  // Start symbol animations
  setTimeout(() => {
    const symbols = document.querySelectorAll('.symbol');
    symbols.forEach(symbol => {
      symbol.style.animationPlayState = 'running';
    });
  }, 1000);
});

// Error handling
window.addEventListener('error', function(e) {
  console.error('Application error:', e.error);
  showEnhancedNotification('An error occurred. Please refresh the page.', 'error');
});

// Cleanup on page unload
window.addEventListener('beforeunload', function() {
  // Clean up any running animations or intervals
  const symbols = document.querySelectorAll('.symbol');
  symbols.forEach(symbol => {
    symbol.style.animationPlayState = 'paused';
  });
});

// Add CSS for keyboard focus indicators and missing styles
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
  .keyboard-focus {
    outline: 3px solid var(--color-yellow) !important;
    outline-offset: 2px !important;
    border-radius: 4px;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
  }
  
  .loaded {
    opacity: 1 !important;
  }
  
  /* Additional enhanced card hover effects */
  .enhanced-card:hover {
    transform: translateY(-10px) scale(1.02) !important;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), 0 0 30px var(--color-purple) !important;
  }
  
  /* Enhanced team card hover effects */
  .enhanced-team-card:hover, .team-card:hover {
    transform: scale(1.05) rotateY(10deg) rotateX(5deg) !important;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5) !important;
    z-index: 100 !important;
  }
  
  /* Navigation active state */
  .nav-link.active {
    color: var(--color-yellow) !important;
    text-shadow: 0 0 10px var(--color-yellow) !important;
  }
  
  /* Symbol hover enhancement */
  .symbol:hover {
    transform: scale(1.5) rotate(15deg) !important;
    opacity: 0.9 !important;
    color: var(--color-yellow) !important;
    text-shadow: 0 0 30px var(--color-yellow), 0 0 40px var(--color-yellow) !important;
    animation-play-state: paused !important;
    filter: drop-shadow(0 0 20px var(--color-yellow)) !important;
    z-index: 100 !important;
  }
`;
document.head.appendChild(additionalStyles);

console.log('App.js loaded completely');