
import "./globals.css";

export const metadata = {
	title: {
		template: "%s | Landrup Dans",
		default: "Landrup Dans"
	},
	description: "A mobile web application for a dance school"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
