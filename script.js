// ===== PARTICLE ANIMATION =====
function createParticles() {
    const particles = document.getElementById('particles');
    if (!particles) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = '#ff6b35';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.opacity = Math.random() * 0.5;
        particle.style.animation = `float ${Math.random() * 3 + 2}s ease-in-out infinite`;
        particles.appendChild(particle);
    }
}

// ===== COUNTER ANIMATION =====
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCounter();
                observer.disconnect();
            }
        });
        
        observer.observe(counter);
    });
}

// ===== SKILL BARS ANIMATION =====
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    
    skillBars.forEach(bar => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                const progress = bar.getAttribute('data-progress');
                bar.style.width = progress + '%';
                observer.disconnect();
            }
        });
        
        observer.observe(bar);
    });
}

// ===== CIRCULAR PROGRESS ANIMATION =====
function animateCircularProgress() {
    const circles = document.querySelectorAll('.circular-progress');
    
    circles.forEach(circle => {
        const progressCircle = circle.querySelector('.progress-circle');
        const progress = parseInt(circle.getAttribute('data-progress'));
        const circumference = 2 * Math.PI * 60;
        const offset = circumference - (progress / 100) * circumference;
        
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                progressCircle.style.strokeDashoffset = offset;
                observer.disconnect();
            }
        });
        
        observer.observe(circle);
    });
}

// ===== PROJECT FILTER =====
function initProjectFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            projectItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ===== PROJECT MODAL =====
const projectData = {
    1: {
        title: 'E-Commerce Platform',
        description: 'A full-featured e-commerce platform with modern design and seamless user experience. Built with React and Node.js, featuring real-time inventory management, secure payment processing, and responsive design.',
        image: 'https://via.placeholder.com/600x400',
        client: 'Tech Solutions Inc.',
        date: 'November 2023',
        technologies: 'React, Node.js, MongoDB, Stripe'
    },
    2: {
        title: 'Task Management App',
        description: 'An intuitive task management application for teams, featuring real-time collaboration, drag-and-drop functionality, and comprehensive project tracking capabilities.',
        image: 'https://via.placeholder.com/600x400',
        client: 'Productivity Pro',
        date: 'September 2023',
        technologies: 'Vue.js, Firebase, Tailwind CSS'
    },
    3: {
        title: 'Portfolio Redesign',
        description: 'A creative portfolio concept showcasing modern UI/UX design principles with interactive elements and smooth animations.',
        image: 'https://via.placeholder.com/600x400',
        client: 'Creative Agency',
        date: 'August 2023',
        technologies: 'Figma, Adobe XD, Illustrator'
    },
    4: {
        title: 'Restaurant Website',
        description: 'An elegant restaurant website featuring online reservations, menu showcase, and integrated ordering system.',
        image: 'https://via.placeholder.com/600x400',
        client: 'Gourmet Bistro',
        date: 'July 2023',
        technologies: 'HTML5, CSS3, JavaScript'
    },
    5: {
        title: 'Weather Dashboard',
        description: 'A comprehensive weather tracking application with real-time data, forecasts, and beautiful visualizations.',
        image: 'https://via.placeholder.com/600x400',
        client: 'Weather Tech',
        date: 'June 2023',
        technologies: 'JavaScript, OpenWeather API, Chart.js'
    },
    6: {
        title: 'Mobile App Design',
        description: 'A social media concept design focusing on user engagement and intuitive navigation.',
        image: 'https://via.placeholder.com/600x400',
        client: 'Social Connect',
        date: 'May 2023',
        technologies: 'Sketch, Principle, InVision'
    }
};

function openProjectModal(projectId) {
    const project = projectData[projectId];
    const modal = new bootstrap.Modal(document.getElementById('projectModal'));
    
    document.getElementById('modalImage').src = project.image;
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalClient').textContent = project.client;
    document.getElementById('modalDate').textContent = project.date;
    document.getElementById('modalTech').textContent = project.technologies;
    
    modal.show();
}

// ===== CERTIFICATE MODAL =====
const certificateData = {
    1: {
        title: 'Web Development Certification',
        details: 'Advanced Full Stack Development - Comprehensive course covering modern web technologies',
        issuer: 'Tech Academy International',
        date: 'December 2023',
        id: 'WDC-2023-12345'
        
    },
    2: {
        title: 'JavaScript Specialist',
        details: 'Modern ES6+ and Frameworks - Expert level JavaScript certification',
        issuer: 'JavaScript Institute',
        date: 'November 2023',
        id: 'JSS-2023-67890'
    },
    3: {
        title: 'React Developer',
        details: 'Professional React Certification - Advanced React and Redux concepts',
        issuer: 'React Academy',
        date: 'October 2022',
        id: 'RDC-2022-11223'
    },
    4: {
        title: 'UI/UX Design',
        details: 'User Experience Design Principles - Complete UI/UX design methodology',
        issuer: 'Design Institute',
        date: 'September 2022',
        id: 'UXD-2022-44556'
    },
    5: {
        title: 'Cloud Computing',
        details: 'AWS Certified Solutions Architect - Cloud infrastructure and services',
        issuer: 'Amazon Web Services',
        date: 'August 2021',
        id: 'AWS-2021-77889'
    },
    6: {
        title: 'Responsive Web Design',
        details: 'Mobile-First Development - Advanced responsive design techniques',
        issuer: 'Web Design Academy',
        date: 'July 2021',
        id: 'RWD-2021-99001'
    }
};

function openCertificate(certId) {
    const cert = certificateData[certId];
    const modal = document.getElementById('certificateModal');
    
    document.getElementById('certTitle').textContent = cert.title;
    document.getElementById('certDetails').textContent = cert.details;
    document.getElementById('certIssuer').textContent = cert.issuer;
    document.getElementById('certDate').textContent = cert.date;
    document.getElementById('certId').textContent = cert.id;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCertificate() {
    const modal = document.getElementById('certificateModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ===== CONTACT FORM =====
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formMessage = document.getElementById('formMessage');
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simulate form submission
        formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
        formMessage.className = 'form-message success';
        
        // Reset form
        form.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    });
}

// ===== NAVBAR SCROLL EFFECT =====
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(26, 26, 26, 0.98)';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(26, 26, 26, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const elements = document.querySelectorAll('.project-item, .certificate-item, .timeline-item, .stat-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// ===== ADD GRADIENT DEFINITION FOR SVG =====
function addSVGGradient() {
    const svgs = document.querySelectorAll('.circular-progress svg');
    svgs.forEach(svg => {
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        gradient.setAttribute('id', 'gradient');
        gradient.innerHTML = `
            <stop offset="0%" stop-color="#ff6b35"/>
            <stop offset="100%" stop-color="#f7931e"/>
        `;
        defs.appendChild(gradient);
        svg.insertBefore(defs, svg.firstChild);
    });
}

// ===== INITIALIZE ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    animateCounters();
    animateSkillBars();
    animateCircularProgress();
    initProjectFilter();
    initContactForm();
    initNavbarScroll();
    initSmoothScroll();
    initScrollAnimations();
    addSVGGradient();
    
    // Close certificate modal when clicking outside
    const certModal = document.getElementById('certificateModal');
    if (certModal) {
        certModal.addEventListener('click', function(e) {
            if (e.target === this || e.target.classList.contains('certificate-modal-overlay')) {
                closeCertificate();
            }
        });
    }
});

// ===== LOADING ANIMATION =====
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});