import React from 'react';

import Header from 'components/containers/Header';
import Footer from 'components/containers/Footer';

import imgCirculation from "../../../assets/img/circulation.png";
import imgCirculationContent from "../../../assets/img/circulation_content.png";
import Button from "../../elements/Button";

const CirculationPage = () => {
  return (
    <div className="app">
      <Header>
        <div className="row">
          <div className="app-header__content">
            <div className="app-header__content-text">
              <div className="app-header__content-text-headline">Circulatia</div>

              <h1 className="app-header__content-text-title">
                O Rata Ideala De Ardere
              </h1>

              <div className="app-header__content-text-description">
                Crypto LEUL poate fi folosit pentru plati nerestrictionate intre indivizi, intre indivizi-business, intre business-business.
              </div>
            </div>

            <div className="app-header__content-image circulation">
              <img src={imgCirculation} alt=""/>
            </div>
          </div>
        </div>
      </Header>

      <div className="row">
        <div className="circulation__wrapper">
          <div className="circulation__image">
            <img src={imgCirculationContent} alt=""/>
          </div>

          <div className="circulation__content">
            <div className="circulation__label">Rata de ardere</div>
            <h2>Asigurarea valorii inalte a Crypto LEU-lui</h2>
            <p>Pentru a asigura o valoare inalta a Crypto LEU-lui este nevoie ca cantiatatea totala de cMDL in circulatie sa fie stabilizata. In acest scop este introdus o rata de ardere, care distruge o proporite din cMDL transferati dintr-un portofel in altul, astfel micsorand cantitatea total de cMDL in circulatie.</p>
            <p>Deci dintr-o parte, emisii noi au loc fiecare saptaman care maresc cantitatea totala de cMDL in circulatie, iar pe de alta parte din suma totala de transferuri (velocitate) se extrage cate un procent mic si se arde, astfel micsorand si balansand emisiile noi cu arderea fondurilor vechi.</p>

            <br/>
            <Button href="#" text="Crează cont din aplicație" />

            <img src={imgCirculationContent} alt="" className="circulation__image-mobile"/>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CirculationPage;
