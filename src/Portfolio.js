import React from 'react';
import GitInfo from './GitInfo';

function Portfolio() {
  return (
    <div>
      <GitInfo />
    </div>
  );
}

export default Portfolio;

// import React from 'react'
// import GetGitInfo from "./GetGitInfo"

// import './css/Portfolio.css';


// const Portfolio = () => {

//   return (
//     <div>
//       <main>
//         <h1 className="portfolio-title">Portfolio</h1>
//         <article className="projects">
//             <div className="bomb-game">
//                 <img id="bomb-game-image" src={require("./css/images/Game-1.PNG")} alt="ett spel med fyra personer och en bomb" />
//                 <section className="bomb-game-content">
//                     <h1>Don't Catch The Bomb</h1>
//                     <p>Don't Catch The Bomb är ett minigame som jag håller på att programmera just nu.
//                         Jag började med detta spel då jag ville skapa ett mindre spel
//                         till 100% som inte tar för långt tid. Projektet skapades även för att
//                         skapa en plan och hålla sig till en deadline.
//                     </p>
//                     <a href="#modal-bomb-game">mer info och bilder</a>
//                 </section>
//                 <div id="modal-bomb-game">
//                     <section className="modal-bomb-game-window">
//                         <a className="modal-bomb-game-close" href="#">X</a>
//                         <div className="bomb-game-images">
//                             <img src={require("./css/images/Game-1.PNG")} alt="Ett spel med fyra personer och en bomb" />
//                             <img src={require("./css/images/Game-3.PNG")} alt="ett spel med fyra personer och en bomb under spelets lopp" />    
//                             <img className="only-fullscreen-images" src={require("./css/images/Game-4.PNG")} alt="ett spel med fyra personer och en bomb, en spelare exploderat"/>  
//                             <img className="only-fullscreen-images" src={require("./css/images/Game-5.PNG")} alt="ett spel med fyra personer och en bomb under spelets lopp med liv-ui"/>  
//                         </div>
//                         <h2>Don't Catch The Bomb</h2>
//                         <p>Don't Catch The Bomb är ett minigame som jag håller på att programmera just nu.
//                             Jag började med detta spel då jag ville skapa ett mindre spel till 100% som inte tar
//                             för långt tid. Projektet skapades även för att skapa en plan och hålla sig till
//                             en deadline.<br />
//                             Spelet går ut på att man skickar bomben vidare medan bombens timer tickar, den som
//                             håller i bomben när timern har gått ut exploderar och tappar ett liv, tappar man tre
//                             liv så är man ute och har förlorat. Don't Catch The Bomb kan spelas 1-4 spelare, där
//                             överblivande spelare ersätts av AI. Alla pixelart objekt är skapade av mig.</p>
//                     </section>
//                 </div>
//             </div>
//             <div className="shoppinglist-program">
//                 <img id="shoppinglist-program-image" src={require("./css/images/Shoppinglist-cropped.PNG")}
//                     alt="ett program med en inköpslista" />
//                 <section className="shoppinglist-program-content">
//                     <h1>Shoppinglist-program</h1>
//                     <p>Shoppinglist-programmet skapade jag huvudsakligen för att programmera ett eget
//                         program utan anvisningar samt för att lära mig nedsparing i xml format och
//                         användning av en SQL-databas.
//                     </p>
//                     <a href="#modal-shoppinglist-program">mer info och bilder</a>
//                 </section>
//                 <div id="modal-shoppinglist-program">
//                     <section className="modal-shoppinglist-program-window">
//                         <a className="modal-shoppinglist-program-close" href="#">X</a>
//                         <div className="shoppinglist-program-images">
//                             <img src={require("./css/images/Shoppinglist.PNG")} alt="ett program med en inköpslista" />
//                             <img className="only-fullscreen-images" src={require("./css/images/Shoppinglist-2.PNG")} alt="En inköpslista på mailen"/>      
//                         </div>
//                         <h2>Shoppinglist-program</h2>
//                         <p>Shoppinglist-programmet skapade jag huvudsakligen för att programmera ett eget
//                             program utan anvisningar samt för att lära mig nedsparing i xml format och
//                             användning av en SQL-databas.<br />
//                             Shoppinglist-program är som namnet redan avslöjer ett program där man kan skapa en
//                             inköpslista, man kan även spara recept som man sen i sin helhet kan lägga tillsammans på
//                             listan. Sen när man är klar med listan så mailas den till ens mail.
//                         </p>
//                     </section>
//                 </div>
//             </div>
//             <div className="horror-game">
//                 <img id="horror-game-image" src={require("./css/images/horrorgame-1-cropped.png")}
//                     alt="En mörk bild i en stad av ett 3D-spel" />
//                 <section className="horror-game-content">
//                     <h1>Last Walk Home</h1>
//                     <p>Last Walk Home är mitt långtids projekt, ett stereotypisk skräckspel som går ut
//                         på att överleva så länge som möjligt medan man blir jagat.
//                     </p>
//                     <a href="#modal-horror-game">mer info och bilder</a>
//                 </section>
//                 <div id="modal-horror-game">
//                     <section className="modal-horror-game-window">
//                         <a className="modal-horror-game-close" href="#">X</a>
//                         <div className="horror-game-images">
//                             <img src={require("./css/images/horrorgame-1.png")} alt="En mörk bild i en stad av ett 3D-spel" />
//                             <img src={require("./css/images/horrorgame-2.png")} alt="En mörk bild i en park av ett 3D-spel" />
//                             <img className="only-fullscreen-images" src={require("./css/images/horrorgame-4.png")} alt="En ljus bild i en stad av ett 3D-spel" />
//                             <img className="only-fullscreen-images" src={require("./css/images/horrorgame-5.png")}   alt="En ljus bild på några hus av ett 3D-spel" /> 
//                         </div>
//                         <h2>Last Walk Home</h2>
//                         <p>Last Walk Home är mitt långtidsprojekt, ett stereotypisk skräckspel som går ut
//                             på att överleva så länge som möjligt medan man blir jagat.<br />
//                             Last Walk Home är fortfarande i en väldigt tidigt utvecklingsfas, alla 3D-objekt i Spelet
//                             har jag skapat i Blender och hittils är bara världen och spelarens rörelse och styrning klar.
//                         </p>
//                     </section>
//                 </div>
//             </div>
//                 <section>
//                     <GetGitInfo/>
//                 </section>
//         </article>
//     </main>
//     </div>
//   )
// }
// export default Portfolio