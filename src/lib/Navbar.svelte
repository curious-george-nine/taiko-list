<script>
  import Icon from "svelte-awesome";
  import { youtubePlay } from "svelte-awesome/icons";
  import { t } from "../i18n";

  import LangSelect from "./LangSelect.svelte";
  import TabToggle from "./TabToggle.svelte";

  // pass activeTabValue from TabToggle.svelte to App.svelte

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function tabToggle(event) {
    dispatch("tabToggle", event.detail);
  }
</script>

<div class="navbar bg-base-200">
  <div class="navbar-start">
    <div class="dropdown">
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          /></svg
        >
      </label>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <ul
        tabindex="0"
        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <label for="theme-drawer">{$t("nav.theme")}</label>
        </li>
        <TabToggle on:tabToggle={tabToggle} />
        <LangSelect />
      </ul>
    </div>
    <a
      class="btn btn-ghost normal-case text-xl"
      href="https://youtube.com/@georgenotcurious"
      target="_blank"
      rel="noreferrer"
    >
      curious george 999
      <span class="ml-3">
        <Icon data={youtubePlay} />
      </span>
    </a>
  </div>
  <div class="navbar-end hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      <li>
        <label for="theme-drawer">{$t("nav.theme")}</label>
      </li>
      <TabToggle on:tabToggle={tabToggle} />
      <LangSelect />
    </ul>
  </div>
</div>
