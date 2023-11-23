import React from 'react';
import Graphin, { Utils, Behaviors } from '@antv/graphin';
import iconLoader from '@antv/graphin-icons';

const { ZoomCanvas } = Behaviors;
const data = Utils.mock(4)
  .circle()
  .graphin();

const icons = Graphin.registerFontFamily(iconLoader);

data.nodes.forEach(node => {
  node.style = {
    ...node.style,
    icon: {
      type: 'font',
      fontFamily: 'graphin',
      value: icons.user,
    },
  };
});

const layout = {
  type: 'concentric',
};

export default () => {
  return (
    <div>
      <Graphin data={data} layout={layout} theme={{ mode: 'dark', primaryColor: '#D77622' }}>
        <ZoomCanvas disabled />
      </Graphin>
    </div>
  );
};
