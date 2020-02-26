<template>
    <div>
        <li v-for="message in messages" :key="message">
            {{ message }}
        </li>
        <ChildMessageList @custom="custom" />
        <p v-if="emitted">Emitted!</p>
    </div>
</template>
<script>
import ChildMessageList from './ChildMessageList.vue'
export default {
    name: 'MessageList',
    components: {
        ChildMessageList
    },
    props: [
        'messages'
    ],
    data: () => ({
        emitted: false
    }),
    methods: {
        custom () {
            this.emitted = true
        }
    }
}
</script>