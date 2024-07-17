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
                    <!-- Card Container -->                     
                    <div class="card-container"> 
                        <div v-for="(data, index) in statData" :key="index" class="card-link" @click="selectWidget(data.title)"> 
                            <div class="card custom-card" :style="{ backgroundImage: data.backgroundImage }"> 
                                <div class="card-body custom-card-body"> 
                                    <div class="d-flex flex-column align-items-center justify-content-center"> 
                                        <h4 class="card-title mb-4 text-center text-white">{{ data.title }}</h4> <i :class="`${data.icon} icon-size`" v-if="data.icon"></i> 
                                    </div>                                     
                                </div>                                 
                            </div>                             
                        </div>                         
                    </div>                     
                </div>                 
                <div class="col-lg-4"> 
                    <RevenueLocation/> 
                </div>                 
            </div>             
            <div class="row"> 
                <!-- Conditionally render content based on state -->                 
                <div class="col-lg-10"> 
                    <component :is="currentComponent"/> 
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
import Wallet from "./Wallet.vue";
import Swap from "./Swap.vue";
import Contests from "./Contests.vue";
import Chart from "./Chart.vue";
import News from "./news.vue";

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
    Wallet,
    Swap,
    Contests,
    Chart,
    News,
  },
  data() {
    return {
      title: "Welcome to the Leprechaun Dashboard",
      items: [
        { text: "Leprechaun" },
        { text: "Dashboard", active: false },
      ],
      statData: [
        {
          title: "Wallet",
          backgroundImage: "url('images/cardbg.png')",
          icon: "ri-wallet-line",
          component: 'Wallet'
        },
        {
          title: "Swap",
          backgroundImage: "url('images/cardbg.png')",
          icon: "ri-refresh-line",
          component: 'Swap'
        },
        {
          title: "Contests",
          backgroundImage: "url('images/cardbg.png')",
          icon: "ri-trophy-line",
          component: 'Contests'
        },
        {
          title: "Chart",
          backgroundImage: "url('images/cardbg.png')",
          icon: "ri-line-chart-line",
          component: 'Chart'
        },
      ],
      currentComponent: 'News', // Default component to be shown
    };
  },
  methods: {
    selectWidget(widget) {
      const selectedData = this.statData.find(data => data.title === widget);
      if (selectedData) {
        this.currentComponent = selectedData.component;
      }
    },
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

.card-container {
  display: flex;
  flex-direction: row;
  gap: 20px; /* Adjust the gap between cards */
  justify-content: center; /* Center the cards horizontally */
  flex-wrap: nowrap; /* Prevent wrapping on smaller screens */
}

.card-link {
  text-decoration: none; /* Remove underline from links */
  cursor: pointer; /* Change cursor to pointer to indicate clickable cards */
}

.custom-card {
  width: 250px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px; /* Makes the corners rounded */
  overflow: hidden; /* Ensures content stays within rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: adds a shadow for better visual appearance */
  background-size: cover;
  background-position: center;
  position: relative;
  text-align: center; /* Centers the text and icon */
  transition: all 0.3s ease; /* Adds smooth transition for hover effect */
}

.custom-card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.custom-card:hover {
  filter: brightness(1.2); /* Makes the card brighter on hover */
  transform: scale(1.05); /* Slightly enlarges the card on hover */
}

.card-title {
  color: #fff; /* Makes the text white */
}

.icon-size {
  font-size: 36px; /* Adjust the icon size as needed */
  color: #fff; /* Makes the icon white */
}

.widget-container {
  margin-top: 20px; /* Add space between cards and widget */
}

@media (max-width: 1200px) {
  .card-container {
    flex-wrap: wrap; /* Allows cards to wrap on smaller screens */
  }

  .custom-card {
    width: 100%; /* Full width on smaller devices */
  }
}
</style>
