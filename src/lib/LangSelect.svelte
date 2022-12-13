<script>
  import { t, locales, locale } from "../i18n";
</script>

<div class="mt-4">
  <div class="menu-title">
    current: {$t("select.language")}
  </div>
  <select class="select w-24 lg:mt-0" bind:value={$locale}>
    {#each locales as l}
      <option value={l}>{l}</option>
    {/each}
  </select>
</div>
