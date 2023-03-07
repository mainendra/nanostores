import { persistentMap } from '@nanostores/persistent';
import { onSet } from 'nanostores';

export interface ConfigType {
  home: boolean;
  ondemand: boolean;
  liveTV: boolean;
}

const encoder = {
  encode: JSON.stringify,
  decode: JSON.parse,
};

export const config = persistentMap<ConfigType>(
  'config:', // key prefix
  {
    home: false,
    ondemand: false,
    liveTV: false,
  },
  encoder
);

export function updateConfig<T extends keyof ConfigType>(
  key: T,
  value: ConfigType[T]
) {
  config.setKey(key, value);
}

export function replaceConfig(newConfig: ConfigType) {
  config.set(newConfig);
}

onSet(config, (args) => {
  console.log(args);
});
