import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, User, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert(data.error || 'Failed to send message.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while sending the message.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-transparent relative">
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-gold-500 tracking-widest text-sm font-bold uppercase mb-3">Get In Touch</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Visit Our <span className="text-gold-500">Store</span>
          </h2>
          <p className="text-black/70 font-bold">
            We'd love to hear from you. Visit us in person or reach out through our contact details below.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contact Details & Map */}
          <div className="lg:w-1/2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-md border border-gold-500/10 p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-black mb-6">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-gold-500/10 p-3 rounded-full text-gold-500">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-black font-bold text-lg">Proprietor</h4>
                    <p className="text-black/60 font-bold">B. Abhiram</p>
                    <p className="text-xs text-gold-500 mt-1 uppercase tracking-wider font-bold">Basaweshwara Shopping Mall (BSR)</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-gold-500/10 p-3 rounded-full text-gold-500">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-black font-bold text-lg">Location</h4>
                    <p className="text-black/60 font-bold">6-11/4/3/2, X Road, opposite of oil mill,<br/>Bichkunda, Telangana 503306</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-gold-500/10 p-3 rounded-full text-gold-500">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-black font-bold text-lg">Phone Number</h4>
                    <p className="text-black/60 font-bold">+91 96525 93122</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-gold-500/10 p-3 rounded-full text-gold-500">
                    <span className="font-bold">@</span>
                  </div>
                  <div>
                    <h4 className="text-black font-bold text-lg">Email Address</h4>
                    <p className="text-black/60 font-bold">basaweshwarabsr@gmail.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-gold-500/10 p-3 rounded-full text-gold-500">
                    <span className="font-bold text-sm">🕐</span>
                  </div>
                  <div>
                    <h4 className="text-black font-bold text-lg">Opening Hours</h4>
                    <p className="text-black/60 font-bold">Mon – Sun: 9:00 AM – 9:00 PM</p>
                    <p className="text-xs text-green-600 font-bold mt-1">● Open Now</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/919652593122" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 font-medium hover:bg-[#20bd5a] transition-colors rounded">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Basaweshwara+shopping+mall,+Bichkunda,+Telangana+503306"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-gold-500 text-black px-6 py-3 font-bold hover:bg-gold-600 transition-colors rounded"
                >
                  <MapPin className="w-5 h-5" />
                  Get Directions
                </a>
              </div>
            </motion.div>

            {/* Google Maps Embed */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-[300px] w-full bg-black-900 border border-white/10 relative group overflow-hidden"
            >
              <iframe
                title="Basaweshwara Shopping Mall Location"
                src="https://maps.google.com/maps?q=Basaweshwara%20shopping%20mall,%206-11/4/3/2,%20X%20Road,%20Bichkunda,%20Telangana%20503306&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-black/90 backdrop-blur-md border border-gold-500/20 p-8 h-full shadow-2xl"
            >
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="w-20 h-20 bg-gold-500/20 rounded-full flex items-center justify-center mb-6">
                    <Send className="w-10 h-10 text-gold-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-gray-400 mb-8 max-w-sm">
                    Thank you for reaching out. We have received your message and will respond via email shortly.
                  </p>
                  <div className="space-y-4 w-full">
                    <p className="text-sm text-gold-500 uppercase tracking-widest font-bold">Need faster response?</p>
                    <a 
                      href="https://wa.me/919652593122" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 font-bold hover:bg-[#20bd5a] transition-all transform hover:scale-105 rounded shadow-lg w-full"
                    >
                      <MessageCircle className="w-6 h-6" />
                      Chat on WhatsApp Now
                    </a>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-gray-400 hover:text-white text-sm underline mt-4"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-black-800 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full bg-black-800 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-black-800 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="How can we help you?"
                        className="w-full bg-black-800 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors resize-none"
                      ></textarea>
                    </div>
                    <button type="submit" className="bg-gold-500 hover:bg-gold-600 text-black font-bold py-4 w-full flex items-center justify-center gap-2 transition-all transform hover:translate-y-[-2px] shadow-lg">
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
