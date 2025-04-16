import { hash } from "bcryptjs";
import { EditUserRequest } from "../../models/interfaces/user/EditUserRequest";
import prismaClient from "../../prisma";

class EditUserService {
    async execute({ user_id, name, email, password, roles, is_admin, organizationId, companyId }: EditUserRequest) {

            const passwordHash = await hash(password, 8);

        const user = await prismaClient.user.findUnique({
            where: {
                id: user_id,
            },
            select: {
                id: true,
                email: true,
                password: true
            },
        });

        if (user.email === email && user.id === user_id) {

            const userEdited = await prismaClient.user.update({
                where: {
                    id: user_id
                },
                data: { 
                    name: name,
                    email: email,
                    password: password === " " ? user.password : passwordHash,
                    roles: roles,
                    is_admin: is_admin,
                    organizationId: organizationId,
                    companyId: companyId
                }
            });

            console.log(userEdited);
        } else {
            return "Este e-mail já está em uso";
        }
    }
}
export { EditUserService };