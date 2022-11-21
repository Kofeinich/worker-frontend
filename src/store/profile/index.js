import { configure, action, isObservable, makeAutoObservable, observable, toJS } from 'mobx';
import {
    RegistrationFormValues,
    JwtType,
    AxiosResponse,
    LoginFormInitialValues,
    ProfileInfoValues
} from '../../views/auth/types';
import { observer } from 'mobx-react-lite';
import * as profileApi from '../../api/profile';
import { errorToast } from "../../components/alerts/fail";

class WorkerStore {
    workerInfo = {
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

    }
    constructor() {
        makeAutoObservable(this);
    }

    @action
    setSettingActive = () => {
        this.isProfileActive = {
            setting: true,
            yourBets: false,
            autoBets: false,
            notificationJournal: false,
        };
    }

    @action
    setYourBetsActive = () => {
        this.isProfileActive = {
            setting: false,
            yourBets: true,
            autoBets: false,
            notificationJournal: false,
        };
    }

    @action
    setAutoBetsActive = () => {
        this.isProfileActive = {
            setting: false,
            yourBets: false,
            autoBets: true,
            notificationJournal: false,
        };
    }

    @action
    setNotificationUrlActive = () => {
        this.isProfileActive = {
            setting: false,
            yourBets: false,
            autoBets: false,
            notificationJournal: true,
        };
    }

    @action
    getProfileInfo = (token) => {
        return profileApi.getProfileInfoApi(token).then(res => {
            const min = convertDateToMinutes(res.notificationDelay);
            this.profileInfo = {
                notificationDelay: min,
                accessKey: res.accessKey,
                email: res.email,
                companyName: res.companyName,
            }
        });
    }

    @action
    saveUserProfileInfo = (token, userData) => {
        return profileApi.saveUserProfileInfoApi(token, userData).then(res => {
            if(res?.status === 200) {
                this.responseStatus = {
                    code: res.status,
                    message: 'Данные успешно изменились!'
                }
                return res;
            } else {
                this.responseStatus = {
                    code: res?.status,
                    message: res?.data
                }
            }
        });
    }
}

export default new WorkerStore();