import React from 'react';
import standingGirl from '../../images/standing_girl.svg';
import hey from '../../images/hey.svg';
import './heroSection.css';
import github from '../../images/Github.svg';
import linkedIn from '../../images/LinkedIn.svg';
import google from '../../images/gmail.svg';
import insta from '../../images/Insta.svg';


const HeroSection = () => {
    return (
      <div className="hero-outer-box">
        <div className="hey-overlay-img">
          <img src={hey} alt="heyoverlay" />
        </div>

        <div className="hero-section">
			<div className="hero-header">
				<div className="hero-header-text">
				<h1>
					I'm <span>Prerna</span>
				</h1>
				</div>
				<div className="sub-heading">
				<p>
					A passionate individual who always thrive to work on end to end
					products which develop sustainable and scalable social and
					technical systems to create impact.
				</p>
				</div>
				<div className="social-link-list">
				<ul>
					<li>
					<a href="/">
						<img src={github} alt="Github icon link" />{" "}
					</a>
					</li>
					<li>
					<a href="/">
						<img src={linkedIn} alt="linkedIn Icon" />
					</a>
					</li>
					<li>
					<a href="/">
						<img src={google} alt="gamil svg" />
					</a>
					</li>
					<li>
					<a href="/">
						<img src={insta} alt="Instagram svg" />
					</a>
					</li>
				</ul>
				</div>
			</div>

			<div className="hero-img">
            <img src={standingGirl} alt="standing Girl" />
          </div>

			

		</div>
      </div>
    );
}

export default HeroSection
