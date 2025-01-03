export default function Alert({ alert }) {
  return (alert && 
    <div class={`alert alert-${alert.type}`} role="alert">
      {alert.message}  
    </div>
  )
}