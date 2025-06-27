import "./../components/Blog/BlogPage.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

const rib = {
  banque: "UMPA Refuge Casablanca",
  iban: "MA64 190 0000 0000 0000 0000 0000",
  swift: "BMCEMAMC",
  agence: "BMCE Casablanca",
};

const paypal = {
  link: "https://www.paypal.com/donate?hosted_button_id=XXXXXXXXXXXX",
  email: "umpa.refuge@gmail.com",
};

const Donation = () => {
  return (
    <div className="blog-page">
        <Header />
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <h1>Faire un Don</h1>
          <p>
            Chaque don compte ! Grâce à votre générosité, nous pouvons offrir soins, nourriture et amour à nos pensionnaires. Merci de soutenir la mission UMPA.
          </p>
        </div>
      </section>

      <div className="container blog-container">
        <main className="blog-main">
          <section className="featured-posts">
            <div className="section-header">
              <h2 className="section-title">Informations de Donation</h2>
              <p className="section-subtitle">
                Choisissez le moyen qui vous convient pour soutenir nos animaux.
              </p>
            </div>
            <div className="featured-grid">
              {/* RIB */}
              <article className="featured-card">
                <div className="featured-content">
                  <span className="category-badge">Virement Bancaire</span>
                  <h3>RIB / IBAN</h3>
                  <ul style={{ listStyle: "none", padding: 0, fontSize: "1.1rem" }}>
                    <li><strong>Banque :</strong> {rib.banque}</li>
                    <li><strong>Agence :</strong> {rib.agence}</li>
                    <li><strong>IBAN :</strong> <span style={{ wordBreak: "break-all" }}>{rib.iban}</span></li>
                    <li><strong>SWIFT :</strong> {rib.swift}</li>
                  </ul>
                </div>
              </article>
              {/* PayPal */}
              <article className="featured-card">
                <div className="featured-content">
                  <span className="category-badge">PayPal</span>
                  <h3>Faire un don en ligne</h3>
                  <p>
                    Cliquez sur le bouton ci-dessous ou envoyez directement à :<br />
                    <strong>{paypal.email}</strong>
                  </p>
                  <a
                    href={paypal.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button"
                    style={{ marginTop: 10, alignSelf: "flex-start" }}
                  >
                    Faire un don via PayPal
                  </a>
                </div>
              </article>
            </div>
          </section>
        </main>
        
      </div>
      <Footer />
    </div>
  );
};

export default Donation;