import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, company, message } = formData;
    const phoneNumber = '+62895389615060';
    const text =
      `Halo, saya ingin konsultasi website!\n\n` +
      `Nama: ${name}\n` +
      `Perusahaan: ${company}\n` +
      `Detail Proyek: ${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Hubungi Saya
          </h2>
          <p className="text-lg text-slate-600">
            Siap membantu mewujudkan website impian Anda
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-8">
              Informasi Kontak
            </h3>

            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                  <a href="mailto:naikin.bisnis@gmail.com" className="text-slate-600 hover:text-blue-600 transition-colors">
                    naikin.bisnis@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Telepon / WhatsApp</h4>
                  <a href="tel:+62895389615060" className="text-slate-600 hover:text-blue-600 transition-colors">
                    +62 895 389615060
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Lokasi</h4>
                  <p className="text-slate-600">Indonesia (Remote Worldwide)</p>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Kontak Langsung</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/+62895389615060"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                >
                  <MessageSquare className="mr-2 w-5 h-5" />
                  WhatsApp
                </a>
                <a
                  href="mailto:naikin.bisnis@gmail.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Kirim Pesan
              </h3>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Nama Anda"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="email@anda.com"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                  Nama Perusahaan
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Nama perusahaan (opsional)"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Detail Proyek
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  placeholder="Ceritakan kebutuhan proyek Anda..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Kirim via WhatsApp
                <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
