import Info  from "./components/Info";
import About from "./components/About";
import Interest from "./components/Interest";
import Footer from "./components/Footer";

export default function App() {
  return(
    <section className="card-content"> 
      <Info />
      <About />
      <Interest />
      <Footer />
    </section>
  )
}