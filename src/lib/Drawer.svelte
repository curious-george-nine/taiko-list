<script>
  import ThemeChange from "./ThemeChange.svelte";
</script>

<div class="drawer">
  <input type="checkbox" id="theme-drawer" class="drawer-toggle" />
  <div
    class="drawer-content min-h-screen bg-gradient-to-tr from-base-200 to-base-100"
  >
    <slot />
  </div>
  <div class="drawer-side">
    <label for="theme-drawer" class="drawer-overlay" />
    <ThemeChange />
  </div>
</div>
