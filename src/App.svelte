<script lang="ts">
  import type { BoundingBox } from "./lib/common/types";
  import Circle from "./lib/Circle.svelte";

  const BOUNDS: BoundingBox = { w: 1920 / 1.5, h: 1080 };
  const BOUNDS_STYLE = [
    `--box-width:${BOUNDS.w}px`, //
    `--box-height:${BOUNDS.h}px`,
  ]
    // making sure all styles have semicolon at the end
    .map((s) => `${s};`)
    .join("");
</script>

<main>
  <bounding-box style={BOUNDS_STYLE}>
    <Circle bounds={BOUNDS} />
  </bounding-box>
</main>

<style>
  main {
    overflow: hidden;
  }

  bounding-box {
    display: block;
    width: var(--box-width);
    height: var(--box-height);
  }
</style>
