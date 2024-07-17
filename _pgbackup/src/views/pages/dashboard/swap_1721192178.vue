<template> 
    <div class="card"> 
        <div class="card-body"> 
            <h4 class="card-title mb-4">Leprechaun Chart</h4> 
            <div id="flooz-embed" class="embed-container"> 
                <iframe width="400" height="720" frameborder="0" allow="clipboard-read *; clipboard-write *; web-share *; accelerometer *; autoplay *; camera *; gyroscope *; payment *; geolocation *" src="https://flooz.xyz/embed/trade?swapDisabled=false&swapNetwork=bsc&swapToTokenAddress=0xd445f4ccb4c73af58bba206bf255918e85c19b65&swapLockToToken=false&onRampDisabled=false&onRampNetwork=bsc&onRampAsDefault=false&onRampTokenAddress=0xd445f4ccb4c73af58bba206bf255918e85c19b65&onRampLockToken=true&network=eth&lightMode=true&backgroundColor=transparent&miniApp=false&miniappIntent=swap"></iframe>                 
                <div class="overlay"></div>                 
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

.embed-container {
  position: relative;
  width: 100%;
  height: 720px; /* Set a fixed height */
}

.embed-container iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 0;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 128, 0, 0.5); /* Green overlay with 50% opacity */
  pointer-events: none; /* Allows interaction with the iframe */
}
</style>
