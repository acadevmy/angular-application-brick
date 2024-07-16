import 'package:mason/mason.dart';

void run(HookContext context) async {
  logSentryConfiguration(context: context);
}

void logSentryConfiguration({required HookContext context}) {
  context.logger.info(
    '🛠️ To configure sentry, add values to the following environment variables:',
  );

  String applicationName = context.vars['applicationName'];

  context.logger.write(' ${applicationName}_SENTRY_DNS');
  context.logger.write(' ${applicationName}_SENTRY_TRACE_SAMPLE_RATE');
  context.logger.write(' ${applicationName}_SENTRY_REPLAY_SAMPLE_RATE');
  context.logger.write(
    ' ${applicationName}_SENTRY_REPLAY_ON_ERROR_SAMPLE_RATE',
  );
  context.logger.write(' ${applicationName}_SENTRY_TRACE_PROPAGATION_TARGETS');
  context.logger.write(' ${applicationName}_BASE_API_URL');
  context.logger.write(' ${applicationName}_FORCE_UPDATE_INFORMATION_PARAM');
}
