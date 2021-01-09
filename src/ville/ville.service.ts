import { HttpService,Injectable } from '@nestjs/common';


@Injectable()
export class VilleService {
    constructor(private httpService: HttpService){}
    
    async getAll() {
        const response = await this.httpService.get('https://unpkg.com/codes-postaux@3.3.0/codes-postaux.json').toPromise();
        return response.data;
    }
}