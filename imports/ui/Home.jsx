import React from 'react';

export default React.createClass({
  render() {
    return (
      <div className="home-main">
        <div className="home-photo-section">
          <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAadAAAAJDg3YzI3MWJhLTYwNWMtNGQ1Ni04NDBhLWI1Y2ExMWRhMzI5OQ.jpg"/>
        </div>
        <div className="home-introduction-section">
          <h3>Sang-gon Lee</h3>
          <p>
            I'm a software developer, university new graduate who's available for hire.<br/>
            My passion lies in full stack application development.<br/>
            I also have keen interest in data structures and new technologies in general.
          </p>
          <a id="linkedinBadge" href="https://ca.linkedin.com/pub/sang-gon-lee/33/16b/34b">
            <img src="https://static.licdn.com/scds/common/u/img/webpromo/btn_myprofile_160x33.png" width="160" height="33" border="0" alt="View Sang-gon Lee's profile on LinkedIn"/>
          </a>
          <a id="githubBadge" href="https://github.com/sanggonlee">
            <img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Logo.png" width="160" height="33" border="0"/>
          </a>
        </div>
      </div>
    );
  }
})