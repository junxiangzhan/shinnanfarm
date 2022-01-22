import { AxiosResponse } from "axios";

interface store extends Object {
    request ( name: string ): Promise<AxiosResponse>
}

export default store;