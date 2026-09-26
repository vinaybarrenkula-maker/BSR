import React, { useState, useEffect } from 'react';
import { Trash2, Phone, User, Calendar, MessageSquare, Lock } from 'lucide-react';

const Admin = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [forgotPasswordMsg, setForgotPasswordMsg] = useState({ text: '', type: '' });
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('adminToken');
    if (token) {
      setIsAuthenticated(true);
      fetchMessages(token);
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    try {
      const response = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      
      if (data.success) {
        sessionStorage.setItem('adminToken', data.token);
        setIsAuthenticated(true);
        setLoading(true);
        fetchMessages(data.token);
      } else {
        setLoginError(data.message || 'Invalid credentials');
      }
    } catch (error) {
      setLoginError('Server error, please try again later');
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setForgotPasswordMsg({ text: 'Please enter your admin email first', type: 'error' });
      return;
    }
    
    setIsResetting(true);
    setForgotPasswordMsg({ text: '', type: '' });
    
    try {
      const response = await fetch('http://localhost:5000/api/admin/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await response.json();
      
      if (data.success) {
        setForgotPasswordMsg({ text: 'New password sent to your email!', type: 'success' });
      } else {
        setForgotPasswordMsg({ text: data.message || 'Failed to reset password', type: 'error' });
      }
    } catch (error) {
      setForgotPasswordMsg({ text: 'Server error, please try again later', type: 'error' });
    } finally {
      setIsResetting(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminToken');
    setIsAuthenticated(false);
    setMessages([]);
  };

  const fetchMessages = async (token) => {
    try {
      const response = await fetch('http://localhost:5000/api/messages', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.status === 401) {
        handleLogout();
        return;
      }
      
      const data = await response.json();
      if (Array.isArray(data)) {
        setMessages(data);
      } else {
        console.error('Expected array but got:', data);
        setMessages([]);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching messages:', error);
      setMessages([]);
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

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-cream-yellow flex items-center justify-center px-6">
        <div className="bg-white p-8 border border-black/10 shadow-xl max-w-md w-full">
          <div className="flex justify-center mb-6">
            <div className="bg-gold-500/20 p-4 rounded-full">
              <Lock className="w-8 h-8 text-gold-500" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center text-black mb-8 uppercase tracking-wider">Owner Login</h2>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-black/70 mb-2">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b-2 border-black/20 py-2 px-4 focus:outline-none focus:border-gold-500 bg-transparent transition-colors"
                placeholder="admin@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-black/70 mb-2">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b-2 border-black/20 py-2 px-4 focus:outline-none focus:border-gold-500 bg-transparent transition-colors"
                placeholder="Enter owner password"
                required
              />
            </div>
            
            {loginError && (
              <p className="text-red-500 text-sm font-bold text-center">{loginError}</p>
            )}
            
            {forgotPasswordMsg.text && (
              <p className={`text-sm font-bold text-center ${forgotPasswordMsg.type === 'success' ? 'text-green-600' : 'text-red-500'}`}>
                {forgotPasswordMsg.text}
              </p>
            )}

            <button 
              type="submit"
              className="w-full bg-black text-white font-bold uppercase tracking-widest py-3 hover:bg-gold-500 transition-colors"
            >
              Access Dashboard
            </button>
            
            <div className="text-center mt-4">
              <button 
                type="button" 
                onClick={handleForgotPassword}
                disabled={isResetting}
                className="text-sm font-bold text-black/60 hover:text-gold-500 transition-colors underline"
              >
                {isResetting ? 'Sending Email...' : 'Forgot Password?'}
              </button>
            </div>
          </form>
        </div>
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
          <div className="flex items-center gap-4">
            <div className="bg-black text-white px-6 py-2 font-bold uppercase tracking-widest text-sm">
              Total: {messages.length}
            </div>
            <button 
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 font-bold uppercase tracking-widest text-sm hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
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
