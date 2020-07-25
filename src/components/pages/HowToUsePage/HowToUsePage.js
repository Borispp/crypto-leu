import React from 'react';

import Header from 'components/containers/Header';
import Footer from 'components/containers/Footer';

import imgHowToUse from "../../../assets/img/howtouse.png";
import imgC2C from "../../../assets/img/howtouse_c2c.jpg";
import imgB2C from "../../../assets/img/howtouse_b2c.jpg";
import imgB2B from "../../../assets/img/howtouse_b2b.jpg";
import Button from "../../elements/Button";

const HowToUsePage = () => {
  return (
    <div className="app">
      <Header>
        <div className="row">
          <div className="app-header__content">
            <div className="app-header__content-text">
              <div className="app-header__content-text-headline">Cum Pot Folosi?</div>

              <h1 className="app-header__content-text-title">
                O Rata Ideala De Ardere
              </h1>

              <div className="app-header__content-text-description">
                Crypto LEUL poate fi folosit pentru plati nerestrictionate intre indivizi, intre indivizi-business, intre business-business.
              </div>
            </div>

            <div className="app-header__content-image howtouse">
              <img src={imgHowToUse} alt=""/>
            </div>
          </div>
        </div>
      </Header>

      <div className="row">
        <div className="howtouse__list">
          <div className="howtouse__wrapper left">
            <div className="howtouse__image">
              <img src={imgC2C} alt=""/>
            </div>

            <div className="howtouse__content">
              <div className="howtouse__label">C2C</div>
              <h2>Intre Indivizi</h2>

              <ul className="list-dots">
                <li>
                  Plata pentru bunurile care se ofera gratis sau cu plata intarziata. Cand un prieten ii ofera altuia un obiect sau serviciu gratis sau cu o plata in viitor printr-o favoare, celalalt il poate achita in Crypto LEU. cMDL astfel devenind o modalitate a contabiliza datoriile unuia fata de altul.
                </li>

                <li>
                  Plata pentru continut creativ. De exemplu donatii pentru creatorii pe YouTube sau alte retele sociale. Creatorul trebue sa accepte donatii in Crypto LEU.
                </li>

                <li>
                  Inchiderea datoriilor la distanta. Daca doua persoane se afla la distanta si nu au acces la o tranzactie in persoana sau alta modalitate de a inchide o restanta, pot folosi Crypto LEUL ca modalitate de a inchide suma restanta.
                </li>
              </ul>

              <br/>
              <Button href="#" text="Crează cont din aplicație" />

              <img src={imgC2C} alt="" className="howtouse__image-mobile"/>
            </div>
          </div>
          <div className="howtouse__wrapper">
            <div className="howtouse__image">
              <img src={imgB2C} alt=""/>
            </div>

            <div className="howtouse__content">
              <div className="howtouse__label">B2C</div>
              <h2>Intre Individ <br/> si Business</h2>

              <ul className="list-dots">
                <li>
                  Afacerile isi pot vinde produsele si serviciile pentru Crypto LEU. Atat pentru produsele fizice cat si pentru produsele sau serviciile digitale.
                </li>

                <li>
                  Un magazin, atelier sau salon, poate tipari codul QR al portofelului sau Crypto LEU si il afisa la casa, astfel avand posibilitatea sa primeasca plati in Crypto LEU.
                </li>

                <li>
                  Companiile pot folosi Crypto LEU pentru a imparti premii sau oferte banesti catre clientii sai.
                </li>

                <li>
                  Organizatiile de caritate si NGO-urile locale si internationale, pot repartiza fonduri catre grupe de cetateni fara restrictii si fara prezenta fizica.
                </li>
              </ul>

              <br/>
              <Button href="#" text="Crează cont din aplicație" />

              <img src={imgB2C} alt="" className="howtouse__image-mobile"/>
            </div>
          </div>
          <div className="howtouse__wrapper left">
            <div className="howtouse__image">
              <img src={imgB2B} alt=""/>
            </div>

            <div className="howtouse__content">
              <div className="howtouse__label">B2B</div>
              <h2>Intre Business <br/> si Business</h2>

              <ul className="list-dots">
                <li>
                  Afacerile care produc sau ofera servicii formate din materie prima locala sau avand o portiune din sinecost formata pe piata locala, pot construi un lant de aprovizionare unde fiecare furnizor din lant este achitat in Crypto LEU, inclusiv si salariile angaajtilor.
                </li>
              </ul>

              <br/>
              <Button href="#" text="Crează cont din aplicație" />

              <img src={imgB2B} alt="" className="howtouse__image-mobile"/>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HowToUsePage;
