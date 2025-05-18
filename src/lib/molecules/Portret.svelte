<script>
    import Head from "$lib/atoms/portret/Head.svelte"
    import Mouth from "$lib/atoms/portret/Mouth.svelte"
    import Eyes from "$lib/atoms/portret/Eyes.svelte"
    import ThirdEye from "$lib/atoms/portret/ThirdEye.svelte"
    import Bangs from "$lib/atoms/portret/Bangs.svelte"
</script>

<div>
    <Head/>
    <Mouth/>
    <Eyes/>
    <ThirdEye/>
    <Bangs/>
</div>

<style>
    div {
        position: relative;
        width: 20rem;
        height: 20rem;
        background-color: aqua;
    }
</style>