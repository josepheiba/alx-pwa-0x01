import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Movie {
  id: string;
  title: string;
  image: string;
  year: string | number;
  author: string;
}

export default function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/movies");
      const data = await response.json();

      if (data.success) {
        setMovies(data.movies);
      } else {
        setError("Failed to load movies");
      }
    } catch (err) {
      console.error(err);
      setError("Error fetching movies");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#111", color: "#fff" }}>
      {/* Header */}
      <header style={{ backgroundColor: "#222", padding: "20px", borderBottom: "2px solid #333" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <h1 style={{ margin: "0", fontSize: "32px", color: "#fff", cursor: "pointer" }}>
              alx movie app
            </h1>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "30px 20px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "30px" }}>Browse Movies</h2>

        {loading && (
          <div style={{ textAlign: "center", padding: "60px 20px", fontSize: "18px", color: "#999" }}>
            Loading movies...
          </div>
        )}

        {error && (
          <div style={{ textAlign: "center", padding: "60px 20px", fontSize: "18px", color: "#f44" }}>
            {error}
          </div>
        )}

        {!loading && movies.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
              gap: "20px",
            }}
          >
            {movies.map((movie) => (
              <div
                key={movie.id}
                style={{
                  backgroundColor: "#222",
                  borderRadius: "8px",
                  overflow: "hidden",
                  textAlign: "center",
                }}
              >
                <div style={{ position: "relative", width: "100%", paddingBottom: "133.33%" }}>
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    fill
                    style={{ objectFit: "cover" }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='220'%3E%3Crect fill='%23444' width='150' height='220'/%3E%3Ctext x='50%' y='50%' fill='%23999' text-anchor='middle' dy='.3em' font-size='14'%3ENo Image%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div style={{ padding: "12px" }}>
                  <h3
                    style={{
                      margin: "0 0 8px 0",
                      fontSize: "14px",
                      fontWeight: "bold",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {movie.title}
                  </h3>
                  <p style={{ margin: "0 0 8px 0", fontSize: "12px", color: "#999" }}>
                    {movie.year}
                  </p>
                  <p style={{ margin: "0 0 12px 0", fontSize: "11px", color: "#aaa" }}>
                    by {movie.author}
                  </p>
                  <button
                    style={{
                      backgroundColor: "#0066cc",
                      color: "#fff",
                      border: "none",
                      padding: "8px 16px",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "12px",
                      fontWeight: "bold",
                      width: "100%",
                    }}
                    onMouseOver={(e) => {
                      (e.target as HTMLButtonElement).style.backgroundColor = "#0052a3";
                    }}
                    onMouseOut={(e) => {
                      (e.target as HTMLButtonElement).style.backgroundColor = "#0066cc";
                    }}
                  >
                    View More
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && movies.length === 0 && !error && (
          <div style={{ textAlign: "center", padding: "60px 20px", fontSize: "18px", color: "#999" }}>
            No movies found
          </div>
        )}
      </main>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#222",
          padding: "20px",
          textAlign: "center",
          color: "#999",
          marginTop: "40px",
          borderTop: "2px solid #333",
        }}
      >
        <p style={{ margin: "0" }}>&copy; 2024 alx movie app. All rights reserved.</p>
      </footer>
    </div>
  );
}
