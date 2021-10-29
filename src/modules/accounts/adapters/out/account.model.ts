export class Account {
    constructor(
        readonly id: string,
        readonly names: string,
        readonly surnames: string,
        readonly password: string,
        readonly countryCode: string,
        readonly phone: number,
        readonly photo: string,
    ) {}

    skipPassword() {
        const { password, ...rest } = this;
        return rest;
    }
}
