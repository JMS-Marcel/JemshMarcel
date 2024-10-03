<template>
    <section id="Education">
        <h1 class="heading">MES <span>ETUDES</span></h1>
        <h2>DEUXIEME ANNEE EN GENIE LOGICIEL :</h2>
        <p>
          Acquisition et maîtrise des compétences informatiques techniques
          généralistes sur la 
          programmation à ISIME. <span class="emoji">😊</span>
        </p>
        <!-- <p>
          Stagiaire à <a href="#" target="">Randevteam</a>
        </p> -->
        <h2>MES COMPETENCES :</h2>
        <div class="education">
          <div class="progress">
            <h3>Tailwindcss
               <span>95%</span>
              </h3>
            <div class="bar bar-2-1"><span></span></div>
            <h3>JavaScript
              <span>80%</span>
            </h3>
            <div class="bar bar-2-2"><span></span></div>
            <h3>Vuejs                                 
          
              <span>65%</span>
              </h3>
            <div class="bar bar-2-3"><span></span></div>
          </div>
          <div class="progress">
            <h3>PHP/Mysql <span>85%</span></h3>
            <div class="bar bar-1-1"><span id="progress1"></span></div>
            <h3>Wordpress/Prestashop 
             
              <span>75%</span>
            </h3>
            <div class="bar bar-1-2"><span id="progress2"></span></div>
            <h3>Laravel
              <span>65%</span>
              </h3>
            <div class="bar bar-1-3"><span id="progress3"></span></div>
          </div>
        </div>
      </section>
</template>

<style>
#Education > h2, #Education p{
    color: var(--black);
}

.education {
    display: flex;
    flex-direction: row;
    gap: 6.25rem;
    flex-flow: wrap;
    align-items: center;
    margin-top: -1rem;
}
.education:nth-child(3) {
    padding-top: 2rem;
}

.education .progress {
    flex: 1 1 20rem;
}

.education .progress h3 {
    color: var(--black);
    font-weight: normal;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.education .progress .bar {
    box-shadow: var(--box-shadow);
    border-radius: 5rem;
    height: .8rem;
    padding: .2rem;
    margin: 1rem 0;
}

.education .progress .bar span {
    display: block;
    height: 100%;
    background: linear-gradient(90deg, #fff, #006ff2);
    border-radius: 5rem;
}


.education .progress .bar-1-1 span {
    width: 85%;
}

.education .progress .bar-1-2 span {
    width: 75%;
}

.education .progress .bar-1-3 span {
    width: 65%;
}

.education .progress .bar-2-1 span {
    width: 95%;
}

.education .progress .bar-2-2 span {
    width: 89%;
}

.education .progress .bar-2-3 span {
    width: 65%;
}

</style>