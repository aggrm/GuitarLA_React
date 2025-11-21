import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
  order : OrderItem[],
  tip: number
}
export default function OrderTotals({order, tip} : OrderTotalsProps) {
  
  const subTotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
  const tipAmout = useMemo(() => subTotalAmount * tip, [tip, order])
  const totalAmout = useMemo(() => subTotalAmount + tipAmout, [tip, order])
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y propinas</h2>
        <p>Subtotal a pagar: {''}
          <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
        </p>
        <p>Propina: {''}
          <span className="font-bold">{formatCurrency(tipAmout)}</span>
        </p>
        <p>Total a pagar: {''}
          <span className="font-bold">{formatCurrency(totalAmout)}</span>
        </p>
      </div>
        

      <button></button>
    </>
  )
}
