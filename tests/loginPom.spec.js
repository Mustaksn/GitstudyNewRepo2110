const{test, except} = require('@playwright/test');
import{ LoginPage } from '../Pages/Login';
import{SelectProduct} from '../Pages/AddProductToCart';

test("Locating elements", async function({page}){
//Login
const login = new LoginPage(page)
await login.goToLoginPage();
await login.Login('pavanol', 'test@123');

//Addto cart
const HomePage = new SelectProduct(page);
await HomePage.addProductToCart("Samsung galaxy s6");
await HomePage.gotoCart();

await page.waitForTimeout(5000)


})