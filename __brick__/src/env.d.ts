interface ImportMetaEnv {
  readonly PRODUCTION: string;
  readonly {{applicationName.constantCase()}}_SENTRY_DNS: string;
  readonly {{applicationName.constantCase()}}_SENTRY_TRACE_SAMPLE_RATE: string;
  readonly {{applicationName.constantCase()}}_SENTRY_REPLAY_SAMPLE_RATE: string;
  readonly {{applicationName.constantCase()}}_SENTRY_REPLAY_ON_ERROR_SAMPLE_RATE: string;
  readonly {{applicationName.constantCase()}}_SENTRY_TRACE_PROPAGATION_TARGETS: string;
  readonly {{applicationName.constantCase()}}_BASE_API_URL: string;
  readonly {{applicationName.constantCase()}}_FORCE_UPDATE_INFORMATION_PARAM: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
