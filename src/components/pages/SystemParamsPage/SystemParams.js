import React from 'react';

import Header from 'components/containers/Header';
import Footer from 'components/containers/Footer';

import imgSystemParams from "../../../assets/img/system-params.png";

const SystemParams = () => {
  return (
    <div className="app">
      <Header>
        <div className="row">
          <div className="app-header__content system-params">
            <div className="app-header__content-text">
              <div className="app-header__content-text-headline">Cripto Leu</div>

              <h1 className="app-header__content-text-title">
                Parametrii Sistemului
              </h1>

              <div className="app-header__content-text-description">
                Perametrii definesc logica functionarii sistemului <strong>Crypto LEU</strong>
              </div>
            </div>

            <div className="app-header__content-image system-params">
              <img src={imgSystemParams} alt=""/>
            </div>
          </div>
        </div>
      </Header>

      <div className="row">
        <div className="system-params__wrapper">
          <div className="system-params__table">
            <div className="system-params__table-head">
              <div className="system-params__table-col">Parametru</div>
              <div className="system-params__table-col">Notatie Tehnica</div>
              <div className="system-params__table-col">Flexibil</div>
              <div className="system-params__table-col">Valoare</div>
              <div className="system-params__table-col">Valoare Tehnica</div>
            </div>

            <div className="system-params__table-row">
              <div className="system-params__table-col">
                <div className="system-params__table-label">Parametru</div>
                <div className="system-params__table-title">Suma Emisiei</div>
              </div>
              <div className="system-params__table-col">
                <div className="system-params__table-label">Notatie Tehnica</div>

                <div className="system-params__table-tech-note">emissionAmount</div>
              </div>
              <div className="system-params__table-col">
                <div className="system-params__table-label">Flexibil</div>

                <div>
                  <strong>DA</strong> <b>**</b>
                </div>
              </div>
              <div className="system-params__table-col">
                <div className="system-params__table-label">Valoare</div>
                <strong>200.5</strong> cMDL
              </div>
              <div className="system-params__table-col">
                <div className="system-params__table-label">Valoare Tehnica</div>

                <strong>2005e17</strong>
              </div>
            </div>

            <div className="system-params__table-row">
              <div className="system-params__table-col">
                <div className="system-params__table-label">Parametru</div>
                <div className="system-params__table-title">Perioada Emsisiei</div>
              </div>
              <div className="system-params__table-col">
                <div className="system-params__table-label">Notatie Tehnica</div>

                <div className="system-params__table-tech-note">emissionAmount</div>
              </div>
              <div className="system-params__table-col">
                <div className="system-params__table-label">Flexibil</div>

                <div>
                  <strong>DA</strong> <b>***</b>
                </div>
              </div>
              <div className="system-params__table-col">
                <div className="system-params__table-label">Valoare</div>
                <strong>7 zile</strong>
              </div>
              <div className="system-params__table-col">
                <div className="system-params__table-label">Valoare Tehnica</div>

                <strong>43200</strong> blocuri
              </div>
            </div>

            <div className="system-params__table-row">
              <div className="system-params__table-col">
                <div className="system-params__table-label">Parametru</div>
                <div className="system-params__table-title">Rata de Ardere</div>
              </div>
              <div className="system-params__table-col">
                <div className="system-params__table-label">Notatie Tehnica</div>

                <div className="system-params__table-tech-note">burnFee</div>
              </div>
              <div className="system-params__table-col">
                <div className="system-params__table-label">Flexibil</div>

                <div>
                  <strong>DA</strong> <b>(max. 5%)</b>
                </div>
              </div>
              <div className="system-params__table-col">
                <div className="system-params__table-label">Valoare</div>
                <strong>0.75%</strong>
              </div>
              <div className="system-params__table-col">
                <div className="system-params__table-label">Valoare Tehnica</div>

                <strong>0.0075e18</strong>
              </div>
            </div>

            <div className="system-params__table-row">
              <div className="system-params__table-col">
                <div className="system-params__table-label">Parametru</div>
                <div className="system-params__table-title">Comision Transfer</div>
              </div>
              <div className="system-params__table-col">
                <div className="system-params__table-label">Notatie Tehnica</div>

                <div className="system-params__table-tech-note">txFee</div>
              </div>
              <div className="system-params__table-col">
                <div className="system-params__table-label">Flexibil</div>

                <div>
                  <strong>DA</strong> <b>(max. 1%)</b>
                </div>
              </div>
              <div className="system-params__table-col">
                <div className="system-params__table-label">Valoare</div>
                <strong>0.25%</strong>
              </div>
              <div className="system-params__table-col">
                <div className="system-params__table-label">Valoare Tehnica</div>

                <strong>0.0025e18</strong>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SystemParams;
