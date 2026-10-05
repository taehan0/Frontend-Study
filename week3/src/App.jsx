import "./App.css";

const gallery = [
  { id: 1, title: "heartCloud", avatar: "/images/eden-avatar.png", image: "/images/heart.jpeg", likes: 44 },
  { id: 2, title: "sky", avatar: "/images/eden-avatar.png", image: "/images/sky.jpeg", likes: 10},
  { id: 3, title: "sea", avatar: "/images/eden-avatar.png", image: "/images/sea.jpeg", likes: 7},
  { id: 4, title: "night", avatar: "/images/eden-avatar.png", image: "/images/night.jpeg", likes: 7},
];

function Profile({title}) {
  return (<header className="post-profile">
    <span className="profile-username">{title}</span>
  </header>);
}

function PostImage({ image }) {
  return (<div className="post-image-area">
    <img className="post-image" src={image} alt="홍익대학교 마스코트" />
  </div>);
}

function PostActions() {
  return (<div className="post-actions">
    <div className="left-actions">
      <button type="button" aria-label="좋아요">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
        </svg>
      </button>

      <button type="button" aria-label="댓글">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21 11.6a9.2 9.2 0 1 0-4.8 8.1L22 22l-1.9-5.7a9.1 9.1 0 0 0 .9-4.7Z" />
        </svg>
      </button>

      <button type="button" aria-label="공유">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m22 2-8.5 20-4-11L1 2h21ZM9.5 11 22 2" />
        </svg>
      </button>
    </div>

    <button type="button" aria-label="저장">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 2h16v20l-8-6-8 6V2Z" />
      </svg>
    </button>
  </div>);
}

function PostContent({caption }) {
  return (
    <section className="post-content">

      <p className="caption">
        <span>{caption}</span>
      </p>
    </section>
  );
}

function Gallery({ title,image}) { 
  return ( <article className="post">
    <Profile title={title} />
    <PostImage image={image} />
  </article>);
}

function App() {
  return (
    <main className="page">
      {gallery.map((post) => (
        <Gallery
          key={post.id}
          title={post.title}
          image={post.image}
        />
      ))}
    </main>
  );
}

export default App;
