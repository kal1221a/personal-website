function Gallery() {
  const photos = [
    {
      src: "/gallery/photo1.jpg",
      title: "Family",
    },
    {
      src: "/gallery/photo2.jpg",
      title: "Family",
    },
    {
      src: "/gallery/photo3.jpg",
      title: "Family",
    },
    {
      src: "/gallery/photo4.jpg",
      title: "Family",
    },
    {
      src: "/gallery/photo5.jpg",
      title: "Family",
    },
    {
      src: "/gallery/photo6.jpg",
      title: "Family",
    },
  ];

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">GALLERY</p>
          <h2>Family Moments</h2>
          <p>
            A collection of memorable moments with my family.
          </p>
        </div>

        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <div className="gallery-card" key={index}>
              <img
                src={photo.src}
                alt={photo.title}
                loading="lazy"
              />

              <div className="gallery-overlay">
                <span>{photo.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;