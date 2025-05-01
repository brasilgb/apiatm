import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import prismaClient from "../../prisma";
import { AuthRequest } from "../../models/interfaces/user/auth/AuthRequest";

class AuthUserService {
    async execute({ email, password }: AuthRequest) {

        if (!email) {
            throw new Error("Digita email");
        }
        if (!password) {
            throw new Error("Digita senha");
        }

        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        });

        if (!user) {
            throw new Error("Não encontrado email e/ou senha");
        }

        const passwordMatch = await compare(password, user?.password);

        if (!passwordMatch) {
            throw new Error("Senha errada");
        }
        const token = sign({
            name: user?.name,
            email: user?.email
        },
            process.env.JWT_SECRET as string,
            {
                subject: user?.id,
                expiresIn: "1d"
            }
        );

        return {
            user: {
                id: user?.id,
                name: user?.name,
                email: user?.email,
                is_admin: user?.is_admin,
                roles: user?.roles,
                created_at: user?.createdAt,
                organizationId: user?.organizationId,
                companyId: user?.companyId,
                token: token
            }
        };
    }
}

export { AuthUserService };
