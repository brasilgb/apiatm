import prismaClient from "../../prisma";

class ListUserService {
    async execute() {
        const users = await prismaClient.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                password: true,
                is_admin: true,
                roles: true,
                status: true,
                createdAt: true,
                organizationId: true,
                companyId: true,
                Organization: {
                    select: { name: true}
                }
            }
        });
        return users;
    }
}
export { ListUserService };