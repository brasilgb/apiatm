export interface EditUserRequest {
    name: string;
    email: string;
    password: string;
    roles: string;
    status: string;
    is_admin: string;
    user_id: string;
}