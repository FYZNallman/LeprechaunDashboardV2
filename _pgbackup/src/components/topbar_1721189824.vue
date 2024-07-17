<script>
import simplebar from "simplebar-vue";
import i18n from "../i18n";
import us from "@/assets/images/flags/us.jpg";
import french from "@/assets/images/flags/french.jpg";
import spain from "@/assets/images/flags/spain.jpg";
import chaina from "@/assets/images/flags/chaina.png";
import arabic from "@/assets/images/flags/arabic.png";

export default {
  data() {
    return {
      languages: [
        {
          flag: us,
          language: "en",
          title: "English"
        },
        {
          flag: french,
          language: "fr",
          title: "French"
        },
        {
          flag: spain,
          language: "es",
          title: "spanish"
        },
        {
          flag: chaina,
          language: "zh",
          title: "Chinese"
        },
        {
          flag: arabic,
          language: "ar",
          title: "Arabic"
        }
      ],
      current_language: "en",
      flag: us,
      title: "English"
    };
  },
  components: { simplebar },
  methods: {
    toggleMenu() {
      this.$parent.toggleMenu();
    },
    initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");
      if (
        !document.fullscreenElement &&
        /* alternative standard method */ !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    },
    setLanguage(locale, country, flag) {
      this.text = country;
      this.flag = flag;
      this.current_language = i18n.locale;
      i18n.global.locale = locale;
    }
  }
};
</script> 
<template>
    <header id="page-topbar">
        <div class="navbar-header">
            <div class="d-flex">
                <!-- App Search-->
                <form class="app-search d-none d-lg-block">
                    <div class="position-relative">
                        <input type="text" class="form-control" :placeholder="$t('navbar.search.text')"/><span class="ri-search-line"></span>
                    </div>
                </form>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    data() {
        return {};
    },
};
</script>
<style scoped>
/* Optional: Add styles for the search bar if needed */
</style>
<style lang="scss" scoped>.notify-item {
  .active {
    color: #16181b;
    background-color: #f8f9fa;
  }
}</style>