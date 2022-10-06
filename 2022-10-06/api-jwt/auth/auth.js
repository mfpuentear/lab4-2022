import * as dotenv from "dotenv";
dotenv.config();
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { Cuenta } from "../models/index.js";

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new Strategy(jwtOptions, async (payload, next) => {
    const cuenta = await Cuenta.findOne({
      where: { usuario: payload.usuario },
    });
    if (cuenta) {
      next(null, cuenta);
    } else {
      next(null, false);
    }
  })
);
