<template>
    <section class="mainContent">
        <slot/>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '~/assets/mixins.scss';

.mainContent {
  padding: 0 var(--main-content-padding);
  max-width: var(--main-content-max-width);

  @include mobileBreakpoint {
    --main-content-padding: var(--sidebar-padding);
  }
}
</style>
