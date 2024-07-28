import React from 'react'
import { ICategoryStructureProps } from './types'

function CategoryStructure({ data = [] }: ICategoryStructureProps) {
  if (data.length > 0) {
    return (
      <div>
        <ul className="category-structure">
          {data.map((category) => {
            if (category?.title && category?.items && category?.items?.length > 0) {
              return (
                <React.Fragment key={category.title}>
                  <li className="title">{category.title}</li>
                  {category.items.map((item) => (
                    <li className="list-item" key={item}>
                      {item}
                    </li>
                  ))}
                </React.Fragment>
              )
            }
            return null
          })}
        </ul>
      </div>
    )
  }

  return null
}

export default CategoryStructure
