import React, { useEffect, useState, useRef } from 'react';
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
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  MessageCircle,
} from 'lucide-react';

const ATMSecurityLanding = () => {
  // Add new state for modal
  const [selectedImage, setSelectedImage] = useState(null);
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCard, setActiveCard] = useState(null);

  // New states for navbar visibility
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  
  // Carousel state for Security & Portfolio sections
  const [securityIndex, setSecurityIndex] = useState(0);
  const [portfolioIndex, setPortfolioIndex] = useState(0);
  const [carouselVisibleCount, setCarouselVisibleCount] = useState(6);
  const [currentBanner, setCurrentBanner] = useState(1);
  
  // Track last scroll position to determine direction
  const lastScrollY = useRef(0);
  
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
    { name: 'Our Expertise', section: 'expertise' },
    { name: 'Our Projects', section: 'portfolio' },
    { name: 'Certificates & Achievements', section: 'security-solutions' },
    { name: 'Partner & Supplier', section: 'clients' },
    { name: 'Get In Touch', section: 'contact' },
  ];

  const stats = [
    {
      icon: <Building2 className="h-8 w-8" />,
      value: '30+',
      label: 'Years Experience',
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: '500+',
      label: 'Projects Completed',
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: 'Grade A',
      label: 'Municipality Rating',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      value: '24/7',
      label: 'Support Service',
    },
  ];

  // Update the Security Solutions array with 6 certificates
  const securitySolutions = [
    { title: 'ISO 9001:2015', image: './images/certificates/Certificate1.jpg' },
    { title: 'ISO 14001:2015', image: './images/certificates/Certificate2.jpg' },
    { title: 'ISO 10002:2018', image: './images/certificates/Certificate3.jpg' },
    { title: 'ISO 10002:2018', image: './images/certificates/Certificate4.jpg' },
    { title: 'ISO 45001:2018', image: './images/certificates/Certificate5.jpg' },
    { title: 'ISO 45001:2018', image: './images/certificates/Certificate6.jpg' },
  ];

  const leadership = [
    {
      name: 'Eng. N. Ahmed Alam',
      position: 'CEO',
      message: `Dear Valued Clients and Partners,

Is with great pride and enthusiasm that I reflect on our journey of excellence and innovation since our establishment in 1978. Over the years, we have consistently set new benchmarks in infrastructure design and development, driven by our unwavering commitment to quality and integrity.

Our success is built on the foundation of our dedicated team, whose expertise and dedication have been instrumental in delivering exceptional results for our clients. At Joint Circle Company, we leverage cutting-edge technology and innovative solutions to address the diverse needs of our clients, ensuring their projects are completed to the highest standards.

We are honored to be recognized as a Grade "A" company by the Kuwait Municipality under my leadership. This distinction reflects our steadfast commitment to excellence and adherence to the highest standards.

We are focused on fostering a culture of continuous improvement, sustainability, and social responsibility. Our goal is to not only meet but exceed the expectations of our clients, partners, and the communities we serve. We are dedicated to building a brighter, more sustainable future, one landmark at a time.

Thank you for your continued support and trust in Joint Circle Company. Together, we will achieve remarkable milestones and contribute positively to the world.

Warm regards,
Engr. N. Ahmed Alam
CEO, Joint Circle Company
`,
      image: './images/chairman1.jpg',
    },
    {
      name: 'Eng. Sami Al-Sarraf',
      position: ' and Partner',
      message: `Dear Esteemed Clients and Partners,
      
As Chairman and Partner of Joint Circle Company, I am honored to extend my greetings and share our collective vision and commitment to excellence. Since our foundation in 1978, we have dedicated ourselves to pioneering innovation and quality in infrastructure design and development.

Our journey has been shaped by a deep-rooted commitment to integrity, reliability, and client satisfaction. We take great pride in our ability to deliver projects that not only meet but exceed the expectations of our clients. Our achievements are a testament to the hard work and expertise of our exceptional team, whose unwavering dedication ensures that every project is executed to the highest standards.

At Joint Circle Company, we believe in fostering strong partnerships based on trust, transparency, and mutual respect. Our collaborative approach and commitment to innovation have enabled us to maintain a leading position in the industry.

Looking forward, we remain dedicated to advancing our capabilities and embracing new challenges with a focus on sustainability and social responsibility. We are committed to creating a positive impact on the communities we serve and contributing to a more sustainable and prosperous future.

Thank you for your continued trust and support. Together, we will continue to achieve remarkable milestones and build a legacy of excellence.

Warm regards, Sami AlSarraf Chairman Joint Circle Company
`,
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
      title: 'Aluminium Excellence',
      overview:
        'Renowned for our precision engineering, we bring your visions to life through high-quality aluminum fabrication and installation services. From architectural facades to customized components, our aluminium solutions are durable, aesthetically striking, flexibly designed, eco friendly and of low-maintenance. We offer Aluminum Doors & Windows, Curtain Walls, Partitions, Showcases, Handrails & Balustrades, Ladders, Facades, Structural Aluminum for roofing, cladding, and other architectural applications to residential and commercial construction, hospitality and retail spaces, infrastructure projects and industrial applications. We are committed to exceeding client expectations by providing tailored solutions, premium quality materials, exceptional craftsmanship and end-to-end service.',
    },
    {
      title: 'Space Frame Solutions',
      overview:
      'We specialize in designing, manufacturing, and installing innovative space frame structures that redefine architectural possibilities. These three-dimensional, lightweight structural systems composed of interconnected struts and nodes are known for their ability to span large distances without interior supports. They are perfect for creating wide, open spaces that enhance functionality and design. Our space frames offer an ideal combination of strength, flexibility, aesthetic appeal, optimal performance making them the preferred choice for modern construction projects ranging from large-span roofs to unique architectural concepts in airports, exhibition halls, and commercial buildings. We pride ourselves in the engineering team offering custom design, high-quality fabrication and hassle-free project execution using state-of-the art technology and premium materials.',
    },
    {
      title: 'Premium Raised Floors',
      overview:
      'We provide cutting-edge raised flooring systems that are perfect for accommodating wiring, cabling, air distribution for dynamic spaces that require frequent reconfiguration. Raised floors are elevated structural platforms installed above the original floors to seamlessly manage and access cables, wires, and utilities without disrupting operations, to optimize HVAC efficiency by channeling air through the under floor system, to endure heavy loads and withstand wear and tear. We offer expert installation services, ongoing assistance, futuristic raised flooring systems that enhance functionality, flexibility, and style in modern offices, data centers, control rooms, educational institutions and other industrial spaces.',
    },
    {
      title: 'Wooden Elegance',
      overview:
      'Craftsmanship meets elegance in our wooden works. From bespoke furniture and cabinetry to interior wood finishes, we bring warmth and sophistication to every project, tailored to your exact specifications. Our offerings include custom furniture for offices and residences: For structural applications like timber framing, roofing and trusses, flooring, For functional applications like wooden dividers, wooden frames and shutters for doors and windows, cabinetry and shelving, For architectural and decorative applications like paneling, moldings and trim, custom furniture, For outdoor applications like decking and pergolas, fencing and gates, exterior cladding',
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
    setPortfolioIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      // Only advance if we haven't reached the end
      return nextIndex <= portfolioProjects.length - 4 ? nextIndex : prevIndex;
    });
  };

  const prevPortfolioSlide = () => {
    setPortfolioIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
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

  // Add click handler for closing modal when clicking outside
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedImage(null);
    }
  };

  // New useEffect for handling navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Determine scroll direction and distance
      const isScrolledDown = currentScrollPos > lastScrollY.current;
      const scrollDistance = Math.abs(currentScrollPos - lastScrollY.current);
      
      // Only hide/show navbar if scrolled enough (prevents jitter)
      if (scrollDistance > 10) {
        // Show navbar when scrolling up or at the top
        // Hide navbar when scrolling down and not at the top
        setVisible(!isScrolledDown || currentScrollPos < 100);
        lastScrollY.current = currentScrollPos;
      }
      
      // Update scroll progress regardless of direction
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((currentScrollPos / totalScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-2 bg-gray-200 z-50">
        <div className="h-full bg-yellow-400 transition-width duration-300" style={{ width: `${scrollProgress}%` }} />
      </div>

 {/* NAVIGATION — logo flush with top & bottom */}
<nav className="fixed w-full bg-opacity-95 bg-neutral-800 text-white z-50 relative h-32 border-b border-neutral-700">
  {/* logo pinned at left, spanning the full 32px nav height */}
  <div className="absolute left-12 top-0 bottom-0 flex items-center">
    <img
      src="./images/company-logo.png"
      alt="Joint Circle Company Logo"
      className="h-full w-auto transform transition-all duration-500 hover:scale-105 filter drop-shadow-lg"
    />
  </div>

  {/* links & hamburger vertically centered in that same 32px */}
  <div className="max-w-7xl mx-auto px-6 md:px-4 flex justify-end items-center h-full">
    <div className="hidden md:flex space-x-8">
      {navLinks.map(link => (
        <a
          key={link.name}
          href={`#${link.section}`}
          className="relative px-4 py-0 font-medium text-gray-300 hover:text-yellow-400 hover:bg-white/10 rounded-lg transition-all duration-300"
        >
          {link.name}
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"/>
        </a>
      ))}
    </div>

    <button
      className="md:hidden p-2 rounded hover:bg-white/10 transition-colors duration-300 ml-4"
      onClick={() => setMobileMenuOpen(o => !o)}
      aria-label="Toggle navigation menu"
    >
      {mobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
    </button>
  </div>
  
  {/* Mobile menu - add this new block */}
  {mobileMenuOpen && (
    <div className="md:hidden absolute top-full left-0 right-0 bg-neutral-800 border-t border-neutral-700 shadow-lg z-50">
      <div className="flex flex-col p-4 space-y-3">
        {navLinks.map(link => (
          <a
            key={link.name}
            href={`#${link.section}`}
            className="px-4 py-2 font-medium text-gray-300 hover:text-yellow-400 hover:bg-white/10 rounded-lg transition-all duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  )}
</nav>

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
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4 pt-32">
          <div className="text-center mb-12 animate-on-scroll backdrop-blur-sm bg-black/20 p-8 rounded-lg">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow-lg">
              Strength in Every Structure
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-shadow-lg">
              Constructing Spaces, Constructing Dreams
            </p>
            {/* Add the new buttons here */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
              <a
                href="#portfolio"
                className="px-8 py-3 bg-yellow-400 text-neutral-800 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                View Our Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-full font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Get a Free Consultation
              </a>
            </div>
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
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto" style={{ 
              textAlign: 'justify',
              textJustify: 'auto',
              wordSpacing: '-0.05em',
              letterSpacing: '-0.01em',
              lineHeight: '1.6',
              WebkitHyphens: 'auto',
              hyphens: 'auto',
              textRendering: 'geometricPrecision',
            }}>
              Joint Circle Company Established in 1978, stands as a beacon of excellence in infrastructure design and development. With over four decades of pioneering expertise, we offer comprehensive services in Civil, Architectural design, Structural engineering, and MEP (Mechanical, Electrical, Plumbing) solutions. Our commitment to innovation and quality has positioned us as trusted partners across various industries.
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
                  <p className="text-yellow-400">CEO</p>
                </div>
              </div>
              <p className="text-neutral-600" style={{ 
                  textAlign: 'justify',
                  textJustify: 'auto',
                  wordSpacing: '-0.05em',
                  letterSpacing: '-0.01em',
                  lineHeight: '1.6',
                  WebkitHyphens: 'auto',
                  hyphens: 'auto',
                  textRendering: 'geometricPrecision',
                  whiteSpace: 'pre-line'
                }}>{leadership[0].message}</p>
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
                  <p className="text-yellow-400">Chairman and Partner</p>
                </div>
              </div>
              <p className="text-neutral-600" style={{ 
                  textAlign: 'justify',
                  textJustify: 'auto',
                  wordSpacing: '-0.05em',
                  letterSpacing: '-0.01em',
                  lineHeight: '1.6',
                  WebkitHyphens: 'auto',
                  hyphens: 'auto',
                  textRendering: 'geometricPrecision',
                  whiteSpace: 'pre-line'
                }}>{leadership[1].message}</p>
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

      {/* SECURITY & SURVEILLANCE SOLUTIONS SECTION */}
      <section id="security-solutions" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-neutral-800">Certificates And Achievements</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Our commitment to excellence is recognized through international certifications
            </p>
          </div>
          
          {/* Leadership Statement - Moved from Industries section */}
          <div className="max-w-4xl mx-auto bg-neutral-800 rounded-2xl overflow-hidden shadow-2xl mb-16">
            <div className="p-8 md:p-12">
              <div className="flex flex-col items-center">
                <div className="w-20 h-1 bg-yellow-400 mb-8"></div>
                <p className="text-lg text-gray-300 leading-relaxed text-center italic">
                  Under the expert guidance of{' '}
                  <span className="text-yellow-400 font-semibold">Mr. Fadi Nasr</span> as partner,
                  <span className="block mt-4">
                    our company specialises in delivering high-quality services across diverse domains, including aluminum works, raised flooring systems, and space frame structures, in addition to the manufacture of interior wooden crafts in all its forms.
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
          
          <div className="grid md:grid-cols-3 gap-8"> {/* Changed from lg:grid-cols-4 to md:grid-cols-3 */}
            {securitySolutions.map((cert, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedImage(cert)}
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

          {/* Image Modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
              onClick={handleModalClick}
            >
              <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
                <button
                  className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  <X size={32} />
                </button>
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[90vh] object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* PROJECTS PORTFOLIO SECTION */}
      <section id="portfolio" className="py-20 px-4 bg-neutral-50 overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-neutral-800">Our Projects</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Over 47 years of excellence in construction and infrastructure development
            </p>
          </div>
          
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevPortfolioSlide}
              disabled={portfolioIndex === 0}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 ${
                portfolioIndex === 0
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-white/80 hover:bg-yellow-400 cursor-pointer'
              } text-neutral-800 rounded-full p-3 shadow-lg transition-all duration-300 backdrop-blur-sm`}
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
              disabled={portfolioIndex >= portfolioProjects.length - 4}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 ${
                portfolioIndex >= portfolioProjects.length - 4
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-white/80 hover:bg-yellow-400 cursor-pointer'
              } text-neutral-800 rounded-full p-3 shadow-lg transition-all duration-300 backdrop-blur-sm`}
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
              <p className="text-lg text-neutral-600" style={{ 
              textAlign: 'justify',
              textJustify: 'auto',
              wordSpacing: '-0.05em',
              letterSpacing: '-0.01em',
              lineHeight: '1.6',
              WebkitHyphens: 'auto',
              hyphens: 'auto',
              textRendering: 'geometricPrecision',
            }}>
                With over 47 experienced professionals, we are a full-service project management and infrastructure solutions company. Our expertise spans project management, information, MEP servi
                ces, renovation, and safety & security. We specialize in delivering end-to-end solutions, ensuring efficiency, compliance, and quality in every project we undertake.
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
                      <p 
                        className="text-neutral-600" 
                        style={{ 
                          textAlign: 'justify',
                          textJustify: 'auto',
                          wordSpacing: '-0.05em',
                          letterSpacing: '-0.01em',
                          lineHeight: '1.6',
                          WebkitHyphens: 'auto',
                          hyphens: 'auto',
                          textRendering: 'geometricPrecision',
                          fontOpticalSizing: 'auto',
                          fontKerning: 'normal',
                          textSizeAdjust: '100%',
                        }}
                      >
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

      {/* What We Offer SECTION */}
      <section id="industries" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-neutral-800">What We Offer</h2>
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
                  <p className="text-gray-300 group-hover:text-neutral-800 transition-colors duration-500 text-sm" style={{ 
              textAlign: 'justify',
              textJustify: 'auto',
              wordSpacing: '-0.05em',
              letterSpacing: '-0.01em',
              lineHeight: '1.6',
              WebkitHyphens: 'auto',
              hyphens: 'auto',
              textRendering: 'geometricPrecision',
            }}>
                    {industry.overview}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Leadership Statement - Removed from here and moved to Certificates section */}
          
        </div>
      </section>

      {/* SOME OF OUR CLIENTS SECTION */}
      <section id="clients" className="py-20 px-4 bg-gradient-to-b from-white to-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-neutral-800">Our Partners & Suppliers</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              We work with trusted partners to deliver exceptional results for our clients
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[13, 14, 15, 16, 17, 18].map((logoNumber) => (
              <div
                key={logoNumber}
                className="flex items-center justify-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                <img
                  src={`./images/clients/logo${logoNumber}.png`}
                  alt={`Partner Logo ${logoNumber}`}
                  className="max-w-full h-auto object-contain"
                  style={{ maxHeight: '80px' }}
                />
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
              Ready to elevate your building's safety and structural integrity?<br/>
              Contact our team of experts today for professional engineering solutions.
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
                    <p>Farwaniya, Block 1</p>
                    <p>Ali Aldowaila Street</p>
                    <p>Al Jary Center</p>
                    <p>Floor 5</p>
                    <a 
                      href="https://www.google.com/maps/dir//Ali+Fahed+Al-Dewailah+Street,+Al+Farwaniyah+81025,+Kuwait/@29.2826063,47.8797259,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3fcf9b5464ac0d81:0xfe20ce186fba25f3!2m2!1d47.9621273!2d29.2826316?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-3 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      View on Google Maps
                    </a>
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
                      className="text-neutral-800 hover:underline font-medium"
                    >
                      www.joint-circle.com
                    </a>
                  </div>
                </div>
                
                {/* Social Media Icons */}
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-bold mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-[#3b5998] hover:opacity-80 transition-opacity">
                      <Facebook size={24} />
                    </a>
                    <a href="#" className="text-[#c32aa3] hover:opacity-80 transition-opacity">
                      <Instagram size={24} />
                    </a>
                    <a href="#" className="text-[#1da1f2] hover:opacity-80 transition-opacity">
                      <Twitter size={24} />
                    </a>
                    <a href="#" className="text-[#000000] hover:opacity-80 transition-opacity">
                      <div className="w-6 h-6">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div className="flex space-x-4 mt-3">
                    <a href="#" className="text-[#ff0000] hover:opacity-80 transition-opacity">
                      <Youtube size={24} />
                    </a>
                    <a href="#" className="text-[#0088cc] hover:opacity-80 transition-opacity">
                      <div className="w-6 h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                        </svg>
                      </div>
                    </a>
                    <a href="#" className="text-[#25D366] hover:opacity-80 transition-opacity">
                      <div className="w-6 h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path fillRule="evenodd" clipRule="evenodd" d="M20.452 3.551C18.212 1.31 15.211 0.003 12.05 0.003C5.428 0.003 0.035 5.396 0.035 12.018C0.035 14.143 0.612 16.233 1.787 18.001L0 24.003L6.242 22.253C7.936 23.342 9.965 23.916 12.042 23.916H12.05C18.672 23.916 24.065 18.523 24.065 11.901C24.065 8.74 22.758 5.739 20.452 3.551ZM12.05 21.921H12.042C10.215 21.921 8.431 21.368 6.886 20.356L6.538 20.149L2.835 21.165L3.883 17.578L3.648 17.211C2.532 15.613 1.938 13.762 1.938 11.85C1.938 6.439 6.471 1.998 12.058 1.998C14.678 1.998 17.148 3.075 18.999 5.009C20.849 6.943 21.934 9.413 21.926 12.033C21.926 17.452 17.661 21.921 12.05 21.921ZM17.482 14.525C17.189 14.366 15.729 13.647 15.452 13.554C15.184 13.455 14.993 13.413 14.794 13.714C14.602 14.015 14.033 14.683 13.867 14.875C13.701 15.074 13.535 15.091 13.241 14.925C11.271 13.94 9.997 13.169 8.715 10.916C8.364 10.306 8.944 10.356 9.485 9.274C9.578 9.082 9.536 8.915 9.468 8.765C9.401 8.614 8.838 7.154 8.604 6.56C8.371 5.982 8.138 6.057 7.963 6.049C7.797 6.041 7.606 6.041 7.414 6.041C7.223 6.041 6.913 6.108 6.645 6.4C6.377 6.701 5.608 7.42 5.608 8.889C5.608 10.357 6.662 11.776 6.804 11.968C6.946 12.167 8.829 15.082 11.729 16.367C13.734 17.217 14.544 17.284 15.603 17.134C16.249 17.041 17.415 16.407 17.648 15.712C17.881 15.025 17.881 14.431 17.814 14.314C17.748 14.198 17.557 14.131 17.265 13.972L17.482 14.525Z" />
                        </svg>
                      </div>
                    </a>
                    <a href="#" className="text-[#0077b5] hover:opacity-80 transition-opacity">
                      <Linkedin size={24} />
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
                alt="Joint Circle Company"
                className="h-36 w-auto mb-4 transform transition-all duration-500 hover:scale-110 hover:rotate-2"
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
            <p>&copy; {new Date().getFullYear()} Joint Circle. Powerd by Ghost.</p>
          </div>
        </div>
      </footer>

      {/* ANIMATION STYLES - Add transition for navbar */}
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
        .transition-width {
          transition-property: width;
        }
        
        /* Enhanced navbar styling */
        nav {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        /* Logo styling enhancements */
        nav img {
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
        }
        
        /* Backdrop blur support */
        .backdrop-blur-md {
          backdrop-filter: blur(12px);
        }
        
        .backdrop-blur-lg {
          backdrop-filter: blur(16px);
        }
      `}</style>
    </div>
  );
};

export default ATMSecurityLanding;
