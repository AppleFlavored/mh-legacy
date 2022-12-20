<script lang="ts">
    import MinehutIcon from "../components/MinehutIcon.svelte";
</script>

<div class="w-full">
    <div class="absolute flex justify-center w-full h-16 px-4">
        <div class="flex flex-row items-center w-full max-w-[940px]">
            <div class="w-6 h-6 flex items-center fill-white">
                <MinehutIcon />
            </div>
            <p class="font-brand ml-2 text-white">Minehut</p>
        </div>
    </div>
    <div class="header-image w-full h-[450px] bg-green-900"></div>
</div>

<style scoped>
    .header-image {
        background-image: url(https://web.archive.org/web/20190804211323/https://minehut.com/assets/header1.jpg);
        background-position: bottom center;
    }

    .font-brand {
        font: 20px/32px Roboto, "Helvetica Neue", sans-serif;
        letter-spacing: 0.7px;
    }
</style>