/**
 * ================================================================
 *   PORTFOLIO SCRIPTS ─ Ibrahem Osama Hassan
 *   Features: Scroll effects, Nav highlight, Scroll Reveal, Bilingual Translation
 * ================================================================
 */

// Translation Database
const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",
    nav_talk: "Let's Talk",
    
    hero_welcome: "Welcome to my space",
    hero_title_prefix: "I'm ",
    hero_title_name: "Ibrahem Osama",
    hero_tagline: "Software Engineer | Web & Desktop Developer",
    hero_desc: "Focused on building custom responsive websites and high-performance desktop applications. Specializing in IoT systems, embedded hardware layouts (ESP32, Arduino), and embedded machine learning.",
    hero_btn_projects: "View Projects",
    hero_btn_contact: "Contact Me",
    
    about_title: "About Me",
    about_subtitle: "A brief overview of my professional profile, core focus, and academic background.",
    about_p1: "Hello! I am Ibrahem Osama Hassan, a passionate Software Engineer graduated in 2026 with a 'Very Good' grade. My technical expertise spans across both hardware and software domains, specializing in building websites and desktop applications.",
    about_p2: "I design IoT architectures, embedded hardware layouts, and embedded machine learning models. Simultaneously, I create feature-rich cross-platform desktop ERPs and responsive websites using Tauri, React, Typescript, Tailwind CSS, SQLite, and Python.",
    about_p3: "I enjoy translating complex business operations into clean, user-friendly, and offline-first software. Whether designing custom ticketing apps, financial ledgers, or print-shop databases, I focus on performance, aesthetics, and accessibility.",
    about_card_edu_title: "Education",
    about_edu_name: "Faculty of Industrial and Energy Technology",
    about_edu_univ: "New Assiut Technological University (NATU), IT Department",
    about_edu_body: "Bachelor's Degree in Information Technology, Graduated 2026. Grade: Very Good.",
    about_card_phil_title: "Core Philosophy",
    about_card_phil_body: "Connecting physical sensors and embedded IoT systems with responsive websites and desktop ERP dashboards. Committed to offline-first speed and pristine, user-centered interface designs.",
    
    skills_title: "Skills & Technologies",
    skills_subtitle: "A collection of languages, libraries, and systems I actively use to develop software.",
    skills_cat_embedded: "Embedded & IoT",
    skills_cat_desktop: "Web & Desktop",
    skills_cat_other: "Tools & Networking",
    skill_level_advanced: "Advanced",
    skill_level_intermediate: "Intermediate",
    
    projects_title: "Projects Showcase",
    projects_subtitle: "Explore actual screenshots of active ERPs, custom accounting apps, and websites built on my workstation.",
    
    project_oxygen_title: "Oxygen Business Portal",
    project_oxygen_desc: "A responsive, modern marketing website built for strategic business presentation. Showcases consultation services, client grids, and team details with micro-interactions.",
    project_gbb_title: "GBB Route Accounting",
    project_gbb_desc: "Desktop ERP app managing transportation schedules, route logs, driver-vehicle pairings, passenger tickets, and financial logs syncing to local state.",
    project_jacket_title: "Jacket Maqtoo3 ERP",
    project_jacket_desc: "Desktop suite rental ERP featuring active booking calendars, order processing, inventory control, and customer physical measurements registers with saved profiles.",
    project_jacket_v1_title: "Jacket Maqtoo3 v1",
    project_jacket_v1_desc: "Initial release build of the suit rental app management software. Houses catalog searching, customer order history tables, and sales log tracking.",
    project_printing_title: "Print-Job Billing System",
    project_printing_desc: "Financial and order administration desktop app for copy centers. Generates financial charts for sales metrics, invoices print orders, and exports logs as PDFs.",
    project_vodafone_title: "Vodafone Cash ERP",
    project_vodafone_desc: "Agent manager desktop application tracking multiple wallets, cash-in/out registers, automatic commission calculations, and cheapest wallet transfer paths.",
    project_btn_details: "View Details",
    project_link_code: "View Code",
    
    contact_title: "Get in Touch",
    contact_subtitle: "Have a project, job offer, or technical query? Let's connect and build together.",
    contact_card_heading: "Let's collaborate!",
    contact_card_text: "Click below to copy my email address or connect with me via professional social networks. I am always open to discussing new opportunities.",
    contact_lbl_email: "Email Address (Click to copy)",
    contact_lbl_github: "GitHub Account",
    contact_lbl_linkedin: "LinkedIn Profile",
    
    footer_copy: "All Rights Reserved. Built on local workspaces."
  },
  ar: {
    nav_home: "الرئيسية",
    nav_about: "من أنا",
    nav_skills: "المهارات",
    nav_projects: "المشاريع",
    nav_contact: "تواصل معي",
    nav_talk: "دعنا نتحدث",
    
    hero_welcome: "مرحباً بك في مساحتي الخاصة",
    hero_title_prefix: "أنا ",
    hero_title_name: "إبراهيم أسامة",
    hero_tagline: "مهندس برمجيات | مطور مواقع وتطبيقات سطح مكتب",
    hero_desc: "متخصص في بناء وتطوير مواقع الويب المخصصة وتطبيقات سطح المكتب عالية الأداء. أمتلك خبرة في أنظمة إنترنت الأشياء (IoT)، وتصميم الدوائر المدمجة (ESP32, Arduino)، وتعلم الآلة المدمج (Embedded ML).",
    hero_btn_projects: "عرض مشاريعي",
    hero_btn_contact: "تواصل معي",
    
    about_title: "من أنا",
    about_subtitle: "نبذة مختصرة عن مسيرتي المهنية، وتركيزي الأساسي، ومؤهلاتي الأكاديمية.",
    about_p1: "أهلاً بك! أنا إبراهيم أسامة حسن، مهندس برمجيات شغوف تخرجت عام 2026 بتقدير عام 'جيد جداً'. تمتد خبرتي التقنية لتشمل مجالي الأجهزة (Hardware) والبرمجيات (Software)، مع تركيز خاص على بناء المواقع وتطبيقات سطح المكتب.",
    about_p2: "أقوم بتصميم وتطوير بنى إنترنت الأشياء واللوحات الإلكترونية المدمجة وخوارزميات تعلم الآلة المصغرة. وفي الوقت ذاته، أقوم ببناء لوحات تحكم وتطبيقات سطح مكتب (ERP) متكاملة ومواقع ويب متجاوبة باستخدام تقنيات Tauri وReact وTypescript وTailwind CSS وSQLite وبايثون.",
    about_p3: "أستمتع بتحويل العمليات الحسابية والتجارية المعقدة إلى برمجيات نظيفة وسهلة الاستخدام وتعمل بذكاء بدون اتصال بالإنترنت (Offline-First). وسواء كان العمل تصميم تطبيق تذاكر، أو دفاتر مالية، أو قواعد بيانات مطابع، فإنني أركز دائماً على السرعة، والجمالية، وسهولة الوصول.",
    about_card_edu_title: "التعليم والشهادات",
    about_edu_name: "كلية تكنولوجيا الصناعة والطاقة",
    about_edu_univ: "جامعة أسيوط التكنولوجية الجديدة، قسم تكنولوجيا المعلومات",
    about_edu_body: "بكالوريوس تكنولوجيا المعلومات، خريج دفعة 2026. بتقدير عام: جيد جداً.",
    about_card_phil_title: "فلسفتي في العمل",
    about_card_phil_body: "ربط أجهزة الاستشعار والأنظمة المدمجة والـ IoT بمواقع ويب متجاوبة وشاشات تحكم سطح مكتب (ERP) احترافية. ملتزم بالأداء السريع وتصميم الواجهات الأنيقة التي تضع المستخدم في المقام الأول.",
    
    skills_title: "المهارات والتقنيات",
    skills_subtitle: "مجموعة من اللغات والمكتبات والأنظمة التي أستخدمها بفعالية لتطوير البرمجيات.",
    skills_cat_embedded: "الأنظمة المدمجة و IoT",
    skills_cat_desktop: "المواقع وتطبيقات سطح المكتب",
    skills_cat_other: "الأدوات والشبكات",
    skill_level_advanced: "متقدم",
    skill_level_intermediate: "متوسط",
    
    projects_title: "معرض المشاريع",
    projects_subtitle: "شاهد لقطات شاشة حقيقية وفعلية من تطبيقات الـ ERP المنجزة ومواقع الويب التي قمت بتطويرها.",
    
    project_oxygen_title: "موقع أوكسجين (Oxygen)",
    project_oxygen_desc: "موقع تعريفي وتسويقي متجاوب ومبتكر للشركات والاستشارات. يعرض الخدمات، وسجلات العملاء، وتفاصيل الفريق مع حركات تفاعلية ميكروية.",
    project_gbb_title: "برنامج حسابات خطوط النقل (GBB)",
    project_gbb_desc: "تطبيق سطح مكتب (ERP) لإدارة مسارات النقل وجداول الرحلات، وتعيين السائقين والمركبات، وتسجيل فواتير وتذاكر الركاب والمزامنة محلياً.",
    project_jacket_title: "برنامج جاكت مقطوع (Jacket Maqtoo3)",
    project_jacket_desc: "تطبيق سطح مكتب لإدارة محلات تأجير وبدلات الزفاف. يتابع الحجوزات والمخازن، ويحفظ مقاسات العملاء الجسدية التفصيلية للtailoring.",
    project_jacket_v1_title: "برنامج جاكت مقطوع v1",
    project_jacket_v1_desc: "الإصدار الأول من تطبيق تأجير السترات والبدل. يحتوي على ميزات البحث في كتالوج الملابس، وتوثيق سجلات الطلبات والمبيعات الفورية.",
    project_printing_title: "برنامج حسابات وفواتير المطابع",
    project_printing_desc: "تطبيق سطح مكتب محاسبي للمطابع ومراكز التصوير. يستعرض إحصائيات الأرباح والمبيعات بالرسوم البيانية، ويصدر الفواتير، ويطبع التقارير بصيغة PDF.",
    project_vodafone_title: "برنامج فودافون كاش للمبيعات",
    project_vodafone_desc: "تطبيق لإدارة عمليات وكلاء فودافون كاش؛ يتتبع الأرصدة والعمولات للعمليات اليومية، ويحسب أرخص مسار لتحويل المبالغ بين المحافظ.",
    project_btn_details: "عرض التفاصيل",
    project_link_code: "عرض الكود",
    
    contact_title: "تواصل معي",
    contact_subtitle: "هل لديك مشروع، عرض عمل، أو استفسار تقني؟ دعنا نتحدث ونبنِ شيئاً رائعاً معاً.",
    contact_card_heading: "لنبدأ العمل معاً!",
    contact_card_text: "اضغط أدناه لنسخ بريدي الإلكتروني أو تواصل معي مباشرة عبر حساباتي الرسمية في شبكات التواصل المهنية.",
    contact_lbl_email: "البريد الإلكتروني (اضغط للنسخ)",
    contact_lbl_github: "حساب GitHub",
    contact_lbl_linkedin: "الملف الشخصي على LinkedIn",
    
    footer_copy: "جميع الحقوق محفوظة. تم التطوير محلياً من بيئة العمل الخاصة بي."
  }
};

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Language Toggle Mechanism
  let currentLang = localStorage.getItem('portfolio_lang') || 'en';
  const langSwitcher = document.querySelector('.lang-switcher');
  const langText = document.querySelector('.lang-switcher span');

  const setLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);
    
    // Set document attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update lang switcher display text
    if (langSwitcher && langText) {
      langText.textContent = lang === 'en' ? 'العربية' : 'English';
    }

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        // Use innerHTML if element contains tags like <strong> or <span>, otherwise use textContent
        if (el.querySelector('strong') || el.querySelector('span') || el.querySelector('i')) {
          // Special case for logo or titles that have structural children
          if (key === 'logo') {
            el.innerHTML = `<i class="fa-solid fa-code"></i> ${translations[lang][key]}`;
          } else {
            el.innerHTML = translations[lang][key];
          }
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });

    // Special translation cases (like button placeholders, attribute changes, structural tags)
    const nameEl = document.querySelector('.hero-name');
    if (nameEl) {
      nameEl.textContent = translations[lang]['hero_title_name'];
    }
  };

  if (langSwitcher) {
    langSwitcher.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'ar' : 'en';
      setLanguage(nextLang);
    });
  }

  // Initialize Language on load
  setLanguage(currentLang);

  // 2. Fixed Header Background on Scroll
  const header = document.querySelector('header');
  const scrollThreshold = 50;

  const handleHeaderScroll = () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleHeaderScroll);
  handleHeaderScroll(); 

  // 3. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // 4. Active Link Highlighting on Scroll (Intersection Observer)
  const sections = document.querySelectorAll('section[id]');
  const navLinksList = document.querySelectorAll('.nav-links a:not(.btn)');

  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px', 
    threshold: 0
  };

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinksList.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  };

  const navObserver = new IntersectionObserver(observerCallback, observerOptions);
  sections.forEach(section => navObserver.observe(section));

  // 5. Scroll Reveal Animation (Intersection Observer)
  const revealElements = document.querySelectorAll('.reveal');

  const revealOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px', 
    threshold: 0.15
  };

  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); 
      }
    });
  };

  const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
  revealElements.forEach(el => revealObserver.observe(el));

  // 6. Email Copy to Clipboard Feature
  const emailButton = document.querySelector('.contact-method.email');
  if (emailButton) {
    emailButton.addEventListener('click', (e) => {
      const emailText = emailButton.querySelector('.contact-value').textContent;
      navigator.clipboard.writeText(emailText).then(() => {
        const labelEl = emailButton.querySelector('.contact-label');
        const originalLabel = currentLang === 'en' ? 'Email Address (Click to copy)' : 'البريد الإلكتروني (اضغط للنسخ)';
        const successLabel = currentLang === 'en' ? 'Copied to Clipboard!' : 'تم نسخ البريد بنجاح!';
        
        labelEl.textContent = successLabel;
        labelEl.style.color = '#10B981'; 
        
        setTimeout(() => {
          labelEl.textContent = originalLabel;
          labelEl.style.color = '';
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    });
  }
});
