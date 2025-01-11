import React, { useState } from 'react'

function ItemListManager() {
  // Items State
  const [items, setItems] = useState([])
  // Input state
  const [inputValue, setInputValue] = useState('')

  // Function to handle adding list items
  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue])
      setInputValue('')
    }
  }

  // Function to handle removing items from the list
  const handleRemoveItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index)
    setItems(updatedItems)
  }

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        maxWidth: '400px',
        margin: 'auto',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <h1 style={{ color: '#333' }}>Item List</h1>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Enter item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{
            padding: '10px',
            width: '100%',
            boxSizing: 'border-box',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginBottom: '10px',
          }}
        />
      </div>
      <button
        onClick={handleAddItem}
        style={{
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          backgroundColor: 'lightgreen',
          color: 'white',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        Add Item
      </button>
      <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#fff',
              padding: '10px',
              margin: '5px 0',
              borderRadius: '5px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              wordWrap: 'break-word',
              wordBreak: 'break-word',
            }}
          >
            <span style={{ flex: 1, overflowWrap: 'break-word' }}>{item}</span>
            <button
              onClick={() => handleRemoveItem(index)}
              style={{
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '25px',
                height: '25px',
                cursor: 'pointer',
                fontWeight: 'bold',
                textAlign: 'center',
                lineHeight: '25px',
              }}
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ItemListManager
