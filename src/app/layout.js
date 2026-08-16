export const metadata = {
  title: 'ThermaMatch Nigeria - Industrial Heat Exchange Network',
  description: 'An anonymous B2B matching platform for industrial waste heat recovery and cleaner energy transitions in Nigeria.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50/50">
        {children}
      </body>
    </html>
  );
}
