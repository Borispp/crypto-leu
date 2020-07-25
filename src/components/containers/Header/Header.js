import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import routes from 'routes.json';

import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import { ReactComponent as Search } from 'assets/icons/search.svg';
import { ReactComponent as Wave } from 'assets/icons/wave.svg';
import { ReactComponent as CrossIcon } from 'assets/icons/cross.svg';
import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg';
import { ReactComponent as LoadingIcon } from 'assets/icons/loading.svg';
import { ReactComponent as TransactionInIcon } from 'assets/icons/transaction_in.svg';
import { ReactComponent as TransactionInProgressIcon } from 'assets/icons/transaction_in_progress.svg';
import { ReactComponent as TransactionOutIcon } from 'assets/icons/transaction_out.svg';
import { ReactComponent as TransactionOutProgressIcon } from 'assets/icons/transaction_out_progress.svg';

class Header extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      searchOpen: false,
      menuOpen: false,
      searchAddress: '',
      loading: false,
      searchData: null,
    };
  }

  componentDidMount(){
    document.addEventListener("keydown", this.escFunction, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.escFunction, false);
  }

  escFunction = event => {
    if(event.keyCode === 27) {
      this.setState({ searchOpen: false });
    }
  };

  onSearchFocus = () => {
    this.setState({
      searchOpen: true,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    if (this.state.searchAddress) {
      this.setState({ loading: true, searchOpen: true });

      setTimeout(() => {
        this.setState({
          loading: false,
          searchData: {
            cont: '0xC6563c29f364F7E661FE112A02caA987F87B956f',
            balance: '9,817.23',
            transactionInProgress: {
              contract_address: '0x0000...0000',
              created_at: '16 Apr at 22:22',
              amount: '10,000.00',
              burn_fee: '300'
            },
            transactionOutProgress: {
              contract_address: '0x0000...0000',
              created_at: '16 Apr at 22:22',
              amount: '213.14',
              tx_fee: '2.34'
            },
            transactionIn: {
              contract_address: '0x0000...0000',
              created_at: '16 Apr at 22:22',
              amount: '10,000.00',
              burn_fee: '300'
            },
            transactionOut: {
              contract_address: '0x0000...0000',
              created_at: '16 Apr at 22:22',
              amount: '213.14',
              tx_fee: '2.34'
            },
          }
        });
      }, 2000);
    }
  };

  onSearchChange = ({ target }) => {
    this.setState({ searchAddress: target.value });
  };

  render() {
    const { searchOpen, menuOpen, searchAddress, loading, searchData } = this.state;
    const { children, className } = this.props;

    return (
      <div className={classNames("app-header", className)}>
        <div className="app-header__top">
          <NavLink to={routes.index} className="app-header__logo">
            <Logo />
            <span>
              Cripto LEU
            </span>
          </NavLink>

          <div className={classNames("app-header__menu" )}>
            <NavLink to={routes.concept} className="app-header__menu-item" exact activeClassName="active">Concept</NavLink>
            <NavLink to={routes.systemParams} className="app-header__menu-item" exact activeClassName="active">Parametrii Sistemului</NavLink>
            <NavLink to={routes.howtouse} className="app-header__menu-item" exact activeClassName="active">Cum pot folosi?</NavLink>
            <NavLink to={routes.circulation} className="app-header__menu-item" exact activeClassName="active">Circulatia</NavLink>

            <CrossIcon onClick={() => this.setState({ menuOpen: false })} className="app-header__menu-close"  />
          </div>

          <div className="app-header__search">
            <form onSubmit={this.onSubmit} className={classNames("app-header__search-container", { isOpen: searchOpen })}>
              {!loading && <button disabled={!searchAddress} type="submit" className="app-header__search-submit"><Search className="app-header__search-icon"  /></button>}
              {loading && <LoadingIcon className="app-header__loading-icon" />}
              <input type="text" placeholder="Adresa contului" className="app-header__search-input" onFocus={this.onSearchFocus} onChange={this.onSearchChange} value={searchAddress} />
              {searchOpen && <CrossIcon onClick={() => this.setState({ searchOpen: false })} className="app-header__search-close" />}
            </form>
          </div>

          <div className="app-header__menu-button" onClick={() => this.setState(state => ({ menuOpen: !state.menuOpen }))}>
            <MenuIcon />
          </div>
        </div>

        <div className={classNames("app-header__menu-mobile", { isOpen: menuOpen } )}>
          <NavLink to={routes.concept} className="app-header__menu-item" exact activeClassName="active">Concept</NavLink>
          <NavLink to={routes.systemParams} className="app-header__menu-item" exact activeClassName="active">Parametrii Sistemului</NavLink>
          <NavLink to={routes.howtouse} className="app-header__menu-item" exact activeClassName="active">Cum pot folosi?</NavLink>
          <NavLink to={routes.circulation} className="app-header__menu-item" exact activeClassName="active">Circulatia</NavLink>

          <CrossIcon onClick={() => this.setState({ menuOpen: false })} className="app-header__menu-close"  />
        </div>

        {children}

        <div className="app-header__waves">
          <Wave className="app-header__wave-image app-header__wave-1" />
          <Wave className="app-header__wave-image app-header__wave-2" />
          <Wave className="app-header__wave-image app-header__wave-3" />
        </div>

        {searchOpen && (searchData || loading) && <div className='app-header__search-result'>
          {loading && <LoadingIcon className="app-header__search-result-loading" />}
          {!loading && <div>
            <div className="app-header__search-result-top">
              <div className="app-header__search-result-top-item">
                <div className="app-header__search-result-label">Cont</div>
                <div className="app-header__search-result-top-value">0xC6563c29f364F7E661FE112A02caA987F87B956f</div>
              </div>
              <div className="app-header__search-result-top-item">
                <div className="app-header__search-result-label">Balanta</div>
                <div className="app-header__search-result-top-value balance">
                  <span className="app-header__search-result-top-value-balance">9,817.23</span> cMDL
                </div>
              </div>
            </div>

            <div className="app-header__search-result-body">
              <div className="app-header__search-result-label">Istorie</div>
              <br/>

              <div className="app-header__search-result-transactions-wrapper">
                <div className="app-header__search-result-transactions in">
                  <div className="app-header__search-result-transaction-info">
                    <div className="app-header__search-result-transaction-icon">
                      <TransactionInProgressIcon />
                    </div>
                    <div className="app-header__search-result-transaction-data">
                      <div><b>0x0000...0000</b></div>
                      <div>16 Apr at 22:22</div>
                    </div>
                  </div>

                  <div className="app-header__search-result-transaction-amount">
                    <div className="app-header__search-result-transaction-value"><b>+10,000.00</b> cMDL</div>
                    <div>
                      Ars: <b>300</b> cMDL
                    </div>
                  </div>
                </div>

                <div className="app-header__search-result-transactions out">
                  <div className="app-header__search-result-transaction-info">
                    <div className="app-header__search-result-transaction-icon">
                      <TransactionOutProgressIcon />
                    </div>
                    <div className="app-header__search-result-transaction-data">
                      <div><b>0x0000...0000</b></div>
                      <div>16 Apr at 22:22</div>
                    </div>
                  </div>

                  <div className="app-header__search-result-transaction-amount">
                    <div className="app-header__search-result-transaction-value"><b>-213.14</b> cMDL</div>
                    <div>
                      Comision: <b>2.34</b> cMDL
                    </div>
                  </div>
                </div>

                <div className="app-header__search-result-transactions in">
                  <div className="app-header__search-result-transaction-info">
                    <div className="app-header__search-result-transaction-icon">
                      <TransactionInIcon />
                    </div>
                    <div className="app-header__search-result-transaction-data">
                      <div><b>0x0000...0000</b></div>
                      <div>16 Apr at 22:22</div>
                    </div>
                  </div>

                  <div className="app-header__search-result-transaction-amount">
                    <div className="app-header__search-result-transaction-value"><b>+10,000.00</b> cMDL</div>
                    <div>
                      Ars: <b>300</b> cMDL
                    </div>
                  </div>

                </div>

                <div className="app-header__search-result-transactions out">
                  <div className="app-header__search-result-transaction-info">
                    <div className="app-header__search-result-transaction-icon">
                      <TransactionOutIcon />
                    </div>
                    <div className="app-header__search-result-transaction-data">
                      <div><b>0x0000...0000</b></div>
                      <div>16 Apr at 22:22</div>
                    </div>
                  </div>

                  <div className="app-header__search-result-transaction-amount">
                    <div className="app-header__search-result-transaction-value"><b>-213.14</b> cMDL</div>
                    <div>
                      Comision: <b>2.34</b> cMDL
                    </div>
                  </div>
                </div>

                <div className="app-header__search-result-transactions out">
                  <div className="app-header__search-result-transaction-info">
                    <div className="app-header__search-result-transaction-icon">
                      <TransactionOutIcon />
                    </div>
                    <div className="app-header__search-result-transaction-data">
                      <div><b>0x0000...0000</b></div>
                      <div>16 Apr at 22:22</div>
                    </div>
                  </div>

                  <div className="app-header__search-result-transaction-amount">
                    <div className="app-header__search-result-transaction-value"><b>-213.14</b> cMDL</div>
                    <div>
                      Comision: <b>2.34</b> cMDL
                    </div>
                  </div>
                </div>

                <div className="app-header__search-result-transactions out">
                  <div className="app-header__search-result-transaction-info">
                    <div className="app-header__search-result-transaction-icon">
                      <TransactionOutIcon />
                    </div>
                    <div className="app-header__search-result-transaction-data">
                      <div><b>0x0000...0000</b></div>
                      <div>16 Apr at 22:22</div>
                    </div>
                  </div>

                  <div className="app-header__search-result-transaction-amount">
                    <div className="app-header__search-result-transaction-value"><b>-213.14</b> cMDL</div>
                    <div>
                      Comision: <b>2.34</b> cMDL
                    </div>
                  </div>
                </div>

                <div className="app-header__search-result-transactions out">
                  <div className="app-header__search-result-transaction-info">
                    <div className="app-header__search-result-transaction-icon">
                      <TransactionOutIcon />
                    </div>
                    <div className="app-header__search-result-transaction-data">
                      <div><b>0x0000...0000</b></div>
                      <div>16 Apr at 22:22</div>
                    </div>
                  </div>

                  <div className="app-header__search-result-transaction-amount">
                    <div className="app-header__search-result-transaction-value"><b>-213.14</b> cMDL</div>
                    <div>
                      Comision: <b>2.34</b> cMDL
                    </div>
                  </div>
                </div>

                <div className="app-header__search-result-transactions out">
                  <div className="app-header__search-result-transaction-info">
                    <div className="app-header__search-result-transaction-icon">
                      <TransactionOutIcon />
                    </div>
                    <div className="app-header__search-result-transaction-data">
                      <div><b>0x0000...0000</b></div>
                      <div>16 Apr at 22:22</div>
                    </div>
                  </div>

                  <div className="app-header__search-result-transaction-amount">
                    <div className="app-header__search-result-transaction-value"><b>-213.14</b> cMDL</div>
                    <div>
                      Comision: <b>2.34</b> cMDL
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>}

        </div>}

        <div className={classNames("app-header__overlay", { isOpen: searchOpen })} onClick={() => this.setState({ searchOpen: false, menuOpen: false })}></div>
        <div className={classNames("app-header__overlay menu", { isOpen: menuOpen })} onClick={() => this.setState({ searchOpen: false, menuOpen: false })}></div>
      </div>
    );
  }
}

export default Header;
