const components = {};
components.homeScreen= `
<div class="add-collection-card">
    <nav>
        <div class="nav-bar-container">
            <div class="logo">
                    ECARD
            </div>
            <div class="list-main-navbar">
                <div class="navbar-item"><i class="fas fa-home"></i>Home</div>
                <div class="navbar-item"><i class="fas fa-plus"></i>Create</div>
                <div class="navbar-item "><i class="fas fa-user-circle"></i>User</div>
            </div>
        </div>
    </nav>
</div>
`;
components.loginScreen = `
<div class="container">
    <nav>
        <div class="nav-bar-container">
            <div class="logo">
              ECARD
            </div>
            <div class="list-main-navbar">
                <div class="navbar-item"><i class="fas fa-home"></i>Home</div>
            </div>
        </div>
    </nav>
</div>
      <div class="form-container">
        
        <form id="form-login">
        <div class="title">Sign in</div>
        <div class="input-wrapper">
        <label>Email</label>
        <input type="text" name="email" placeholder="Email">
        <div class="error" id="error-email"></div>
    </div>
    <div class="input-wrapper">
        <label>Password</label>
        <input type="password" name="password" placeholder="Password">
        <div class="error" id="error-password"></div>
    </div>
    <div class="submit-wrapper">
        <div>Don't have an account ? <span class="cursor-pointer"id="redirect-to-register">Register</span></div>
        <button class = "btn"type='submit'>Sign in</button>
    </div>
        </form>
      </div>
    </div>
`;
components.registerScreen = `
<div class="container">
    <nav>
        <div class="nav-bar-container">
            <div class="logo">
              ECARD
            </div>
            <div class="list-main-navbar">
              <div class="navbar-item"><i class="fas fa-home"></i>Home</div>
            </div>
        </div>
    </nav>
</div>
<div class="form-container">
    <form id="register-form">
      <div class="title">Register</div>
      <div class="name-wrapper">
          <div class="input-wrapper">
              <input type="text" name="firstName" placeholder="First Name...">
              <div class="error" id="error-first-name"></div>
          </div>
          <div class="input-wrapper">
              <input type="text" name="lastName" placeholder="Last Name...">
              <div class="error" id="error-last-name"></div>
          </div>
      </div>
      <div class="input-wrapper">
          <input type="text" name="email" placeholder="Email">
          <div class="error" id="error-email"></div>
      </div>
      <div class="input-wrapper">
          <input type="password" name="password" placeholder="Password">
          <div class="error" id="error-password"></div>
      </div>
      <div class="input-wrapper">
          <input type="password" name="confirmPassword" placeholder="Confirm Password">
          <div class="error" id="error-confirm-password"></div>
      </div>
      <div class="submit-wrapper">
          <div>Already have an account ? <span class="cursor-pointer"id="redirect-to-login">Login</span></div>
          <button class = "btn"type='submit' id = 'loginChatPage'>Register</button>
      </div>
  </form>
      </div>
    </div>
`;
