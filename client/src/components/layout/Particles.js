import React from 'react';
import ParticlesBg from 'particles-bg';

let config = {
  num: [4, 7],
  rps: 0.1,
  radius: [5, 1],
  life: [2, 3],
  v: [10, 3],
  tha: [-40, 40],
  // body: icon, // Whether to render pictures
  rotate: [40, 40],
  alpha: [0.6, 10],
  scale: [1, 0.1],
  position: 'all', // all or center or {x:1,y:1,width:100,height:100}
  color: ['black', '#ff0000'],
  cross: 'dead', // cross or bround
  random: 15, // or null,
  g: 5, // gravity
  // f: [2, -1], // force
  onParticleUpdate: (ctx, particle) => {
    ctx.beginPath();
    ctx.rect(
      particle.p.x,
      particle.p.y,
      particle.radius * -1,
      particle.radius * -76
    );
    ctx.fillStyle = particle.color;
    ctx.fill();
    ctx.closePath();
  },
};

const Particles = () => (
  <div>
    <ParticlesBg type='cobweb' num={300} config={config} bg={true} />
  </div>
);

export default Particles;
