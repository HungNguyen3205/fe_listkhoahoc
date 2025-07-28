<template>
    <div class="wrapper">
        <div class="page-wrapper my-0">
            <Loading></Loading>
        </div>
    </div>
</template>
<script>
import "../../assets/js/bootstrap.bundle.min.js";
import "../../assets/js/pace.min.js";
import Loading from '../components/Loading.vue';
export default {
    name: " app",
    components: {
        Loading
    }
}
</script>
<style>
@import "../../assets/css/pace.min.css";
@import "../../assets/css/bootstrap.min.css";
@import "../../assets/css/bootstrap-extended.css";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&amp;display=swap");
@import "../../assets/css/app.css";
@import "../../assets/css/icons.css";
</style>