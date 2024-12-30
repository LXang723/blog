<template>
    <img :src="src" :alt="alt" :width="width" />
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true,
        },
        alt: {
            type: String,
            default: '',
        },
        width: {
            type: [String, Number],
            default: '300',
        },
    },
};
</script>
<style scoped>
img {
    border: 1px solid #444;
}
</style>