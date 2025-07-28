<template>
    <div class="loading-page">
        <div class="spinner"></div>
    </div>
</template>

<script>
export default {
    name: "LoadingFullPage",
};
</script>

<style scoped>
.loading-page {
    width: 100vw;
    height: 100vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.spinner {
    width: 60px;
    height: 60px;
    border: 6px solid #ccc;
    border-top: 6px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>
