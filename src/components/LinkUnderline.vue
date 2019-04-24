<template>
    <div class="link">
        <slot></slot>
        <div class="link__underline"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.link {
    display: inline-block;
    cursor: pointer;
    transition: .1s background-color ease;
}

.link:hover .link__underline{
    width: 100%;
    background-color: var(--color-alias-interaction);
}

.link__underline {
    transition: .15s width ease, .1s background-color ease;
    height: 4px;
    width: 80%;
    background-color: var(--color-light-purple);
}
</style>
