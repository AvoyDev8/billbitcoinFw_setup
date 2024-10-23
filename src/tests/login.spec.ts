import { Page, test } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import data from '../data/loginData.json';
test.describe('login page test',()=>{

    let page:Page;
    let loginpage:LoginPage;

    test.beforeEach(async({browser})=>{
        page = await browser.newPage();
        loginpage = new LoginPage(page);
        page.goto('https://billbitcoins.com/app/v2/ui/',);
    })
    test(`${data.message}`,async()=>{

        await loginpage.inputEmail(data.email);
        await loginpage.inputPassword(data.passwrod);
        await loginpage.clickSubmitButton();
    })
})
