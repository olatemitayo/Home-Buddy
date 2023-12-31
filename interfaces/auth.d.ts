import { Roles } from "@prisma/client";
import { JWTPayload } from "jose";

declare type VerifyObjectTypes = {
    idToken: any;
    audience: string;
}

declare interface AuthPayload extends JWTPayload {
    id: string;
    name: string;
    email: string;
    phoneNumber: number;
    image: string;
    role: Roles
}

declare type User = {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    emailVerified: Date;
    image: string;
    role: Roles
}