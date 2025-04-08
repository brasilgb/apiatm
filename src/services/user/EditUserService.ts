import { EditUserRequest } from "../../models/interfaces/user/EditUserRequest";
import prismaClient from "../../prisma";

class EditUserService {
    async execute({ user_id, name, email, password, roles, is_admin }: EditUserRequest) {
        const userEdited = await prismaClient.user.update({
            where: {
                id: user_id
            },
            data: {
                name: name,
                email: email,
                password: password,
                roles: roles,
                is_admin: is_admin
            }
        });

        return userEdited;
    }
}
export { EditUserService };