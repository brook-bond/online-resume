import React from "react";
import "./portfolio.css";
import data from "./data";
const Portfolio = () => {
  const portfolio = data.map((item) => {
    return (
      <article key={item.id} className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={item.image} alt={item.title} />
        </div>
        <h3>{item.title}</h3>
        <div className="portfolio__item-cta">
          <a href={item.github} className="btn">
            GitHub
          </a>
          <a href="" className="btn btn-primary" target="_blank">
            Live demo
          </a>
        </div>
      </article>
    );
  });
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">{portfolio}</div>
    </section>
  );
};

export default Portfolio;
