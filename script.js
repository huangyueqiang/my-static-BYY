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

    // 语言翻译对象
    const translations = {
        'en': {
            // 导航
            'home': 'Home',
            'about': 'About Us',
            'products': 'Products',
            'culture': 'Company Culture',
            'contact': 'Contact Us',

            // 首页
            'welcome': 'Welcome to BY-Motorcycle LED',
            'slogan': 'Illuminating Your World with Quality and Innovation',
            'our-features': 'Our Features',
            'innovation': 'Innovation Driven',
            'quality': 'Quality First',
            'service': 'Premium Service',

            // 关于我们
            'about-title': 'About BY-Motorcycle LED',
            'about-slogan': 'Illuminating Your World with Quality and Innovation',
            'company-intro': 'Company Introduction',
            'company-history': 'Development History',
            'company-details': 'Company Details',
            'company-name': 'Company Name: Binyi Trading Co., Ltd.',
            'company-address': 'Address: No. 180, 3rd Floor, Jinshan Clothing City Market, Committee, Xiguanju, Caizichi Street Office, Leiyang City, Hunan Province',
            'company-phone': 'Phone: +86 13660883159',
            'company-qq': 'QQ: 2867244486',
            'our-vision': 'Our Vision',

            // 产品页面
            'our-products': 'Our Products',
            'all-products': 'All Products',
            'category1': 'Category 1',
            'category2': 'Category 2',
            'category3': 'Category 3',
            'product1': 'Product 1',
            'product2': 'Product 2',
            'product3': 'Product 3',
            'description': 'Description of',
            'learn-more': 'Learn More',

            // 产品详情
            'product-description': 'Product Description',
            'key-features': 'Key Features',
            'feature1': 'Feature 1',
            'feature2': 'Feature 2',
            'feature3': 'Feature 3',
            'feature4': 'Feature 4',
            'request-quote': 'Request a Quote',

            // 页脚
            'copyright': '© 2023 BY-Motorcycle LED. All rights reserved.',

            // 新增翻译项
            'company-intro-p1': 'Binyi Trading Co., Ltd., also known as BY-Motorcycle LED, is a specialized manufacturer of LED lighting solutions for motorcycles. Located in the vibrant city of Hengyang, Hunan Province, we have established ourselves as a leader in the motorcycle LED industry.',
            'company-intro-p2': 'Our commitment to quality is unwavering. Each product undergoes rigorous control and testing before being delivered to our valued customers. This dedication ensures that every BY-Motorcycle LED product meets the highest standards of performance and reliability.',
            'company-intro-p3': 'At BY-Motorcycle LED, our mission is simple yet profound: May Binyi LED illuminate your world. We strive to bring brightness, safety, and style to motorcycle enthusiasts around the globe.',
            'search-placeholder': 'Search products...',
        },
        'zh': {
            // 导航
            'home': '首页',
            'about': '关于我们',
            'products': '产品',
            'culture': '企业文化',
            'contact': '联系我们',

            // 首页
            'welcome': '欢迎来到彬益摩托车LED',
            'slogan': '以质量和创新照亮您的世界',
            'our-features': '我们的特色',
            'innovation': '创新驱动',
            'quality': '品质至上',
            'service': '优质服务',

            // 关于我们
            'about-title': '关于彬益摩托车LED',
            'about-slogan': '以质量和创新照亮您的世界',
            'company-intro': '公司简介',
            'company-history': '发展历程',
            'company-details': '公司详情',
            'company-name': '公司名称：彬益贸易有限公司',
            'company-address': '地址：湖南省耒阳市蔡子池街道办事处西关居委会金山服装城市场3楼180号',
            'company-phone': '电话：+86 13660883159',
            'company-qq': 'QQ：2867244486',
            'our-vision': '我们的愿景',

            // 产品页面
            'our-products': '我们的产品',
            'all-products': '所有产品',
            'category1': '类别1',
            'category2': '类别2',
            'category3': '类别3',
            'product1': '产品1',
            'product2': '产品2',
            'product3': '产品3',
            'description': '描述',
            'learn-more': '了解更多',

            // 产品详情
            'product-description': '产品描述',
            'key-features': '主要特点',
            'feature1': '特点1',
            'feature2': '特点2',
            'feature3': '特点3',
            'feature4': '特点4',
            'request-quote': '请求报价',

            // 页脚
            'copyright': '© 2023 彬益摩托车LED。保留所有权利。',

            // 新增翻译项
            'company-intro': '公司简介',
            'company-intro-p1': '彬益贸易有限公司，又称BY-Motorcycle LED，是一家专业生产摩托车LED照明解决方案的制造商。我们位于湖南省衡阳市这个充满活力的城市，已经确立了自己在摩托车LED行业的领导地位。',
            'company-intro-p2': '我们对质量的承诺坚定不移。每一件产品在交付给我们尊贵的客户之前都要经过严格的控制和测试。这种dedication确保每一个BY-Motorcycle LED产品都能达到最高的性能和可靠性标准。',
            'company-intro-p3': '在BY-Motorcycle LED，我们的使命简单而深刻：愿彬益LED照亮您的世界。我们致力于为全球摩托车爱好者带来亮度、安全和风格。',
            'search-placeholder': '搜索产品...',
        }
    };

    let currentLang = localStorage.getItem('language') || 'en';

    // 更新语言函数
    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        document.documentElement.lang = lang;
        localStorage.setItem('language', lang);

        // 更新搜索框占位符
        const searchInput = document.getElementById('product-search');
        if (searchInput) {
            searchInput.placeholder = translations[lang]['search-placeholder'];
        }
    }

    // 处理语言切换
    const langSwitch = document.getElementById('lang-switch');
    langSwitch.textContent = currentLang === 'en' ? '中文' : 'EN';
    langSwitch.addEventListener('click', (e) => {
        e.preventDefault();
        currentLang = currentLang === 'en' ? 'zh' : 'en';
        langSwitch.textContent = currentLang === 'en' ? '中文' : 'EN';
        updateLanguage(currentLang);
    });

    // 初始化语言
    updateLanguage(currentLang);

    // 产品类别筛选和搜索功能
    const categoryLinks = document.querySelectorAll('.product-categories .category');
    const products = document.querySelectorAll('.product');
    const searchInput = document.getElementById('product-search');
    const searchButton = document.getElementById('search-button');

    function filterProducts(category, searchTerm = '') {
        products.forEach(product => {
            const productCategory = product.getAttribute('data-category');
            const productName = product.querySelector('h3').textContent.toLowerCase();
            const shouldShowByCategory = category === 'all' || productCategory === category;
            const shouldShowBySearch = productName.includes(searchTerm.toLowerCase());
            
            if (shouldShowByCategory && shouldShowBySearch) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }

    if (categoryLinks.length > 0 && products.length > 0) {
        categoryLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const category = link.getAttribute('data-category');
                categoryLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                filterProducts(category, searchInput.value);
            });
        });
    }

    if (searchInput && searchButton) {
        searchButton.addEventListener('click', () => filterProducts('all', searchInput.value));
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                filterProducts('all', searchInput.value);
            }
        });
    }

    // Swiper 初始化代码（如果在当前页面）
    if (document.querySelector('.swiper-container')) {
        new Swiper('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 5000,
            },
        });
    }

    // 处理浮动菜单和模态框
    const menuItems = document.querySelectorAll('.menu-item');
    const modals = document.querySelectorAll('.modal');
    const closeBtns = document.querySelectorAll('.close');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const modalId = item.getAttribute('data-modal');
            if (modalId) {
                document.getElementById(`${modalId}-modal`).style.display = 'block';
            }
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    });

    // 处理回到顶部功能
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // 显示/隐藏回到顶部按钮
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                backToTop.style.display = 'flex';
            } else {
                backToTop.style.display = 'none';
            }
        });
    }
});