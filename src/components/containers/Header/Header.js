import React from 'react';
import classNames from 'classnames';

import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import { ReactComponent as Search } from 'assets/icons/search.svg';
import { ReactComponent as Wave } from 'assets/icons/wave.svg';
import { ReactComponent as CrossIcon } from 'assets/icons/cross.svg';
import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg';

class Header extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      searchOpen: false,
      menuOpen: false,
    };
  }

  onSearchFocus = () => {
    this.setState({
      searchOpen: true,
    });
  };

  render() {
    const { searchOpen, menuOpen } = this.state;
    const { children } = this.props;

    return (
      <div className="app-header">
        <div className="app-header__top">
          <a href="#" className="app-header__logo">
            <Logo />
            <span>
              Cripto LEU
            </span>
          </a>

          <div className={classNames("app-header__menu", { isOpen: menuOpen } )}>
            <a href='#' className="app-header__menu-item">Concept</a>
            <a href='#' className="app-header__menu-item">Parametrii Sistemului</a>
            <a href='#' className="app-header__menu-item">Cum pot folosi?</a>
            <a href='#' className="app-header__menu-item">Circulatia</a>

            <CrossIcon onClick={() => this.setState({ menuOpen: false })} className="app-header__menu-close"  />
          </div>

          <div className="app-header__search">
            <div className={classNames("app-header__search-container", { isOpen: searchOpen })}>
              <Search className="app-header__search-icon" />
              <input type="text" placeholder="Adresa contului" className="app-header__search-input" onFocus={this.onSearchFocus} />
              {searchOpen && <CrossIcon onClick={() => this.setState({ searchOpen: false })} className="app-header__search-close"  />}
            </div>
          </div>

          <div className="app-header__menu-button" onClick={() => this.setState(state => ({ menuOpen: !state.menuOpen }))}>
            <MenuIcon />
          </div>
        </div>

        {children}

        <div className="app-header__waves">
          <Wave className="app-header__wave-image app-header__wave-1" />
          <Wave className="app-header__wave-image app-header__wave-2" />
          <Wave className="app-header__wave-image app-header__wave-3" />
        </div>

        <div className={classNames("app-header__overlay", { isOpen: searchOpen })} onClick={() => this.setState({ searchOpen: false, menuOpen: false })}></div>
        <div className={classNames("app-header__overlay menu", { isOpen: menuOpen })} onClick={() => this.setState({ searchOpen: false, menuOpen: false })}></div>
      </div>
    );
  }
}

export default Header;
