import React from 'react'
import { ICategoryStructureProps } from './types'

function CategoryStructure({}: ICategoryStructureProps) {
  return (
    <div>
      <ul className="category-structure">
        <li className="title">SERVER SAHİBİ</li>
        <li className="list-item">Mert Cengiz</li>
        <li className="title">COMA</li>
        <li className="list-item">[COMA] Cixcocuk97</li>
        <li className="title">TAKIM LİDERİ</li>
        <li className="list-item">[TL] Yunus Emre</li>
        <li className="list-item">[TL] Phoenix</li>
        <li className="title">GAME ADMİN</li>
        <li className="list-item">[GA] Mami</li>
        <li className="title">GAME MASTER</li>
        <li className="list-item">[GM] Rowdy</li>
        <li className="list-item">[GM] Heiwea</li>
      </ul>
    </div>
  )
}

export default CategoryStructure
