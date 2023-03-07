import { map, onSet } from 'nanostores';

export interface ConfigType {
  home: boolean;
  ondemand: boolean;
  liveTV: boolean;
}

export const config = map<ConfigType>({
  home: false,
  ondemand: false,
  liveTV: false,
});

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
