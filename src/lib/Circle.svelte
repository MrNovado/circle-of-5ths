<script lang="ts">
  const STROKE_SEL = "blue";
  const STROKE_IDL = "rgb(0, 0, 0)";
  const FILL_SEL = "red";
  const FILL_IDL = "rgb(216, 216, 216)";

  type ElementTypes = "rect" | "ellipse" | "path-1" | "path-2";
  let selected = $state<ElementTypes | "">("");
  let svgStyle = $derived(`
    --rect-stroke: ${selected === "rect" ? STROKE_SEL : STROKE_IDL};
    --rect-fill: ${selected === "rect" ? FILL_SEL : FILL_IDL};
    --ellipse-stroke: ${selected === "ellipse" ? STROKE_SEL : STROKE_IDL};
    --ellipse-fill: ${selected === "ellipse" ? FILL_SEL : FILL_IDL};
    --path-1-stroke: ${selected === "path-1" ? STROKE_SEL : STROKE_IDL};
    --path-1-fill: ${selected === "path-1" ? FILL_SEL : FILL_IDL};
    --path-2-stroke: ${selected === "path-2" ? STROKE_SEL : STROKE_IDL};
    --path-2-fill: ${selected === "path-2" ? FILL_SEL : FILL_IDL};
  `);

  const createOnClick = (type: ElementTypes) => {
    return function toggleSelected() {
      selected = selected === type ? "" : type;
      console.log(type);
    };
  };
</script>

<svg style={svgStyle} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
  <rect
    on:click={createOnClick("rect")}
    x="38.835"
    y="75.647"
    width="86.165"
    height="78.883"
    style="fill: var(--rect-fill); stroke: var(--rect-stroke);"
  />
  <ellipse
    on:click={createOnClick("ellipse")}
    style="fill: var(--ellipse-fill); stroke: var(--ellipse-stroke);"
    cx="189.523"
    cy="112.055"
    rx="41.869"
    ry="36.812"
  />
  <path
    on:click={createOnClick("path-1")}
    d="M 326.862 77.265 L 390.373 171.925 L 263.35 171.925 L 326.862 77.265 Z"
    style="fill: var(--path-1-fill); stroke: var(--path-1-stroke);"
  />
  <path
    on:click={createOnClick("path-2")}
    style="fill: var(--path-2-fill); stroke: var(--path-2-stroke);"
    d="M 134.304 231.796 C 134.304 221.862 150.972 216.262 158.981 213.592 C 176.068 207.897 194.188 204.693 212.379 204.693 C 221.659 204.693 231.837 204.915 240.291 209.143 C 257.562 217.778 247.456 239.056 238.673 249.596 C 236.069 252.721 231.885 255.469 228.56 257.686 C 228.08 258.006 225.324 260.113 225.324 260.113 C 225.324 260.113 231.269 260.113 231.796 260.113 C 239.96 260.113 248.338 259.532 256.473 260.113 C 261.518 260.474 266.473 261.143 271.44 262.136 C 291.859 266.22 324.848 283.143 315.939 309.871 C 310.706 325.57 292.802 336.582 277.104 338.997 C 262.759 341.204 246.93 341.954 232.201 340.615 C 228.401 340.27 220.251 341.206 217.638 338.592 C 217.469 338.424 214.704 339.629 213.997 339.806 C 211.612 340.402 208.362 339.806 205.906 339.806 C 194.084 339.806 183.381 337.243 171.926 334.547 C 159.621 331.652 140.672 324.968 132.686 314.321 C 123.601 302.208 121.644 290.377 118.123 276.295 C 116.883 271.333 112.078 265.395 109.223 262.541 C 109.145 262.462 108.524 259.856 108.819 259.709 C 120.659 253.789 136.549 251.408 149.272 245.955 C 150.67 245.356 162.533 241.416 161.003 239.887 C 160.305 239.188 157.142 240.218 156.149 239.887 C 151.332 238.281 145.285 238.905 140.777 236.651 C 139.318 235.921 137.179 234.671 136.327 233.819 C 135.782 233.274 135.579 230.178 134.709 230.178"
  />
</svg>

<style>
  svg {
    background: silver;
    width: 500px;
    height: 500px;
  }

  rect,
  ellipse,
  path {
    cursor: pointer;
  }
</style>
