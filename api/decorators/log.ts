import 'reflect-metadata';

class log {

    static logger(target: Object, key: string, descriptor: TypedPropertyDescriptor<any>) {
        let orgMethod: Function = descriptor.value; // saving the original method closure

        descriptor.value = (...args: any[]) => { // overriding it 


            // before
            console.log('target', target);


            let data = Reflect.getMetadata('design:paramtypes', target, key)

            orgMethod.apply(this, args); // applying the method and giving it the args

            // after
            console.log('after the function');
        };

        return descriptor; // returning the new function descriptor
    }
}


export const logger = log.logger;