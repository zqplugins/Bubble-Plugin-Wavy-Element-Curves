function () {
    var style = document.createElement('style');
    style.innerHTML = `
#wave-effect-1 { clip-path: url('#wave-effect-1'); }
#wave-effect-2 { clip-path: url('#wave-effect-2'); }
#wave-effect-3 { clip-path: url('#wave-effect-3'); }
#wave-effect-4 { clip-path: url('#wave-effect-4'); }
#wave-effect-5 { clip-path: url('#wave-effect-5'); }
#wave-effect-6 { clip-path: url('#wave-effect-6'); }
#wave-effect-7 { clip-path: url('#wave-effect-7'); }
#wave-effect-8 { clip-path: url('#wave-effect-8'); }
#wave-effect-9 { clip-path: url('#wave-effect-9'); }
`;

    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "0");
    svg.setAttribute("height", "0");
    svg.innerHTML = `
<defs>
<clipPath id="wave-effect-1" clipPathUnits="objectBoundingBox">
<path d="M0,0 L1,0 L1,0.85 Q0.75,1 0.5,0.85 Q0.25,0.7 0,0.85 L0,0 Z" />
    </clipPath>

<clipPath id="wave-effect-2" clipPathUnits="objectBoundingBox">
<path d="M0,0 L1,0 L1,0.9 Q0.5,0.7 0,0.9 Z" />
    </clipPath>

<clipPath id="wave-effect-3" clipPathUnits="objectBoundingBox">
<path d="M0,0 L1,0 L1,0.9 Q0.65,1 0.35,0.9 L0,0.75 Z" />
    </clipPath>

<clipPath id="wave-effect-4" clipPathUnits="objectBoundingBox">
<path d="M0,0 L1,0 L1,0.75 Q0.5,1 0,0.75 Z" />
    </clipPath>

<clipPath id="wave-effect-5" clipPathUnits="objectBoundingBox">
<path d="M0,0 L1,0 L1,0.85 Q0.5,0.65 0,0.85 Z" />
    </clipPath>

<clipPath id="wave-effect-6" clipPathUnits="objectBoundingBox">
<path d="M0,0 L1,0 L1,0.8 Q0.5,0.9 0,0.8 Z" />
    </clipPath>

<clipPath id="wave-effect-7" clipPathUnits="objectBoundingBox">
<path d="M0,0 L1,0 L1,0.85 Q0.5,0.95 0,0.85 Z" />
    </clipPath>

<clipPath id="wave-effect-8" clipPathUnits="objectBoundingBox">
<path d="M0,0 L1,0 L1,0.75 Q0.5,0.85 0,0.7 Z" />
    </clipPath>

<clipPath id="wave-effect-9" clipPathUnits="objectBoundingBox">
<path d="M1,0.711 C0.777,0.899 0.54,1 0.296,1 C0.196,1 0.097,0.983 0,0.95 L0,0 H1 V0.711 Z" />
    </clipPath>
    </defs>
`;

    document.addEventListener('DOMContentLoaded', (event) => {
        document.head.appendChild(style);
        document.body.appendChild(svg);
    });

}