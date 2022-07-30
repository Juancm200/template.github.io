<script>
    import Header from '$lib/components/layout/header.svelte';
    import Footer from '$lib/components/layout/footer.svelte';
</script>

<Header/>
<div>
    <slot/>
</div>
<Footer/>