import { Locator, Page } from "@playwright/test";

export default class LoginPage {
    readonly emailInputBox: Locator;
    readonly passwordInputBox: Locator;
    readonly submitButton: Locator;

    constructor(public page: Page) {
        this.emailInputBox = page.locator("#exampleInputEmail1");
        this.passwordInputBox = page.locator("#exampleInputPassword1");
        this.submitButton = page.getByRole('button', { name: "Sign in" });
    }

    // Functions
    public async inputEmail(email: string) {
        await this.emailInputBox.fill(email);
    }

    public async inputPassword(password: string) {
        await this.passwordInputBox.fill(password);
    }

    public async clickSubmitButton() {
        await this.submitButton.click();
    }
}