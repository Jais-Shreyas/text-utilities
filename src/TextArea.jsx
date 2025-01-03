export default function TextArea({value, color}) {
  return (
    <div style={{whiteSpace: 'pre', backgroundColor: color, padding: '1rem', borderRadius: '0.5rem', margin: '0.5rem 0', width: 'auto'}}>
      <code style={{color: 'black', fontSize: '1rem'}}>{value}</code>
    </div>
  )
}