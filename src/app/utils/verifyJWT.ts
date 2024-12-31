import jwt, { JwtPayload } from "jsonwebtoken";

import AppError from "../errors/AppError";
import httpStatus from "http-status";

export const createToken = (
  jwtPayload: {
    _id?: string;
    name: string;
    email: string;
  },
  secret: string,
  expiresIn: string
) => {
  return jwt.sign(jwtPayload, secret, {
    expiresIn,
  });
};

export const verifyToken = (
  token: string,
  secret: string
): JwtPayload | Error => {
  try {
    return jwt.verify(token, secret) as JwtPayload;
  } catch (error: any) {
    throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
  }
};
