import React from 'react';
// UIs
import Navbar from '../uis/Navbar.jsx';
import SectionBody from '../uis/SectionBody.jsx';
import Footer from '../uis/Footer.jsx';

export default class App extends React.Component {
  render() {
    return (
      // <main>
      //   <div className="navbar">
      //     Navbar
      //   </div>
      //   <section id="body">
      //     <div className="box">1</div>
      //     <div className="box">2</div>
      //     <div className="box">3</div>
      //   </section>
      //   <footer>
      //     Footer
      //   </footer>
      // </main>
      <main>
        <Navbar />
        <SectionBody content="ADACODE"/>
        <Footer />
      </main>
    );
  }
}
