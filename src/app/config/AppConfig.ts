
import { Injectable } from '@angular/core';

export interface IAppConfig {
    apiEndpoint: string;
}

@Injectable()
export class AppConfig {
    public readonly EXCHANGE_API_ENDPOINT: string = 'http://localhost:8080';
    public readonly API_MOCK_ENDPOINT: string = 'mock-domain/api';
}