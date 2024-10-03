<template>
        <section id="Apropos">
        <h1 class="heading">A <span>PROPOS DE MOI?</span></h1>
        <div class="Apropos">
          <article>
            <p>
              Je suis un développeur web passionnée par la création de
              solutions technologies innovantes. Avec ma curiosité sans fin et
              ma passion pour le codage, j’explore constamment de nouvelles
              technologies et je me lance dans des projets stimulants. <span class="emoji">😁✨</span>
            </p>
            <p>
              Mon objectif en tant que développeur est de créer des applications
              intuitives et performantes qui répondent aux besoins des
              utilisateurs. Grace à ma capacité d’apprentissage rapide, je
              m’adapte facilement aux défis techniques. <span class="emoji">😊✨</span>
            </p>

            <p>
              Explorez mon portfolio pour découvrir mes projets et voir mon
              évolution en tant que développeur. Je suis enthousiaste à l’idée
              de contribuer à des équipes talentueuses et de participer à des
              projets passionnants pour continuer à développer mes compétences. <span class="emoji">😊✨</span>
            </p>
            <dl>
              <dt>Nom:</dt>
              <dd id="nom">NANTENAINA Tolojanahary Jemsh</dd>
            </dl>

            <dl>
              <dt>Email:</dt>
              <a href="#Contact" class="lienContact"><dd id="email">JemshMarcel@gmail.com</dd></a>
            </dl>
            <dl>
              <dt>Tel:</dt>
              <dd id="tel">+261 34 32 490 72</dd>
            </dl>
          </article>
          <aside>
            <div class="portrait">
                <div class="dots-circle">
              
                  <svg xmlns="http://www.w3.org/2000/svg" width="0px" viewBox="0 0 256 256"><path fill="#006ff2" d="M155.87 36.06a4 4 0 0 1-3.87 3a4.29 4.29 0 0 1-1-.13a92 92 0 0 0-46 0a4 4 0 0 1-2-7.74a100.09 100.09 0 0 1 50 0a4 4 0 0 1 2.87 4.87M56.65 57.94a100.18 100.18 0 0 0-25 43.29a4 4 0 0 0 7.71 2.14a92.06 92.06 0 0 1 23-39.82a4 4 0 1 0-5.7-5.61Zm-17.29 94.68a4 4 0 0 0-7.71 2.14a100.08 100.08 0 0 0 25 43.31a4 4 0 1 0 5.71-5.61a91.91 91.91 0 0 1-23-39.84M151 217.09a92 92 0 0 1-46 0a4 4 0 0 0-2 7.75a100 100 0 0 0 50 0a4 4 0 1 0-2-7.74Zm70.58-67.25a4 4 0 0 0-4.92 2.79a92.12 92.12 0 0 1-23 39.82a4 4 0 1 0 5.7 5.61a100.18 100.18 0 0 0 25-43.29a4 4 0 0 0-2.78-4.93m-4.94-46.46a4 4 0 0 0 7.71-2.14a100.08 100.08 0 0 0-25-43.31a4 4 0 1 0-5.71 5.61a91.91 91.91 0 0 1 23 39.84"/></svg>
                <img src="/images/portrait.jpeg" alt="portrait" />
              </div>
             
              <!-- <a href="#Apropos" class="btn" @click="downloadCv">Download CV <i class="fa fa-download"></i> </a> -->
              <button class="btn" @click="downloadCv" id="test">Download CV <i class="fa fa-download"></i> </button>
            </div>
          </aside>
        </div>
      </section>
</template>

<script setup>

import { useToast } from "vue-toastification";

const toast = useToast();

const downloadCv = () =>{
  
  toast.info("Tsisy cv pour le moment!😁✨", {
          position: "top-right",
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: "button",
          icon: true,
          rtl: false,
        });
}
</script>
<style>
.Apropos {
    display: flex;
}
#Apropos article p{
    color: var(--black);
}

article {
    margin-right: 4.06rem;
    text-align: justify;
}
.portrait{
    display: flex;
    flex-direction: column;
}

.portrait .dots-circle{
    display: grid;
    place-items: center;
    position: relative;
 
}
.portrait .dots-circle svg{
    position: absolute;
    width: 27.5rem;
    
}
.portrait .dots-circle:hover svg{
    animation: JMS 1s linear infinite;
}
@keyframes JMS{
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}

.portrait img {
    border: 1rem solid transparent;
    border-radius: 50%;
    height: 18rem;
    width: 18rem;
    box-shadow: var(--box-shadow);

}

.portrait .btn {
    margin-top: 3rem;
    text-align: center;
}

dl {
    display: flex;
    font-size: 1.2rem;
}

dt {
    color: var(--blue);
    text-decoration: underline;
}

dd:hover {
    color: var(--blue);
}

#nom {
    margin-left: 50px;
    color: var(--black);
}

#email:hover {
    text-decoration: underline;
}

#tel {
    margin-left: 60px;
    color: var(--black);
}

</style>