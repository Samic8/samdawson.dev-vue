<template>
    <section class="mainContent">
        <slot/>
    </section>
</template>

<script>
export default {

}
</script>

<style>
.mainContent {
  flex: 1 1 auto;
  padding-left: var(--main-content-padding);
  max-width: var(--main-content-max-width);
}
</style>
