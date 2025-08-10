<script lang="ts">
  import { goto } from "$app/navigation";

  if (globalThis.window) {
    const newUrl = new URL(window.location.href);
    newUrl.pathname = `/${localStorage.getItem("lastRegion") || "sydney"}`;

    goto(newUrl, { replaceState: true });
  }
</script>
