<template>
    <section class="sidebar">
        <slot/>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '~/assets/mixins.scss';

.sidebar {
  box-sizing: border-box;
  padding: 0 var(--sidebar-padding);
}
</style>
