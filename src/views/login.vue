<template>
    <div class="login-container">
      <div class="left-side">
        <img src="~@/assets/images/logo123.png" alt="Logo" class="logo" />
      </div>
      <div class="right-side">Login Page</div>
    </div>
  </template>
  
  <style scoped>
  .login-container {
    display: flex;
    height: 100vh;
  }
  
  .left-side {
    flex: 2; 
    background-image: url('~@/assets/images/bg3.png'); 
    background-size: cover;
    background-position: center;
  }
  
  .right-side {
    flex: 1; 
    background-color: white; 
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo {
  width: 120px; 
  margin-top: 20px;
  margin-right: 20px;
  }
  </style>
  