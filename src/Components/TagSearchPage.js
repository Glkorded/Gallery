import React from 'react'
import Gallery from "./Gallery";

const TagSearchPage = ({match}) =>

      <div>
        <Gallery
          tagSearch={match.params.tagUrl}
        />
      </div>

export default TagSearchPage