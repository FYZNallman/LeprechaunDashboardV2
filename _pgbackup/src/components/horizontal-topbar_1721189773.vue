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
