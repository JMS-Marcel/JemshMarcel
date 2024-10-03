<template>
  <a href="#Accueil" class="scrollUp" id="scrollUp"><i class="fa fa-arrow-up"></i></a>
</template>

<style>
.scrollUp{
  position: fixed;
  right: .5rem;bottom: 4rem;
  height: 3rem;
  width: 3rem;
  line-height: 3rem;
  border-radius: 50%;
  box-shadow: var(--box-shadow);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: var(--blue);
}
.scrollUp:hover{
    box-shadow: var(--box-shadow-inset);
}
</style>
