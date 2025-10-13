<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Modal from "$lib/Modal.svelte";

  export let type: "separatedCycleway" | "sharedPath" | null;

  const dispatch = createEventDispatcher();
</script>

<Modal open={!!type} on:close={() => dispatch("close")}>
  <div class="flex flex-col gap-3">
    {#if type === "separatedCycleway"}
      <h3 class="font-bold">Separated cycleways</h3>

      <p>
        Separated cycleways are separated from the road by concrete dividers or
        a kerb, and are for bikes only.
      </p>

      <enhanced:img
        src="./assets/infra-examples/separatedCycleway1.jpg?w=928&h=696"
        alt="College Street Cycleway"
        width="4672"
        height="3504"
      />
    {/if}
    {#if type === "sharedPath"}
      <h3 class="font-bold">Shared paths</h3>

      <p>
        Shared paths are walkways, areas, or footpaths that are specifically
        designated for both bikes and pedestrians. They can be marked with a
        blue line, white centre line, pedestrian/bike symbols, or a sign.
      </p>

      <p>
        NOTE: In most states, it&rsquo;s legal to ride on any footpath, even if
        it&rsquo;s not a shared path. However, it&rsquo;s restricted in NSW &
        VIC. See <a
          href="https://www.nsw.gov.au/driving-boating-and-transport/roads-safety-and-rules/bicycle-safety-and-rules/riding-bikes-near-pedestrians"
          target="_blank">NSW footpath riding laws</a
        >
        and
        <a
          href="https://transport.vic.gov.au/road-and-active-transport/active-transport/bicycles/bike-riders-and-sharing-the-road"
          target="_blank">VIC footpath riding laws</a
        >.
      </p>

      <enhanced:img
        src="./assets/infra-examples/sharedPath1.jpg?w=928&h=696"
        alt="Shared Path in Mascot marked with a sign, white centre line, and pedestrian/bike symbols"
        width="3504"
        height="2628"
      />
      <enhanced:img
        src="./assets/infra-examples/sharedPath2.jpg?w=928&h=696"
        alt="Shared Path at Circular Quay marked with a blue line"
        width="4672"
        height="3504"
      />
    {/if}
  </div>
</Modal>
