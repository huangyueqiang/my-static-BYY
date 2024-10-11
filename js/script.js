document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 处理语言切换
    const langSwitch = document.getElementById('lang-switch');
    langSwitch.addEventListener('click', (e) => {
        e.preventDefault();
        langSwitch.textContent = langSwitch.textContent === 'EN' ? '中文' : 'EN';
        // 这里可以添加切换语言的逻辑
    });
});