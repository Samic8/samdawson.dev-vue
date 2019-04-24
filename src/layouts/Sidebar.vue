<template>
    <section class="sidebar">
        <slot/>
    </section>
</template>

<script>
export default {

}
</script>

<style>
.sidebar {
  box-sizing: border-box;
  width: var(--side-bar-size);
  border-right: 1px solid #F1F2F4;
  padding: 0 50px;
}
</style>
