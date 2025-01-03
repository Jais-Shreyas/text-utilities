export default function Alert({ alert }) {
  return (
    <div style={{height: '1rem'}}>
      {alert &&
        <div className={`alert alert-${alert.type}`} role="alert">
          {alert.message}
        </div>}
    </div>
  )
}