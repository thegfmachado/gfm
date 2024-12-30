import * as React from 'react';

export const convertTextToHTML = {
  item: (chunks: React.ReactNode) => <li>{chunks}</li>,
  list: (chunks: React.ReactNode) => (
    <ul className="list-inside list-disc space-y-2 md:space-y-1">{chunks}</ul>
  ),
  br: () => <br />,
};

