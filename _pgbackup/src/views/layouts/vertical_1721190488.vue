<template> 
    <div> 
        <div id="preloader"> 
            <div id="status"> 
                <div class="spinner"> <i class="ri-loader-line spin-icon"></i> 
                </div>                 
            </div>             
        </div>         
        <!-- Begin page -->         
        <div id="layout-wrapper" class="layout-background"> 
            <Topbar/> 
            <SideBar :is-condensed="isMenuCondensed" :type="leftSidebarType" :width="layoutWidth"/> 
            <script>
import router from "@/router";
import { layoutComputed } from "@/state/helpers";

import Topbar from "../../components/topbar.vue";
import SideBar from "../../components/side-bar.vue";
import Footer from "../../components/footer.vue";

export default {
  components: { Topbar, SideBar, Footer },
  data() {
    return {
      isMenuCondensed: false,
    };
  },
  created: () => {
    document.body.removeAttribute("data-layout", "horizontal");
    document.body.removeAttribute("data-topbar", "dark");
    document.body.setAttribute("data-sidebar", "dark");
  },
  computed: {
    ...layoutComputed,
  },
  methods: {
    toggleMenu() {
      document.body.classList.toggle("sidebar-enable");

      if (window.screen.width >= 992) {
        // eslint-disable-next-line no-unused-vars
        router.afterEach((routeTo, routeFrom) => {
          document.body.classList.remove("sidebar-enable");
          document.body.classList.remove("vertical-collpsed");
        });
        document.body.classList.toggle("vertical-collpsed");
      } else {
        // eslint-disable-next-line no-unused-vars
        router.afterEach((routeTo, routeFrom) => {
          document.body.classList.remove("sidebar-enable");
        });
        document.body.classList.remove("vertical-collpsed");
      }
      this.isMenuCondensed = !this.isMenuCondensed;
    },
    toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    },
  },
  mounted() {
    document.body.classList.remove("auth-body-bg");
    if (this.loader === true) {
      document.getElementById("preloader").style.display = "block";
      document.getElementById("status").style.display = "block";

      setTimeout(function () {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("status").style.display = "none";
      }, 2500);
    } else {
      document.getElementById("preloader").style.display = "none";
      document.getElementById("status").style.display = "none";
    }
  },
};
</script>             
            <style scoped>
.layout-background {
  min-height: 0vh; /* Ensure it covers the entire viewport height */
  display: flex;
  flex-direction: column;
}

/* Ensure full width for main content and footer */
.main-content, .page-content, .container-fluid {
  width: 100%;
  flex: 1;
}

/* Optional: Add padding or margin adjustments if needed */
</style>
