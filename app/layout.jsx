import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
export const metadata = {
  title: "SharePromts",
  description: "Discover ^ Share ^ Promote",
};
const Rootlayout = ({children}) => {
  return <html lang="en">
    <body>
      <div className="main">
        <div className="gradient">

        </div>
      </div>
      <main className="app">
        <Nav />
        {children}
      </main>
    </body>
  </html>;
};

export default Rootlayout;
