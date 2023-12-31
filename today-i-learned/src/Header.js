function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="identifiers">
          <img
            src="logo.png"
            height="68"
            width="68"
            alt="Today I Learned Logo"
          />
          <h1>TODAY I LEARNED</h1>
        </div>
        <button className="btn btn-large btn-form">Post a Fact</button>
      </div>
    </header>
  );
}

export default Header;
