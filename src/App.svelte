<script>
  import Drawer from "./lib/Drawer.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import Projects from "./lib/Projects.svelte";

  import { locale, locales } from "./i18n";

  // get activeTabValue from Navbar.svelte

  let activeTabValue = 1;

  function handleTab(event) {
    // event.detail is an object in the function dispatch().
    activeTabValue = event.detail.activeTabValue;
  }
</script>

<Drawer>
  <Navbar on:tabToggle={handleTab} />
  {#if activeTabValue == 1}
    <Projects type="tookAllSnd" />
  {:else if activeTabValue == 2}
    <Projects type="splitDonka" />
  {:else if activeTabValue == 3}
    <Projects type="selfmade" />
  {/if}
</Drawer>
