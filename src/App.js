import Navbar from "./components/firstSection/Navbar";
import Headshot from "./components/firstSection/Headshot";
import Info from "./components/firstSection/Info";
import Socials from "./components/firstSection/Socials";
import Tools from "./components/secondSection/Tools";
import Languages from "./components/secondSection/Languages";

function App() {
  return (
    <div>
      <main className=" bg-gradient-to-tr to-white from-teal-100 px-10">
        <section className="min-h-screen">
          <Navbar />
          <Headshot />
          <Info />
          <Socials />
        </section>
        <section className=" min-h-screen">
          <Tools />
          <Languages />
        </section>
      </main>
    </div>
  );
}

export default App;
