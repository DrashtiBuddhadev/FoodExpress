const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <a href="#" className="footer-link">Privacy Policy</a>
        <a href="#" className="footer-link">Terms of Service</a>
        <a href="#" className="footer-link">Help</a>
      </div>
      <div className="footer-copyright">
        &copy; 2024 Food Delivery App. All Rights Reserved.
      </div>
      <div className="footer-socials">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/ios-glyphs/30/ff6600/facebook-new.png" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/ios-glyphs/30/ff6600/instagram-new.png" alt="Instagram" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/ios-glyphs/30/ff6600/twitter.png" alt="Twitter" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
