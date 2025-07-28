<template>
    <div class="wrapper">
        <div class="page-wrapper my-0">
            <NotFound></NotFound>
        </div>
    </div>
</template>
<script>
import NotFound from '../components/NotFound.vue';
import "../../assets/js/bootstrap.bundle.min.js";
import "../../assets/js/pace.min.js";
export default {
    name: " app",
    components: {
        NotFound
    }
}
</script>
<style>
@import "assets/css/pace.min.css";
@import "assets/css/bootstrap.min.css";
@import "assets/css/bootstrap-extended.css";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&amp;display=swap");
@import "assets/css/app.css";
@import "assets/css/icons.css";
</style>