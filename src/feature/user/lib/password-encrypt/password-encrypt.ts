import { hashSync } from 'bcrypt';

export default function (passwordPlain: string) {
    return hashSync(passwordPlain, 10);
}
