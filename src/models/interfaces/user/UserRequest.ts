export interface UserRequest {
    name: string;
    email: string;
    password: string;
    is_admin: boolean;
    roles: string;
    status: boolean;
    organizationId: string;
    companyId: string;
}