import { hash } from "bcryptjs";
import prismaClient from "../../prisma";
import { UserRequest } from "../../models/interfaces/user/UserRequest";

class CreateUserService {
    async execute({ name, email, password, is_admin, roles, status }: UserRequest) {
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
                is_admin: is_admin,
                roles: roles,
                status: status
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