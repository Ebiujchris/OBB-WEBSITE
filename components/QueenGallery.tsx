export default function QueenGallery({ images }: { images: string[] }) {
  if (!images.length) return null;

  return (
    <section className="queen-gallery" aria-label="Queen photo gallery">
      <div className="badge badge-gold" style={{ marginBottom: '1rem' }}>Queen Gallery</div>
      <div className="queen-gallery-viewport">
        <div className="queen-gallery-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="queen-gallery-group" aria-hidden={copy === 1}>
              {images.map((image, index) => (
                <div className="queen-gallery-photo" key={`${copy}-${image}-${index}`}>
                  <img src={image} alt={copy === 0 ? `Queen photo ${index + 1}` : ''} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .queen-gallery-viewport { overflow: hidden; }
        .queen-gallery-track { display: flex; width: max-content; animation: queen-gallery-scroll 58s linear infinite; }
        .queen-gallery-group { display: flex; gap: 1rem; padding-right: 1rem; }
        .queen-gallery-photo { flex: 0 0 clamp(270px, 28vw, 340px); height: 15rem; overflow: hidden; border-radius: 0.5rem; background: #242424; }
        .queen-gallery-photo img { display: block; width: 100%; height: 100%; object-fit: cover; }
        .queen-gallery-viewport:hover .queen-gallery-track { animation-play-state: paused; }
        @keyframes queen-gallery-scroll { to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) {
          .queen-gallery-viewport { overflow-x: auto; }
          .queen-gallery-track { animation: none; }
          .queen-gallery-group[aria-hidden="true"] { display: none; }
        }
      `}</style>
    </section>
  );
}
