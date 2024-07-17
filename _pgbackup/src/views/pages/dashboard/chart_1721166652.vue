<template> 
    <Layout> 
        <div class="dashboard-background"> 
            <PageHeader :title="title" :items="items"/> 
            <div class="row"> 
                <div class="col-xl-10" style="display:grid;grid-template-columns:1fr;grid-template-rows:150px;"> 
                    <Stat style="grid-area:auto / 1 / auto / 4;"/> 
                </div>                 
            </div>             
            <div class="row"> 
                <div class="col-lg-4"> 
                    <Sources/> 
                </div>                 
                <div class="col-lg-4"> 
                    <!-- Embed Live Chart here -->                     
                    <div class="embed-container"> 
                        <iframe src="https://dexscreener.com/bsc/0xED3Ed061917263Fcf7DF6c44978253c7f880C3b7?embed=1&info=0" frameborder="0" allowfullscreen></iframe>                         
                    </div>                     
                </div>                 
                <div class="col-lg-4"> 
                    <RevenueLocation/> 
                </div>                 
            </div>             
        </div>         
    </Layout>     
</template> 
<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../../components/page-header.vue";
import Stat from "./widget.vue";
import Sources from "./sources.vue";
import RevenueLocation from "./revenue-location.vue";

/**
 * Dashboard component
 */
export default {
  components: {
    Layout,
    PageHeader,
    Stat,
    Sources,
    RevenueLocation,
  },
  data() {
    return {
      title: "Welcome to the Leprechaun Dashboard",
      items: [
        {
          text: "Leprechaun"
        },
        {
          text: "Dashboard",
          active: false
        }
      ],
    };
  },
};
</script> 
<style scoped>
.dashboard-background {
  background-image: url('path/to/your/background-image.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh; /* Ensure it covers the entire viewport height */
  padding: 20px; /* Optional: Adjust padding as needed */
}

.row {
  margin-bottom: 20px; /* Optional: Adjust margin between rows */
}

.embed-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
}

.embed-container iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 0;
}
</style>
