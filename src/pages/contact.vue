<template>
    <Layout v-bind:page="'contact'">
        <Sidebar>
            <h1 class="hidden-on-mobile">Phone</h1>
            <div class="linkContainer">
                <a href="tel:0432037593" class="link">0432037593</a>
            </div>
            <h1 class="hidden-on-mobile">Email</h1>
            <div class="linkContainer">
                <a href="mailto:sam.dawson181@gmail.com" class="link">sam.dawson181@gmail.com</a>
            </div>
        </Sidebar>
        <MainContent>
            <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <input name="email" type="text" class="input h2-margin-top" placeholder="Your email..."/>
                <textarea name="message" type="text" class="input" style="margin: 1.2rem 0 .8rem; min-height: 205px;" placeholder="Your message..."/>
                <button type="submit">Send</button>
            </form>
        </MainContent>
    </Layout>
</template>

<script>
export default {
    metaInfo: {
        title: 'Contact'
    },
}
</script>

<style lang="scss" scoped>
@import '~/assets/mixins.scss';

.input {
    background-color: var(--color-light-blue-grey);
    box-shadow: inset 0px 0px 2px rgba(186, 199, 210, 0.54);
    width: 100%;
    box-sizing: border-box;
    padding: 1rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
}

.linkContainer {
    @include mobileBreakpoint {
        margin-top: 1rem;
    }
}
</style>
