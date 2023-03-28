import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as runtime from 'react/jsx-runtime';
import { compileSync, runSync } from '@mdx-js/mdx';

function compileMDX(mdx) {
  const code = String(
    compileSync(mdx, {
      outputFormat: 'function-body',
      development: false,
    })
  );

  return code;
}

function Article(props) {
  const [content, setContent] = useState();

  const {
    allMdx: { nodes },
  } = useStaticQuery(graphql`
    {
      allMdx {
        nodes {
          id
          excerpt(pruneLength: 250)
          body
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  `);

  useEffect(() => {
    // props.data_for_blocks.body is the raw MDX body
    const { body } = nodes[0];
    const code = compileMDX(body);

    const { default: Content } = runSync(code, runtime);
    setContent(Content());
  }, []);

  return <div>{content && content}</div>;
}

export default Article;
