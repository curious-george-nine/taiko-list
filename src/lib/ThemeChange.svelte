<script>
  import { onMount } from "svelte";
  import { themeChange } from "theme-change";
  import { t } from "../i18n";

  onMount(() => {
    themeChange(false);
  });

  let date = new Date();

  let currentDate = `${date.getMonth() + 1}/${date.getDate()}`;

  let winter;
  let autumn;

  let winterEnd =
    new Date().getMonth() + 1 == 12
      ? `${new Date().getFullYear() + 1}/03/01`
      : `${new Date().getFullYear()}/03/01`;

  if (
    Date.parse(winterEnd) - Date.now() <= Date.parse("1970/04/01") &&
    Date.parse(winterEnd) - Date.now() >= Date.parse("1970/01/01")
  ) {
    console.log("winter");
    winter = true;
  }

  let autumnEnd = `${new Date().getFullYear()}/11/31`;

  if (
    Date.parse(autumnEnd) - Date.now() <= Date.parse("1970/04/01") &&
    Date.parse(autumnEnd) - Date.now() >= Date.parse("1970/01/01")
  ) {
    console.log("autumn", Date.parse(autumnEnd) - Date.now());
    autumn = true;
  }

  let halloween;
  let valentine;

  if (currentDate == "2/14") {
    valentine = true;
  } else if (currentDate == "10/31") {
    halloween = true;
  }

  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "business",
    "acid",
    "lemonade",
    "coffee",
  ];

  if (winter) themes.unshift("winter");
  else if (autumn) themes.unshift("autumn");
  else if (halloween) themes.unshift("halloween");
  else if (valentine) themes.unshift("valentine");

  themes.unshift("georgie");
</script>

<div class="p-4 w-80 bg-base-100 text-base-content">
  <span class="text-3xl">{$t("theme.changetheme")}</span>
  {#each themes as theme}
    <ul>
      <li class="mt-4">
        <button
          class="btn btn-primary lowercase"
          data-theme={theme}
          data-set-theme={theme}
          data-act-class="ACTIVECLASS"
        >
          {theme}
        </button>
      </li>
    </ul>
  {/each}
</div>
