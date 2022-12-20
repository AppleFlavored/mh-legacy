<script>
    import MinehutIcon from "../components/MinehutIcon.svelte";
    import NavLink from "../components/NavLink.svelte";

    // TODO: Change "login" navlink to account settings icon based on login status
</script>

<nav class="flex items-center px-4 w-full h-16 bg-[#303030] text-dark">
    <a class="w-6 h-6 flex items-center fill-dark hover:fill-white mr-[25px]" href="/">
        <MinehutIcon />
    </a>
    <div class="flex flex-row gap-5 w-full">
        <NavLink to="/dashboard/home">Dashboard</NavLink>
        <NavLink to="/">Support</NavLink>
        <NavLink to="/">Server List</NavLink>
        <NavLink to="https://forums.minehut.com/">Forums</NavLink>
        <span class="flex-grow"></span>
        <NavLink to="#login" class="mr-5">Login</NavLink>
    </div>
</nav>
<slot />