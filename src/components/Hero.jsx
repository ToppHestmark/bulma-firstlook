import React from "react";

const Hero = () => (
  <section className="hero is-danger is-fullheight">
    <div className="hero-body is-align-self-flex-start">
      <div className="container">
        <h1 className="title is-size-1">Analytics made easy.</h1>
        <p className="subtitle has-text-weight-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.{" "}
        </p>
        <form className="is-flex is-flex-direction-row">
          <input
            className="input is-link"
            type="text"
            placeholder="Link input"
          />
          <button class="button is-primary">Primary</button>
        </form>
      </div>
    </div>
  </section>
);

export default Hero;
