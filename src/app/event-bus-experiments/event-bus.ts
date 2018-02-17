import * as _ from 'lodash';

export const LESSONS_LIST_AVAILABLE = 'NEW_LIST_AVAILABLE';
export const ADD_NEW_LESSON = 'NEW_LIST_AVAILABLE';

export interface Observer {
    notify(data: any);
}

interface Subject {
    registerObserver(eventType: string, obs: Observer);
    unregisterObserver(eventType: string, obs: Observer);
    notifyObservers(eventType: string, data: any);
}

class EventBus implements Subject {
    private observers: { [key: string]: Observer[] } = {};


    registerObserver(eventType: string, obs: Observer) {
        this.observerPerEventType(eventType).push(obs);
    }
    unregisterObserver(eventType: string, obs: Observer) {
        // _.remove(this.observers, (el) => {
        //     return el === obs
        // });
        _.remove(this.observerPerEventType(eventType), el => el === obs);
    }
    notifyObservers(eventType: string, data: any) {
        this.observerPerEventType(eventType).forEach(obs => obs.notify(data));
    }


    // this method is used to return an observer[] array,  based on the eventType
    private observerPerEventType(eventType: string): Observer[] {
        const obseverType = this.observers[eventType];
        if (!obseverType) {
            this.observers[eventType] = [];
        }
        return this.observers[eventType];
    }
};

export const GobalEventBus = new EventBus();
