/* eslint-disable no-console */
const store = {};
/**
 * subscribers a callback for an event
 * @param {string} eventName - Name of the event to listen for.
 * @param {function} callback - Function to invoke when said event is fired.
 */

const subscribe = (eventName, callback) => {
    if (!store[eventName]) {
        store[eventName] = new Set();
    }
    store[eventName].add(callback);
};

const publish = (eventName, payload) => {
    console.log('store[eventName]=====>' + store[eventName] )
    if (store[eventName]) {
        store[eventName].forEach(callback => {
            console.log('callback===>  ' + callback);
            console.log('payload===> ' + payload);

            try {
               // callback(payload);
                console.log('callback(payload)  ' + callback(payload))

            } catch (error) {
                console.error(error);
            }
        });
    }

};

/**
 * unsubscribe a callback for an event
 * @param {string} eventName - Name of the event to unsubscribe from.
 * @param {function} callback - Function to unsubscribe.
 */
const unsubscribe = (eventName, callback) => {
    if (store[eventName]) {
        store[eventName].delete(callback);
    }
};

/**
 * Publish an event to listeners.
 * @param {string} eventName - Name of the event to publish.
 * @param {*} payload - Payload of the event to publish.
 */



export default {
    subscribe,
    unsubscribe,
    publish
};
