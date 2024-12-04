<template>
    <h1 class="history-title">Calculator history</h1>
    <ul class="history-items">
        <li v-for="item in history" :key="item">{{ item }}</li>
    </ul>
    <FooterComponent/>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';

    export default {
        props: ['history'],
        components: { FooterComponent },
        data() {
            return {
                history: []
            }
        },
        mounted () {
            if (localStorage.getItem('history'))
                this.history = JSON.parse(localStorage.getItem('history'));
        },
    }
</script>

<style lang="scss" scoped>

</style>