import {
  type ChordsSeqExp,
  type ChordDesc,
  seqToRec, //
} from "../common";

export const SHARPS_ARR: ChordsSeqExp = [
  [
    { rId: 0, ch: "B°" },
    { rId: 1, ch: "Am" },
    { rId: 2, ch: "C" },
  ],
  [
    { rId: 3, ch: "F#°" },
    { rId: 4, ch: "Em" },
    { rId: 5, ch: "G" },
  ],
  [
    { rId: 6, ch: "C#°" },
    { rId: 0, ch: "Bm" },
    { rId: 7, ch: "D" },
  ],
  [
    { rId: 8, ch: "G#°" },
    { rId: 3, ch: "F#m" },
    { rId: 1, ch: "A" },
  ],
  [
    { rId: 9, ch: "D#°" },
    { rId: 6, ch: "C#m/Dbm" },
    { rId: 4, ch: "E/Fb" },
  ],
  [
    { rId: 10, ch: "A#°/Bb°" },
    { rId: 8, ch: "G#m/Abm" },
    { rId: 0, ch: "B/Cb" },
  ],
  [
    { rId: 11, ch: "F°/E#°" },
    { rId: 9, ch: "Ebm/D#m" },
    { rId: 3, ch: "F#/Gb" },
  ],
  [
    { rId: 2, ch: "C°/B#°" },
    { rId: 10, ch: "Bbm/A#m" },
    { rId: 6, ch: "Db/C#" },
  ],
  [
    { rId: 5, ch: "G°/Fx°" },
    { rId: 11, ch: "Fm/E#m" },
    { rId: 8, ch: "Ab/G#" },
  ],
  [
    { rId: 7, ch: "D°" },
    { rId: 2, ch: "Cm/B#m" },
    { rId: 9, ch: "Eb/D#" },
  ],
  [
    { rId: 1, ch: "A°" },
    { rId: 5, ch: "Gm" },
    { rId: 10, ch: "Bb" },
  ],
  [
    { rId: 4, ch: "E°" },
    { rId: 7, ch: "Dm" },
    { rId: 11, ch: "F" },
  ],
];

export const SHARPS_COORDS = [
  [
    {
      x: "166.95207",
      y: "38.232292",
      d: "m 152.2678,25.410566 c 12.06069,-3.063343 24.68953,-3.01541 36.68334,0.30304 l -5.2156,19.49553 c -8.60887,-2.319554 -17.57259,-2.468094 -26.22574,-0.291212 z",
    },
    {
      x: "165.76144",
      y: "56.620834",
      d: "m 157.51897,44.968966 c 7.40686,-2.081128 18.3833,-1.939243 26.16762,0.233289 l -4.99618,18.568043 c -4.37599,-1.26718 -10.42876,-1.773941 -16.20542,-0.228484 z",
    },
    {
      x: "168.40729",
      y: "75.538544",
      d: "m 162.51005,63.5616 c 5.46231,-1.387394 10.76374,-1.26421 16.19575,0.238722 L 173.43415,83.3828 c -1.8304,-0.410055 -3.91977,-0.491812 -5.66788,-0.190756 z",
    },
  ],
  [
    {
      x: "194.33646",
      y: "44.185417",
      d: "m 188.99238,25.725733 c 12.00261,3.283569 23.15512,9.657242 31.952,18.459425 l -14.20617,14.205135 c -6.34495,-6.263757 -14.42487,-10.822204 -23.026,-13.196295 z",
    },
    {
      x: "185.86978",
      y: "61.647915",
      d: "m 183.73222,45.199995 c 8.84553,2.234888 17.42107,7.440474 22.95643,13.23449 l -13.49518,13.556146 c -4.57029,-4.016366 -7.96062,-6.24852 -14.46363,-8.179103 z",
    },
    {
      x: "179.3875",
      y: "77.787498",
      d: "m 178.72425,63.813715 c 5.46246,1.502674 10.36272,4.230775 14.35747,8.226547 l -14.32428,14.315759 c -1.54537,-1.433862 -3.54402,-2.489085 -5.31497,-2.966692 z",
    },
  ],
  [
    {
      x: "216.82603",
      y: "66.674995",
      d: "m 220.93497,44.166885 c 8.81299,8.784976 15.41148,20.020652 18.71075,32.019754 l -19.37779,5.182503 c -2.42166,-8.580708 -7.24031,-16.69113 -13.54533,-23.004806 z",
    },
    {
      x: "202.00938",
      y: "75.67083",
      d: "m 206.70669,58.425668 c 6.58217,6.317679 11.61765,15.18528 13.56248,22.958854 l -18.62447,4.984084 c -1.98539,-5.751261 -3.83031,-9.465144 -8.52713,-14.359651 z",
    },
    {
      x: "187.85417",
      y: "85.989578",
      d: "m 193.07815,72.050935 c 4.01514,4.016247 7.02199,8.892579 8.51847,14.349577 l -19.50557,5.217286 c -0.64268,-1.857086 -1.61271,-3.573249 -3.32877,-5.25387 z",
    },
  ],
  [
    {
      x: "225.68959",
      y: "97.234375",
      d: "m 239.67563,76.189867 c 3.28468,12.002316 3.35763,25.500703 0.26036,37.553533 l -19.42265,-5.16691 c 2.16082,-8.650074 2.12703,-18.567058 -0.20901,-27.178697 z",
    },
    {
      x: "205.58124",
      y: "97.498955",
      d: "m 220.26122,81.379246 c 2.58448,8.749772 2.38623,19.447854 0.22157,27.163104 l -18.59738,-4.96434 c 1.12689,-5.979033 1.40815,-10.627678 -0.24449,-17.20682 z",
    },
    {
      x: "189.44167",
      y: "96.837502",
      d: "m 201.61874,86.402003 c 1.49333,5.642675 1.63612,11.53549 0.23693,17.187627 l -19.5132,-5.240373 c 0.59534,-2.017657 0.48631,-4.658558 -0.24955,-6.725848 z",
    },
  ],
  [
    {
      x: "217.22292",
      y: "128.32292",
      d: "m 239.95359,113.75891 c -3.14121,12.04065 -9.63866,23.42624 -18.33607,32.32673 l -14.2675,-14.25881 c 6.1882,-6.41867 10.89459,-14.62193 13.16637,-23.25075 z",
    },
    {
      x: "201.08333",
      y: "117.87188",
      d: "m 220.47376,108.54349 c -2.15815,8.86456 -7.39771,17.663 -13.14354,23.24836 l -13.60718,-13.62781 c 3.97661,-4.60494 6.29347,-8.06738 8.16762,-14.5869 z",
    },
    {
      x: "187.06041",
      y: "109.14062",
      d: "m 201.85888,103.58704 c -1.46424,5.50638 -4.17674,10.48705 -8.1384,14.53318 l -14.27459,-14.28957 c 1.37145,-1.42999 2.33367,-3.31884 2.89449,-5.477951 z",
    },
  ],
  [
    {
      x: "195.39479",
      y: "148.69583",
      d: "m 221.59768,146.09972 c -8.71079,8.88632 -19.92757,15.50906 -31.8986,18.90879 l -5.23351,-19.53998 c 8.56012,-2.4935 16.62945,-7.28084 22.88988,-13.63887 z",
    },
    {
      x: "185.34062",
      y: "133.4823",
      d: "m 207.32971,131.78727 c -6.33303,6.56739 -15.09847,11.69443 -22.87656,13.6211 l -4.98865,-18.58845 c 5.75589,-1.97196 9.34697,-3.96909 14.25244,-8.65449 z",
    },
    {
      x: "179.78438",
      y: "116.54896",
      d: "m 193.72485,118.13024 c -4.01438,4.04336 -8.81705,7.13112 -14.2684,8.66361 l -5.23979,-19.54068 c 2.22062,-0.81115 3.31738,-1.56347 5.22614,-3.42704 z",
    },
  ],
  [
    {
      x: "168.27499",
      y: "158.61771",
      d: "m 189.70926,165.0193 c -11.94142,3.49957 -26.37977,3.59086 -38.29916,0.28947 l 5.27488,-19.63577 c 8.50039,2.44956 19.21223,2.30242 27.78057,-0.1878 z",
    },
    {
      x: "165.2323",
      y: "137.98021",
      d: "m 184.4667,145.41408 c -8.78545,2.46045 -20.10369,2.51212 -27.78754,0.23855 l 4.99101,-18.58394 c 5.96252,1.21135 11.21057,1.34075 17.81244,-0.21868 z",
    },
    {
      x: "167.08438",
      y: "118.40104",
      d: "m 179.45724,126.78246 c -5.72868,1.49709 -12.04777,1.65279 -17.75937,0.23581 l 5.26361,-19.56014 c 2.37559,0.63307 4.94791,0.60217 7.24735,-0.1978 z",
    },
  ],
  [
    {
      x: "136.52499",
      y: "151.87083",
      d: "m 151.41603,165.28204 c -12.03814,-3.15081 -24.1593,-10.17011 -32.69223,-18.87448 l 14.40207,-14.40974 c 6.09468,6.24397 14.90202,11.4041 23.52902,13.68276 z",
    },
    {
      x: "143.80104",
      y: "132.55624",
      d: "m 156.67005,145.65151 c -8.81789,-2.34151 -18.04682,-7.82308 -23.51183,-13.68349 l 13.61649,-13.62419 c 4.52149,4.07126 8.41374,6.70678 14.893,8.71571 z",
    },
    {
      x: "155.575",
      y: "116.54895",
      d: "m 161.70574,126.98893 c -5.62223,-1.63013 -10.7848,-4.55011 -14.9242,-8.67314 l 14.35491,-14.34189 c 2.06137,1.97662 3.22962,2.6559 5.77515,3.47069 z",
    },
  ],
  [
    {
      x: "113.50625",
      y: "130.3073",
      d: "m 118.7289,146.3788 c -8.84365,-8.75409 -15.65882,-20.98773 -18.68791,-32.79458 l 19.66519,-5.27466 c 2.1501,8.45632 7.07991,17.39855 13.40728,23.68997 z",
    },
    {
      x: "129.64583",
      y: "118.13646",
      d: "m 133.15054,131.96519 c -6.4795,-6.42292 -11.56849,-15.85225 -13.3878,-23.65615 l 18.61699,-4.9924 c 1.89246,5.78253 3.76744,10.04907 8.38481,15.01863 z",
    },
    {
      x: "147.50522",
      y: "107.81771",
      d: "m 146.76705,118.34113 c -4.05523,-4.19355 -6.84608,-9.46669 -8.35748,-15.0387 l 19.63122,-5.25661 c 0.83371,2.85851 1.50069,4.22547 3.08701,5.92079 z",
    },
  ],
  [
    {
      x: "105.17187",
      y: "98.292709",
      d: "m 100.06434,113.5847 c -3.273386,-12.00538 -3.045698,-25.494741 0.24265,-37.232023 l 19.65837,5.254965 c -2.37199,8.396783 -2.57506,18.08833 -0.24712,26.702158 z",
    },
    {
      x: "124.22187",
      y: "96.969795",
      d: "m 119.7697,108.29337 c -2.38099,-8.807312 -2.12073,-19.00659 0.22216,-26.669595 l 18.59787,4.983695 c -1.26516,5.951337 -1.70815,10.096896 -0.20841,16.71259 z",
    },
    {
      x: "145.25626",
      y: "96.837502",
      d: "m 138.40597,103.30488 c -1.43432,-5.592938 -1.25744,-11.172019 0.24583,-16.682196 l 19.62156,5.282692 c -0.58775,2.474891 -0.69633,3.818539 -0.23393,6.15749 z",
    },
  ],
  [
    {
      x: "111.91875",
      y: "68.65937",
      d: "m 100.30588,76.343193 c 3.13527,-12.042187 10.49576,-24.054398 19.1891,-32.598569 l 14.32507,14.396275 c -6.2361,6.102733 -11.61249,14.826277 -13.88,23.456208 z",
    },
    {
      x: "130.04269",
      y: "76.596878",
      d: "m 119.97553,81.621752 c 2.31394,-8.825163 8.02808,-17.977973 13.8714,-23.461267 l 13.58984,13.651038 c -4.05711,4.534195 -6.8439,8.302261 -8.83258,14.787769 z",
    },
    {
      x: "147.24063",
      y: "86.386452",
      d: "m 138.64331,86.624944 c 1.58855,-5.615993 4.76852,-10.766809 8.84663,-14.834042 l 14.37394,14.411393 c -1.9769,1.993964 -2.68962,2.989092 -3.58176,5.672535 z",
    },
  ],
  [
    {
      x: "137.71562",
      y: "44.979164",
      d: "m 119.50694,43.744721 c 8.75889,-8.838899 20.94976,-15.327372 32.75823,-18.350075 l 5.24242,19.5234 c -8.45749,2.145513 -17.38024,6.885766 -23.67507,13.209719 z",
    },
    {
      x: "146.18228",
      y: "60.457291",
      d: "m 133.84962,58.18509 c 6.48027,-6.422143 15.85413,-11.466557 23.67391,-13.216406 l 4.9714,18.569987 c -5.79912,1.840976 -10.03592,3.688741 -15.04634,8.261743 z",
    },
    {
      x: "159.27916",
      y: "78.052078",
      d: "m 147.46158,71.80438 c 4.18305,-4.015475 9.45341,-6.783265 15.04349,-8.272695 l 5.26341,19.657578 c -2.53298,0.608631 -3.74067,1.277264 -5.9112,3.016496 z",
    },
  ],
];

export const SHARPS_ARR_SHARP_ONLY: ChordsSeqExp = SHARPS_ARR.map(
  (sec) =>
    sec.map(function sharpsOnly(v): ChordDesc {
      const invariants = v.ch.split("/");
      if (invariants.length > 1) {
        return {
          ...v,
          ch: invariants[0].includes("#") //
            ? invariants[0]
            : invariants[1],
        };
      }

      if (v.ch.includes("Bb")) {
        return {
          ...v, //
          ch: "A#",
        };
      }

      return v;
    }) as unknown as [ChordDesc, ChordDesc, ChordDesc]
);

export const SHARPS_REC = seqToRec(SHARPS_ARR);
