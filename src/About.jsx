export default function About({dark}) {
  return (
    <div className={`container mt-3 text-${dark ? 'light' : 'dark'}`}>
      <h2>About</h2>
      <p>This is a simple text utility app built using React. It provides various text operations like converting text to uppercase, lowercase, removing extra spaces, extracting email IDs, counting characters, and copying the text to the clipboard.</p>
      <p>It also provides a dark mode feature that can be toggled using the button in the navbar.</p>
      <p>Feel free to use this app and provide your valuable feedback.</p>
      <p>Created by: SHREYAS JAISWAL </p>
    </div>
  )
}