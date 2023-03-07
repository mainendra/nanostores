import { useStore } from '@nanostores/react';
import { config, replaceConfig, updateConfig } from '../store/config';

export function ConfigSection() {
  const configVal = useStore(config);
  return (
    <div>
      <span>
        Feature flags{' '}
        {`Home: ${configVal.home}, OnDemand: ${configVal.ondemand}, LiveTV: ${configVal.liveTV}`}
      </span>
      <br />
      <br />
      <button
        onClick={() =>
          replaceConfig({
            home: !configVal.home,
            ondemand: !configVal.ondemand,
            liveTV: !configVal.liveTV,
          })
        }
      >
        Toggle All Config
      </button>
      <button onClick={() => updateConfig('home', !configVal.home)}>
        Toggle Home
      </button>
      <button onClick={() => updateConfig('ondemand', !configVal.ondemand)}>
        Toggle OD
      </button>
      <button onClick={() => updateConfig('liveTV', !configVal.liveTV)}>
        Toggle LiveTV
      </button>
    </div>
  );
}
