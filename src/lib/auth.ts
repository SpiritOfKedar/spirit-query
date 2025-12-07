import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import db from "./db";
import { env } from "./env";

export const auth = betterAuth({
    database: prismaAdapter(db, {
        provider: "postgresql",
    }),

    socialProviders: {
        github: {
            enabled: true,
            clientId: env.GITHUB_CLIENT_ID!,
            clientSecret: env.GITHUB_CLIENT_SECRET!,
        },
        google: {
            enabled: true,
            clientId: env.GOOGLE_CLIENT_ID!,
            clientSecret: env.GOOGLE_CLIENT_SECRET!,
        },
    }
});