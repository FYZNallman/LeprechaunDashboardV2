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
                    <!-- Listen for the event -->                     
                </div>                 
                <div class="col-lg-4"> 
                    <RevenueLocation/> 
                </div>                 
            </div>             
            <div class="row" v-if="!isChartLoaded"> 
                <!-- Conditionally render News -->                 
                <div class="col-lg-10"> 
                    <LiveChart/> 
                </div>                 
            </div>             
        </div>         
    </Layout>     
</template> 
<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../../components/page-header.vue";
import LiveChart from "./Live-Chart.vue";
/**
 * Dashboard component
 */
export default {
  components: {
    Layout,
    PageHeader,
    LiveChart,
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
      isChartLoaded: false // Add a data property to track the chart load state
    };
  },
  methods: {
    hideNews() {
      this.isChartLoaded = true; // Update the state to hide News
    }
  }
};
</script> 
<style scoped>.dashboard-background {
  background-image: url('path/to/your/background-image.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh; /* Ensure it covers the entire viewport height */
  padding: 20px; /* Optional: Adjust padding as needed */
}

.row {
  margin-bottom: 20px; /* Optional: Adjust margin between rows */
}

/* Add any additional styling as needed */</style>
