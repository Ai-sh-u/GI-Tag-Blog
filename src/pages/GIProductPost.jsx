import { useParams } from "react-router-dom";

const GIData = {
  1: {
    title: 'Mysore Silk Saree',
    content: 'Mysore silk sarees are renowned for their elegance, luxurious feel, and historical significance. Originating from Karnataka, India, these sarees are woven from 100% pure mulberry silk and are characterized by their smooth texture, lustrous finish, and minimalistic designs.Authentic Mysore silk sarees tagged with GT-tags to prove originality and trace production from Karnataka Silk Industries Corporation (KSIC).Pure Silk: Made from 100% pure mulberry silk, ensuring a soft, smooth feel and natural sheen.Gold Zari Work: The sarees feature intricate zari work using pure gold and silver threads.',
  },
  2: {
    title: 'Udupi Mattu Gulla Brinjal',
    content: 'Udupi Mattu Gulla is a unique and highly prized variety of green brinjal (eggplant) grown specifically in and around the village of Mattu in the Udupi district of Karnataka, India. It holds a Geographical Indication (GI) tag, awarded in 2011, recognizing its unique characteristics and connection to the region.GI-tagged vegetable from Udupi, Karnataka. GT-tags ensure farm-to-table traceability and freshness tracking.'
  },
  3: {
    title: 'Coorg Coffee',
    content: 'Coorg, also known as Kodagu, is a renowned hill district in Karnataka, India, celebrated for its picturesque landscapes and vibrant coffee culture. It is often referred to as the "Coffee Capital of India" and significantly contributes to the nation coffee production, accounting for nearly 40% of Karnataka total output and Karnataka itself producing about 71% of India coffee. India stands as the sixth-largest coffee producer and fifth-largest exporter globally.Premium Arabica coffee grown in Coorg. GT-tags track source, quality, and export data for authenticity.'
  },
  4: {
    title: 'Sivakasi Firecrackers',
    content: 'From Tamil Nadu’s firecracker hub. GT-tags used for safe inventory handling and sales tracking.What sets Sivakasi firecrackers apart is the combination of skilled craftsmanship, locally sourced materials, and traditional techniques passed down through generations. The variety ranges from flower pots, rockets, and sparklers to ground spinners, chakkars, and aerial shells — each adding joy and color to festivals like Diwali, New Year, and even weddings.Beyond the visual spectacle, Sivakasi’s firecracker industry is a vital economic backbone, employing thousands of workers across small and medium-sized units. While the industry faces challenges related to safety and regulations, efforts are continuously being made to adopt safer practices and eco-friendly innovations like low-smoke crackers.'
  },
  5: {
    title: 'Erode Turmeric',
    content: 'Renowned for high curcumin content. GT-tags help track farm origin, export, and quality certification.Erode, a district in western Tamil Nadu, is world-renowned for producing high-quality turmeric, known for its deep yellow color, strong aroma, and high curcumin content. It has earned a Geographical Indication (GI) tag, officially recognizing its unique qualities tied to the regions soil and climate.Erode turmeric is not just a spice—it is a symbol of heritage and health. It plays an essential role in Indian cooking, especially in curries, pickles, and masalas, and is also a powerful ingredient in home remedies.Farmers in Erode have nurtured this crop for generations, and today it stands as a proud identity of the region. Its GI tag helps protect local farmers’ livelihoods and ensures authenticity for consumers across the globe.'
  },
  6: {
    title: 'Tiruppur Garments',
    content: 'Knitwear products from Tamil Nadu’s textile hub. GT-tags assist in logistics, batch tracing, and export compliance.Tirupur, located in Tamil Nadu, is often referred to as the “Knitwear Capital of India.” It is one of the largest textile hubs in the country and a global exporter of readymade garments, particularly cotton-based clothing. The city is known for its vast range of T-shirts, innerwear, kidswear, sportswear, and other knitwear products.Tirupur’s garment industry supports over 600,000 workers and houses thousands of manufacturing units, ranging from small-scale factories to large exporters. The city has also embraced eco-friendly dyeing processes, earning global recognition for sustainable fashion practices.'
  },
  7: {
    title: 'Salem Steel Sheets',
    content: 'Steel products used in construction and appliances. GT-tags enable tracking, inventory, and shipment history.Salem, a city nestled in the heart of Tamil Nadu, is a major hub for the production and processing of stainless steel in India. Known for its high-quality steel sheets and coils, Salem has earned a strong reputation in the industrial and construction sectors across the country and abroad.At the core of this legacy is the Salem Steel Plant, a unit of Steel Authority of India Limited (SAIL). Established in the 1980s, this plant is known for producing cold-rolled and hot-rolled stainless steel sheets with precision engineering and superior surface finish.Salem steel is exported to many countries and forms the backbone of kitchen appliances, structural supports, decorative facades, and heavy machinery.'
  },
  8: {
    title: 'Hubli Electrical Motors',
    content: 'Industrial motors from Karnataka. GT-tags provide part identification, warranty tracking, and asset monitoring.Hubli, located in northern Karnataka, has emerged as a growing center for electrical motor manufacturing and distribution. The city is known for producing a wide range of motors used in agriculture, industrial machinery, water pumps, and domestic appliances.Hubli proximity to both rural and industrial regions has helped it become a key supplier of low to medium-voltage motors, particularly those used in irrigation systems, borewells, and small manufacturing units.'
  },
  9: {
    title: 'Thanjavur Veena',
    content: 'Traditional GI-tagged string instrument. GT-tags prove craftsmanship and track authenticity in cultural exports.The Thanjavur Veena, also known as the Saraswati Veena, is one of the most iconic and revered traditional musical instruments of South India. Originating from Thanjavur, a city rich in art and culture in Tamil Nadu, this veena holds a Geographical Indication (GI) tag, signifying its regional and historical uniqueness.Carved from a single block of jackfruit wood, the Thanjavur Veena is known for its deep, rich sound, elegant structure, and detailed craftsmanship. It consists of a large resonator (kudam), a long fretboard (dandi) with 24 brass frets, and four main playing strings with three drone strings.'
  }
};

function GIProductPost() {
  const { id } = useParams();
  const product = GIData[id];

  return (
    <div className="post-page-wrapper">
      <div className="blog-post">
        <h2>{product.title}</h2>
        <p>{product.content}</p>
      </div>
    </div>
  );
}

export default GIProductPost;
