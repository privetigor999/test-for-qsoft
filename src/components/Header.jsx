import React from "react";
import { ReactComponent as LogoSvg } from "./../assets/logo.svg";
import { ReactComponent as ProfileSvg } from "./../assets/profile.svg";
import { ReactComponent as SearchSvg } from "./../assets/search.svg";
import { ReactComponent as ProfileLogoSvg } from "./../assets/profileLogo.svg";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__logo-block">
          <LogoSvg />
        </div>
        <div className="header__input-block">
          <input
            type="text"
            placeholder="Найти..."
            className="header__input-block__input"
          />
          <div className="header__input-block__search-btn">
            <SearchSvg />
          </div>
        </div>
        <div className="header__profile-logo">
          <ProfileLogoSvg />
        </div>
        <div className="header__profile">
          <p className="header__profile__name">Константин</p>
          <div className="header__profile__photo">
            <ProfileSvg />
          </div>
        </div>
      </div>
      <div className="input-block">
        <input
          type="text"
          placeholder="Найти..."
          className="input-block__input"
        />
        <div className="input-block__search-btn">
          <SearchSvg />
        </div>
      </div>
    </>
  );
};

export default Header;
