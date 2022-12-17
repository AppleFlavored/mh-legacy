<script lang="ts">
    import { Route, Router } from "svelte-navigator";
    import Layout from "./Layout.svelte";
</script>

<Layout>
    <Router>
        <Route path='/'>
            <p>Homepage</p>
        </Route>
        <Route path='dashboard/home'>
            <p>Dashboard Home</p>
        </Route>
    </Router>
</Layout>

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
        color: #ffffff;
        background-color: #171717;
    }
</style>