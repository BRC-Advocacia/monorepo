import { Body, Controller, Post, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor (private readonly authService: AuthService) {}

    @Post("Login")
    async login(@Body() body: { username : string, password: string }) {
        const user = await this.authService.validateUser(body.username, body.password);

        if(!user) throw new UnauthorizedException("Credenciais inválidas");

        return this.authService.login(user);
    }
}
