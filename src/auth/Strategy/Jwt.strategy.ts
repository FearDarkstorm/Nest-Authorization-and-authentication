import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy,ExtractJwt } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, /* our strategy name whatever 
you want to name it*/ ) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true,
            secretOrKey: 'Real secret'

        });
    }
    async validate(payload:any) {
        return payload
        //it will basically attach our payload to user request
        //req.user = payload
    }

}
