<template>
    <section id="Portfolio" class="portfolio">
        <h1 class="heading">MES <span>PROJETS</span></h1>
        <div class="box-container">
          <div class="box">
            <div class="mini-box">
              <a href="https://jms-marcel.github.io/MusicWeb/" target="_blank"><img src="/images/img-1.png" alt="AppMusic" /></a>
            </div>
            <div class="content">
              <h4>
                <a href="https://jms-marcel.github.io/MusicWeb/" target="_blank">AppMusic 🎵🎵🎵</a>
              </h4>
            </div>
          </div>

          <div class="box">
            <div class="mini-box">
             <a href="#" >
              <img src="/images/img-2.jpg" alt="map" />
             </a>
            </div>
            <div class="content">
              <h4><a href="#" >API Google MAP en PHP 🌍(en cours)</a></h4>
            </div>
          </div>

          <div class="box">
            <div class="mini-box">
              <a href="https://rock-paper-scissors-2124.netlify.app/" target="_blank">
                <img src="/images/img-3.png" alt="rock-paper" />
              </a>
            </div>
            <div class="content">
              <h4><a href="https://rock-paper-scissors-2124.netlify.app/" target="_blank">Rock-Papers ✊✋✌</a></h4>
            </div>
          </div>
        </div>
      </section>
</template>

<style>
.portfolio .box-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.portfolio .box-container .box {
    width: 18.75rem;
    height: 24.37rem;
    background: var(--bg-color);
    border: 1rem solid transparent;
    border-radius: 0.9rem;
    box-shadow: var(--box-shadow);
    margin: 2.8rem 0px;

}

.portfolio .box-container .box .mini-box {
    border: 1rem solid transparent;
    border-radius: 0.9rem;
    height: 80%;
    width: 90%;
    box-shadow: var(--box-shadow);
}

.portfolio .box-container .box img {
    border-radius: .5rem;
    height: 95%;
    width: 98%;
}

.portfolio .box-container .box img:hover {
    height: calc(95% + 3px);
    width: calc(98% + 3px);
}

.portfolio .content h4 a {
    text-decoration: none;
    font-weight: 400;
    color: var(--blue);
}

</style>