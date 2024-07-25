import 'package:mason/mason.dart';
import 'package:chalkdart/chalk.dart';

void run(HookContext context) async {
  logSentryConfiguration(context: context);
}

void logSentryConfiguration({required HookContext context}) {
  print(chalk.blue(
    '🛠️ To configure Sentry, add values to the following environment variables:',
  ));

  String applicationName = context.vars['applicationName'];

  print('   ${applicationName.constantCase}_SENTRY_DNS');
  print('   ${applicationName.constantCase}_SENTRY_TRACE_SAMPLE_RATE');
  print('   ${applicationName.constantCase}_SENTRY_REPLAY_SAMPLE_RATE');
  print(
      '   ${applicationName.constantCase}_SENTRY_REPLAY_ON_ERROR_SAMPLE_RATE');
  print('   ${applicationName.constantCase}_SENTRY_TRACE_PROPAGATION_TARGETS');
  print('   ${applicationName.constantCase}_BASE_API_URL');
  print('   ${applicationName.constantCase}_FORCE_UPDATE_INFORMATION_PARAM\n');
}
