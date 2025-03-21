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
  const [currentBanner, setCurrentBanner] = useState(1);
  
  const bannerImages = [
    './images/banner.jpeg',
    './images/banner2.jpeg',
    './images/banner3.jpeg',
    './images/banner4.jpeg',
    './images/banner5.jpeg'
  ];

  // Add this useEffect for banner rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev % 5) + 1);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Update visible count based on window width
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setCarouselVisibleCount(1); // Show 1 on mobile
      } else if (window.innerWidth < 1024) {
        setCarouselVisibleCount(2); // Show 2 on tablets
      } else {
        setCarouselVisibleCount(4); // Show 4 on desktop
      }
    };
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  // Update the navLinks array to match section order
  const navLinks = [
    { name: 'About Us', section: 'about-us' },
    { name: 'Products', section: 'products' },
    { name: 'Certificates', section: 'security-solutions' },
    { name: 'Projects', section: 'portfolio' },
    { name: 'Why Us', section: 'why-us' },
    { name: 'Expertise', section: 'expertise' },
    { name: 'Industries', section: 'industries' },
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
      name: 'Eng. N. Ahmed Alam',
      position: 'CEO',
      message: `Dear Valued Clients and Partners,

Welcome to Joint Circle Company. It is with great pride and enthusiasm that I reflect on our journey of excellence and innovation since our establishment in 1978. Over the years, we have consistently set new benchmarks in infrastructure design and development, driven by our unwavering commitment to quality and integrity.

Our success is built on the foundation of our dedicated team, whose expertise and dedication have been instrumental in delivering exceptional results for our clients. At Joint Circle Company, we leverage cutting-edge technology and innovative solutions to address the diverse needs of our clients, ensuring their projects are completed to the highest standards.

We are honored to be recognized as a Grade "A" company by the Kuwait Municipality under my leadership. This distinction reflects our steadfast commitment to excellence and adherence to the highest standards in all our endeavors.

Looking ahead, we are focused on fostering a culture of continuous improvement, sustainability, and social responsibility. Our goal is to not only meet but exceed the expectations of our clients, partners, and the communities we serve. We are dedicated to building a brighter, more sustainable future, one landmark at a time.

Thank you for your continued support and trust in Joint Circle Company. Together, we will achieve remarkable milestones and contribute positively to the world.

Warm regards,
Engr. N. Ahmed Alam
CEO, Joint Circle Company`,
      image: './images/chairman1.jpg',
    },
    {
      name: 'Eng. Sami Al-Sarraf',
      position: 'Chairman and Partner',
      message: `Dear Esteemed Clients and Partners,

As Chairman and Partner of Joint Circle Company, I am honored to extend my greetings and share our collective vision and commitment to excellence. Since our foundation in 1978, we have dedicated ourselves to pioneering innovation and quality in infrastructure design and development.

Our journey has been shaped by a deep-rooted commitment to integrity, reliability, and client satisfaction. We take great pride in our ability to deliver projects that not only meet but exceed the expectations of our clients. Our achievements are a testament to the hard work and expertise of our exceptional team, whose unwavering dedication ensures that every project is executed to the highest standards.

At Joint Circle Company, we believe in fostering strong partnerships based on trust, transparency, and mutual respect. Our collaborative approach and commitment to innovation have enabled us to maintain a leading position in the industry. We are proud to be recognized as a Grade "A" company by the Kuwait Municipality, a distinction that reflects our adherence to the highest standards of quality and excellence.

Looking forward, we remain dedicated to advancing our capabilities and embracing new challenges with a focus on sustainability and social responsibility. We are committed to creating a positive impact on the communities we serve and contributing to a more sustainable and prosperous future.

Thank you for your continued trust and support. Together, we will continue to achieve remarkable milestones and build a legacy of excellence.

Warm regards,
Sami Al-Sarraf
Chairman and Partner
Joint Circle Company`,
      image: './images/chairman2.jpg',
    },
  ];

  const expertiseAreas = [
    {
      title: 'Infrastructure Design',
      overview:
        'Infrastructure design is a crucial aspect of civil engineering that focuses on planning, designing, and implementing the foundational facilities and systems essential for the functioning of a society. This includes transportation networks, utilities, and public amenities that support economic activities and improve the quality of life for the community. Crafting enduring and efficient infrastructure solutions that meet contemporary needs while anticipating future demands.',
    },
    {
      title: 'Civil',
      overview:
        'Civil engineering is a professional discipline that deals with the design, construction, and maintenance of the built environment. This includes infrastructure projects such as roads, bridges, dams, airports, pipelines, and buildings. Civil engineers play a crucial role in shaping the world we live in by creating structures that support daily life and economic activities.',
    },
    {
      title: 'Architecture',
      overview:
        'Architecture is the art and science of designing and constructing buildings and other physical structures. It combines creativity and technical knowledge to create functional, safe, and aesthetically pleasing environments. Architects play a crucial role in shaping the built environment, addressing the needs and aspirations of individuals and communities. Blending creativity and functionality to design spaces that inspire and resonate.',
    },
    {
      title: 'Structural Engineering',
      overview:
        'Structural engineering is a specialized branch of civil engineering that focuses on the design, analysis, and integrity of structures that support or resist loads. It involves ensuring that buildings, bridges, tunnels, towers, and other structures are safe, stable, and capable of withstanding various forces such as gravity, wind, earthquakes, and other environmental factors. Delivering robust and reliable engineering solutions to ensure the safety and integrity of our projects.',
    },
    {
      title: 'MEP Services',
      overview:
        'MEP services are crucial components of building design and construction. These services ensure that a building is safe, comfortable, and functional by addressing the mechanical, electrical, and plumbing systems. MEP engineers work together to design, install, and maintain these systems, ensuring they operate efficiently and effectively. Providing integrated MEP services to enhance performance, energy efficiency, and sustainability.',
    },
  ];

  const industries = [
    {
      title: 'Banking',
      overview:
        'The banking sector is a cornerstone of the global economy, providing essential financial services to individuals, businesses, and governments. It facilitates economic growth by offering a range of services, including savings and checking accounts, loans, mortgages, investment products, and payment processing. Banks also play a critical role in the monetary policy and financial stability of a country. Developing a secure, innovative banking infrastructure that supports financial growth and stability',
    },
    {
      title: 'Offshore and Onshore Security',
      overview:
      ' Security involves protecting assets, infrastructure, and personnel located in offshore environments, such as oil rigs, drilling platforms, and maritime vessels. The primary focus is on safeguarding these assets firom various threats, including piracy, terrorism, and natural disasters. Implementing comprehensive security solutions for diverse and challenging environments',
    },
    {
      title: 'Industrial',
      overview:
      'The industrial sector encompasses a wide range of activities related to the manufacturing and production of goods. This sector is a critical driver of economic growth, providing essential products and services that support other industries and contribute to the overall development of a country. It includes various subsectors, such as manufacturing, energy, mining, and construction. Enhancing operational efficiency and safety within industrial sectors through tailored engineering solutions.',
    },
    {
      title: 'Oil and Gas',
      overview:
      'The oil and gas industry is a major global sector that involves exploration, extraction, refining, transportation, and marketing of petroleum products. It plays a critical role in the global economy, providing energy for transportation, heating, electricity generation, and as taw mate. d om and downstream. Addressing generation, and as raw materials for various industries. The industry is divided into three main segments: upstream, midstream, and downstream. Addressing the unique challenges of the oil and gas industry with cutting-edge, reliable solutions.',
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
                className="h-32 w-auto transform scale-110" // Changed from h-24 to h-32
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
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
          {bannerImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentBanner - 1 ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4">
          <div className="text-center mb-12 animate-on-scroll backdrop-blur-sm bg-black/20 p-8 rounded-lg">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow-lg">
              Securing Tomorrow's Transactions Today
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-shadow-lg">
              Industry-leading ATM solutions with unmatched security features
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .text-shadow-lg {
          text-shadow: 2px 2px 4px rgba(0,0,0,0.7),
                       4px 4px 8px rgba(0,0,0,0.5);
        }

        /* Add these new styles */
        .transition-opacity {
          transition-property: opacity;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        // ...existing styles...
      `}</style>

      {/* ABOUT US SECTION */}
      <section id="about-us" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-neutral-800">About Us</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Welcome to Joint Circle Company

Established in 1978, Joint Circle Company stands as a beacon of excellence in infrastructure design and development. With over four decades of pioneering expertise, we offer comprehensive services in Civil, Architectural design, Structural engineering, and MEP (Mechanical, Electrical, and Plumbing) solutions. Our commitment to innovation and quality has positioned us as trusted partners across various industries.
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

      {/* SECURITY & SURVEILLANCE SOLUTIONS SECTION */}
      <section id="security-solutions" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-neutral-800">Certificates And Achievements</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Our commitment to excellence is recognized through international certifications
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securitySolutions.map((cert, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-lg">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-lg font-bold text-neutral-800 text-center group-hover:text-yellow-400 transition-colors duration-300">
                  {cert.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS PORTFOLIO SECTION */}
      <section id="portfolio" className="py-20 px-4 bg-neutral-50 overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-neutral-800">Our Projects</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Over 30 years of excellence in construction and infrastructure development
            </p>
          </div>
          
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevPortfolioSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-yellow-400 text-neutral-800 rounded-full p-3 shadow-lg transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Carousel Container */}
            <div className="overflow-hidden mx-12">
              <div 
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${portfolioIndex * (100 / carouselVisibleCount)}%)` }}
              >
                {portfolioProjects.map((project) => (
                  <div
                    key={project.id}
                    className="flex-shrink-0 px-2 w-full sm:w-1/2 lg:w-1/4 transition-transform duration-500"
                    style={{ transform: `scale(${activeCard === project.id ? 1.05 : 1})` }}
                    onMouseEnter={() => setActiveCard(project.id)}
                    onMouseLeave={() => setActiveCard(null)}
                  >
                    <div className="relative rounded-lg shadow-lg group bg-neutral-800">
                      <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            aspectRatio: '4/3'
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="text-white text-lg font-semibold line-clamp-2">
                              {project.title}
                            </h3>
                            <p className="text-yellow-400 text-sm mt-2">Project #{project.id}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={nextPortfolioSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-yellow-400 text-neutral-800 rounded-full p-3 shadow-lg transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(portfolioProjects.length / carouselVisibleCount) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setPortfolioIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 
                  ${index === Math.floor(portfolioIndex / carouselVisibleCount) 
                    ? 'w-8 bg-yellow-400' 
                    : 'bg-neutral-300 hover:bg-yellow-200'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* WHY US SECTION */}
      <section id="why-us" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-neutral-800">Why Us?</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            {/* Text Content */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400 text-center md:text-left">Since 1978</h3>
              <p className="text-lg text-neutral-600 text-center md:text-left">
                With over 47 experienced professionals, we are a full-service project management and infrastructure solutions company. Our expertise spans project management, information and communication technology, contracts, procurement, MEP services, renovation, and safety & security. We specialize in delivering end-to-end solutions, ensuring efficiency, compliance, and quality in every project we undertake.
              </p>
            </div>
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src="./images/why-us.jpg"
                alt="Why Choose Us"
                className="w-full h-auto rounded-lg shadow-lg transform transition-all duration-500 hover:scale-110 hover:rotate-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR EXPERTISE SECTION */}
      <section id="expertise" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-neutral-800">Our Expertise</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Providing comprehensive solutions across various fields to meet modern demands
            </p>
          </div>
          
          <div className="relative">
            {/* Vertical Line - Hidden on mobile */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-400/20 hidden md:block" />
            
            {/* Mobile-friendly timeline */}
            <div className="space-y-12 md:space-y-0">
              {expertiseAreas.map((area, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center mb-16 last:mb-0 group
                    ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-1/2 text-center md:text-left ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                  }`}>
                    <div className="transform transition-all duration-500 group-hover:-translate-y-2 p-6 bg-white rounded-lg shadow-lg md:shadow-none md:bg-transparent">
                      <h3 className="text-2xl font-bold mb-4 text-neutral-800 group-hover:text-yellow-400">
                        {area.title}
                      </h3>
                      <p className="text-neutral-600">
                        {area.overview}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg transform transition-transform duration-500 group-hover:scale-110 z-10 my-6 md:my-0">
                    <div className="w-8 h-8 rounded-full bg-yellow-400 transform transition-all duration-500 group-hover:scale-125" />
                    <div className="absolute w-full h-full rounded-full border-2 border-yellow-400/30 animate-ping" />
                  </div>

                  {/* Spacer for desktop layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE SECTION */}
      <section id="industries" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-neutral-800">Industries We Serve</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Our expertise spans several sectors, ensuring that we meet the diverse needs of our clients with precision and excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group relative bg-neutral-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-yellow-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="relative p-6 flex flex-col items-center text-center min-h-[320px]">
                  <div className="mb-6 p-4 bg-white/10 rounded-full">
                    {/* You can add industry-specific icons here */}
                    <div className="w-12 h-12 flex items-center justify-center text-yellow-400 group-hover:text-neutral-800 transition-colors duration-500">
                      {index === 0 && <Building2 className="w-8 h-8" />}
                      {index === 1 && <Shield className="w-8 h-8" />}
                      {index === 2 && <Users className="w-8 h-8" />}
                      {index === 3 && <Award className="w-8 h-8" />}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-neutral-800 transition-colors duration-500">
                    {industry.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-neutral-800 transition-colors duration-500 text-sm">
                    {industry.overview}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Leadership Statement */}
          <div className="mt-16 max-w-4xl mx-auto bg-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-8 md:p-12">
              <div className="flex flex-col items-center">
                <div className="w-20 h-1 bg-yellow-400 mb-8"></div>
                <p className="text-lg text-gray-300 leading-relaxed text-center italic">
                  Under the leadership of{' '}
                  <span className="text-yellow-400 font-semibold">Mr. Sami Al-Sarraf</span> Chairman, and{' '}
                  <span className="text-yellow-400 font-semibold">Engr. N. Ahmed Alam</span>, our esteemed CEO,
                  <span className="block mt-4">
                    Joint Circle Company is classified as{' '}
                    <span className="text-yellow-400 font-bold text-xl">Grade "A"</span>{' '}
                    by the Kuwait Municipality, reflecting our unwavering commitment to excellence and adherence to the highest standards.
                  </span>
                </p>
                <div className="w-20 h-1 bg-yellow-400 my-8"></div>
                <p className="text-gray-300 leading-relaxed text-center">
                  At Joint Circle Company, we are dedicated to pushing the boundaries of what is possible,
                  delivering exceptional projects that drive progress and elevate standards.
                </p>
                <p className="text-yellow-400 font-semibold mt-6 text-center text-lg">
                  Partner with us and be part of our journey as we build a brighter, more sustainable future - one landmark at a time.
                </p>
              </div>
            </div>
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
              <div className="bg-neutral-800 p-8 text-white h-32 flex flex-col justify-center">
                <h3 className="text-2xl font-bold">Our Company</h3>
                <p className="mb-1">Joint Circle Co. for Trad. & Cont. W.L.L</p>
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
              <div className="bg-yellow-400 p-8 text-neutral-800 h-32 flex flex-col justify-center">
                <h3 className="text-2xl font-bold">Contact Information</h3>
                <p className="mb-1">Available 24/7 for your security needs</p>
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
                className="h-32 w-auto mb-2 transform transition-all duration-500 hover:scale-110 hover:rotate-2" // Changed h-12 to h-24 and mb-4 to mb-6
              />
              <p className="text-gray-400">
                Leading provider of infrastructure design and development solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-4">
                {navLinks.slice(0, Math.ceil(navLinks.length / 2)).map((item) => (
                  <a
                    key={item.name}
                    href={`#${item.section}`}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">More Links</h4>
              <div className="grid grid-cols-2 gap-4">
                {navLinks.slice(Math.ceil(navLinks.length / 2)).map((item) => (
                  <a
                    key={item.name}
                    href={`#${item.section}`}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Joint Circle. All rights reserved.</p>
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
