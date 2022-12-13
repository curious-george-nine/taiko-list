<script>
  // my biggest project i ever had lol;

  import Toast from "./Toast.svelte";

  import { t } from "../i18n";
  import { fly } from "svelte/transition";

  import { warning } from "svelte-awesome/icons";
  import { Icon } from "svelte-awesome";
  import { close } from "svelte-awesome/icons";

  let fetchProjects = async () => {
    const res = await fetch(
      "https://raw.githubusercontent.com/curious-george-nine/taiko-projects-list/main/projects.json"
    );
    const json = res.json();

    // @ts-ignore
    if (!res.ok) throw new Error(json);

    if (res.ok) return json;
  };

  let promise = fetchProjects();

  const decide = (/** @type {string[]} */ arr) => {
    let roundedRandom = Math.round(Math.random() * arr.length);
    let decidedValue;

    for (let i = 0; i < arr.length; i++) {
      if (roundedRandom == i) {
        if (arr[i] === undefined) decidedValue = decide(arr);
        else decidedValue = arr[i];
      } else {
        if (arr[arr.length - 1] === undefined) decidedValue = decide(arr);
        else decidedValue = arr[arr.length - 1];
      }
    }

    return decidedValue;
  };

  let mightBeNothing = [
    "ないなぁ、そうに決まってる",
    "ないんだなぁ、これが",
    "ないわ、すまん",
    "なんだ?",
  ];

  const toggleOverflowHidden = (bool = false) => {
    if (bool) document.body.classList.add("overflow-x-hidden");
    else document.body.classList.remove("overflow-x-hidden");
  };

  let showError = true;

  const hideError = () => (showError = false);

  export let type;
</script>

<section class="py-8">
  <div class="container mx-auto text-center">
    <h1 class="text-3xl">
      {type == "tookAllSnd"
        ? $t("page.tookallsnd") + $t("list.list")
        : $t("page.splitdonka") + $t("list.list")}
    </h1>
    <div>
      {#await promise}
        <div class="radial-progress animate-spin mt-32" style="--value: 70;" />
      {:then projects}
        {#each projects[type] as project}
          <div
            class="card bg-base-300 w-90 sm:w-96 md:w-128 mx-auto mt-6 odd:bg-base-200"
          >
            <div class="card-body">
              <span class="md:text-2xl"
                >{project.id}. {$t("projects.songname")}:
                {project.songName}</span
              >
              {#if type != "selfmade"}
                <span class="block md:inline">
                  Wikihouse {$t("projects.link")}:
                  <a
                    class="link"
                    href={project.wikihouseLink}
                    target="_blank"
                    rel="noreferrer"
                    >{project.wikihouseLink.length <= 60
                      ? project.wikihouseLink
                      : project.wikihouseLink.substring(0, 60) + "..."}</a
                  >
                </span>
              {:else}
                <span />
              {/if}
              <div class="collapse collapse-arrow">
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium">
                  {decide(["Youtube", "YouTube"])}
                  {$t("projects.link")}
                </div>
                <div class="collapse-content">
                  <div>
                    {$t("projects.normal")}
                    {$t("projects.link")}:
                    <a
                      class="link"
                      href={project.youtube.normal}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.youtube.normal.length <= 60
                        ? project.youtube.normal
                        : project.youtube.normal.substring(0, 60) + "..."}
                    </a>
                  </div>
                  <div>
                    {decide(["Short", "Shorts"])}
                    {$t("projects.link")}:
                    <a
                      class={project.youtube.shorts == "" ? "" : "link"}
                      href={project.youtube.shorts == ""
                        ? "#"
                        : project.youtube.shorts}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.youtube.shorts.length <= 60
                        ? project.youtube.shorts == ""
                          ? decide(mightBeNothing)
                          : project.youtube.shorts
                        : project.youtube.shorts.substring(0, 60) + "..."}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/each}
      {:catch error}
        <div class="radial-progress animate-spin mt-32" style="--value: 70;" />
        {#if showError}
          <div
            in:fly={{ x: 400, duration: 1500 }}
            out:fly={{ x: 400, duration: 1500 }}
            on:introstart={() => toggleOverflowHidden(true)}
            on:outrostart={() => toggleOverflowHidden(true)}
            class="absolute bottom-12 right-12"
          >
            <Toast>
              <Icon data={warning} scale={1.5} />
              <div class="text-left ml-4">
                {error}
                <div>
                  Report at:
                  <a
                    href="https://github.com/curious-george-nine/taiko-list/issues"
                    target="_blank"
                    rel="noreferrer"
                    class="link"
                  >
                    Github issues
                  </a>
                </div>
              </div>
              <div>
                <button
                  class="btn btn-circle btn-ghost btn-sm no-animation absolute top-[-5px] right-[-84px]"
                  on:click={hideError}
                >
                  <Icon data={close} />
                </button>
              </div>
            </Toast>
          </div>
        {/if}
      {/await}
    </div>
  </div>
</section>
