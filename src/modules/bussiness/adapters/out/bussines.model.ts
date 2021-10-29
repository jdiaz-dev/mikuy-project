export class Business {
    constructor(
        readonly id: string,
        readonly name: string,
        readonly description: string,
        readonly phone: string,
        readonly countryCode: string,
        readonly cellphone: string,
        readonly address: string,
        readonly city: string,
        readonly logo: string,
    ) {}
}
