import React, { useState } from 'react'

const CollapseText = ({desc}) => {
  console.log("descdesc",desc)
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  }
  return (
    <p className='desc'>
      {`${isExpanded ? desc:desc.slice(0, 170)}...`}
      {desc.length > 100 && (
        <span>
          {isExpanded ? (
            <button className='read-more' onClick={toggleExpand}>Read Less</button>
          ) : (
            <button className='read-more' onClick={toggleExpand}>Read More</button>
          )}
        </span>
      )}
    </p>
  )
}

export default CollapseText