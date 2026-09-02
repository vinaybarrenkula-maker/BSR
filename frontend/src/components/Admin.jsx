import React, { useState, useEffect } from 'react';
import { Trash2, Phone, User, Calendar, MessageSquare } from 'lucide-react';

const Admin = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/messages');
      const data = await response.json();
      setMessages(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching messages:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-cream-yellow flex items-center justify-center">
        <div className="text-2xl font-bold animate-pulse text-gold-500">Loading Owner Dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-yellow py-20 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">BSR Dashboard</h1>
            <p className="text-black/60 font-bold">Manage all customer inquiries from one place.</p>
          </div>
          <div className="bg-black text-white px-6 py-2 font-bold uppercase tracking-widest text-sm">
            Total: {messages.length}
          </div>
        </div>

        {messages.length === 0 ? (
          <div className="bg-white border border-black/10 p-20 text-center shadow-lg">
            <MessageSquare className="w-16 h-16 text-black/10 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-black/40">No messages yet.</h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {messages.map((msg) => (
              <div key={msg._id} className="bg-white border border-black/10 p-8 shadow-md hover:shadow-xl transition-shadow flex flex-col md:flex-row justify-between gap-8">
                <div className="space-y-4 flex-1">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-gold-500" />
                    <span className="font-bold text-lg text-black uppercase">{msg.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gold-500" />
                    <span className="font-bold text-black/70">{msg.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gold-500 font-bold">@</span>
                    <span className="font-bold text-black/70">{msg.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gold-500" />
                    <span className="text-sm font-bold text-black/40">
                      {new Date(msg.createdAt).toLocaleString()}
                    </span>
                  </div>
                  <div className="pt-4 border-t border-black/5">
                    <p className="text-black leading-relaxed font-medium bg-cream-yellow/30 p-4 border-l-4 border-gold-500 italic">
                      "{msg.message}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
