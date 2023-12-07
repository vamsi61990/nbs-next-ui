declare global {
    interface Object {
      hasOwnProperty<K extends string>(v: K): this is Record<K, any>;
    }
  }