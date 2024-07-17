<template> 
    <Layout> 
        <div class="dashboard-background"> 
            <PageHeader :title="title" :items="items"/> 
            <div class="row justify-content-center align-items-center flex-grow-1"> 
                <div class="col-lg-8 d-flex justify-content-center"> 
                    <!-- Card Container -->                     
                    <div class="card-container"> 
                        <div v-for="(data, index) in statData" :key="index" class="card-link" @click="selectWidget(data.component)"> 
                            <div class="card custom-card" :style="{ backgroundImage: `url(${data.backgroundImage})` }"> 
                                <div class="card-body custom-card-body"> 
                                    <div class="d-flex flex-column align-items-left justify-content-center"> 
                                        <h4 class="card-title mb-4 text-center text-white">{{ data.title }}</h4> <i :class="`${data.icon} icon-size`" v-if="data.icon"></i> 
                                    </div>                                     
                                </div>                                 
                            </div>                             
                        </div>                         
                    </div>                     
                </div>                 
            </div>             
            <div class="row justify-content-center align-items-center flex-grow-1"> 
                <!-- Conditionally render the selected component -->                 
                <div class="col-lg-8"> 
                    <component :is="currentComponent"/> 
                </div>                 
            </div>             
        </div>         
    </Layout>     
</template> 
<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../../components/page-header.vue";
import Sources from "./sources.vue";
import RevenueLocation from "./revenue-location.vue";
import Wallet from "./wallet.vue";
import Swap from "./swap.vue";
import Contests from "./contests.vue";
import LiveChart from "./LiveChart.vue";
import News from './news.vue';

// Import images
import cardBg from '@/assets/images/cardbg.png';

export default {
  components: {
    Layout,
    PageHeader,
    Sources,
    RevenueLocation,
    Wallet,
    Swap,
    Contests,
    LiveChart,
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
          backgroundImage: cardBg,
          icon: "ri-wallet-line",
          component: 'Wallet',
        },
        {
          title: "Swap",
          backgroundImage: cardBg,
          icon: "ri-refresh-line",
          component: 'Swap',
        },
        {
          title: "Contests",
          backgroundImage: cardBg,
          icon: "ri-trophy-line",
          component: 'Contests',
        },
        {
          title: "Chart",
          backgroundImage: cardBg,
          icon: "ri-line-chart-line",
          component: 'LiveChart',
        },
      ],
      currentComponent: 'News', // Default component to be shown
    };
  },
  methods: {
    selectWidget(component) {
      this.currentComponent = component;
    },
  },
};
</script> 
<style scoped>
.dashboard-background {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('@/assets/images/dashbg.png');
  background-size: contain; /* Adjusted to contain the image within the area */
  background-position: center left; /* Adjusted to position the image within the area */
  background-repeat: no-repeat;
  min-height: 100vh; /* Ensure it covers the entire viewport height */
  width: 100%;
  padding: 20px; /* Optional: Adjust padding as needed */
}

.row {
  margin-bottom: 20px; /* Optional: Adjust margin between rows */
  width: 100%;
}

.card-container {
  display: flex;
  flex-direction: row;
  gap: 20px; /* Adjust the gap between cards */
  justify-content: center; /* Center the cards horizontally */
  flex-wrap: wrap; /* Allow wrapping if needed */
}

.card-link {
  text-decoration: none; /* Remove underline from links */
  cursor: pointer; /* Change cursor to pointer to indicate clickable cards */
}

.custom-card {
  width: 200px;
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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
</style>
