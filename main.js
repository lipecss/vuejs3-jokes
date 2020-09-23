import { createApp, ref, reactive, onMounted } from 'https://unpkg.com/vue@3.0.0/dist/vue.esm-browser.js'

createApp({
  setup() {
    
    const count = ref(0);
    const dadJokes = reactive({
      loading: false,
      error: '',
      jokes: [],
    });
  
    onMounted(async () => {
      
      dadJokes.loading = true;
      dadJokes.jokes = []
      
      const response = await fetch('https://icanhazdadjoke.com/search', {
        headers: {
          accept: 'application/json'
        }
      })
      
      if (response.ok) {
        dadJokes.error = ''
        const json = await response.json();
        dadJokes.jokes = json.results;
      } else {
        dadJokes.error = 'Could not find Jokes'
      }
      dadJokes.loading = false
    })
    
    return {
      dadJokes,
      count
    }
  }
}).mount('#app')