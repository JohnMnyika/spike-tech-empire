import { useEffect } from "react";
import type { AppProps } from "next/app"; // Import AppProps type
import "../styles/globals.css"; // Adjust the path to your global styles

function MyApp({ Component, pageProps }: AppProps) { // Add type annotation for props
    useEffect(() => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = "https://embed.tawk.to/67b4988e141895190e22088e/1ikcn7rvd";
        script.charset = "UTF-8";
        script.setAttribute("crossorigin", "*");
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp;