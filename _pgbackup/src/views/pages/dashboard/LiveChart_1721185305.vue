<template> 
    <div class="card"> 
        <div class="card-body"> 
            <h4 class="card-title mb-4">Leprechaun Live Chart</h4> 
            <div id="dexscreener-embed"> 
                <iframe src="https://dexscreener.com/bsc/0xED3Ed061917263Fcf7DF6c44978253c7f880C3b7?embed=1&info=0"></iframe>                 
            </div>             
        </div>         
    </div>     
</template> 
<script>
export default {
  data() {
    return {};
  },
};
</script> 
<style scoped>
.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.card-body {
  padding: 20px;
}

#dexscreener-embed {
  position: relative;
  width: 100%;
  padding-bottom: 125%;
}

@media (min-width: 1400px) {
  #dexscreener-embed {
    padding-bottom: 65%;
  }
}

#dexscreener-embed iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 0;
}
</style>
