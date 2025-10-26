import Link from "next/link";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#111", color: "#fff" }}>
      {/* Header */}
      <header style={{ backgroundColor: "#222", padding: "20px", borderBottom: "2px solid #333" }}>
        <h1 style={{ margin: "0", fontSize: "32px" }}>alx movie app</h1>
      </header>

      {/* Hero Section */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 20px",
          backgroundColor: "#1a1a1a",
        }}
      >
        <h2 style={{ fontSize: "48px", marginBottom: "20px" }}>Welcome to alx movie app</h2>
        <p style={{ fontSize: "18px", color: "#999", marginBottom: "40px" }}>
          Your simple movie browser PWA
        </p>
        <Link href="/movies">
          <button
            style={{
              backgroundColor: "#0066cc",
              color: "#fff",
              border: "none",
              padding: "12px 40px",
              fontSize: "16px",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onMouseOver={(e) => {
              (e.target as HTMLButtonElement).style.backgroundColor = "#0052a3";
            }}
            onMouseOut={(e) => {
              (e.target as HTMLButtonElement).style.backgroundColor = "#0066cc";
            }}
          >
            Browse Movies
          </button>
        </Link>
      </section>

      {/* Features */}
      <section style={{ padding: "60px 20px", backgroundColor: "#222" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h3 style={{ fontSize: "32px", marginBottom: "40px", textAlign: "center" }}>
            Features
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "30px",
            }}
          >
            <div style={{ backgroundColor: "#333", padding: "30px", borderRadius: "8px" }}>
              <h4 style={{ fontSize: "20px", marginBottom: "10px" }}>📱 Offline Access</h4>
              <p style={{ color: "#999" }}>Works offline with PWA service worker support</p>
            </div>
            <div style={{ backgroundColor: "#333", padding: "30px", borderRadius: "8px" }}>
              <h4 style={{ fontSize: "20px", marginBottom: "10px" }}>⚡ Fast</h4>
              <p style={{ color: "#999" }}>Lightning-fast loading with caching</p>
            </div>
            <div style={{ backgroundColor: "#333", padding: "30px", borderRadius: "8px" }}>
              <h4 style={{ fontSize: "20px", marginBottom: "10px" }}>📲 Installable</h4>
              <p style={{ color: "#999" }}>Install as an app on your device</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#222",
          padding: "20px",
          textAlign: "center",
          color: "#999",
          borderTop: "2px solid #333",
        }}
      >
        <p style={{ margin: "0" }}>&copy; 2024 alx movie app. All rights reserved.</p>
      </footer>
    </div>
  );
}
