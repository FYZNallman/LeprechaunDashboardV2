<template>
    <header id="page-topbar">
        <div class="navbar-header">
            <div class="d-flex">
                <!-- LOGO -->
                <div class="navbar-brand-box">
                    <router-link to="/" class="logo logo-dark"><span class="logo-sm"><img src="/images/DashLogo.png" alt height="50"/></span><span class="logo-lg"><img src="/images/DashLogo.png" alt height="50"/></span>
                    </router-link>
                    <router-link to="/" class="logo logo-light"><span class="logo-sm"><img src="/images/DashLogo.png" alt height="50"/></span><span class="logo-lg"><img src="/images/DashLogo.png" alt height="50"/></span>
                    </router-link>
                </div>
                <button @click="toggleMenu" type="button" class="btn btn-sm px-3 font-size-24 header-item waves-effect" id="vertical-menu-btn"><i class="ri-menu-2-line align-middle"></i>
                </button>
                <!-- App Search -->
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
    methods: {
        toggleMenu() {
            this.$parent.toggleMenu();
        }
    }
};
</script>
<style scoped>
/* Optional: Add styles for the search bar and header if needed */
</style>
