import { useRef, useState } from 'react'

export const CodeTaxCalculator = () => {
  const grossIncomeRef = useRef(null)
  const taxPercentRef = useRef(null)
  const [totalTax, setTotalTax] = useState(null) // State to store and display calculated tax

  const calculateNetIncome = () => {
    const grossIncome = grossIncomeRef.current?.valueAsNumber || 0
    const taxPercent = taxPercentRef.current?.valueAsNumber || 0
    const totalTaxAmount = grossIncome * (taxPercent / 100)

    setTotalTax(totalTaxAmount)
    console.log('Tax to pay:', totalTaxAmount)
  }

  return (
    <div>
      <h1>Tax Calculator</h1>
      <label htmlFor='grossIncome'>Gross Income:</label>
      <input
        type='number'
        name='grossIncome'
        id='grossIncome'
        defaultValue='0'
        min='1'
        ref={grossIncomeRef}
      />

      <label htmlFor='taxPercent'>Tax Percentage:</label>
      <input
        type='number'
        name='taxPercent'
        id='taxPercent'
        defaultValue='0'
        min='0'
        ref={taxPercentRef}
      />

      <button
        onClick={() => {
          calculateNetIncome()
        }}
      >
        Calculate Tax
      </button>

      {totalTax !== null && (
        <div>
          <h2>Total Tax to Pay: {totalTax}</h2>
        </div>
      )}
    </div>
  )
}
