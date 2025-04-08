import prismaClient from "../../prisma";

interface DetailUserServiceRequest {
    user_id: string;
}

class DetailUserService {
    async execute({ user_id }: DetailUserServiceRequest) {
        if (user_id) {
            const user = await prismaClient.user.findFirst({
                where: {
                    id: user_id
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    status: true
                }
            });

            return user;
        }
    }
}

export { DetailUserService };