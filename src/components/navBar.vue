<template>
  <nav class="navbar" :class="{ 'active': isMenuOpen }">
        <div class="logo">
          <a href="#Accueil" id="logo">J<span>M</span>S<span>.</span> </a>
        </div>

        <div id="menu">
          <li><a  href="#Accueil" :class="{ active: isActive('#Accueil') }" >Accueille</a></li>
          <li><a  href="#Apropos" :class="{ active: isActive('#Apropos') }" >À propos</a></li>
          <li><a  href="#Education" :class="{ active: isActive('#Education') }" >Education</a></li>
          <li><a  href="#Portfolio" :class="{ active: isActive('#Portfolio') }" >Projets</a></li>
          <li><a  href="#Contact" :class="{ active: isActive('#Contact') }">Contact</a></li>
        </div>
        <div id="menu-btn" @click="toggleMenu" :class="{'fa-times': isMenuOpen, 'fa-bars': !isMenuOpen}" class="fa"></div>
        <div id="theme-toggler" :class="isDarkMode ? 'fa fa-sun-o' : 'fa fa-moon-o'" @click="togglerDarkMode"></div>
      </nav>
</template>
<script setup>
    import { ref, onMounted, onUnmounted} from 'vue';

    import { toRefs } from 'vue'

    const props = defineProps({
    activeSection: String,
    })

    const { activeSection } = toRefs(props)

//=============================================================

    const isMenuOpen = ref(false)

  
    const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
    }


    const handleScroll = () => {
    isMenuOpen.value = false
    }

    // Ajouter l'événement scroll lors du montage du composant
    onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    })
//============================================================= 



    // Fonction pour vérifier si le lien doit être actif
    const isActive = (href) => activeSection.value === href

    //DarkMode
    const isDarkMode = ref(false);
    const togglerDarkMode = () => {
        isDarkMode.value = !isDarkMode.value;

        if (isDarkMode.value) {
            document.body.classList.add('active');
        }else{
            document.body.classList.remove('active');
        }
        localStorage.setItem('darkMode', isDarkMode.value);
    }
        // Vérifier si le mode sombre est activé lors du montage du composant
        onMounted(() => {
      const savedDarkMode = localStorage.getItem('darkMode');
      if (savedDarkMode === 'true') {
        isDarkMode.value = true;
        document.body.classList.add('active');
      }
    });

    onUnmounted(() => {
      document.body.classList.remove('active');
    });
</script>
<style scoped>
.navbar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    padding: 1.5rem;
    background: var(--bg-color);
    border-bottom: 1px solid hsl(0, 1%, 85%);
    z-index: 9999;
}

.logo {
    margin-left: 60px;
}

#logo span {
    color: var(--blue);
}

#logo {
    font-family: PoppinsBold;
    font-size: 1.2rem;
    color: var(--black);
    text-decoration: none;
}

#menu {
    padding-right: 11rem;
}

#menu li {
    display: inline-block;
    margin-left: 3.75rem;
}

#menu li a {
    text-decoration: none;
    color: var(--black);
}

#menu li .active {
    color: var(--blue);
}

#menu li a:active {
    color: var(--blue);
}

#menu li a:hover {
    color: var(--blue);
}


#menu-btn{
    position: fixed;
    top:0.5rem; left: 2rem;
    z-index: 1000;
    height: 3rem;
    width: 3rem;
    line-height: 3rem;
    border-radius: 50%;
    font-size: 2rem;
    cursor: pointer;
    box-shadow: var(--box-shadow);
    text-align: center;
    color:var(--black);
    background: var(--bg-color);
    display: none;
}

#menu-btn:hover{
    color:var(--blue);
    box-shadow: var(--box-shadow-inset);
}
/* ACTIVE MODE DARCK */
#theme-toggler {
    position: fixed;
    top: 0.5rem;right: 0.5rem;
    z-index: 1000;
    height: 3rem;
    width: 3rem;
    line-height: 3rem;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: var(--box-shadow);
    text-align: center;
    color: var(--blue);
    background: var(--bg-color);
}

#theme-toggler:hover {
    color: var(--blue);
    box-shadow: var(--box-shadow-inset);
    text-shadow: 1px 1px 4px #006ff2;

}
</style>