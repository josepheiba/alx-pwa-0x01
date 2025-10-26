import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Using Open Library Movie API (free, no auth required)
    const response = await fetch(
      "https://openlibrary.org/search.json?subject=film&limit=20&has_fulltext=true"
    );

    if (!response.ok) throw new Error("Failed to fetch");

    const data = await response.json();

    // Transform the data to look like movie data
    const movies = (data.docs || [])
      .filter((book: any) => book.cover_i)
      .slice(0, 12)
      .map((book: any, idx: number) => ({
        id: book.key || idx,
        title: book.title || "Unknown",
        image: `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`,
        year: book.first_publish_year || "N/A",
        author: (book.author_name || ["Unknown"])[0],
      }));

    res.status(200).json({ success: true, movies });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Failed to fetch movies" });
  }
}
