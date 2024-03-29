# Tech

Exploring `svelte-5` preview.

Using `svg` (initially built in InkScape) as the main rendering medium.

Using `tonal` to show info about selected chord & `howler` to play it.

Piano sprite is made using `Fl Studio`.

# About

Demo: https://mrnovado.github.io/circle-of-5ths/

Note: _all flat chords are changed to sharp variants for personal convinience_ (most piano UIs are sharp-first)

![image](https://github.com/MrNovado/circle-of-5ths/assets/4604289/ef66053e-c0e8-4e17-ac7b-1a5f7fabcdb9)

Interactive `circle of 5ths` to help explore music.

- shows diminished, minor and major chords
- shows scales and scale degrees
- shows relative chords
- highlights current key
- can switch scales by clicking on scale names
  - simple `click` switches boths scale and key, ie rotates both sharps and modes circles together
  - `shift+click` only rotates modes/degrees
- `mouse-wheel` rotates chords/sharps
- can play selected chords
  - must choose `go howler` at the beginning
  - piano sprite is built using FL Studio
  - see console for additional event/chord info
