<script>
  import { t } from "../i18n";

  // toggle tab
  // pass activeTabValue to Navbar.svelte

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function toggle(tabValue) {
    dispatch("tabToggle", {
      activeTabValue: tabValue,
    });
  }
</script>

<li>
  <button on:click={() => toggle(1)}>{$t("page.tookallsnd")}</button>
</li>
<li>
  <button on:click={() => toggle(2)}>{$t("page.splitdonka")}</button>
</li>
<li>
  <button on:click={() => toggle(3)}>{$t("page.selfmade")}</button>
</li>
