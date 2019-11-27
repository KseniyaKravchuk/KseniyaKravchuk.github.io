<template>
    <div>
        <h1>Hello {{ name }}!</h1>
        <p>{{ msg }}</p>
    </div>
</template>

<script>
    export default {
        name: 'TextBox',
        props: {
            msg: String,
            name: String
        }
    }
</script>

<style>

</style>