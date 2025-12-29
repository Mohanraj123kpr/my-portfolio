import { personalInfo } from '../data/personalInfo';
import ContactForm from './ContactForm';
import './Contact.css';

function Contact() {
  const { email, socialLinks } = personalInfo;

  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="contact-container">
        <h2 id="contact-heading" className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-intro">
              Feel free to reach out for opportunities or just to say hello!
            </p>
            <a 
              href={`mailto:${email}`} 
              className="email-link"
              aria-label={`Send email to ${email}`}
            >
              {email}
            </a>
            <nav className="social-links" aria-label="Social media links">
              {socialLinks.map(link => {
                const IconComponent = link.icon;
                return (
                  <a 
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${link.platform} profile (opens in new tab)`}
                    className="social-link"
                  >
                    <IconComponent aria-hidden="true" />
                  </a>
                );
              })}
            </nav>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
