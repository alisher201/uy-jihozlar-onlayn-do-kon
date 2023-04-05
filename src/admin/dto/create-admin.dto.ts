export class CreateAdminDto {
    name:string;
    email:string;
    hashed_password:string;
    is_create:boolean;
    is_active:boolean;
    hashed_refresh_token:string;
}
