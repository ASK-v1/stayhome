import { useEffect } from 'react';
import './marker.css';
import { roomId } from '../../../store/userAction';
import store from '../../../store';

export default function Marker({
  positions,
  map,
  priceAndId,
}: {
  positions: Array<any>;
  map?: google.maps.Map;
  priceAndId: Array<any>;
}) {
  const dispatch = store.useAppDispatch();

  let marker = [];
  useEffect(() => {
    (() => {
      for (let i = 0; i < positions.length; i++) {
        marker[i] = new google.maps.Marker({
          map: map,
          position: positions[i],
          animation: google.maps.Animation.DROP,
          label: {
            text: `$${priceAndId[i].price}`,
            className: 'mark',
          },
          icon: 'https://res.cloudinary.com/dpsbq1odp/image/upload/v1648997369/Webp.net-resizeimage_1_w9yney.png',
          optimized: false,
        });
        marker[i].addListener('click', () => {
          dispatch(roomId(priceAndId[i].id));
        });
      }
    })();
  });

  return null;
}
