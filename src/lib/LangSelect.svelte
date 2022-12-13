<script>
  import { locales, locale } from "../i18n";
</script>

<select class="select w-24" bind:value={$locale}>
  {#each locales as l}
    <option value={l}>{l}</option>
  {/each}
</select>
