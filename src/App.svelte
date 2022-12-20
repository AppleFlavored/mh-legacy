<script lang="ts">
    import { Route, Router } from "svelte-navigator";
    import Home from "./pages/Home.svelte";
    import DashboardLayout from "./layout/DashboardLayout.svelte";
    import OverviewPage from "./pages/server/OverviewPage.svelte";
    import AppearancePage from "./pages/server/AppearancePage.svelte";
    import ServerLayout from "./layout/ServerLayout.svelte";
</script>

<Router>
    <Route path='/' component={Home} />
    <Route path='dashboard/*' component={ServerLayout} />
</Router>

<style global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto';
        color: #c2c2c2;
        background-color: #171717;
    }
</style>