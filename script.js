        // Mobile menu toggle
        const menuBtn = document.getElementById('menuBtn');
        const mainNav = document.getElementById('mainNav');
        
        menuBtn.addEventListener('click', () => {
           mainNav.classList.toggle('active');
           menuBtn.innerHTML = mainNav.classList.contains('active') ?
              '<i class="fas fa-times"></i>' :
              '<i class="fas fa-bars"></i>';
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('#mainNav a').forEach(link => {
           link.addEventListener('click', () => {
              mainNav.classList.remove('active');
              menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
           });
        });