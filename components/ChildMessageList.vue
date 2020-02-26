<template>
    <div>
        Emitted!
    </div>
</template>
<script>
export default {
    name: 'ChildMessageList',
    created () {
        this.changeEmit()
    },
    methods: {
        changeEmit () {
            this.$emit('custom')
        }
    }
}
</script>