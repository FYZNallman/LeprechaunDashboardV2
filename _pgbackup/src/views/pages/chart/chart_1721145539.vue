<template> 
    <Layout> 
        <div class="dashboard-background"> 
            <PageHeader :title="title" :items="items"/> 
            <div class="row"> 
                <div class="col-10" style="display:grid;grid-template-columns:1fr;grid-template-rows:150px;"> 
                    <Stat style="grid-area:auto / 1 / auto / 4;"/> 
                </div>                 
            </div>             
            <div class="row"> 
                <div class="col-lg-4 col-12"> 
                    <Sources/> 
                </div>                 
                <div class="col-lg-4 col-12"> 
                    <RecentActivity/> 
                </div>                 
                <div class="col-lg-4 col-12"> 
                    <RevenueLocation/> 
                </div>                 
            </div>             
            <div class="row"> 
                <div class="col-lg-10 col-12"> 
                    <News/> 
                </div>                 
            </div>             
        </div>         
    </Layout>     
</template> 
<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../../components/page-header.vue";

import Stat from "./widget.vue";
import RevenueAnalytics from "./revenue.vue";
import SalesAnalytics from "./sales-analytics.vue";
import EarningReport from "./earning.vue";
import Sources from "./sources.vue";
import RecentActivity from "./recent-activity.vue";
import RevenueLocation from "./revenue-location.vue";
import Chat from "./chat.vue";
import News from './news.vue';

/**
 * Dashboard component
 */
export default {
  components: {
    Layout,
    PageHeader,
    Stat,
    RevenueAnalytics,
    SalesAnalytics,
    EarningReport,
    Sources,
    RecentActivity,
    RevenueLocation,
    Chat,
    News
  },
  data() {
    return {
      title: "Live Chart",
      items: [
        {
          text: "Leprechaun"
        },
        {
          text: "Dashboard",
          active: false
        }
      ]
    };
  }
};
</script> 
<style scoped>.dashboard-background {
  background-image: url('/images/dashbg.png');
  background-size: cover;
  background-position: center;
  min-height: 100vh; /* Ensure it covers the entire viewport height */
  padding: 20px; /* Optional: Adjust padding as needed */
}

.row {
  margin-bottom: 20px; /* Optional: Adjust margin between rows */
}

/* Add any additional styling as needed */</style>
