<template>
    <div>
        <ul>
            <ShoppingItem
                v-for="item in items" :key="item"
                v-bind:item="item"
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
    }
}
</script>