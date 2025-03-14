import { useEffect } from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css"; // Adjust the path to your global styles

// Extend the Window interface to include Tawk_API
declare global {
  interface Window {
    Tawk_API?: {
      showWidget: () => void;
    };
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Initialize Tawk.to script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
      (function () {
        var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/67b6177aae5ce4190e0b7d74/1ikfkneam';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
      })();
    `;

    // Append the script to the body
    document.body.appendChild(script);

    // Cleanup function to remove the script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Function to show the chat widget when the user clicks a button
  const handleChatButtonClick = () => {
    if (window.Tawk_API && window.Tawk_API.showWidget) {
      window.Tawk_API.showWidget();
    }
  };

  return (
    <>
      <Component {...pageProps} />
      {/* Add a button to open the chat widget */}
      <button
        onClick={handleChatButtonClick}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          fontSize: "24px",
        }}
        aria-label="Open chat"
      >
        💬
      </button>
    </>
  );
}

export default MyApp;