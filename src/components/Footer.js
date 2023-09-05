import React from 'react';
import { pageLinks, socialLinks } from '../data';
const Footer = () => {
  const renderedPageLinks = pageLinks.map((pageLink) => {
    const { id, href, text } = pageLink;
    return (
      <li key={id}>
        <a href={href} className="footer-link">
          {text}
        </a>
      </li>
    );
  });

  const renderedSocialLinks = socialLinks.map((socialLink) => {
    const { id, href, icon } = socialLink;
    return (
      <li key={id}>
        <a href={href} target="_blank" className="footer-icon" rel="noreferrer">
          <i className={icon}></i>
        </a>
      </li>
    );
  });

  return (
    <footer className="section footer">
      <ul className="footer-links">{renderedPageLinks}</ul>
      <ul className="footer-icons">{renderedSocialLinks}</ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
