import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './DonationPage.css';

const presetAmounts = [50, 100, 200, 500];

const DonationPage: React.FC = () => {
  const [amount, setAmount] = useState<number | ''>('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleAmountClick = (val: number) => setAmount(val);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setAmount(val === '' ? '' : Math.max(0, Number(val)));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setAmount('');
      setForm({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <div className="donation-page">
        <Header />
      <section className="donation-hero">
        <div className="container">
          <h1 className="donation-title">Soutenez notre mission</h1>
          <p className="donation-subtitle">
            Chaque don nous aide à sauver plus de vies et à offrir de meilleurs soins à nos pensionnaires.<br />
            Merci pour votre générosité !
          </p>
        </div>
      </section>
      <section className="donation-form-section">
        <div className="container">
          <div className="donation-form-container">
            {success ? (
              <div className="donation-success">
                <h2>🙏 Merci pour votre don !</h2>
                <p>Votre soutien fait la différence pour nos animaux. Nous vous remercions chaleureusement.</p>
              </div>
            ) : (
              <form className="donation-form" onSubmit={handleSubmit}>
                <h2 className="form-title">Faire un don</h2>
                <div className="amount-group">
                  <label htmlFor="amount">Montant du don (€) *</label>
                  <div className="preset-amounts">
                    {presetAmounts.map(val => (
                      <button
                        type="button"
                        key={val}
                        className={`preset-btn${amount === val ? ' active' : ''}`}
                        onClick={() => handleAmountClick(val)}
                      >
                        {val}€
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    min="1"
                    placeholder="Autre montant"
                    value={amount}
                    onChange={handleAmountChange}
                    required
                    className="amount-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Nom *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Votre nom"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    required
                    placeholder="votre@email.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message (optionnel)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleInputChange}
                    placeholder="Un mot d'encouragement, une dédicace..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="donate-btn"
                  disabled={isSubmitting}
                  style={{ opacity: isSubmitting ? 0.7 : 1 }}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Faire un don'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DonationPage;
