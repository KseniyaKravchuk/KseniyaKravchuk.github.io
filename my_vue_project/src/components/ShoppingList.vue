<template>
    <div>
        <AddNewItem />
        <ul>
            <ShoppingItem
                v-for="item in items" :key="item"
                v-bind:item="item"
                v-on:remove-item="removeItem"
            />
        </ul>
    </div>
</template>

<script>
import ShoppingItem from '@/components/ShoppingItem';
import AddNewItem from '@/components/AddNewItem';

export default {
    props: ['items'],
    components: {
        ShoppingItem, AddNewItem
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