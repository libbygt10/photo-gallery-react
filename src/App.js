import React from "react";
import ContactCard from "./ContactCard";
import Image from "react-image-resizer";
import "./App.css";
import Footer from "./Footer";

function App() {
  return (
    <div className="contacts">
      <fragment className="vacationh1">
        <h1>Vacation Pics: 2016-2020</h1>
      </fragment>
      <br />
      <ContactCard
        contact={{
          location: "The Oculus",
          imgUrl: "/images/oculus-wtc-dec2016.jpg",
          city: "New York, NY",
          month: "December",
          year: "2016"
        }}
      />
      <ContactCard
        contact={{
          location: "Guggenheim Museum",
          imgUrl: "/images/guggenheim-dec2016.jpg",
          city: "New York, NY",
          month: "December",
          year: "2016"
        }}
      />
      <ContactCard
        contact={{
          location: "Penn's Cave",
          imgUrl: "/images/penns-cave-feb2017.jpg",
          city: "Centre Hall, PA",
          month: "February",
          year: "2017"
        }}
      />
      <ContactCard
        contact={{
          location: "Casa Loma",
          imgUrl: "/images/casa-loma-dec2017.jpg",
          city: "Toronto, CA",
          month: "December",
          year: "2017"
        }}
      />
      <ContactCard
        contact={{
          location: "Jardin du Luxembourg",
          imgUrl: "/images/jardin-du-luxembourg-aug2018.jpg",
          city: "Paris, FR",
          month: "August",
          year: "2018"
        }}
      />
      <ContactCard
        contact={{
          location: "Arc de Triomphe",
          imgUrl: "/images/arc-de-triomphe-aug2018.jpg",
          city: "Paris, FR",
          month: "August",
          year: "2018"
        }}
      />
      <ContactCard
        contact={{
          location: "Palace de Versailles",
          imgUrl: "/images/palace-de-versailles-aug2018.jpg",
          city: "Paris, FR",
          month: "August",
          year: "2018"
        }}
      />
      <ContactCard
        contact={{
          location: "La Basilique du Sacre Coeur",
          imgUrl: "/images/la-basilique-du-sacre-coeur-aug2018.jpg",
          city: "Paris, FR",
          month: "August",
          year: "2018"
        }}
      />

      <ContactCard
        contact={{
          location: "Suntrust Park",
          imgUrl: "/images/suntrust-park-sep2018.jpeg",
          city: "Atlanta, GA",
          month: "September",
          year: "2018"
        }}
      />

      <ContactCard
        contact={{
          location: "Ponce City Market",
          imgUrl: "/images/ponce-city-market-sep2018.jpeg",
          city: "Atlanta, GA",
          month: "September",
          year: "2018"
        }}
      />

      <ContactCard
        contact={{
          location: "House Of Blues",
          imgUrl: "/images/house-of-blues-feb2019.jpg",
          city: "Cleveland, OH",
          month: "February",
          year: "2019"
        }}
      />

      <ContactCard
        contact={{
          location: "Snoqualmie Falls",
          imgUrl: "/images/snoqualmie-falls-feb2019.jpg",
          city: "Seattle, WA",
          month: "February",
          year: "2019"
        }}
      />

      <ContactCard
        contact={{
          location: "Skyview Observatory at Columbia Tower",
          imgUrl: "/images/columbia-tower-feb2019.jpg",
          city: "Seattle, WA",
          month: "February",
          year: "2019"
        }}
      />

      <ContactCard
        contact={{
          location: "North Washington Street Bridge",
          imgUrl: "/images/boston-ships-jul2019.jpg",
          city: "Boston, MA",
          month: "July",
          year: "2019"
        }}
      />

      <ContactCard
        contact={{
          location: "John F. Kennedy Presidential Library & Museum",
          imgUrl: "/images/kennedy-library-jul2019.jpg",
          city: "Boston, MA",
          month: "July",
          year: "2019"
        }}
      />
      <ContactCard
        contact={{
          location: "Finger Lakes National Forest",
          imgUrl: "/images/finger-lakes-national-forest-aug2019.jpg",
          city: "Ithaca, NY",
          month: "August",
          year: "2019"
        }}
      />
      <ContactCard
        contact={{
          location: "Chesapeake Bay-Sunset",
          imgUrl: "/images/sunset-rock-hall-aug2019.jpg",
          city: "Rock Hall, MD",
          month: "August",
          year: "2019"
        }}
      />

      <ContactCard
        contact={{
          location: "Longwood Gardens",
          imgUrl: "/images/longwood-gardens-sep2019.jpg",
          city: "Kennett Square, PA",
          month: "September",
          year: "2019"
        }}
      />

      <ContactCard
        contact={{
          location: "Montauk Point State Park",
          imgUrl: "/images/montauk-lighthouse-hamptons-dec2019.jpg",
          city: "Montauk, NY",
          month: "December",
          year: "2019"
        }}
      />
      <ContactCard
        contact={{
          location: "Deep Creek Lake",
          imgUrl: "/images/moon-deep-creek-md-jan2020.jpg",
          city: "Oakland",
          month: "January",
          year: "2020"
        }}
      />
      <fragment className="copyright">
        <Footer />
      </fragment>
    </div>
  );
}

export default App;
