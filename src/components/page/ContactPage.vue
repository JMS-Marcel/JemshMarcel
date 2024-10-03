<template>
      <section id="Contact" class="contact">
        <h1 class="heading">CONTACTEZ <span>MOI</span></h1>
        <form @submit.prevent="sendEmail">
          <input type="text" placeholder="Votre nom" class="box" required id="user_name" v-model="form.name" />
          <input type="email" placeholder="Votre email" class="box" required id="user_email" v-model="form.email"/>
          <input type="text" placeholder="Sujet" class="box" required id="user_subject" v-model="form.sujbect"/>
          <textarea
            name="textarea"
            class="box"
            placeholder="Votre message"
            required
            id="message"
            v-model="form.message"
            cols="30"
            rows="10"
          ></textarea>
          
          <button type="submit" class="btn">Envoyer</button>
        </form>
      </section>
</template>

<script setup>
  import { ref } from 'vue';
  import emailjs from '@emailjs/browser';
  import { useToast } from "vue-toastification";

  const toast = useToast();
 
  // Refs pour le formulaire
  const form = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Envoyer l'email via EmailJS
  const sendEmail = () => {
    const serviceID = 'service_zacqp7s';
    const templateID = 'template_35gq78k';
    const userID = 'yzK3UsY8C6alGYgAX';

    const templateParams = {
      user_name: form.value.name,
      user_email: form.value.email,
      subject: form.value.subject,
      message: form.value.message,
    };

    emailjs.send(serviceID, templateID, templateParams, {publicKey: userID})
        .then((response) => {
          setTimeout(() => {
        // Afficher le toast de succès
        toast.success("Email envoyé avec succès", {
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
      }, 1000);

      form.value.name = '';
      form.value.email = '';
      form.value.message = '';
    })
    .catch((error) => {
      // console.error('Échec de l\'envoi de l\'email :', error);
      toast.error("Échec de l\'envoi de l\'email : " + error.message, {
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
    });

  }


</script>



<style>
.contact form {
    margin: auto;
    max-width: 35rem;
    height: auto;
    border-radius: .5rem;
    box-shadow: var(--box-shadow);
    padding: 1.25rem 2.5rem;
}

.contact form .box {
    padding: .6rem;
    width: 100%;
    background: none;
    color: var(--black);
    font-size: 1.2rem;
    text-transform: none;
    margin: .7rem 0;
    border: none;
    box-shadow: var(--box-shadow);
    border-radius: .5rem;
}

.contact form textarea {
    height: 6.5rem;
    resize: none;

}

.contact form .box:focus {
    outline: none;
    box-shadow: var(--box-shadow-inset);
}
#Apropos .lienContact{
    color: var(--black);
}
</style>