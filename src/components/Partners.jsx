import React from "react";
import { ReactComponent as HenkelSvg } from "./../assets/partners/henkel.svg";
import johnPng from "./../assets/partners/john.png";
import nikePng from "./../assets/partners/nike.png";
import mcdonaldsPng from "./../assets/partners/mcdonalds.png";
import ikeaPng from "./../assets/partners/ikea.png";
import reebokPng from "./../assets/partners/reebok.png";
import catPng from "./../assets/partners/cat.png";

const Partners = () => {
  return (
    <div className="partners-block">
      <h1 className="partners-block__title">Наши партнеры</h1>
      <div className="partners-block__partners">
        <div className="partners-block__partners__card">
          <HenkelSvg />
        </div>
        <div className="partners-block__partners__card">
          <img
            src={johnPng}
            alt="john"
            className="partners-block__partners__card__img"
          />
        </div>
        <div className="partners-block__partners__card">
          <img
            src={mcdonaldsPng}
            alt="mcdonalds"
            className="partners-block__partners__card__img"
          />
        </div>
        <div className="partners-block__partners__card">
          <img
            src={ikeaPng}
            alt="ikea"
            className="partners-block__partners__card__img"
          />
        </div>
        <div className="partners-block__partners__card">
          <img
            src={reebokPng}
            alt="reebok"
            className="partners-block__partners__card__img"
          />
        </div>
        <div className="partners-block__partners__card">
          <img
            src={nikePng}
            alt="nike"
            className="partners-block__partners__card__img"
          />
        </div>
        <div className="partners-block__partners__card">
          <img
            src={catPng}
            alt="cat"
            className="partners-block__partners__card__img"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
