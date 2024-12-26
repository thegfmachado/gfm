import * as React from 'react';

export const convertTextToHTML = {
  item: (chunks: React.ReactNode) => <li>{chunks}</li>,
  list: (chunks: React.ReactNode) => (
    <ul className="list-inside list-disc">{chunks}</ul>
  ),
  br: () => <br />,
};

