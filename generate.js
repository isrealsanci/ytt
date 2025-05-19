const fs = require('fs');
const path = require('path');

const total = 5000;
const baseImageUrl = "https://swheelnft.vercel.app/images/image.png";

for (let i = 1; i <= total; i++) {
  const metadata = {
    name: `Spin Wheel #${i}`,
    description: "Spin Wheel - Get and Hold to get 20 Spins per day on Spin Wheel Mini App",
    image: baseImageUrl,
    attributes: [
      {
        trait_type: "SPINS",
        value: "20/days"
      }
    ]
  };

  const filePath = path.join(__dirname, 'public', 'metadata', `${i}.json`);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(metadata, null, 2));
}

console.log(`✅ Generated ${total} metadata files in /public/metadata`);
