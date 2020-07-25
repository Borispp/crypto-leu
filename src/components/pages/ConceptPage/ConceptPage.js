import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';

import Header from 'components/containers/Header';
import Footer from 'components/containers/Footer';

import imgMD from "../../../assets/img/md.png";
import imgEmission from "../../../assets/img/concept_emission.jpg";
import imgRegistration from "../../../assets/img/concept_registration.jpg";
import { ReactComponent as InfoIcon } from "../../../assets/icons/info.svg";

const ConceptPage = () => {
  const [positions, setPositions] = useState([]);
  const [scroll, setScroll] = useState(0);
  const conceptItem1 = useRef();
  const conceptItem2 = useRef();
  const conceptItem3 = useRef();
  const conceptItem4 = useRef();
  const conceptItem5 = useRef();
  const conceptItem6 = useRef();
  const conceptItem7 = useRef();
  const conceptItem8 = useRef();

  useEffect(() => {
    setPositions([conceptItem1, conceptItem2, conceptItem3, conceptItem4, conceptItem5, conceptItem6, conceptItem7, conceptItem8].map((concept) => concept.current.getBoundingClientRect().top + window.scrollY - 40));
    const handleScroll = () => { setScroll(window.scrollY) };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToRef = ref => window.scrollTo({ top: ref.current.offsetTop + window.innerHeight - 100, behavior: 'smooth' });

  return (
    <div className="app">
      <Header>
        <div className="row">
          <div className="app-header__content">
            <div className="app-header__content-text">
              <div className="app-header__content-text-headline">Cripto Leu</div>

              <h1 className="app-header__content-text-title">
                Concept
              </h1>

              <div className="app-header__content-text-description">
                Cripto LEU este o criptovaluta cu o rata fixa de emisie de <strong>100 cMDL</strong> pe zi per participant. Participant poate fi orice cetatean al Republicii Moldova care detine un cont Facebook si este localizat in Republica Moldova.
              </div>
            </div>

            <div className="app-header__content-image md">
              <img src={imgMD} alt=""/>
            </div>
          </div>
        </div>
      </Header>

      <div className="row">
        <div className="concept__wrapper">
          <div className="concept__menu">
            <li className={classNames("concept__menu-item", { active: scroll < positions[1]  })}><span onClick={() => scrollToRef(conceptItem1)}>Emisie</span></li>
            <li className={classNames("concept__menu-item", { active: scroll > positions[1] && scroll < positions[2] })}><span onClick={() => scrollToRef(conceptItem2)}>Circulatie</span></li>
            <li className={classNames("concept__menu-item", { active: scroll > positions[2] && scroll < positions[3] })}><span onClick={() => scrollToRef(conceptItem3)}>Utilizarea portofelului Cripto LEU</span></li>
            <li className={classNames("concept__menu-item", { active: scroll > positions[3] && scroll < positions[4] })}><span onClick={() => scrollToRef(conceptItem4)}>Transfer de Cripto LEI</span></li>
            <li className={classNames("concept__menu-item", { active: scroll > positions[4] && scroll < positions[5] })}><span onClick={() => scrollToRef(conceptItem5)}>Costul transferului</span></li>
            <li className={classNames("concept__menu-item", { active: scroll > positions[5] && scroll < positions[6] })}><span onClick={() => scrollToRef(conceptItem6)}>Inregistrarea in sistem</span></li>
            <li className={classNames("concept__menu-item", { active: scroll > positions[6] && scroll < positions[7] })}><span onClick={() => scrollToRef(conceptItem7)}>Operatorul</span></li>
            <li className={classNames("concept__menu-item", { active: scroll > positions[7] })}><span onClick={() => scrollToRef(conceptItem8)}>Parametrii sistemului</span></li>
          </div>

          <div className="concept__content">
            <div className="concept__item" ref={conceptItem1}>
              <h2>Emisie</h2>
              <p>
                Fiecare participant este eligibil sa revendice o emisie de <b>100 cMDL fiecare 24 de ore</b>. Deci odata la 24 de ore, apasand butonul <b>"Emite"</b>, utilizatorul primeste pe cont aceasta emisie de Cripto LEI.
                <br/>
                Daca utilizatorul nu revendica suma dupa ce a trecut perioada de revendicare (24 ore), sumele precedente nu se acumuleaza. Deci daca utilizatorul nu isi revendica suma timp de 4 zile, nu va revendica de patru ori cate 100 MDL ci doar o singura data.
              </p>

              <p>Dupa fiecare revendicare, timer-ul se reseteaza. Daca un utilizator nu si-a revendicat emisia Vineri la 19:00, ci si-a revedicat-o Sambata la 10:00, urmatoarea revendicare va fi posibila urmatoarea Sambata la ora 10:00 (nu Vineri la 19:00).</p>

              <p>Perioada intre revendicari este setata in numar de blocuri (blocul este o unitate de masura a timpului pe blockchain, 1 bloc este egal cu aproximativ 14s, dar poate varia) si din acest motiv perioada intre emisii poate dura de la 6.5 pana la 7.5 zile. Acest fapt nu dauneaza sistemului, deoarece aceasta variatie afecteaza in mod egal toti participantii.</p>

              <p>Fiecare participant are momentul sau de revendicare (nu este un moment cand toti utilizatorii fac revendicarile simultan, fiecare utilizator isi are termenul sau de asteptare in dependenta de momentul ultimii revendicari).</p>

              <img src={imgEmission} alt="Emisie"/>
            </div>

            <div className="concept__item" ref={conceptItem2}>
              <h2>Circulatie</h2>
              <p>Pentru a combate inflatia in sistem, a fost introdus un commision de ardere pentru fiecare suma transferata. Comisionul de ardere de <b>0.75%</b> se aplica fiecarui transfer dintr-un cont in altul. Suma colectata este distrusa si scoasa din circulatie, astfel micsorand cantitatea totala de cMDL in circulatie.</p>
              <p>De exemplu, atunci cand Anatol transfera 100 cMDL catre Boris,  <b>0.75 cMDL</b> se retrag din suma receptionata si se elimina din circulatie.</p>
            </div>

            <div className="concept__item" ref={conceptItem3}>
              <h2>Utilizarea portofelului Cripto LEU</h2>
              <p>Oricine poate utiliza aplicatia Cripto LEU pentru a receptiona si efectua transferuri. Pentru a folosi portofelul este doar necesar sa descarci aplicatia si sa creezi un portofel nou. Portofelul Cripto LEU poate fi folosit pentru a detine alte criptovalute precum Bitcoin (BTC) sau Ethereum (ETH). Aceasta functionalitate va fi adaugata in Faza 2 sau 3.</p>

              <div className="concept__info">
                <InfoIcon className="concept__info-icon" />
                <p>Nu orice portofel poate revendica emisii. Doar portofelele inregistrate in sistem pot efectua emisii. Cititi in detalii mai jos.</p>
                <p>Insa orice portofel poate primi si transmite fonduri. Poate fi folosit de indivizi sau afaceri pentru a receptiona si a face plati.</p>
              </div>
            </div>

            <div className="concept__item" ref={conceptItem4}>
              <h2>Transfer de Cripto LEI</h2>
              <p>Cripto LEUL poate fi transferat de pe un portofel pe altul fara restrictii. Transferul dureaza 5-20s si imediat apare in contul recipientului si poate fi transferat mai departe. Procesul este descentralizat prin implementarea standardului ERC20 <a href="#">https://eips.ethereum.org/EIPS/eip-20</a>.</p>
            </div>

            <div className="concept__item" ref={conceptItem5}>
              <h2>Costul transferului</h2>
              <p>Fiecare transfer percepe un comision de <b>0.25%</b> platit la trimitere de fonduri. Destinatarul nu achita comision de transfer.</p>
            </div>

            <div className="concept__item" ref={conceptItem6}>
              <h2>Inregistrarea in sistem</h2>
              <p>Inregistrarea in sistem permite revendicarea emisiilor. Inregistrarea se efectueaza prin intermediul aplicatiei Cripto LEU, unde la lansare utilizatorul trebue sa se autentifice folosind contul sau de Facebook. Utilizatorul este inregistrat o singura data si doar daca are in profilul sau de Facebook setat Locatia si Orasul de bastena (Hometown) ca fiind in Republica Moldova. Daca particpantul idi pierde telefonul mobil, se poate re-inregistra de pe alt dispozitiv folosind acelasi cont de Facebook si va primi revendicarile noi pe dispozitivul nou. Fondurile ramase pe dispozitivul vechi nu vor putea fi recuperate daca utilizatorul nu mai are acces la dispozitiv si nu si-a salvat cheia privata.</p>
              <p>Facebook-ul este foarte riguros in combaterea conturilor multiple. Putem fi rezonabil de siguri ca numarul jucatorilor ne onesti (cei care au conturi multiple setate in Republica Moldova ca locatie si hometown) nu va fi unul care ar putea pune in pericol sistemul Cripto LEU. Conturile false vor fi scanate automat si vor putea fi raportate de utilizatori, iar conturile demonstrat false nu vor mai putea revendica emisii.</p>
              <p>Toate inregistrarile de conturi sunt publice, si se pot vedea direct pe blockchain, fiecare cont avand o adresa de portofel si un Facebook ID. Facebook ID-ul poate fi inserat in URL-ul <b>"facebook.com/user/:FacebookID"</b>. Astfel fiecare cont inregistrat poate avea autenticitatea demonstrata.</p>
              <p>Daca se afla ca s-a inregistrat un cont care nu trebuia sa fie inregistrat (din motiv ca este un cont dublat sau ca nu este o persoana din Republica Moldova) atunci operatorul poate bloca acel portofel de la primirea emisiilor. Utilizatorul va ramane in posesia fondurilor si le va putea transfera fara restrictie, dar nu va revendica emisii.</p>

              <img src={imgRegistration} alt="Inregistrarea in sistem"/>
            </div>

            <div className="concept__item" ref={conceptItem7}>
              <h2>Operatorul</h2>
              <p>Contul operatorului poate inregistra participanti in sistem si modifica parametrii sistemul (conform regulilor prestabilite). Deasemeni, operatorul are posibilitatea de a bloca si debloca abilitatea de revendicare pentru conturile participantilor. </p>

              <div className="concept__info">
                <InfoIcon className="concept__info-icon" />
                <p>Operatorul nu poate ingheta fonduri pe contul utilizatorului. Nimeni nu poate restrictiona accesul utilizatorului la fondurile din cont, utilizatorul are mereu abilitatea de a transfera fondurile sale fara restrictii si fara a avea nevoie de aplicatia Cripto LEU (direct pe blockchain). Orice cont poate fi accesat doar prin cheia privata a utilizatorului. Nimeni nu are acces la cheia privata a utilizatorului cu exceptia cand utilizatorul o divulga benevol.</p>
              </div>
            </div>

            <div className="concept__item" ref={conceptItem8}>
              <h2>Parametrii sistemului</h2>
              <p>Parametrii sistemului puteti vedea <a href="#">aici</a>.</p>

              <div className="concept__info">
                <InfoIcon className="concept__info-icon" />
                <p>
                  <span className="green">ATENTIE:</span> Crypto LEUL este emis independent de Guvernul Republicii Moldova si de Banca Nationala a Moldovei, este o valuta virtuala descentralizata care opereaza dupa reguli preprogramate si nu poate fi interferata sau oprita de nimeni.
                </p>

                <p>
                  Cripto LEUL este un contract inteligent ce ruleaza pe Ethereum blockchain. Contractele inteligente functioneaza conform regulilor de guvernare programate in ele si nu pot fi manipulate de nimeni. Conceptul "Code-as-law" inseamna ca in loc de lege se foloseste libajul de programare, care este determinist si nu poate fi interpretat decat sub o singura forma.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ConceptPage;
