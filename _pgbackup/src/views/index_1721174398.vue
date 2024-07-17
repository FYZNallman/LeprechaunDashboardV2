<template> 
    <Layout> 
        <div class="dashboard-background"> 
            <PageHeader :title="title" :items="items"/> 
            <div class="row"> 
                <div class="col-xl-10"> 
                    <h1>Dashboard Content</h1> 
                </div>                 
            </div>             
        </div>         
    </Layout>     
</template> 
<script>
import Layout from "@/views/layouts/main.vue";
import PageHeader from "@/components/page-header.vue";

export default {
  components: {
    Layout,
    PageHeader,
  },
  data() {
    return {
      title: "Welcome to the Leprechaun Dashboard",
      items: [
        { text: "Leprechaun" },
        { text: "Dashboard", active: false },
      ],
    };
  },
};
</script> 
<style scoped>
.dashboard-background {
  background-image: url('@/assets/images/dashbg.png');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding: 20px;
}
</style>
