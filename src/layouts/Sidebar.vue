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
  border-right: 1px solid #F1F2F4;
  padding: 0 var(--sidebar-padding);

  @include mobileBreakpoint {
    --sidebar-padding: 2.5rem;
  }
}
</style>
