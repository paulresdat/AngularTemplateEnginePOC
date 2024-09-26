import { Observable } from "rxjs";

export abstract class IDataService {
    abstract setData(appId: number): void;
    public abstract data$: Observable<any>;
}