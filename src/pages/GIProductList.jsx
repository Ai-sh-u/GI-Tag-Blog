import GIProductCard from "../components/GIProductCard";

const products = [
  {
    id: 1,
    title: 'Mysore Silk Saree',
    summary: 'Mysore silk sarees are renowned for their elegance, luxurious feel, and historical significance. Originating from Karnataka, India.',
    image: 'https://www.shopkhoj.com/wp-content/uploads/2024/12/Mysore-Silk-sarees.jpg' 
  },
  {
    id: 2,
    title: 'Udupi Mattu Gulla Brinjal',
    summary: 'GI-tagged vegetable from Udupi, Karnataka. GI-tags ensure farm-to-table traceability and freshness tracking.',
    image: 'https://euphoricgreens.in/cdn/shop/files/EEB3C3D6-D4E7-4C69-BEB1-861215191EE5.jpg?v=1719228088'
  },
  {
    id: 3,
    title: 'Coorg Coffee',
    summary: 'Coorg, also known as Kodagu, is a renowned hill district in Karnataka, India, celebrated for its picturesque landscapes and vibrant coffee culture.',
    image: 'https://pettikadai.in/cdn/shop/products/COORGFILTERCOFFEE.jpg?v=1672645589'
  },
  {
    id: 4,
    title: 'Sivakasi Firecrackers',
    summary: 'From Tamil Nadu’s firecracker hub. GI-tags used for safe inventory handling and sales tracking.',
    image: 'https://i0.wp.com/www.velcrackerssivakasi.com/wp-content/uploads/2021/10/bannr.png?fit=500%2C500&ssl=1'
  },
  {
    id: 5,
    title: 'Erode Turmeric',
    summary: 'Renowned for high curcumin content. GI-tags help track farm origin, export, and quality certification.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/7/432506692/TI/NJ/FK/23197957/erode-turmeric-powder.jpeg'
  },
  {
    id: 6,
    title: 'Tiruppur Garments',
    summary: 'Knitwear products from Tamil Nadu’s textile hub. GI-tags assist in logistics, batch tracing, and export compliance.',
    image: 'https://www.adthyaexports.in/img/infrastructure/packing.jpg'
  },
  {
    id: 7,
    title: 'Salem Steel Sheets',
    summary: 'Steel products used in construction and appliances. GI-tags enable tracking, inventory, and shipment history.',
    image: 'https://ssssgroup.com/wp-content/uploads/2023/01/202-stainless-steel-sheet-500x500-1.jpg'
  },
  {
    id: 8,
    title: 'Hubli Electrical Motors',
    summary: 'Industrial motors from Karnataka. GI-tags provide part identification, warranty tracking, and asset monitoring.',
    image: 'https://content.jdmagicbox.com/quickquotes/images_main/robust-displacement-motor-for-heavy-duty-use-3-hp-380-volts-1450-rpm-803295292-0gt9uo4e.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit'
  },
  {
    id: 9,
    title: 'Thanjavur Veena',
    summary: 'Traditional GI-tagged string instrument. GI-tags prove craftsmanship and track authenticity in cultural exports.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Saraswati_veena_%28Indian_long-necked_lute%29.png/1200px-Saraswati_veena_%28Indian_long-necked_lute%29.png'
  }
];

function GIProductList() {
  return (
    <div className="blog-list">
      <h1>GI-Tag Products (Karnataka & Tamil Nadu)</h1>
      <div className="card-grid">
        {products.map((item) => (
          <div className="blog-card" key={item.id}>
            <GIProductCard post={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GIProductList;
