<script>
  import { t, locales, locale } from "../i18n";
</script>

<div class="mt-4 lg:mt-0">
  <div class="menu-title lg:hidden">
    current: {$t("select.language")}
  </div>
  <select class="select w-24" bind:value={$locale}>
    {#each locales as l}
      <option value={l}>{l}</option>
    {/each}
  </select>
</div>
