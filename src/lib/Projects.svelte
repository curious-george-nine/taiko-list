<script>
  import Toast from "./Toast.svelte";

  import { t } from "../i18n";
  import { fly } from "svelte/transition";

  import { warning } from "svelte-awesome/icons";
  import { Icon } from "svelte-awesome";

  let fetchProjects = async () => {
    const res = await fetch(
      "https://aw.githubusercontent.com/curious-george-nine/taiko-projects-list/main/projects.json"
    );
    const json = res.json();

    if (res.ok) {
      return json;
    } else {
      // @ts-ignore
      throw new Error(json);
    }
  };

  let promise = fetchProjects();

  const decide = (/** @type {string[]} */ arr) => {
    let roundedRandom = Math.round(Math.random() * arr.length);

    for (let i = 0; i < arr.length; i++) {
      return roundedRandom == i
        ? arr[i] === undefined
          ? decide(arr)
          : arr[i]
        : arr[arr.length - i] === undefined
        ? decide(arr)
        : arr[arr.length - i];
    }
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
        <div
          transition:fly={{ x: 200, duration: 2000 }}
          on:introstart={() => toggleOverflowHidden(true)}
          on:outrostart={() => toggleOverflowHidden(true)}
          on:introend={() => toggleOverflowHidden()}
          on:outroend={() => toggleOverflowHidden()}
          class="absolute bottom-12 right-12"
        >
          <Toast>
            <Icon data={warning} />
            {error}
          </Toast>
        </div>
      {/await}
    </div>
  </div>
</section>
