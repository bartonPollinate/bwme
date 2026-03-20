export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <p>&copy; {currentYear} Barton White</p>
        <img className="barcode" src="/barcode2.svg" alt="" aria-role="presentation" />
      </footer>
    </>
  )
}
