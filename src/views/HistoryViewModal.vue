<template>
    <ul class="history">
        <li v-for="item in history" :key="item">{{ item }}</li>
    </ul>
</template>

<script>
export default {
    props: ['history']
}
</script>
