import React from "react";
import H1 from "../../../../components/H1/H1";
import img from "../../../../data/images";

export default function S1About() {
  return (
    <section className="about-1">
      <div className="container">
        <H1 title={"Лучшие специалисты города ждут Вас"} />
    
        <div className="a1__row">
          <div className="a1__left">
            <img src={img.about_sec_1} alt="#" />
          </div>
          <div className="a1__right">
            <h2 className="a1-right__title">
              Клиника с <span>инновационным подходом</span> к лечению!
            </h2>
            <h3 className="a1-right__text">
              Самые главные ценности в жизни человека это здоровье и время.
              Медицинский центр «Аква-Минск Клиника» делает все возможное,
              помогая сохранить и восстановить здоровье экономя ваше драгоценное
              время.{" "}
              <p>
                Клиника предлагает широкий спектр услуг: проверку состояния
                здоровья, профилактику заболеваний, раннюю диагностику с
                использованием мощнейшего арсенала лабораторных и
                инструментальных исследований.
              </p>
            </h3>
            <div className="a1__nameRow">
              <div className="a1-right__name">
                Сергей&nbsp;Губенко <br />
                <span>Главный врач</span>
              </div>
              <div className="a1-right__signature">
                <img src={img.about_signature} alt="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
