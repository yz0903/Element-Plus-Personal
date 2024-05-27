
<script setup lang="ts">
defineOptions({
  name: 'ErButton',
})
</script>
<template>
    <button style="background-color: blue;">
        <slot>

            This is the default content
        </slot>
    </button>
</template>
<style>

</style>