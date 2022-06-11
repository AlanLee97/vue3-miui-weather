<template>
    <div class="weather-bg">
        <img class="cloud" src="./yun2.webp" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>

<style scoped lang="scss">
.weather-bg {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;

    .cloud {
        animation: cloudMove 100s infinite 1s;
        opacity: 0.8;
    }
}

@keyframes cloudMove {
    0% {
        transform: translate(-100%, 40px);
    }
    25% {
        transform: translate(-40%, 0px);
    }
    50% {
        transform: translate(0%,40px);
    }
    75% {
        transform: translate(-40%, 0px);
    }
    100% {
        transform: translate(-100%, 40px);
    }
}
</style>
