<template>
    <li>
        <input type="checkbox">
        <span>{{ item.name }}</span>
        <button>Delete</button>
    </li>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            require: true
        }
    }
}
</script>

<style scoped>
    li {
        border: 1px solid #000000;
        padding: 10px 0;
        margin-bottom: 10px;
    }
    .done {
        text-decoration: line-through;
    }
</style>