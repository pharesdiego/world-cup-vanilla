const random = _ => parseInt(255 - (Math.random() * 100), 10); // this will generate a number between 255 and 155

const rgba = _ => {
  const R = random(),
        G = random(),
        B = random(),
        A = 0.50;

  return `rgba(${R}, ${G}, ${B}, ${A})`;
}

export const gradient = _ => `linear-gradient(45deg, ${rgba()}, ${rgba()}), url(./overlay.png)`;