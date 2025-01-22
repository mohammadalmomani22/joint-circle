// src/components/JointCircleLanding.jsx
import React, { useEffect } from 'react';
import {
  Search,
  Building2,
  Users,
  Award,
  Hammer,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';

const JointCircleLanding = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [language, setLanguage] = React.useState('en'); // Language state

  // Translations object
  const translations = {
    en: {
      nav: {
        buy: 'Buy',
        projects: 'Projects',
        about: 'About',
        contact: 'Contact'
      },
      hero: {
        searchPlaceholder: 'Your keyword'
      },
      about: {
        title: "Building Kuwait's Future Since 1998",
        description:
          "As a leading construction company in Kuwait, we've been at the forefront of architectural innovation and urban development for over two decades...",
        features: [
          'ISO 9001:2015 Certified',
          'Award-winning projects across Kuwait',
          'Sustainable building practices',
          'State-of-the-art technology'
        ],
        yearsExcellence: 'Years of Excellence'
      },
      stats: {
        projectsCompleted: 'Projects Completed',
        happyClients: 'Happy Clients',
        yearsExperience: 'Years Experience',
        expertWorkers: 'Expert Workers'
      },
      properties: {
        title: 'Premium Properties',
        description:
          "Discover our exclusive collection of premium properties in Kuwait's most sought-after locations.",
        properties: [
          {
            title: 'Luxury Penthouse',
            price: 'KWD 1,200,000',
            location: 'Kuwait City',
            specs: '4 Beds • 5 Baths • 450 sqm',
            image: '/joint-circle/images/property1.jpg'
          },
          {
            title: 'Beachfront Villa',
            price: 'KWD 950,000',
            location: 'Salmiya',
            specs: '6 Beds • 7 Baths • 600 sqm',
            image: '/joint-circle/images/property2.jpg'
          },
          {
            title: 'Modern Apartment',
            price: 'KWD 380,000',
            location: 'Al Jahra',
            specs: '3 Beds • 3 Baths • 200 sqm',
            image: '/joint-circle/images/property3.jpg'
          }
        ]
      },
      projects: {
        title: 'Featured Projects',
        description:
          "Discover our landmark projects that have shaped Kuwait's architectural landscape.",
        projects: [
          {
            category: 'Commercial',
            title: 'Kuwait Business Tower',
            location: 'Kuwait City',
            image: '/joint-circle/images/property1.jpg'
          },
          {
            category: 'Residential',
            title: 'Luxury Villa Complex',
            location: 'Salmiya',
            image: '/joint-circle/images/property2.jpg'
          },
          {
            category: 'Retail',
            title: 'Modern Shopping Center',
            location: 'Al Jahra',
            image: '/joint-circle/images/property3.jpg'
          }
        ]
      },
      contact: {
        title: 'Get in Touch',
        description:
          "Connect with Kuwait's premier construction and real estate development company",
        contactMethods: [
          {
            icon: <Phone className="h-8 w-8" />,
            title: 'Call Us',
            info: ['+965 2234 5678', '+965 2234 5679'],
            action: 'Available 24/7'
          },
          {
            icon: <Mail className="h-8 w-8" />,
            title: 'Email Us',
            info: ['info@jointcircle.com', 'support@jointcircle.com'],
            action: 'We reply within 24 hours'
          },
          {
            icon: <MapPin className="h-8 w-8" />,
            title: 'Visit Us',
            info: ['Kuwait City, Kuwait', 'Business District'],
            action: 'Open Sunday-Thursday'
          }
        ]
      },
      footer: {
        quickLinks: ['About', 'Projects', 'Properties', 'Contact'],
        quickLinksHref: ['about', 'projects', 'properties', 'contact'],
        companyInfo:
          'Building excellence, delivering innovation, and shaping Kuwait\'s future through quality construction.',
        contactInfo: {
          phone: '+965 2234 5678',
          email: 'info@jointcircle.com',
          address: 'Kuwait City, Kuwait'
        },
        rights: '© 2025 Joint Circle. All rights reserved.'
      },
      languageToggle: 'العربية'
    },
    ar: {
      nav: {
        buy: 'شراء',
        projects: 'المشاريع',
        about: 'عن الشركة',
        contact: 'اتصل بنا'
      },
      hero: {
        searchPlaceholder: 'ابحث هنا'
      },
      about: {
        title: 'نبني مستقبل الكويت منذ عام 1998',
        description:
          'كشركة رائدة في مجال البناء في الكويت، كنا في طليعة الابتكار المعماري والتطوير الحضري لأكثر من عقدين...',
        features: [
          'حاصلون على شهادة ISO 9001:2015',
          'مشاريع حائزة على جوائز في الكويت',
          'ممارسات بناء مستدامة',
          'تكنولوجيا متطورة'
        ],
        yearsExcellence: 'سنوات من التميز'
      },
      stats: {
        projectsCompleted: 'مشاريع مكتملة',
        happyClients: 'عملاء سعداء',
        yearsExperience: 'سنوات الخبرة',
        expertWorkers: 'عمال خبراء'
      },
      properties: {
        title: 'عقارات مميزة',
        description:
          'اكتشف مجموعتنا الحصرية من العقارات المميزة في أكثر المواقع طلباً في الكويت.',
        properties: [
          {
            title: 'بنتهاوس فاخر',
            price: 'د.ك 1,200,000',
            location: 'مدينة الكويت',
            specs: '4 غرف نوم • 5 حمامات • 450 م²',
            image: '/joint-circle/images/property1.jpg'
          },
          {
            title: 'فيلا على الواجهة البحرية',
            price: 'د.ك 950,000',
            location: 'السالمية',
            specs: '6 غرف نوم • 7 حمامات • 600 م²',
            image: '/joint-circle/images/property2.jpg'
          },
          {
            title: 'شقة حديثة',
            price: 'د.ك 380,000',
            location: 'الجهراء',
            specs: '3 غرف نوم • 3 حمامات • 200 م²',
            image: '/joint-circle/images/property3.jpg'
          }
        ]
      },
      projects: {
        title: 'المشاريع المميزة',
        description:
          'اكتشف مشاريعنا البارزة التي شكلت المشهد المعماري للكويت.',
        projects: [
          {
            category: 'تجاري',
            title: 'برج الكويت للأعمال',
            location: 'مدينة الكويت',
            image: '/joint-circle/images/property1.jpg'
          },
          {
            category: 'سكني',
            title: 'مجمع فيلات فاخر',
            location: 'السالمية',
            image: '/joint-circle/images/property2.jpg'
          },
          {
            category: 'تجزئة',
            title: 'مركز تسوق حديث',
            location: 'الجهراء',
            image: '/joint-circle/images/property3.jpg'
          }
        ]
      },
      contact: {
        title: 'تواصل معنا',
        description:
          'تواصل مع شركة الكويت الرائدة في البناء وتطوير العقارات',
        contactMethods: [
          {
            icon: <Phone className="h-8 w-8" />,
            title: 'اتصل بنا',
            info: ['+965 2234 5678', '+965 2234 5679'],
            action: 'متاح 24/7'
          },
          {
            icon: <Mail className="h-8 w-8" />,
            title: 'راسلنا',
            info: ['info@jointcircle.com', 'support@jointcircle.com'],
            action: 'نرد خلال 24 ساعة'
          },
          {
            icon: <MapPin className="h-8 w-8" />,
            title: 'زرنا',
            info: ['مدينة الكويت، الكويت', 'الحي التجاري'],
            action: 'مفتوح من الأحد إلى الخميس'
          }
        ]
      },
      footer: {
        quickLinks: ['عن الشركة', 'المشاريع', 'العقارات', 'اتصل بنا'],
        quickLinksHref: ['about', 'projects', 'properties', 'contact'],
        companyInfo:
          'نبني التميز، ونقدم الابتكار، ونشكل مستقبل الكويت من خلال البناء عالي الجودة.',
        contactInfo: {
          phone: '+965 2234 5678',
          email: 'info@jointcircle.com',
          address: 'مدينة الكويت، الكويت'
        },
        rights: '© 2025 الدائرة المشتركة. جميع الحقوق محفوظة.'
      },
      languageToggle: 'English'
    }
  };

  useEffect(() => {
    // 1) Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

    // 2) Smooth scroll with offset for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const navbarHeight = 96; // Height of your fixed navbar (h-24 = 96px)
          const targetPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = targetPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }

        // Close mobile menu if open
        setIsMobileMenuOpen(false);
      });
    });

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, [language]); // Re-run effect when language changes to update event listeners

  // Navigation links
  const navLinks = [
    { name: 'buy', section: 'properties' },
    { name: 'projects', section: 'projects' },
    { name: 'about', section: 'about' },
    { name: 'contact', section: 'contact' }
  ];

  // Sample stats
  const stats = [
    {
      key: 'projectsCompleted',
      value: '500+',
      icon: <Building2 className="h-12 w-12 text-yellow-400" />
    },
    {
      key: 'happyClients',
      value: '1000+',
      icon: <Users className="h-12 w-12 text-yellow-400" />
    },
    {
      key: 'yearsExperience',
      value: '25+',
      icon: <Award className="h-12 w-12 text-yellow-400" />
    },
    {
      key: 'expertWorkers',
      value: '300+',
      icon: <Hammer className="h-12 w-12 text-yellow-400" />
    }
  ];

  // Handle language toggle
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <div className={`min-h-screen bg-white ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* NAVIGATION */}
      <nav className="fixed w-full bg-opacity-90 bg-neutral-800 text-white z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-22">
            {/* Logo */}
            <div className="flex items-center -ml-4">
              <img
                src="/joint-circle/images/logo.jpg"
                alt="Joint Circle Logo"
                className="h-20 md:h-28 w-auto object-contain transform scale-110"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.section}`}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                >
                  {translations[language].nav[link.name]}
                </a>
              ))}
              {/* Language Toggle Button */}
              <button
                onClick={toggleLanguage}
                className="ml-4 text-gray-300 hover:text-yellow-400 transition-colors duration-200"
              >
                {translations[language].languageToggle}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-yellow-400"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.section}`}
                  className="block px-3 py-2 text-base text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                >
                  {translations[language].nav[link.name]}
                </a>
              ))}
              {/* Language Toggle Button for Mobile */}
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-base text-gray-300 hover:text-yellow-400 transition-colors duration-200"
              >
                {translations[language].languageToggle}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <div className="relative h-screen">
        {/* Dark overlay with background image */}
        <div className="absolute inset-0 bg-neutral-800 bg-opacity-60">
          <img
            src="/joint-circle/images/hero-bg.jpg"
            alt="Modern cityscape"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Hero content */}
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <div className="text-center mb-8 md:mb-12 animate-on-scroll w-full max-w-4xl">
            <img
              src="/joint-circle/images/logo.jpg"
              alt="Joint Circle Logo"
              className="h-32 md:h-64 lg:h-96 w-auto mx-auto mb-8 md:mb-12 object-contain"
            />
          </div>
          <div className="w-full max-w-2xl animate-on-scroll">
            <div className="relative">
              <input
                type="text"
                placeholder={translations[language].hero.searchPlaceholder}
                className="w-full px-6 py-4 rounded-lg bg-white bg-opacity-90 text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <Search
                className={`absolute ${
                  language === 'ar' ? 'left-4' : 'right-4'
                } top-1/2 transform -translate-y-1/2 text-neutral-500`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-neutral-800">
                {translations[language].about.title}
              </h2>
              <p className="text-base md:text-lg text-neutral-600 mb-4 md:mb-6">
                {translations[language].about.description}
              </p>
              <div className="space-y-4">
                {translations[language].about.features.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle2 className="text-yellow-400 h-5 w-5" />
                    <span className="text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-on-scroll">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/joint-circle/images/property1.jpg"
                  alt="About Us"
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 p-6 rounded-lg shadow-lg">
                <p className="text-4xl font-bold">25+</p>
                <p className="text-sm font-medium">
                  {translations[language].about.yearsExcellence}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-on-scroll">
                <div className="mb-6 flex justify-center">{stat.icon}</div>
                <div className="text-4xl font-bold text-yellow-400 mb-3">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-lg">
                  {translations[language].stats[stat.key]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROPERTIES SECTION */}
      <section id="properties" className="py-20 px-4 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-neutral-800">
              {translations[language].properties.title}
            </h2>
            <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto">
              {translations[language].properties.description}
            </p>
          </div>
          {/* Responsive grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {translations[language].properties.properties.map((property, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute top-4 ${
                      language === 'ar' ? 'left-4' : 'right-4'
                    } bg-yellow-400 text-neutral-800 px-4 py-2 rounded-full`}
                  >
                    {property.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-neutral-800">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-neutral-600 mb-3">
                    <MapPin
                      className={`h-5 w-5 ${
                        language === 'ar' ? 'ml-2' : 'mr-2'
                      } text-yellow-400`}
                    />
                    {property.location}
                  </div>
                  <div className="text-neutral-600 border-t pt-4 mt-4">
                    {property.specs}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-neutral-800">
              {translations[language].projects.title}
            </h2>
            <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto">
              {translations[language].projects.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {translations[language].projects.projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg animate-on-scroll"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <div className="text-yellow-400 text-sm mb-2">{project.category}</div>
                  <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 px-4 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-neutral-800">
              {translations[language].contact.title}
            </h2>
            <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto">
              {translations[language].contact.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {translations[language].contact.contactMethods.map((contact, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 text-center transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-yellow-400 text-neutral-800 group-hover:scale-110 transition-transform duration-300 ${
                    language === 'ar' ? 'ml-auto' : ''
                  }`}
                >
                  {contact.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-neutral-800">
                  {contact.title}
                </h3>
                {contact.info.map((line, i) => (
                  <p key={i} className="text-neutral-600 mb-1">
                    {line}
                  </p>
                ))}
                <p className="mt-4 text-sm text-yellow-400">{contact.action}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <img
                src="/joint-circle/images/logo.jpg"
                alt="Joint Circle Logo"
                className="h-16 w-auto object-contain mb-4"
              />
              <p className="text-gray-400">
                {translations[language].footer.companyInfo}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">
                {language === 'en' ? 'Quick Links' : 'روابط سريعة'}
              </h4>
              <ul className="space-y-2">
                {translations[language].footer.quickLinks.map((item, index) => (
                  <li key={item}>
                    <a
                      href={`#${translations[language].footer.quickLinksHref[index]}`}
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-bold mb-4">
                {language === 'en' ? 'Contact Information' : 'معلومات الاتصال'}
              </h4>
              <ul className="space-y-2">
                <li className="text-gray-400 flex items-center">
                  <Phone
                    className={`h-4 w-4 ${
                      language === 'ar' ? 'ml-2' : 'mr-2'
                    } text-yellow-400`}
                  />
                  {translations[language].footer.contactInfo.phone}
                </li>
                <li className="text-gray-400 flex items-center">
                  <Mail
                    className={`h-4 w-4 ${
                      language === 'ar' ? 'ml-2' : 'mr-2'
                    } text-yellow-400`}
                  />
                  {translations[language].footer.contactInfo.email}
                </li>
                <li className="text-gray-400 flex items-center">
                  <MapPin
                    className={`h-4 w-4 ${
                      language === 'ar' ? 'ml-2' : 'mr-2'
                    } text-yellow-400`}
                  />
                  {translations[language].footer.contactInfo.address}
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p
              dangerouslySetInnerHTML={{
                __html: translations[language].footer.rights
              }}
            ></p>
          </div>
        </div>
      </footer>

      {/* ANIMATION STYLES */}
      <style>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* Enhanced image hover effects */
        img {
          transition: transform 0.5s ease-in-out;
        }
        .group:hover img {
          transform: scale(1.05);
        }

        /* RTL Support */
        .rtl {
          direction: rtl;
          text-align: right;
        }

        .ltr {
          direction: ltr;
          text-align: left;
        }

        /* Adjust aspect ratio for projects section */
        .aspect-w-16.aspect-h-9 {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%; /* 16:9 ratio */
        }
        .aspect-w-16.aspect-h-9 img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

export default JointCircleLanding;
