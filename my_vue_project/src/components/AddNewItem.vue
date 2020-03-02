<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="title">
        <button type="submit">Create new item</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                title: ''
            }
        },
        methods: {
            onSubmit() {
                if (this.title.trim()) {
                    const newItem = {
                        id: Date.now(),
                        name: this.title,
                        completed: false
                    }
                    this.$emit('add-item', newItem)
                    this.title = ''
                }
            }
        }
    }
</script>

<style>
    form {
        display: flex;
        justify-content: center;
    }
</style>