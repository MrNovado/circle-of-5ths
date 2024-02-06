<script lang="ts" context="module">
  import type {
    Circles, //
    BoundingBox,
    Radius,
    Coords,
    BoundingBoxExt,
    XCoord,
    YCoord,
  } from "./types";

  export const NOTES = new Array(12).fill("𝅗𝅥");
  export const CIRCLES: Circles = [0.9, 0.65, 0.4, 0.15];

  export const getRadius = (bounds: BoundingBox, r: Radius) => Math.floor((Math.min(bounds.w, bounds.h) / 2) * r);
  export const getPivot = (bounds: BoundingBox): Coords => [Math.floor(bounds.w / 2), Math.floor(bounds.h / 2)];

  export const toRel = (boundsExt: BoundingBoxExt, x: XCoord, y: YCoord): Coords => {
    const pivot = getPivot(boundsExt);
    return [
      -(pivot[0] - x) - boundsExt.x, //
      pivot[1] - y + boundsExt.y,
    ];
  };
</script>
