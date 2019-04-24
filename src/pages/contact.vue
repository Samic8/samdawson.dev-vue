<template>
    <Layout>
        <Sidebar>
            <h1>Phone</h1>
            <LinkUnderline>
                <a href="tel:0432037593" class="">0432037593</a>
            </LinkUnderline>
            <h1>Email</h1>
            <LinkUnderline>
                <a href="mailto:sam.dawson181@gmail.com" class="">sam.dawson181@gmail.com</a>
            </LinkUnderline>
        </Sidebar>
        <MainContent>
            <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="contact" value="contact" />
                <input type="text" class="input h2-margin-top" placeholder="Your email..."/>
                <textarea type="text" class="input" style="margin: 1.2rem 0 .8rem; min-height: 205px;" placeholder="Your message..."/>
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

<style>
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
</style>
