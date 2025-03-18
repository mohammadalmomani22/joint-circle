import React, { useEffect, useState } from 'react';
import {
  Building2,
  Users,
  Award,
  Shield,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  // Import any additional icons if needed
} from 'lucide-react';

const ATMSecurityLanding = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCard, setActiveCard] = useState(null);

  // Carousel state for Security & Portfolio sections
  const [securityIndex, setSecurityIndex] = useState(0);
  const [portfolioIndex, setPortfolioIndex] = useState(0);
  const [carouselVisibleCount, setCarouselVisibleCount] = useState(6);

  // Update visible count based on window width
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setCarouselVisibleCount(2);
      } else if (window.innerWidth < 768) {
        setCarouselVisibleCount(3);
      } else {
        setCarouselVisibleCount(6);
      }
    };
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const navLinks = [
    { name: 'Leadership', section: 'leadership' },
    { name: 'ATM Solutions', section: 'products' },
    { name: 'Why Us', section: 'why-us' },
    { name: 'Our Expertises', section: 'expertise' },
    { name: 'Industries', section: 'industries' },
    { name: 'Our Projects', section: 'portfolio' }, // Added Portfolio link
    { name: 'Contact', section: 'contact' },
  ];

  const stats = [
    {
      icon: <Building2 className="h-8 w-8" />,
      value: '10K+',
      label: 'ATMs Installed',
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: '500+',
      label: 'Client Banks',
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: '30+',
      label: 'Years Experience',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      value: '24/7',
      label: 'Security Monitoring',
    },
  ];

  const atmProducts = [
    {
      title: 'Drive Thru Enclosures',
      description:
        'Unique designs with day and night efficiency. Optional digital signage allows easy updates to marketing communications. Our enclosures reduce ATM downtime during summer heat with a heat dissipation system.',
      features: [
        'Outdoor Digital Signage LEDs',
        'Heat Dissipation System',
        'Day & Night Efficiency',
      ],
      image: './images/drive-thru.jpg',
    },
    {
      title: 'Adaptive Drive Thru',
      description:
        'Allows clients to adjust ATM height with a wave of the hand. Ideal for all vehicles including sedans, SUVs, and sports cars. Features a fail-safe system for consistent height adjustment.',
      features: ['Height Adjustment', 'Voice Guidance', 'Braille Instructions'],
      image: './images/adaptive-drive.jpg',
    },
    {
      title: 'ATM Enclosures',
      description:
        'Introducing our new range of customizable ATM enclosures, designed to enhance the look and feel of your machines with various customization options.',
      features: ['Reinforced Steel', 'Biometric Access', 'Alarm System'],
      image: './images/enclosure.jpg',
    },
    {
      title: 'Mobile ATM',
      description:
        "TransTech is the region's first Mobile ATM manufacturer. With over 50 concepts produced, we lead in design and innovation in the mobile ATM industry.",
      features: ['Quick Setup', 'Satellite Connectivity', 'Solar Power Option'],
      image: './images/mobile-atm.jpg',
    },
  ];

  // Array for Security & Surveillance Solutions
  const securitySolutions = [
    { title: 'ISO 45001:2018', image: './images/certificates/ISO45001.png' },
    { title: 'ISO 9001:2015', image: './images/certificates/ISO9001.png' },
    { title: 'ISO 10001:2018', image: './images/certificates/ISO10002.png' },
    { title: 'ISO 14001:2015', image: './images/certificates/ISO14001.png' },
    // { title: 'RADAR Surveillance', image: './images/security/radar-surveillance.jpg' },
    // { title: 'Long Range Laser Electro Optics', image: './images/security/long-range-laser-electro-optics.jpg' },
    // { title: 'RAZOR WIRES', image: './images/security/razor-wires.jpg' },
    // { title: 'Automatic Retractable Bollard', image: './images/security/automatic-retractable-bollard.jpg' },
    // { title: 'Road Blockers', image: './images/security/road-blockers.jpg' },
    // { title: 'Electrical Road Blockers', image: './images/security/electrical-road-blockers.jpg' },
    // { title: 'Protection Barriers/Fences', image: './images/security/protection-barriers-fences.jpg' },
    // { title: 'Vehicle Scanning System', image: './images/security/vehicle-scanning-system.jpg' },
    // { title: 'Container Scanning System', image: './images/security/container-scanning-system.jpg' },
    // { title: 'Access Control -Vehicle', image: './images/security/access-control-vehicle.jpg' },
    // { title: 'LRAD -Long Range Acoustic', image: './images/security/lrad-long-range-acoustic.jpg' },
    // { title: 'Special Cameras', image: './images/security/special-cameras.jpg' },
    // { title: 'Submersible Surveillance Systems', image: './images/security/submersible-surveillance-systems.jpg' },
  ];

  const leadership = [
    {
      name: 'Engr. N. Ahmed Alam',
      position: 'CEO',
      message: `Dear Valued Clients and Partners,

Welcome to Joint Circle Company. Reflecting on our journey since 1978, we have consistently set new benchmarks in infrastructure design and development, driven by our commitment to quality and integrity.

Our success is built on our dedicated team, leveraging cutting-edge technology to deliver exceptional results. Recognized as a Grade "A" company by the Kuwait Municipality, we adhere to the highest standards in all endeavors.

Looking ahead, we focus on continuous improvement, sustainability, and social responsibility, aiming to exceed expectations and build a brighter, more sustainable future.

Thank you for your continued support.

Warm regards,

Engr. N. Ahmed Alam
CEO`,
      image: './images/chairman1.jpg',
    },
    {
      name: 'Eng.Sami Al-Sarraf',
      position: 'Chairman and Partner',
      message: `Dear Esteemed Clients and Partners,

As Chairman and Partner, I share our collective vision and commitment to excellence. Since 1978, we've pioneered innovation and quality in infrastructure design.

Our journey is shaped by integrity, reliability, and client satisfaction. We take pride in delivering projects that exceed expectations, thanks to our exceptional team's dedication.

Recognized as a Grade "A" company, we maintain the highest standards of quality and excellence. We remain dedicated to advancing our capabilities with sustainability and social responsibility at the forefront.

Thank you for your trust and support.

Warm regards,

Sami Al-Sarraf
Chairman and Partner`,
      image: './images/chairman2.jpg',
    },
  ];

  const expertiseAreas = [
    {
      title: 'Project Management',
      overview:
        'Ensuring successful project execution by planning, organizing, and managing resources to achieve project goals efficiently and effectively.',
    },
    {
      title: 'Information and Communication Technology',
      overview:
        'Leveraging cutting-edge technology solutions to enhance communication, data management, and operational efficiency across industries.',
    },
    {
      title: 'Contracts',
      overview:
        'Developing and managing contracts to ensure clarity, compliance, and smooth execution of agreements between stakeholders.',
    },
    {
      title: 'Procurement',
      overview:
        'Strategically sourcing and acquiring goods and services to optimize costs, quality, and timelines while maintaining compliance.',
    },
    {
      title: 'MEP',
      overview:
        'Providing expert Mechanical, Electrical, and Plumbing services to enhance building functionality, energy efficiency, and sustainability.',
    },
    {
      title: 'Renovation',
      overview:
        'Revitalizing and upgrading existing structures to improve functionality, aesthetics, and sustainability while preserving their integrity.',
    },
    {
      title: 'Safety & Security',
      overview:
        'Implementing robust safety and security measures to protect people, assets, and infrastructure from potential risks and threats.',
    },
  ];

  const industries = [
    {
      title: 'Industrial and Warehouse Facilities',
      overview:
        'Delivering efficient and high-quality solutions for industrial and warehouse infrastructure. We focus on optimizing space, logistics, and operational efficiency to meet business needs.',
    },
    {
      title: 'Governmental Projects',
      overview:
        'Supporting public sector initiatives with tailored solutions that enhance infrastructure, security, and service delivery. We ensure compliance with regulations and quality standards.',
    },
    {
      title: 'Residential Development',
      overview:
        'Creating sustainable and modern residential communities that prioritize comfort, safety, and architectural excellence. We develop housing solutions tailored to diverse needs.',
    },
    {
      title: 'Private and Commercial Contracts',
      overview:
        'Providing expert management and execution of private and commercial projects, ensuring high-quality standards, cost efficiency, and timely delivery.',
    },
  ];

  const portfolioProjects = [
    { title: 'Direct Aid Project', image: './images/portfolio/Pic01 (1).jpg' },
    { title: 'Swiftel International Group', image: './images/portfolio/Pic01 (2).jpg' },
    { title: 'Al-Nafisi Electrical', image: './images/portfolio/Pic01 (3).jpg' },
    { title: 'Private Villa for Royal Family', image: './images/portfolio/Pic01 (4).jpg' },
    { title: 'Private Villa for Abdul MOhsin Al-Bisher', image: './images/portfolio/Pic01 (5).jpg' },
    { title: 'Fadiya Dawood H Al-Mutawa Villa', image: './images/portfolio/Pic01 (6).jpg' },
    { title: 'Future Kid', image: './images/portfolio/Pic01 (7).jpg' },
    { title: 'Carpet Showroom For Abbas Ali Al-Hazeem', image: './images/portfolio/Pic01 (8).jpg' },
    { title: 'Private Villa & Swimming Pool', image: './images/portfolio/Pic01 (9).jpg' },
    { title: 'Mosque at Mishref', image: './images/portfolio/Pic01 (10).jpg' },
    { title: 'Al-Anjari Cold Store', image: './images/portfolio/Pic01 (11).jpg' },
    { title: 'Al-Wazzan', image: './images/portfolio/Pic01 (12).jpg' },
    { title: 'Private villa for Mr. Ahmed al-sarraf', image: './images/portfolio/Pic01 (13).jpg' },
    { title: 'Diwaniya For Royal Family', image: './images/portfolio/Pic01 (14).jpg' },
    { title: 'Ediction Hospital', image: './images/portfolio/Pic01 (15).jpg' },
    { title: 'Car Show Room For Al-Dabbous', image: './images/portfolio/Pic01 (16).jpg' },
    { title: 'Dvd Production Factory', image: './images/portfolio/Pic01 (17).jpg' },
    { title: 'Steel Sky Light Work', image: './images/portfolio/Pic01 (18).jpg' },
    { title: 'Block factory for kuwait building material', image: './images/portfolio/Pic01 (19).jpg' },
    { title: 'Al-Resala Bilngual School', image: './images/portfolio/Pic01 (20).jpg' },
    { title: 'Private villa for mr. Nezar sultan al-essa', image: './images/portfolio/Pic01 (21).jpg' },
    { title: 'Private Villa for Mr. Hisham Sultan', image: './images/portfolio/Pic01 (22).jpg' },
    { title: 'Head office building for national medical consumable industries co', image: './images/portfolio/Pic01 (23).jpg' },
    { title: 'Al Wazzan Company', image: './images/portfolio/Pic01 (24).jpg' },
    { title: 'Kuwait agriculture co. Shuwaikh', image: './images/portfolio/Pic01 (25).jpg' },
    { title: 'Kuwait Agriculture Co. Amghara', image: './images/portfolio/Pic01 (26).jpg' },
    { title: 'Kuwait Agriculture Co. Ardiya', image: './images/portfolio/Pic01 (27).jpg' },
    { title: 'Fahed A. Mohsin al-bisher & Faisal A. Mohsin al-bisher', image: './images/portfolio/Pic01 (28).jpg' },
    { title: 'Nawal Foad Mulla Hussain- Funaitees', image: './images/portfolio/Pic01 (29).jpg' },
    { title: 'Private Villa for eng. Bader salman', image: './images/portfolio/Pic01 (30).jpg' },
    { title: 'Private villa for dr. Mishal al-kanderi', image: './images/portfolio/Pic01 (31).jpg' },
    { title: 'Private villa for ms. Noor al-hussona - Funaitees', image: './images/portfolio/Pic01 (32).jpg' },
    { title: 'National Medical Consumable Industries Company', image: './images/portfolio/Pic01 (33).jpg' },
    { title: 'Boundary Wall For Beach House', image: './images/portfolio/Pic01 (34).jpg' },
    { title: 'Health Club Building at Sabah Al-salem', image: './images/portfolio/Pic01 (35).jpg' },
    { title: 'Cold store for kuwait proteins co. (Sabhan)', image: './images/portfolio/Pic01 (36).jpg' },
    { title: 'Private vil for mr. Ali khaled abdullah faras', image: './images/portfolio/Pic01 (37).jpg' },
    { title: 'Kuwait Proteins Company Steel Corrugated Sheet', image: './images/portfolio/Pic01 (38).jpg' },
    { title: 'Private vil for mr. Ali khaled abdullah faras', image: './images/portfolio/Pic01 (39).jpg' },
    { title: 'Kuwait Proteins Company (Building No. 04)', image: './images/portfolio/Pic01 (40).jpg' }
  ].map((project, index) => ({
    ...project,
    id: index + 1
  }));

  // Helper: return a looped slice of an array given a start index and count
  const getLoopedSlice = (array, start, count) => {
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(array[(start + i) % array.length]);
    }
    return result;
  };

  // Compute visible items for each carousel based on the dynamic count
  const visibleSecurityItems = getLoopedSlice(securitySolutions, securityIndex, carouselVisibleCount);
  const visiblePortfolioItems = getLoopedSlice(portfolioProjects, portfolioIndex, carouselVisibleCount);

  // Handlers for Security carousel navigation (move one image at a time, looped)
  const nextSecuritySlide = () => {
    setSecurityIndex((prevIndex) => (prevIndex + 1) % securitySolutions.length);
  };

  const prevSecuritySlide = () => {
    setSecurityIndex((prevIndex) => (prevIndex - 1 + securitySolutions.length) % securitySolutions.length);
  };

  // Handlers for Portfolio carousel navigation (move one image at a time, looped)
  const nextPortfolioSlide = () => {
    setPortfolioIndex((prevIndex) => (prevIndex + 1) % portfolioProjects.length);
  };

  const prevPortfolioSlide = () => {
    setPortfolioIndex((prevIndex) => (prevIndex - 1 + portfolioProjects.length) % portfolioProjects.length);
  };

  useEffect(() => {
    // Intersection Observer for Animations
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

    // Smooth Scrolling for Anchor Links
    const handleAnchorClick = function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const navbarHeight = 96;
        const targetPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = targetPosition + window.pageYOffset - navbarHeight;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    };
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', handleAnchorClick);
    });
    return () => {
      observer.disconnect();
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  useEffect(() => {
    // Scroll Progress Bar
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.pageYOffset / totalScroll) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-2 bg-gray-200 z-50">
        <div className="h-full bg-yellow-400 transition-width duration-300" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* NAVIGATION */}
      <nav className="fixed w-full bg-opacity-90 bg-neutral-800 text-white z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center">
              <img
                src="./images/company-logo.png"
                alt="ATM Security Solutions Logo"
                className="h-24 w-auto transform scale-110"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.section}`}
                  className="relative overflow-hidden before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-yellow-400 before:transform before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100 text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
            {/* Hamburger Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-neutral-800 bg-opacity-95 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.section}`}
              className="relative overflow-hidden before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-yellow-400 before:transform before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100 text-white text-2xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* HERO */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-neutral-800 bg-opacity-60">
          <img
            src="./images/hero-bg.jpg"
            alt="ATM Security Solutions"
            className="w-full h-full object-cover transform transition-all duration-500 hover:scale-110 hover:rotate-2"
          />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Securing Tomorrow's Transactions Today
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Industry-leading ATM solutions with unmatched security features
            </p>
            <div className="flex justify-center gap-4">
              {/* <a
                href="#products"
                className="bg-yellow-400 text-neutral-800 px-6 py-3 rounded-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 hover:bg-yellow-500 transition-colors duration-200"
              >
                Explore Solutions
              </a>
              <a
                href="#contact"
                className="border-2 border-white px-6 py-3 rounded-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 hover:bg-white hover:text-neutral-800 transition-colors duration-200"
              >
                Contact Sales
              </a> */}
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT US SECTION */}
      <section id="about-us" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-neutral-800">About Us</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              We are dedicated to creating innovative solutions that transform industries and improve lives.
              Our team combines expertise, passion, and creativity to deliver exceptional results for our clients
              and partners around the world.
            </p>
          </div>

          {/* Chairman & CEO Messages */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Chairman Message */}
            <div className="bg-gray-50 rounded-lg p-8 animate-on-scroll">
              <div className="flex items-center mb-6">
                <img
                  src={leadership[0].image}
                  alt={leadership[0].name}
                  className="w-24 h-24 rounded-full object-cover mr-6 transform transition-all duration-500 hover:scale-110 hover:rotate-2"
                />
                <div>
                  <h3 className="text-2xl font-bold text-neutral-800">{leadership[0].name}</h3>
                  <p className="text-yellow-400">Chairman</p>
                </div>
              </div>
              <p className="text-neutral-600 whitespace-pre-line">{leadership[0].message}</p>
            </div>

            {/* CEO Message */}
            <div className="bg-gray-50 rounded-lg p-8 animate-on-scroll">
              <div className="flex items-center mb-6">
                <img
                  src={leadership[1].image}
                  alt={leadership[1].name}
                  className="w-24 h-24 rounded-full object-cover mr-6 transform transition-all duration-500 hover:scale-110 hover:rotate-2"
                />
                <div>
                  <h3 className="text-2xl font-bold text-neutral-800">{leadership[1].name}</h3>
                  <p className="text-yellow-400">CEO</p>
                </div>
              </div>
              <p className="text-neutral-600 whitespace-pre-line">{leadership[1].message}</p>
            </div>
          </div>

          {/* Leadership Team
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center text-neutral-800">Leadership Team</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {leadership.slice(2).map((leader, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 animate-on-scroll transition-transform duration-300 touch-card transform"
                  onTouchStart={() => setActiveCard(index)}
                  onTouchEnd={() => setActiveCard(null)}
                  style={{ transform: activeCard === index + 2 ? 'scale(1.05)' : 'scale(1)' }}
                >
                  <div className="flex flex-col items-center mb-4 text-center">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-20 h-20 rounded-full object-cover mb-4 transform transition-all duration-500 hover:scale-110 hover:rotate-2"
                    />
                    <div>
                      <h4 className="text-xl font-bold text-neutral-800">{leader.name}</h4>
                      <p className="text-yellow-400">{leader.position}</p>
                    </div>
                  </div>
                  <p className="text-neutral-600 text-center whitespace-pre-line">{leader.message}</p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-neutral-800">Our ATM Solutions</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Comprehensive ATM security solutions designed for every environment
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {atmProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
                style={{ perspective: '1000px' }}
                onTouchStart={() => setActiveCard(index)}
                onTouchEnd={() => setActiveCard(null)}
              >
                <div className="relative h-48">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transform transition-all duration-500 hover:scale-110 hover:rotate-2"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-neutral-800">{product.title}</h3>
                  <p className="text-neutral-600 mb-4">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-neutral-600">
                        <CheckCircle2 className="h-4 w-4 text-yellow-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY & SURVEILLANCE SOLUTIONS SECTION (Carousel) */}
      <section id="security-solutions" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-neutral-800">Certificates And Achievements</h2>
            {/* <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Advanced solutions to protect your assets and ensure safety.
            </p>
             */}
          </div>
          <div className="relative">
  {/* Previous Button */}
  <button
    onClick={prevSecuritySlide}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-yellow-400 transition-colors"
  >
    <ChevronLeft size={32} className="text-neutral-800" />
  </button>
  
  {/* Carousel */}
  <div className="flex space-x-4 overflow-hidden px-12">
    {visibleSecurityItems.map((solution, index) => (
      <div
        key={index}
        className="flex-shrink-0"
        style={{ 
          width: `${Math.min(100 / carouselVisibleCount, 25)}%` // Maximum 4 elements (25% each) 
        }}
      >
        <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
          <div className="relative" style={{ 
            paddingTop: "141.4%" // A4 aspect ratio (1:√2 ≈ 1:1.414)
          }}>
            <img
              src={solution.image}
              alt={solution.title}
              className="absolute top-0 left-0 w-full h-full object-cover transform transition-all duration-500 hover:scale-110 hover:rotate-2"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-neutral-800 text-center">
              {solution.title}
            </h3>
          </div>
        </div>
      </div>
    ))}
  </div>
  
  {/* Next Button */}
  <button
    onClick={nextSecuritySlide}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-yellow-400 transition-colors"
  >
    <ChevronRight size={32} className="text-neutral-800" />
  </button>
</div>
        </div>
      </section>

      {/* PROJECTS PORTFOLIO SECTION (Carousel) */}
      <section id="portfolio" className="py-20 px-4 bg-neutral-50">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-neutral-800">Our Projects</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Over 30 years of excellence in construction and infrastructure development
            </p>
          </div>
          <div className="relative">
            {/* Previous Button */}
            <button
              onClick={prevPortfolioSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-yellow-400 transition-colors"
            >
              <ChevronLeft size={32} className="text-neutral-800" />
            </button>
            {/* Carousel */}
            <div className="flex space-x-4 overflow-hidden">
              {visiblePortfolioItems.map((project) => (
                <div
                  key={project.id}
                  className="flex-shrink-0"
                  style={{ width: `${100 / carouselVisibleCount}%` }}
                >
                  <div className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="aspect-w-1 aspect-h-1">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white text-sm font-semibold truncate">
                          {project.title}
                        </h3>
                        <p className="text-yellow-400 text-xs mt-1">Project #{project.id}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Next Button */}
            <button
              onClick={nextPortfolioSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-yellow-400 transition-colors"
            >
              <ChevronRight size={32} className="text-neutral-800" />
            </button>
          </div>
        </div>
      </section>

      {/* WHY US SECTION */}
      <section id="why-us" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-neutral-800">Why Us?</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              With over 47 experienced professionals, we are a full-service project management and infrastructure solutions company. Our expertise spans project management, information and communication technology, contracts, procurement, MEP services, renovation, and safety & security. We specialize in delivering end-to-end solutions, ensuring efficiency, compliance, and quality in every project we undertake.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="./images/why-us.jpg"
                alt="Why Choose Us"
                classxName="w-full h-auto rounded-lg shadow-lg transform transition-all duration-500 hover:scale-110 hover:rotate-2 md:max-h-[400px] lg:max-h-[600px]"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-neutral-800">Since 1978</h3>
              {/* <p className="text-neutral-600 mb-4">
                TransTech Group is a trusted provider of banking solutions in the GCC. We've
                partnered with every major bank in the region, forging long-term relationships
                based on excellence and client satisfaction.
              </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* OUR EXPERTISE SECTION */}
      <section id="expertise" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-neutral-800">Our Expertise</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Providing comprehensive solutions across various fields to meet modern demands
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:rotate-1 hover:scale-102 hover:shadow-xl animate-on-scroll"
              >
                <h3 className="text-2xl font-bold mb-4 text-neutral-800">{area.title}</h3>
                <p className="text-neutral-600">{area.overview}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE SECTION */}
      <section id="industries" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-neutral-800">Industries We Serve</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Delivering top-tier engineering and construction services across a wide range of industries
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl animate-on-scroll"
              >
                <h3 className="text-2xl font-bold mb-4 text-neutral-800">{industry.title}</h3>
                <p className="text-neutral-600">{industry.overview}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-neutral-50 to-neutral-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-neutral-800">Get in Touch</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Ready to enhance your ATM security? Contact our team of experts today.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Company Info Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
              <div className="bg-neutral-800 p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Company</h3>
                <p className="mb-2">Joint Circle Co. for Trad. & Cont. W.L.L</p>
                <p className="text-yellow-400">شركة الدائرة المشتركة للتجارة والمقاولات د.م.م</p>
              </div>
              <div className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <MapPin className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Location</h4>
                    <p>P.O. Box 1456</p>
                    <p>Al-Farwaniya 81025, Kuwait</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Building2 className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Head Office</h4>
                    <p>Kuwait City, Block 12</p>
                    <p>Building 7, Floor 3</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Methods Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
              <div className="bg-yellow-400 p-8 text-neutral-800">
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <p>Available 24/7 for your security needs</p>
              </div>
              <div className="p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-yellow-400" />
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p>Tel: (+965) 2473 4419</p>
                    <p>Fax: (+965) 2473 1127</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-yellow-400" />
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p>admin@joint-circle.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-yellow-400" />
                  <div>
                    <h4 className="font-bold mb-1">Website</h4>
                    <a
                      href="http://www.joint-circle.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-400 hover:underline"
                    >
                      www.joint-circle.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img
                src="./images/company-logo-white.png"
                alt="ATM Security Solutions"
                className="h-12 w-auto mb-4 transform transition-all duration-500 hover:scale-110 hover:rotate-2"
              />
              <p className="text-gray-400">
                Leading provider of secure ATM solutions and services worldwide.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Solutions</h4>
              <ul className="space-y-2">
                {['Drive Thru ATMs', 'Adaptive Solutions', 'ATM Enclosures', 'Mobile ATMs'].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#products"
                        className="relative overflow-hidden before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-yellow-400 before:transform before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100 text-gray-400 hover:text-yellow-400 transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((item) => (
                  <li key={item.name}>
                    <a
                      href={`#${item.section}`}
                      className="relative overflow-hidden before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-yellow-400 before:transform before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100 text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Ghost-Bash. All rights reserved.
            </p>
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
        .visible {
          opacity: 1;
          transform: translateY(0);
        }
        img {
          transition: transform 0.5s ease-in-out;
        }
        .group:hover img {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default ATMSecurityLanding;
