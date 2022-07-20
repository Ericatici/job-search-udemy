<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <!--v-for interage com o array abaixo,spotlight, a key,usa toda vez que
      coloca o v-for, serve para distinguir a li ou qual objeto acessar-->
      <slot
        :img="spotlight.img"
        :title="spotlight.title"
        :description="spotlight.description"
      ></slot>
    </li>
  </ul>
</template>

<script lang="ts">
import { ref, onMounted, defineComponent } from "vue";
import axios from "axios";

interface Spotlight {
  id: number;
  img: string;
  title: string;
  description: string;
}

export default defineComponent({
  name: "Spotlight",
  setup() {
    //store the data is this component locally
    const spotlights = ref<Spotlight[]>([]);

    // onde faz a request
    const getSpotlights = async () => {
      const baseUrl = process.env.VUE_APP_API_URL; //enviroment variable,são 3, VUE_APP_API_URL colocada
      //dentro de uma const que dará a base da url:localhost/3000 que representa a port for JSON server NPM package.

      const url = `${baseUrl}/spotlights`; //onde interpolate, concatena localhost:3000 acima
      // com o endpoint /spotlights, "/spolights" foi defined no database,db.json.
      const response = await axios.get<Spotlight[]>(url); //faz a request da URL que foi import acima,abaixo do script.
      //porque esse method return a promise é preciso colocar async em frente do mounted.
      spotlights.value = response.data; //joga o objeto adquirido através das variaveis acima ,baseUrl,url,response,
      // para dentro do array que estava vazio ,spotlights:, dentro de data, return.
    };
    onMounted(getSpotlights);

    return { spotlights };
  },
});
</script>