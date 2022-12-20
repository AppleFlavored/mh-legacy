<script lang="ts">
    export let to: string;
</script>

<a class="font-link border-b-2 border-transparent hover:text-white hover:border-b-2 hover:border-primary-light" href="{to}">
    <slot/>
</a>

<style scoped>
    .font-link {
        margin-top: 2px;
        font: 16px/32px Roboto, "Helvetica Neue", sans-serif;
    }
</style>