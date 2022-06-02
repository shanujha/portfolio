import Typing from 'react-typing-animation';

import React, { useEffect, useState } from 'react'

const TypeWriter = ({ style, content = "", }) => {
  return <Typing speed={100}>
    <span className={style ?? ''}>{content}</span>
  </Typing>
};

export default TypeWriter;