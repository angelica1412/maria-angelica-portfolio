import "./globals.css";

export const metadata = {
  title: "Maria Angelica Vinesytha Chandrawan — AI/ML Portfolio",
  description:
    "Final-year Informatics student focused on AI/ML. Building a RAG document Q&A system with Human-in-the-Loop, computer vision (YOLO & OCR), NLP, and full-stack projects.",
  keywords: ["Maria Angelica", "AI", "Machine Learning", "RAG", "Computer Vision", "NLP", "Portfolio"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..600&family=Nunito+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
