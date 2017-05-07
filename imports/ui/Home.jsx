import React from 'react';

export default React.createClass({
  render() {
    return (
      <div className="home-main">
        <div className="home-introduction-section">
          <h3>Sang-gon Lee</h3>
            I'm a software developer who likes building cool stuffs.<br/>
            If you're curious, I invite you to have a look at the Portfolio section.<br/>
            Most of those works were done around the time I graduated from university and most of them are not maintained sadly. :'( <br/>
            I also have interests in data structures, concurrency and new technologies in general.<br/>
            Recently I sometimes work on these things on my spare time, when I have time and feel like it:
            <ul>
              <li>TwitterStalk, which can be found in my github. Just wanted to try some of Google's machine learning tools, but I got slightly more ambitious and trying to make it a bit nicer to attract some users.</li>
              <li>Yet-to-be-named web game. Still in early stage. Aiming for a real time web-based game with minimal arts. Emphasis on &quot;minimal arts&quot;.</li>
              <li>Add blogging to this site? Maybe or maybe not.. it's not a very interesting thing to work on for sure..</li>
            </ul>
          <a id="linkedinBadge" href="https://ca.linkedin.com/pub/sang-gon-lee/33/16b/34b" target="_blank">
            <img src="https://static.licdn.com/scds/common/u/img/webpromo/btn_myprofile_160x33.png" width="160" height="33" border="0" alt="View Sang-gon Lee's profile on LinkedIn"/>
          </a>
          <a id="githubBadge" href="https://github.com/sanggonlee" target="_blank">
            <img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Logo.png" width="160" height="33" border="0"/>
          </a>
        </div>
      </div>
    );
  }
})
