import React from 'react';
import { ReactComponent as TwitterIcon } from '../../assets/icons/tw.svg';
import { ReactComponent as FbIcon } from '../../assets/icons/facebook.svg';
import { ReactComponent as OkIcon } from '../../assets/icons/ok.svg';
import { ReactComponent as VkIcon } from '../../assets/icons/vk.svg';

function Sharing() {
  const icons = [<TwitterIcon />, <FbIcon />, <OkIcon />, <VkIcon />];
  return (
    <section>
      <h2>1. Поделись с друзьями</h2>
      {icons.map((icon) => (
        <button type="button">
          {icon}
        </button>
      ))}
    </section>
  );
}

export default Sharing;
