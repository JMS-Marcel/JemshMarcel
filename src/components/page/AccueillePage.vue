<script setup>
  import buttonBlue from '@/components/buttonBlue.vue';
  import svgCoding from '@/components/svg.vue';
</script>

<template>
         <section id="Accueil" >
        <div class="left">
          <h1 class="greeting">Hi !! <span id="greeting-emoji">👋</span> </h1>
          <h1 class="animated-text">Je <span></span></h1>
          <h1>Je suis un Developpeur web</h1>

          <p class="text">
            Bienvenue sur mon portfolio, où j'explore l'intersection entre l'art
            et la technologie.Plongez dans mes projets captivants et laissez-vous
            inspirer par mon travail passionné.
          </p>
          <!-- <a href="#Contact" class="btn">Contactez moi </a> -->
           <buttonBlue href="#Contact" class="btn">Contactez moi</buttonBlue>

          <div class="reseux">
            <span>Me trouver: </span>
            <a href="https//www.facebook.com/jemsh.marsel?mibextid=ZbWkwL" target="_blank" id="facebook" class="fa fa-facebook"></a>
            <a href="https://github.com/JMS-Marcel" target="_blank" id="github" class="fa fa-github"></a>
            <a href="#"  target="_blank" id="linkedin" class="fa fa-linkedin"></a>
          </div>
        </div>
        <div class="svg">
          <!-- <?xml version="1.0" encoding="utf-8"?> -->
          <!-- Generator: Adobe Illustrator 24.0.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
          <svgCoding/>
        </div>
      </section>
</template>

<style>
#Accueil {
    display: flex;
    justify-content: space-between;
}
.emoji{
    font-size: 1.5rem;
}
.left {
    width: 60%;
}
.left .greeting{
    font-size: 3rem;
    color: var(--black);
    margin: 0px;
}
.left #greeting-emoji{
    font-size: 3.5rem; 
}
svg {
    width: 100%;
}

.svg {
    margin-right: 60px;
    width: 70%;
    height: auto;
}

h1:nth-child(1),h1:nth-child(3){
    color:var(--black);
}
h1:nth-child(2) {
    color: #006ff2;
    font-size: 1.5rem;
    margin-bottom: -5px;
}

h1:nth-child(2) span {
    position: relative;
    z-index:-999;
}

h1:nth-child(2) span::before {
    content: "suis un Developpeur";
    animation: words 20s infinite;
}

h1:nth-child(2) span::after {
    content: '';
    background: var(--bg-color);
    position: absolute;
    width: calc(100% + 8px);
    height: 100%;
    border-left: 2px solid #006ff2;
    right: -8px;
    animation: cursor .6s infinite, typing 20s steps(14) infinite;
}

@keyframes cursor {
    to {
        border-left: 2px solid #e6e6e6;
    }
}

@keyframes words {

    0%,
    20% {
        content: "m'appelle Jemsh Marcel";
    }

    21%,
    40% {
        content: 'suis un Developpeur';
    }

    41%,
    60% {
        content: "m'appelle Jemsh Marcel";
    }

    61%,
    80% {
        content: 'suis un Developpeur';
    }

    81%,
    100% {
        content: "m'appelle Jemsh Marcel";
    }
}

@keyframes typing {

    10%,
    15%,
    30%,
    35%,
    50%,
    55%,
    70%,
    75%,
    90%,
    95% {
        width: 0;
    }

    5%,
    20%,
    25%,
    40%,
    45%,
    60%,
    65%,
    80%,
    85% {
        width: calc(100% + .5rem);
    }
}



h1:nth-child(3) {
    font-size: 1.25rem;
    margin-bottom: -5px;
}

.text {
    padding: 1.5rem 0px;
    color: var(--black);
}

.reseux {
    margin-top: 5rem;
}

.left .reseux span {
    font-weight: 600;
    color: var(--blue);
    margin-right: 2.1rem;
}

.left .reseux a {
    text-decoration: none;
    box-shadow: var(--box-shadow);
    border-radius: 8px;
    padding: .8rem;
    margin: .9rem;
    font-size: 1rem;
}

.left .reseux a:hover {
    box-shadow: var(--box-shadow-inset);
}

#facebook {
    padding: .9rem;
    color: var(--blue);
}

#linkedin {
    color: var(--blue);
}

#github {
    color: #000;
}

/* SVG */
.st2 {
    animation: slide 5s ease-in-out infinite;
}

@keyframes slide {
    0% {
        transform: translateX(0);
    }

    50% {
        transform: translateX(-8px);
    }

    100% {
        transform: translateX(0px);
    }
}

#slideToggle {
    border: 1px solid #000;
    animation: slideToggle 4s ease-in-out infinite;
}

@keyframes slideToggle {
    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(8px);
    }

    100% {
        transform: translateY(0px);
    }

}

</style>