import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';

import Header from 'components/containers/Header';
import Footer from 'components/containers/Footer';

import {ReactComponent as PageLineIcon} from "../../../assets/icons/page-line.svg";

const TermsPage = () => {
  return (
    <div className="app">
      <Header className="terms">
        <div>
          <div className="row">
            <div className="app-header__content">
              <div className="app-header__content-text">
                <h1 className="app-header__content-text-title">
                  Politica de Confidentialitate
                </h1>
              </div>
            </div>
          </div>
          <PageLineIcon className="app-header__line-icon" />
        </div>
      </Header>

      <div className="row">
        <div className="terms__content">
          <div className="terms__item">
            <h2>Introducere</h2>
            <ol>
              <li>Acest document este realizat în baza și în conformitate cu Regulamentul General privind Protecția Datelor (GDPR) (UE) 2016/679, cu scopul de a vă informa cu privire la drepturile de care dispuneți în conformitate cu legislația GDPR</li>
              <li>Acest document vi se va aplica, în calitate de Utilizator al site-ului web cryptomdl.com si aplicatatiei Cripto LEU.</li>
            </ol>
          </div>
          <div className="terms__item">
            <h2>Ce date vor fi colectate?</h2>
            <p>Atunci când vă veți crea contul de utilizator și/sau când veți utiliza Serviciul, este posibil să colectăm următoarele date personale:</p>
            <ol>
              <li>Datele necesare creării Contului de Utilizator personalizat: Facebook ID, nume (Facebook), e-mail, localitatea curenta, localitatea de bastina, data nasterii.</li>
              <li>Pentru crearea Contului de utilizator Anonim nu se vor colecta date personale.</li>
            </ol>
          </div>
          <div className="terms__item">
            <h2>Din ce motiv se colectează datele? În ce scop vor fi utilizate informațiile?</h2>
            <p>Unicul scop pentru colectarea informațiilor personale este de a asigura ca aceiasi persona nu potae crea conturi multiple si beneficia de emisii multiple.</p>
          </div>
          <div className="terms__item">
            <h2>Cât timp vor fi stocate datele?</h2>
            <p>Facebook ID-ul folosit pentru crearea unui cont personalizat se va stoca pe blockchain si va ramane acolo pe perioada cat ruleaza blockchain-ul. Alte date precum numele sau email-ul utilizatorului nu vor fi stocate nici in baze de date, nici pe blockchain.</p>
          </div>
          <div className="terms__item">
            <h2>Unde stocăm datele?</h2>
            <p>Facebook ID este stocat pe Ethereum Rinkeby Blockhain.</p>
          </div>
          <div className="terms__item">
            <h2>Ce măsuri de securitate am implementat pentru a vă proteja datele?</h2>
            <p>Pentru a proteja datele Dvs cu caracter personal, noi nu stocam nici o informatie in afara de Facebook ID (un cod format din cifre) nicaieri. Acest Facebook ID fiind informatie publica, nu are nici o valoare in sine.</p>
          </div>

          <div className="terms__item">
            <h2>Datele personale vor fi comunicate altor terțe persoane?</h2>
            <p>Nu. Datele personale nu sunt stocate.</p>
          </div>

          <div className="terms__item">
            <h2>Cum ne puteți contacta?</h2>
            <p>Pentru orice întrebare sau solicitare privind datele dumneavoastră, vă rugăm să ne contactați la următoarea adresă de e-mail: contact@cryptomdl.com</p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default TermsPage;
