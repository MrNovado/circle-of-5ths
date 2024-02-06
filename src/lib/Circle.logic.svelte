<script lang="ts" context="module">
  import type {
    BoundingBox, //
    BoundingBoxExt,
    Circles,
    Coords,
    Radius,
    XCoord,
    YCoord,
  } from "./Circle.types";

  export const NOTES = new Array(12).fill("𝅗𝅥");
  export const CIRCLES: Circles = [0.9, 0.65, 0.4, 0.15];

  const getRadius = (bounds: BoundingBox, r: Radius) => Math.floor((Math.min(bounds.w, bounds.h) / 2) * r);
  const getPivot = (bounds: BoundingBox): Coords => [Math.floor(bounds.w / 2), Math.floor(bounds.h / 2)];

  export const toRel = (boundsExt: BoundingBoxExt, x: XCoord, y: YCoord): Coords => {
    const pivot = getPivot(boundsExt);
    return [
      -(pivot[0] - x) - boundsExt.x, //
      pivot[1] - y + boundsExt.y,
    ];
  };

  export const drawBase = (
    ctx: CanvasRenderingContext2D, //
    bounds: BoundingBox
  ) => {
    const pivot = getPivot(bounds);
    ctx.translate(...pivot);
    // ctx.rotate((Math.PI / 180) * 15);
    // ctx.save();

    // drawing circles
    CIRCLES.forEach((r) => {
      ctx.beginPath();
      ctx.arc(0, 0, getRadius(bounds, r), 0, Math.PI * 2);
      ctx.closePath();
      ctx.stroke();
    });

    // drawing sectors (by drawing lines actually)
    NOTES.forEach((_, n, { length: slices }) => {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      const pos = n * (Math.PI / (slices / 2));
      const dist = getRadius(bounds, CIRCLES[0]);
      const x = Math.cos(pos) * dist;
      const y = Math.sin(pos) * dist;
      ctx.lineTo(x, y);
      ctx.closePath();
      ctx.stroke();
    });

    // chord
    {
      const chordRadWidth = Math.PI / 6;
      const chordPos = 4;
      const posStart = chordRadWidth * (chordPos - 1);
      const posEnd = chordRadWidth * chordPos;

      ctx.beginPath();
      ctx.strokeStyle = "blue";
      ctx.fillStyle = "red";

      // line start (left)
      ctx.moveTo(Math.cos(posStart), -getRadius(bounds, CIRCLES[3]));
      ctx.lineTo(Math.sin(posStart), -getRadius(bounds, CIRCLES[2]));
      // ark top
      ctx.arc(0, 0, getRadius(bounds, CIRCLES[2]), Math.PI * 1.5, Math.PI * 1.5 + chordRadWidth);

      // line end (right)
      ctx.moveTo(
        Math.cos(posEnd) * -getRadius(bounds, CIRCLES[2]), //
        Math.sin(posEnd) * -getRadius(bounds, CIRCLES[2])
      );
      ctx.lineTo(
        Math.cos(posEnd) * -getRadius(bounds, CIRCLES[3]), //
        Math.sin(posEnd) * -getRadius(bounds, CIRCLES[3])
      );
      // ark bottom
      ctx.arc(
        0,
        0,
        getRadius(bounds, CIRCLES[3]),
        -chordRadWidth * (chordPos - 1) + chordRadWidth,
        -chordRadWidth * (chordPos - 1),
        true
      );

      ctx.stroke();
      ctx.fill();
      ctx.closePath();
    }
  };
</script>
