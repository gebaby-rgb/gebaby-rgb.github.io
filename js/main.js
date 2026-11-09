/* ==============================================================
   Portfolio — Ibrahem Osama Hassan, Software Engineer
   i18n (EN / AR), project rendering, filters, motion
   ============================================================== */

const translations = {
  en: {
    nav_home: "Home", nav_about: "About", nav_services: "Services", nav_skills: "Skills", nav_projects: "Projects", nav_contact: "Contact", nav_talk: "Let's Talk",
    hero_status: "Available for full-time roles & freelance projects",
    hero_hi: "Hi, I'm", hero_name: "Ibrahem Osama",
    hero_role_prefix: "Software Engineer building",
    hero_desc: "I design and ship <strong>production software end-to-end</strong> — full-stack web platforms, cloud backends and offline-first desktop systems — with TypeScript, React, Rust, SQL and serverless infrastructure. 16 projects delivered for real businesses, schools and agencies.",
    hero_btn_projects: "View Projects", hero_btn_cv: "Resume / CV", hero_cv_download: "Download CV (PDF)",
    hero_find: "Find me on", hero_badge_t: "B.Sc. IT · 2026", hero_badge_s: "Very Good grade",
    stat_projects: "Projects shipped to real clients", stat_desktop: "Desktop ERP & POS systems", stat_web: "Web & cloud platforms", stat_langs: "Languages in every product (AR / EN)",
    about_eyebrow: "About me",
    about_title: "An engineer who owns the <em>whole product</em>",
    about_lead: "I'm a Software Engineer from Egypt who turns messy, real-world business operations into fast, reliable software that people actually use every day.",
    about_p1: "I work across the full stack: <strong>React and TypeScript</strong> interfaces, <strong>Rust</strong> and <strong>Node/serverless</strong> backends, and <strong>SQL databases</strong> — PostgreSQL with Row-Level Security on Supabase, SQLite in desktop apps and Cloudflare D1 at the edge.",
    about_p2: "I take projects from the first conversation with the client to requirements, data modelling, implementation, testing and deployment — then keep improving them after launch. My work runs shops, academies, agencies and schools: POS and ERP systems, exam platforms, CRMs and marketing websites.",
    pr1_t: "Clean architecture", pr1_d: "Typed layers, clear data models, testable logic.",
    pr2_t: "Offline-first", pr2_d: "Software that keeps working without the internet.",
    pr3_t: "Secure by default", pr3_d: "RBAC, RLS policies and server-side rules.",
    pr4_t: "Arabic & English", pr4_d: "Proper RTL / LTR, not an afterthought.",
    exp_title: "Experience",
    exp1_date: "Present", exp1_t: "Freelance Software Engineer", exp1_d: "Building ERP/POS desktop apps, SaaS-style web platforms and websites for clients in Egypt and Saudi Arabia.",
    exp2_t: "B.Sc. in Information Technology", exp2_d: "New Assiut Technological University — Faculty of Industrial & Energy Technology. Grade: Very Good.",
    exp3_date: "University", exp3_t: "Academic engineering projects", exp3_d: "Applied ML and embedded/IoT projects (ESP32, Flutter + Firebase) as part of the degree.",
    loc_title: "Based in", loc_name: "Assiut, Egypt", loc_body: "Open to remote work, relocation and freelance contracts.",
    svc_eyebrow: "What I build", svc_title: "Software that solves <em>real operations</em>", svc_subtitle: "Four kinds of products I design, build and deliver end-to-end.",
    svc1_t: "Desktop ERP & POS", svc1_d: "Native, offline-first business systems: sales, inventory, installments, shifts, payroll and reports in one installer.",
    svc2_t: "Full-Stack Web Platforms", svc2_d: "Multi-role SaaS-style platforms with auth, permissions, dashboards, realtime updates and audit logs.",
    svc3_t: "Interactive Websites", svc3_d: "Fast, bilingual, SEO-ready websites with scroll storytelling, 3D scenes and conversion-focused UX.",
    svc4_t: "Backend & Data", svc4_d: "Data modelling, SQL schemas and migrations, REST APIs, server-side business rules and backups.",
    skills_eyebrow: "Toolbox", skills_title: "Skills & <em>technologies</em>", skills_subtitle: "The languages, frameworks and tools I use to ship production software.",
    sk_lang: "Languages", sk_front: "Frontend", sk_back: "Backend & Cloud", sk_db: "Databases", sk_desk: "Desktop & Mobile", sk_tools: "Engineering practice",
    skills_legend: "Highlighted = used in production daily",
    projects_eyebrow: "Selected work", projects_title: "Projects I've <em>shipped</em>",
    projects_subtitle: "Real systems built for real clients. Open any project for screenshots, the problem, technical decisions and results.",
    filter_all: "All", filter_web: "Web & Cloud", filter_desktop: "Desktop",
    badge_web: "Web & Cloud", badge_desktop: "Desktop", badge_new: "New", case_study: "View case study",
    video_eyebrow: "Demo reel", video_title: "See the systems <em>in action</em>",
    video_subtitle: "A short walkthrough of desktop ERP and accounting software built for business clients.",
    video_badge: "Systems & ERP demo reel", video_info_text: "Desktop ERP applications, real-time data management and financial ledgers.",
    contact_eyebrow: "Contact", contact_title: "Have a role or a project? <em>Let's talk.</em>",
    contact_text: "I'm open to Software Engineer positions (remote or on-site) and freelance projects. I usually reply within a day.",
    contact_btn: "Send an email", contact_lbl_email: "Email (click to copy)", contact_lbl_whatsapp: "WhatsApp", contact_lbl_github: "GitHub",
    copied: "Email copied to clipboard",
    footer_name: "Ibrahem Osama Hassan", footer_copy: "Software Engineer. Designed & built by me.",
    roles: ["desktop ERP systems.", "full-stack web platforms.", "cloud backends with SQL.", "interactive websites."]
  },
  ar: {
    nav_home: "الرئيسية", nav_about: "عني", nav_services: "خدماتي", nav_skills: "المهارات", nav_projects: "المشاريع", nav_contact: "تواصل", nav_talk: "تواصل معي",
    hero_status: "متاح لوظائف بدوام كامل ومشاريع حرة",
    hero_hi: "مرحباً، أنا", hero_name: "إبراهيم أسامة",
    hero_role_prefix: "مهندس برمجيات أبني",
    hero_desc: "أصمم وأطلق <strong>برمجيات إنتاجية من البداية للنهاية</strong> — منصات ويب متكاملة، وأنظمة سحابية، وتطبيقات سطح مكتب تعمل بدون إنترنت — باستخدام TypeScript و React و Rust و SQL والبنية السحابية. سلّمت 16 مشروعاً لشركات ومدارس ووكالات حقيقية.",
    hero_btn_projects: "شاهد المشاريع", hero_btn_cv: "السيرة الذاتية", hero_cv_download: "تحميل السيرة الذاتية (PDF)",
    hero_find: "تابعني على", hero_badge_t: "بكالوريوس IT · 2026", hero_badge_s: "بتقدير جيد جداً",
    stat_projects: "مشروعاً تم تسليمها لعملاء حقيقيين", stat_desktop: "أنظمة ERP ونقاط بيع مكتبية", stat_web: "منصات ويب وسحابية", stat_langs: "لغتان في كل منتج (عربي / إنجليزي)",
    about_eyebrow: "نبذة عني",
    about_title: "مهندس يتحمل مسؤولية <em>المنتج بالكامل</em>",
    about_lead: "أنا مهندس برمجيات من مصر، أحوّل عمليات الأعمال الحقيقية المعقدة إلى برمجيات سريعة وموثوقة يستخدمها الناس يومياً.",
    about_p1: "أعمل على كامل طبقات النظام: واجهات <strong>React و TypeScript</strong>، وخوادم بلغة <strong>Rust</strong> و <strong>Node / Serverless</strong>، و<strong>قواعد بيانات SQL</strong>: قاعدة PostgreSQL مع Row-Level Security على Supabase، وقاعدة SQLite في تطبيقات سطح المكتب، و Cloudflare D1 على الحافة.",
    about_p2: "أتولى المشروع من أول حديث مع العميل إلى تحليل المتطلبات وتصميم البيانات والتنفيذ والاختبار والنشر، ثم أواصل تطويره بعد الإطلاق. أعمالي تدير محلات وأكاديميات ووكالات ومدارس: أنظمة ERP ونقاط بيع، ومنصات امتحانات، وأنظمة CRM، ومواقع تسويقية.",
    pr1_t: "معمارية نظيفة", pr1_d: "طبقات واضحة ونماذج بيانات قابلة للاختبار.",
    pr2_t: "يعمل بدون إنترنت", pr2_d: "برمجيات تستمر في العمل دون اتصال.",
    pr3_t: "أمان افتراضي", pr3_d: "صلاحيات RBAC وسياسات RLS وقواعد على السيرفر.",
    pr4_t: "عربي وإنجليزي", pr4_d: "دعم RTL / LTR حقيقي وليس إضافة لاحقة.",
    exp_title: "الخبرة",
    exp1_date: "حالياً", exp1_t: "مهندس برمجيات مستقل", exp1_d: "بناء أنظمة ERP ونقاط بيع مكتبية ومنصات ويب ومواقع لعملاء في مصر والسعودية.",
    exp2_t: "بكالوريوس تكنولوجيا المعلومات", exp2_d: "جامعة أسيوط الجديدة التكنولوجية — كلية التكنولوجيا الصناعية والطاقة. التقدير: جيد جداً.",
    exp3_date: "الجامعة", exp3_t: "مشاريع هندسية أكاديمية", exp3_d: "مشاريع تعلم آلي وأنظمة مدمجة/IoT (ESP32 و Flutter مع Firebase) ضمن الدراسة.",
    loc_title: "المقر", loc_name: "أسيوط، مصر", loc_body: "متاح للعمل عن بُعد أو الانتقال أو العقود الحرة.",
    svc_eyebrow: "ماذا أبني", svc_title: "برمجيات تحل <em>مشاكل حقيقية</em>", svc_subtitle: "أربعة أنواع من المنتجات أصممها وأبنيها وأسلمها كاملة.",
    svc1_t: "أنظمة ERP ونقاط بيع مكتبية", svc1_d: "أنظمة أعمال أصلية تعمل بدون إنترنت: مبيعات ومخزون وأقساط وورديات ورواتب وتقارير في ملف تثبيت واحد.",
    svc2_t: "منصات ويب متكاملة", svc2_d: "منصات متعددة الأدوار مع تسجيل دخول وصلاحيات ولوحات تحكم وتحديثات لحظية وسجل تدقيق.",
    svc3_t: "مواقع تفاعلية", svc3_d: "مواقع سريعة ثنائية اللغة ومهيأة لمحركات البحث مع قصص بالتمرير ومشاهد ثلاثية الأبعاد.",
    svc4_t: "الخوادم والبيانات", svc4_d: "تصميم البيانات وجداول SQL والـ Migrations وواجهات REST وقواعد العمل على السيرفر والنسخ الاحتياطي.",
    skills_eyebrow: "الأدوات", skills_title: "المهارات و<em>التقنيات</em>", skills_subtitle: "اللغات والأطر والأدوات التي أستخدمها لإطلاق برمجيات إنتاجية.",
    sk_lang: "لغات البرمجة", sk_front: "الواجهات الأمامية", sk_back: "الخوادم والسحابة", sk_db: "قواعد البيانات", sk_desk: "سطح المكتب والموبايل", sk_tools: "ممارسات هندسية",
    skills_legend: "المميز = أستخدمه يومياً في الإنتاج",
    projects_eyebrow: "أعمال مختارة", projects_title: "مشاريع <em>تم تسليمها</em>",
    projects_subtitle: "أنظمة حقيقية لعملاء حقيقيين. افتح أي مشروع لترى الصور والمشكلة والقرارات التقنية والنتائج.",
    filter_all: "الكل", filter_web: "ويب وسحابة", filter_desktop: "سطح المكتب",
    badge_web: "ويب وسحابة", badge_desktop: "سطح المكتب", badge_new: "جديد", case_study: "عرض تفاصيل المشروع",
    video_eyebrow: "فيديو العرض", video_title: "شاهد الأنظمة <em>أثناء العمل</em>",
    video_subtitle: "جولة قصيرة في أنظمة ERP والبرامج المحاسبية المكتبية المطورة لعملاء.",
    video_badge: "عرض أنظمة ERP", video_info_text: "تطبيقات ERP مكتبية وإدارة بيانات لحظية ودفاتر مالية.",
    contact_eyebrow: "تواصل", contact_title: "عندك وظيفة أو مشروع؟ <em>لنتحدث.</em>",
    contact_text: "متاح لوظائف مهندس برمجيات (عن بُعد أو من المقر) وللمشاريع الحرة. عادةً أرد خلال يوم.",
    contact_btn: "أرسل بريداً", contact_lbl_email: "البريد الإلكتروني (اضغط للنسخ)", contact_lbl_whatsapp: "واتساب", contact_lbl_github: "جيت هب",
    copied: "تم نسخ البريد الإلكتروني",
    footer_name: "إبراهيم أسامة حسن", footer_copy: "مهندس برمجيات. تصميم وتطوير شخصي.",
    roles: ["أنظمة ERP مكتبية.", "منصات ويب متكاملة.", "خوادم سحابية بقواعد SQL.", "مواقع تفاعلية."]
  }
};

/* ---------- Projects (order = display order) ---------- */
const projects = [
  { id: "elhamd-store", cat: "desktop", featured: true, isNew: true, img: "assets/images/elhamd/5.jpg", media: 8,
    tags: ["Tauri v2", "Rust", "SQLite", "React", "TypeScript"],
    en: ["El Hamd Store — Mobile Shop ERP & POS", "Fully offline desktop ERP for a mobile-phone and repair shop: POS with QR invoices, IMEI-serialized inventory, repair Kanban, shifts & treasury, installments, suppliers and a profit dashboard — Rust + embedded SQLite in one installer."],
    ar: ["محل الحمد — نظام ERP ونقطة بيع لمحلات الموبايلات", "نظام مكتبي يعمل بدون إنترنت لمحل موبايلات ومركز صيانة: نقطة بيع بفواتير QR، ومخزون مسلسل بـ IMEI، ومركز صيانة، وورديات وخزينة، وأقساط وموردين ولوحة أرباح — Rust وSQLite مدمجة في ملف تثبيت واحد."] },
  { id: "osama-group-site", cat: "web", isNew: true, img: "assets/images/osama-site/0.jpg", media: 8,
    tags: ["GSAP", "JavaScript", "SEO", "PWA"],
    en: ["Osama Group — Scrollytelling Agency Website", "Live agency website where scrolling tells a story — a dull shop gets rebranded and customers flood in — followed by services, real pricing packages and a 32-article SEO blog."],
    ar: ["أسامة جروب — موقع وكالة بأسلوب Scrollytelling", "موقع وكالة منشور يحكي قصة أثناء التمرير — محل هادئ يحصل على هوية جديدة فيتوافد العملاء — ثم الخدمات والباقات بالأسعار الحقيقية ومدونة بـ 32 مقالاً."] },
  { id: "aa-vision", cat: "web", isNew: true, img: "assets/images/aavision/0.jpg", media: 5,
    tags: ["React 19", "Three.js", "GSAP", "Lenis"],
    en: ["A_A Vision — Interior Finishing Website", "Bilingual site for a finishing company with a scroll-driven Three.js build story, a cost estimator, a style quiz and a booking wizard with WhatsApp handoff."],
    ar: ["A_A Vision — موقع شركة تشطيبات", "موقع ثنائي اللغة لشركة تشطيبات بقصة بناء ثلاثية الأبعاد بالتمرير وحاسبة تكلفة واختبار ستايل ومعالج حجز يحول إلى واتساب."] },
  { id: "gebaby-v2", cat: "web", isNew: true, img: "assets/images/gebaby-v2/0.jpg", media: 2,
    tags: ["React", "Supabase", "PostgreSQL", "RLS", "PWA"],
    en: ["Gebaby v2 — Teachers & Students Platform", "Rebuilt on Supabase: admin / teacher / student portals, a one-attempt exam engine enforced by Postgres RPCs and RLS, realtime notifications, library, attendance and leaderboards."],
    ar: ["جيبابي v2 — منصة المعلمين والطلاب", "إعادة بناء على Supabase: بوابات للمدير والمعلم والطالب، ومحرك امتحانات بمحاولة واحدة مؤمَّن بدوال Postgres وRLS، وإشعارات لحظية ومكتبة وحضور ولوحة ترتيب."] },
  { id: "mastoor", cat: "desktop", img: "assets/images/project/Screenshot (244).png", media: 10,
    tags: ["React 19", "Tauri v2", "Rust", "SQLite"],
    en: ["Mastoor Home Textiles ERP & Installments", "Offline-first desktop ERP and POS for textiles retail: fast checkout, installment ledger with guarantors, multi-channel cash (Cash, Vodafone Cash, InstaPay) and fabric yardage tracking."],
    ar: ["نظام مستور لإدارة الأقمشة والمفروشات والتقسيط", "نظام مكتبي يعمل بدون إنترنت لمتاجر الأقمشة: نقطة بيع سريعة، وعقود تقسيط مع الضامنين، وإدارة السيولة (نقدية، فودافون كاش، إنستاباي)، وتتبع أمتار الأقمشة."] },
  { id: "agency-erp", cat: "web", featured: true, img: "assets/images/agency-ERP 0.jpeg", media: 10,
    tags: ["Cloudflare Workers", "D1", "TypeScript", "Backblaze B2"],
    en: ["Osama Group Agency ERP & CRM", "Full-stack ERP/CRM for a multi-branch marketing agency on Cloudflare Workers and D1: 11-role dynamic permissions, a 7-stage project workflow, financial dues, attendance, WhatsApp templates and a 396-case regression suite."],
    ar: ["نظام Osama Group لإدارة الوكالات (ERP/CRM)", "نظام ERP/CRM متكامل لوكالة تسويق متعددة الفروع على Cloudflare Workers وD1: صلاحيات ديناميكية لـ 11 دوراً، ومسار مشاريع بسبع مراحل، ومستحقات مالية وحضور وقوالب واتساب و396 حالة اختبار."] },
  { id: "aura-academy", cat: "desktop", img: "assets/images/aura academy 0.png", media: 17,
    tags: ["React 19", "Tauri v2", "Rust", "SQLite"],
    en: ["Aura Academy Management System", "Offline-first desktop ERP for an academy: students & courses, attendance, café POS, inventory, cash-shift reconciliation, payroll and financial reporting in one native app."],
    ar: ["نظام إدارة أكاديمية أورا", "نظام ERP مكتبي يعمل بدون إنترنت لأكاديمية: الطلاب والكورسات، والحضور، ونقطة بيع الكافيه، والمخزون، وتسوية الورديات، والرواتب، والتقارير المالية."] },
  { id: "gebaby-platform", cat: "web", img: "assets/images/project1/Screenshot (227).png", media: 14,
    tags: ["Cloudflare Workers", "D1", "TypeScript", "Chart.js"],
    en: ["Gebaby EdTech & Exam Platform (v1)", "Cloud learning platform on Cloudflare Pages + D1: teacher groups, question bank, timed auto-graded exams, digital library, audit logs and a gamified leaderboard."],
    ar: ["منصة جيبابي للتعليم والامتحانات (v1)", "منصة تعليمية سحابية على Cloudflare Pages وD1: مجموعات المعلمين، وبنك الأسئلة، وامتحانات مؤقتة بتصحيح آلي، ومكتبة رقمية، وسجل تدقيق، ولوحة ترتيب."] },
  { id: "novera-clean", cat: "web", img: "assets/images/novera/novera-ar-home.png", media: 5,
    tags: ["HTML5", "CSS3", "JavaScript", "RTL / SEO"],
    en: ["Novera Clean — Cleaning Services Website", "Live bilingual (Arabic RTL / English) website for a Dammam cleaning & pest-control company: service pages, FAQ, dark mode and one-tap call / WhatsApp booking."],
    ar: ["موقع نوفيرا كلين لخدمات التنظيف", "موقع منشور ثنائي اللغة لشركة تنظيف ومكافحة حشرات بالدمام: صفحات خدمات وأسئلة شائعة ووضع ليلي وحجز بنقرة عبر الاتصال أو واتساب."] },
  { id: "exam-platform", cat: "web", img: "assets/images/exam_platform_preview.svg", media: 3,
    tags: ["JavaScript", "Apps Script", "Google Sheets", "Cloudflare Pages"],
    en: ["Al-Fares Al-Moaser Exam Platform", "Free serverless exam platform for secondary-school students: shuffled auto-graded exams, anti-cheat tab/fullscreen detection, scheduled windows and admin logging."],
    ar: ["منصة الفارس المعاصر للامتحانات", "منصة امتحانات مجانية بدون سيرفر لطلاب الثانوي: امتحانات عشوائية بتصحيح تلقائي، وكشف الغش، ومواعيد مجدولة، وتسجيل إجراءات الإدارة."] },
  { id: "vodafone", cat: "desktop", img: "assets/images/vodafone_cash_preview.png", media: 10,
    tags: ["Tauri v2", "React", "TypeScript"],
    en: ["Vodafone Cash Agent ERP", "Desktop app for mobile-wallet agents: multiple wallets, cash-in/out registers, automatic commissions and the cheapest transfer path between wallets."],
    ar: ["برنامج إدارة وكلاء فودافون كاش", "تطبيق مكتبي لوكلاء المحافظ: محافظ متعددة، وسجلات إيداع وسحب، وحساب العمولات تلقائياً، وأرخص مسار للتحويل بين المحافظ."] },
  { id: "printing", cat: "desktop", img: "assets/images/printing_accounting_preview.png", media: 9,
    tags: ["Tauri v2", "Tailwind", "Recharts", "jsPDF"],
    en: ["Print-Job Billing System", "Billing and order management for copy centers with sales charts, print-order invoices and PDF exports."],
    ar: ["برنامج حسابات وفواتير المطابع", "إدارة الطلبات والفواتير لمراكز التصوير مع رسوم بيانية للمبيعات وفواتير الطباعة وتصدير PDF."] },
  { id: "jacket", cat: "desktop", img: "assets/images/jacket_maqtoo3_preview.png", media: 9,
    tags: ["Tauri", "React", "SQLite", "Tailwind"],
    en: ["Jacket Maqtoo3 — Suit Rental ERP", "Rental management with booking calendars, orders, inventory and saved customer measurements."],
    ar: ["جاكت مقطوع — نظام تأجير البدل", "إدارة التأجير بتقويم الحجوزات والطلبات والمخزون وحفظ مقاسات العملاء."] },
  { id: "gbb", cat: "desktop", img: "assets/images/gbb_accounting_preview.png", media: 10,
    tags: ["React", "Tauri", "Vite"],
    en: ["GBB Route Accounting", "Transport ERP for schedules, route logs, driver–vehicle pairing, passenger tickets and financial logs."],
    ar: ["برنامج حسابات خطوط النقل (GBB)", "نظام لإدارة جداول الرحلات والمسارات وتعيين السائقين والمركبات وتذاكر الركاب والسجلات المالية."] },
  { id: "jacket-v1", cat: "desktop", img: "assets/images/jacket_maqtoo3_v1_preview.png", media: 8,
    tags: ["React", "Tauri", "SQLite"],
    en: ["Jacket Maqtoo3 v1", "First release of the suit-rental app: catalog search, customer order history and sales logs."],
    ar: ["جاكت مقطوع v1", "الإصدار الأول من تطبيق تأجير البدل: بحث في الكتالوج وسجل طلبات العملاء والمبيعات."] },
  { id: "oxygen", cat: "web", img: "assets/images/oxygen_preview.png", media: 4,
    tags: ["HTML5", "Bootstrap", "JavaScript"],
    en: ["Oxygen Business Portal", "Responsive marketing website for a consulting firm with service lists, team profiles, sliders and animated counters."],
    ar: ["موقع أوكسجين للشركات", "موقع تسويقي متجاوب لشركة استشارات يعرض الخدمات والفريق مع سلايدر وعدادات متحركة."] }
];

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function renderProjects(lang) {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  const t = translations[lang];
  grid.innerHTML = projects.map((p, i) => {
    const [title, desc] = p[lang];
    const icon = p.cat === "desktop" ? "fa-desktop" : "fa-cloud";
    return `
      <article class="project-card glass-card spotlight reveal${p.featured ? " featured" : ""}" data-category="${p.cat}" style="--d:${(i % 3) * 0.07}s">
        <a class="project-card-link" href="project.html?id=${p.id}" aria-label="${esc(title)}"></a>
        <div class="project-img-wrapper">
          <div class="project-badges">
            <span class="project-category-badge badge-${p.cat}"><i class="fa-solid ${icon}"></i> ${t["badge_" + p.cat]}</span>
            <span style="display:flex;gap:.4rem">
              ${p.isNew ? `<span class="new-badge">${t.badge_new}</span>` : ""}
              <span class="media-badge"><i class="fa-solid fa-images"></i> ${p.media}</span>
            </span>
          </div>
          <img src="${encodeURI(p.img)}" alt="${esc(title)}" class="project-img" loading="lazy">
        </div>
        <div class="project-body">
          <div class="project-tags">${p.tags.map((tg) => `<span class="project-tag">${esc(tg)}</span>`).join("")}</div>
          <h3 class="project-card-title">${esc(title)}</h3>
          <p class="project-description">${esc(desc)}</p>
          <span class="project-link">${t.case_study} <i class="fa-solid fa-arrow-right"></i></span>
        </div>
      </article>`;
  }).join("");

  ["all", "web", "desktop"].forEach((f) => {
    const el = document.querySelector(`[data-count-for="${f}"]`);
    if (el) el.textContent = f === "all" ? projects.length : projects.filter((p) => p.cat === f).length;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let currentLang = "en";
  try { currentLang = localStorage.getItem("portfolio_lang") || "en"; } catch (e) {}

  /* ---------- Reveal on scroll ---------- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("active"); revealObserver.unobserve(entry.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  const observeReveals = (root = document) => root.querySelectorAll(".reveal:not(.active)").forEach((el) => revealObserver.observe(el));

  /* ---------- Spotlight cards ---------- */
  const bindSpotlight = (root = document) => {
    root.querySelectorAll(".spotlight").forEach((card) => {
      if (card.dataset.spot) return;
      card.dataset.spot = "1";
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - r.left}px`);
        card.style.setProperty("--my", `${e.clientY - r.top}px`);
      });
    });
  };

  /* ---------- Filters ---------- */
  let activeFilter = "all";
  const indicator = document.querySelector(".filter-indicator");
  const moveIndicator = () => {
    const btn = document.querySelector(".filter-btn.active");
    if (!btn || !indicator) return;
    indicator.style.left = `${btn.offsetLeft}px`;
    indicator.style.width = `${btn.offsetWidth}px`;
  };
  const applyFilter = () => {
    document.querySelectorAll(".project-card").forEach((card) => {
      const show = activeFilter === "all" || card.dataset.category === activeFilter;
      card.classList.toggle("is-hidden", !show);
      if (show) card.classList.add("active");
    });
  };
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;
      moveIndicator();
      applyFilter();
    });
  });
  window.addEventListener("resize", moveIndicator);

  /* ---------- Typed role ---------- */
  const typedEl = document.querySelector(".typed");
  let typeTimer = null;
  const startTyping = () => {
    if (!typedEl) return;
    clearTimeout(typeTimer);
    const roles = translations[currentLang].roles;
    if (reduceMotion) { typedEl.textContent = roles[0]; return; }
    let r = 0, c = 0, deleting = false;
    const tick = () => {
      const word = roles[r];
      typedEl.textContent = word.slice(0, c);
      if (!deleting && c < word.length) { c++; typeTimer = setTimeout(tick, 55); }
      else if (!deleting) { deleting = true; typeTimer = setTimeout(tick, 1700); }
      else if (c > 0) { c--; typeTimer = setTimeout(tick, 28); }
      else { deleting = false; r = (r + 1) % roles.length; typeTimer = setTimeout(tick, 300); }
    };
    tick();
  };

  /* ---------- Language ---------- */
  const langText = document.querySelector(".lang-switcher span");
  const setLanguage = (lang) => {
    currentLang = lang;
    try { localStorage.setItem("portfolio_lang", lang); } catch (e) {}
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    if (langText) langText.textContent = lang === "en" ? "العربية" : "English";
    const dict = translations[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const v = dict[el.dataset.i18n];
      if (typeof v === "string") el.innerHTML = v;
    });
    const cvBtn = document.getElementById("cv-download-btn");
    if (cvBtn) { cvBtn.title = dict.hero_cv_download; cvBtn.setAttribute("aria-label", dict.hero_cv_download); }
    renderProjects(lang);
    applyFilter();
    observeReveals();
    bindSpotlight();
    startTyping();
    requestAnimationFrame(moveIndicator);
  };
  document.querySelector(".lang-switcher")?.addEventListener("click", () => setLanguage(currentLang === "en" ? "ar" : "en"));
  setLanguage(currentLang);

  /* ---------- Header, progress, active link ---------- */
  const header = document.querySelector("header");
  const progress = document.querySelector(".scroll-progress");
  const sections = [...document.querySelectorAll("main section[id]")];
  const navAnchors = [...document.querySelectorAll(".nav-links a")];
  let ticking = false;
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("scrolled", y > 40);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    let current = "home";
    sections.forEach((s) => { if (y >= s.offsetTop - 140) current = s.id; });
    if (current === "video-demo") current = "projects";
    navAnchors.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${current}`));
    ticking = false;
  };
  window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const toggle = document.querySelector(".mobile-toggle");
  const navLinks = document.querySelector(".nav-links");
  toggle?.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });
  navAnchors.forEach((a) => a.addEventListener("click", () => {
    navLinks.classList.remove("open"); toggle?.classList.remove("open"); toggle?.setAttribute("aria-expanded", "false");
  }));

  /* ---------- Count-up stats ---------- */
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target, target = +el.dataset.count;
      countObserver.unobserve(el);
      if (reduceMotion) { el.textContent = target; return; }
      const start = performance.now(), dur = 1400;
      const step = (now) => {
        const p = Math.min((now - start) / dur, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll("[data-count]").forEach((el) => countObserver.observe(el));

  /* ---------- Copy email ---------- */
  const toast = document.querySelector(".toast");
  const showToast = (msg) => {
    if (!toast) return;
    toast.textContent = msg; toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2200);
  };
  const emailBtn = document.querySelector(".contact-method.email");
  const copyEmail = async () => {
    const email = "ibrahem.gebaby@gmail.com";
    try { await navigator.clipboard.writeText(email); showToast(translations[currentLang].copied); }
    catch (e) { window.location.href = `mailto:${email}`; }
  };
  emailBtn?.addEventListener("click", copyEmail);
  emailBtn?.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); copyEmail(); } });

  /* ---------- Hero parallax (subtle) ---------- */
  const visual = document.querySelector(".hero-visual");
  if (visual && !reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    document.querySelector(".hero").addEventListener("pointermove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      visual.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
  }
});
