<template>
    <li>
        <span v-bind:class="{done: item.completed}">
            <input type="checkbox" v-on:change="item.completed=!item.completed">
            <strong>{{ index + 1 }}</strong>
            {{ item.name }}
        </span>
        <button v-on:click="$emit('remove-item', item.id)">Delete</button>
    </li>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            require: true
        },
        index: Number
    }
}
</script>

<style scoped>
    li {
        border: 1px solid #000000;
        padding: 10px 0;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-around;
    }
    .done {
        text-decoration: line-through;
    }
</style>