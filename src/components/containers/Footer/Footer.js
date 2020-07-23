import React from 'react';

import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import {ReactComponent as AppleLogo} from "assets/icons/apple.svg";
import {ReactComponent as GPLogo} from "assets/icons/google-play.svg";
import imgFB from "assets/img/fb.png";

class Footer extends React.PureComponent {
  render() {
    return (
      <div className="app-footer">
        <div className="row">
          <div className="app-footer__top">
            <div className="app-footer__top-left">
              <div className="app-footer__logo">
                <Logo />
                Cripto LEU
              </div>
            </div>

            <div className="app-footer__top-right">
              <div className="app-footer__top-links">
                <ul className="app-footer__top-menu">
                  <li><a href="#">Concept</a></li>
                  <li><a href="#">Parametrii sistemului</a></li>
                  <li><a href="#">Cum pot folosi?</a></li>
                  <li><a href="#">Circulatia</a></li>
                  <li><a href="#">Politica de Confidentialitate</a></li>
                </ul>

                <div className="app-footer__applications">
                  <a href="#" className="btn__mobile-store">
                    <div className="btn__mobile-store-icon">
                      <AppleLogo />
                    </div>

                    <div className="btn__mobile-store-text">
                      <div className="btn__mobile-store-label">Descarca pe</div>
                      App Store
                    </div>
                  </a>
                  <br/>
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

              <div className="app-footer__description">
                Cripto LEUL nu este emis de către Banca Națională a Moldovei sau Guvernul Republicii Moldova, este o criptomonedă descentralizată ce rulează pe Ethereum Blockchain în baza unui smart contract. Folosirea site-ului și a aplicației presupune acceptul condițiilor stipulate în smart contract. Smart contract-ul nu poate fi alterat și nu poate fi forțat să funcționeze diferit decât condițiile stipulate în acesta.
              </div>
            </div>

          </div>

          <div className="app-footer__contacts">
            <div className="app-footer__contacts-copy">@2020 CriptoLEU</div>
            <div className="app-footer__contacts-fb">
              <div className="app-footer__contacts-fb-text">
                Pentru suport Trimite mesaj spre <br/> pagina <span>Cripto LEU</span> de pe Facebook
              </div>

              <a href="#" className="app-footer__contacts-fb-button">
                <img src={imgFB} alt=""/>
                Messenger
              </a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
