const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    },
    created(){
        axios
        .get('http://localhost:8888/php-dischi-json/database/song.json')
        .then(res => {
            console.log(res.data); 
        })
    }
  }).mount('#app')