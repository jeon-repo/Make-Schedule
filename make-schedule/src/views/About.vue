<template>
    <div>
        <HelloWorld :msg='"어바웃 페이지"' />
    </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
    name: 'About',
    components: {
        HelloWorld
    }
}
</script>