import { hash } from "bcryptjs";
import prismaClient from "../../prisma";
import { UserRequest } from "../../models/interfaces/user/UserRequest";

class CreateUserService {
    async execute({ name, email, password }: UserRequest) {
        if (!email) {
            throw new Error("Email incorreto");
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (userAlreadyExists) {
            throw new Error("Email already exist");
        }

        const passwordHash = await hash(password, 8);

        const user = prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash,
                is_admin: '0',
                roles: '0',
                status: '1'
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })

        return user;
    }
}

export { CreateUserService };