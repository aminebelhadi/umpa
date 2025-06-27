import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import { fetchEspeces } from '../../api/especeApi';

interface HeroSectionProps {
  onSearch: (filters: { especeId?: string; age?: number; sexe?: string; raceId?: string }) => void;
}
interface Espece { id: string; nom: string; }
interface Race { id: string; nom: string; especeId: string; }

const HeroSection = ({ onSearch }: HeroSectionProps) => {
  const [especes, setEspeces] = useState<Espece[]>([]);
  const [races, setRaces] = useState<Race[]>([]);
  const [selectedEspeceId, setSelectedEspeceId] = useState<string>('');
  const [selectedSexe, setSelectedSexe] = useState<string>('');
  const [selectedRaceId, setSelectedRaceId] = useState<string>('');

  useEffect(() => {
  fetchEspeces().then((especesData: any[]) => {
    setEspeces(especesData);

    // Extraire toutes les races de chaque espèce
    const allRaces = especesData.flatMap((espece: any) =>
      (espece.races || []).map((race: any) => ({
        id: String(race.id),
        nom: race.nom,
        especeId: String(espece.id),
      }))
    );
    setRaces(allRaces);
  });
}, []);

  const handleSearch = () => {
    onSearch({
      especeId: selectedEspeceId || undefined,
      sexe: selectedSexe || undefined,
      raceId: selectedRaceId || undefined,
    });
  };

  // Races filtrées selon l'espèce sélectionnée
  const filteredRaces = selectedEspeceId
    ? races.filter(r => r.especeId === selectedEspeceId)
    : [];


  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-gradient"></div>
      </div>

      <div className="hero-content">
        <div className="hero-grid">
          <div className="hero-text">
            <div className="title-group">
              <h1 className="main-title">Trouvez Votre Âme Sœur</h1>
              <p className="subtitle1">
                Découvrez nos animaux adorables qui n'attendent qu'une famille aimante pour commencer une nouvelle vie pleine d'amour et de bonheur.
              </p>
            </div>

            <div className="search-form">
        <h3 className="form-title">Commencez votre recherche</h3>
        <div className="form-content">
          <div className="type-selection">
            <label>Type d'animal</label>
            <select
              value={selectedEspeceId}
              onChange={e => {
                setSelectedEspeceId(e.target.value);
                setSelectedRaceId('');
              }}
            >
              <option value="">Tous</option>
              {especes.map(e => (
                <option key={e.id} value={e.id}>{e.nom}</option>
              ))}
            </select>
          </div>
          <div className="select-group">
            <label>Race</label>
            <select
              value={selectedRaceId}
              onChange={e => setSelectedRaceId(e.target.value)}
              disabled={!selectedEspeceId}
            >
              <option value="">Toutes</option>
              {filteredRaces.map(r => (
                <option key={r.id} value={r.id}>{r.nom}</option>
              ))}
            </select>
          </div>
          <div className="select-group">
            <label>Sexe</label>
            <select
              value={selectedSexe}
              onChange={e => setSelectedSexe(e.target.value)}
            >
              <option value="">Tous</option>
              <option value="MALE">Mâle</option>
              <option value="FEMALLE">Femelle</option>
            </select>
          </div>
          <button className="search-button" onClick={handleSearch}>
            <span className="button-content" style={{ position: "relative", zIndex: "0" }}>
              Rechercher
              <svg className="search-icon" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
          </div>

          <div className="hero-image-container">
            <div className="image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=2070&auto=format&fit=crop"
                alt="Adorables animaux de compagnie attendant leur famille"
                className="hero-image"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
