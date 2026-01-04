 // Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
        
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.querySelector('i').classList.toggle('fa-bars');
            menuToggle.querySelector('i').classList.toggle('fa-times');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
                
                // Update active nav link
                document.querySelectorAll('.nav-links a').forEach(item => {
                    item.classList.remove('active');
                });
                link.classList.add('active');
            });
        });
        
        // Animate skill bars when scrolling to skills section
        const skillBars = document.querySelectorAll('.skill-progress');
        
        function animateSkillBars() {
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width + '%';
            });
        }
        
        // Check if skills section is in viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
            );
        }
        
        // Scroll event listener to trigger skill bar animation
        window.addEventListener('scroll', () => {
            const skillsSection = document.getElementById('skills');
            if (isInViewport(skillsSection)) {
                animateSkillBars();
            }
        });
        
        // Form submission
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message, Prince will get back to you soon!');
            contactForm.reset();
        });
        
        // Update active nav link on scroll
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-links a');
            
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 100)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        });
        
        // Initialize skill bars with 0 width
        window.onload = () => {
            skillBars.forEach(bar => {
                bar.style.width = '0';
            });
        };