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
    skills_cat_embedded: "Embedded / IoT",
    skills_cat_languages: "Programming Languages",
    skills_cat_mobile: "Mobile Development",
    skills_cat_ai: "AI / Machine Learning",
    skills_cat_desktop_db: "Desktop & Database",
    skill_embedded_ml: "Embedded ML",
    skill_ai_fundamentals: "AI fundamentals",
    skill_dl_basics: "Deep Learning basics",
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
    
    contact_title: "Get in Touch",
    contact_subtitle: "Have a project, job offer, or technical query? Let's connect and build together.",
    contact_card_heading: "Let's collaborate!",
    contact_card_text: "Click below to copy my email address or connect with me via professional social networks. I am always open to discussing new opportunities.",    contact_lbl_email: "Email Address (Click to copy)",
    contact_lbl_whatsapp: "WhatsApp",
    contact_lbl_github: "GitHub Account",
    
    modal_lbl_problem: "The Problem Solved",
    modal_lbl_challenges: "Key Technical Decisions",
    modal_lbl_results: "Measurable Results",
    modal_full_page_btn: "Open Full Page Details",
    
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
    about_p2: "أقوم بتصميم وتطوير بنى إنترنت الأشياء واللوحات الإلكترونية المدمجة وخوارزميات تعلم الآلة المصغرة. وفي الوقت ذاته، أقوم ببناء لوحات تحكم وتطبيقات سطح مكتب (ERP) متكاملة وم مواقع ويب متجاوبة باستخدام تقنيات Tauri وReact وTypescript وTailwind CSS وSQLite وبايثون.",
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
    skills_cat_languages: "لغات البرمجة",
    skills_cat_mobile: "تطوير تطبيقات الهاتف",
    skills_cat_ai: "الذكاء الاصطناعي وتعلم الآلة",
    skills_cat_desktop_db: "تطبيقات سطح المكتب وقواعد البيانات",
    skill_embedded_ml: "تعلم الآلة المدمج (Embedded ML)",
    skill_ai_fundamentals: "أساسيات الذكاء الاصطناعي",
    skill_dl_basics: "أساسيات التعلم العميق",
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
    
    contact_title: "تواصل معي",
    contact_subtitle: "هل لديك مشروع، عرض عمل، أو استفسار تقني؟ دعنا نتحدث ونبنِ شيئاً رائعاً معاً.",
    contact_card_heading: "لنبدأ العمل معاً!",
    contact_card_text: "اضغط أدناه لنسخ بريدي الإلكتروني أو تواصل معي مباشرة عبر حساباتي الرسمية في شبكات التواصل المهنية.",
    contact_lbl_email: "البريد الإلكتروني (اضغط للنسخ)",
    contact_lbl_email: "Email Address (Click to copy)",
    contact_lbl_whatsapp: "WhatsApp",
    contact_lbl_github: "GitHub Account",
    
    video_title: "Live Portfolio & Systems Showcase",
    video_subtitle: "Watch a video preview of custom ERP solutions, accounting software, and desktop applications developed for business clients.",
    video_badge: "Ibrahem Osama Hassan - Systems & ERP Demo Reel",
    video_info_text: "A compilation preview demonstrating custom desktop ERP applications, real-time data management, financial ledgers, and high-performance software architecture.",
    
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
    skills_cat_languages: "لغات البرمجة",
    skills_cat_mobile: "تطوير تطبيقات الهاتف",
    skills_cat_ai: "الذكاء الاصطناعي وتعلم الآلة",
    skills_cat_desktop_db: "تطبيقات سطح المكتب وقواعد البيانات",
    skill_embedded_ml: "تعلم الآلة المدمج (Embedded ML)",
    skill_ai_fundamentals: "أساسيات الذكاء الاصطناعي",
    skill_dl_basics: "أساسيات التعلم العميق",
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
    
    contact_title: "تواصل معي",
    contact_subtitle: "هل لديك مشروع، عرض عمل، أو استفسار تقني؟ دعنا نتحدث ونبنِ شيئاً رائعاً معاً.",
    contact_card_heading: "لنبدأ العمل معاً!",
    contact_card_text: "اضغط أدناه لنسخ بريدي الإلكتروني أو تواصل معي مباشرة عبر حساباتي الرسمية في شبكات التواصل المهنية.",
    contact_label_email: "البريد الإلكتروني (اضغط للنسخ)",
    contact_lbl_whatsapp: "رقم الواتساب",
    contact_lbl_github: "حساب GitHub",
    
    video_title: "عرض مرئي تطبيقي لأعمالي",
    video_subtitle: "استعرض مقطعاً توضيحياً شاملاً لنماذج حية من تطبيقات سطح المكتب وأنظمة الـ ERP وحسابات الشركات التي قمت بتطويرها.",
    video_badge: "إبراهيم أسامة حسن - استعرض فيديو أعمالي وأنظمتي البرمجية",
    video_info_text: "عرض توضيحي يستعرض أداء وتصميم واجهات تطبيقات سطح المكتب، وإدارة الحسابات، وقواعد البيانات المحلية، ومزامنة العمليات المالية بسرعة وحرفية.",
    
    footer_copy: "جميع الحقوق محفوظة. تم التطوير محلياً من بيئة العمل الخاصة بي."
  }
};

// Comprehensive Projects Dataset for In-Page Modal & Dynamic Details
const globalProjectsMap = {
  oxygen: {
    en: {
      title: "Oxygen Business Portal",
      client: "Oxygen Consulting Group",
      description: "A fully responsive, modern web interface created for corporate and strategic consulting agency presentations. It features neat service lists, team profiles, responsive sliders, and counter animations.",
      problem: "The client needed a lightweight, hyper-fast marketing portal that could convey complex consulting services cleanly without heavy framework overhead.",
      challenges: "Optimizing initial load speeds while retaining micro-interactions, responsive carousel sliders, and scroll animation counters.",
      results: "Achieved 98+ Google Lighthouse Performance Score and 0.4s initial load time on 4G networks.",
      features: [
        "Responsive layout utilizing Bootstrap 5 grid system",
        "Custom client slider carousel powered by Swiper JS",
        "Animated counter stats using PureCounter",
        "Smooth section transitions and scroll animations",
        "Clean SEO-optimized HTML5 & OpenGraph structure"
      ]
    },
    ar: {
      title: "موقع أوكسجين للشركات",
      client: "مجموعة أوكسجين للاستشارات والإدارة",
      description: "موقع ويب تعريفي وتسويقي متكامل ومتجاوب بالكامل مصمم لتقديم خدمات الاستشارات وتفصيل أعمال الشركات. يتميز بواجهة مستخدم حديثة وتمرير سلس وقوائم مخصصة للخدمات وإحصائيات تفاعلية متحركة.",
      problem: "احتاج العميل إلى بوابة تسويقية سريعة جداً وخفيفة لتوضيح الخدمات الاستشارية المعقدة دون الاعتماد على مكتبات ثقيلة تؤثر على السرعة.",
      challenges: "تحقيق أعلى أداء سرعة تحميل مع الحفاظ على التفاعلية البصرية الدقيقة والعدادات الرقمية المتحركة.",
      results: "تحقيق تقييم 98+ على موجه أداء Google Lighthouse وزمن تحميل أولي يقل عن 0.4 ثانية.",
      features: [
        "تصميم متجاوب بالكامل باستخدام شبكة Bootstrap 5",
        "شريط متحرك لعرض شعارات العملاء والشركاء مع Swiper JS",
        "عدادات رقمية إحصائية متحركة عند التمرير",
        "انتقالات وحركات ناعمة وسلسة بين أقسام الموقع",
        "بنية برمجية نظيفة ومهيأة لمحركات البحث (SEO)"
      ]
    },
    tech: ["HTML5", "CSS3", "Bootstrap 5", "Vanilla JS", "Swiper JS", "AOS"],
    images: [
      "assets/images/oxygen_preview.png",
      "assets/images/oxygen_detail_1.webp",
      "assets/images/oxygen_detail_2.webp",
      "assets/images/oxygen_detail_3.webp"
    ]
  },
  gbb: {
    en: {
      title: "GBB Route Accounting ERP",
      client: "GBB Route Transportation Company",
      description: "A custom desktop ERP application developed for managing transportation businesses. It tracks rental schedules, registers routes, sets seasons, and syncs vehicle/driver logs.",
      problem: "Paper-based ticket logs led to frequent double-seat bookings, lost revenue entries, and delayed end-of-day driver balance reconciliations.",
      challenges: "Designing an offline-first sync mechanism that maintains database integrity on local desktop machines without requiring cloud connections.",
      results: "Reduced daily ticket settlement time from 2 hours to under 5 minutes with 100% offline operational availability.",
      features: [
        "Interactive route scheduling and logs table",
        "Driver and vehicle pairing dashboard",
        "Digital ticket sales booking panel",
        "Synchronization panel with local state management",
        "Role-based administrative settings (Admin/Cashier)"
      ]
    },
    ar: {
      title: "نظام حسابات النقل GBB ERP",
      client: "شركة GBB لإدارة وتشغيل خطوط النقل الجماعي",
      description: "تطبيق سطح مكتب متكامل (ERP) مصمم خصيصاً لإدارة عمليات وخطوط شركات النقل. يقوم بجدولة الرحلات وحفظ سجلات خطوط السير والمواسم وتعيين السائقين ومزامنة المبيعات اليومية بشكل فوري.",
      problem: "تسبب التسجيل الورقي السابق في تكرار حجز المقاعد وضياع السجلات الحسابية وتأخير تسوية إيرادات السائقين في نهاية اليوم.",
      challenges: "بناء بنية مزامنة محلية تضمن سلامة الحسابات والبيانات على أجهزة الكمبيوتر دون الحاجة للاتصال بالإنترنت.",
      results: "تقليل زمن التسوية الحسابية اليومية من ساعتين إلى أقل من 5 دقائق مع ضمان تشغيل 100% دون انقطاع.",
      features: [
        "جداول تفاعلية لتنظيم رحلات وخطوط السير والعمل اليومي",
        "لوحة تحكم لربط السائقين بالمركبات ومتابعة التوفر",
        "نظام حجز وإصدار التذاكر الرقمية للعملاء والاشتراكات",
        "شاشة مزامنة مركزية لحفظ البيانات وحمايتها من الضياع",
        "لوحة تحكم للمسؤولين لإدارة المستخدمين والصلاحيات (أدمن/كاشير)"
      ]
    },
    tech: ["React 19", "Vite", "Tauri", "LocalStorage", "CSS Modules", "Tailwind CSS"],
    images: [
      "assets/images/gbb_accounting_preview.png",
      "assets/images/gbb_routes.png",
      "assets/images/gbb_tickets.png",
      "assets/images/frend travel 1.png",
      "assets/images/frend travel 2.png",
      "assets/images/frend travel 3.png",
      "assets/images/frend travel 4.png",
      "assets/images/frend travel 5.png",
      "assets/images/frend travel 6.png",
      "assets/images/frend travel 7.png"
    ]
  },
  jacket: {
    en: {
      title: "Jacket Maqtoo3 (Suit Rental ERP)",
      client: "Jacket Maqtoo3 Suit Hire Shop",
      description: "An enterprise desktop solution tailored for suit hire, sales, and tailor shops. It automates inventory control, manages customer measurement databases, and logs rental bookings.",
      problem: "Suit hire shops suffered from overlapping rental dates and mismanaged physical tailoring measurements (chest, shoulders, sleeves).",
      challenges: "Building a calendar availability checker with automated conflict alerts and binding SQLite natively with Rust Tauri IPC.",
      results: "Completely eliminated double-booking conflicts and cut customer measurement entry time by 75%.",
      features: [
        "Saved measurements profiles database (chest, shoulders, sleeves)",
        "Rentals calendar scheduler and inventory availability indicator",
        "Billing invoices creator and payment receipts",
        "Offline-first performance powered by embedded SQLite",
        "Crash recovery alert handling mechanisms"
      ]
    },
    ar: {
      title: "برنامج جاكت مقطوع للبدلات",
      client: "معرض 'جاكت مقطوع' لتأجير وتفصيل البدلات الرجالية",
      description: "تطبيق سطح مكتب محاسبي وإداري مخصص لمحلات تأجير البدلات وتفصيل وبيع الملابس الرجالية. يقوم بأتمتة المخازن، وتسجيل المقاسات الجسدية التفصيلية للزبائن، وتتبع الحجوزات اليومية.",
      problem: "واجه المعرض مشكلات في تضارب مواعيد تأجير البدلات وضياع مقاسات الزبائن وتفاصيل الخياطة الجسدية.",
      challenges: "تطوير نظام تنبيه تفاعلي لمنع التضارب وربط قاعدة بيانات SQLite مع نظام Tauri ببيئة Rust الحرة.",
      results: "القضاء التام على أخطاء التضارب وتقليل وقت إدخال المقاسات بنسبة 75%.",
      features: [
        "قاعدة بيانات متكاملة لمقاسات العملاء (الكتف، الصدر، الأكمام، الخصر)",
        "مخطط حجوزات تفاعلي لمتابعة توفر البدلات والملابس وتواريخ تسليمها",
        "منشئ فواتير وسندات الدفع للمشتركين",
        "يعمل بذكاء وبسرعة دون اتصال بالإنترنت بالاعتماد على SQLite",
        "نظام حماية واستعادة البيانات عند حدوث أعطال مفاجئة"
      ]
    },
    tech: ["React", "TypeScript", "Tauri", "SQLite", "Tailwind CSS", "Vite"],
    images: [
      "assets/images/jacket_maqtoo3_preview.png",
      "assets/images/jacket_inventory.png",
      "assets/images/jacket_customers.png",
      "assets/images/جاكيت مقطوع.png",
      "assets/images/جاكيت مقطوع 1.png",
      "assets/images/جاكيت مقطوع2.png",
      "assets/images/جاكيت مقطوع3.png",
      "assets/images/جاكيت مقطوع4.png",
      "assets/images/جاكيت مقطوع5.png"
    ]
  },
  "jacket-v1": {
    en: {
      title: "Jacket Maqtoo3 v1",
      client: "Jacket Maqtoo3 (Early Release)",
      description: "The initial release version of the Jacket Maqtoo3 ERP application. Implements basic customer logs, search lists, and localized catalog management.",
      problem: "Early prototype test to evaluate desktop bundle size and local disk I/O performance on older workstations.",
      challenges: "Minimizing native build dependencies while retaining fast search filtering across thousands of customer records.",
      results: "Query response times consistently under 10ms with zero network latency.",
      features: [
        "Fast search inputs for customer measurement logs",
        "Suit catalog tracking lists",
        "Basic sales log tables",
        "Lightweight package footprint"
      ]
    },
    ar: {
      title: "برنامج جاكت مقطوع (الإصدار 1.0)",
      client: "معرض 'جاكت مقطوع' (الإصدار الأول)",
      description: "الإصدار الأول وتطبيق الأساس لبرنامج إدارة تأجير البدلات والملابس. يضم جداول بحث سريعة في بيانات المشتركين، وسجلات المبيعات اليومية البسيطة.",
      problem: "اختبار نسبي للتحقق من أداء قراءة وكتابة قواعد البيانات المحلية على أجهزة نقاط البيع القديمة.",
      challenges: "تقليل حجم التطبيق مع الحفاظ على سرعة الاستعلام الفوري في آلاف السجلات.",
      results: "زمن استجابة للبحث يقل عن 10 ملي ثانية دون أي استهلاك للشبكة.",
      features: [
        "شاشات بحث سريعة لفرز وتصنيف مقاسات العملاء المشتركين",
        "كتالوج مبسط لإدخال وتصنيف قطع الملابس المتوفرة",
        "جداول لحفظ مبيعات وإيرادات اليوم بشكل مباشر",
        "تطبيق خفيف الوزن وسهل التثبيت والتشغيل"
      ]
    },
    tech: ["React", "Vite", "TypeScript", "Tauri", "SQLite"],
    images: [
      "assets/images/jacket_maqtoo3_v1_preview.png",
      "assets/images/جاكيت مقطوع v1 1.png",
      "assets/images/جاكيت مقطوع v1 2.png",
      "assets/images/جاكيت مقطوع v1 3.png",
      "assets/images/جاكيت مقطوع v1 4.png",
      "assets/images/جاكيت مقطوع v1 5.png",
      "assets/images/جاكيت مقطوع v1 6.png",
      "assets/images/جاكيت مقطوع v1 7.png"
    ]
  },
  printing: {
    en: {
      title: "Printing Accounting ERP",
      client: "NATU Students Copy & Printing Center",
      description: "A modern desktop billing application built for copy and printing centers. Manages customers, print jobs, paper types, and tracks daily business expenses.",
      problem: "Complex print job pricing calculations (paper sizes, GSM weight, binding, color vs monochrome) caused long cashier queues during peak hours.",
      challenges: "Designing an instant order calculator combined with automated PDF report exports via jsPDF.",
      results: "Reduced cashier billing time to under 10 seconds per order and streamlined daily tax auditing.",
      features: [
        "Financial tracking charts for revenue/expenses analysis",
        "Digital order billing invoice generator",
        "PDF exporter powered by jsPDF",
        "Custom print-job options (black & white vs color, paper size)",
        "User password locks for administrative settings"
      ]
    },
    ar: {
      title: "برنامج حسابات المطابع ومراكز التصوير",
      client: "مركز الخدمات الطلابية والنسخ بجامعة أسيوط التكنولوجية",
      description: "تطبيق سطح مكتب محاسبي متكامل تم تطويره لخدمة المطابع الكبرى ومراكز التصوير والخدمات الطلابية. يدير حسابات الزبائن، والطلبيات، ومصروفات المحل، وإحصائيات الإنتاج اليومي.",
      problem: "عانت المطابع من بطء حساب تكلفة الطباعة والتجليد وأنواع الأوراق المختلفة مما أدى لتراكم صفوف الانتظار.",
      challenges: "بناء حاسبة تكاليف فورية وتكامل ميزة التصدير لملفات PDF بنقرة واحدة عبر jsPDF.",
      results: "تقليل زمن إصدار الفاتورة إلى أقل من 10 ثوانٍ للطلب وتسهيل المراجعة المالية اليومية.",
      features: [
        "رسوم بيانية تفاعلية لحساب الأرباح والتبادل المالي اليومي والشهري",
        "منشئ فواتير إلكترونية رقمية للطلبات والطباعة",
        "ميزة تصدير الفواتير وحفظ التقارير كملفات PDF عبر jsPDF",
        "إدارة خيارات الطباعة المخصصة (ألوان/أسود، مقاس الورق، نوع التجليد)",
        "نظام صلاحيات محمي بكلمة مرور لإعدادات المسؤولين والتقارير الحساسة"
      ]
    },
    tech: ["React", "TypeScript", "Tauri v2", "Tailwind CSS v4", "Recharts", "SQL Plugin", "jsPDF"],
    images: [
      "assets/images/printing_accounting_preview.png",
      "assets/images/ms للدعاية.png",
      "assets/images/ms للدعاية1.png",
      "assets/images/ms للدعاية2.png",
      "assets/images/ms للدعاية3.png",
      "assets/images/ms للدعاية4.png",
      "assets/images/ms للدعاية5.png",
      "assets/images/ms للدعاية6.png",
      "assets/images/ms للدعاية7.png"
    ]
  },
  vodafone: {
    en: {
      title: "Vodafone Cash ERP",
      client: "Telecom Cash & Wallet Outlets",
      description: "A specialized administrative application designed for Vodafone Cash agents. It simplifies managing multiple SIM cards/wallets, deposit logs, and commission rules.",
      problem: "Multi-wallet telecom agents lost significant revenue to uncalculated network transfer fees and complex fee tier structures.",
      challenges: "Engineered a fee matrix optimization algorithm that instantly evaluates the cheapest transfer route across mobile cash networks.",
      results: "Boosted merchant net profit margins by 12-18% through automated fee-saving route suggestions.",
      features: [
        "Wallets balance manager (tracks Vodafone, Etisalat, Orange)",
        "Cheapest transfer finder (calculates cheapest route for money transfers)",
        "Deposit/withdrawal commission calculator based on rule slices",
        "Daily settlements log",
        "Debts ledger with paid/unpaid status indicators"
      ]
    },
    ar: {
      title: "برنامج مبيعات فودافون كاش والمحافظ",
      client: "وكلاء ومنافذ شحن الخدمات المالية ومحفظة فودافون كاش",
      description: "تطبيق مخصص لوكلاء ومنافذ مبيعات فودافون كاش والخدمات المالية المماثلة. يسهل إدارة شرائح الاتصال المتعددة، وتتبع المحافظ، وتسجيل المعاملات والعمولات.",
      problem: "خسارة التجار للعمولات بسبب تعقد شرائح الرسوم واختيار مسارات تحويل غير اقتصادية بين الشرائح المختلفة.",
      challenges: "تصميم خوارزمية 'أرخص تحويل' لحساب الخيارات الأكثر ربحية فورياً عبر مصفوفات عمولات الشبكات.",
      results: "زيادة هامش صافي أرباح الوكيل بنسبة 12-18% بفضل التوجيه الذكي المعفي من الرسوم الزائدة.",
      features: [
        "إدارة حسابات المحافظ (فودافون كاش، اتصالات كاش، أورنج كاش)",
        "ميزة 'أرخص تحويل' لحساب التكلفة والعمولات واختيار أفضل طريقة للإرسال",
        "حاسبة عمولات تلقائية بناءً على شرائح المبالغ والنسب المحددة لكل شبكة",
        "تسوية وإغلاق الحساب اليومي ومقارنة الرصيد الفعلي بالرصيد الدفتري",
        "دفتر ديون إلكتروني مع مؤشرات ملونة لحالة السداد والتأخير"
      ]
    },
    tech: ["React", "TypeScript", "Tauri v2", "Lucide Icons", "CSS Modules"],
    images: [
      "assets/images/vodafone_cash_preview.png",
      "assets/images/vodafone_cheapest.png",
      "assets/images/vodafone_debts.png",
      "assets/images/vodafone_wallets.png",
      "assets/images/مستقبل كاش.png",
      "assets/images/مستقبل كاش1.png",
      "assets/images/مستقبل كاش2.png",
      "assets/images/مستقبل كاش3.png",
      "assets/images/مستقبل كاش4.png",
      "assets/images/مستقبل كاش5.png"
    ]
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
    
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    if (langSwitcher && langText) {
      langText.textContent = lang === 'en' ? 'العربية' : 'English';
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        if (el.querySelector('strong') || el.querySelector('span') || el.querySelector('i')) {
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

    navItems.forEach(item => {
      item.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // 4. Active Link Highlighting on Scroll
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

  // 5. Scroll Reveal Animation
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
    emailButton.addEventListener('click', () => {
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
