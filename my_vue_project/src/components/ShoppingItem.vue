<template>
    <li>
        {{ item.name }}
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