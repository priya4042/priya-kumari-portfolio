import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedinIn,
  FaPaperPlane, FaCheck, FaSpinner, FaArrowRight, FaExclamationTriangle,
} from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import './Contact.css';

/*
 * =============================================
 *  EmailJS SETUP INSTRUCTIONS
 * =============================================
 *  1. Go to https://www.emailjs.com/ and create a free account
 *  2. Add an Email Service (Gmail, Outlook, etc.)
 *  3. Create an Email Template with variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
 *  4. Replace the values below with YOUR IDs from the EmailJS dashboard:
 */
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';    // Replace with your EmailJS Service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // Replace with your EmailJS Template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';     // Replace with your EmailJS Public Key

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const formRef = useRef();
  const [formData, setFormData] = useState({ from_name: '', from_email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, sent, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Check if EmailJS is configured
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
      // Fallback: Open email client if EmailJS not configured
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.from_name}\nEmail: ${formData.from_email}\n\n${formData.message}`
      )}`;
      window.open(mailtoLink, '_blank');
      setStatus('sent');
      setTimeout(() => {
        setStatus('idle');
        setFormData({ from_name: '', from_email: '', subject: '', message: '' });
      }, 3000);
      return;
    }

    // Send via EmailJS
    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('sent');
        setTimeout(() => {
          setStatus('idle');
          setFormData({ from_name: '', from_email: '', subject: '', message: '' });
        }, 3000);
      })
      .catch(() => {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  });

  return (
    <section id="contact" className="section section-alt" ref={ref}>
      <div className="container">
        <motion.div className="section-header" {...fadeUp(0)}>
          <span className="section-tag">{"// Let's connect"}</span>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </motion.div>

        {/* CTA Banner */}
        <motion.div className="contact-cta-banner" {...fadeUp(0.15)}>
          <div className="cta-banner-content">
            <h3>Let's build something amazing together</h3>
            <p>I'm always open to new projects, creative ideas, and exciting opportunities.</p>
          </div>
          <a href={`mailto:${personalInfo.email}`} className="btn btn-primary" data-cursor="Email">
            <span>Say Hello</span>
            <FaArrowRight />
          </a>
        </motion.div>

        <div className="contact-grid">
          <motion.div className="contact-info" {...fadeUp(0.2)}>
            <ContactCard
              icon={<FaEnvelope />}
              title="Email Me"
              value={personalInfo.email}
              href={`mailto:${personalInfo.email}`}
            />
            <ContactCard
              icon={<FaPhone />}
              title="Call Me"
              value={personalInfo.phone}
              href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
            />
            <ContactCard
              icon={<FaMapMarkerAlt />}
              title="Location"
              value={personalInfo.location}
            />

            <div className="social-links">
              {[
                { icon: <FaGithub />, href: personalInfo.github, label: 'GitHub' },
                { icon: <FaLinkedinIn />, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: <FaEnvelope />, href: `mailto:${personalInfo.email}`, label: 'Email' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel="noreferrer"
                  className="social-link"
                  whileHover={{ y: -6, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-cursor={social.label}
                  aria-label={`Visit ${social.label}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Code block */}
            <div className="contact-decoration">
              <div className="code-block">
                <div className="code-header">
                  <span className="code-dot" style={{ background: '#ff5f57' }} />
                  <span className="code-dot" style={{ background: '#febc2e' }} />
                  <span className="code-dot" style={{ background: '#28c840' }} />
                  <span className="code-filename">developer.js</span>
                </div>
                <div className="code-body">
                  <span className="code-line">
                    <span className="code-keyword">const</span>{' '}
                    <span className="code-var">developer</span> = {'{'}
                  </span>
                  <span className="code-line code-indent">
                    <span className="code-prop">name</span>:{' '}
                    <span className="code-string">"Priya Kumari"</span>,
                  </span>
                  <span className="code-line code-indent">
                    <span className="code-prop">skills</span>:{' '}
                    <span className="code-string">[".NET", "JS", "SQL"]</span>,
                  </span>
                  <span className="code-line code-indent">
                    <span className="code-prop">hireable</span>:{' '}
                    <span className="code-bool">true</span>
                  </span>
                  <span className="code-line">{'};'}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form className="contact-form" {...fadeUp(0.3)} onSubmit={handleSubmit} ref={formRef}>
            <h3 className="form-title">Send me a message</h3>
            <div className="form-row">
              <div className="form-group">
                <div className="input-wrapper">
                  <input type="text" name="from_name" value={formData.from_name} onChange={handleChange} required placeholder=" " aria-label="Your name" />
                  <label>Your Name</label>
                  <span className="input-highlight" />
                </div>
              </div>
              <div className="form-group">
                <div className="input-wrapper">
                  <input type="email" name="from_email" value={formData.from_email} onChange={handleChange} required placeholder=" " aria-label="Your email" />
                  <label>Your Email</label>
                  <span className="input-highlight" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="input-wrapper">
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder=" " aria-label="Subject" />
                <label>Subject</label>
                <span className="input-highlight" />
              </div>
            </div>
            <div className="form-group">
              <div className="input-wrapper">
                <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required placeholder=" " aria-label="Your message" />
                <label>Your Message</label>
                <span className="input-highlight" />
              </div>
            </div>
            <motion.button
              type="submit"
              className={`btn btn-primary btn-full ${status}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={status !== 'idle'}
              aria-label="Send message"
            >
              {status === 'idle' && (<><span>Send Message</span><FaPaperPlane /></>)}
              {status === 'sending' && (<><span>Sending...</span><FaSpinner className="spin" /></>)}
              {status === 'sent' && (<><span>Message Sent!</span><FaCheck /></>)}
              {status === 'error' && (<><span>Failed! Try again</span><FaExclamationTriangle /></>)}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({ icon, title, value, href }) => (
  <motion.div className="contact-card" whileHover={{ x: 8 }}>
    <div className="contact-card-icon">{icon}</div>
    <div>
      <h4>{title}</h4>
      {href ? <a href={href}>{value}</a> : <span>{value}</span>}
    </div>
  </motion.div>
);

export default Contact;
