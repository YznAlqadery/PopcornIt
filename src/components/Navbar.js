export function Navbar({ children }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="nav-heading">PopcornIt</h1>
        {children}
      </div>
    </nav>
  );
}
