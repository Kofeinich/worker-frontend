import { action, makeAutoObservable,} from 'mobx';
import * as profileApi from '../../api/profile';

class WorkerStore {
    workersInfo = [{
        id: 0,
        name: "",
        coordinates: {
          x: 0,
          y: 0,
        },
        creationDate: "",
        salary: "",
        startDate: "",
        endDate: "",
        status: "",
        organization : {
            fullName: "",
            type: "",
            postalAddress: {
                street: "",
                zipCode: "",
                town: {
                    x: 0,
                    name: "",
                }
            }
        }

    }]
    constructor() {
        makeAutoObservable(this);
    }

    @action()
    getListOfWorkerInfo = () => {
        return profileApi.getListOfWorkers().then(res => {
            this.workerInfo = [{
                id: 0,
                name: "",
                coordinates: {
                    x: 0,
                    y: 0,
                },
                creationDate: "",
                salary: "",
                startDate: "",
                endDate: "",
                status: "",
                organization : {
                    fullName: "",
                    type: "",
                    postalAddress: {
                        street: "",
                        zipCode: "",
                        town: {
                            x: 0,
                            name: "",
                        }
                    }
                }
            }]
        });
    }
}

export default new WorkerStore();