<script lang="ts">
    import { Link, Route, Router,  } from "svelte-navigator";
    import AppearancePage from "../pages/server/AppearancePage.svelte";
    import OverviewPage from "../pages/server/OverviewPage.svelte";
    import DashboardLayout from "./DashboardLayout.svelte";

    let contentElem;


</script>

<DashboardLayout>
    <div class="h-12 bg-[#242424] flex flex-row items-center">
        <p class="px-4">Page Title</p>
    </div>
    <div class="flex justify-center w-full mt-10">
        <div class="flex gap-5 max-w-5xl w-full">
            <nav class="w-40">
                <Link class="text-xs h-12 flex items-center border-r-2 border-dark" to="/dashboard/home">
                    Home
                </Link>
                <Link class="text-xs h-12 flex items-center border-r-2 border-secondary" to="/dashboard/appearance">
                    Server Appearance
                </Link>
                <Link class="text-xs h-12 flex items-center border-r-2 border-secondary" to="/dashboard/world">
                    World Settings
                </Link>
                <Link class="text-xs h-12 flex items-center border-r-2 border-secondary" to="/dashboard/properties">
                    Server Properties
                </Link>
                <Link class="text-xs h-12 flex items-center border-r-2 border-secondary" to="/dashboard/plugins">
                    Plugins
                </Link>
                <Link class="text-xs h-12 flex items-center border-r-2 border-secondary" to="/dashboard/files">
                    File Manager
                </Link>
                <Link class="text-xs h-12 flex items-center border-r-2 border-secondary" to="/dashboard/danger">
                    Danger Zone
                </Link>
            </nav>
            <div class="content flex-grow" bind:this={contentElem}>
                <Router>
                    <Route path="/home" component={OverviewPage} />
                    <Route path="/appearance" component={AppearancePage} />
                </Router>
            </div>
            <!-- <div class="flex-grow grid grid-cols-2 gap-4">
                <div class="flex flex-col gap-4">
                    <div class="w-full bg-secondary rounded">
                        <div class="p-6">
                            1
                        </div>
                    </div>
                    <div class="w-full bg-secondary rounded">
                        <div class="p-6">
                            2
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-4">
                    <div class="w-full bg-secondary rounded">
                        <div class="p-6">
                            3
                        </div>
                    </div>
                    <div class="w-full bg-secondary rounded">
                        <div class="p-6">
                            4
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</DashboardLayout>

<style>
    @keyframes pageLoad {
        from {
            margin-top: 144px;
            opacity: 0;
        }
        to {
            margin-top: 0px;
            opacity: 1;
        }
    }

    .content {
        animation: pageLoad 1s forwards 0s;
    }
</style>