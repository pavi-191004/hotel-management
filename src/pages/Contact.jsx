import React from "react";


const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
     
        <div className="contact-form">
          <h2>Send a Message</h2>
          <p>Share your details and we'll get back to you shortly.</p>

          <form>
            <div className="form-row">
              <input type="text" placeholder="Full name" required />
              <input type="email" placeholder="Email address" required />
            </div>

            <div className="form-row">
              <input type="text" placeholder="Phone (optional)" />
              <input type="text" placeholder="Preferred date (optional)" />
            </div>

            <textarea
              rows="4"
              placeholder="Your message — dietary needs, occasion, party size..."
            ></textarea>

            <div className="form-actions">
              <button type="submit" className="submit-btn">Submit</button>
              <button type="button" className="download-btn">Download Menu PDF</button>
            </div>
          </form>

          <div className="call-section">
            <p>
              <strong>Prefer to speak with us?</strong><br />
              Our concierge can help with reservations and private dining.
            </p>
            <div className="call-buttons">
              <button className="call-now">📞 Call Now</button>
              <button className="book-table">🍽️ Book a Table</button>
            </div>
          </div>
        </div>

        
        <div className="restaurant-details">
          <h3>Restaurant Details</h3>
          <p><strong>Address:</strong><br />123 Culina Way, Suite 5, Cityville</p>
          <p><strong>Phone:</strong><br />(123) 456-7890</p>
          <p><strong>Email:</strong><br />reservations@foodhotel.com</p>

          <div className="timings">
            <p><strong>Mon-Thu:</strong> 5:00p  10:00p</p>
            <p><strong>Fri:</strong> 5:00p  11:00p</p>
            <p><strong>Sat:</strong> 4:00p  11:00p</p>
            <p><strong>Sun:</strong> 4:00p  9:00p</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
