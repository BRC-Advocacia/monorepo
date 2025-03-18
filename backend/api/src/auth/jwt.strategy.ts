import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      signOptions: { expiresIn: 5 }, // Token expira em 1 hora
      secretOrKey: 'test', // Substitua pela mesma chave usada no JwtModule
    });
  }

  async validate(payload: any) {
    return await this.usersService.findOne(payload.username);
  }
}
