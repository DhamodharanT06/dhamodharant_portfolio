
import { Github, Linkedin, Mail, Phone, Download, ChevronDown, ChevronUp, ExternalLink, GraduationCap, BookOpen, Award, Users, Code, Database, Smartphone, Brain, Shield, BarChart3, Clock, Briefcase, X } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState, useMemo, memo } from "react";
import { SiHackerrank, SiLeetcode } from "react-icons/si";
import { FaPython, FaJava, FaCuttlefish, FaHackerrank, FaGit, FaGithub } from 'react-icons/fa';
import { SiC, SiFlutter, SiDjango, SiFirebase, SiAndroidstudio,SiMysql, SiTensorflow, SiFigma, SiDart, SiHtml5, SiCss3, SiFlask, SiMongodb, SiJavascript, SiFastapi, SiPytorch, SiKeras } from 'react-icons/si';
import { TbBrandHackerrank } from "react-icons/tb";
import { DiPostgresql } from "react-icons/di";

import { skillsByDomain, projects, certificates, memberships, internships, publications, navLinks, socialLinks, resumeLink, auroraConfigs, academics } from "./data.jsx";
import PublicationCard from "./src/components/PublicationCard.jsx";
import SocialCard from "./src/components/SocialCard.jsx";

// Utility to map iconName string to actual React component
const iconMap = {
  SiC,
  FaPython,
  FaJava,
  SiDart,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFlutter,
  SiFastapi,
  SiDjango,
  SiFlask,
  SiMysql,
  DiPostgresql,
  SiMongodb,
  SiFirebase,
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiAndroidstudio,
  SiFigma,
  FaCuttlefish,
  FaGithub,
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

// Project Details Popover Component
const ProjectDetailsPopover = ({ project, isOpen, onClose, position }) => {
  if (!isOpen) return null;

  // Calculate center position of the section
  let centerTop = window.innerHeight / 2;
  let centerLeft = window.innerWidth / 2;
  
  if (position) {
    // Position dialog near the button, centered in section
    centerTop = position.top + (position.height / 2);
    centerLeft = position.left + (position.width / 2);
  }

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
      />
      
      {/* Dialog Box - Centered in section - Responsive */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0, y: -20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.7, opacity: 0, y: -20 }}
        transition={{ type: "spring", stiffness: 400, damping: 35 }}
        onClick={(e) => e.stopPropagation()}
        className="fixed z-50 max-h-[90vh] overflow-y-auto p-3 sm:p-4 md:p-4"
        style={{
          width: window.innerWidth < 640 ? 'calc(100% - 24px)' : window.innerWidth < 1024 ? 'calc(100% - 40px)' : '90%',
          maxWidth: window.innerWidth < 640 ? '340px' : window.innerWidth < 1024 ? '500px' : '900px',
          top: `${centerTop*0.95}px`,
          // left: `30%`,
          height: window.innerWidth < 640 ? '4%' : '90%',
          left: window.innerWidth < 640 ? '10px' : window.innerWidth < 1024 ? '20%' : '20%',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 80px rgba(0, 217, 255, 0.3), inset 0 0 40px rgba(0, 217, 255, 0.1)'
        }}
      >
        <div 
          className="bg-gradient-to-br from-[#0A0A0A] to-[#000000] border-2 border-[#00D9FF]/40 rounded-xl p-8 shadow-2xl relative"
          style={{ boxShadow: '0 0 80px rgba(0, 217, 255, 0.3), inset 0 0 40px rgba(0, 217, 255, 0.1)' }}
        >
            {/* Gradient accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#00D9FF]/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#0891B2]/10 rounded-full blur-3xl -z-10" />

          {/* Close Button */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.15, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#00D9FF]/15 flex items-center justify-center hover:bg-[#00D9FF]/30 transition-all duration-300 border border-[#00D9FF]/30 z-50"
          >
            <X className="w-6 h-6 text-[#00D9FF]" />
          </motion.button>

          {/* Content */}
          <div className="space-y-5">
            {/* Title Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#00D9FF] to-[#0891B2] bg-clip-text text-transparent mb-2">
                {project.title}
              </h2>
              <p className="text-gray-300 text-base">{project.description}</p>
            </motion.div>

            <div className="h-px bg-gradient-to-r from-[#00D9FF]/30 to-transparent" />

            {/* Full Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <h3 className="text-lg font-semibold text-[#00D9FF] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00D9FF]"></span>
                About This Project
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">{project.fullDescription}</p>
            </motion.div>

            {/* Features */}
            {project.features && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-[#00D9FF] mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00D9FF]"></span>
                  Key Features
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + idx * 0.04 }}
                      className="flex items-start gap-2 text-gray-300 text-sm bg-[#00D9FF]/5 rounded-lg p-2 border border-[#00D9FF]/20"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF] mt-1.5 flex-shrink-0"></span>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <h3 className="text-lg font-semibold text-[#00D9FF] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0891B2]"></span>
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.split(', ').map((tech, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.25 + idx * 0.03 }}
                    className="px-4 py-2 bg-gradient-to-r from-[#00D9FF]/20 to-[#0891B2]/20 border border-[#00D9FF]/40 rounded-full text-sm text-[#00D9FF] font-semibold hover:shadow-lg hover:shadow-[#00D9FF]/30 transition-all duration-300"
                  >
                    {tech.trim()}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-3 pt-4 border-t border-gray-600/30"
            >
              {project.projectUrl && (
                <motion.a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-[#00D9FF]/20 to-[#00D9FF]/10 border border-[#00D9FF]/50 rounded-xl text-[#00D9FF] font-bold hover:bg-gradient-to-r hover:from-[#00D9FF]/30 hover:to-[#00D9FF]/20 hover:shadow-lg hover:shadow-[#00D9FF]/30 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </motion.a>
              )}
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-[#0891B2]/20 to-[#0891B2]/10 border border-[#0891B2]/50 rounded-xl text-[#0891B2] font-bold hover:bg-gradient-to-r hover:from-[#0891B2]/30 hover:to-[#0891B2]/20 hover:shadow-lg hover:shadow-[#0891B2]/30 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                >
                  <FaGithub className="w-4 h-4" />
                  GitHub
                </motion.a>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

// Certificate Details Dialog Component
const CertificateDetailsDialog = ({ certificate, isOpen, onClose, position }) => {
  if (!isOpen) return null;

  // Calculate center position of the section
  let centerTop = window.innerHeight / 2;
  let centerLeft = window.innerWidth / 2;
  
  if (position) {
    // Position dialog near the button, centered in section
    centerTop = position.top + (position.height / 2);
    centerLeft = position.left + (position.width / 2);
  }

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
      />
      
      {/* Dialog Box - Centered in section - Responsive */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0, y: -20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.7, opacity: 0, y: -20 }}
        transition={{ type: "spring", stiffness: 400, damping: 35 }}
        onClick={(e) => e.stopPropagation()}
        className="fixed z-50 max-h-[90vh] overflow-y-auto p-3 sm:p-4 md:p-4"
        style={{
          width: window.innerWidth < 640 ? 'calc(100% - 24px)' : window.innerWidth < 1024 ? 'calc(100% - 40px)' : '90%',
          height: window.innerWidth < 640 ? '4%' : '90%',
          maxWidth: window.innerWidth < 640 ? '340px' : window.innerWidth < 1024 ? '500px' : '1000px',
          top: `${centerTop*0.95}px`,
          // left: `30%`,
          // height: window.innerWidth < 640 ? '4%' : '90%',
          left: window.innerWidth < 640 ? '10px' : window.innerWidth < 1024 ? '20%' : '20%',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 80px rgba(0, 217, 255, 0.3), inset 0 0 40px rgba(0, 217, 255, 0.1)'
        }}
      >
        <div 
          className="bg-gradient-to-br from-[#0A0A0A] to-[#000000] border-2 border-[#00D9FF]/40 rounded-xl p-8 shadow-2xl relative"
          style={{ boxShadow: '0 0 80px rgba(0, 217, 255, 0.3), inset 0 0 40px rgba(0, 217, 255, 0.1)' }}
        >
          {/* Gradient accent */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#00D9FF]/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#0891B2]/10 rounded-full blur-3xl -z-10" />

          {/* Close Button */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.15, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#00D9FF]/15 flex items-center justify-center hover:bg-[#00D9FF]/30 transition-all duration-300 border border-[#00D9FF]/30 z-50"
          >
            <X className="w-6 h-6 text-[#00D9FF]" />
          </motion.button>

          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.15, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#00D9FF]/15 flex items-center justify-center hover:bg-[#00D9FF]/30 transition-all duration-300 border border-[#00D9FF]/30"
          >
            <X className="w-6 h-6 text-[#00D9FF]" />
          </motion.button>

          {/* Content */}
          <div className="space-y-6">
            {/* Title Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#00D9FF] to-[#0891B2] bg-clip-text text-transparent mb-2">
                {certificate.title}
              </h2>
              <p className="text-gray-300 text-base font-semibold">{certificate.issuer}</p>
            </motion.div>

            <div className="h-px bg-gradient-to-r from-[#00D9FF]/30 to-transparent" />

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <h3 className="text-lg font-semibold text-[#00D9FF] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00D9FF]"></span>
                About This Certificate
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">{certificate.description}</p>
            </motion.div>

            {/* Certificate Preview */}
            {certificate.certificateUrl && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-[#00D9FF] mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0891B2]"></span>
                  Certificate Preview
                </h3>
                <div className="rounded-2xl overflow-hidden border-2 border-[#00D9FF]/30 bg-gray-900/50 p-4">
                  <iframe
                    src={certificate.certificateUrl.replace('/view', '/preview')}
                    className="w-full h-80 rounded-lg border border-gray-600/30"
                    title={certificate.title}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              </motion.div>
            )}

            {/* Issue Date */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="flex items-center gap-3 p-3 bg-[#00D9FF]/10 rounded-xl border border-[#00D9FF]/30"
            >
              <span className="w-2 h-2 rounded-full bg-[#00D9FF]"></span>
              <span className="text-gray-300 text-sm">
                <span className="text-[#00D9FF] font-semibold">Issued:</span> {certificate.issueDate}
              </span>
            </motion.div>

            {/* Action Button */}
            {certificate.certificateUrl && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex gap-3 pt-2"
              >
                <motion.a
                  href={certificate.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-[#00D9FF]/20 to-[#00D9FF]/10 border border-[#00D9FF]/50 rounded-xl text-[#00D9FF] font-bold hover:bg-gradient-to-r hover:from-[#00D9FF]/30 hover:to-[#00D9FF]/20 hover:shadow-lg hover:shadow-[#00D9FF]/30 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Full Size
                </motion.a>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

// Full Screen Animated Background Component - Optimized
const FullScreenBackground = memo(() => {
  const particles = Array.from({ length: 30 }, (_, i) => i); // Reduced from 50
  const dotGrid = Array.from({ length: 80 }, (_, i) => i); // Reduced from 150
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 perf-layer" style={{contain: 'paint', transform: 'translateZ(0)'}}>
      {/* Animated Dot Grid Pattern */}
      {dotGrid.map((i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1 h-1 bg-[#00D9FF] rounded-full"
          style={{
            left: `${(i % 10) * 10}%`,
            top: `${Math.floor(i / 10) * 12.5}%`,
            willChange: 'transform, opacity'
          }}
          animate={{
            opacity: [0.1, 0.5, 0.1],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 3 + (i % 5),
            repeat: Infinity,
            delay: (i % 10) * 0.2,
            ease: "linear"
          }}
        />
      ))}
      
      {/* Large Floating Orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#00D9FF]/10 rounded-full blur-[100px]"
          style={{ willChange: 'transform' }}
          animate={{
            x: [0, 200, -100, 0],
            y: [0, 150, -50, 0],
            scale: [1, 1.3, 0.9, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#0891B2]/12 rounded-full blur-[120px]"
          style={{ willChange: 'transform' }}
          animate={{
            x: [0, -150, 100, 0],
            y: [0, -100, 150, 0],
            scale: [1, 1.2, 1.1, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 w-[450px] h-[450px] bg-[#001F26]/8 rounded-full blur-[100px]"
          style={{ willChange: 'transform' }}
          animate={{
            x: [0, -100, 150, 0],
            y: [0, 100, -80, 0],
            scale: [1, 1.15, 1.05, 1]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] bg-[#00D9FF]/10 rounded-full blur-[110px]"
          style={{ willChange: 'transform' }}
          animate={{
            x: [0, 120, -80, 0],
            y: [0, -120, 90, 0],
            scale: [1, 1.25, 0.95, 1]
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      {/* Floating Particles */}
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-[#00D9FF] rounded-full shadow-[0_0_10px_#00D9FF]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            willChange: 'transform, opacity'
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
            ease: "linear"
          }}
        />
      ))}
      
      {/* Matrix Rain Effect */}
      {Array.from({ length: 15 }, (_, i) => (
        <motion.div
          key={`rain-${i}`}
          className="absolute w-px h-32 bg-gradient-to-b from-transparent via-[#00D9FF]/30 to-transparent"
          style={{
            left: `${(i * 100) / 15}%`,
            willChange: 'transform'
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
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00D9FF]/5 to-transparent h-40"
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
          className="absolute w-32 h-32 border-2 border-[#00D9FF]/20 rounded-full"
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
          className="absolute w-32 h-32 border-2 border-[#0891B2]/25 rounded-full"
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
  <div className="absolute inset-0 overflow-hidden pointer-events-none perf-layer" style={{contain: 'paint', transform: 'translateZ(0)'}}>
      {/* Animated Dot Pattern for Sections */}
      {sectionDots.map((i) => (
        <motion.div
          key={`section-dot-${i}`}
          className="absolute w-0.5 h-0.5 bg-[#00D9FF] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            willChange: 'transform, opacity'
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 2, 1]
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "linear"
          }}
        />
      ))}
      
      {/* Floating Orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-[#00D9FF]/8 rounded-full blur-3xl"
          style={{ willChange: 'transform' }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-72 h-72 bg-[#0891B2]/10 rounded-full blur-3xl"
          style={{ willChange: 'transform' }}
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-56 h-56 bg-[#001F26]/6 rounded-full blur-3xl"
          style={{ willChange: 'transform' }}
          animate={{
            x: [0, -50, 0],
            y: [0, 80, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      {/* Floating Particles */}
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#00D9FF] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            willChange: 'transform, opacity'
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
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00D9FF]/5 to-transparent h-32"
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

// Contact Form Component
const ContactForm = () => {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    try {
      // Using FormSubmit - free service, no API key needed
      const formData2 = new FormData();
      formData2.append('name', formData.name);
      formData2.append('email', formData.email);
      formData2.append('subject', formData.subject);
      formData2.append('message', formData.message);
      formData2.append('_captcha', 'false'); // Disable captcha
      formData2.append('_template', 'box'); // Use box template

      const response = await fetch('https://formsubmit.co/dhamodharant17@gmail.com', {
        method: 'POST',
        body: formData2,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully! 🎉' });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again.' 
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-[#0A0A0A]/60 to-[#000000]/60 backdrop-blur-sm border border-[#00D9FF]/30 rounded-3xl p-6 md:p-8 shadow-2xl w-full max-w-lg mx-auto relative"
      style={{ boxShadow: '0 0 80px rgba(0, 217, 255, 0.15), inset 0 0 40px rgba(0, 217, 255, 0.05)' }}
    >
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
        {/* Name Field */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <label className="block text-gray-200 text-sm font-medium mb-2">Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="w-full px-4 py-3 bg-[#0A0A0A]/50 border border-[#00D9FF]/30 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:border-[#00D9FF] focus:ring-2 focus:ring-[#00D9FF]/20 transition-all duration-300"
          />
        </motion.div>

        {/* Email Field */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
        >
          <label className="block text-gray-200 text-sm font-medium mb-2">Your Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
            className="w-full px-4 py-3 bg-[#0A0A0A]/50 border border-[#00D9FF]/30 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:border-[#00D9FF] focus:ring-2 focus:ring-[#00D9FF]/20 transition-all duration-300"
          />
        </motion.div>

        {/* Subject Field */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <label className="block text-gray-200 text-sm font-medium mb-2">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Project Inquiry"
            className="w-full px-4 py-3 bg-[#0A0A0A]/50 border border-[#00D9FF]/30 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:border-[#00D9FF] focus:ring-2 focus:ring-[#00D9FF]/20 transition-all duration-300"
          />
        </motion.div>

        {/* Message Field */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
        >
          <label className="block text-gray-200 text-sm font-medium mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            placeholder="Write your message here..."
            className="w-full px-4 py-3 bg-[#0A0A0A]/50 border border-[#00D9FF]/30 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:border-[#00D9FF] focus:ring-2 focus:ring-[#00D9FF]/20 transition-all duration-300 resize-none"
          />
        </motion.div>

        {/* Status Message */}
        {submitStatus && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`p-4 rounded-xl border-2 text-center font-semibold ${
              submitStatus.type === 'success'
                ? 'bg-green-500/10 border-green-500/50 text-green-400'
                : 'bg-red-500/10 border-red-500/50 text-red-400'
            }`}
          >
            {submitStatus.message}
          </motion.div>
        )}

        {/* Send Button */}
        <motion.button
          type="submit"
          disabled={isLoading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: isLoading ? 1 : 1.05, boxShadow: isLoading ? 'none' : '0 0 40px rgba(0, 217, 255, 0.5)' }}
          whileTap={{ scale: isLoading ? 1 : 0.95 }}
          className={`w-full px-6 py-3 bg-gradient-to-r from-[#00D9FF] to-[#0891B2] hover:from-[#0891B2] hover:to-[#00D9FF] text-black font-bold rounded-xl transition-all duration-300 shadow-lg cursor-pointer ${
            isLoading ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </motion.button>

        {/* Alternative Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="pt-6 border-t border-[#00D9FF]/20 space-y-3"
        >
          <p className="text-gray-300 text-sm text-center">Or reach me directly:</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:9025381459" className="inline-flex items-center gap-2 text-[#00D9FF] hover:text-[#0891B2] transition-colors text-sm">
              <Phone size={18} />
              <span>9025381459</span>
            </a>
            <span className="hidden sm:inline text-gray-500">•</span>
            <a href="mailto:dhamodharant17@gmail.com" className="inline-flex items-center gap-2 text-[#00D9FF] hover:text-[#0891B2] transition-colors text-sm">
              <Mail size={18} />
              <span>dhamodharant17@gmail.com</span>
            </a>
          </div>
          <p className="text-xs text-gray-400 pt-2 text-center">KPR Institute of Engineering and Technology • B.E CSE(AIML)</p>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default function Portfolio() {
  // Utility functions for cleaner code
  const getColorClasses = (isGreen, type = 'default') => {
    const base = isGreen ? { primary: '#00D9FF', secondary: '#0891B2', bg1: '#000000', bg2: '#0A0A0A' } 
                         : { primary: '#00D9FF', secondary: '#0891B2', bg1: '#000000', bg2: '#0A0A0A' };
    // const base = isGreen ? { primary: '#00D9FF', secondary: '#0891B2', bg1: '#000000', bg2: '#0A0A0A' } 
    //                      : { primary: '#0891B2', secondary: '#00D9FF', bg1: '#0A0A0A', bg2: '#000000' };

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
        bgCard: `bg-gradient-to-r from-[${base.bg1}]/20 via-[${isGreen ? '#0A0A0A' : '#000000'}]/40 to-[${base.bg2}]/20`,
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
  const { previewUrl: resumePreviewUrl, downloadUrl: resumeDownloadUrl } = resolveResumeLinks(resumeLink);
  const NAV_OFFSET = 76;
  const [showScrollTop, setShowScrollTop] = useState(false);
  const SkillChip = memo(({ skill }) => (
    <motion.div className="flex items-center gap-2 px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-xl border border-[#00D9FF]/20 shadow text-center cursor-pointer flex-shrink-0 bg-gradient-to-r from-[#1E3A8A] to-[#0A0A0A] text-gray-100 will-change-transform"
      whileHover={{ scale: 1.08, backgroundColor: '#00D9FF', borderColor: '#00D9FF', color: '#ffffff', boxShadow: '0 0 16px rgba(0,217,255,0.35), 0 0 12px rgba(8,145,178,0.25)' }}
      transition={{ duration: 0.2, ease: 'easeOut' }}>
      <span className="text-lg md:text-xl lg:text-xl flex-shrink-0 w-5 md:w-6 lg:w-6 h-5 md:h-6 lg:h-6 flex items-center justify-center text-[#00D9FF]">{getIcon(skill.iconName)}</span>
      <span className="font-semibold text-sm md:text-base lg:text-base flex-shrink-0 whitespace-nowrap">{skill.name}</span>
    </motion.div>
  ));


  const marqueeRef = useRef(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [projectButtonPos, setProjectButtonPos] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [certificateDialogOpen, setCertificateDialogOpen] = useState(false);
  const [certButtonPos, setCertButtonPos] = useState(null);
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
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#000000] via-[#0A0A0A] to-[#000000] text-gray-100 select-none"
      style={{ touchAction: 'pan-y', overscrollBehaviorX: 'none', overscrollBehaviorY: 'none' }}
    >
      {/* Full Screen Background Animation */}
      <FullScreenBackground />
      
      {/* Top Navbar */}
  <nav className="fixed top-0 left-0 right-0 z-30 bg-gradient-to-r from-[#000000]/80 via-[#0A0A0A]/80 to-[#000000]/80 backdrop-blur-md border-b border-white/10">
        <div className="w-full px-4 md:px-6 lg:px-4 h-16 flex items-center justify-between" >
          <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 text-[#00D9FF] font-semibold hover:text-[#0891B2] transition group">
            <svg width="40" height="40" viewBox="0 0 40 40" className="flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
              <defs><linearGradient id="simpleGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#00D9FF" /><stop offset="100%" stopColor="#0891B2" /></linearGradient></defs>
              <rect x="4" y="4" width="32" height="32" rx="8" ry="8" fill="rgba(0,217,255,0.1)" stroke="url(#simpleGradient)" strokeWidth="2" />
              <text x="16" y="26" fontFamily="'Georgia', serif" fontSize="18" fontWeight="600" fill="url(#simpleGradient)" textAnchor="middle">T</text>
              <text x="24" y="26" fontFamily="'Georgia', serif" fontSize="18" fontWeight="600" fill="url(#simpleGradient)" textAnchor="middle">D</text>
              <line x1="12" y1="30" x2="28" y2="30" stroke="url(#simpleGradient)" strokeWidth="1" opacity="0.6" />
            </svg>
          </button>
          <div className="hidden md:flex items-center gap-4 lg:gap-6 text-gray-200">
            {navLinks.map(l => (
              <a key={l.id} href={`#${l.id}`} onClick={(e)=>{e.preventDefault(); scrollToSection(l.id)}} className="hover:text-[#0891B2] text-sm lg:text-base">{l.label}</a>
            ))}
            <div className="relative" ref={resumeMenuRef}>
              <button
                onClick={()=>setResumeOpen(v=>!v)}
                aria-haspopup="menu"
                aria-expanded={resumeOpen}
                className="inline-flex items-center gap-1 px-3 py-1 rounded bg-gradient-to-r from-[#00D9FF] to-[#00CC00] hover:from-[#00CC00] hover:to-[#00D9FF] text-black border border-white/10 transition-colors"
              >
                Resume <span className={`transition-transform ${resumeOpen ? 'rotate-180' : ''}`}><ChevronDown size={16} /></span>
              </button>
              {resumeOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className="absolute right-0 mt-2 w-44 origin-top-right rounded-md border border-white/10 bg-[#000000]/95 backdrop-blur-md shadow-lg z-50"
                >
                  <a href={resumePreviewUrl} onClick={()=>setResumeOpen(false)} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-3 py-2 text-gray-200 hover:bg-[#0891B2]/20"><ExternalLink size={16} className="text-[#00D9FF] group-hover:text-[#0891B2]"/> Preview</a>
                  <hr className="my-0.5 mx-auto w-[90%] border-t border-white/10" />
                  <a href={resumeDownloadUrl} onClick={()=>setResumeOpen(false)} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-3 py-2 text-gray-200 hover:bg-[#0891B2]/20"><Download size={16} className="text-[#00D9FF] group-hover:text-[#0891B2]"/> Download</a>
                </motion.div>
              )}
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#00D9FF] hover:text-[#0891B2] transition-colors p-2"
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
            className="md:hidden border-t border-white/10 bg-[#000000]/95 backdrop-blur-md"
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
                  className="block py-2 px-3 text-gray-200 hover:text-[#0891B2] hover:bg-[#0891B2]/15 rounded transition-colors"
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
                  className="flex items-center gap-2 py-2 px-3 text-gray-200 hover:text-[#00D9FF] hover:bg-[#00D9FF]/10 rounded transition-colors"
                >
                  <ExternalLink size={16} /> Preview Resume
                </a>
                <a 
                  href={resumeDownloadUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 py-2 px-3 text-gray-200 hover:text-[#00D9FF] hover:bg-[#00D9FF]/10 rounded transition-colors"
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
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[120vmax] h-[120vmax] bg-[radial-gradient(closest-side,rgba(0,217,255,0.12),rgba(8,145,178,0.10)_45%,transparent_70%)]" />

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
  <header id="home" className="relative pt-4 pb-4 md:pt-6 md:pb-6 lg:pt-8 lg:pb-8 px-4 md:px-8 lg:px-12 mt-16 text-center w-full bg-gradient-to-r from-[#000000] via-[#0A0A0A] to-[#000000] text-white shadow-xl overflow-hidden">
        {/* Animated Background Component */}
        <AnimatedBackground />
        
        {/* Additional Animated Background Effects */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none opacity-25">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-[80px]" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#0891B2]/15 rounded-full blur-[80px]" />
        </div>
        
        <div className="flex flex-col items-center gap-2 relative z-10">
          <h1 className="name-gradient-effect">Dhamodharan T</h1>
        </div>
  <motion.p style={{ color: "#00D9FF" }}  className="text-sm md:text-base lg:text-lg mt-2 leading-snug relative z-10">Mobile Application Developer | AI & ML Engineer | UI/UX Designer</motion.p>
        
        {/* Expandable Social Links Menu */}
        <div className="mt-6 relative z-10 flex justify-center">
          <div className="px-2 py-1 bg-[rgba(0,217,255,0.05)] rounded-lg border border-[rgba(0,217,255,0.15)] flex gap-1">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                title={link.label}
                className="group relative w-12 h-12 sm:w-14 sm:h-12 md:w-14 md:h-12 lg:w-14 lg:h-12 rounded-lg hover:w-28 sm:hover:w-32 md:hover:w-32 lg:hover:w-32 transition-all duration-250 ease-out flex items-center justify-center text-[#00D9FF] hover:bg-[rgba(0,217,255,0.15)]"
              >
                <span className="flex-shrink-0 left-3 sm:left-4 absolute">
                  {getIcon(link.iconName, { size: 18 })}
                </span>
                <span className="text-xs sm:text-sm font-medium whitespace-nowrap opacity-0 transform translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-250 ml-6 sm:ml-8">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* About / Hero with large profile image */}
      <div id="about" className="relative px-4 md:px-8 lg:px-12 py-8 md:py-10 lg:py-12 w-full overflow-hidden">
        {/* Animated Background Component */}
        <AnimatedBackground />
        
        {/* Additional Animated Background Effects */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0891B2]/15 rounded-full blur-[80px]" />
        </div>
        
        <div className="grid items-center gap-6 md:gap-8 lg:gap-10 md:grid-cols-2 relative z-10 about-grid">
          {/* Large profile image with 3D hover effect */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative mx-auto w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] card-3d-wrapper"
          >
            <div className="card-3d">
              <div
                className="absolute inset-0 rounded-2xl p-[1.5px] shadow-2xl"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(0,217,255,0.8), rgba(8,145,178,0.7), rgba(0,217,255,0.8))',
                }}
              >
                <div className="h-full w-full rounded-2xl overflow-hidden bg-black/40 backdrop-blur-sm">
                  <img
                    src="/DhamodharanPic.jpg"
                    alt="Dhamodharan profile"
                    className="h-full w-full object-cover image-3d"
                    draggable={false}
                    decoding="async"
                    style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
                    onError={(e) => (e.currentTarget.src = '/profile-placeholder.svg')}
                  />
                </div>
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
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-semibold mb-4 text-[#00D9FF]">About Me</h2>
            <p className="text-gray-300 text-sm md:text-base lg:text-base leading-relaxed">
              Passionate developer with experience in Mobile App Development, Machine Learning, IoT, and UI/UX Design.
              I enjoy building interactive, real-time applications and polished user experiences.
            </p>
          </motion.div>
        </div>
      </div>

    {/* Social Links Card
    <div className="relative px-4 md:px-8 lg:px-12 py-8 md:py-10 lg:py-12 w-full overflow-hidden">
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl bg-gradient-to-r from-[#000000] via-[#0A0A0A] to-[#000000] rounded-lg p-8 border border-[#00D9FF]/20 shadow-lg"
        >
          <h3 className="text-center text-xl md:text-2xl font-semibold mb-6 text-[#00D9FF]">Connect With Me</h3>
          <div className="flex justify-center">
            <div className="px-2 py-1 bg-[rgba(0,217,255,0.05)] rounded-lg border border-[rgba(0,217,255,0.15)] flex gap-1">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.label}
                  className="group relative w-12 h-12 sm:w-14 sm:h-12 md:w-14 md:h-12 lg:w-14 lg:h-12 rounded-lg hover:w-28 sm:hover:w-32 md:hover:w-32 lg:hover:w-32 transition-all duration-250 ease-out flex items-center justify-center text-[#00D9FF] hover:bg-[rgba(0,217,255,0.15)]"
                >
                  <span className="flex-shrink-0 left-3 sm:left-4 absolute">
                    {getIcon(link.iconName, { size: 18 })}
                  </span>
                  <span className="text-xs sm:text-sm font-medium whitespace-nowrap opacity-0 transform translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-250 ml-6 sm:ml-8">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div> */}

    {/* Skills */}
  <div id="skills" className="relative px-4 md:px-8 lg:px-12 py-12 md:py-14 lg:py-16 w-full bg-gradient-to-r from-[#000000] via-[#0A0A0A] to-[#000000] overflow-hidden min-h-[600px] md:min-h-[700px] flex flex-col justify-center">
    {/* Animated Background Component */}
    <AnimatedBackground />
    
    {/* Additional Animated Background Effects */}
    <div className="hidden md:block absolute inset-0 pointer-events-none opacity-15">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#0891B2]/12 rounded-full blur-[120px]" />
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-8 md:mb-10 relative z-10"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-[#00D9FF]">
        Tech Stack
      </h2>
      <p className="text-gray-400 text-sm md:text-base">Technologies I specialize in</p>
    </motion.div>

    {/* Skills Organized by Domain - 1,2,3 Column Layout */}
    <div className="w-full relative z-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {skillsByDomain.map((domain, domainIndex) => (
          <motion.div
            key={domainIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: domainIndex * 0.08 }}
            className="space-y-4 p-5 lg:p-6 rounded-xl border border-[#00D9FF]/20 bg-gradient-to-br from-[#0A0A0A]/40 to-[#000000]/40 backdrop-blur-sm hover:border-[#00D9FF]/40 transition-all duration-300"
          >
            {/* Domain Header */}
            <div className="flex items-center gap-3 pb-4 border-b border-[#00D9FF]/20">
              <div className="text-2xl lg:text-3xl text-[#00D9FF] flex-shrink-0">
                {getIcon(domain.icon)}
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-[#00D9FF] line-clamp-2">
                {domain.domain}
              </h3>
            </div>

            {/* Domain Skills Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: domainIndex * 0.08 + 0.15 }}
              className="grid grid-cols-3 sm:grid-cols-4 gap-2 lg:gap-3"
            >
              {domain.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ 
                    duration: 0.3, 
                    delay: skillIndex * 0.04,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -4,
                    transition: { duration: 0.2 } 
                  }}
                  className="flex flex-col items-center gap-1.5 p-2 rounded-lg border border-[#00D9FF]/20 bg-gradient-to-br from-[#0A0A0A]/60 to-[#000000]/60 hover:border-[#00D9FF]/50 hover:bg-gradient-to-br hover:from-[#0A0A0A]/80 hover:to-[#00D9FF]/25 transition-all duration-200 cursor-default"
                  title={skill.name}
                >
                  <motion.div
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="text-xl lg:text-2xl"
                    style={{ color: skill.color }}
                  >
                    {getIcon(skill.iconName)}
                  </motion.div>
                  <span className="text-[8px] lg:text-[9px] font-semibold text-center text-gray-300 leading-tight line-clamp-2">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>

    {/* Academics */}
    <div id="academics" className="relative px-4 md:px-8 lg:px-12 py-12 md:py-14 lg:py-16 w-full overflow-hidden bg-gradient-to-r from-[#000000] via-[#0A0A0A] to-[#000000]">
      {/* Animated Background Effects */}
      <AnimatedBackground />
      
      <div className="hidden md:block absolute inset-0 pointer-events-none opacity-15">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#0891B2]/12 rounded-full blur-[120px]" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8 md:mb-10 relative z-10"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-[#00D9FF]">
          Academic Journey
        </h2>
        <p className="text-gray-400 text-sm md:text-base">Education & Achievements</p>
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {academics.map((edu, index) => {
            const isCyan = edu.color === 'cyan';
            const accentColor = isCyan ? '#00D9FF' : '#0891B2';
            const borderColor = isCyan ? 'border-[#00D9FF]' : 'border-[#0891B2]';
            const bgGradient = isCyan ? 'from-[#00D9FF]/10' : 'from-[#0891B2]/10';
            const hoverBg = isCyan ? 'hover:from-[#00D9FF]/15' : 'hover:from-[#0891B2]/15';
            const badgeBg = isCyan ? 'bg-[#00D9FF]/20' : 'bg-[#0891B2]/20';
            const badgeText = isCyan ? 'text-[#00D9FF]' : 'text-[#0891B2]';
            const titleColor = isCyan ? 'text-[#00D9FF]' : 'text-[#0891B2]';
            const iconBg = isCyan ? 'bg-[#00D9FF]/15' : 'bg-[#0891B2]/15';
            const iconColor = isCyan ? 'text-[#00D9FF]' : 'text-[#0891B2]';

            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`relative group overflow-hidden rounded-2xl border-2 ${borderColor}/40 bg-gradient-to-br ${bgGradient} to-[#000000]/40 backdrop-blur-sm hover:border-[${accentColor}]/60 ${hoverBg} hover:to-[#000000]/60 transition-all duration-300 p-6 md:p-7`}
              >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl`} style={{ background: `radial-gradient(circle, ${accentColor}20, transparent 70%)` }} />
                </div>

                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r`} style={{ backgroundImage: `linear-gradient(to right, ${accentColor}40, transparent 50%, ${accentColor}20)` }} />

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Header with Icon */}
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-xl ${iconBg}`}>
                      {getIcon(edu.icon, { size: 24, color: accentColor })}
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${badgeBg} ${badgeText} whitespace-nowrap`}>
                      {edu.startYear} - {edu.endYear}
                    </span>
                  </div>

                  {/* Degree Title */}
                  <div>
                    <h3 className={`text-lg md:text-xl font-bold ${titleColor} mb-2 line-clamp-2`}>
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-gray-300 font-medium">{edu.field}</p>
                  </div>

                  {/* Specialization */}
                  {edu.specialization && (
                    <div className={`p-3 rounded-lg bg-[${accentColor}]/5 border border-[${accentColor}]/20`}>
                      <p className="text-xs text-gray-300 leading-relaxed">📚 {edu.specialization}</p>
                    </div>
                  )}

                  {/* Institution */}
                  <div className="pt-3 border-t border-white/10">
                    <p className="text-xs text-gray-400 mb-2">Institution</p>
                    <p className="text-sm text-gray-200 font-semibold line-clamp-2">{edu.institution}</p>
                  </div>

                  {/* Score Badge */}
                  <div className={`mt-4 pt-4 border-t border-white/10 flex items-center justify-between`}>
                    <span className="text-xs text-gray-400">Achievement</span>
                    <div className={`px-4 py-2 rounded-lg ${badgeBg} ${badgeText} text-sm font-bold shadow-lg`}>
                      {edu.cgpa ? `CGPA: ${edu.cgpa}` : `${edu.percentage}`}
                    </div>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className={`absolute bottom-0 right-0 w-20 h-20 rounded-tl-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-300`} style={{ background: `linear-gradient(135deg, ${accentColor}20, transparent)` }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>

    {/* Internships */}
    <div id="internships" className="relative px-4 md:px-8 lg:px-12 py-12 md:py-14 lg:py-16 w-full overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-[#0891B2]/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#00D9FF]/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8 md:mb-10 relative z-10"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-[#00D9FF]">
          Internship Experience
        </h2>
        <p className="text-gray-400 text-sm md:text-base">Professional work experience & skills gained</p>
      </motion.div>

      {/* Timeline Layout */}
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00D9FF] via-[#0891B2] to-transparent" />

        <div className="space-y-8 md:space-y-12">
          {internships.map((intern, index) => {
            const isBlueBg = intern.color === 'blue';
            
            return (
              <motion.div
                key={intern.id}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                className="relative md:pl-32 flex items-stretch"
              >
                {/* Timeline Dot */}
                <motion.div
                  className={`absolute left-5 top-8 hidden md:flex items-center justify-center w-7 h-7 rounded-full border-4 border-[#000000] z-30 ${
                    isBlueBg 
                      ? 'bg-gradient-to-br from-[#0891B2] to-[#0088FF] shadow-lg shadow-[#0891B2]/50' 
                      : 'bg-gradient-to-br from-[#00D9FF] to-[#00AA00] shadow-lg shadow-[#00D9FF]/50'
                  }`}
                  whileHover={{ scale: 1.03, boxShadow: isBlueBg ? '0 0 40px rgba(8,145,178,0.9)' : '0 0 40px rgba(0,217,255,0.9)' }}
                />

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-full group relative p-6 rounded-xl backdrop-blur-xl border-2 transition-all duration-300 overflow-hidden ${
                    isBlueBg
                      ? 'bg-gradient-to-br from-[#0051a3]/12 to-[#003366]/12 border-[#0891B2]/40 shadow-lg shadow-[#0891B2]/12 hover:shadow-2xl hover:shadow-[#0891B2]/30' 
                      : 'bg-gradient-to-br from-[#003300]/12 to-[#000000]/12 border-[#00D9FF]/40 shadow-lg shadow-[#00D9FF]/12 hover:shadow-2xl hover:shadow-[#00D9FF]/30'
                  }`}
                >
                  {/* Animated Background Glow */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
                      isBlueBg ? 'bg-gradient-to-r from-[#0891B2] to-[#0088FF]' : 'bg-gradient-to-r from-[#00D9FF] to-[#00AA00]'
                    }`}
                  />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <motion.div 
                        whileHover={{ scale: 1.02, rotate: 10 }}
                        className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 border-2 ${
                          isBlueBg 
                            ? 'bg-[#0051a3]/50 border-[#0891B2]/60' 
                            : 'bg-[#003300]/50 border-[#00D9FF]/60'
                        }`}
                      >
                        <Briefcase className={`w-6 h-6 ${isBlueBg ? 'text-[#0891B2]' : 'text-[#00D9FF]'}`} />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-bold mb-0.5 ${isBlueBg ? 'text-[#0891B2]' : 'text-[#00D9FF]'}`}>
                          {intern.role}
                        </h3>
                        <p className="text-gray-300 font-semibold text-sm">{intern.company}</p>
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className={`inline-flex items-center gap-1.5 mb-3 px-3 py-1.5 rounded-full text-xs font-bold border ${
                        isBlueBg 
                          ? 'bg-[#0051a3]/40 text-[#0891B2] border-[#0891B2]/40' 
                          : 'bg-[#003300]/40 text-[#00D9FF] border-[#00D9FF]/40'
                      }`}
                    >
                      <Clock size={14} />
                      {intern.duration}
                    </motion.div>

                    {/* Description */}
                    <p className="text-gray-200 text-sm mb-4 leading-relaxed font-medium">
                      {intern.description}
                    </p>

                    {/* Technologies */}
                    {intern.technologies && (
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                        {intern.technologies.split(',').map((tech, i) => (
                          <motion.span
                            key={i}
                            whileHover={{ scale: 1.02, y: -2 }}
                            className={`text-xs font-bold px-3 py-1 rounded-full transition-all duration-200 border ${
                              isBlueBg
                                ? 'bg-[#0051a3]/50 text-[#0891B2] border-[#0891B2]/60 hover:shadow-lg hover:shadow-[#0891B2]/40'
                                : 'bg-[#003300]/50 text-[#00D9FF] border-[#00D9FF]/60 hover:shadow-lg hover:shadow-[#00D9FF]/40'
                            }`}
                          >
                            {tech.trim()}
                          </motion.span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Corner Accent */}
                  <motion.div 
                    className={`absolute top-0 right-0 w-24 h-24 ${isBlueBg ? 'bg-gradient-to-bl from-[#0891B2]/10' : 'bg-gradient-to-bl from-[#00D9FF]/10'} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 10 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>

    {/* Certificates */}
    <div id="certificates" className="relative px-4 md:px-8 lg:px-12 py-8 md:py-10 lg:py-12 w-full overflow-hidden">
      {/* Animated Background Component */}
      <AnimatedBackground />
      
      {/* Additional Animated Background Effects */}
      <div className="hidden md:block absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0891B2]/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8 md:mb-10 relative z-10"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-[#00D9FF]">
          Certificates & Achievements
        </h2>
        <p className="text-gray-400 text-sm md:text-base">Professional certifications & recognitions</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-7 max-w-7xl mx-auto relative z-10">
        {certificates.map((cert, index) => {
          const colorClasses = getColorClasses(cert.color === 'green', 'certificate');
          const isGreen = cert.color === 'green';

          return (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setCertButtonPos({
                  top: rect.top + window.scrollY,
                  left: rect.left + window.scrollX,
                  height: rect.height,
                  width: rect.width,
                });
                setSelectedCertificate(cert);
                setCertificateDialogOpen(true);
              }}
              className="group cursor-pointer transform transition-all duration-500 relative overflow-hidden p-4 md:p-5 lg:p-6 rounded-2xl"
            >
              {/* Animated Background Effects */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <div className={`absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500 ${
                  isGreen 
                    ? 'bg-gradient-to-tr from-[#00D9FF]/5 to-[#00D9FF]/10' 
                    : 'bg-gradient-to-tr from-[#0891B2]/5 to-[#0891B2]/10'
                }`}></div>
                
                <div className={`absolute -bottom-20 -left-20 w-48 h-48 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700 animate-bounce ${
                  isGreen ? 'bg-gradient-to-tr from-[#00D9FF]/10 to-transparent' : 'bg-gradient-to-tr from-[#0891B2]/10 to-transparent'
                }`} style={{ animationDelay: '0.5s' }}></div>
                
                <div className={`absolute top-10 left-10 w-16 h-16 rounded-full blur-xl animate-ping ${
                  isGreen ? 'bg-[#00D9FF]/5' : 'bg-[#0891B2]/5'
                }`}></div>
                
                <div className={`absolute bottom-16 right-16 w-12 h-12 rounded-full blur-lg animate-ping ${
                  isGreen ? 'bg-[#00D9FF]/5' : 'bg-[#0891B2]/5'
                }`} style={{ animationDelay: '1s' }}></div>
                
                <div className={`absolute inset-0 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000 ${
                  isGreen 
                    ? 'bg-gradient-to-r from-transparent via-[#00D9FF]/5 to-transparent' 
                    : 'bg-gradient-to-r from-transparent via-[#0891B2]/5 to-transparent'
                }`}></div>
              </div>

              <div className={`absolute top-0 right-0 w-16 h-16 ${isGreen ? 'bg-[#00D9FF]/10' : 'bg-[#0891B2]/15'} rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className={`absolute bottom-0 left-0 w-16 h-16 ${isGreen ? 'bg-[#00D9FF]/10' : 'bg-[#0891B2]/15'} rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className={`relative z-10 ${colorClasses.bg} ${colorClasses.border} ${colorClasses.shadow} hover:shadow-xl transition-all duration-300`}>
                <div className={`w-12 md:w-13 lg:w-14 h-12 md:h-13 lg:h-14 rounded-2xl ${colorClasses.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Award className={`w-6 md:w-6 lg:w-7 h-6 md:h-6 lg:h-7 ${colorClasses.iconColor}`} />
                </div>

                <h3 className={`text-lg font-bold ${colorClasses.titleColor} mb-2 line-clamp-2`}>{cert.title}</h3>
                <p className="text-gray-300 font-semibold text-sm mb-2">{cert.issuer}</p>
                <p className="text-gray-400 text-xs mb-4 line-clamp-2">{cert.description}</p>

                {/* Mini Certificate Window Preview */}
                {/* {cert.certificateUrl && (
                  <div className="mb-4 rounded-lg overflow-hidden border border-gray-600/30 bg-gray-900/50">
                    <iframe
                      src={cert.certificateUrl.replace('/view', '/preview')}
                      className="w-full h-40 border-none"
                      title={cert.title}
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div> 
                 )} */}

                <div className="flex items-center justify-between gap-2">
                  <span className={`text-xs font-bold ${colorClasses.dateColor} px-3 py-1 rounded-full ${isGreen ? 'bg-[#00D9FF]/10' : 'bg-[#0891B2]/15'}`}>
                    {cert.issueDate}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg ${isGreen ? 'bg-[#00D9FF]/20 text-[#00D9FF] border border-[#00D9FF]/50 hover:bg-[#00D9FF]/30' : 'bg-[#0891B2]/20 text-[#0891B2] border border-[#0891B2]/50 hover:bg-[#0891B2]/30'} transition-colors flex items-center gap-2`}
                    title="View Details"
                  >
                    <span>View Details</span>
                    <ExternalLink className="w-3 h-3" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>

    {/* Membership */}
    <div id="membership" className="relative px-4 md:px-8 lg:px-12 py-8 md:py-10 lg:py-12 w-full overflow-hidden">
      {/* Background Effects - No AnimatedBackground here for contrast */}
      <div className="hidden md:block absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '0.8s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-[#0891B2]/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.8s' }} />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8 md:mb-10 relative z-10"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-[#00D9FF]">
          Professional Memberships
        </h2>
        <p className="text-gray-400 text-sm md:text-base">Industry affiliations & professional networks</p>
      </motion.div>

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
    </div>

    {/* Publications */}
    <div id="publications" className="relative px-4 md:px-8 lg:px-12 py-12 md:py-14 lg:py-16 w-full overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8 md:mb-10 relative z-10"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-[#00D9FF]">
          Research Publications
        </h2>
        <p className="text-gray-400 text-sm md:text-base">Peer-reviewed papers & academic contributions</p>
      </motion.div>

      {/* Publications Grid with Flip Cards */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {publications.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {publications.map((publication, index) => {
              const colorClasses = getColorClasses(publication.color === 'green', 'publication');
              return (
                <PublicationCard
                  key={publication.id}
                  publication={publication}
                  index={index}
                  colorClasses={colorClasses}
                />
              );
            })}
          </div>
        ) : (
          <motion.div {...createMotionDiv({initial: {opacity: 0}, whileInView: {opacity: 1}})} className="text-center py-16 text-gray-500">
            <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-20" />
            <p className="text-lg font-semibold">No publications available</p>
          </motion.div>
        )}
      </div>
    </div>
  
    {/* Projects */}
    <div id="projects" className="relative px-4 md:px-8 lg:px-12 py-8 md:py-10 lg:py-12 w-full overflow-hidden">
      {/* Animated Background Component */}
      <AnimatedBackground />
      
      {/* Additional Animated Background Effects */}
      <div className="hidden md:block absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '0.6s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0891B2]/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.6s' }} />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8 md:mb-10 relative z-10"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-[#00D9FF]">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-sm md:text-base">Showcasing my best work & innovations</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 relative z-10">
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
              className={`group relative p-4 md:p-5 lg:p-6 rounded-3xl ${colorClasses.cardBg} border-2 ${isGreen ? 'border-[#00D9FF]/30 hover:border-[#00D9FF]/70' : 'border-[#0891B2]/30 hover:border-[#0891B2]/70'} ${colorClasses.shadow} hover:${colorClasses.glow} transition-all duration-500`}>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 ${isGreen ? 'bg-[#00D9FF]' : 'bg-[#0891B2]'}/5 rounded-bl-3xl rounded-tr-3xl`}></div>

              {/* Project number badge */}
              <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full ${isGreen ? 'bg-[#00D9FF]' : 'bg-[#0891B2]'} text-black flex items-center justify-center text-sm font-bold shadow-lg`}>
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
                  <div className="flex flex-wrap gap-2 pt-6">
                    {project.tech.split(', ').map((tech, techIndex) => (
                      <span key={techIndex} className={`px-3 py-1 text-xs font-medium rounded-full ${isGreen ? 'bg-[#00D9FF]' : 'bg-[#0891B2]'}/20 ${colorClasses.techColor} border ${isGreen ? 'border-[#00D9FF]' : 'border-[#0891B2]'}/40 hover:scale-105 transition-transform duration-200`}>
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-600/30">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <div className={`w-2 h-2 rounded-full ${isGreen ? 'bg-[#00D9FF]' : 'bg-[#0891B2]'} animate-pulse`}></div>
                    Featured Project
                  </div>

                  <div className="flex gap-2">
                    <motion.button
                      onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setProjectButtonPos({
                          top: rect.top + window.scrollY,
                          left: rect.left + window.scrollX,
                          height: rect.height,
                          width: rect.width,
                        });
                        setSelectedProject(project);
                        setProjectModalOpen(true);
                      }}
                      whileHover={{ scale: 1.1 }} 
                      whileTap={{ scale: 0.95 }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${isGreen ? 'bg-[#00D9FF]/20 text-[#00D9FF] border border-[#00D9FF]/50 hover:bg-[#00D9FF]/30' : 'bg-[#0891B2]/20 text-[#0891B2] border border-[#0891B2]/50 hover:bg-[#0891B2]/30'} transition-colors`}
                      title="View Project Details"
                    >
                      View Details
                    </motion.button>
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
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${isGreen ? 'bg-[#00D9FF]' : 'bg-[#0891B2]'}`}></div>
            </motion.div>
          );
        })}
      </div>
    </div>

    {/* Contact */}
  <div id="contact" className="relative px-4 md:px-8 lg:px-12 py-6 md:py-8 lg:py-10 w-full bg-gradient-to-r from-[#000000] via-[#0A0A0A] to-[#000000] overflow-hidden">
    {/* Animated Background Component */}
    <AnimatedBackground />
    
    {/* Additional Animated Background Effects */}
    <div className="hidden md:block absolute inset-0 pointer-events-none opacity-30">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0891B2]/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
    
    <div className="relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8 md:mb-10 relative z-10"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-[#00D9FF]">Get In Touch</h2>
        <p className="text-gray-400 text-sm md:text-base">Have a question or want to collaborate? Send me a message!</p>
      </motion.div>

      {/* Contact Section with Social Card and Form */}
      <div className="flex flex-col lg:flex-row items-stretch justify-center gap-4 w-full max-w-7xl mx-auto">
        {/* Social Card */}
        <div className="flex-1 flex items-center justify-center">
          <SocialCard socialLinks={socialLinks} getIcon={getIcon} />
        </div>

        {/* Contact Form */}
        <div className="flex-1 min-h-full">
          <ContactForm />
        </div>
      </div>
    </div>
  </div>

    {/* Footer */}
  <footer className="p-4 text-center text-sm bg-gradient-to-r from-[#000000] via-[#0A0A0A] to-[#000000] text-gray-400">
        © 2025 Dhamodharan T. All Rights Reserved.
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

        /* 3D Hover Effect for About Section Image */
        .about-grid {
          perspective: 1000px;
        }

        .card-3d-wrapper {
          perspective: 1000px;
          // transform-style: preserve-3d;
        }

        .card-3d {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          will-change: transform;
          transition: transform 0.5s ease;
        }

        .card-3d-wrapper:hover .card-3d {
          transform: translateZ(5px) rotateX(5deg) rotateY(5deg);
        }

        .card-3d-wrapper:hover .image-3d {
          transform: translateZ(15px);
        }

        .image-3d {
          transition: transform 0.5s ease;
          will-change: transform;
        }

        /* Name Rotating Color Animation */
        @keyframes colorRotate {
          0% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
          100% {
            background-position: 0% center;
          }
        }

        .name-gradient-effect {
          margin: 0;
          padding: 0;
          letter-spacing: 2px;
          font-size: clamp(1.5rem, 5vw, 2.25rem);
          font-family: "Arial", sans-serif;
          font-weight: bold;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.8) 0%,
            #00D9FF 25%,
            #00D9FF 50%,
            rgba(255, 255, 255, 0.8) 75%,
            rgba(255, 255, 255, 0.8) 100%
          );
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: colorRotate 3s ease-in-out infinite;
          will-change: background-position;
          transform: translateZ(0);
          backface-visibility: hidden;
          filter: drop-shadow(0 0 10px rgba(0, 217, 255, 0.4));
        }

        /* Glass Card Social Links */
        /* Styles removed - using SocialCard component instead */

          .glass-card-label {
            font-size: 0.75rem;
          }
        }
      `}</style>

      {/* Project Details Popover */}
      {selectedProject && (
        <ProjectDetailsPopover 
          project={selectedProject} 
          isOpen={projectModalOpen}
          position={projectButtonPos}
          onClose={() => {
            setProjectModalOpen(false);
            setTimeout(() => {
              setSelectedProject(null);
            }, 300);
          }}
        />
      )}

      {/* Certificate Details Dialog */}
      {selectedCertificate && (
        <CertificateDetailsDialog
          certificate={selectedCertificate}
          isOpen={certificateDialogOpen}
          position={certButtonPos}
          onClose={() => {
            setCertificateDialogOpen(false);
            setTimeout(() => {
              setSelectedCertificate(null);
            }, 300);
          }}
        />
      )}
    </div>
  );
}

