import User from "feature/user/model/user/user";
import passwordEncrypt from "feature/user/lib/password-encrypt/password-encrypt";

export async function add5k() {
    try {
        for (let i = 0; i < 5000; i++) {
            const user = new User({
                firstName: `Agenor${i}`,
                email: `teste${i}@teste.com`,
                lastName: `Girundino`,
                password: passwordEncrypt(`teste@${i}`),
            })

            await user.save()
        }
        console.info('5k Users added!')
    } catch (e) {
        console.error(e)
    }
}
