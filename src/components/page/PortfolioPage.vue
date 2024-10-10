<template>
    <section id="Portfolio" class="portfolio">
        <h1 class="heading">MES <span>PROJETS</span></h1>
        <div class="box-container">
          
          <div class="box">
            <div class="mini-box">
              <a href="https://jms-marcel.github.io/MusicWeb/" target="_blank"><img src="/images/img-1.png" alt="AppMusic" /></a>
            </div>
            <h2>
              AppMusic 🎵🎵🎵
            </h2>
            <div class="content">
              <p>Lorem ipsum dolor sit amet ,jemsh marcel consectetur...</p>
            </div>
            <a href="#Portfolio" class="btn">Lien GitHub</a>
          </div>

         
        </div>
      </section>
</template>

<style scoped>
.box-container {
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
    height: 45%;
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
.portfolio .box-container .box .content p{
  font-size: 14px;
}
.portfolio .box-container .box .btn{
  display: block;
  text-align: center;
}


</style>