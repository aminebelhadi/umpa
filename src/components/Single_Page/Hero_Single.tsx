import './Hero_Single.css'
import Header from '../Header';
import Footer from '../Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ModalForm = ({ open, onClose, action }: { open: boolean, onClose: () => void, action: 'adoption' | 'sponsor' }) => {
    if (!open) return null;
    return (
        <div className="modal-overlay">
            <div className="modal-form">
                <button className="modal-close" onClick={onClose}>&times;</button>
                <h2>{action === 'adoption' ? "Adoption" : "Parrainage"}</h2>
                <form onSubmit={e => { e.preventDefault(); onClose(); }}>
                    <label>Nom<input type="text" name="name" required /></label>
                    <label>Téléphone<input type="tel" name="phone" required /></label>
                    <label>Ville<input type="text" name="city" required /></label>
                    <button type="submit" className="btn-primary large" style={{ marginTop: '1rem' }}>Envoyer</button>
                </form>
            </div>
        </div>
    );
};



const Hero_Single = () => {
    const location = useLocation(); 
    const navigate = useNavigate();
    const { pet } = location.state || {}; 

    const [modalOpen, setModalOpen] = useState<false | 'adoption' | 'sponsor'>(false);

    if (!pet) {
        // Si l'utilisateur accède à cette page directement sans pet
        return <div>Animal introuvable. <button onClick={() => navigate(-1)}>Retour</button></div>;
    }
    console.log("Pet data:", pet); // Pour débogage

    return (
        <>
            <Header />
            <ModalForm open={!!modalOpen} onClose={() => setModalOpen(false)} action={modalOpen === 'adoption' ? 'adoption' : 'sponsor'} />
            <h1 className='Tito'>Rencontrer {pet.name}</h1>
            <div className="hero-container2">
                <div className="main-content">
                    <div className="main-info-layout improved-layout">
  <div className="main-photo-container improved-photo">
    <img src={pet.image} alt={pet.name} className="main-photo" />
  </div>
  <div className="quick-info-card improved-info-card">
    <h2 className="pet-name">{pet.name}</h2>
    <div className="info-list">
      <div className="info-row">
        <span className="info-label">Âge :</span>
        <span className="info-value">{pet.age} ans</span>
      </div>
      <div className="info-row">
        <span className="info-label">Genre :</span>
        <span className="info-value">{pet.gender}</span>
      </div>
      <div className="info-row">
        <span className="info-label">Race :</span>
        <span className="info-value">{pet.breed}</span>
      </div>
      <div className="info-row">
        <span className="info-label">Date de Naissance :</span>
        <span className="info-value">{new Date(pet.dateNaissance).toLocaleDateString()}</span>
      </div>
    </div>
    <div className="info-actions">
      <button className="btn-primary" onClick={() => setModalOpen('adoption')}>Adopter</button>
      <button className="btn-secondary" onClick={() => setModalOpen('sponsor')}>Parrainer</button>
    </div>
  </div>
</div>

                    <div className="details-grid">
                        <div className="detail-card personality">
                            <div className="card-header">
                                <h2><span className="icon">❤️</span> Personnalité</h2>
                            </div>
                            <p className="description">{pet.description}</p>

                            <div className="temperament-section">
                                <h3>Profil idéal :</h3>
                                <div className="trait-tags">
                                    <span className="trait good">✅ Propre</span>
                                    <span className="trait good">✅ Bon avec les enfants</span>
                                    <span className="trait good">✅ S'entend avec les autres chiens</span>
                                    </div>
                            </div>
                        </div>

                        <div className="detail-card adoption">
                            <div className="card-header">
                                <h2><span className="icon">📋</span> Conditions d'adoption</h2>
                            </div>
                            <div className="requirements-list">
                                <div className="requirement"><span className="req-icon">🏠</span>Environnement familial stable</div>
                                <div className="requirement"><span className="req-icon">🐕</span>Expérience préalable avec les chiens souhaitée</div>
                                <div className="requirement"><span className="req-icon">📚</span>Engagement à poursuivre l'éducation</div>
                                <div className="requirement"><span className="req-icon">👥</span>Visite à domicile requise</div>
                            </div>
                            <div className="adoption-fee" onClick={() => setModalOpen('adoption')} style={{ cursor: 'pointer' }}>
                                <strong>Adopter</strong>
                            </div>
                        </div>

                        <div className="detail-card sponsoring-card">
                            <div className="card-header">
                                <h2><span className="icon">💖</span> Parrainage</h2>
                            </div>
                            <p className="description">Vous ne pouvez pas adopter mais souhaitez aider ? Parrainez {pet.name} ! Votre don mensuel aide à couvrir la nourriture et les soins médicaux.</p>
                            <button className="adoption-fee sponsor-btn" onClick={() => setModalOpen('sponsor')}>Parrainer</button>
                        </div>
                    </div>

                    <div className="cta-section">
                        <div className="cta-card">
                            <h2>Prêt à adopter {pet.name} ?</h2>
                            <p>Contactez-nous dès aujourd'hui pour commencer le processus d'adoption.</p>
                            <div className="cta-buttons">
                                <button className="btn-primary large" onClick={() => setModalOpen('adoption')}>Commencer l'adoption</button>
                                <button className="btn-secondary large" onClick={() => navigate('/contactez_nous')}>Poser une question</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Hero_Single;
