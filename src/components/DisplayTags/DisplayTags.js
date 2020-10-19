import React from 'react';
import { Tag, TagGroup } from 'rsuite'

const DisplayTags = props => {
  return (
    <TagGroup>
      {props.tags.map((tag) => {
        return (<Tag color="violet" id={tag.idetiqueta}>{tag.etiqueta}</Tag>)
      })
      }
    </TagGroup>
  )
}

export default DisplayTags