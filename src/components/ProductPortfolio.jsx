import React from "react";

const ProductPortfolio = ({ showProduct }) => {
  const styles = {
    section: {
      padding: '4rem 1rem',
      background: 'linear-gradient(135deg, #f8fffe 0%, #e8f5f4 100%)',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '3rem',
      fontSize: '2.5rem',
      fontWeight: '800',
      color: '#008575',
      letterSpacing: '-0.5px',
      position: 'relative',
      paddingBottom: '1rem',
    },
    headingUnderline: {
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80px',
      height: '4px',
      background: 'linear-gradient(90deg, #008575 0%, #00c9b1 100%)',
      borderRadius: '2px',
    },
    grid: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '2rem',
      maxWidth: '800px',
      margin: '0 auto',
    },
    card: {
      background: '#ffffff',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0, 133, 117, 0.08)',
      width: '380px',
      display: 'flex',
      flexDirection: 'column',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      border: '1px solid rgba(0, 133, 117, 0.06)',
      position: 'relative',
    },
    cardHover: {
      transform: 'translateY(-8px)',
      boxShadow: '0 12px 32px rgba(0, 133, 117, 0.16)',
    },
    imageWrapper: {
      width: '100%',

      overflow: 'hidden',
      background: 'linear-gradient(135deg, #f0fffe 0%, #e0f7f5 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    imageBg: {
      position: 'absolute',
      top: '-20px',
      right: '-20px',
      width: '120px',
      height: '120px',
      background: 'radial-gradient(circle, rgba(0, 201, 177, 0.1) 0%, transparent 70%)',
      borderRadius: '50%',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      position: 'relative',
      zIndex: 1,
      filter: 'drop-shadow(0 2px 8px rgba(0, 133, 117, 0.1))',
    },
    body: {
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      flex: 1,
    },
    title: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: '#062d29',
      margin: 0,
      lineHeight: 1.3,
      textAlign: 'center',
    },
    description: {
      fontSize: '0.9rem',
      color: '#5a7a77',
      lineHeight: 1.6,
      textAlign: 'center',
      margin: '0.5rem 0',
    },
    footer: {
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '0.5rem',
    },
    button: {
      background: 'linear-gradient(135deg, #008575 0%, #00a693 100%)',
      color: 'white',
      padding: '0.75rem 2rem',
      borderRadius: '10px',
      border: 'none',
      cursor: 'pointer',
      fontWeight: '700',
      fontSize: '0.95rem',
      transition: 'all 0.2s ease',
      boxShadow: '0 4px 12px rgba(0, 133, 117, 0.2)',
      position: 'relative',
      overflow: 'hidden',
    },
    buttonHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(0, 133, 117, 0.3)',
    },
  };

  const [hoveredCard, setHoveredCard] = React.useState(null);
  const [hoveredButton, setHoveredButton] = React.useState(null);

  const products = [
    {
      id: 'ra-patch',
      title: 'Drepto Iotophoretic Patch for Rheumatoid Arthritis',
      image: '/ra3.webp',
      description: 'Iontophoretic patch for enhanced delivery of rheumatoid arthritis medication',
    },
    {
      id: 'eve-flyers',
      title: 'Drepto EVE+ Herbal Menstrual Pain Relief Patch',
      image: '/evee.jpg',
      description: 'Herbal, non-invasive pain relief patch for menstrual cramps and discomfort',
    },
  ];

  return (
    <section id="product-portfolio" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>
          Our Product Solutions
          <span style={styles.headingUnderline}></span>
        </h2>
        <div style={styles.grid}>
          {products.map((product, index) => (
            <article
              key={product.id}
              style={{
                ...styles.card,
                ...(hoveredCard === index ? styles.cardHover : {}),
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              aria-labelledby={`product-${product.id}`}
            >
              <div style={styles.imageWrapper}>
                <div style={styles.imageBg}></div>
                <img
                  src={product.image}
                  alt={product.title}
                  style={styles.image}
                />
              </div>
              <div style={styles.body}>
                <h3 id={`product-${product.id}`} style={styles.title}>
                  {product.title}
                </h3>
                <p style={styles.description}>{product.description}</p>
                <div style={styles.footer}>
                  <button
                    aria-label={`Explore ${product.title}`}
                    style={{
                      ...styles.button,
                      ...(hoveredButton === index ? styles.buttonHover : {}),
                    }}
                    onMouseEnter={() => setHoveredButton(index)}
                    onMouseLeave={() => setHoveredButton(null)}
                    onClick={() => showProduct(product.id)}
                  >
                    Explore Product
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPortfolio;