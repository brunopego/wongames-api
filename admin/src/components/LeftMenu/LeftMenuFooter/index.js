import React from 'react';

import Wrapper from './Wrapper';

function LeftMenuFooter() {
  // PROJECT_TYPE is an env variable defined in the webpack config
  // eslint-disable-next-line no-undef
  const projectType = PROJECT_TYPE;

  return (
    <Wrapper>
      <div className="poweredBy">
        <p>Powered by </p>
        <a key="website" href="https://brunopego.dev" target="_blank" rel="noopener noreferrer">
          Bruno Lacerda
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
