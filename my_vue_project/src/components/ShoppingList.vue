<template>
    <div>
        <ul>
            <ShoppingItem
                v-for="(item, i) in items" :key="item"
                v-bind:item="item"
                v-bind:index="i"
                v-on:remove-item="removeItem"
            />
        </ul>
    </div>
</template>

<script>
import ShoppingItem from '@/components/ShoppingItem';

export default {
    props: ['items'],
    components: {
        ShoppingItem
    },
    methods: {
        removeItem(id) {
            this.$emit('remove-item', id)
        }
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
    }
</style>