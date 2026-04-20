/* eslint-disable react/prop-types */
import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "image (35)",
    "image (36)",
    "image (37)",
    "image (38)",
    "image (39)",
    "image (40)",
    "image (41)",
    "image (42)",
    "image (43)",
    "image (44)",
    "image (45)",
    "image (46)",
    "capcut",
    "image (47)",
    "image (48)",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.png`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.png`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
