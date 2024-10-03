<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import navBar from '@/components/navBar.vue';
  import Accueille from '@/components/page/AccueillePage.vue';
  import APropos from './components/page/AProposPage.vue';
  import Education from '@/components/page/EducationPage.vue';
  import Portfolio from '@/components/page/PortfolioPage.vue';
  import footerPage from '@/components/footer.vue';
  import Contact from '@/components/page/ContactPage.vue';
  import ScrollToUp from '@/components/ScrollToUp.vue';



const sections = ref([])
const activeSection = ref('')

// Fonction pour vérifier si le lien doit être actif
const isActive = (href) => activeSection.value === href

// Fonction qui se déclenche lors du scroll
const handleScroll = () => {
  const scrollPos = window.scrollY + 20

  sections.value.forEach(section => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight


    if (scrollPos > sectionTop && scrollPos < (sectionTop + sectionHeight)) {
      activeSection.value = `#${section.getAttribute('id')}`
    
    }
  })
}

onMounted(() => {
  // Récupérer toutes les sections lorsque le composant est monté
  sections.value = document.querySelectorAll('section')
  window.addEventListener('scroll', handleScroll)

})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<template>
    <header>
        <navBar :activeSection="activeSection" />
    </header>

    <main>
      <Accueille />
      <APropos />
      <Education />
      <Portfolio />
      <Contact />
      <ScrollToUp />
    </main>
    <footerPage />
</template>








