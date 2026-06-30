type LeafOrnamentsProps = {
  position?: "left" | "right" | "hero";
};

export const LeafOrnaments = ({ position = "left" }: LeafOrnamentsProps) => (
  <svg
    className={`leaf-ornament leaf-ornament-${position}`}
    aria-hidden="true"
    viewBox="0 0 220 520"
    fill="none"
  >
    <path
      className="leaf-stem"
      d="M108 495C92 398 94 307 113 214C127 146 135 91 119 26"
      pathLength="1"
    />
    <path
      className="leaf-line leaf-line-a"
      d="M112 408C74 390 48 362 35 319C76 318 106 337 125 377"
      pathLength="1"
    />
    <path
      className="leaf-line leaf-line-b"
      d="M113 326C150 303 171 270 178 226C140 229 112 252 100 296"
      pathLength="1"
    />
    <path
      className="leaf-line leaf-line-c"
      d="M117 245C80 225 57 194 48 151C87 154 115 177 130 217"
      pathLength="1"
    />
    <path
      className="leaf-line leaf-line-d"
      d="M124 162C154 137 168 105 164 66C132 76 112 103 106 143"
      pathLength="1"
    />
    <path
      className="leaf-line leaf-line-e"
      d="M117 92C93 76 79 52 75 22C101 28 118 48 125 77"
      pathLength="1"
    />
  </svg>
);
