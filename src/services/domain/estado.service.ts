import { EstadoDTO } from './../../models/estado.dto';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { CategoriaDTO } from "../../models/categoria.dto";

@Injectable()
export class EstadoService {

    constructor(public http:HttpClient) {
    }

    findAll() : Observable<CategoriaDTO[]> {
        return this.http.get<EstadoDTO[]>(`${API_CONFIG.baseUrl}/estados`)
    }
}