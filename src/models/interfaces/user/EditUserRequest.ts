export interface EditUserRequest {
    name: string;
    email: string;
    password: string;
    roles: string;
    status: string;
    is_admin: boolean;
    user_id: string;
    organizationId: string;
    companyId: string;
}