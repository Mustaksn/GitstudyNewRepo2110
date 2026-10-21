exports.LoginPage =
class LoginPage{

constructor(page){
  this.page=page;
  this.loginLink = '#login2';
  this.useremailInput = '#loginusername';
  this.passwordInput = '#loginpassword';
  this.loginbutton="button[onclick='logIn()']";

}
  async goToLoginPage(){
    await this.page.goto('https://www.demoblaze.com/index.html');
  }

  async Login(username,password){
    await this.page.locator(this.loginLink).click();
    await this.page.locator(this.useremailInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginbutton).click();


  }


}