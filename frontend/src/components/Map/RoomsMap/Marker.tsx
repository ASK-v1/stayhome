import './marker.css';

export default function Marker({
  positions,
  map,
  priceAndId,
}: {
  positions: Array<any>;
  map?: google.maps.Map;
  priceAndId: Array<any>;
}) {
  let marker = [];
  for (let i = 0; i < positions.length; i++) {
    marker[i] = new google.maps.Marker({
      map: map,
      position: positions[i],
      animation: google.maps.Animation.DROP,
      label: {
        text: `$${priceAndId[i].price}`,
        className: 'mark',
      },
      title: `${priceAndId[i].id}`,
      icon: 'https://res.cloudinary.com/dpsbq1odp/image/upload/v1648808168/Webp.net-resizeimage_vb9bxu_zthesx.png',
      optimized: false,
    });
    marker[i].addListener('click', () => {
      console.log(priceAndId[i]);
    });
  }

  return null;
}
