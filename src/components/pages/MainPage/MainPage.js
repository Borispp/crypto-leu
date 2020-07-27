import React, { Component } from 'react';
import classNames from 'classnames';

import Header from 'components/containers/Header';
import Footer from 'components/containers/Footer';
import Button from 'components/elements/Button';

import {ReactComponent as Logo} from "../../../assets/icons/logo.svg";
import {ReactComponent as AppleLogo} from "../../../assets/icons/apple.svg";
import {ReactComponent as GPLogo} from "../../../assets/icons/google-play.svg";
import {ReactComponent as EmissionIcon} from "../../../assets/icons/emission.svg";
import {ReactComponent as DecentralizedIcon} from "../../../assets/icons/decentralized.svg";
import {ReactComponent as ProgrammingIcon} from "../../../assets/icons/programming.svg";
import {ReactComponent as PageLineIcon} from "../../../assets/icons/page-line.svg";
import imgMobile from "../../../assets/img/mobile.png";
import imgMobileCont from "../../../assets/img/mobile_cont.png";
import imgMobilePayment from "../../../assets/img/mobile_payment.png";

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: 'personal',
      person: 'sellers',
    }
  }

  setInfo = info => e => {
    e.preventDefault();
    this.setState({ info });
  };

  setPerson = person => e => {
    e.preventDefault();
    this.setState({ person });
  };

  render() {
    const { info, person } = this.state;

    return (
      <div className="app">
        <Header>
          <div className="row">
            <div className="app-header__content">
              <div className="app-header__content-text">
                <div className="app-header__content-text-headline">CRIPTOMONEDA NAȚIONALĂ A MOLDOVEI</div>

                <h1 className="app-header__content-text-title">
                  Prima Monedă
                  <br/>
                  Emisă de Oameni
                </h1>

                <div className="app-header__content-text-description">
                  Emite câte <b>100 cMDL</b> fiecare 24 de ore direct din aplicație.
                </div>

                <div className="app-header__content-text-applications">
                  <a href="#" className="btn__mobile-store">
                    <div className="btn__mobile-store-icon">
                      <AppleLogo />
                    </div>

                    <div className="btn__mobile-store-text">
                      <div className="btn__mobile-store-label">Descarca pe</div>
                      App Store
                    </div>
                  </a>
                  <a href="#" className="btn__mobile-store">
                    <div className="btn__mobile-store-icon">
                      <GPLogo />
                    </div>

                    <div className="btn__mobile-store-text">
                      <div className="btn__mobile-store-label">Descarca pe</div>
                      Google Play
                    </div>
                  </a>
                </div>
              </div>

              <div className="app-header__content-image mobile-shadow">
                <img src={imgMobile} alt="" />
              </div>
            </div>
          </div>
        </Header>

        <div className="row">
          <div className="info__content">
            <h2 className="headline-pink">MOLDOVA MERITĂ O MONEDĂ MAI BUNĂ</h2>
            <p className="info__content-text">Cripto LEUL este o versiune digitală a leului Moldovenesc, care este emisă în mod transparent de oameni vii și nu de structuri ale statului prin combinații obscure de emisie și creditare. Toate emissile și tranzacțiile sunt înregistrate într-un jurnal public accesibil tuturor.</p>

            <div className="info__list">
              <div className="info__list-item">
                <div className="info__list-icon">
                  <EmissionIcon />
                </div>

                <h3 className="info__list-headline">Emisie Fixă</h3>
                <p>Aceiași rată și perioadă de emisie este aplicată tuturor participanților.</p>
              </div>

              <div className="info__list-item">
                <div className="info__list-icon">
                  <DecentralizedIcon />
                </div>
                <h3 className="info__list-headline">Descentralizare</h3>
                <p>Cripto LEUL este un proect descentralizat ce rulează pe Ethereum blockchain. Nu are un proprietar sau un centru de comandă.</p>
              </div>

              <div className="info__list-item">
                <div className="info__list-icon">
                  <ProgrammingIcon />
                </div>
                <h3 className="info__list-headline">În Totalitate Programat</h3>
                <p>În Cripto LEU nu există factori de decizie, toată logica este programată într-un contract inteligent care rulează de la sine și nu poate fi stopat de nimeni.</p>
              </div>

            </div>
          </div>
        </div>

        <div className="main-page__page-line">
          <PageLineIcon className="main-page__page-line-icon" />
        </div>

        <div className="row">
          <div className="main-page__account">
            <div className="main-page__account-content">
              <div className="main-page__account-label">Tipuri de Conturi</div>

              <div className="main-page__account-title">Creareă cont pentru necesitățile tale</div>

              <p className="main-page__account-buttons">
                <a href="#" onClick={this.setInfo('personal')} className={classNames("main-page__account-button", { active: info === 'personal' })}>Contul Personalizat</a>
                <a href="#" onClick={this.setInfo('anonim')} className={classNames("main-page__account-button", { active: info === 'anonim' })}>Contul Anonim</a>
              </p>

              {info === 'personal' && <p className="main-page__account-description">
                Permite utilizatorului să primească câte 30 cMDL zilnic din interiorul aplicației, cu condiția că utilizatorul are un cont Facebook activ și este localizat în Republica Moldova <b>(locația și localitatea de baștină)</b>.
              </p>}

              {info === 'anonim' && <p className="main-page__account-description">
                Anomin description
              </p>}

              <Button href="#" text="Crează cont din aplicație" />
            </div>

            <div className="main-page__account-image">
              <img src={imgMobileCont} alt=""/>
            </div>

          </div>
        </div>

        <div className="row">
          <div className="main-page__persons">
            <p className="main-page__account-buttons">
              <a href="#" onClick={this.setPerson('sellers')} className={classNames("main-page__account-button", { active: person === 'sellers' })}>Pentru Vânzători</a>
              <a href="#" onClick={this.setPerson('buyers')} className={classNames("main-page__account-button", { active: person === 'buyers' })}>Pentru Cumpărători</a>
            </p>

            <div className="main-page__persons-title">
              {person === 'sellers' &&
                <p>Acceptă cMDL că formă de plată (integrală sau parțială) în afacerea ta și expune-ți afacerea la miile de utilizatori ai monedei Cripto LEU.</p>
              }

              {person === 'buyers' &&
                <p>Achită bunuri sau servicii, parțial sau integral folosind cMDL</p>
              }
            </div>

            <div className="main-page__persons-image-wrap">
              <div className="main-page__persons-logo"><Logo /></div>
              <div className="main-page__persons-image">
                <img src={imgMobilePayment} alt="" className="main-page__persons-image-mobile"/>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default MainPage;
