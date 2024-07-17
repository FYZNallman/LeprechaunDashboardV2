<template> 
    <div v-if="!chartLoaded" class="embed-placeholder" @click="loadChart"> 
        <p>Click to load chart</p> 
    </div>     
    <div v-else class="embed-container" id="dexscreener-embed"> 
        <iframe src="https://dexscreener.com/bsc/0xED3Ed061917263Fcf7DF6c44978253c7f880C3b7?embed=1&info=0"></iframe>         
    </div>     
</template> 
<script>
export default {
  name: 'LiveChart',
  data() {
    return {
      chartLoaded: false,
    };
  },
  methods: {
    loadChart() {
      this.chartLoaded = true;
      this.$emit('chart-loaded'); // Emit an event to notify the parent component
    },
  },
};
</script> 
<style scoped>
.embed-container {
  position: relative;
  width: 100%;
  padding-bottom: 125%; /* Default aspect ratio */
}

@media(min-width:1400px) {
  .embed-container {
    padding-bottom: 65%; /* Aspect ratio for wider screens */
  }
}

.embed-container iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 0;
}

.embed-placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px; /* Adjust height as needed */
  background-color: #f9f9f9;
  border: 2px dashed #ddd;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.embed-placeholder:hover {
  background-color: #f1f1f1;
}

.embed-placeholder p {
  font-size: 18px;
  color: #555;
}
</style>
