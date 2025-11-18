import React from 'react'
import { cocktailLists, mockTailLists } from '../../constants/index.js'

const Menu = () => {
  return (
    <section id="menu">
      <h2>Our Cocktails and Mocktails</h2>
      
      <div className="flex flex-col md:flex-row md:gap-8 gap-4 mt-8">
        {/* Cocktails Section */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4">Cocktails</h3>
          <ul className="space-y-4">
            {cocktailLists.map((cocktail, index) => (
              <li key={index}>
                <div className="font-semibold text-lg">{cocktail.name}</div>
                <div className="text-sm text-gray-600 mt-1">{cocktail.ingredients}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Mocktails Section */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4">Mocktails</h3>
          <ul className="space-y-4">
            {mockTailLists.map((mocktail, index) => (
              <li key={index}>
                <div className="font-semibold text-lg">{mocktail.name}</div>
                <div className="text-sm text-gray-600 mt-1">{mocktail.ingredients}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Menu