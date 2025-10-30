
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Download, ChevronDown, ChevronUp, ExternalLink, GraduationCap, BookOpen, Award, Users, Code, Database, Smartphone, Brain, Shield, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState, useMemo, memo } from "react";
import { SiHackerrank, SiLeetcode } from "react-icons/si";
import { FaPython, FaJava, FaCuttlefish, FaHackerrank } from 'react-icons/fa';
import { SiC, SiFlutter, SiDjango, SiFirebase, SiMysql, SiTensorflow, SiFigma, SiDart, SiHtml5, SiCss3, SiFlask, SiMongodb } from 'react-icons/si';
import { TbBrandHackerrank } from "react-icons/tb";
import { DiPostgresql } from "react-icons/di";


import { skillsByDomain, projects, certificates, memberships, internships, publications, navLinks, socialLinks, resumeLink, auroraConfigs } from "./data.jsx";

// Utility to map iconName string to actual React component
const iconMap = {
  SiC,
  FaPython,
  FaJava,
  SiDart,
  SiHtml5,
  SiCss3,
  SiFlutter,
  SiDjango,
  SiFlask,
  SiMysql,
  DiPostgresql,
  SiMongodb,
  SiFirebase,
  SiTensorflow,
  SiFigma,
  FaCuttlefish,
  Github,
  Linkedin,
  Mail,
  TbBrandHackerrank,
  SiLeetcode,
  FaHackerrank,
  // Add more as needed
};

function getIcon(iconName, props) {
  const Icon = iconMap[iconName];
  return Icon ? <Icon {...props} /> : null;
}

// Full Screen Animated Background Component - Optimized
const FullScreenBackground = memo(() => {
  const particles = Array.from({ length: 30 }, (_, i) => i); // Reduced from 50
  const dotGrid = Array.from({ length: 80 }, (_, i) => i); // Reduced from 150
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated Dot Grid Pattern */}
      {dotGrid.map((i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1 h-1 bg-[#00FF00] rounded-full"
          style={{
            left: `${(i % 10) * 10}%`,
            top: `${Math.floor(i / 10) * 12.5}%`,
          }}
          animate={{
            opacity: [0.1, 0.5, 0.1],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 3 + (i % 5),
            repeat: Infinity,
            delay: (i % 10) * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Large Floating Orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#00FF00]/15 rounded-full blur-[100px]"
          animate={{
            x: [0, 200, -100, 0],
            y: [0, 150, -50, 0],
            scale: [1, 1.3, 0.9, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#00BFFF]/20 rounded-full blur-[120px]"
          animate={{
            x: [0, -150, 100, 0],
            y: [0, -100, 150, 0],
            scale: [1, 1.2, 1.1, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 w-[450px] h-[450px] bg-[#00FF00]/12 rounded-full blur-[100px]"
          animate={{
            x: [0, -100, 150, 0],
            y: [0, 100, -80, 0],
            scale: [1, 1.15, 1.05, 1]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] bg-[#00BFFF]/15 rounded-full blur-[110px]"
          animate={{
            x: [0, 120, -80, 0],
            y: [0, -120, 90, 0],
            scale: [1, 1.25, 0.95, 1]
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      {/* Floating Particles */}
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-[#00FF00] rounded-full shadow-[0_0_10px_#00FF00]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 2, 0]
          }}
          transition={{
            duration: 4 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Matrix Rain Effect */}
      {Array.from({ length: 15 }, (_, i) => (
        <motion.div
          key={`rain-${i}`}
          className="absolute w-px h-32 bg-gradient-to-b from-transparent via-[#00FF00]/40 to-transparent"
          style={{
            left: `${(i * 100) / 15}%`,
          }}
          animate={{
            y: ['-100%', '200vh']
          }}
          transition={{
            duration: 8 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        />
      ))}
      
      {/* Scanning Lines */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00FF00]/8 to-transparent h-40"
        animate={{
          y: ['-20%', '120%']
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Pulsing Ring Effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="absolute w-32 h-32 border-2 border-[#00FF00]/20 rounded-full"
          animate={{
            scale: [1, 3, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-32 h-32 border-2 border-[#00BFFF]/30 rounded-full"
          animate={{
            scale: [1, 4, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 2,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
});

// Animated Background Component (for sections) - Optimized
const AnimatedBackground = memo(({ variant = 'default' }) => {
  const particles = Array.from({ length: 15 }, (_, i) => i); // Reduced from 20
  const sectionDots = Array.from({ length: 25 }, (_, i) => i); // Reduced from 40
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Dot Pattern for Sections */}
      {sectionDots.map((i) => (
        <motion.div
          key={`section-dot-${i}`}
          className="absolute w-0.5 h-0.5 bg-[#00FF00] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 2, 1]
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Floating Orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-[#00FF00]/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-72 h-72 bg-[#00BFFF]/15 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-56 h-56 bg-[#00FF00]/8 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 80, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      {/* Floating Particles */}
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#00FF00] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Scanning Lines */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00FF00]/5 to-transparent h-32"
        animate={{
          y: ['-100%', '200%']
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
});

export default function Portfolio() {
  // Utility functions for cleaner code
  const getColorClasses = (isGreen, type = 'default') => {
    const base = isGreen ? { primary: '#00FF00', secondary: '#00BFFF', bg1: '#001a00', bg2: '#001a0a' } 
                         : { primary: '#00BFFF', secondary: '#00FF00', bg1: '#001a0a', bg2: '#001a00' };

    const styles = {
      certificate: {
        border: `border-[${base.primary}]/30`, bg: `bg-gradient-to-br from-[${base.primary}]/5 to-[${base.bg1}]/40`,
        iconBg: `bg-[${base.primary}]/15`, iconColor: `text-[${base.primary}]`,
        titleColor: `text-[${base.primary}]`, dateColor: `text-[${base.secondary}]`,
        shadow: `shadow-[0_0_20px_rgba(${isGreen ? '0,255,65' : '255,16,240'},0.1)]`
      },
      membership: {
        primaryColor: base.primary, bgGradient: `from-[${base.primary}]/10 via-transparent to-[${base.primary}]/5`,
        iconBg: `bg-[${base.primary}]/20`, iconColor: `text-[${base.primary}]`,
        titleColor: `text-[${base.primary}]`, badge: `bg-[${base.primary}] text-black`
      },
      publication: {
        accent: base.primary, secondary: base.secondary,
        bgCard: `bg-gradient-to-r from-[${base.bg1}]/20 via-[${isGreen ? '#001a0a' : '#001a00'}]/40 to-[${base.bg2}]/20`,
        border: `border-l-[${base.primary}] border-t-[${base.primary}]/30 border-r-[${base.primary}]/30 border-b-[${base.primary}]/30`,
        iconBg: `bg-[${base.primary}]/15`, iconColor: `text-[${base.primary}]`,
        titleColor: `text-[${base.primary}]`, statusBg: `bg-[${base.primary}]/10`,
        statusColor: `text-[${base.primary}]`, quoteBg: `bg-[${base.primary}]/5`
      },
      project: {
        primary: base.primary, secondary: base.secondary,
        cardBg: `bg-gradient-to-br from-[${base.bg1}]/30 via-[${base.bg2}]/20 to-[${base.bg1}]/30`,
        borderGlow: `border-[${base.primary}]/20 hover:border-[${base.primary}]/60`,
        iconBg: `bg-[${base.primary}]/15`, iconColor: `text-[${base.primary}]`,
        titleColor: `text-[${base.primary}]`, techColor: `text-[${base.secondary}]`,
        shadow: `shadow-[0_8px_32px_rgba(${isGreen ? '0,255,65' : '255,16,240'},0.15)]`,
        glow: `group-hover:shadow-[0_0_40px_rgba(${isGreen ? '0,255,65' : '255,16,240'},0.3)]`
      }
    };
    return styles[type] || styles.certificate;
  };

  const createMotionDiv = (initial = {}, whileInView = {}, transition = {}) => ({
    initial: { opacity: 0, ...initial },
    whileInView: { opacity: 1, ...whileInView },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.6, ease: 'easeOut', ...transition }
  });

  // Paste your Google Drive share link below to embed + download
  const resolveResumeLinks = (link) => {
    const local = { previewUrl: "/Dhamodharan_Resume.pdf", downloadUrl: "/Dhamodharan_Resume.pdf" };
    if (!link) return local;
    try {
      let id = null;
  const m = link.match(/\/d\/([a-zA-Z0-9_-]{10,})/);
      if (m && m[1]) id = m[1];
      if (!id) {
        const u = new URL(link);
        id = u.searchParams.get("id") || u.searchParams.get("fileId");
      }
      if (!id) return local;
      return {
        previewUrl: `https://drive.google.com/file/d/${id}/preview`,
        downloadUrl: `https://drive.google.com/uc?export=download&id=${id}`,
      };
    } catch {
      return local;
    }
  };
  const { previewUrl: resumePreviewUrl, downloadUrl: resumeDownloadUrl } = resolveResumeLinks("https://drive.google.com/file/d/1Egp24nAfganUMIbaUT7ABiS_DrzvvoDZ/view?usp=sharing");
  const NAV_OFFSET = 76;
  const [showScrollTop, setShowScrollTop] = useState(false);
  const SkillChip = memo(({ skill }) => (
    <motion.div className="flex items-center gap-2 px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-xl border border-[#00FF00]/20 shadow text-center cursor-pointer flex-shrink-0 bg-gradient-to-r from-[#001400] to-[#003320] text-gray-100 will-change-transform"
      whileHover={{ scale: 1.08, backgroundColor: '#00FF00', borderColor: '#00FF00', color: '#ffffff', boxShadow: '0 0 16px rgba(0,255,0,0.35), 0 0 12px rgba(0,128,255,0.25)' }}
      transition={{ duration: 0.2, ease: 'easeOut' }}>
      <span className="text-lg md:text-xl lg:text-xl flex-shrink-0 w-5 md:w-6 lg:w-6 h-5 md:h-6 lg:h-6 flex items-center justify-center text-[#00FF00]">{getIcon(skill.iconName)}</span>
      <span className="font-semibold text-sm md:text-base lg:text-base flex-shrink-0 whitespace-nowrap">{skill.name}</span>
    </motion.div>
  ));


  const marqueeRef = useRef(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const resumeMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);
  useEffect(() => {
    const handlers = {
      mousedown: (e) => {
        if (resumeMenuRef.current && !resumeMenuRef.current.contains(e.target)) setResumeOpen(false);
        if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) setMobileMenuOpen(false);
      },
      keydown: (e) => {
        if (e.key === 'Escape') {
          setResumeOpen(false);
          setMobileMenuOpen(false);
        }
      },
      scroll: () => setShowScrollTop(window.scrollY > 300)
    };
    Object.entries(handlers).forEach(([event, handler]) => window.addEventListener(event, handler));
    return () => Object.entries(handlers).forEach(([event, handler]) => window.removeEventListener(event, handler));
  }, []);
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) {
      console.warn(`Element with id "${id}" not found`);
      return;
    }

    // Close mobile menu if open
    setMobileMenuOpen(false);
    
    // Calculate the target position
    const navHeight = 80; // Navbar height
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - navHeight;
    
    // Use native smooth scroll with fallback
    try {
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } catch (e) {
      // Fallback for older browsers
      const targetY = offsetPosition;
      const startY = window.scrollY;
      const distance = targetY - startY;
      const duration = 800;
      let startTime = null;

      const easeInOutCubic = (t) => {
        return t < 0.5 
          ? 4 * t * t * t 
          : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animateScroll = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = easeInOutCubic(progress);

        window.scrollTo(0, startY + distance * ease);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
  <div
    className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#001a00] via-[#003320] to-[#001a00] text-gray-100 select-none"
    style={{ touchAction: 'pan-y', overscrollBehaviorX: 'none', overscrollBehaviorY: 'none' }}
  >
      {/* Full Screen Background Animation */}
      <FullScreenBackground />
      
      {/* Top Navbar */}
  <nav className="fixed top-0 left-0 right-0 z-30 bg-gradient-to-r from-[#001a00]/80 via-[#003320]/80 to-[#001a00]/80 backdrop-blur-md border-b border-white/10">
        <div className="w-full px-4 md:px-6 lg:px-4 h-16 flex items-center justify-between" >
          <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 text-[#00FF00] font-semibold hover:text-[#00BFFF] transition group">
            <svg width="40" height="40" viewBox="0 0 40 40" className="flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
              <defs><linearGradient id="simpleGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#00FF00" /><stop offset="100%" stopColor="#00BFFF" /></linearGradient></defs>
              <rect x="4" y="4" width="32" height="32" rx="8" ry="8" fill="rgba(0,255,0,0.1)" stroke="url(#simpleGradient)" strokeWidth="2" />
              <text x="16" y="26" fontFamily="'Georgia', serif" fontSize="18" fontWeight="600" fill="url(#simpleGradient)" textAnchor="middle">T</text>
              <text x="24" y="26" fontFamily="'Georgia', serif" fontSize="18" fontWeight="600" fill="url(#simpleGradient)" textAnchor="middle">D</text>
              <line x1="12" y1="30" x2="28" y2="30" stroke="url(#simpleGradient)" strokeWidth="1" opacity="0.6" />
            </svg>
          </button>
          <div className="hidden md:flex items-center gap-4 lg:gap-6 text-gray-200">
            {navLinks.map(l => (
              <a key={l.id} href={`#${l.id}`} onClick={(e)=>{e.preventDefault(); scrollToSection(l.id)}} className="hover:text-[#00BFFF] text-sm lg:text-base">{l.label}</a>
            ))}
            <div className="relative" ref={resumeMenuRef}>
              <button
                onClick={()=>setResumeOpen(v=>!v)}
                aria-haspopup="menu"
                aria-expanded={resumeOpen}
                className="inline-flex items-center gap-1 px-3 py-1 rounded bg-gradient-to-r from-[#00FF00] to-[#00CC00] hover:from-[#00CC00] hover:to-[#00FF00] text-black border border-white/10 transition-colors"
              >
                Resume <span className={`transition-transform ${resumeOpen ? 'rotate-180' : ''}`}><ChevronDown size={16} /></span>
              </button>
              {resumeOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className="absolute right-0 mt-2 w-44 origin-top-right rounded-md border border-white/10 bg-[#00161f]/95 backdrop-blur-md shadow-lg z-50"
                >
                  <a href={resumePreviewUrl} onClick={()=>setResumeOpen(false)} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-3 py-2 text-gray-200 hover:bg-[#00BFFF]/20"><ExternalLink size={16} className="text-[#00FF00] group-hover:text-[#00BFFF]"/> Preview</a>
                  <hr className="my-0.5 mx-auto w-[90%] border-t border-white/10" />
                  <a href={resumeDownloadUrl} onClick={()=>setResumeOpen(false)} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-3 py-2 text-gray-200 hover:bg-[#00BFFF]/20"><Download size={16} className="text-[#00FF00] group-hover:text-[#00BFFF]"/> Download</a>
                </motion.div>
              )}
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#00FF00] hover:text-[#00BFFF] transition-colors p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/10 bg-[#001a00]/95 backdrop-blur-md"
          >
            <div className="px-4 py-3 space-y-2">
              {navLinks.map(l => (
                <a 
                  key={l.id} 
                  href={`#${l.id}`} 
                  onClick={(e) => {
                    e.preventDefault(); 
                    scrollToSection(l.id);
                    setMobileMenuOpen(false);
                  }} 
                  className="block py-2 px-3 text-gray-200 hover:text-[#00BFFF] hover:bg-[#00BFFF]/15 rounded transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-2 border-t border-white/10 space-y-2">
                <a 
                  href={resumePreviewUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 py-2 px-3 text-gray-200 hover:text-[#00FF00] hover:bg-[#00FF00]/10 rounded transition-colors"
                >
                  <ExternalLink size={16} /> Preview Resume
                </a>
                <a 
                  href={resumeDownloadUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 py-2 px-3 text-gray-200 hover:text-[#00FF00] hover:bg-[#00FF00]/10 rounded transition-colors"
                >
                  <Download size={16} /> Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    {/* Background layers */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Soft spotlight */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[120vmax] h-[120vmax] bg-[radial-gradient(closest-side,rgba(0,255,0,0.12),rgba(0,128,255,0.10)_45%,transparent_70%)]" />

        {/* Subtle grid with radial fade */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
          }}
        />

        {/* Aurora beams */}
        {auroraConfigs.map((a, i) => (
          <div key={i} className={a.cls} style={{ background: a.bg, animationDelay: a.delay, ['--r']: a.r }} />
        ))}

        {/* Twinkling stars */}
        <div
          className="absolute inset-0 twinkle opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,0.8), transparent 50%), radial-gradient(1.5px 1.5px at 70% 40%, rgba(255,255,255,0.7), transparent 50%), radial-gradient(2px 2px at 40% 80%, rgba(255,255,255,0.8), transparent 50%), radial-gradient(1.5px 1.5px at 80% 70%, rgba(255,255,255,0.7), transparent 50%), radial-gradient(1.5px 1.5px at 30% 60%, rgba(255,255,255,0.6), transparent 50%)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%'
          }}
        />
      </div>
    {/* Header */}
  <header id="home" className="relative pt-4 pb-4 md:pt-6 md:pb-6 lg:pt-8 lg:pb-8 px-4 md:px-8 lg:px-12 mt-16 text-center w-full bg-gradient-to-r from-[#001a00] via-[#003320] to-[#001a00] text-white shadow-xl overflow-hidden">
        {/* Animated Background Component */}
        <AnimatedBackground />
        
        {/* Additional Animated Background Effects */}
        <div className="hidden md:block absolute inset-0 pointer-events-none opacity-25">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#00FF00]/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#00BFFF]/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="flex flex-col items-center gap-2 relative z-10">
          <motion.h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight" whileHover={{ scale: 1.1 , transition:{duration:0.3} }}>Dhamodharan T</motion.h1>
        </div>
  <motion.p style={{ color: "#00FF00" }}  className="text-sm md:text-base lg:text-lg mt-2 leading-snug relative z-10">Mobile Application Developer | AI & ML Engineer | UI/UX Designer</motion.p>
        <div className="flex justify-center gap-3 md:gap-5 lg:gap-4 mt-4 relative z-10">
          {socialLinks.map((s, i) => (
            <div key={i} className="relative group">
              <motion.a 
                whileHover={{ scale: 1.4, transition: { duration: 0.3 }, color: "#00FF00" }} 
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg md:text-xl lg:text-2xl"
              >
                {getIcon(s.iconName, { size: 22 })}
              </motion.a>
              {/* Tooltip */}
              <div className="absolute -top-10 md:-top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs md:text-sm px-2 md:px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </header>

      {/* About / Hero with large profile image */}
  <section id="about" className="relative px-4 md:px-8 lg:px-12 py-8 md:py-10 lg:py-12 w-full overflow-hidden">
        {/* Animated Background Component */}
        <AnimatedBackground />
        
        {/* Additional Animated Background Effects */}
        <div className="hidden md:block absolute inset-0 pointer-events-none opain b city-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00FF00]/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00BFFF]/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="grid items-center gap-6 md:gap-8 lg:gap-10 md:grid-cols-2 relative z-10">
          {/* Large profile image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative mx-auto w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px]"
          >
            <div
              className="absolute inset-0 rounded-2xl p-[1.5px] shadow-2xl"
              style={{
                background:
                  'linear-gradient(135deg, rgba(0,255,0,0.8), rgba(0,191,255,0.7), rgba(0,255,0,0.8))',
              }}
            >
      <div className="h-full w-full rounded-2xl overflow-hidden bg-black/40 backdrop-blur-sm">
                  <img
                    src="/DhamodharanPic.jpg"
                    alt="Dhamodharan profile"
        className="h-full w-full object-cover"
        draggable={false}
                    onError={(e) => (e.currentTarget.src = '/profile-placeholder.svg')}
                  />
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-semibold mb-4 text-[#00FF00]">About Me</h2>
            <p className="text-gray-300 text-sm md:text-base lg:text-base leading-relaxed">
              Passionate developer with experience in Mobile App Development, Machine Learning, IoT, and UI/UX Design.
              I enjoy building interactive, real-time applications and polished user experiences.
            </p>
          </motion.div>
        </div>
      </section>

    {/* Skills */}
  <section id="skills" className="relative px-0 py-8 md:py-10 lg:py-12 w-full bg-gradient-to-r from-[#001a00] via-[#003320] to-[#001a00] overflow-hidden">
    {/* Animated Background Component */}
    <AnimatedBackground />
    
    {/* Additional Animated Background Effects */}
    <div className="hidden md:block absolute inset-0 pointer-events-none opacity-30">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00FF00]/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00BFFF]/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12 md:mb-16 relative"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 bg-gradient-to-r from-[#00FF00] via-[#00BFFF] to-[#00FF00] bg-clip-text text-transparent flex items-center justify-center gap-3 animate-gradient-x">
        <span className="inline-block animate-bounce"><svg width='32' height='32' viewBox='0 0 24 24' fill='none'><path d='M12 2L15 8H9L12 2Z' fill='#00FF00'/><path d='M12 22L9 16H15L12 22Z' fill='#00BFFF'/><circle cx='12' cy='12' r='4' fill='url(#techGradient)'/><defs><linearGradient id='techGradient' x1='8' y1='8' x2='16' y2='16' gradientUnits='userSpaceOnUse'><stop stopColor='#00FF00'/><stop offset='1' stopColor='#00BFFF'/></linearGradient></defs></svg></span>
        Tech Stack
      </h2>
    </motion.div>

    {/* Domain-based Skills Layout with Network Animation */}
    <div className="w-full space-y-12 md:space-y-16 px-4 md:px-8 lg:px-12">
      {skillsByDomain.map((domain, domainIndex) => {
        const DomainIcon = { Code, Database, Smartphone, Brain }[domain.icon] || Code;
        const skillCount = domain.skills.length;
        
        return (
          <motion.div
            key={domainIndex}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: domainIndex * 0.15 }}
            className="relative"
          >
            {/* Domain Header */}
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="p-2 md:p-3 rounded-lg bg-gradient-to-br from-[#00FF00]/20 to-[#00BFFF]/20 border border-[#00FF00]/30"
              >
                <DomainIcon className="w-5 h-5 md:w-6 md:h-6 text-[#00FF00]" />
              </motion.div>
              <h3 className="text-xl md:text-2xl font-bold text-transparent bg-gradient-to-r from-[#00FF00] to-[#00BFFF] bg-clip-text">
                {domain.domain}
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-[#00FF00]/30 via-[#00BFFF]/30 to-transparent ml-4"></div>
            </div>

            {/* Skills Grid Container for this Domain */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10 relative justify-items-center">

                {domain.skills.map((skill, skillIndex) => {
                  const delay = window.innerWidth < 768 ? skillIndex * 0.02 : skillIndex * 0.08;
                  return (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ 
                        duration: 0.6, 
                        delay, 
                        type: "spring", 
                        stiffness: 100 
                      }}
                      whileHover={{ 
                        scale: 1.15, 
                        y: -12,
                        rotateZ: 5,
                        boxShadow: `0 12px 50px ${skill.brightColor || skill.color}90`,
                        transition: { duration: 0.2 } 
                      }}
                      className="relative group mx-auto w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#0f172a] border-[3px] shadow-2xl flex flex-col items-center justify-center overflow-visible cursor-pointer"
                      style={{ 
                        borderColor: `${skill.brightColor || skill.color}40`,
                        willChange: 'transform',
                        perspective: '1000px'
                      }}
                    >
                      {/* Pulsing Outer Ring */}
                      <motion.div 
                        className="absolute -inset-2 rounded-full pointer-events-none z-0 opacity-0 group-hover:opacity-100"
                        style={{
                          background: `radial-gradient(circle, ${skill.brightColor || skill.color}60 0%, transparent 70%)`,
                          filter: 'blur(16px)'
                        }}
                        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />

                      {/* Rotating Ring Animation */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-dashed opacity-30 group-hover:opacity-70"
                        style={{ borderColor: skill.brightColor || skill.color }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      />

                      {/* Orbiting Particles */}
                      <motion.div
                        className="absolute w-2 h-2 rounded-full"
                        style={{ 
                          backgroundColor: skill.brightColor || skill.color,
                          boxShadow: `0 0 10px ${skill.brightColor || skill.color}`
                        }}
                        animate={{
                          x: [0, 40, 0, -40, 0],
                          y: [0, -40, 0, 40, 0],
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: skillIndex * 0.2 }}
                      />

                      {/* Floating Icon with 3D effect */}
                      <motion.div
                        className="text-3xl md:text-4xl lg:text-5xl mb-1 relative z-10"
                        style={{ color: skill.brightColor || skill.color }}
                        whileHover={{ 
                          y: -8, 
                          scale: 1.25, 
                          rotateY: 180
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                      >
                        {getIcon(skill.iconName)}
                      </motion.div>

                      {/* Skill Name - Always Visible */}
                      <motion.span
                        className="text-[9px] md:text-[10px] font-extrabold text-center leading-tight relative z-10 tracking-wider px-2"
                        style={{
                          color: skill.brightColor || skill.color,
                          textShadow: `0 0 8px ${skill.brightColor || skill.color}60, 0 0 12px ${skill.brightColor || skill.color}30`,
                          WebkitTextStroke: '0.2px rgba(255,255,255,0.15)'
                        }}
                        animate={{ opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        {skill.name}
                      </motion.span>

                      {/* Enhanced Tooltip on Hover */}
                      <motion.div
                        className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full text-xs font-black whitespace-nowrap backdrop-blur-md opacity-0 group-hover:opacity-100 z-20 pointer-events-none"
                        style={{
                          backgroundColor: `${skill.brightColor || skill.color}25`,
                          border: `2px solid ${skill.brightColor || skill.color}`,
                          color: skill.brightColor || skill.color,
                          boxShadow: `0 0 25px ${skill.brightColor || skill.color}70, inset 0 0 15px ${skill.brightColor || skill.color}30`,
                          textShadow: `0 0 10px ${skill.brightColor || skill.color}`
                        }}
                        initial={{ y: 10, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {skill.name}
                      </motion.div>

                      {/* Energy Pulse Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full pointer-events-none"
                        style={{
                          border: `1px solid ${skill.brightColor || skill.color}`,
                          opacity: 0.3
                        }}
                        animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: skillIndex * 0.15 }}
                      />
                    </motion.div>
                  );
                })}
            </div>
          </motion.div>
        );
      })}
    </div>
  </section>

    {/* Academics */}
    <section id="academics" className="relative px-4 md:px-8 lg:px-12 py-8 md:py-10 lg:py-12 w-full overflow-hidden">
      {/* Background Effects - No AnimatedBackground here for contrast */}
      <div className="hidden md:block absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#00BFFF]/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#00FF00]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-xl md:text-2xl lg:text-2xl font-semibold text-center mb-6 md:mb-8 text-[#00FF00] hover:underline decoration-[#00FF00] relative z-10"
      >
        Academic Journey
      </motion.h2>

      <div className="space-y-4 md:space-y-6 relative z-10">
        {/* Current Education */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-start gap-3 md:gap-4 p-4 md:p-5 lg:p-6 rounded-xl bg-gradient-to-r from-[#001400]/60 to-[#003320]/60 border border-[#00FF00]/20"
        >
          <div className="flex-shrink-0 w-10 md:w-11 lg:w-12 h-10 md:h-11 lg:h-12 rounded-full bg-[#00FF00]/20 flex items-center justify-center">
            <GraduationCap className="w-5 md:w-5 lg:w-6 h-5 md:h-5 lg:h-6 text-[#00FF00]" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg md:text-lg lg:text-xl font-semibold text-[#00FF00] mb-2">Bachelor of Engineering</h3>
            <p className="text-base md:text-base lg:text-lg text-gray-200 mb-1">Computer Science and Engineering (Artificial Intelligence and Machine Learning)</p>
            <p className="text-gray-300 mb-2 text-sm md:text-sm lg:text-base">KPR Institute of Engineering and Technology</p>
            <p className="text-xs md:text-xs lg:text-sm text-gray-400">CGPA : 8.99</p>
            <p className="text-xs md:text-xs lg:text-sm text-gray-400">2023 - Present • Expected 2027</p>
          </div>
        </motion.div>

        {/* Higher Secondary */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="flex items-start gap-3 md:gap-4 p-4 md:p-5 lg:p-6 rounded-xl bg-gradient-to-r from-[#003320]/60 to-[#001400]/60 border border-[#00BFFF]/30"
        >
          <div className="flex-shrink-0 w-10 md:w-11 lg:w-12 h-10 md:h-11 lg:h-12 rounded-full bg-[#00BFFF]/25 flex items-center justify-center">
            <BookOpen className="w-5 md:w-5 lg:w-6 h-5 md:h-5 lg:h-6 text-[#00BFFF]" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg md:text-lg lg:text-xl font-semibold text-[#00BFFF] mb-2">Higher Secondary Certificate</h3>
            <p className="text-base md:text-base lg:text-lg text-gray-200 mb-1">Biology Stream (TN Stateboard)</p>
            <p className="text-gray-300 mb-2 text-sm md:text-sm lg:text-base">Sri Vidya Mandir Senior Secondary School</p>
            <p className="text-sm text-gray-400">2021 - 2023 • 91.7%</p>
          </div>
        </motion.div>

        {/* Secondary */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="flex items-start gap-3 md:gap-4 p-4 md:p-5 lg:p-6 rounded-xl bg-gradient-to-r from-[#001400]/60 to-[#003320]/60 border border-[#00FF00]/20"
        >
          <div className="flex-shrink-0 w-10 md:w-11 lg:w-12 h-10 md:h-11 lg:h-12 rounded-full bg-[#00FF00]/20 flex items-center justify-center">
            <Award className="w-5 md:w-5 lg:w-6 h-5 md:h-5 lg:h-6 text-[#00FF00]" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg md:text-lg lg:text-xl font-semibold text-[#00FF00] mb-2">Secondary School Certificate</h3>
            <p className="text-base md:text-base lg:text-lg text-gray-200 mb-1">CBSE</p>
            <p className="text-gray-300 mb-2 text-sm md:text-sm lg:text-base">Sri Vidya Mandir Senior Secondary School</p>
            <p className="text-xs md:text-xs lg:text-sm text-gray-400">2020 - 2021 • 88.9%</p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Internships */}
    <section id="internships" className="relative px-4 md:px-8 lg:px-12 py-8 md:py-10 lg:py-12 w-full overflow-hidden">
      {/* Background Effects - No AnimatedBackground here for contrast */}
      <div className="hidden md:block absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00FF00]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#00BFFF]/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <motion.h2 {...createMotionDiv({initial: {y: 24}, whileInView: {y: 10}})}
        className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-6 md:mb-8 text-[#00BFFF] relative z-10">
        Internship Experience
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6 relative z-10">
        {internships.map((intern, index) => {
          const colorClasses = getColorClasses(intern.color === 'green', 'certificate');
          const borderColor = intern.color === 'green' ? 'border-[#00FF00]/30' : 'border-[#00BFFF]/40';
          return (
            <motion.div
              key={intern.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-4 md:p-5 lg:p-6 rounded-2xl ${colorClasses.bg} border-2 ${borderColor} ${colorClasses.shadow} hover:shadow-2xl transition-all duration-300 group`}
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${colorClasses.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Award className={`w-6 h-6 ${colorClasses.iconColor}`} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-lg md:text-xl font-bold ${colorClasses.titleColor} mb-1`}>{intern.role}</h3>
                  <p className="text-base md:text-lg font-semibold text-gray-200 mb-1">{intern.company}</p>
                  <p className={`text-sm ${colorClasses.dateColor} mb-3`}>{intern.duration}</p>
                  <p className="text-sm md:text-base text-gray-300 mb-3">{intern.description}</p>
                  {intern.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {intern.technologies.split(',').map((tech, i) => (
                        <span key={i} className={`text-xs px-2 py-1 rounded-full ${colorClasses.iconBg} ${colorClasses.iconColor}`}>
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>

    {/* Certificates */}
    <section id="certificates" className="relative px-4 md:px-8 lg:px-12 py-8 md:py-10 lg:py-12 w-full overflow-hidden">
      {/* Animated Background Component */}
      <AnimatedBackground />
      
      {/* Additional Animated Background Effects */}
      <div className="hidden md:block absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00BFFF]/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00FF00]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <motion.h2 {...createMotionDiv({initial: {y: 24}, whileInView: {y: 0}})}
        className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-6 md:mb-8 text-[#00FF00] relative z-10">
        Certificates & Achievements
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-5 lg:gap-6 max-w-4xl mx-auto relative z-10">
        {certificates.map((cert, index) => {
          const colorClasses = getColorClasses(cert.color === 'green', 'certificate');
          const isGreen = cert.color === 'green';

          return (
            <motion.div key={cert.id} {...createMotionDiv({initial: {scale: 0.9}, whileInView: {scale: 1}, transition: {duration: 0.5, delay: index * 0.1}})}
              whileHover={{ scale: 1.03, y: -5 }}
              className={`relative overflow-hidden p-4 md:p-5 lg:p-6 rounded-2xl ${colorClasses.bg} ${colorClasses.border} ${colorClasses.shadow} hover:shadow-xl transition-all duration-300 group`}>

              <div className={`absolute top-0 right-0 w-16 h-16 ${isGreen ? 'bg-[#00FF00]/10' : 'bg-[#00BFFF]/15'} rounded-bl-3xl`}></div>

              <div className="relative z-10">
                <div className={`w-12 md:w-13 lg:w-14 h-12 md:h-13 lg:h-14 rounded-2xl ${colorClasses.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Award className={`w-6 md:w-6 lg:w-7 h-6 md:h-6 lg:h-7 ${colorClasses.iconColor}`} />
                </div>

                <h3 className={`text-lg font-bold ${colorClasses.titleColor} mb-2 line-clamp-2`}>{cert.title}</h3>
                <p className="text-gray-300 font-semibold text-sm mb-2">{cert.issuer}</p>
                <p className="text-gray-400 text-xs mb-3 line-clamp-2">{cert.description}</p>

                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold ${colorClasses.dateColor} px-3 py-1 rounded-full ${isGreen ? 'bg-[#00FF00]/10' : 'bg-[#00BFFF]/15'}`}>
                    {cert.issueDate}
                  </span>
                  {cert.certificateUrl ? (
                    <a 
                      href={cert.certificateUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`w-8 h-8 rounded-full ${colorClasses.iconBg} flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity hover:scale-110`}
                      title="View Certificate"
                    >
                      <ExternalLink className={`w-4 h-4 ${colorClasses.iconColor}`} />
                    </a>
                  ) : (
                    <div className={`w-8 h-8 rounded-full ${colorClasses.iconBg} flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity`}>
                      <ExternalLink className={`w-4 h-4 ${colorClasses.iconColor}`} />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>

    {/* Membership */}
    <section id="membership" className="relative px-4 md:px-8 lg:px-12 py-8 md:py-10 lg:py-12 w-full overflow-hidden">
      {/* Background Effects - No AnimatedBackground here for contrast */}
      <div className="hidden md:block absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-[#00FF00]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '0.8s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-[#00BFFF]/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.8s' }} />
      </div>
      
      <motion.h2 {...createMotionDiv({initial: {y: 24}, whileInView: {y: 0}})}
        className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-6 md:mb-8 text-[#00BFFF] relative z-10">
        Professional Memberships
      </motion.h2>

      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto relative z-10">
        {memberships.map((membership, index) => {
          const colorClasses = getColorClasses(membership.color === 'green', 'membership');
          const IconComponent = membership.organization.includes('IEEE') ? Users : 
                              membership.organization.includes('Department') ? GraduationCap : Award;

          return (
            <motion.div key={membership.id} {...createMotionDiv({initial: {y: 30, rotateY: -15}, whileInView: {y: 0, rotateY: 0}, transition: {duration: 0.6, delay: index * 0.2}})}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className={`relative w-full md:flex-1 max-w-sm bg-gradient-to-br ${colorClasses.bgGradient} p-4 md:p-5 lg:p-6 rounded-3xl border-2 border-transparent bg-clip-padding transition-all duration-500 group perspective-1000`}
              style={{
                backgroundImage: `linear-gradient(135deg, ${colorClasses.primaryColor}20, transparent 50%, ${colorClasses.primaryColor}10)`,
                borderImage: `linear-gradient(135deg, ${colorClasses.primaryColor}40, ${colorClasses.primaryColor}20) 1`
              }}>

              <div className="absolute inset-0 opacity-5 rounded-3xl" 
                   style={{
                     backgroundImage: `radial-gradient(circle at 20% 50%, ${colorClasses.primaryColor} 2px, transparent 2px), radial-gradient(circle at 80% 50%, ${colorClasses.primaryColor} 1px, transparent 1px)`,
                     backgroundSize: '30px 30px, 20px 20px'
                   }}></div>

              <div className={`absolute -top-3 -right-3 w-6 h-6 ${colorClasses.badge} rounded-full flex items-center justify-center text-xs font-bold shadow-lg`}>✓</div>

              <div className="relative z-10 text-center">
                <div className={`relative w-20 h-20 mx-auto mb-4 rounded-full ${colorClasses.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                     style={{ boxShadow: `0 0 20px ${colorClasses.primaryColor}30` }}>
                  <IconComponent className={`w-10 h-10 ${colorClasses.iconColor}`} />
                  <div className={`absolute inset-0 rounded-full ${colorClasses.iconBg} animate-ping opacity-20`}></div>
                </div>

                <h3 className={`text-xl font-bold ${colorClasses.titleColor} mb-3 group-hover:scale-105 transition-transform duration-300`}>
                  {membership.title}
                </h3>

                <div className="space-y-2">
                  <p className="text-gray-300 text-sm font-medium leading-relaxed">{membership.organization}</p>
                  <div className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold ${colorClasses.badge} shadow-md`}>
                    <div className="w-2 h-2 rounded-full bg-current mr-2 animate-pulse"></div>
                    {membership.status}
                  </div>
                </div>
              </div>

              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                   style={{ background: `radial-gradient(circle at center, ${colorClasses.primaryColor}, transparent 70%)`, filter: 'blur(20px)' }}></div>
            </motion.div>
          );
        })}
      </div>
    </section>

    {/* Publications */}
    <section id="publications" className="relative px-4 md:px-8 lg:px-12 py-8 md:py-10 lg:py-12 w-full overflow-hidden">
      {/* Animated Background Component */}
      <AnimatedBackground />
      
      {/* Additional Animated Background Effects */}
      <div className="hidden md:block absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#00BFFF]/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '0.3s' }} />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#00FF00]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.3s' }} />
      </div>
      
      <motion.h2 {...createMotionDiv({initial: {y: 24}, whileInView: {y: 0}})}
        className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-6 md:mb-8 text-[#00FF00] relative z-10">
        Research Publications
      </motion.h2>

      <div className="space-y-4 md:space-y-6 lg:space-y-8 relative z-10">
        {publications.map((publication, index) => {
          const colorClasses = getColorClasses(publication.color === 'green', 'publication');

          return (
            <motion.article key={publication.id} {...createMotionDiv({initial: {x: index % 2 === 0 ? -50 : 50}, whileInView: {x: 0}, transition: {duration: 0.7, delay: index * 0.1}})}
              className={`relative p-4 md:p-6 lg:p-8 rounded-2xl ${colorClasses.bgCard} border-l-4 ${colorClasses.border} hover:shadow-2xl transition-all duration-500 group`}
              style={{ boxShadow: `0 10px 30px ${colorClasses.accent}10` }}>

              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-5 lg:gap-6">
                <div className={`flex-shrink-0 w-14 md:w-15 lg:w-16 h-14 md:h-15 lg:h-16 rounded-2xl ${colorClasses.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                     style={{ boxShadow: `0 0 20px ${colorClasses.accent}30` }}>
                  <BookOpen className={`w-7 md:w-7 lg:w-8 h-7 md:h-7 lg:h-8 ${colorClasses.iconColor}`} />
                </div>

                <div className="flex-1 space-y-4 min-w-0">
                  <h3 className={`text-lg md:text-lg lg:text-xl font-bold ${colorClasses.titleColor} leading-tight group-hover:scale-[1.02] transition-transform duration-300`}>
                    {publication.title}
                  </h3>

                  <div className={`${colorClasses.quoteBg} rounded-lg p-3 border-l-2`} style={{ borderColor: colorClasses.accent }}>
                    <p className="text-gray-300 text-sm font-medium italic">
                      <span className="text-gray-500">Authors:</span> {publication.authors}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full`} style={{ backgroundColor: colorClasses.accent }}></div>
                      <p className="text-gray-400 text-sm font-semibold">{publication.journal}</p>
                    </div>

                    {publication.book && (
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full`} style={{ backgroundColor: colorClasses.secondary }}></div>
                        <p className="text-gray-400 text-sm italic">Book: {publication.book}</p>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
                    <span className={`px-3 py-1 rounded-full font-bold`} style={{ backgroundColor: `${colorClasses.accent}20`, color: colorClasses.accent }}>
                      {publication.year}
                    </span>

                    {publication.volume !== "Under Review" && publication.volume !== "Book Chapter" && (
                      <span className="px-2 py-1 bg-gray-700 rounded">{publication.volume}</span>
                    )}

                    {publication.pages !== "--" && (
                      <span className="px-2 py-1 bg-gray-700 rounded">{publication.pages}</span>
                    )}

                    {publication.doi !== "Pending" && (
                      <span className="px-2 py-1 bg-blue-900/30 text-blue-300 rounded hover:bg-blue-800/30 cursor-pointer transition-colors">
                        DOI: {publication.doi}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold ${colorClasses.statusBg} ${colorClasses.statusColor} shadow-md`}>
                      <div className={`w-2 h-2 rounded-full mr-2 animate-pulse`} style={{ backgroundColor: colorClasses.accent }}></div>
                      {publication.status}
                    </span>

                    <div className="text-xs text-gray-500 italic">Research Publication</div>
                  </div>
                </div>
              </div>

              <div className={`absolute top-4 right-4 w-8 h-8 rounded-full opacity-20 group-hover:opacity-40 transition-opacity`} style={{ backgroundColor: colorClasses.accent }}></div>
              <div className={`absolute bottom-4 right-8 w-4 h-4 rounded-full opacity-10 group-hover:opacity-30 transition-opacity`} style={{ backgroundColor: colorClasses.secondary }}></div>
            </motion.article>
          );
        })}
      </div>
    </section>

    {/* Projects */}
    <section id="projects" className="relative px-4 md:px-8 lg:px-12 py-8 md:py-10 lg:py-12 w-full overflow-hidden">
      {/* Animated Background Component */}
      <AnimatedBackground />
      
      {/* Additional Animated Background Effects */}
      <div className="hidden md:block absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00FF00]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '0.6s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00BFFF]/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.6s' }} />
      </div>
      
      <motion.h2 {...createMotionDiv({initial: {y: 24}, whileInView: {y: 0}})}
        className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-8 md:mb-10 lg:mb-12 text-[#00FF00] relative z-10">
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 relative z-10">
        {projects.map((project, index) => {
          const isGreen = index % 2 === 0;
          const colorClasses = getColorClasses(isGreen, 'project');

          // Project-specific icons
          const getProjectIcon = (tech) => {
            if (tech.toLowerCase().includes('python')) return Brain;
            if (tech.toLowerCase().includes('flutter')) return Smartphone;
            if (tech.toLowerCase().includes('raspberry')) return Code;
            if (tech.toLowerCase().includes('prediction')) return BarChart3;
            if (tech.toLowerCase().includes('password')) return Shield;
            return Database;
          };

          const IconComponent = getProjectIcon(project.tech);

          return (
            <motion.div key={index} {...createMotionDiv({initial: {y: 40, scale: 0.95}, whileInView: {y: 0, scale: 1}, transition: {duration: 0.6, delay: index * 0.15}})}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative p-4 md:p-5 lg:p-6 rounded-3xl ${colorClasses.cardBg} border-2 ${isGreen ? 'border-[#00FF00]/30 hover:border-[#00FF00]/70' : 'border-[#00BFFF]/30 hover:border-[#00BFFF]/70'} ${colorClasses.shadow} hover:${colorClasses.glow} transition-all duration-500`}>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 ${isGreen ? 'bg-[#00FF00]' : 'bg-[#00BFFF]'}/5 rounded-bl-3xl rounded-tr-3xl`}></div>

              {/* Project number badge */}
              <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full ${isGreen ? 'bg-[#00FF00]' : 'bg-[#00BFFF]'} text-black flex items-center justify-center text-sm font-bold shadow-lg`}>
                {index + 1}
              </div>

              <div className="relative z-10">
                {/* Icon and title row */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-2xl ${colorClasses.iconBg} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                       style={{ boxShadow: `0 0 20px ${colorClasses.primary}30` }}>
                    <IconComponent className={`w-7 h-7 ${colorClasses.iconColor}`} />
                  </div>

                  <div className="flex-1">
                    <h3 className={`text-xl font-bold ${colorClasses.titleColor} mb-2 group-hover:scale-105 transition-transform duration-300 leading-tight`}>
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                  </div>
                </div>

                {/* Tech stack */}
                <div className="space-y-3">
                  <div className={`inline-flex items-center px-4 py-2 rounded-full ${isGreen ? 'bg-[#00FF00]' : 'bg-[#00BFFF]'}/15 border ${isGreen ? 'border-[#00FF00]' : 'border-[#00BFFF]'}/30`}>
                    <Code className={`w-4 h-4 ${colorClasses.techColor} mr-2`} />
                    <span className={`text-sm font-semibold ${colorClasses.techColor}`}>Tech Stack</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(', ').map((tech, techIndex) => (
                      <span key={techIndex} className={`px-3 py-1 text-xs font-medium rounded-full ${isGreen ? 'bg-[#00FF00]' : 'bg-[#00BFFF]'}/20 ${colorClasses.techColor} border ${isGreen ? 'border-[#00FF00]' : 'border-[#00BFFF]'}/40 hover:scale-105 transition-transform duration-200`}>
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-600/30">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <div className={`w-2 h-2 rounded-full ${isGreen ? 'bg-[#00FF00]' : 'bg-[#00BFFF]'} animate-pulse`}></div>
                    Featured Project
                  </div>

                  <div className="flex gap-3">
                    {project.projectUrl && (
                      <motion.a 
                        href={project.projectUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.95 }}
                        className={`w-10 h-10 rounded-full ${colorClasses.iconBg} flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}
                        title="View Project"
                      >
                        <ExternalLink className={`w-5 h-5 ${colorClasses.iconColor}`} />
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.95 }}
                        className={`w-10 h-10 rounded-full ${colorClasses.iconBg} flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}
                        title="View on GitHub"
                      >
                        <Github className={`w-5 h-5 ${colorClasses.iconColor}`} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${isGreen ? 'bg-[#00FF00]' : 'bg-[#00BFFF]'}`}></div>
            </motion.div>
          );
        })}
      </div>
    </section>

    {/* Contact */}
  <section id="contact" className="relative px-4 md:px-8 lg:px-12 py-6 md:py-8 lg:py-10 text-center w-full bg-gradient-to-r from-[#001a00] via-[#003320] to-[#001a00] overflow-hidden">
    {/* Animated Background Component */}
    <AnimatedBackground />
    
    {/* Additional Animated Background Effects */}
    <div className="hidden md:block absolute inset-0 pointer-events-none opacity-30">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00FF00]/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00BFFF]/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
    
  <h2 className="text-xl md:text-2xl lg:text-2xl font-semibold mb-4 text-[#00FF00] hover:underline decoration-[#00FF00] relative z-10">Contact</h2>
        <p className="text-sm md:text-base lg:text-base text-gray-300 relative z-10">Interested in collaborating? Let's connect!</p>
        <div className="mt-4 flex flex-col items-center gap-2 text-gray-300 relative z-10">
          <a href="tel:9025381459" className="inline-flex items-center gap-2 text-sm md:text-base text-[#00FF00] hover:text-[#00BFFF] transition-colors">
            <Phone size={18} />
            <span>Phone: 9025381459</span>
          </a>
          <p className="text-xs md:text-sm">KPR Institute of Engineering and Technology</p>
          <p className="text-xs md:text-sm">B.E CSE(AIML)</p>
        </div>
        <motion.div whileHover={{ scale: 1.1, transition: { duration: 0.3, ease: 'easeInOut' } }}>
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=dhamodharant17@gmail.com&su=Let's%20Connect&body=Hi%20Dhamodharan%2C%0A%0AI'd%20like%20to%20get%20in%20touch%20with%20you%20regarding...%0A%0ALooking%20forward%20to%20connecting%21%0A%0ABest%20regards"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-gradient-to-r from-[#00FF00] to-[#00BFFF] hover:from-[#00BFFF] hover:to-[#00FF00] text-black text-xs md:text-sm px-6 md:px-7 lg:px-8 py-2 rounded font-semibold transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </section>

    {/* Footer */}
  <footer className="p-4 text-center text-sm bg-gradient-to-r from-[#001a00] via-[#003320] to-[#001a00] text-gray-400">
        © 2025 Dhamodharan T.
      </footer>

      <style>{`
        /* Performance-optimized CSS */
        * { 
          box-sizing: border-box;
        }
        html { 
          scroll-behavior: smooth;
          overflow-x: hidden;
        }
        body { 
          -webkit-font-smoothing: antialiased; 
          -moz-osx-font-smoothing: grayscale;
          overflow-x: hidden;
        }

        /* Scroll Performance Optimizations */
        * {
          transform: translateZ(0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        /* Reduce animations during scroll */
        @media (prefers-reduced-motion: no-preference) {
          html {
            scroll-behavior: smooth;
          }
        }

        /* GPU acceleration for smooth scrolling */
        .overflow-hidden {
          will-change: scroll-position;
        }

        /* Skills marquee animation */
        .simple-marquee {
          width: 100%;
          overflow: hidden;
          -webkit-overflow-scrolling: touch;
        }
        .simple-marquee::-webkit-scrollbar {
          display: none;
        }
        .marquee-content {
          display: flex;
          gap: 1rem;
          animation: simpleScroll 60s linear infinite;
          width: max-content;
          user-select: none;
          will-change: transform;
          transform: translateZ(0);
        }
        @keyframes simpleScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Global drag safeguards */
        html, body { 
          overscroll-behavior: none; 
          touch-action: pan-y; 
        }
        img, a { -webkit-user-drag: none; }

        /* Animated background blobs - optimized */
        @keyframes blob {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20vw, -10vh) scale(1.2); }
          66% { transform: translate(-10vw, 10vh) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .blob { 
          animation: blob 22s ease-in-out infinite alternate;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        @media (prefers-reduced-motion: reduce) { .blob { animation: none; } }

        /* Aurora animation - optimized */
        @keyframes aurora {
          0% { transform: translateX(-8%) translateY(0) rotate(var(--r, 15deg)); opacity: 0.6; }
          50% { transform: translateX(6%) translateY(3%) rotate(var(--r, 15deg)); opacity: 0.8; }
          100% { transform: translateX(-4%) translateY(-2%) rotate(var(--r, 15deg)); opacity: 0.6; }
        }
        .aurora { 
          filter: blur(80px); 
          mix-blend-mode: screen; 
          animation: aurora 20s ease-in-out infinite;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        @media (prefers-reduced-motion: reduce) { .aurora { animation: none; } }

        /* Stars twinkle - optimized */
        @keyframes twinkle { 
          0%,100% { opacity: .25 } 
          50% { opacity: .45 } 
        }
        .twinkle { 
          animation: twinkle 6s ease-in-out infinite;
        }

        /* Float animation - optimized */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        /* Disable heavy animations on mobile for better performance */
        @media (max-width: 768px) {
          .blob, .aurora { 
            animation: none !important; 
          }
        }

        /* Responsive optimizations */
        @media (max-width: 640px) {
          .simple-marquee { -webkit-overflow-scrolling: auto; }
          .marquee-content { gap: 0.75rem; }
        }

        /* Tablet optimizations */
        @media (min-width: 641px) and (max-width: 1024px) {
          .simple-marquee { -webkit-overflow-scrolling: touch; }
          .marquee-content { gap: 0.875rem; }
          h1 { font-size: clamp(1.75rem, 4vw, 2rem); }
          h2 { font-size: clamp(1.5rem, 3.5vw, 1.75rem); }
        }

        /* GPU acceleration for animations */
        .group-hover\:scale-105:hover {
          transform: scale(1.05);
          will-change: transform;
        }
      `}</style>
    </div>
  );
}

